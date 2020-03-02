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
import Copyright from './Copyright'

export default function AppFooter(props) {
    return (
    <footer className="makeStyles-footer-8">
        <Typography variant="h6" align="center" gutterBottom>
        Contacto
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Tel: 011-1231-1231. Email: lautarourtiaga99@gmail.com
        </Typography>
        <Copyright />
    </footer>
    )
}