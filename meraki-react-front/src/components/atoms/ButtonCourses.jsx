import * as React from 'react';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ButtonCourses(props) {
    const navigate = useNavigate();
  return (
      <Button variant="contained">{props.children}</Button>
  );
}
