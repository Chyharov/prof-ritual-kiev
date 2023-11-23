import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutMusicalAccompanimen from 'components/SectionAboutMusicalAccompanimen/SectionAboutMusicalAccompanimen';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const MusicalAccompanimenPageTitle = [{ title: 'Музичний супровід' }]

const MusicalAccompanimenPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={MusicalAccompanimenPageTitle} />
            <SectionAboutMusicalAccompanimen />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default MusicalAccompanimenPage;