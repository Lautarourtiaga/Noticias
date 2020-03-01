import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

export default function AlbumDetail(props) {
    
    const cards = props.news.json;

    return (
        
        <Container className="MuiContainer-root makeStyles-cardGrid-4 MuiContainer-maxWidthMd" maxWidth="xl">
                {/* End hero unit */}
                
                <Grid container spacing={4}>
                    {cards.map(card => (
                    <Grid item key={card.id} xs={12} sm={6} md={4} xl={3}>
                        <Card className="MuiPaper-root MuiCard-root makeStyles-card-5 MuiPaper-elevation1 MuiPaper-rounded">
                        <CardMedia
                            className="MuiCardMedia-root makeStyles-cardMedia-6"
                            image="/frankocean.jpg"
                            title="Image title"
                        />
                        <CardContent className="MuiCardContent-root makeStyles-cardContent-7">
                        <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
                        {new Date(card.date).toLocaleDateString('en-US')}
                        </Typography>
                            
                            
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                            </Typography>
                            <Typography color="textSecondary" style={{marginBottom: 12}}>

                            {card.authors.reduce((acc,val) => (acc.length == 4)? acc + val: `${acc}, ${val}`,"Por ")}
                            </Typography>
                            <Typography>
                            {card.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="view" color="primary">
                                <VisibilityIcon />
                            </IconButton>
                            <IconButton aria-label="edit" color="secondary">
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>)
}