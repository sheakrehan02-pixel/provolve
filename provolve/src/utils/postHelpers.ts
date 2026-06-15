import type { CollectionEntry } from 'astro:content';

export function getPostNumber(
  post: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[]
): string {
  const sorted = [...allPosts].sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  const index = sorted.findIndex((p) => p.slug === post.slug);
  return String(index + 1).padStart(3, '0');
}
