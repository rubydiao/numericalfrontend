import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import axios from 'axios'

const Secant = () => {
    const [data, setData] = useState({
        eq: '(x^2)-7',
        x0: 0,
        x1: 0,
        error: 0.000001,
    })
    const [ans, setAns] = useState(null)
    const [check, setCheck] = useState(null)
    const datas = {
        labels: [],
        datasets: [
            {
                label: '# Secant Method',
                data: [],
                fill: false,
                backgroundColor: 'rgb(32, 3, 11)',
                borderColor: 'rgba(32, 3, 11, 0.2)',
            },
        ],
    }
    ans !== null &&
        ans.map(
            (r) => (datas.labels.push(r.x), datas.datasets[0].data.push(r.fx))
        )
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Secant Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Equation"
                                defaultValue="(x^2)-7"
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
                    <Form.Group as={Row} controlId="X1">
                        <Form.Label column sm="2">
                            X1 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="X1"
                                step="0.5"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
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
                                        'http://localhost:8080/api/root/secant',
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
                        <thead>
                            <tr>
                                <th>#Iteration</th>
                                <th>X0</th>
                                <th>X1</th>
                                <th>fx(0)</th>
                                <th>fx(1)</th>
                                <th>delta(X)</th>
                                <th>Error</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ans.map((r) => (
                                <tr key={r.iteration}>
                                    <td>{r.iteration}</td>
                                    <td>{r.x_zero}</td>
                                    <td>{r.x_one}</td>
                                    <td>{r.fx1}</td>
                                    <td>{r.fx2}</td>
                                    <td>{r.x}</td>
                                    <td>{r.e}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Line data={datas} width={'20%'} height={'10%'} />
                </Container>
            )}
        </div>
    )
}
export default Secant
