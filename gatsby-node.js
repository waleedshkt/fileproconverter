const path = require("path");
const pageData = require("./src/data/final-info.json");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if(getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false
        });
    }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const pageTemplate = path.resolve("src/templates/home/index.js");

    pageData.forEach((info, i) => {
        createPage({
            path: info.path,
            component: pageTemplate,
            context: {
                data: info
            }
        });
    });
};