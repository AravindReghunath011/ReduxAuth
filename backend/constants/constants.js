
import multer from "multer"
import path from "path"




 const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        console.log('destination');
        cb(null,'backend/public/images/')
    },
    filename:(req,file,cb)=>{
        console.log('filename');
        cb(null,file.fieldname+'_'+ Date.now() + path.extname(file.originalname))
    }
})

 export const upload = multer({
    
    storage:storage
})

