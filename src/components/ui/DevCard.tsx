'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Divider, Link } from '@mui/material';
import Image from 'next/image';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiShell,
  SiHcl,
  SiAmazon,
  SiCloudflare,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';

export default function MediaCard() {
  const skills = [
    { name: 'React', icon: <SiReact style={{ verticalAlign: 'middle' }} /> },
    { name: 'Next.js', icon: <SiNextdotjs style={{ verticalAlign: 'middle' }} /> },
    { name: 'TypeScript', icon: <SiTypescript style={{ verticalAlign: 'middle' }} /> },
    { name: 'JavaScript', icon: <SiJavascript style={{ verticalAlign: 'middle' }} /> },
    { name: 'HTML5', icon: <SiHtml5 style={{ verticalAlign: 'middle' }} /> },
    { name: 'CSS3', icon: <SiCss3 style={{ verticalAlign: 'middle' }} /> },
    { name: 'Python', icon: <SiPython style={{ verticalAlign: 'middle' }} /> },
    { name: 'Shell', icon: <SiShell style={{ verticalAlign: 'middle' }} /> },
    { name: 'HCL', icon: <SiHcl style={{ verticalAlign: 'middle' }} /> },
    { name: 'AWS', icon: <SiAmazon style={{ verticalAlign: 'middle' }} /> },
    { name: 'Azure', icon: <VscAzure style={{ verticalAlign: 'middle' }} /> },
    { name: 'CloudFlare', icon: <SiCloudflare style={{ verticalAlign: 'middle' }} /> },
  ];

  // Share details for react-share
  const shareUrl = 'https://willworland.com';
  const shareTitle = "Will 'ninex' Worland - Sr. Hybrid Engineer";
  const shareText = 'Check out this resume and projects!';

  return (
<Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
          <iframe
            src="https://ninexeng.carrd.co/"
            title="Carrd Page"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </Box>
      </Box>
  );
}
