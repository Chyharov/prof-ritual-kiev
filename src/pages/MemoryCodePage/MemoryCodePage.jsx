import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionMemoryCode from 'components/SectionMemoryCode/SectionMemoryCode';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

const MemoryCodeTitle = [{ title: 'Код спогадів' }];

const MemoryCodePage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionContactsList />
        <SectionCurrentPage title={MemoryCodeTitle} />
        <SectionMemoryCode />
        <SectionNeedHelp />
        <SectionNavigationList />
        <SectionContacts />
        <SectionRitualServicesList />
      </main>
      <Footer />
    </>
  );
};

export default MemoryCodePage;
