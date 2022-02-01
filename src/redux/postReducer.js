import {initState} from "./state";

const SET_POST = 'SET_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'
const SELECTED_POST = 'SELECTED_POST'


const postReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_POST: {
            return {...state, posts: [...state.posts, {...action.payload, id:Math.random().toString(36).substr(2, 9)}]}
        }
        case DELETE_POST: {
            state.posts.splice(state.posts.findIndex(post => post.id === action.payload), 1)
            return {
                ...state,
                posts: [...state.posts]

            }
        }
        case EDIT_POST: {
            state.posts.splice(state.posts.findIndex(post => post.id === action.payload.id), 1, action.payload)
            return {...state, posts: [...state.posts]

                }
        }

        default:
            return state
    }

}
//Action-creators
export const setPost = (payload) => ({
    type: SET_POST, payload
})
export const deletePost = (payload) => ({
    type: DELETE_POST, payload
})
export const editPost = (payload) => ({
    type: EDIT_POST, payload
})
export const selectPost = (payload) => ({
    type: SELECTED_POST, payload
})

export default postReducer