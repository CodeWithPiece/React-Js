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

app.post("/data", (req, res) => {
  const data = { name: req.body.name, email: req.body.email };
  res.send({
    status: true,
    message: "Data added..!!",
    data: data,
  });
});

app.post("/post", (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let avatar = req.files.avatar;
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`App is listening on port ${port}.`));
