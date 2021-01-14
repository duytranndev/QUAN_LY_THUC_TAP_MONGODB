const News = require("../models/News");

class NewsController {
  index(req, res, next) {
    News.find({})
      .then((news) => {
        res.send(news);
      })
      .catch(next);
  }
  show(req, res, next) {
    let slugNews = req.params.slug;
    News.findOne({ slug: slugNews })
      .then((news) => {
        res.send(news);
      })
      .catch(next);
  }
  delete(req, res, next) {
    var query = { _id: req.params.id };
    News.findOneAndDelete(query)
      .then(() => {
        res.status(200).json({
          success: true,
          message: "News is deleted",
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again",
        });
      });
  }
  create(req, res, next) {
    const formData = req.body;
    const news = new News(formData);
    news
      .save()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "News is created",
        });
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again",
        });
      });
  }
  edit(req, res, next) {
    let query = { _id: req.params.id };
    let updateObject = req.body;
    News.findOneAndUpdate(query, { $set: updateObject })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "News is updated",
          updateStudent: updateObject,
        });
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again",
        });
      });
  }
}

module.exports = new NewsController();
