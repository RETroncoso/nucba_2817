import React from 'react'
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EjemploMaterialUI = () => {

    const arrayDePrueba = [
        {
            title: "Titulo1",
            desc : "Descrp 1"
        },
        {
            title: "Titulo2",
            desc : "Descrp 2"
        },
        {
            title: "Titulo3",
            desc : "Descrp 3"
        },
        {
            title: "Titulo4",
            desc : "Descrp 4"
        },
    ]

  return (<>
    {/* <Button disabled variant="contained" >Botonito</Button>
    <Button href="#text-buttons" variant="outlined" >Botonito outlined</Button> */}
    <div>
        

        {
            arrayDePrueba.map((objeto) => {
                return <Accordion>
                            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>{objeto.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {objeto.desc}
                </Typography>
                </AccordionDetails>
                </Accordion>
            })
        }

        

    
    </div>
    

    </>
  )
}

export default EjemploMaterialUI