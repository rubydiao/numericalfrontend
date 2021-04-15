import { Container } from 'react-bootstrap'
import pika from '../images/pika.gif'
const Home = () => {
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light text-center">
                <h1>Home</h1>
                <br />
                <h2>Narutchai Nhongharn</h2>
                <h2>6104062630093</h2>
                <img src={pika} alt="" className="rounded img-fluid" />
            </Container>
        </div>
    )
}
export default Home
