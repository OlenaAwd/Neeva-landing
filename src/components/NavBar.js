
import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import classes from './NavBar.module.css';


export default function NavBar (){

    return(

        <div className={classes.navBar}>   
            <Navigation />
            <MobileNavigation />
                
        </div>

    );
}