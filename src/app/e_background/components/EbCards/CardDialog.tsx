import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
    children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
    ) {
    return (
    <Slide
        direction="up"
        ref={ref}
        {...props}
    />
    );
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
};

    return (
        <div>
            <Button
            variant="text"
            onClick={handleClickOpen}
            >
            Henry
            </Button>
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            >
            {/* <DialogTitle>{"Description"}</DialogTitle> */}
            {/* <DialogContent> */}
                <Card
                >
                    <CardHeader
                        title='Description'
                    >
                        
                    </CardHeader>
                    <CardContent>
                        <Typography>
                        Entrenamiento intensivo en programación, enfocado en desarrollar habilidades y competencias aplicadas a Frontend y Backend, por medio de la aplicación de lenguajes y tecnologias de vanguardia.
                        Construcción de proyectos web individuales y grupales por medio del uso de metodologias y herramientas agiles, propiciando el aprendizaje colaborativo, así como el entorno laboral del sector.           
                        </Typography>
                    </CardContent>
                </Card>
                {/* <DialogContentText id="alert-dialog-slide-description">
                Entrenamiento intensivo en programación, enfocado en desarrollar habilidades y competencias aplicadas a Frontend y Backend, por medio de la aplicación de lenguajes y tecnologias de vanguardia.
                Construcción de proyectos web individuales y grupales por medio del uso de metodologias y herramientas agiles, propiciando el aprendizaje colaborativo, así como el entorno laboral del sector.
                </DialogContentText> */}
            {/* </DialogContent> */}
            {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions> */}
            </Dialog>
        </div>
    );
}
