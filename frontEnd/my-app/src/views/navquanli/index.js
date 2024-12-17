import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Log from "../../assets/logo3.png";
function NavQuanLy() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">
          <img style={{ height: "50px" }} src={Log} alt="loggo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/product/manage_products">
              Quản lý sản phẩm
            </Nav.Link>
            <Nav.Link href="/product/manage_categories">
              Quản lý danh mục hàng hóa
            </Nav.Link>
            <Nav.Link href="/product/manage_sizes">
              Quản lý danh mục size
            </Nav.Link>
            <Nav.Link href="/orders/mangae_orders">
              Quản lý các đơn hàng
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavQuanLy;
