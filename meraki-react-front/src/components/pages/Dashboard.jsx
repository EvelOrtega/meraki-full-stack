import { Default } from '../templates'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import OtherCourses from '../organisms/OtherCourses';
import Courses from '../organisms/Courses';

export default function Dashboard1() {
  const usuario = JSON.parse(localStorage.getItem("mykey"));

  return (
    <Default>
        <Box>
            <h2 className='textbar'>Que bom que você veio, {usuario.user.nome} {usuario.user.sobrenome} !</h2>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid   item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    backgroundColor: '#EEE9E9'
                  }}
                >
                  <Courses />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Courses />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Courses />
                </Paper>
              </Grid>
            </Grid>
        </Container>
        <h2 className='textbar'>Conheça nossos outros cursos: </h2>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Outros cursos */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <OtherCourses />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <OtherCourses />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <OtherCourses />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </Default>
  )
}
