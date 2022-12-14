import React from "react";
import { Avatar, Button } from '@mui/material';
import "./TweetBox.css";



function TweetBox() {
return (
<div
className="TweetBox">
    <form>
        <div className="tweetBox_input">
            <Avatar src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210315070819-avatar-movie-still.jpg"></Avatar>
            <input placeholder="what's happening" type="text"/>
           
        </div>

        <input
        className="tweetBox_imageInput"
        placeholder="Enter image URL"
        type="text"
        />
        
        <Button className="tweetBox_tweetButton">Tweet</Button>
    </form>

</div>

)}
export default TweetBox;