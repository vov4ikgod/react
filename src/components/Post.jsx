import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

const Post = (props) => {
    const router = useNavigate();

    return (    
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id /*number*/}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить пост</MyButton>
            </div>
        </div>
    )
};

export default Post;
