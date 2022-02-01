export const getCurrentPost = (state, id)=> {
    return state.postReducer.posts[state.postReducer.posts.findIndex(post=>post.id === id)]
}
export const getPosts = (state)=> {
    return state.postReducer.posts
}
