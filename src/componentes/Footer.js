import React from "react";
import { SocialMedia } from "./SocialMedia";
import { Copyright } from "./Copyright";

export function Footer(){
    const futer = "Esse é o footer"
    return(
        <>
        <footer>
            <h3>{futer}</h3>
            <SocialMedia/>
            <Copyright/>
        </footer>
        </>
    )
}