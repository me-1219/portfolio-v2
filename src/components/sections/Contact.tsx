import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone , Github, Linkedin } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { personalInfo } from '../../data/data';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_xdlhk63';
const EMAILJS_TEMPLATE_ID = 'template_lnq3my9';
const EMAILJS_PUBLIC_KEY = 'SipoUafY5XdiMCVCb';

type Status = 'idle' | 'sending' | 'success' | 'error';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Dynamic import to keep bundle lean
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 font-body focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] transition-all duration-200';

  return (
    <Section id="contact">
      <SectionHeading label="// 06. contact" title="Get In Touch" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I&apos;m currently open to full-stack and frontend opportunities.
            Whether you have a role, a project, or just want to connect — my inbox is open.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <Mail size={16} className="text-teal-400" />
              <span className="font-mono text-sm group-hover:underline">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <Phone size={16} className="text-teal-400" />
              <span className="font-mono text-sm group-hover:underline">{personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <Github size={16} className="text-teal-400" />
              <span className="font-mono text-sm group-hover:underline">github.com/me-1219</span>
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <Linkedin size={16} className="text-teal-400" />
              <span className="font-mono text-sm group-hover:underline">linkedin.com/in/mebit-melak-gashaye-31b2b1379/</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 py-3 bg-teal-400 text-navy-900 font-display font-semibold text-sm rounded-lg hover:bg-teal-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/20"
          >
            <Send size={15} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-teal-400 text-sm font-mono">
              <CheckCircle size={15} />
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
              <AlertCircle size={15} />
              Something went wrong. Try emailing me directly.
            </div>
          )}

          
        </form>
      </div>
    </Section>
  );
};
