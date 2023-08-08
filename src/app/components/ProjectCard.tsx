import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export const ProjectCard = () => {
    return (
        <Card>
        <CardActionArea>
            <CardHeader
            sx={{
                backgroundColor: "#e0b1cb",
            }}
            title="Yo soy el titulo"
            subheader='Languaje'
            ></CardHeader>
        </CardActionArea>
        <CardContent>
            <Typography variant="h6" gutterBottom textAlign="center">
            Soy el contenido del proyecto
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" startIcon={<ShareIcon />}>
                Share
            </Button>
            <Button variant="outlined" startIcon={<ReadMoreIcon />}>
            Learn more
            </Button>
        </CardActions>
        </Card>
    );
};
