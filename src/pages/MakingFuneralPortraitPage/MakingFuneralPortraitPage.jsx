import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutMakingFuneralPortrait from 'components/SectionAboutMakingFuneralPortrait/SectionAboutMakingFuneralPortrait';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const MakingFuneralPortraitPageTitle = [{ title: 'Виготовлення фотопортрету для похорону' }]

const MakingFuneralPortraitPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={MakingFuneralPortraitPageTitle} />
            <SectionAboutMakingFuneralPortrait />
            <SectionNeedHelp />
            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default MakingFuneralPortraitPage;