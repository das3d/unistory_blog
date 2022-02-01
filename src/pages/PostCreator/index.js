import React from "react";
import s from "./PostCreator.module.scss"
import {connect} from "react-redux";
import {deletePost, editPost, selectPost} from "../../redux/postReducer";
import {Link} from "react-router-dom";
import DeleteWindow from "../../components/DeleteWindow";

const PostCreator = ({deletePost, editPost, currentPost, selectPost}) => {
    const [title, setTitle] = React.useState(currentPost.title)
    const [content, setContent] = React.useState(currentPost.content) //localStates for changing and regiter the state of field
    const [openedWindow, setOpenedWindow] = React.useState(false)

    const changePost = () => {
        editPost({
            prevTitle: currentPost.title,
            prevContent: currentPost.content,
            title,
            content
        })
        selectPost({title, content})//implementation two-way bindings
    }
    return <div className={s.main}>
        <Link to={'/'} className={s.return__link} ><button className={s.return}>Назад</button></Link>
        <h3 className={s.title}>Запись {currentPost.title}</h3>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} rows={40}/>
        <div className={s.buttons}>
            <button onClick={()=>setOpenedWindow(true)} className={s.deleteButton}>Удалить</button>
            <button onClick={()=>changePost()} className={s.button}>Сохранить</button>
        </div>
        {openedWindow && <DeleteWindow setOpenedWindow={setOpenedWindow} deletePost={deletePost}/>}
    </div>
}
export default connect((state) => ({
    currentPost: state.postReducer.currentPost
}), {deletePost, editPost, selectPost })(PostCreator)