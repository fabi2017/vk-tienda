import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';

export default function UnderConstruction() {
  
    const [progress, setProgress] = useState(0);

  useEffect(() => {
     const timer = setInterval(() => {
       setProgress((oldProgress) => {
         if (oldProgress === 95) {
           return 0;
         }
         const diff = Math.random() * 30;
         return Math.min(oldProgress + diff, 95);
       });
     }, 500);
 
     return () => {
       clearInterval(timer);
     };
   }, []);



  return (
    <div className='contConstruction'>
            <Box sx={{ width: '70%' }}>
                    <h2 className = "subtitulo" >Sitio en construcción</h2>
                    <LinearProgress variant="determinate" value={progress} color="success"/>
            </Box>
    </div>   
  );
}