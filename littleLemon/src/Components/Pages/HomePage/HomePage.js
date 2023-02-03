import Heading from '../../Sections/headingPages/Heading.js';
import Specials from '../../Sections/headingPages/Specials';
import Testimonials from '../../Sections/headingPages/Testimonials';
import About from '../../Sections/headingPages/About';

function HomePage() {
  return(
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}

export default HomePage;