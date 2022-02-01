import React from "react";
import Post from "../../components/Post";
import s from "./MainPage.module.scss"
import ModalPost from "../../components/ModalPost";
import {useSelector} from "react-redux";
import {getPosts} from "../../selectors/postSelector";


const MainPage = () => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    const posts = useSelector((state)=>getPosts(state))
    return <div className={s.mainBlock}>
        <h1>Блог</h1>
        <ul className={s.posts}>
            {posts && posts.map((post) => <li key={post.title + post.id}>
                    <Post title={post.title} id={post.id} content={post.content}/>
                </li>
            )}
        </ul>
        <div>
            {!visibleModal && <button className={s.button} onClick={() => setVisibleModal(true)}>+Добавить</button>}
        </div>
        {visibleModal && <ModalPost setVisible={setVisibleModal}/>}

    </div>
}
export default MainPage