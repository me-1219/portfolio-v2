import { useState } from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { blogPosts } from '../../data/data';

export const Blog = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (slug: string) => {
    setExpanded(e => ({ ...e, [slug]: !e[slug] }));
  };

  return (
    <Section id="blog">
      <SectionHeading label="// 05. writing" title="From the Blog" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post, i) => {
          const isExpanded = !!expanded[post.slug];
          const url = post.live || post.github;
          const hasExternal = Boolean(url);

          const openExternal = () => {
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
          };

          return (
            <article
              key={post.slug}
              className="flex flex-col p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-400/20 hover:bg-white/[0.05] transition-all duration-300 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-xs text-slate-500">{post.date}</span>

                <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-display font-semibold text-cream text-base mb-2 leading-snug group-hover:text-teal-400 transition-colors">
                {post.title}
              </h3>

              <p className={`text-slate-400 text-sm leading-relaxed flex-1 mb-4 ${isExpanded ? '' : 'line-clamp-5'}`}>
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => (hasExternal ? openExternal() : toggle(post.slug))}
                  className="flex items-center gap-2 text-teal-400 text-sm group-hover:gap-3 transition-all"
                >
                  {hasExternal ? 'Open post' : isExpanded ? 'Read less' : 'Read more'}
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 font-mono text-xs text-teal-400/60">
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};