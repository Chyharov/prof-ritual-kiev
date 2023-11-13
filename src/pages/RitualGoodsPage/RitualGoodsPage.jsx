import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

const RitualGoodsPageTitle = [{ title: 'Ритуальні Товари' }]

const RitualGoodsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionContactsList />
          <SectionCurrentPage title={RitualGoodsPageTitle} />
          <SectionContacts />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default RitualGoodsPage;