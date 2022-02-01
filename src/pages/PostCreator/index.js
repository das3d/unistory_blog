import React from "react";
import s from "./PostCreator.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import DeleteWindow from "../../components/DeleteWindow";
import {getCurrentPost} from "../../selectors/postSelector";
import {editPost} from "../../redux/postReducer";

const PostCreator = () => {
    let {id} = useParams();
    const currentPost = useSelector((state) => getCurrentPost(state, id))
    let dispatch = useDispatch()

    const [title, setTitle] = React.useState(currentPost.title)
    const [content, setContent] = React.useState(currentPost.content) //localStates for changing and regiter the state of field
    const [openedWindow, setOpenedWindow] = React.useState(false)


    const changePost = () => {
        dispatch(editPost({id, title, content}))
    }
    return <div className={s.main}>
        <Link to={'/'} className={s.return__link}>
            <button className={s.return}>Назад</button>
        </Link>
        <h3 className={s.title}>Запись {currentPost.title}</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={40}/>
        <div className={s.buttons}>
            <button onClick={() => setOpenedWindow(true)} className={s.deleteButton}>Удалить</button>
            <button onClick={() => changePost()} className={s.button}>Сохранить</button>
        </div>
        {openedWindow && <DeleteWindow id={id} setOpenedWindow={setOpenedWindow}/>}
    </div>
}
export default PostCreator