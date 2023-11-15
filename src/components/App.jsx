import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RitualServicesPage = lazy(() => import('pages/RitualServicesPage/RitualServicesPage'));
const RitualGoodsPage = lazy(() => import('pages/RitualGoodsPage/RitualGoodsPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const PricePage = lazy(() => import('pages/PricePage/PricePage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ritualservices" element={<RitualServicesPage />} />
          <Route path="/ritualgoods" element={<RitualGoodsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
