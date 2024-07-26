const Project = require('../models/project');
const Issue = require('../models/issue');

exports.getHomePage = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.render('pages/home', { projects: projects });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching projects");
    }
};

exports.createProjectPage = (req, res) => {
    res.render('pages/create_project');
};

exports.createProject = async (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    });

    try {
        await newProject.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating project");
    }
};

exports.getProjectDetail = async (req, res) => {
    const projectId = req.params.id;

    try {
        const project = await Project.findById(projectId);
        const issues = await Issue.find({ projectId: projectId });
        res.render('pages/project_detail', { project: project, issues: issues });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching project details");
    }
};
