import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand as={Link} to="/home">
                    NumericalMethods
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown
                            title="Root of Equations"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/bisection">
                                Bisection
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/falseposition">
                                False-Position
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">
                                Graphical
                            </NavDropdown.Item> */}
                            <NavDropdown.Item as={Link} to="/newton">
                                Newton-raphson
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/onepoint">
                                Onepoint
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/secant">
                                Secant
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Linear Algebra"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/cramer">
                                Cramer's rule
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gausseli">
                                Gauss-Elimination Method
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gaussejordan">
                                Gauss-Jordan Method
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/lu">
                                LU Decomposition
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jacobi">
                                Jacobi Iteration Method
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/seidel">
                                Gauss-seidel
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/conjugate">
                                Conjugate Gradient Method
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Interpolation"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/newtondivide">
                                Newton's divided difference
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/lagrange">
                                Lagrange
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/spline">
                                Spline
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Regression" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/linearregression">
                                Linear
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/polynomialregression"
                            >
                                Polynomial
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/multiplelinearregression"
                            >
                                Multiple Linear
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavBar
