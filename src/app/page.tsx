'use client';

import * as React from 'react';
import { Box, Container } from '@mui/material';
import ResponsiveAppBar from '@/components/ui/AppBar';
import Footer from '@/components/ui/Footer';

// Page Components (ensure these are client components if they use client-only APIs)
import Resume from '@/app/resume/page';
//import Projects from '@/app/projects/page';
import UsesTech from '@/app/uses/page';
import DevCard from '@/components/ui/DevCard';

const contentComponents: { [key: string]: JSX.Element } = {
  home: <DevCard />,
  resume: <Resume />,
  //projects: <Projects />,
  uses: <UsesTech />,
};

export default function Home() {
  const [activePage, setActivePage] = React.useState<string>('home');

  const renderContent = () => contentComponents[activePage] || <DevCard />;

  // Normalize the navigation key by removing leading slashes and lowercasing.
  const handleNavChange = (page: string) => {
    const cleanedPage = page.replace(/^\/+/, '').toLowerCase();
    setActivePage(cleanedPage || 'home');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '90vh' }}>
      <ResponsiveAppBar onNavChange={handleNavChange} />
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          py: 2,
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 160px)', // Adjust this value to account for your AppBar and Footer heights.
        }}
      >
        {renderContent()}
      </Container>
      <Footer />
    </Box>
  );
}
