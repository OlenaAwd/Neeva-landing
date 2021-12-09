import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    reviewsItem:{
        flexBasis: 'calc(100%/4 -32px)',
        marginLeft:'32px',
        marginTop:' 32px',
    },
    revCard:{
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        borderTopLeftRadius: '16px',
        borderTopRightRadius:'16px',
        borderBottomLeftRadius:'16px',
        borderBottomRightRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        width:'310px',
    },
    revCardContent:{
        paddingLeft: '48px',
        paddingRight: '48px',
        fontSize: '20px',
        width:' 213px',

    },


})


export default function CardReview (props) {
    const classes = useStyles();
    const {  children } = props;
    return(
        <>
            <li className={classes.reviewsItem}>
                <article className={classes.revCard}>
                    <div className={classes.revCardContent}>
                        {children} 
                    </div>
                </article>
            </li>
        </>
    )
}