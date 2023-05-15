import express from "express";
import  path  from "path";
import { getUser,matchPassword } from "../../services/index.js";
const router = express.Router();
const __dirname = path.resolve();

// const cssFile = path.join(__dirname,'../about.css');

const publicDirPath = path.join(__dirname, '../');
router.use( express.static(publicDirPath));

router.get('/index', (req, res) => {
    const file = path.join(__dirname, '../index.html');
    res.sendFile(file);
  });

  export const homeConroller = router;