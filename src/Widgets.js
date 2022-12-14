import React from "react";
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
return (

<div classNAme="Widgets">
    <div className="widgets_input">
       <SearchIcon className="widgets_searchIcon" />
       <input placeholder="Search Twitter" type="text" />

       <div className="widgets_widgetContainer">
        <h2>Whhhhhhp</h2>
        

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="espn"
        options={{height:400}}
        />
       </div>

    </div>
    
</div>
)

}

export default Widgets;