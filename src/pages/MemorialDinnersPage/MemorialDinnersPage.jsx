import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionMemorialDinners from 'components/SectionMemorialDinners/SectionMemorialDinners';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';

import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const MemorialDinnersPageTitle = [{ title: 'Поминальні обіди' }]

const MemorialDinnersPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={MemorialDinnersPageTitle} />
            <SectionMemorialDinners />
            <SectionNeedHelp />

            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default MemorialDinnersPage;