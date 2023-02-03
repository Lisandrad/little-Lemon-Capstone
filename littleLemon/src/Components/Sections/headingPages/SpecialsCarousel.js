import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import salad from '../../../likeness/foodPhotos/salad.jpg';
import food9 from '../../../likeness/foodPhotos/food9.jpg';
import postre from '../../../likeness/foodPhotos/postre.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
  return (
      <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
          <SpecialCard image={salad} name="Greek Salad" price="$12.99" description="Creme Cheese, tomato, lettuce"/>
          <SpecialCard image={food9}name="Salmon with Roasted Red Pepper Quinoa Salad" price="$16.99" description="Salmon, Quinoa green onions"/>
          <SpecialCard image={postre} name="Blueberry Pie" price="$8.50" description="Frozen blueberries, Warm spices"/>
      </Carousel>
  );
}