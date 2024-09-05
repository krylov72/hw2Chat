import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
    return (
        <Slider
        
            sx={{ // стили для слайдера // пишет студент
                width:'300px',
                height:'7px',
                color:'#52af77',
                '& .MuiSlider-thumb': {
                    position:'relative',
                    zIndex:1,
                    height: 20,
                    width: 20,
                    backgroundColor: '#fff',
                    border:'1px solid #52af77 ',
                    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
                    '&::before':{
                        content: '" "',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  // Центрирование
                        height: '10px',
                        width: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#52af77',  // Зеленая точка
                        zIndex: 1,
                      },
                    '&:focus, &:hover, &.Mui-active': {
                      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
                      // Reset on touch devices, it doesn't add specificity
                      '@media (hover: none)': {
                        boxShadow: iOSBoxShadow,
                      },
                    },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
