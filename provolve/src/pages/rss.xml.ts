import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  const site = context.site ?? new URL('https://provolve.net');
  return rss({
    title: 'Provolve Blog',
    description: 'A student-led platform exploring medicine, innovation, and healthcare challenges.',
    site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${site}/blog/${post.slug}/`,
    })),
  });
}

