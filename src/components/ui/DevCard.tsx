'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Divider } from '@mui/material';
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
import WifeArtLink from './WifeArtLink';

/**
 * DevCard Component
 *
 * Displays a developer card with a profile image, title, description, skills, and social share buttons.
 *
 * @component
 * @example
 * return (
 *   <DevCard />
 * )
 */
export default function DevCard() {
  // Array of skills with corresponding icons
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 style={{ verticalAlign: 'middle' }} /> },
    { name: 'CSS3', icon: <SiCss3 style={{ verticalAlign: 'middle' }} /> },
    { name: 'JavaScript', icon: <SiJavascript style={{ verticalAlign: 'middle' }} /> },
    { name: 'TypeScript', icon: <SiTypescript style={{ verticalAlign: 'middle' }} /> },
    { name: 'React', icon: <SiReact style={{ verticalAlign: 'middle' }} /> },
    { name: 'Next.js', icon: <SiNextdotjs style={{ verticalAlign: 'middle' }} /> },
    { name: 'Python', icon: <SiPython style={{ verticalAlign: 'middle' }} /> },
    { name: 'Shell', icon: <SiShell style={{ verticalAlign: 'middle' }} /> },
    { name: 'HCL', icon: <SiHcl style={{ verticalAlign: 'middle' }} /> },
    { name: 'AWS', icon: <SiAmazon style={{ verticalAlign: 'middle' }} /> },
    { name: 'Azure', icon: <VscAzure style={{ verticalAlign: 'middle' }} /> },
    { name: 'CloudFlare', icon: <SiCloudflare style={{ verticalAlign: 'middle' }} /> },
  ];

  // Details used for sharing via react-share
  const izUrl = 'https://neuronomadstudios.com';
  const shareUrl = 'https://willworland.com';
  const shareTitle = "Will 'ninex' Worland - Sr. Hybrid Engineer";
  const shareText =
    'Sr. Hybrid Engineer | Enterprise Mobility | Ex-Uber | Ex-SWA | Ex-Samsung - Automating the technology that drives business forward.';

  return (
    <Container sx={{ padding: 2 }}>
      <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
        <WifeArtLink href={izUrl} />
        {/* Profile Image */}
        <CardMedia>
          <Image src="/images/will.jpg" alt="Profile Image" width={800} height={600} style={{ objectFit: 'cover' }} />
        </CardMedia>
        <CardContent>
          {/* Title */}
          <Typography gutterBottom variant="h5" component="div">
            {shareTitle}
          </Typography>
          {/* Description */}
          <Typography variant="body2" color="text.secondary">
            {shareText}
          </Typography>
          <Divider sx={{ margin: '16px 0' }} />
          {/* Skills Section */}
          <Typography variant="subtitle1" component="div" sx={{ marginBottom: 1 }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Box key={skill.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {skill.icon}
                <Typography variant="body2">{skill.name}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          {/* Social Share Buttons */}
          <FacebookShareButton url={shareUrl} title={shareTitle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={shareTitle}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <EmailShareButton url={shareUrl} subject={shareTitle} body={shareText}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </CardActions>
      </Card>
    </Container>
  );
}
