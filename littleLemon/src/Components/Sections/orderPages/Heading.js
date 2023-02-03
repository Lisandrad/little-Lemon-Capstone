import food5 from '../../../likeness/foodPhotos/food5.jpg';

function Heading() {
  return (
    <header className="reserve-table">
      <img className="header-reserve"src={food5} alt="Little Lemon Ingredients"></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  );
}

export default Heading;