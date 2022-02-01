import React from "react";
import s from "./ModalPost.module.scss"
import {useDispatch} from "react-redux";
import {setPost} from "../../redux/postReducer";

const ModalPost = ({setVisible}) => {
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const dispatch = useDispatch()

    const createPost = () => {
        dispatch(setPost({title, content}))
        setTitle('')
        setContent('')
        setVisible(false)
    }

    return <div className={s.modal}>
        <form className={s.modal__content}>
            <input placeholder={"Введите заголовок"} className={s.modal__input} value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder={"Введите текст"} rows={20} onChange={(e) => setContent(e.target.value)}
                      value={content}/>
            <div className={s.modal__buttons}>
                <button onClick={() => setVisible(false)}>Отмена</button>
                <button onClick={() => createPost()}>Сохранить</button>
            </div>
        </form>

    </div>

}
export default ModalPost