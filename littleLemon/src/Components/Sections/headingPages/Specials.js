 import Carousel from './SpecialsCarousel';
 import salad from '../../../likeness/foodPhotos/salad.jpg';
 import food9 from '../../../likeness/foodPhotos/food9.jpg';
 import postre from '../../../likeness/foodPhotos/maemu.jpg';
 import SpecialCard from './CardInfo/SpecialCard';
 
function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This weeks specials</h1>
        <a className="action-button" href={require('../../../likeness/memu.jpg')} target="_blank" rel="noreferrer">Online Menu</a>
      </article>
 
      <section className="specials-cards">
        <SpecialCard image={salad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, creme cheese, and olives.
        Dressed with salt, hot pepper, and olive oil."/>
        <SpecialCard image={food9}name="Salmon and quinoa dish" price="$16.99" description="This zesty quinoa salad is delicious all on its own, with inspiration from
         the Mediterranean."/>
        <SpecialCard image={postre} name="Chocolate chip cookies" price="$8.50" description="Fresh baked chocolate chip cookies, warm spices, 
        lemon, and an easy lattice crust."/>
      </section>
 
      <section className="specials-carousel">
       <Carousel />
      </section>
    </section>
  );
}

export default Specials;