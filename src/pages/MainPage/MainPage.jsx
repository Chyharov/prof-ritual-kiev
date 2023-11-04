import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import ComponentForMainPage from 'components/ComponentForMainPage/ComponentForMainPage';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <ComponentForMainPage />      
      </main>
    </>
  );
};



export default MainPage;