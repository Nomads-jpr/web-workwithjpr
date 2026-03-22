import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogPost as BlogPostType } from '../content/blog';

interface Props {
  post: BlogPostType;
  onNavigate: (view: string) => void;
  openCalendly: () => void;
}

const BlogPost: React.FC<Props> = ({ post, onNavigate, openCalendly }) => {
  useEffect(() => {
    document.title = `${post.title} | JPR Consulting`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.description);

    return () => {
      document.title = 'Webdesign Berlin — Moderne Websites für lokale Unternehmen | JPR Consulting';
    };
  }, [post]);

  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-white">
      <div className="container mx-auto max-w-3xl px-4 py-20">
        <button
          onClick={() => onNavigate('BLOG')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Artikel
        </button>

        <article>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-12 pb-8 border-b border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-li:text-gray-300
            prose-strong:text-white
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-table:text-sm
            prose-th:text-left prose-th:text-gray-400 prose-th:font-medium prose-th:border-b prose-th:border-white/10 prose-th:pb-2
            prose-td:border-b prose-td:border-white/5 prose-td:py-2 prose-td:text-gray-300
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Author Bio */}
          <div className="mt-12 flex items-center gap-4 p-6 rounded-2xl bg-zinc-800/40 border border-white/5">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="/jan-rojek.jpg" alt="Jan Rojek" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold">Jan Rojek</p>
              <p className="text-gray-400 text-sm">Gründer & Webentwickler bei JPR Consulting GmbH. Über 7 Jahre Erfahrung in Webentwicklung, Performance Marketing und KI-Automatisierung.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-zinc-800/40 border border-white/5 text-center">
            <h3 className="text-2xl font-display font-bold tracking-tight mb-3">Bereit für deine neue Website?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Kostenloser Entwurf — du siehst vorab, was du bekommst. Kein Risiko, keine Verpflichtung.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 rounded-lg active:scale-[0.98] hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-gradient-shift bg-[length:200%_200%]"
              style={{ backgroundImage: 'linear-gradient(135deg, #06b6d4, #10b981, #06b6d4)' }}
            >
              Kostenloser Entwurf anfragen
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
