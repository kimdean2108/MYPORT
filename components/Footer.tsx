import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kim Kyung-su. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-50">
          Designed with a Borderless Mindset.
        </p>
      </div>
    </footer>
  );
};

export default Footer;