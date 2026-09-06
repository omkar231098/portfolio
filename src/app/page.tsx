'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import JourneySection from '@/components/sections/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import Toast, { ToastMessage } from '@/components/ui/Toast';

export default function Home() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (toast: { type: 'success' | 'error' | 'info'; title: string; message: string }) => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastMessage = { id, ...toast };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-purple-500/30">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection onNotify={addToast} />
      </main>

      <Footer />
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
