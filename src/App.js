import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Bisection from './pages/rootofequation/Bisection'
import FalsePosition from './pages/rootofequation/FalsePosition'
import NewtonRaphson from './pages/rootofequation/NewtonRaphson'
import Secant from './pages/rootofequation/Secant'
import Onepoint from './pages/rootofequation/Onepoint'
import Cramer from './pages/linearalgebra/Cramer'
import GaussElimination from './pages/linearalgebra/GaussElimination'
import GaussJordan from './pages/linearalgebra/GaussJordan'
import LUDecomposition from './pages/linearalgebra/LUDecomposition'
import GaussJacobi from './pages/linearalgebra/JacobiMethod'
import Seidel from './pages/linearalgebra/Seidel'
import Conjugate from './pages/linearalgebra/Conjugate'
import NewtonDivide from './pages/interpolation/Newton'
import Lagrange from './pages/interpolation/Lagrange'
import Spline from './pages/interpolation/Spline'
import LinearRegression from './pages/regression/Linear'
import PolynomialRegression from './pages/regression/Polynomial'
import MultipleLinearRegression from './pages/regression/Multiple'
import NavBar from './components/Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <NavBar></NavBar>
            <Route path={'/home'}>
                <Home />
            </Route>
            <Switch>
                <Route path={'/bisection'}>
                    <Bisection />
                </Route>
                <Route path={'/falseposition'}>
                    <FalsePosition />
                </Route>
                <Route path={'/newton'}>
                    <NewtonRaphson />
                </Route>
                <Route path={'/onepoint'}>
                    <Onepoint />
                </Route>
                <Route path={'/secant'}>
                    <Secant />
                </Route>
                <Route path={'/cramer'}>
                    <Cramer />
                </Route>
                <Route path={'/gausseli'}>
                    <GaussElimination />
                </Route>
                <Route path={'/gaussejordan'}>
                    <GaussJordan />
                </Route>
                <Route path={'/lu'}>
                    <LUDecomposition />
                </Route>
                <Route path={'/jacobi'}>
                    <GaussJacobi />
                </Route>
                <Route path={'/seidel'}>
                    <Seidel />
                </Route>
                <Route path={'/conjugate'}>
                    <Conjugate />
                </Route>
                <Route path={'/newtondivide'}>
                    <NewtonDivide />
                </Route>
                <Route path={'/lagrange'}>
                    <Lagrange />
                </Route>
                <Route path={'/spline'}>
                    <Spline />
                </Route>
                <Route path={'/linearregression'}>
                    <LinearRegression />
                </Route>
                <Route path={'/polynomialregression'}>
                    <PolynomialRegression />
                </Route>
                <Route path={'/multiplelinearregression'}>
                    <MultipleLinearRegression />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
