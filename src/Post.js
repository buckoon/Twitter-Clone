import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";

function Post(
 displayName,
    userName,
    verified,
    text,
    image,
    avatar
)
{
return (
    <div className="post">

        <div className="post_avatar">
            <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw0abISlkRwwzepnuRfvgLGg&ust=1667921064342000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLib1KWwnPsCFQAAAAAdAAAAABAE"></Avatar>
        <div/>
    <div  className="post_body">
        
        <div className="post_header">
            <div className="post_headerText">
                <h3>
                    Jerm <span>
                    <VerifiedUserIcon className="post_badge" />
                    </span>
                </h3>
                <div className="post_headerDescription">
                 <p>Hello there</p>
                <div/>
            </div>
            

            

        
         <img src="https://giphy.com/gifs/JIX9t2j0ZTN9S" alt=""/>
        </div>
    </div>
    
    
    
)
}

export default Post;