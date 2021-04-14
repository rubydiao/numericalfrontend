import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const Onepoint = () => {
    const [data, setData] = useState({
        eq: '(1/4)+(x/2)',
        x0: 0,
        error: 0.000001,
    })
    const [ans, setAns] = useState(null)
    const [check, setCheck] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Onepoint Iteration Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Equation"
                                defaultValue="(1/4)+(x/2)"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X0">
                        <Form.Label column sm="2">
                            X0 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="X0"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x0: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Error">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Error(optional)"
                                step="0.000001"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        error: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                                type="button"
                                variant="success"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/root/onepoint',
                                        data
                                    )
                                    if (res.data.data.length !== 0) {
                                        setCheck(true)
                                    }
                                    setAns(
                                        JSON.parse(res.request.response).data
                                    )
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            {ans !== null && check && (
                <Container className="mt-5 p-4 rounded bg-light">
                    <Table striped bordered hover variant="dark">
                        <tr>
                            <th>#Iteration</th>
                            <th>X0</th>
                            <th>Xi</th>
                            <th>Error</th>
                        </tr>
                        {ans.map((r) => (
                            <tr key={r.iteration}>
                                <td>{r.iteration}</td>
                                <td>{r.x}</td>
                                <td>{r.xi}</td>
                                <td>{r.er}</td>
                            </tr>
                        ))}
                    </Table>
                </Container>
            )}
        </div>
    )
}
export default Onepoint
