export interface EBackground {
    fecha: string;
    institucion: string;
    image: string;
    dialog: EBDialog
}

interface EBDialog {
    title: string;
    description: string;
}