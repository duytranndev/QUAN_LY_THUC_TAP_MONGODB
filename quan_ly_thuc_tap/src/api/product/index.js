import axios from 'axios'
export async function getProductID(params){
    try{
      const requestUrl = `http://localhost:4000/students`
      const response = await axios(requestUrl)
      return response
    }
    catch(error){
      console.log('Failue in Api getProductID')
    }
  }