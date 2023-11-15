import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionServicesInformation from 'components/SectionServicesInformation/SectionServicesInformation';
import SectionServicesInformationDetail from 'components/SectionServicesInformationDetail/SectionServicesInformationDetail';
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
            <SectionCurrentPage title={AboutPageTitle}/>

            <SectionNeedHelp />
            <SectionRitualGoods />
            <SectionServicesInformation />
            <SectionServicesInformationDetail />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default AboutPage;