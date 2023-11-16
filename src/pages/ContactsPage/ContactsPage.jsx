import Header from 'components/Header/Header';
import SectionContactsList from 'components/SectionContactsList/SectionContactsList';
import SectionCurrentPage from 'components/SectionCurrentPage/SectionCurrentPage';
import SectionContactsInformation from 'components/SectionContactsInformation/SectionContactsInformation';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';


const ContactsPageTitle = [{ title: 'Контакти' }]

const ContactsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionContactsList />
          <SectionCurrentPage title={ContactsPageTitle} />
          <SectionContactsInformation />
          <SectionContacts />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};



export default ContactsPage;