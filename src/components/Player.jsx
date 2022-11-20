import React from "react";
import Footer from "./Footer";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({spotify}){
    return(
        <div className="Player">
            <div className="Player-body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer spotify={spotify}/>
        </div>
    );
}
export default Player;