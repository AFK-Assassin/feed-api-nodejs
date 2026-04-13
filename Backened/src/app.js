const express = require('express');
const multer = require('multer')
const app = express();
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.services')
const cors = require('cors')



const upload = multer({storage: multer.memoryStorage() })
app.use(express.json());
app.use(cors());



app.post('/create-post', upload.single("image") , async(req,res) => {
   
    /*
     used when you have to debug development phase
     console.log(req.body);
     console.log(req.file);
     console.log(resut);
     */

    const result = await uploadFile(req.file.buffer);

        const post = await postModel.create({
            image : result.url,
            caption : req.body.caption
        })

        res.status(200).json({
            message: "post added sucessfully",
            post
        })
        
  
})

app.get('/post',async (req,res) =>{

    const post = await postModel.find()
    
    return res.status(200).json({
            message:"note stored sucessfully",
            post
        })
})


module.exports = app