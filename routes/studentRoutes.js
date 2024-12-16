const express = require("express");
const Student = require("../model/Student");
const router = express.Router();
const multer = require('multer');
 

// const storage = multer.diskStorage({
//     destination: (req , file , cb) => {
//         cb(null  , 'uploads/');
//     },
//     filename: (req  , file , cb) => {
//         const suffix = Date.now();
//         cb(null  , suffix + '-' + file.originalname);

//     }
// })


const storage = multer.memoryStorage();

const upload = multer({storage});


router.post("/create",upload.single('photo') ,  async (req, res) => {
    try {
      const {name , age , email , phone , address} = req.body;

    //   const photoPath = req.file ? req.file.path : null

    const photoPath = req.file ? req.file.buffer.toString('base64') : null;
  
  
      // Create a new Person document
      const newStudent = new Student(
        {
            name , age , email , phone , address , photo: photoPath
        }
      );
  
      await newStudent.save();

  
      res.status(200).json({ student : newStudent , message: "stuudent added successfuullly" , status: 200});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error", status: 500 });
  
    }
  });



module.exports = router;