import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionHearse from 'components/SectionHearse/SectionHearse';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const HearsePageTitle = [{ title: 'Катафалк – ритуальний транспорт' }]

const HearsePage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={HearsePageTitle} />
            <SectionHearse />  
            <SectionNeedHelp />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default HearsePage;