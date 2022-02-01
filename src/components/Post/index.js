import React from "react";
import s from "./Post.module.scss"
import {Link} from "react-router-dom";

const Post = ({title, content, id}) => {

    return <div className={s.post}>
        <h4 className={s.post__title}>{title}</h4>
        <div className={s.post__text}>{content}</div>
        <Link to={`/post/${id}`} className={s.post__button__text}>
            <button className={s.post__button}>Перейти</button>
        </Link>
    </div>

}
export default Post