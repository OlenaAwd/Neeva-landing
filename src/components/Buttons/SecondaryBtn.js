import React from "react";
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBlack  from '../../Assets/ArrowBlack.svg';


const useStyles = makeStyles({
    secondaryBtn:{
        backgroundColor: '#F5FF93',
        borderTopLeftRadius:'36px',
        borderTopRightRadius: '36px',
        textTransform:'capitalize',
        width:'274px',
        height:'72px',
        fontSize:'18px',
        lineHeight:'24px', 
        textAlign: 'center',  
        borderBottomRightRadius: '36px',
        borderBottomLeftRadius: '36px',
        fontWeight:'700',
    },
});

export default function BtnSecond (props){
    const classes = useStyles();
    const {propsClassName, children } = props;
    console.log(props)
    return (
        <div>
            <ButtonBase className={`${classes.secondaryBtn} ${propsClassName}`}>{children}
                <img src={ArrowBlack} alt="arrowBlack"/> 
            </ButtonBase>
        </div>
    );
}





