import React from "react";
import Post from "../../components/Post";
import s from "./MainPage.module.scss"
import ModalPost from "../../components/ModalPost";
import {connect} from "react-redux";
import {selectPost, setPost} from "../../redux/postReducer";

const MainPage = ({posts, setPost, selectPost}) => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    return <div className={s.mainBlock}>
        <h1>Блог</h1>
        <ul className={s.posts}>
            {posts && posts.map((post, index) => <li key={post.title + index}>
                    <Post title={post.title} content={post.content} selectPost={selectPost}/>
                </li>
            )}
        </ul>
        <div>
            {!visibleModal && <button className={s.button} onClick={() => setVisibleModal(true)}>+Добавить</button>}
        </div>
        {visibleModal && <ModalPost setPost={setPost} setVisible={setVisibleModal}/>}

    </div>
}
export default connect((state) => ({ //connecting to store
    posts: state.postReducer.posts,
    state: state.postReducer
}), {setPost, selectPost})(MainPage)