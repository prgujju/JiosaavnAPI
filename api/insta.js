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
            var data = JSON.parse(JSON.stringify(response.data)
            res.json({
                  id: data.graphql..user.full_name,
              
            })
        })
        .catch(function (error) {
            res.json({ result: "false" })
        })
}
