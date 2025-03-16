const Controller = require('../controllers/imageControllers')
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }, )

const router = express.Router();

async function onNewImage(request, response) {
    const file = request.file;
    const result = await Controller.onNewImages(file.path);
    response.send(result);
}

async function deleteImage(request, response) {
    const imageId = request.params.imageId;
    const result = await Controller.deleteImages(imageId);
    response.send(result.data);
}

router.post('/upload', upload.single('file'), onNewImage)
router.delete('/:imageId', deleteImage)

module.exports = router