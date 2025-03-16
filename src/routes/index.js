const imageNetwork = require('../network/imagesNetwork')

function routes (app) {
    app.use("/images", imageNetwork)
}

module.exports = routes;
