import React from 'react';
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../content/blog';

interface Props {
  onNavigate: (view: string, slug?: string) => void;
}

const BlogIndex: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-white">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <button
          onClick={() => onNavigate('HOME')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </button>

        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Wissen & Einblicke</h1>
          <p className="text-gray-400 text-lg max-w-[55ch]">
            Tipps zu Webdesign, SEO und digitaler Sichtbarkeit für lokale Unternehmen in Berlin.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigate('BLOG_POST', post.slug)}
              className="group p-8 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-display font-bold tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-4 max-w-[60ch]">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-cyan-400 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Lesen <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
