import s from "./DeleteWindow.module.scss"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePost} from "../../redux/postReducer";

const DeleteWindow = ({setOpenedWindow, id}) => {
    const dispatch = useDispatch()
    const deletingPost = () => {
        dispatch(deletePost(id))
        setOpenedWindow(false)//close modal window, when post was deleted
    }

    return <div className={s.modal}>
        <div className={s.modal__window}>
            <div className={s.modal__text}>Вы действительно хотите удалить?</div>
            <div className={s.modal__buttons}>
                <Link to={'/'}>{/*When post was deleted, the component MainPage is render*/}
                    <button className={s.modal__button} onClick={() => deletingPost()}>Да</button>
                </Link>
                <button className={s.modal__button} onClick={() => setOpenedWindow(false)}>Нет</button>
            </div>
        </div>
    </div>

}
export default DeleteWindow