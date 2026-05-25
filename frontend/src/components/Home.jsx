import React from 'react';
import { NavLink } from 'react-router';

function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden font-sans">
      
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0066cc] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-30 pointer-events-none"></div>

      <div className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 text-center py-20">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Welcome to the future of blogging</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Where Ideas Become <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Masterpieces.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Join a community of thinkers and creators. Share your stories with a beautiful, 
          minimalist platform designed for reading and writing without distractions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NavLink 
            to="/register" 
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          >
            Start Writing Free
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </NavLink>
          
          <NavLink 
            to="/login" 
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md font-semibold transition-colors flex items-center justify-center"
          >
            Sign In
          </NavLink>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-6 pb-20 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Sleek Editor</h3>
          <p className="text-gray-400 leading-relaxed">Focus on what matters most—your content. Our distraction-free editor feels like magic.</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
          <p className="text-gray-400 leading-relaxed">Connect with readers and other authors. Comment, share, and grow your audience naturally.</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Secure & Fast</h3>
          <p className="text-gray-400 leading-relaxed">Built with the latest technologies to ensure your data is secure and pages load instantly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;