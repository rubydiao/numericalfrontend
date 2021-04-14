import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const MultipleLinearRegression = () => {
    const [N, setN] = useState(0)
    const [x1, setX1] = useState({})
    const [x2, setX2] = useState({})
    const [x3, setX3] = useState({})
    const [y, setY] = useState({})
    const [ans, setAns] = useState(null)

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Multiple Linear Regression</h2>
                <Form>
                    <Form.Group as={Row} controlId="XY">
                        <Form.Label column sm="2">
                            Enter Amount [x1,x2,x3,y]:
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
                                        {`x1[${i}]`}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x1${i}`}
                                        onChange={(e) => {
                                            setX1({
                                                ...x1,
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
                                        {`x2[${i}]`}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x2${i}`}
                                        onChange={(e) => {
                                            setX2({
                                                ...x2,
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
                                        {`x3[${i}]`}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x3${i}`}
                                        onChange={(e) => {
                                            setX3({
                                                ...x3,
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
                                        {`y${i}`}
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
                                'http://localhost:8080/api/regression/multiplelinearregression',
                                { x1, x2, x3, y }
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
                            Ans : {JSON.stringify(ans.ans)}
                        </Alert.Heading>
                    </Alert>
                </Container>
            )}
        </div>
    )
}
export default MultipleLinearRegression
