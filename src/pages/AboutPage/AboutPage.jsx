import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionFuneralBureauProfitual from 'components/SectionFuneralBureauProfitual/SectionFuneralBureauProfitual';
import SectionAdvantages from 'components/SectionAdvantages/SectionAdvantages';
import SectionOrganizationFuneralServices from 'components/SectionOrganizationFuneralServices/SectionOrganizationFuneralServices';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const AboutPageTitle = [{ title: 'Про Нас' }]

const AboutPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={AboutPageTitle} />
            <SectionFuneralBureauProfitual />  
            <SectionAdvantages />  
            <SectionOrganizationFuneralServices />  
            <SectionNeedHelp />
            <SectionRitualGoods />
            <SectionNavigationList />    
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default AboutPage;