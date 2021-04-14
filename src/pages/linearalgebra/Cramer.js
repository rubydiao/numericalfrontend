import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const Cramer = () => {
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
    })
    const [ans, setAns] = useState(null)
    const [check, setCheck] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Cramer's rule</h2>
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
                    <Button
                        block
                        type="button"
                        variant="success"
                        onClick={async () => {
                            const res = await axios.post(
                                'http://localhost:8080/api/linear/cramer',
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
                            <th>Xi</th>
                            <th>Value</th>
                        </tr>
                        {ans.map((r) => (
                            <tr key={r.x}>
                                <td>{r.x}</td>
                                <td>{r.temp}</td>
                            </tr>
                        ))}
                    </Table>
                </Container>
            )}
        </div>
    )
}
export default Cramer
