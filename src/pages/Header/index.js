import React from 'react';
import { FaHome } from 'react-icons/fa';
import './style.css'

export default function Header(props){
    return(
        <header id="main-header">
            <h1>{props.title}</h1>
            <div id="div1"> <a href="/"><FaHome id="iconHome" /></a></div>
        </header>
    );
}