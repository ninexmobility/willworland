'use client';

import * as React from 'react';
import { Box, Container, Dialog, DialogContent, Divider, Stack, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';

export default function UsesTech() {
  const [motdOpen, setMotdOpen] = React.useState(false);

  const handleOpenMotd = () => setMotdOpen(true);
  const handleCloseMotd = () => setMotdOpen(false);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          /Uses
        </Typography>
        <Typography variant="body1" sx={{ px: 2, mb: 2 }}>
          Make sure to check out
          <MuiLink href="https://uses.tech" target="_blank" rel="noopener noreferrer" underline="hover">
            uses.tech
          </MuiLink>
          for a list of everyone's /uses pages!
        </Typography>
        <Stack spacing={3}>
          {/* Editor, Terminal & Extensions Section */}
          <Box component="article">
            <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
              Editor, Terminal & Extensions
            </Typography>
            <Typography variant="body1" sx={{ px: 2, mb: 1 }}>
              I use
              <MuiLink
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                VSCode
              </MuiLink>
              as my primary editor. For DotNet/C#, I favor
              <MuiLink
                href="https://visualstudio.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                MS Visual Studio
              </MuiLink>
              , and for React projects, I sometimes use
              <MuiLink
                href="https://www.jetbrains.com/webstorm/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                JetBrains WebStorm
              </MuiLink>
              .
            </Typography>
            <Typography variant="body2" sx={{ px: 2 }}>
              I also rely on several extensions. Here are a few must-haves:
            </Typography>
            <Box component="ul" sx={{ pl: 4, my: 1 }}>
              {[
                'One Dark Pro Dark Theme',
                'npm Intellisense',
                'Path Intellisense',
                'Auto Import',
                'Auto Rename Tag',
                'Code Spell Checker',
                'Indent Rainbow',
                'Code Snap',
              ].map((ext) => (
                <li key={ext}>
                  <Typography variant="body2">{ext}</Typography>
                </li>
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
          </Box>

          {/* Typography Section */}
          <Box component="article">
            <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
              Typography
            </Typography>
            <Typography variant="body1" sx={{ px: 2 }}>
              I use Roboto from
              <MuiLink
                href="https://fonts.google.com/specimen/Roboto"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Google Fonts
              </MuiLink>
              in most of my projects.
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Box>

          {/* Terminal Setup Section */}
          <Box component="article">
            <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
              Terminal Setup
            </Typography>
            <Typography variant="body1" sx={{ px: 2, mb: 1 }}>
              I use iTerm2 with
              <MuiLink href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer" underline="hover">
                Oh-My-Zsh!
              </MuiLink>
              with the <code>robbyrussell</code> theme and a custom
              <MuiLink
                component="button"
                onClick={handleOpenMotd}
                sx={{ cursor: 'pointer', textDecoration: 'underline', p: 0, m: 0 }}
              >
                MOTD
              </MuiLink>
              .
            </Typography>
            <Dialog open={motdOpen} onClose={handleCloseMotd} maxWidth="md" fullWidth>
              <DialogContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '53.33%', // Adjust ratio as needed
                  }}
                >
                  <Image src="/images/ninex-motd.jpeg" alt="MOTD" fill style={{ objectFit: 'contain' }} />
                </Box>
              </DialogContent>
            </Dialog>
            <Divider sx={{ my: 2 }} />
          </Box>

          {/* Desktop Apps Section */}
          <Box component="article">
            <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
              Desktop Apps
            </Typography>
            <Typography variant="body1" sx={{ px: 2 }}>
              I use Homebrew <code>brew</code> for package management, Postman for API prototyping, Chrome for everyday
              browsing, Firefox Developer Edition for testing, Raycast for window management, and Rocket for emojis.
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Box>

          {/* Desk Setup Section */}
          <Box component="article">
            <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
              Desk Setup
            </Typography>
            <Typography variant="subtitle1" component="h3" sx={{ pl: 4, my: 1 }}>
              Compute
            </Typography>
            <Box component="ul" sx={{ pl: 4, my: 1 }}>
              <li>
                <Typography variant="body1">
                  <strong>Personal main:</strong> Apple MacBook Pro M4 Pro
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Personal Windows:</strong> Asus ROG Strix 17" (2018) Core i7 / GTX 1080 8GB
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Work main:</strong> Apple MacBook Pro M3 Max
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Work Windows:</strong> Dell - Core i9
                </Typography>
              </li>
            </Box>
            <Typography variant="subtitle1" component="h3" sx={{ pl: 4, my: 1 }}>
              Render
            </Typography>
            <Box component="ul" sx={{ pl: 4, my: 1 }}>
              <li>
                <Typography variant="body1">
                  <strong>Monitor:</strong> Samsung 43" M70B Series Smart Monitor
                  <MuiLink
                    href="https://www.samsung.com/us/computing/monitors/smart-monitors/43-smart-monitor-m7-m70d-4k-uhd-with-streaming-tv-speakers-and-usb-c-portable-ssd-t7-usb-3-2-2tb-bndl-1738606278254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    LINK
                  </MuiLink>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>KVM:</strong> GREATHTEK USB 3.0 4k@60hz 4 to 1
                  <MuiLink href="https://a.co/d/539NOEe" target="_blank" rel="noopener noreferrer" underline="hover">
                    LINK
                  </MuiLink>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Keyboard:</strong> Kinesis Gaming RGB Edge / Tented / Custom Layout/Lighting
                  <MuiLink
                    href="https://gaming.kinesis-ergo.com/edge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    LINK
                  </MuiLink>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Mouse:</strong> Logitech MX Ergo
                  <MuiLink
                    href="https://www.logitech.com/en-us/shop/p/mx-ergo-wireless-trackball-mouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    LINK
                  </MuiLink>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Speakers:</strong> Edifier R1280DB Powered Bluetooth Bookshelf Speakers
                  <MuiLink href="https://a.co/d/hR5z7xu" target="_blank" rel="noopener noreferrer" underline="hover">
                    LINK
                  </MuiLink>
                </Typography>
              </li>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
