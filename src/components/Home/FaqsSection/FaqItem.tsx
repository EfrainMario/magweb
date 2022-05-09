import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { ButtonBase, Collapse, Typography } from '@mui/material'
import React, { useState } from 'react'



type FaqItemProps = {
    title: String,
    children: String
}
const btnStyles = {
    p: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px #eceff1 solid'
}



export default function FaqItem({ title, children }: FaqItemProps) {
    const [isOpen, setOpen] = useState<boolean>(false);


    function handleButtonClick() {
        setOpen((isOpen) => !isOpen);
    }

    return (
        <>
            <ButtonBase onClick={handleButtonClick} component={Typography} variant={'h6'} sx={btnStyles}>
                {title}
                <ExpandMoreRoundedIcon />
            </ButtonBase>

            <Collapse in={isOpen} >
                <Typography variant={'body1'} sx={{ py: 2, pl: 4}}>
                    {children}
                </Typography>
            </Collapse>
        </>
    )
}
