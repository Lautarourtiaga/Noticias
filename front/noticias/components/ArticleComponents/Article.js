import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import * as moment from 'moment';
import 'moment/locale/es';

// props.obj para el objeto json
export default function article(props) {

  moment.locale('es');

    return (
        <Card >
            <CardHeader
                title={props.obj.authors.reduce((acc,val) => (acc.length == 9)? acc + val: `${acc}, ${val}`,"Autores: ")}
                subheader={`Publicado el ${moment(props.obj.date).format('LL')}`}
            />
            

            <CardContent>
                <Typography align="center" style={{ fontSize:50 }} color="textPrimary" gutterBottom variant="h5" component="h2">
                {props.obj.title}
                </Typography>
                <Typography align="center" style={{ fontSize:30 ,marginBottom: "3.5%"}} variant="body2" color="textSecondary" component="p">
                {props.obj.body}
                </Typography>

                <Typography align="center" style={{ fontSize:20 }} variant="body2" color="textPrimary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus arcu, at dictum orci mattis non. Nam eu dolor condimentum, gravida velit eget, tincidunt tortor. Etiam gravida nunc felis, ac eleifend felis viverra eu. Nulla feugiat felis ac turpis dignissim mollis. Nulla porttitor nulla est, sit amet viverra ligula blandit nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ex mauris, aliquet sed nisi eu, dapibus dapibus orci. Pellentesque eu lorem nisi. Integer pulvinar dolor consectetur odio malesuada, eget semper mi varius. Cras venenatis hendrerit leo, a molestie magna bibendum eu. Quisque ante dui, tempus nec eleifend at, lacinia et mauris. Phasellus sodales nibh sed vestibulum elementum. Morbi volutpat justo ac nulla sodales bibendum. Aenean at faucibus tellus. Integer porta ante ut nisi vulputate, in tempus justo luctus. In imperdiet mauris eget elit placerat, sed dignissim nisl aliquam.

Mauris a risus et tortor venenatis maximus sit amet semper neque. Cras vel rhoncus augue, id vestibulum tellus. Nam in venenatis ante, vel dictum arcu. Morbi eget tortor diam. Phasellus congue odio et pretium rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin purus. Donec in lorem ipsum. Duis pellentesque sem turpis, quis maximus turpis eleifend vitae. Duis posuere porttitor ipsum at ullamcorper.

Nullam rhoncus ipsum sit amet vestibulum congue. Proin vestibulum sodales lorem, in lacinia tellus elementum eu. Cras vel porttitor elit. Sed bibendum porta enim ac placerat. Curabitur mauris lectus, pellentesque a erat non, elementum consectetur mi. Curabitur tempor ligula eu arcu iaculis, id rhoncus tellus tempor. In aliquam urna augue, vel congue neque interdum sed. Proin tempor, erat eget egestas molestie, nisl ante hendrerit nibh, quis ultrices mi erat suscipit enim. Donec consequat dolor volutpat nunc lobortis, ac euismod lectus sollicitudin. Aenean placerat, elit et pharetra elementum, quam tortor pulvinar nibh, nec congue elit arcu a dui. Integer consequat porttitor ligula, ut iaculis velit. Curabitur quis mattis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Integer tristique ornare justo, at sodales est luctus in. Suspendisse ut odio suscipit, viverra lorem at, blandit mauris. Pellentesque faucibus vulputate dui, eget consequat ante. Suspendisse vehicula dapibus diam et pretium. Morbi est nunc, tincidunt sed molestie volutpat, porta a ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi nibh ante, cursus at dolor vel, euismod pulvinar dui. Proin fermentum mollis congue. Mauris eros nisi, iaculis at porta vel, condimentum vel felis.

Maecenas fermentum mollis sagittis. Ut id sollicitudin odio. Morbi nisl tortor, tempus sit amet metus vitae, dictum tincidunt massa. Fusce vestibulum eros lorem, ac vulputate diam hendrerit nec. Nulla facilisi. Vestibulum tellus dui, convallis sed quam et, placerat pulvinar nibh. Etiam eget interdum lectus. Maecenas enim urna, imperdiet a odio a, placerat efficitur velit. Quisque hendrerit aliquam arcu eget egestas. Curabitur blandit, massa vel suscipit tempus, eros orci lobortis lorem, ut posuere orci augue in odio.
                </Typography>
            </CardContent>
          <CardActions style={{align:"center"}}>
            <LabelBottomNavigation></LabelBottomNavigation>
          </CardActions>
        </Card>
      )};



    function LabelBottomNavigation() {
        const [value, setValue] = React.useState('recents');
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
        <BottomNavigation value={value} onChange={handleChange} >
            <BottomNavigationAction label="Share" value="share" icon={<ShareIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="like" value="like" icon={<ThumbUpIcon />} />
            <BottomNavigationAction label="dislike" value="dislike" icon={<ThumbDownIcon />} />
        </BottomNavigation>
        );
      }