import { post as wasKostet } from './was-kostet-eine-website-berlin';
import { post as automatisierung } from './automatisierung-fuer-kleine-unternehmen';
import { post as backend } from './individuelles-backend-vs-wordpress';
import { post as kiSeo } from './ki-suchmaschinenoptimierung-2026';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  wasKostet,
  automatisierung,
  backend,
  kiSeo,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
