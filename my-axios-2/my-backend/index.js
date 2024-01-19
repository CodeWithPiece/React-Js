const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use(fileUpload());
app.use(cors());
app.use("/images", express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/data", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };
  res.send({
    status: true,
    message: "Data is uploaded",
    data: data,
  });
});

app.post("/post", (req, res) => {
  const __dirname = path.resolve(path.dirname(__filename));
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "Image is required",
      });
    } else {
      let avatar = req.files.avatar;
      avatar.mv(`${__dirname}/uploads/` + avatar.name);
      const data = {
        name: req.body.name,
        email: req.body.email,
        image: `/images/${avatar.name}`,
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
