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
                    Pyszne wrap z tortilli z chrupi??cymi krewetkami sma??onymi w panierce panko, z soczystym mango, rukol?? i czerwon?? cebul?? oraz s??odkim sosem chili.
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
                        SK??ADNIKI (4 PORCJE):
                        4 tortille,
                        200 g krewetek,
                        ??y??ka m??ki,
                        po 1/2 ??y??eczki papryki i czosnku oraz szczypta chili,
                        1 jajko,
                        panierka panko lub bu??ka tarta,
                        olej ro??linny np. kokosowy,
                    </Typography>
                    <Typography paragraph>
                        DODATKI:
                        sa??ata lodowa, rukola, kolendra,
                        mango,
                        papryka,
                        czerwona cebula,
                    </Typography>
                    <Typography>
                        PRZYGOTOWANIE:
                        Krewetki rozmrozi??, obra?? z pancerzy, oderwa?? ogonki i usun???? jelita. Osuszy?? na papierowych r??cznikach, doprawi?? sol?? i pieprzem.
                        M??k?? wymiesza?? z papryk??, czosnkiem i chili. W otrzymanej mieszance obtoczy?? krewetki.
                        Macza?? je w roztrzepanym jajku a nast??pnie obtoczy?? w panko lub bu??ce tartej.
                        Usma??y?? na oleju z dw??ch stron na z??oty kolor. Od??o??y?? na r??cznik papierowy.
                        Tortille podgrza?? (np. w mikrofali), na ??rodek na??o??y?? poszatkowan?? sa??at??, rukol?? oraz kolendr??.
                        Doda?? po 4 - 5 krewetki, pod??u??ne kawa??ki obranego mango, paseczki papryki oraz pi??rka czerwonej cebuli.
                        Doda?? sos (zmieszany majonez ze s??odkim sosem chili).
                        Zawin???? tortill??: najpierw zawin???? d???? a potem do ??rodka dwa przeciwleg??e boki.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default RecipeReviewCard;