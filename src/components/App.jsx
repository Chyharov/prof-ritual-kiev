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
const CremationPage = lazy(() => import('pages/CremationPage/CremationPage'));
const HearsePage = lazy(() => import('pages/HearsePage/HearsePage'));
const CargoPage = lazy(() => import('pages/CargoPage/CargoPage'));
const MortuaryServicesPage = lazy(() => import('pages/MortuaryServicesPage/MortuaryServicesPage'));
const MemorialDinnersPage = lazy(() => import('pages/MemorialDinnersPage/MemorialDinnersPage'));
const DocumentsForFuneralPage = lazy(() => import('pages/DocumentsForFuneralPage/DocumentsForFuneralPage'));
const RitualHallPage = lazy(() => import('pages/RitualHallPage/RitualHallPage'));
const MusicalAccompanimenPage = lazy(() => import('pages/MusicalAccompanimenPage/MusicalAccompanimenPage'));
const RemovalBodyPage = lazy(() => import('pages/RemovalBodyPage/RemovalBodyPage'));
const RequiemServiceByPriestPage = lazy(() => import('pages/RequiemServiceByPriestPage/RequiemServiceByPriestPage'));
const SanitationOfPremisesPage = lazy(() => import('pages/SanitationOfPremisesPage/SanitationOfPremisesPage'));
const MakingFuneralPortraitPage = lazy(() => import('pages/MakingFuneralPortraitPage/MakingFuneralPortraitPage'));
const FuneralEscortByMedicalPersonnalPage = lazy(() => import('pages/FuneralEscortByMedicalPersonnalPage/FuneralEscortByMedicalPersonnalPage'));
const RitualWreathPage = lazy(() => import('pages/RitualWreathPage/RitualWreathPage'));
const СoffinsPage = lazy(() => import('pages/СoffinsPage/СoffinsPage'));
const CrossesPage = lazy(() => import('pages/CrossesPage/CrossesPage'));
const RitualMonumentsPage = lazy(() => import('pages/RitualMonumentsPage/RitualMonumentsPage'));

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
          <Route path="/cremation" element={<CremationPage />} />
          <Route path="/hearse" element={<HearsePage />} />
          <Route path="/cargo" element={<CargoPage />} />
          <Route path="/mortuaryservices" element={<MortuaryServicesPage />} />
          <Route path="/memorialdinners" element={<MemorialDinnersPage />} />
          <Route path="/documentsforfuneral" element={<DocumentsForFuneralPage />} />
          <Route path="/ritualhall" element={<RitualHallPage />} />
          <Route path="/musicalaccompanimen" element={<MusicalAccompanimenPage />} />
          <Route path="/removalbody" element={<RemovalBodyPage />} />
          <Route path="/requiemservicebypriest" element={<RequiemServiceByPriestPage />} />
          <Route path="/sanitationofpremises" element={<SanitationOfPremisesPage />} />
          <Route path="/makingfuneralportrait" element={<MakingFuneralPortraitPage />} />
          <Route path="/funeralescortbymedicalpersonnal" element={<FuneralEscortByMedicalPersonnalPage />} />
          <Route path="/ritualwreath" element={<RitualWreathPage />} />
          <Route path="/сoffins" element={<СoffinsPage />} />
          <Route path="/crosses" element={<CrossesPage />} />
          <Route path="/ritualmonuments" element={<RitualMonumentsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
