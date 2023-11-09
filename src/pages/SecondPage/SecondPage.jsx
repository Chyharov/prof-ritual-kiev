import Header from 'components/Header/Header';
import SecondPageComponent from 'components/SecondPageComponent/SecondPageComponent';
import Footer from 'components/Footer/Footer';



const SecondPage = () => {
  return (
    <>
      <Header />
        <main>
          <SecondPageComponent />
        </main>
      <Footer />
    </>
  );
};



export default SecondPage;