import React from 'react';
import './header.css'


class Header extends React.Component {
    coucou = (prenom) => {
        console.log("Coucou " + prenom)
    }
    render() {
        let x = "Sylvaine";
        let date = new Date();
        return (
            <header>
                <nav>
                    <h1 onClick={this.coucou("sysy")}>Home</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <p>Bonjour {x}</p>
                    <p>Date du jour : {date.getDate()} / {date.getMonth()} / {date.getFullYear()}. 
                    </p>
                </nav>
            </header>
        );
    }
}

export default Header;