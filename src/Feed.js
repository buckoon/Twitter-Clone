import React from 'react'
import "./Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
    return (
        <div className = "feed">
            {/*Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/*Home*/}

            <TweetBox />
            {/*Tweetbox*/}

            {/*post*/}
        </div>

    )


}

export default Feed