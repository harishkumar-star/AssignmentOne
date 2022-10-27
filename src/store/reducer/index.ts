import produce from 'immer';
import { ThunkAction } from 'redux-thunk';
import {COMMENTS_DETAILS, POST_DETAILS} from '../constants'




const initialState = {
  posts_success:[],
  comment_sucess:[]
}

function globalReducer(state = initialState, action:any) {
    switch (action.type) {
        case POST_DETAILS:
          return produce(state, (draft) => {
            // draft.loading = true;
              draft.posts_success = action.payload;
              // console.log('draft response===>',draft.posts_success)
          });
          case COMMENTS_DETAILS:
          return produce(state, (draft) => {
            // draft.loading = true;
              draft.comment_sucess = action.payload;
              console.log('draft response===>',draft.comment_sucess)
          });
   default :
   return state

}
}
export default globalReducer;