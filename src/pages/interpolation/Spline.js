import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const Spline = () => {
    const [N, setN] = useState(0)
    const [x, setX] = useState({})
    const [y, setY] = useState({})
    const [ans, setAns] = useState(null)

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Spline </h2>
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
                    <Button
                        block
                        type="button"
                        variant="success"
                        onClick={async () => {
                            const res = await axios.post(
                                'http://localhost:8080/api/inter/spline',
                                { x, y }
                            )
                            setAns(JSON.parse(res.request.response))
                        }}
                    >
                        Calculate
                    </Button>
                </Form>
            </Container>
            <Container className="mt-5 p-4 rounded bg-light">
                {ans != null &&
                    ans.ans.map((r, i) => (
                        <Alert variant="dark">
                            <Alert.Heading>
                                Ans[{i + 1}]: {r}
                            </Alert.Heading>
                        </Alert>
                    ))}
            </Container>
        </div>
    )
}
export default Spline
