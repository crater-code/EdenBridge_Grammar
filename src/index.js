import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './led-display-fix.css';
import App from './App';
import IdeologyPageCSS from './pages/IdeologyPageCSS';
import Study from './pages/Study';
import Foundation from './pages/Foundation';
import Formation from './pages/Formation';
import Orientation from './pages/Orientation';
import Direction from './pages/Direction';
import LearningFramework from './pages/LearningFramework';
import BoardOfDirectors from './pages/BoardOfDirectors';
import FoundersMessage from './pages/FoundersMessage';
import Careers from './pages/Careers';
import ApplyNow from './pages/ApplyNow';
import FAQ from './pages/FAQ';
import Policies from './pages/Policies';
import PageTitle from './components/PageTitle';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/our-ideology" element={<IdeologyPageCSS />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/foundation-phase" element={<Foundation />} />
          <Route path="/study/formation-phase" element={<Formation />} />
          <Route path="/study/orientation-phase" element={<Orientation />} />
          <Route path="/study/direction-phase" element={<Direction />} />
          <Route path="/study/learning-framework" element={<LearningFramework />} />
          <Route path="/team/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/team/founders-message" element={<FoundersMessage />} />
          <Route path="/team/careers" element={<Careers />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
);
