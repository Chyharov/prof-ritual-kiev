import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RitualServices = lazy(() => import('pages/RitualServices/RitualServices'));
const RitualGoods = lazy(() => import('pages/RitualGoods/RitualGoods'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ritualservices" element={<RitualServices />} />
          <Route path="/ritualgoods" element={<RitualGoods />} />
        </Routes>
      </Suspense>
    </>
  );
};
