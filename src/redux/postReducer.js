import {initState} from "./state";

const SET_POST = 'SET_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'
const SELECTED_POST = 'SELECTED_POST'


const postReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_POST: {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.title !== state.currentPost.title || post.content !== state.currentPost.content)

            }
        }
        case EDIT_POST: {
            let ind = state.posts.findIndex(post =>
                action.payload.prevTitle === post.title && action.payload.prevContent === post.content)
            return {...state, posts:state.posts.map((post,index)=>{
                   if(ind === index){
                       return {title: action.payload.title, content: action.payload.content}
                   } return {...post}
                    }

                )}
        }
        case SELECTED_POST: {
            return {...state, currentPost: action.payload}
        }
        default:
            return state
    }

}
//Action-creators
export const setPost = (payload) => ({
    type: SET_POST, payload
})
export const deletePost = () => ({
    type: DELETE_POST
})
export const editPost = (payload) => ({
    type: EDIT_POST, payload
})
export const selectPost = (payload) => ({
    type: SELECTED_POST, payload
})

export default postReducer