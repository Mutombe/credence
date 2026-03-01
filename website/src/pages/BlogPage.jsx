import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Zap, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/siteData';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-credence-black overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" /> Blog
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6">
              News & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Industry insights, safety tips, and project updates from the Credence team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 bg-credence-gray rounded-3xl overflow-hidden">
              {/* Vision: A prominent article image - solar panels on a commercial building */}
              <div className="relative h-64 lg:h-auto">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-credence-red text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-credence-red font-heading font-semibold text-sm uppercase tracking-wider">{blogPosts[0].category}</span>
                <h2 className="font-heading font-extrabold text-2xl lg:text-3xl mt-2 mb-4">{blogPosts[0].title}</h2>
                <p className="text-credence-gray-dark leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-credence-gray-dark mb-6">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blogPosts[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blogPosts[0].readTime}</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <button className="group inline-flex items-center gap-2 text-credence-red font-heading font-bold">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-extrabold text-2xl mb-8">Latest Articles</h2>
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <StaggerItem key={post.id}>
                <article className="group hover-lift">
                  {/* Vision: Article-specific imagery matching the topic */}
                  <div className="rounded-2xl overflow-hidden mb-4 relative">
                    <img src={post.image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-credence-black text-xs font-heading font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-credence-gray-dark mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-credence-red transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-credence-gray-dark text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-credence-red text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-credence-black relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10 text-center max-w-2xl">
          <AnimatedSection>
            <Zap className="w-10 h-10 text-credence-red mx-auto mb-4" />
            <h2 className="font-heading font-extrabold text-3xl text-white mb-4">Stay Powered Up</h2>
            <p className="text-white/60 mb-8">Subscribe to our newsletter for the latest industry insights and Credence updates.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-credence-red transition-colors" />
              <button className="bg-credence-red text-white px-8 py-4 rounded-xl font-heading font-bold magnetic-btn whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
