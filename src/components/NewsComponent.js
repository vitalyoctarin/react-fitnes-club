import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const NewsComponent = props => {
    return (
        <Row className="mb-5">
            <Col>
                <Link to="/about">
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    wordWrap: 'break-word',
                    backgroundColor: '#fff',
                    backgroundClip: 'border-box',
                    borderRadius: 15,
                    boxShadow: '0px 5px 7px 2px rgba(0, 0, 0, 0.2)'
                }}>
                    <div style={{
                        width: '100%',
                        backgroundColor: 'black',
                        height: '100%',
                        opacity: 0.6,
                        position: 'absolute',
                        borderRadius: 15,
                    }}>
                    </div>

                        <img
                            src={props.image}
                            alt="Snow" style={{width: "100%", borderRadius: 15}}
                        />

                    <h1 style={{
                        position: 'absolute',
                        bottom: 18,
                        left: 16,
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'Oswald'
                    }}>
                        {props.title}
                    </h1>
                </div>
                </Link>
            </Col>
        </Row>

    )
}

export default NewsComponent
