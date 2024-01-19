const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/post", (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "Image is required...!!",
      });
    } else {
      let avatar = req.files.avatar;
      const data = {
        name: req.body.name,
        email: req.body.email,
        image: avatar.name,
      };
      res.send({
        status: true,
        message: "Data is uploaded",
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`App is listening on port ${port}.`));
