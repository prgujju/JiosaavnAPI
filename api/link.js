const axios = require('axios')

module.exports = async(req, res) => {
    const reqLink = req.query.query
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    var songId = await getId(reqLink)
    if (songId == "error") res.json({ result: "false" })

    axios({
        method: 'get',
        url: `https://www.instagram.com/${songId}/?__a=1`
    })

    .then(async function(response) {
            var data = JSON.parse(JSON.stringify(response.data).replace(songId, "TempID").replace(/&amp;/gi, "&").replace(/&quot;/gi, "'").replace(/&copy;/gi, "©")).TempID
            res.json({
                id: data.graphql.user.full_name,
                
            })
        })
        .catch(function(error) {
            res.json({ result: "false" })
        })
}

async function getId(reqLink) {
    return axios({
        method: 'get',
        url: reqLink
    })

    .then(async function(dom) {
            return dom.data.split('"song":{"type":"')[1].split('","image":')[0].split('"')[8];
        })
        .catch(function(domError) {
            return "error"
        })
}
