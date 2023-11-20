import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';

import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';

import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const CargoPageTitle = [{ title: 'Вантаж 200 – перевезення померлих' }]

const CargoPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={CargoPageTitle} />

            <SectionNeedHelp />

            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default CargoPage;