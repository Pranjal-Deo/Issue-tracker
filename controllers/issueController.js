const Issue = require('../models/issue');
const Project = require('../models/project');

exports.createIssuePage = async (req, res) => {
    const projectId = req.params.projectId;

    try {
        const project = await Project.findById(projectId);
        res.render('pages/create_issue', { project: project });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching project");
    }
};

exports.createIssue = async (req, res) => {
    const projectId = req.body.projectId;

    const newIssue = new Issue({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels.split(',').map(label => label.trim()),
        author: req.body.author,
        projectId: projectId
    });

    try {
        await newIssue.save();
        res.redirect(`/projects/${projectId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating issue");
    }
};
