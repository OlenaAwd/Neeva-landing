import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    body:{
        fontFamily: 'Roboto',
    },
    header:{
    display: 'flex',
    filter: 'dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    fontSize: '16px',
    lineHeight: '80px',
    },
    headerTop:{
        display: 'flex',
        paddingLeft: '20px',
       
    },
    Logo:{
        marginRight: '48px',
        paddingTop: '34px',
        paddingBottom: '30px',
        paddingLeft: '32px',
    }, 
    Search:{
        marginTop: '65px',
        marginBottom: '100px',
        marginLeft: '100px',
    },
    searchContainer:{
        maxWdth: '1416px',
        padding:'0 12px',
        display: 'flex',
    },
    title:{
        display: 'flex',
        width: '634px',
        left: '1.57%',
        right: '18.83%',
        fontSize: '55px',
        lineHeight: '1.24',
        letterSpacing: '1.8px',
        color: '#212529',
        marginBottom: '47px',
        paddingTop: '5px',
    },  
    TextContainer:{
        display: 'block',
    },  
    
    SearchText:{
    fontSize: '20px',
    lineHeight: '1.4',
    color: '#191919',
    width: '463px',
    marginBottom: '30px',   
    },
    imgContent:{
        display: 'flex',
        marginRight: '24px',
        marginLeft: '162px',
    },
    Searchimg:{
        width: '507px',
        height: '370px',
        display: 'inline-block',
        objectFit: 'cover',
        paddingRight: '12px',      
    },

    Know:{
        width: '686px',
        display: 'flex',
        marginBottom: '60px',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight:'377px',
        paddingLeft: '377px',
    },
    
    KnowContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    knowTextContainer:{
    display: 'flex',
    },
    knowTitle:{
        paddingLeft: '16px',
        color: '#212529',
        fontSize: '16px',
        lineHeight: '24px',
        textTransform: 'uppercase',
        marginBottom: '21px',
        fontWeight: '700',
    },
    textBoxL:{
        width: '262px',
        marginRight: '130px',
        paddingLeft: '16px',
    },
    textBoxR:{
        width: '182px',
    },
    knowText:{
        color: '#44464D',
        fontSize: '21px',
        lineHeight: '40px',
        display: 'inline-block',
        letterSpacing: '1.5px',
    },
    MobContainer:{
        display: 'flex',
    },
    MobImg:{
        width: '294px',
        "&:not(:last-child)": {
            marginRight: '98px',
        }
    },
    feauture:{
        display: 'flex',
        marginBottom: '80px',
        width: '1024px',
        marginRight: 'auto',
        marginLeft: 'auto',  
    },
    featureTitle:{
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#212529',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '2px',
        textAlign: 'center',
        marginBottom: '24px',
        paddingRight: '434px',
        paddingLeft: '452px',
    },
    ImgList:{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '25px',
    },
    ImgItem:{
        dispaly: 'flex',
        "&:not(:last-child)":{
            marginRight: '65px',
        },
    },
    boardContainer:{
        width: '1440',
        marginBottom: '80px',
        display: 'flex',
    },
    Dashboard:{
        width: '605px',
        padding: '0 0',
    },
    dashboardInfo:{
        width: '720px',
        marginLeft: '115px',
    },
    dashtitle:{
        color: '#212529',
        fontSize: '16px',
        lineHeight: '24px',
        textTransform: 'uppercase',
        marginBottom: '8px',
        fontWeight: '700',
    },
    dashboardText:{
        color: '#212529',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '700',
        width: '352px',
        marginBottom: '29px',
    },
    dashboardTitle:{
    color: '#212529',
    fontWeight: '700',
    fontSize: '56px',
    lineHeight: '72px',
    letterSpacing: '2.25px',
    width: '462px',
    marginBottom: '99px',
    },
    dashboardTextBtn:{
        marginRight: '16px',
        paddingTop:'21px',
        paddingBottom:'23px',
        paddingLeft:'32px',
    },
    news:{   
        width: '1440px',
    },
    newsContainer:{
        display: 'flex',
        paddingLeft: '90px',
        paddingTop: '67px',
    },
    newsInfo:{
        paddingLeft: '24px',
        marginRight: '28px',
        width: '810px',
    },
    newsDashboard:{
        width: '540px',
    },
    
    billTextBtn:{
        marginRight: '16px',
        color:'#191919',
    },

    joinContainer:{   
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '150px',
        paddingRight: '126px',
        marginTop: '120px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    joinTitle:{
        marginBottom: '51px',
        fontSize: '64px',
        lineHeight: '72px',
        letterSpacing: '2.25px',
        color: '#212529',
        fontWeight: '700',
        paddingTop: '5px',
        paddingLeft: '150px',
        paddingRight: '126px',
        textAlign: 'center',
    },
    BtnJoinContainer:{
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '265px',
        paddingLeft: '265px',
    },
    experts:{
        width: '1416px',
        marginTop:'146px',
        marginBottom:'82px',
        paddingLeft:'189px',

    },
    expertsContainer:{
    display: 'flex',
    paddingLeft:'12px',
    color:'#212529',
    },
    expertsTextContainer:{
        marginRight:'127px',
        
    },
    expertsText:{
    paddingTop:'190px',
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '40px',
    marginBottom:'29px',
    },
    expertsTitle:{
    fontWeight: '700',
    fontSize: '57px',
    lineHeight: '72px',
    letterSpacing: '2.25px',
    width: '474px',
    marginBottom:'43px',
    },
    class_secondary_props:{
        width:'233px',
    },

    class_third_props:{
        width: '176px',
    },
    expertsTextBtn:{
        marginRight:'16px',
        paddingTop:'24px',
        paddingBottom: '24px',
        paddingLeft: '31px',
    },
    expertsImgContainer:{
        width:'620px',
        paddingLeft:'39px',
    },
    expertsList:{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '34px',
        marginLeft: '-20px',
       
    },
    expertsItem:{
        flexBasis: 'calc(100%/2-39px)',
        marginLeft: '39px',
    },
    card:{
        paddingRight:'93px',
    },
    cardImg:{
        display:'block',
        maxWidth: '100%',
        marginBottom:'17px',
    },
    expertsName:{
        color: '#212529',
        fontSize: '24px',
        fontWeight:'400',
        lineHeight:'32px',
        marginBottom:'5px',
        width: '138px',
    },
    expertsPosition:{
        fontSize: '20px',
        width:'161px',
        lineHeight:'28px',
    },
    wrapChildFirst:{
        display: 'flex',
        paddingBottom: '62px',
    },
    wrapChildSecond:{
        display: 'flex',
        paddingBottom: '34px',
    },
    reviews:{
        marginBottom:'136px',
    },
    reviewsContainer:{
        width:'1440px',
        paddingBottom:'64px',
        paddingRight: '72px',
        paddingLeft:'32px',
    },
    reviewsTitle:{
        fontSize: '26px',
        lineHeight: '40px',
        color: '#212529',
        marginBottom: '56px',
        paddingLeft:'44px',

    },
    reviewsList:{
        padding: '0',
        margin: '0',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 'calc(-1 * 32px)',
        marginTop: 'calc(-1 * 32px)',
    },
    reviewsItem:{
        width: '310px',
        alignItems: 'center',
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

        PaddingRight: '49px',
        paddingBottom:'38px',
        paddingLeft: '48px',
    },
    reviewsText:{
        paddingTop: '46px',
        marginBottom:'38px',
        fontSize: '20px',
        lineHeight: '28px',
    },
    reviewsAuthor:{
        textTransform:'uppercase',
        fontSize: '11px',
        lineHeight: '20px',
    },
    reviewsPos:{
        fontSize: '12px',
        color: '#737980',
        textTransform:'uppercase',
        paddingBottom: '52px',
        lineHeight: '20px',
    },
    reviewsTextSec:{
        paddingRight: '61px',
        marginBottom: '76px',
        paddingTop: '46px',
        fontSize: '20px',
        lineHeight: '28px',
        width: '201px',
    },
    rewNYT:{
        paddingBottom: '62px',
        width: '152px',
        paddingRight: '110px',
    },
    reviewsTextLast:{
        paddingRight: '51px',
        marginBottom: '49px',
        paddingTop: '46px',
        fontSize: '20px',
        lineHeight: '28px',
        width: '211px',
    },
    rewForbes:{
        paddingBottom: '63px',
    },
    account:{
        width:'1440px',
    },
    accountContainer:{
        paddingLeft:'113px',
        display:'flex',
    },
    accountTitle:{
        fontSize: '55px',
        lineHeight: '68px',
        fontWeight: '400',
        color: ' #212529',
        width: '689px',
        marginBottom: '61px',
        marginRight:'107px',
    },
    accountImg:{
        width:'419px',
        paddingBottom:'48px',
        paddingRight: '112px',
    },
    footerFrame:{
        width:'28px',
        height:'24px',
        paddingLeft:'38px',
        paddingTop:'51px',
    },
    footerContainer:{
        display: 'flex',
        width: '1064px',
        borderTop: '1px solid #E8E8E8',
    },
    commonContainer:{
        display: 'flex',
        marginLeft:'97px',
        width: '1064px',
        paddingTop:'49px',
        paddingBottom:'48px',
        marginRight:'1px',
    },
    
    footerPageContainerLeft:{
        marginRight:'96px',
    },
    footerPageContainerRight:{
        marginRight:'771px',
        width:'124px',
    },
    footerPage:{
        marginBottom:'10px',
        color:'#191919',
        fontSize: '14px',
        lineHeight:"24px",
        fontWeight:'700',
    },

    socialList:{
        display: 'flex',
        paddingTop:'53px',
        paddingRight:'38px',
        marginBottom: '180px',
    },
    iconItem:{
        marginRight:'35px',
        width:'20px',
        height:'20px',
    },
    rightsText:{
        display: "flex",
        fontSize: '14px',
        lineHeight:'24px',
        paddingBottom: '48px',
    },
    copyright:{
        color:'#191919',
        fontSize: '12px',
        lineHeight:'24px',
        fontWeight:'400',
    },
    footerStripe:{
        width: '100%',
    },
    '@media(max-width: 1024px)':{
        join:{
            display: 'flex',
            paddingLeft: '80px',
        },
        joinContainer:{
            paddingLeft: '0',

        },
        joinTitle:{
            fontSize: '58px',
            width: '810px',
            paddingLeft: '10px',
        },
        BtnJoinContainer:{
            paddingLeft: '150px',
            paddingRight: '150px',

        },
        experts:{
            marginTop:'146px',
            marginBottom:'82px',
            paddingLeft:'189px',
        },
        expertsContainer:{
        margintTop: '40px',
        display: 'block',
        paddingLeft:'12px',
        color:'#212529',
        },
        expertsTextContainer:{
            marginRight:'127px',   
        },
        expertsText:{
        paddingTop:'10px',
        },
        
        class_secondary_props:{
            width:'233px',
        },   
        class_third_props:{
            width: '176px',
        },
        expertsImgContainer:{
            margintTop: '30px',
            width:'620px',
            paddingLeft:'39px',
        },
        expertsList:{
            display: 'flex',
            flexWrap: 'wrap',
            paddingBottom: '34px',
            marginLeft: '-20px',   
        },
        reviews:{
            marginBottom:'136px',
        },
        reviewsContainer:{
            width:'800px',
            paddingBottom:'64px',
            paddingRight: '72px',
            paddingLeft:'150px',
        },
        reviewsTitle:{
            fontSize: '26px',
            lineHeight: '40px',
            color: '#212529',
            marginBottom: '56px',
            paddingLeft:'170px',
        },
        accountTitle:{
            fontSize: '40px',
            lineHeight: '64px',
            width: '445px',
            marginBottom: '61px',
            marginRight:'10px',
        },
        accountImg:{
            width:'360px',
            paddingBottom:'48px',
            paddingRight: '112px',
        },
        footerPageContainerLeft:{
            marginRight:'96px',
        },
        footerPageContainerRight:{
            marginRight:'145px',
            width:'124px',
        },
        socialList:{
            display: 'flex',
            paddingTop:'53px',
            paddingRight:'38px',
            marginBottom: '180px',
        },
        iconItem:{
            marginRight:'35px',
            width:'20px',
            height:'20px',
        },
        rightsText:{
            display: "flex",
            fontSize: '14px',
            lineHeight:'24px',
            paddingBottom: '48px',
        },
        copyright:{
            color:'#191919',
            fontSize: '12px',
            lineHeight:'24px',
            fontWeight:'400',
        },
        footerStripe:{
            width: '100%',
        },           
    },
    '@media(max-width: 990px)':{
        searchContainer:{
            maxWdth: '970px',
        },
        title:{
            width: '523px',
            left: '1.57%',
            right: '18.83%',
            fontSize: '45px',
            lineHeight: '1.24',
            letterSpacing: '1.8px',
            color: '#212529',
            marginBottom: '45px',
            paddingTop: '15px',
        },
        imgContent:{
            marginRight: '20px',
            marginLeft: '140px',
        },
        Searchimg:{
            width: '540px',
            paddingRight: '12px',      
        },
        Know:{
            width: '210px',
        },
        feauture:{
            width: '550px',
        },
        boardContainer:{
            width: '600px',
        },
        Dashboard:{
            width: '555px',
        },
        dashboardInfo:{
            width: '650px',
            marginLeft: '250px',
        },
        dashboardTitle:{
        fontSize: '52px',
        },
        newsContainer:{
            width: '990px',
        },
        newsInfo:{
            paddingLeft: '24px',
            marginRight: '395px',
            marginLeft: '75px',
            width: '810px',
        },
        newsDashboard:{
            width: '555px',
        },
        joinContainer:{
            width: '900px'
        },
        joinTitle:{
            marginBottom: '51px',
            fontSize: '60px',
            lineHeight: '64px',
            width: '860px',
        },
        BtnJoinContainer:{
            display: 'inline',
        },
        experts:{
            marginTop:'70px',
        },
        expertsTextContainer:{
            marginRight:'180px',
            paddingLeft: '30px',
        },
        expertsText:{
        paddingTop:'15px',
        fontSize: '30px',
        lineHeight: '38px',
        },
        expertsTitle:{
        fontSize: '55px',
        lineHeight: '70px',
        },
        reviews:{
            marginBottom:'136px',
        },
        reviewsContainer:{
            width:'1440px',
            paddingBottom:'64px',
            paddingRight: '72px',
            paddingLeft:'32px',
        },
        reviewsTitle:{
            paddingLeft:'535px',
        },
        account:{
            width:'990px',
        },
        accountContainer:{
            paddingLeft:'50px',
        },
        accountTitle:{
            fontSize: '50px',
            lineHeight: '66px',
        },
        accountImg:{
            width:'380px',
            paddingBottom:'48px',
            paddingRight: '90px',
        },

        footerContainer:{
            width: '990px',
        },
        commonContainer:{
            marginLeft:'85px',
            width: '960px',
        },
        
        footerPageContainerLeft:{
            marginRight:'45px',
        },
        footerPageContainerRight:{
            marginRight:'720px',
        },
    },
    '@media(max-width: 860px)':{
        Know:{
            width: '25px',
        },
        feauture:{
            width: '395px',
        },
        newsDashboard:{
            width: '580px',
        },
        joinContainer:{
            width: '860px',
            marginRight:'auto',
            marginLeft:'auto',
        },
        joinTitle:{
            marginBottom: '48px',
            fontSize: '58px',
            lineHeight: '60px',
            width: '800px',
        },
        class_from_props:{
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft:'auto',
        },
        reviewsContainer:{
            width: '860px',
            paddingBottom:'64px',
            paddingRight: 'auto',
            paddingLeft:'auto',
        },
        reviewsList:{
            paddingLeft: '500px',
            display: 'block',
        },

        account:{
            width:'990px',
        },
        accountContainer:{
            paddingLeft:'50px',
        },
        accountTitle:{
            fontSize: '50px',
            lineHeight: '66px',
        },
        accountImg:{
            width:'380px',
            paddingBottom:'48px',
            paddingRight: '90px',
        },
    },
    '@media(max-width: 660px)':{
        contBtn:{
            width: '100%',
            marginRight: '0',
            marginLeft: '0',
        },
        propsFirstUse:{
            marginTop:'50px',
            marginLeft: '-20px',  
        },
        Search:{
            display: 'block',
            marginLeft: '80px',
        },
        searchContainer:{
            display: 'inline-flex',
        },
        imgContent:{
            display: 'inline-flex',
            marginRight: '24px',
            marginLeft: '40px',
        },
            Searchimg:{
                width: '507px',
                height: '370px',
                display: 'inline-block',
                objectFit: 'cover',
                paddingRight: '12px',      
            },
        Know:{
            width: '660px',
            display: 'block',
            marginBottom: '60px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        knowTextContainer:{
        display: 'inline-block',
        },
        textBoxL:{
            paddingLeft: '16px',
        },
        textBoxR:{
            paddingLeft: '16px',
        },
        
        MobContainer:{
            display: 'block',
        },
        MobImg:{
            width: '294px',
            "&:not(:last-child)": {
                marginBottom: '35px',
            }
        },
        ImgList:{
            display: 'block',
            alignItems: 'center',
            paddingTop: '48px',
            paddingBottom: '25px',
        },
        ImgItem:{
            dispaly: 'flex',
            "&:not(:last-child)":{
                marginBottom: '30px',
            },
        },
    },
    '@media(max-width: 635px)':{
        Search:{
            width: '620px',
            paddingLeft: '0',
            marginRight: '0',
        },
        searchContainer:{
            display:'inline-block',
        },
        title:{
            justifyContent:'center',
            alignItems:'center', 
        },  
        TextContainer:{
            display: 'block',
        },  
        SearchText:{
        marginBottom: '60px',
        fontSize: '22px',   
        },
        imgContent:{
            display: 'block',
            marginRight: '24px',
            marginLeft: '20px',
        },
        Know:{
            width: '620px',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft: '0',
        },
        featureTitle:{
            paddingLeft:'0',
        },
        boardContainer:{
            width: '620',
            marginBottom: '80px',
            display: 'block',
        },
        Dashboard:{
            width: '580px',
            padding: '0 0',
            marginBottom:"115px",
        },
        dashboardInfo:{
            width: '500px',
            marginLeft: '0',
        },
        dashboardText:{
            fontSize: '30px',
            width: '400px',
        },
        dashboardTitle:{
        fontSize: '54px',
        lineHeight: '72px',
        letterSpacing: '2px',
        width: '500px',
        marginBottom: '90px',
        },
        join:{
            width: '620px',
            paddingLeft: '0',
        },
        news:{   
            width: '620px',
        },
        newsContainer:{
            display: 'block',
            paddingLeft:'0',
        },
        newsInfo:{
            paddingLeft: '0',
            marginLeft: '0',
        },
        newsDashboard:{
            marginTop: '45px',
            width: '500px',
            paddingLeft:'0',
        },      
        joinContainer:{
            width: '620px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '0',
            paddingRight: '150px',
            marginTop: '120px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        joinTitle:{
            fontSize: '62px',
            lineHeight: '72px',
            letterSpacing: '2px',
        },
        class_from_props:{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft:'auto',
        },
        experts:{
            marginTop:'80px',
            marginBottom:'50px',
            paddingLeft:'0',
            width: '550px',
    
        },
        expertsContainer:{
        display: 'block',
        
        },

        expertsTextContainer:{
            paddingLeft:'0',
            marginBottom: '50px',           
        },
        expertsText:{
        paddingTop:'50px',
        },
        expertsTitle:{
        fontSize: '55px',
        lineHeight: '68px',
        letterSpacing: '2px',
        },
        expertsImgContainer:{
            paddingLeft:'0',   
        },
        expertsList:{
            marginBottom: "30px",
            display: 'flex',
            flexWrap: 'wrap',
            paddingBottom: '34px',
            marginLeft: '-20px',  
        },
        reviewsList:{
            paddingLeft: '0',
        },
        reviewsTitle:{
            paddingLeft: '0',
        },
        reviewsText:{
            fontSize: '22px',

        },
        accountContainer:{
            display:'inline-block',
            paddingLeft: '0',
        },
        accountTitle:{
            fontSize: '54px',
            lineHeight: '64px',
            width: '550px',
            marginBottom: '61px',
        },
        accountImg:{
            marginTop: "60px",
            width:'360px',
        },
        footerPageContainerRight:{
            marginRight: '320px',
        },   
    },
    '@media(max-width: 500px)':{
        Search:{
            paddingLeft: '0',
        },
        searchContainer:{
            display: 'block',
        },
        propsFirstUse:{
            loginInput:{
                height: '78px',
                fontSize: '16px',
                lineHeight: '22px',
                padding: '20px 80px 20px 20px',
            }, 
        },
        feauture:{
            display: 'flex',
            marginLeft: '200px',  
        },       
        ImgList:{
            display: 'block',
            alignItems: 'center',
        },
        ImgItem:{
            dispaly: 'flex',
            "&:not(:last-child)":{
                marginRight: '65px',
            },
        },
    },
    '@media(max-width: 400px)':{

        searchContainer:{
            display: 'block',
        },
        propsFirstUse:{
            loginInput:{
                height: '78px',
                fontSize: '16px',
                lineHeight: '22px',
                padding: '20px 80px 20px 20px',
            }, 
        },
        feauture:{
            display: 'flex',
            marginLeft: '0',  
        },       
        ImgList:{
            display: 'block',
            alignItems: 'center',
        },
        ImgItem:{
            dispaly: 'flex',
            "&:not(:last-child)":{
                marginRight: '65px',
            },
        },
    },
});