'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  Linkedin, 
  Github, 
  MapPin, 
  Sparkles,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

interface ContactSectionProps {
  onNotify: (toast: { type: 'success' | 'error' | 'info'; title: string; message: string }) => void;
}

export default function ContactSection({ onNotify }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [lastSentData, setLastSentData] = useState<{ name: string; email: string; message: string } | null>(null);

  const [activationNotice, setActivationNotice] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onNotify({
        type: 'error',
        title: 'Incomplete Form',
        message: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    setIsSubmitting(true);
    setSendSuccess(false);
    setActivationNotice(false);
    const submittedData = { ...formData };
    setLastSentData(submittedData);

    // Option A: Try EmailJS library if credentials configured in environment
    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      try {
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            from_name: submittedData.name,
            from_email: submittedData.email,
            message: submittedData.message,
            to_email: 'o.m.dhanave@gmail.com',
          },
          emailJsPublicKey
        );

        setIsSubmitting(false);
        setSendSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#8b5cf6', '#10b981', '#6366f1', '#c084fc'],
          });
        } catch {}

        onNotify({
          type: 'success',
          title: 'Message Delivered via EmailJS!',
          message: `Thank you, ${submittedData.name}! Your message was dispatched directly to o.m.dhanave@gmail.com.`,
        });
        return;
      } catch (ejsErr) {
        console.warn('EmailJS attempt failed, falling back to Nodemailer endpoint:', ejsErr);
      }
    }

    try {
      // Option B: Dispatch via local /api/contact endpoint (Powered by Nodemailer)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });


      const data = await response.json().catch(() => null);
      setIsSubmitting(false);

      if (data && data.success) {
        setSendSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#8b5cf6', '#10b981', '#6366f1', '#c084fc'],
          });
        } catch {}

        onNotify({
          type: 'success',
          title: data?.method === 'nodemailer' ? 'Delivered via Nodemailer!' : 'Message Delivered!',
          message: `Thank you, ${submittedData.name}! Your message has been dispatched to o.m.dhanave@gmail.com.`,
        });
      } else if (data && data.needsActivation) {
        setActivationNotice(true);
        onNotify({
          type: 'info',
          title: 'One-Time Activation Required',
          message: `FormSubmit sent an 'Activate Form' link to o.m.dhanave@gmail.com. Click it once in your inbox to enable auto-forwarding.`,
        });
      } else {
        throw new Error(data?.message || 'Submission failed');
      }

    } catch (err) {
      console.warn('API submission had an issue, falling back to Gmail composer', err);
      setIsSubmitting(false);

      onNotify({
        type: 'info',
        title: 'Alternate Option: Direct Gmail',
        message: `Use the 'Open in Gmail' button below to send directly to o.m.dhanave@gmail.com.`,
      });
    }
  };

  const handleOpenInGmail = () => {
    const data = lastSentData || formData;
    const name = data.name || 'Portfolio Visitor';
    const email = data.email || 'visitor@example.com';
    const msg = data.message || 'Hi Omkar, I would like to discuss a project with you.';

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=o.m.dhanave@gmail.com&su=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Omkar,\n\n${msg}\n\nFrom:\n${name} (${email})`
    )}`;

    window.open(gmailUrl, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onNotify({
      type: 'info',
      title: 'Email Copied',
      message: `${personalInfo.email} copied to your clipboard.`,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s build something great.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
            Have a project, opportunity, or technical question? Your message goes directly to{' '}
            <strong className="text-purple-600 dark:text-purple-400 font-semibold">{personalInfo.email}</strong>.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connect Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-8">
                  Messages submitted here reach Omkar at <strong className="text-slate-800 dark:text-white/90">o.m.dhanave@gmail.com</strong>. Feel free to also reach out via WhatsApp or email client.
                </p>

                <div className="space-y-4">
                  {/* Email Item */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 group hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-white/40">Email</p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white/90 hover:text-purple-600 dark:hover:text-purple-300 truncate block transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors flex-shrink-0"
                      title="Copy Email"
                      type="button"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone Item */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 group hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-white/40">Phone</p>
                        <a
                          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                          className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors"
                      title="Call directly"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* WhatsApp Item */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 group hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-white/40">WhatsApp</p>
                        <a
                          href={personalInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                        >
                          Direct Chat
                        </a>
                      </div>
                    </div>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Location Item */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-slate-200/60 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-white/60 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-white/40">Location</p>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white/90">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-white/40">Connect Socially</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Active Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Direct to o.m.dhanave@gmail.com
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-6">
                Fill out the fields below. Clicking &quot;Send Message&quot; submits directly to Omkar&apos;s email address.
              </p>

              {/* Success Notification Banner */}
              {sendSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-800 dark:text-emerald-300 animate-fadeIn">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Message delivered successfully!</p>
                    <p className="text-emerald-700/80 dark:text-emerald-300/80 mt-0.5">
                      Your inquiry was dispatched directly to <strong>o.m.dhanave@gmail.com</strong>. Omkar will reply shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* One-Time Activation Banner */}
              {activationNotice && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold text-amber-950 dark:text-amber-100">
                        One-Time Activation Required for o.m.dhanave@gmail.com
                      </p>
                      <p className="text-amber-800/90 dark:text-amber-200/90 mt-1 leading-relaxed">
                        FormSubmit has sent an <strong>&ldquo;Activate Form&rdquo;</strong> confirmation email to <strong>o.m.dhanave@gmail.com</strong>. Please check your Gmail (Inbox or Spam folder) and click that link once to activate instant forwarding.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={handleOpenInGmail}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Send Directly via Gmail</span>
                        </button>
                        <a
                          href="https://mail.google.com/mail/u/0/#inbox"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-medium transition-colors"
                        >
                          <span>Open Gmail Inbox</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-white/70 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#07080b] border border-slate-200 dark:border-white/10 focus:border-purple-500/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-white/70 uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#07080b] border border-slate-200 dark:border-white/10 focus:border-purple-500/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-white/70 uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#07080b] border border-slate-200 dark:border-white/10 focus:border-purple-500/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(139,92,246,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending to o.m.dhanave@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenInGmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white text-xs sm:text-sm font-medium border border-slate-200 dark:border-white/10 transition-all"
                    title="Compose directly in Gmail"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Open in Gmail</span>
                  </button>
                </div>
              </form>

              {/* Helpful footer note */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-white/40">
                <span>Direct delivery to: o.m.dhanave@gmail.com</span>
                <span>Protected by FormSubmit</span>
              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
}
