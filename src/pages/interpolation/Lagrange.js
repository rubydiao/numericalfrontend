import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const Lagrange = () => {
    const [N, setN] = useState(0)
    const [x, setX] = useState({})
    const [y, setY] = useState({})
    const [xwant, setXwant] = useState(0)
    const [ans, setAns] = useState(null)

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Lagrange </h2>
                <Form>
                    <Form.Group as={Row} controlId="XY">
                        <Form.Label column sm="2">
                            Enter Amount [x,y]:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setN(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        {N > 0 &&
                            N <= 10 &&
                            Array.from(Array(N), (r, i) => (
                                <Col key={i}>
                                    <Form.Label column sm="2">
                                        {`x[${i}]`}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setX({
                                                ...x,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row}>
                        {N > 0 &&
                            N <= 10 &&
                            Array.from(Array(N), (r, i) => (
                                <Col key={i}>
                                    <Form.Label column sm="2">
                                        {`y[${i}]`}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setY({
                                                ...y,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="fx">
                        <Form.Label column sm="2">
                            Enter f(x):
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setXwant(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Button
                        block
                        type="button"
                        variant="success"
                        onClick={async () => {
                            const res = await axios.post(
                                'http://localhost:8080/api/inter/lagrange',
                                { x, y, xwant }
                            )
                            setAns(JSON.parse(res.request.response))
                        }}
                    >
                        Calculate
                    </Button>
                </Form>
            </Container>
            {ans != null && (
                <Container className="mt-5 p-4 rounded bg-light">
                    <Alert variant="dark">
                        <Alert.Heading>
                            f({xwant}) : {JSON.stringify(ans.ans)}
                        </Alert.Heading>
                    </Alert>
                </Container>
            )}
        </div>
    )
}
export default Lagrange
