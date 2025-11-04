import NavbarSinglePage from './components/NavbarSinglePage';
import Footer from './components/Footer';
import HomeSinglePage from './pages/HomeSinglePage';
import AboutSinglePage from './pages/AboutSinglePage';
import ProjectsSinglePage from './pages/ProjectsSinglePage';
import ContactSinglePage from './pages/ContactSinglePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSinglePage />
      <main className="flex-grow">
        <section id="home">
          <HomeSinglePage />
        </section>
        <section id="about">
          <AboutSinglePage />
        </section>
        <section id="projects">
          <ProjectsSinglePage />
        </section>
        <section id="contact">
          <ContactSinglePage />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
