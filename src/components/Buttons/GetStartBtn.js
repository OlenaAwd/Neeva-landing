import React from "react";
import { ButtonBase } from '@material-ui/core';
import {InputBase } from '@mui/material';
import Arrow from '../../Assets/Arrow.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    loginInput:{
        backgroundColor: '#FFFFFF',
        height: '78px',
        borderTopLeftRadius: '100px',
        borderBottomLeftRadius: '100px',
        color: '#8D9499',
        fontSize: '18px',
        lineHeight: '24px',
        padding: '27px 93px 27px 25px',
        border: '1px solid #E3E7E2',
            InputProps: {
                disableUnderline:true,
            }
    },
    textInput:{
        marginTop: '8px',
        color: '#8D9499',
        fontSize: '13px',
        lineHeight: '24px',
        width: '473px',
    },
    baseBtn:{
        backgroundColor: '#415AFF',
        borderTopRightRadius: '100px',
        borderBottomRightRadius: '100px',
        height:'78px',
        color: '#FFFFFF',
        fontSize: '18px',
        lineHeight: '24px',  
        width: '208px',
        textTransform: 'capitalize',
    },
    btnText:{
        marginRight: '34px',
    },
    '@media (max-width: 600px)':{
        loginInput:{
            width: '265px',
            height: '78px',
            fontSize: '16px',
            lineHeight: '22px',
            padding: '20px 80px 20px 20px',
        },
        textInput:{
            marginTop: '8px',
            color: '#8D9499',
            fontSize: '13px',
            lineHeight: '22px',
            width: '450px',
        },
        baseBtn:{
            height:'78px',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '22px',  
            marginRight: '34px', 
            width: '180px',
        },
        btnText:{
            marginRight: '1px',
        },
    },
    '@media(max-width: 520px)':{
        baseBtn:{
            height:'78px',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '22px',  
            marginRight: '5px', 
            width: '160px',
        },
        btnText:{
            marginRight: '2px',
        },
    },
    });


export default function Btn (props){
    const classes = useStyles();
    const { propsClassName } = props;
    return (
        <div className={`${classes.Cont} ${propsClassName}`}>
            <InputBase  
                className={classes.loginInput} 
                placeholder="Enter email to sign up"

                />
            <ButtonBase className={classes.baseBtn}>
                <span className={classes.btnText}>Get Started</span>
                <img src={Arrow} alt="arrow"/>    
            </ButtonBase>
            <p className={classes.textInput}>No credit card required to sign up. Get 3 months free, then just $4.95 per month.</p>
        </div>    
    )
}