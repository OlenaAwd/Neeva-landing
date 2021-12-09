import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    headerBar:{
        display: 'flex',
    },

headerItem:{
    display: 'flex',
    color: '#191919',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '80px',
    alignItems: 'center',
    marginRight: '24px',
    '&:hover': {
        color: '#415AFF',
        fontSize: '16px',
        fontWeight: '700',
        
    }
},
});

export default function Navigation (){
    const classes = useStyles();
    return (
        <ul className={classes.headerBar}>
            <li className={classes.headerItem}>Sign In</li>
            <li className={classes.headerItem}>Features</li>
            <li className={classes.headerItem}>FAQ</li>
            <li className={classes.headerItem}>Blog</li>
            <li className={classes.headerItem}>Press</li>
        </ul>
    );
}

                