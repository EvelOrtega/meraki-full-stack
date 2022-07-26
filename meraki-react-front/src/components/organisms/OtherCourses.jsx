import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ButtonCourses from '../atoms/ButtonCourses';
import Stack from '@mui/material/Stack';


function preventDefault(event) {
  event.preventDefault();
}

export default function OtherCourses(props) {
  return (
    <React.Fragment>
      <Title>{props.category} Quality Assurance</Title>
      <Typography component="p" variant="h4">
        {props.name} nome do curso
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.description} descrição
      </Typography>
      <div>
      <Stack direction="row" spacing={2}>
        <ButtonCourses>Comprar agora</ButtonCourses>
        <ButtonCourses>Saiba mais</ButtonCourses>
      </Stack>
      </div>
    </React.Fragment>
  );
}