import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Des"];
    const [text, setText] = useState('');

    return (
       <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi I'm webencoded"}<span className="wrap">web developer</span></h1>
                    <p>Lorem Ipsum</p>
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
       </section> 
    )
}