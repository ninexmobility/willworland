// open-next.config.ts (or .js with ESM)
import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

/**
 * SSG-only: no Queue, no Tag Cache.
 * Uses Workers Static Assets as a read-only incremental cache
 * and enables cache interception for faster hits.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
