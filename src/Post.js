import React from "react";
import "./Post.css";
import { Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
})  {


    return (
    <div className="post">
        <div className="post_avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        {displayName} 
                        <span>
                        {verified && <VerifiedUserIcon className="post_badge" />}@{username}
                        </span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                    <p>{text}</p>
                </div>
            </div>
                <img src={image}
                alt=""/>
            <div className="post_footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />

            </div>
        </div>




    </div>
    );

}

export default Post;