import React from 'react'
import logo from "../img/logo.png"

export function Header (){
    const head = "Esse é o header"
    return(
        <div>
            <header className="cabecalho">
                <h1>{head}</h1>
                <img src={logo}/>
            </header>
        </div>
    )
}