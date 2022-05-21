const Configuration = require('../models/Configuration');
const Band = require('../models/Band');
const Journal = require('../models/Journal');
const Project = require('../models/Project');
const PortofolioVideo = require('../models/PortofolioVideo');
const PortofolioImage = require('../models/PortofolioImage');
const Category = require('../models/Category');

module.exports = {
    landingPage : async (req, res) => {
        try {
            const configuration = await Configuration.find();
            const band = await Band.find()
                .select('_id name city country coverUrl')
                .limit(3);
            const journal = await Journal.find()
                .select('_id title journalContentFirst coverUrl created_at')
                .limit(4);
            res.status(200).json({ 
                configuration, 
                band, 
                journal 
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    bandPage : async (req, res) => {
        try {
            const {id} = req.params;
            const band = await Band.findOne({_id : id});
            res.status(200).json({ 
                ...band._doc 
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    projectPage : async (req, res) => {
        try {
            const project = await Project.find();
            res.status(200).json({ project });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    portofolioPage : async (req, res) => {
        try {
            const portofolioVideo = await PortofolioVideo.find()
                .sort({ "year" : "desc"});
            const portofolioImage = await PortofolioImage.find()
                .sort({ "year" : "desc"});
            res.status(200).json({ 
                portofolioVideo,
                portofolioImage
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    journalPage : async (req, res) => {
        try {
            const journal = await Journal.find()
                .select('_id title categoryId coverUrl')
                .populate({
                    path: 'categoryId',
                    select: '_id name'
                })
                .sort({ "createdAt" : "desc"});
            res.status(200).json({ 
                journal
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    journalDetail : async (req, res) => {
        try {
            const { id } = req.params;
            const journal = await Journal.findOne({ _id : id })
                .populate({
                    path: 'categoryId',
                    select: '_id name'
                })
                .populate({
                    path: 'imageId',
                    select: '_id imageUrl'
                });
            res.status(200).json({ 
                ...journal._doc
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    categoryPage : async (req, res) => {
        try {
            const category = await Category.find()
                .populate({
                    path: 'journalId',
                    select: '_id title author coverUrl',
                    options: { sort: {createdAt: "desc"}}
                });
            res.status(200).json({ 
                category
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },

    categoryDetailPage : async (req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findOne({ _id : id })
                .populate({
                    path: 'journalId',
                    select: '_id title author coverUrl',
                    options: { sort: {createdAt: "desc"}}
                });
            res.status(200).json({ 
                ...category._doc
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Internal Server Error"});
        }
    },
}