import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React from "react";

export const Banner = () => {
    //State variables to manage text display looping animation
    const [loopNum, setLoopNum] = useState(0); // Tracks the current loop number
    const [isDeleting, setIsDeleting] = useState(false); //Indicates if the text is being deleted or "typed out"
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Des"]; // Array of strings to rotate through
    const [text, setText] = useState(''); //Current Text on display
    const [delta, setDelta] = useState(300 - Math.random() * 100) // Time interval for typing effect
    const period = 2000; // Period of time to wait before deleting text

    //starts interval for typing effect
    useEffect(() => {
        let ticker = setInterval(() => {
            tick(); // call tick funct at every interval
        }, delta)
        
        // Cleanup Function to clear interval when component unmounts
        return () => {clearInterval(ticker)};
    }, [text]); //Dependency array to run effect only when 'text' changes

    //Funct to handle typing and deleting effect
    const tick = () => {
        let i = loopNum % toRotate.length; //Calc current index
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

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