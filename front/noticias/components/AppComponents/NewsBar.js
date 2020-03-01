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
        <CameraIcon className="MuiSvgIcon-root makeStyles-icon-9"/>
        
        <Typography variant="h6" color="inherit" noWrap>
            Articulos
        </Typography>
        </Toolbar>
    </AppBar>
)}
