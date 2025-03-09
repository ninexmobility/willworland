'use client';

import * as React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of Project One goes here.',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two goes here.',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three goes here.',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Container maxWidth="xl" sx={{ my: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projectsData.map((project, index) => (
          <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
