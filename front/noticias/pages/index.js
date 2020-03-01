import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Album from '../components/Album'
import NewsBar from '../components/AppComponents/NewsBar';
import NewsFooter from '../components/AppComponents/NewsFooter'
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));



const Noticias = function({news}) {
    
    const classes = useStyles();
    
    return (
    
        <React.Fragment>
            
            <CssBaseline />
            
            <NewsBar
            
            ></NewsBar>

            <main>
            
                <Album
                classes = {classes}
                news = {news}
                ></Album>
                
            
            </main>
          {/* Footer */}
            <NewsFooter
            classes = {classes}
            >

            </NewsFooter>
          {/* End footer */}
        </React.Fragment>
    )
} 

export default Noticias


Noticias.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/v1/news')
  const json = await res.json()
  
  return { news: json }
}
