import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RitualServicesPage = lazy(() => import('pages/RitualServicesPage/RitualServicesPage'));
const RitualGoodsPage = lazy(() => import('pages/RitualGoodsPage/RitualGoodsPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const PricePage = lazy(() => import('pages/PricePage/PricePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RitualAgentPage = lazy(() => import('pages/RitualAgentPage/RitualAgentPage'));
const FuneralOrganizationPage = lazy(() => import('pages/FuneralOrganizationPage/FuneralOrganizationPage'));

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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/ritualagent" element={<RitualAgentPage />} />
          <Route path="/funeralorganization" element={<FuneralOrganizationPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
