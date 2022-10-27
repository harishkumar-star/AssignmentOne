import axios from 'axios';
import { POST_DETAILS, POST_FAIL,COMMENTS_DETAILS,COMMENTS_FAIL } from '../constants';


export const userdata=(payload:any)=> (dispatch:any)=>{
  console.log('Post API----->')
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      dispatch({
        type:POST_DETAILS,
        payload: response.data,
      });
    }
    )
  
    .catch((error) => {
      console.log('auth token error====>',error)
      dispatch({
        type: POST_FAIL,
        payload: error.response,
       
      });
    });

}

export const postcomentsdata=(payload:any)=> (dispatch:any)=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => {
     console.log('comments API response------>',response)
      dispatch({
        type:COMMENTS_DETAILS,
        payload: response.data,
      });
    }
    )
  
    .catch((error) => {
      console.log('auth token error====>',error)
      dispatch({
        type: COMMENTS_FAIL,
        payload: error.response,
       
      });
    });

}



