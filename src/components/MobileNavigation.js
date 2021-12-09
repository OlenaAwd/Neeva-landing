import NavLinks from './NavLinks';
import classes from './NavBar.module.css';
import {BsMenuButtonWideFill} from 'react-icons/bs';
import {CgClose} from 'react-icons/cg';
import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     // mobileNavigation:{
//     //     dispaly: 'flex',
//     // },
// })

export default function MobileNavigation (){
    // const classes = useStyles();
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <BsMenuButtonWideFill 
                                className={classes.Hamburger} 
                                size='40px' 
                                color="#191919"
                                onClick={()=>setOpen(!open)}
                            />
    const closeIcon = <CgClose 
                            className={classes.Hamburger} 
                            size='40px' 
                            color="#191919"
                            onClick={()=>setOpen(!open)}
                        />
    return (
        <nav className={classes.mobileNavigation}>
        {open ? closeIcon : hamburgerIcon}    
        {open && <NavLinks />}
        </nav>
    );
}