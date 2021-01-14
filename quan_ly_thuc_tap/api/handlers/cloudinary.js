const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "duytrann",
  api_key: "373818797267386",
  api_secret: "nWbH8ivxOXvfottqJW4qivzXd0A",
});

module.exports = cloudinary;
