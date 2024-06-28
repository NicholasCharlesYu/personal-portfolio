import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.png";
import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Resume from "../../assets/img/Nicholas-Yu's-Resume.pdf";
import { Button } from "react-bootstrap";
import "./Banner.css";

export const Banner = () => {
  //State variables to manage text display looping animation
  const [loopNum, setLoopNum] = useState(0); // Tracks the current loop number
  const [isDeleting, setIsDeleting] = useState(false); //Indicates if the text is being deleted or "typed out"
  const toRotate = [
    "FullStack Developer",
    "Computer Scientist",
    "Data Scientist",
    "Fisherman",
  ]; // Array of strings to rotate through
  const [text, setText] = useState(""); //Current Text on display
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Time interval for typing effect
  const period = 2000; // Period of time to wait before deleting text

  //starts interval for typing effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tick(); // call tick funct at every interval
    }, delta);

    // Cleanup Function to clear interval when component unmounts
    return () => {
      clearInterval(ticker);
    };
  }, [text]); //Dependency array to run effect only when 'text' changes

  //Funct to handle typing and deleting effect
  const tick = () => {
    let i = loopNum % toRotate.length; //Calc current index
    let fullText = toRotate[i];
    // Determine if text is being typed out or deleted
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Should be deleting faster than typing
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // Check if text is fully typed out
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    //If text is fully deleted, go to next word and slight delay
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{"Hi I'm Nicholas Yu,"}</h1>
                  <p className="banner-rotating-text">
                    {"A "} <span className="wrap">{text}</span>
                  </p>
                  <p>
                    Hi I'm Nick, a junior at the University of Southern
                    California, pursuing a BS degree in Computer Science &
                    Business Administration. <br /> <br />
                    With a passion for software development, I aim to apply my
                    technical and analytical abilities to push boundaries and
                    solve real-world problems. Outside of tech, you'll find me
                    fishing, golfing, and weightlifting.
                  </p>
                  <a href="#connect" className="navbtn">
                    <span>Let's Connect</span>
                    <ArrowRightCircle size={25} />
                  </a>
                  <a
                    href={Resume}
                    download="Nicholas Yu's Resume"
                    target="_blank"
                  >
                    <Button>My Resume</Button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} sm={12} md={6} xl={6}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
