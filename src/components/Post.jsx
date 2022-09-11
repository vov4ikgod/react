import React from "react";
import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return (    
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post-content">
                <MyButton onClick={() => props.remove(props.post)}>Удалить пост</MyButton>
            </div>
        </div>
    )
};

export default Post;
