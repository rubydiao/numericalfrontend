import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const FalsePosition = () => {
    const [data, setData] = useState({
        xl: '',
        xr: '',
        error: 0.000001,
    })
    const [ans, setAns] = useState(null)
    const [check, setCheck] = useState(null)

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>False Position Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Equation"
                                defaultValue="(x^4)-13"
                                disabled
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            XL :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="XL"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xl: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XR">
                        <Form.Label column sm="2">
                            XR :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="XR"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xr: parseFloat(e.target.value),
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
                                        'http://localhost:8080/api/root/falseposition',
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
                            <th>Xl</th>
                            <th>Xr</th>
                            <th>X1</th>
                            <th>Error</th>
                        </tr>
                        {ans.map((r) => (
                            <tr key={r.iteration}>
                                <td>{r.iteration}</td>
                                <td>{r.xl}</td>
                                <td>{r.xr}</td>
                                <td>{r.x1}</td>
                                <td>{r.e}</td>
                            </tr>
                        ))}
                    </Table>
                </Container>
            )}
        </div>
    )
}
export default FalsePosition
