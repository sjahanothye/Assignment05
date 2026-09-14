import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import YourStack from './components/YourStack';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Auth modal
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  // Fetch JSON data
  useEffect(() => {
    setIsLoading(true);
    fetch('./technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch dataset');
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setTimeout(() => setIsLoading(false), 200);
      })
      .catch((err) => {
        console.error('Error fetching technologies:', err);
        toast.error('Failed to load technologies');
        setIsLoading(false);
      });
  }, []);

  // Add to stack handler
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`⚠️ ${tech.name} is already added to your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`🎉 ${tech.name} added to your stack!`);
  };

  // Remove single item
  const handleRemoveItem = (techId, techName) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`🗑️ ${techName} removed from your stack.`);
  };

  // Clear all
  const handleClearAll = () => {
    if (selectedStack.length === 0) return;
    const count = selectedStack.length;
    setSelectedStack([]);
    toast.info(`🧹 Cleared all ${count} technologies from your stack.`);
  };

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const selectedStackIds = selectedStack.map((item) => item.id);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-pink-100 selection:text-[#E0287D]">
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Sticky Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={(e) => {
            e.preventDefault();
            document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onLearnMoreClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Technologies & Stack Section */}
        <section id="technologies" className="py-8 sm:py-12 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading matching Figma */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1120] tracking-tight">
                Explore the <span className="text-[#E0287D]">Technologies</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Loading or Main Grid */}
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: 3-column Technology Cards (9 cols on lg/xl) */}
                <div className="lg:col-span-8 xl:col-span-9">
                  <TechGrid
                    technologies={technologies}
                    selectedStackIds={selectedStackIds}
                    onAddToStack={handleAddToStack}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                  />
                </div>

                {/* Right: Your Stack Sidebar (3 cols on xl, 4 cols on lg) */}
                <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24">
                  <YourStack
                    stack={selectedStack}
                    onRemoveItem={handleRemoveItem}
                    onClearAll={handleClearAll}
                  />
                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}
