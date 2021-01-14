import axios from 'axios'
export async function getStudent(params){
    try{
      const requestUrl = `http://localhost:4000/students`
      const response = await axios(requestUrl)
      return response
    }
    catch(error){
      console.log('Failue in Api getStudent')
    }
  }

  export async function getStudentBySlug(slug){
    try{
      const requestUrl = `http://localhost:4000/students${slug}`
      const response = await axios(requestUrl)
      return response
    }
    catch(error){
      console.log('Failue in Api getStudentBySlug')
    }
  } 