import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const GaussJacobi = () => {
    const [data, setData] = useState({
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
        a5: 0,
        a6: 0,
        a7: 0,
        a8: 0,
        a9: 0,
        b1: 0,
        b2: 0,
        b3: 0,
        x1: 0,
        x2: 0,
        x3: 0,
        error: 0,
    })
    const [ans, setAns] = useState(null)
    const [check, setCheck] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Jacobi Iteration Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="x[1,1]">
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="x[1,1]">
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a4: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a5: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a6: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="x[1,1]">
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a7: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a8: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a9: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <hr />
                    <h2>Vector B:</h2>
                    <Form.Group as={Row} controlId="b">
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <hr />
                    <h2>X[1,2,3] initial</h2>
                    <Form.Group as={Row} controlId="x">
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <hr />
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
                                'http://localhost:8080/api/linear/jacobi',
                                data
                            )
                            if (res.data.data.length !== 0) {
                                setCheck(true)
                            }
                            setAns(JSON.parse(res.request.response).data)
                        }}
                    >
                        Calculate
                    </Button>
                </Form>
            </Container>
            {ans !== null && check && (
                <Container className="mt-5 p-4 rounded bg-light">
                    <Table striped bordered hover variant="dark">
                        <tr>
                            <th>#Iteration</th>
                            <th>X1</th>
                            <th>X2</th>
                            <th>X3</th>
                            <th>Error(x1)</th>
                            <th>Error(x2)</th>
                            <th>Error(x3)</th>
                        </tr>
                        {ans.map((r) => (
                            <tr key={r.iteration}>
                                <td>{r.iteration}</td>
                                <td>{r.x1}</td>
                                <td>{r.x2}</td>
                                <td>{r.x3}</td>
                                <td>{r.e1}</td>
                                <td>{r.e2}</td>
                                <td>{r.e3}</td>
                            </tr>
                        ))}
                    </Table>
                </Container>
            )}
        </div>
    )
}
export default GaussJacobi
