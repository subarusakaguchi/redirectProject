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
    },
    
    addOne: async (req, res) => {
        const { title, description, url } = req.body
        let link = new Link({title, description, url})
        link.save().then(doc =>{res.send(doc)}).catch(err => {res.send(err)})
    },

    deleteOne: async (req, res) => {
        let id = req.params.id
        try {
            let doc = await Link.findByIdAndDelete(id)
            res.send(doc)
        } catch (err) {
            res.send(err)
        }
    },
    
    pageAdd: (req, res) => {
        res.render('add')
    },

    main: async (req, res) => {
        let links = await Link.find({})
        res.render('index', {links})
    }
}