import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Col, Row} from "react-bootstrap";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <div className='footer'>
            <Row>
                <Col>
                    <p>fitnesclub@gmail.com</p>
                </Col>
                <Col>
                    <p>+7 999 999 99 99</p>
                </Col>
            </Row>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
