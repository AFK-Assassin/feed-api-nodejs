const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    
    privateKey: process.env.IMAGEKIT_KEY,
   
})

async function uploadFile(buffer) {
    console.log(buffer)
    
    const result = await imagekit.files.upload ({

        file: buffer.toString('base64'),
        fileName: `image_${Date.now()}.jpg`

    })
    
    return result;
}

module.exports = uploadFile;