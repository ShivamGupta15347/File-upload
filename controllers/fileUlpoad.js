const File = require("../models/File");

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File aagyi=>", file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Path=>", path);

    file.mv(path, (err) => {
      console.log(err);
    });
    res.json({
      success: true,
      message: "Local File Uploaded",
    });
  } catch (err) {
    console.log(err);
  }
};
