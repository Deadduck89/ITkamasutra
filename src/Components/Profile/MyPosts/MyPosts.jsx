import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
import AddNewPostReduxForm from "./AddNewPostForm/AddNewPostForm";


const MyPosts = React.memo(props => {

    //Маппим массив постов, передавая в компонент Post отдельно id,
    //лайки и аватар автора поста

    let postElements = props.posts.map(
        post => <Post key={post.id} message={post.post}
                      likesCount={post.likesCount}
                      avatar={post.avatar}/>
    )

    //Функция для запуска action creator'a с текстом из формы

    let onAddPost = (values) => {
        props.onAddPost(values.newPostText);
    };

    return <div className={classes.content}>

        <div className={classes.postsBlock}>
            <div className={classes.postsForm}>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
        </div>
            <div className={classes.posts}>
                <h3>Мои новости</h3>
                {postElements}
            </div>
        </div>
    </div>
})

export default MyPosts