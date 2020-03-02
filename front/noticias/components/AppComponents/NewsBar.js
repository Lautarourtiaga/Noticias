import React from 'react';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    }
  }));



export default function NewsBar(props){

    const classes = useStyles();

    return (

    <AppBar position="relative">
        <Toolbar>
        <Button style={{color: "white", marginRight: "15px"}}>
          <MenuIcon fontSize="large"/>
        </Button>
        
        
        <Typography variant="h6" color="inherit" noWrap>
            Cambiar a drawer
        </Typography>
        </Toolbar>
    </AppBar>
)}
