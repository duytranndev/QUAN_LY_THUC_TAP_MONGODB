const studentController = require("./student");
const newsController = require("./news");

function route(app) {
  // app.get('/',(request,respond)=>{
  //     respond.status(200).json({
  //         message:'welcome to project Manager  InternInternIntern'
  //     })
  // })
  app.use("/students", studentController);
  app.use("/news", newsController);
}

module.exports = route;
