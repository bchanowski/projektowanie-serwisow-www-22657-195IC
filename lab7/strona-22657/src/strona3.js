import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        BC
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="TORTILLA Z KREWETKAMI I MANGO"
                subheader="23 Listopada, 2021"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/tortille-z-krewetkami-i-mango-01.jpg"
                alt="Tortilla"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Pyszne wrap z tortilli z chrupiącymi krewetkami smażonymi w panierce panko, z soczystym mango, rukolą i czerwoną cebulą oraz słodkim sosem chili.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        SKŁADNIKI (4 PORCJE):
                        4 tortille,
                        200 g krewetek,
                        łyżka mąki,
                        po 1/2 łyżeczki papryki i czosnku oraz szczypta chili,
                        1 jajko,
                        panierka panko lub bułka tarta,
                        olej roślinny np. kokosowy,
                    </Typography>
                    <Typography paragraph>
                        DODATKI:
                        sałata lodowa, rukola, kolendra,
                        mango,
                        papryka,
                        czerwona cebula,
                    </Typography>
                    <Typography>
                        PRZYGOTOWANIE:
                        Krewetki rozmrozić, obrać z pancerzy, oderwać ogonki i usunąć jelita. Osuszyć na papierowych ręcznikach, doprawić solą i pieprzem.
                        Mąkę wymieszać z papryką, czosnkiem i chili. W otrzymanej mieszance obtoczyć krewetki.
                        Maczać je w roztrzepanym jajku a następnie obtoczyć w panko lub bułce tartej.
                        Usmażyć na oleju z dwóch stron na złoty kolor. Odłożyć na ręcznik papierowy.
                        Tortille podgrzać (np. w mikrofali), na środek nałożyć poszatkowaną sałatę, rukolę oraz kolendrę.
                        Dodać po 4 - 5 krewetki, podłużne kawałki obranego mango, paseczki papryki oraz piórka czerwonej cebuli.
                        Dodać sos (zmieszany majonez ze słodkim sosem chili).
                        Zawinąć tortillę: najpierw zawinąć dół a potem do środka dwa przeciwległe boki.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default RecipeReviewCard;