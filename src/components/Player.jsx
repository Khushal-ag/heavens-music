import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}){
    return(
        <div className="Player">
            <div className="Player-body">
                <Sidebar/>
                <Body/>
            </div>

            <Footer/>
        </div>
    );
}