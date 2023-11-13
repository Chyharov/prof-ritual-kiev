import Header from 'components/Header/Header';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const RitualGoods = () => {
  return (
    <>
      <Header />
        <main>
          <SectionContacts />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default RitualGoods;