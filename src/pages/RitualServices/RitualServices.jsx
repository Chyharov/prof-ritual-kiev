import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import Footer from 'components/Footer/Footer';



const SecondPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionContactsList />
          <SectionCurrentPage />
        </main>
      <Footer />
    </>
  );
};



export default SecondPage;