const Link = require('../models/Link')

module.exports = {
    getAll: async (req, res) => {
        let docs = await Link.find({})
        
        res.send(docs)
    },

    getOne: async (req, res) => {
        let title = req.params.title

        try {
            let doc = await Link.findOne({ title })
            res.redirect(doc.url)
        } catch (err) {
            res.send(err)
        }
    }
}