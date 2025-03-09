'use client';

import * as React from 'react';
import { Container, Box, Typography, Divider, Link, Toolbar } from '@mui/material';

export default function Resume() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          /Resume
        </Typography>
        <Typography variant="body1">
          Email:{' '}
          <Link href="mailto:me@willworland.com" underline="hover">
            me@willworland.com
          </Link>
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Professional Summary */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Professional Summary
        </Typography>
        <Typography variant="body1">
          Hey, I'm Will – a seasoned Senior Engineer and Universal Endpoint Management (UEM/EMM/MDM) specialist with a
          passion for all things tech. With a career spanning over 25 years, I've dedicated myself to mastering the art
          of the 'Mobile Digital Workplace' and ensuring that the devices driving today's innovations are not only
          secure but also optimized for peak performance.
          <br />
          <br />
          The last 10 years or so I've been on a knowledge journey, collecting as much experience and training as I can
          to become a Full Stack Software Engineer, and this year it finally became a reality. I've joined a team that
          focuses on I.T. Solution Automation as a Level 3 Software Engineer.
          <br />
          <br />
          Beyond my professional life, I'm a dedicated family person who enjoys spending quality time with my wife and
          kids. My interests extend to such things like learning new technologies, traveling, and the great outdoors.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Experience */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Experience
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="h3">
            Engineer 3 | Software || Enterprise Mobility
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            02/2024 - Current • Greater St. Louis Area
          </Typography>
          <Typography variant="body2">
            As a software engineer on the Automation team, I am focused on creating custom workflows and services for
            other engineering teams at Enterprise Mobility. I am bringing over my existing mobility projects: CICD
            Application Packaging Pipeline & Secure Lockdown Application (EM App Launcher) for MobiControl. I'll be
            expanding both offerings moving forward and look forward to working on new automation projects as they
            arise.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="h3">
            Engineer 3 | Systems || Enterprise Mobility
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            2019 - Current
          </Typography>
          <Typography variant="body2">
            As an Engineer III on the Mobility Workplace Solutions Engineering team at Enterprise Mobility, I drove
            innovation by challenging the status quo. I was and still am responsible for 'MobiLauncher' – a secure
            Lockdown application written in Modern JavaScript.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="h3">
            Mobility Consultant || NinexMobility
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            2019 - 2019 • San Francisco Bay Area
          </Typography>
          <Typography variant="body2">
            As a contract Mobility Consultant, I helped organizations stand up, migrate, and upgrade their Enterprise
            Mobility Management Solutions.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="h3">
            Engineer 2 | Systems || Uber Technologies
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            2017 - 2019 • San Francisco Bay Area
          </Typography>
          <Typography variant="body2">
            As a Client Platform Engineer, I helped Uber design and deploy their BYOD program for employee mobile
            devices. I wrote Puppet, Chef, and Chocolatey configurations for Linux, Mac, and Windows endpoints.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" component="h3">
            Consulting Engineer || Southwest Airlines via Genesis 10
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            2016 - 2017 • Dallas/Ft. Worth Metro
          </Typography>
          <Typography variant="body2">
            As a consulting engineer, my role was to challenge the team to innovate as well as acting as their Android
            Enterprise SME. The Mobility Foundation team is responsible for managing mission critical pilot and flight
            crew hardware and software via secure EMM. 
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Education */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1">
          General Ed. / Wireless Telecommunications
          <br />
          Collin College, 2002
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Skills */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1">
          Universal Endpoint Management (Soti MobiControl/VMWare AirWatch/MS Intune/IBM MaaS360), Infrastructure as Code
          (Terraform/Ansible/Puppet/Chef), Cloud Solutions (AWS/Azure/GoogleCloud/CloudFlare/GitHub/Bitbucket), Full
          Stack Development (HTML/CSS3/JavaScript/TypeScript), Stacks: (MERN/MEAN/Django/Flask), Frameworks:
          Bootstrap/Material/Express/NextJS, Automation: Python/Selenium/Appium
        </Typography>
      </Box>
      <Toolbar sx={{ mb: 2 }} />
    </Container>
  );
}
