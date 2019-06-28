import React from "react";

import "./Background.css";

const Background = (props) => 
<>
    <div className="sky">
        <img alt="" className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudSingle.gif" />
	    <img alt="" className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudDouble.gif" />
	    <img alt="" className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudTriple.gif" />
    </div>
    <div className="ground">
	    <img alt="" className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif" height="70px;" />
	    <img alt="" className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushDouble.gif" height="70px;" />
	    <img alt="" className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif" height="70px;" />

    </div>
    <div className="content">
        {props.children}        
    </div>
</>

export default Background;