import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Box } from '@mui/material';
import ProgressBar from '../molecules/ProgressBar';
import ButtonCourses from '../atoms/ButtonCourses';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'



export default function Courses(props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Continue de onde parou: </Title>
      {props.id}
      <ResponsiveContainer>
        <Box>
          <ProgressBar/>
          <Stack direction="row" spacing={2}>
            <Link to={'/aula'} ><ButtonCourses>Área de Ensino</ButtonCourses></Link>
            <ButtonCourses>Retomar</ButtonCourses>
          </Stack>
          
        </Box>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
