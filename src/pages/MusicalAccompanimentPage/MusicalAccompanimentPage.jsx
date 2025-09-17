import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionMusicalAccompaniment from 'components/SectionMusicalAccompaniment/SectionMusicalAccompaniment';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

const MusicalAccompanimentTitle = [{ title: 'Музичний супровід' }];

const MusicalAccompanimentPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionContactsList />
        <SectionCurrentPage title={MusicalAccompanimentTitle} />
        <SectionMusicalAccompaniment />
        <SectionNeedHelp />
        <SectionNavigationList />
        <SectionContacts />
        <SectionRitualServicesList />
      </main>
      <Footer />
    </>
  );
};

export default MusicalAccompanimentPage;
