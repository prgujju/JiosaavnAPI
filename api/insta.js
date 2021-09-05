const axios = require('axios')

module.exports = async (req, res) => {
    const reqId = req.query.id
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    axios({
        method: 'get',
        url: `https://www.instagram.com/${reqId}/?__a=1`
    })

        .then(async function (response) {
            var data = JSON.parse(JSON.stringify(response.data).replace(reqId, "TempID").replace(/&amp;/gi, "&").replace(/&copy;/gi, "©")).TempID
            res.json({
                 user = input(c+'username : ')
    req = r.get('https://instagram.com/'+user+'/?__a=1')
    name = req.json()['graphql']['user']['full_name']
    bio = req.json()['graphql']['user']['biography']
    url = req.json()['graphql']['user']['external_url']
    post = req.json()['graphql']['user']['edge_owner_to_timeline_media']['count']
    folwd = req.json()['graphql']['user']['edge_followed_by']['count']
    folw = req.json()['graphql']['user']['edge_follow']['count']
            })
        })
        .catch(function (error) {
            res.json({ result: "false" })
        })
}
