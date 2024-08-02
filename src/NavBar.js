import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/music">Music</Link>
      <Link to="/about">About</Link>
      <Link to="/events">Events</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}