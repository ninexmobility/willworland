'use client';

import * as React from 'react';
import { Box, Container, IconButton, Link, Stack, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsThreadsFill } from 'react-icons/bs';
import LogoIcon from '@/components/images/LogoIcon';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ mt: 1 }}>
      {'Copyright © '}
      <Link href="https://willworland.com/" underline="hover">
        Will Worland
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.paper',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: { xs: 3, sm: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="h6"
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                NINEX
              </Typography>
            </Box>
            <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
            <Copyright />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ color: 'text.secondary' }}>
            <IconButton color="primary" size="small" href="https://github.com/ninexmobility" aria-label="GitHub">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" size="small" href="https://www.threads.net/@ninexeng" aria-label="Threads">
              <BsThreadsFill />
            </IconButton>
            <IconButton
              color="primary"
              size="small"
              href="https://www.linkedin.com/in/willworland/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
