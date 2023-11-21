import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionAboutDocumentsForFuneral from 'components/SectionAboutDocumentsForFuneral/SectionAboutDocumentsForFuneral';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';

import SectionNavigationList from 'components/SectionNavigationList/SectionNavigationList';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const DocumentsForFuneralPageTitle = [{ title: 'Оформлення документів для похорону' }]

const DocumentsForFuneralPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionContactsList />
            <SectionCurrentPage title={DocumentsForFuneralPageTitle} />
            <SectionAboutDocumentsForFuneral />  
            <SectionNeedHelp />

            <SectionNavigationList />
            <SectionContacts />
            <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default DocumentsForFuneralPage;