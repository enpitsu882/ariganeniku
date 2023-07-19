import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="blog-footer">
      <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 fw-bold">
        <li><Link to="/" class="nav-link">Home</Link></li>
        <li><Link to="/profile" class="nav-link">Profile</Link></li>
        <li><Link to="/products" class="nav-link">Products</Link></li>
        <li><Link to="/blog" class="nav-link">Blog</Link></li>
      </ul>
      <small>&copy; 2023 ariganeniku</small>
    </footer>
  );
}

export default Footer;
