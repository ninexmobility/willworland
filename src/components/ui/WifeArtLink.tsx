// WifeArtLink.tsx
import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';

/**
 * Compact callout that links to an external art portfolio/shop.
 * - Uses semantic <aside> for auxiliary content.
 * - Opens in a new tab with security headers.
 * - Derives a readable label from the URL if children are not provided.
 */
export interface WifeArtLinkProps {
  /** Absolute URL to the portfolio/shop, e.g. https://example.com */
  href: string;
  /** Optional custom link text; defaults to a prettified URL (no scheme or trailing slash). */
  children?: React.ReactNode;
}

export default function WifeArtLink({ href, children }: WifeArtLinkProps) {
  const fallbackLabel = React.useMemo(() => href.replace(/^https?:\/\//, '').replace(/\/$/, ''), [href]);

  return (
    <Box
      component="aside"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1,
        px: 1,
        py: 0.5,
        borderRadius: 2,
        bgcolor: (t) => (t.palette.mode === 'dark' ? t.palette.action.hover : 'grey.50'),
      }}
    >
      <Typography variant="h6" component="p" sx={{ m: 1, textAlign: 'center', width: '100%' }}>
        Check out my wife’s art!{' '}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="secondary"
          aria-label="Open art portfolio in a new tab"
        >
          {children ?? fallbackLabel}
        </Link>
      </Typography>
    </Box>
  );
}
