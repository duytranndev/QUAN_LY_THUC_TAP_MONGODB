
const studentController = require('./student')

function route(app){
    // app.get('/',(request,respond)=>{
    //     respond.status(200).json({
    //         message:'welcome to project Manager  InternInternIntern'
    //     })
    // })
    app.use("/students",studentController)
    
}

module.exports = route  