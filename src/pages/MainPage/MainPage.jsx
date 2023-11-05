import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionAboutCompany from 'components/SectionAboutCompany/SectionAboutCompany';
import SectionAdvantages from 'components/SectionAdvantages/SectionAdvantages';
import ComponentForMainPage from 'components/ComponentForMainPage/ComponentForMainPage';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionRitualServices />
        <SectionAboutCompany />
        <SectionAdvantages />
        <ComponentForMainPage />     
      </main>
    </>
  );
};



export default MainPage;