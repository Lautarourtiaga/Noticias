import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function header(props) {

return (
<div className="makeStyles-heroContent-2">
    <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Administrador de Noticias! 
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Puede listar, añadir, remover y/o filtrar noticias por año. (͡ ͡° ͜ つ ͡͡°)
        </Typography>
        <div className="makeStyles-heroButtons-3">
            <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="contained" color="primary">
                Agregar noticia
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary">
                Posible filtro
                </Button>
            </Grid>
            </Grid>
        </div>
    </Container>
</div>
)};