import { Card, CardContent } from "@mui/material"

interface Props {
    institution:string
    duration:string
    grade:string
    description:string
    image:string
}


export const EbCard = ( {institution}:Props ) => {
    return (
        <Card>
            <CardContent>
                {institution}
            </CardContent>
        </Card>
    )
}