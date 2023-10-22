import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO SOBRE <span className="purple"> MIM</span>..
            </h1>
            <p className="home-about-body">
              Sou apaixonado por Desenvolvimento Web e em todo esse tempo estudando, devo ter aprendido no mínimo um pouquinho... 🤷‍♂️
              <br />
              <br />Eu me dou muito bem com
              <i>
                <b className="purple"> Python, Javascript, e Java</b>. Principalmente Java EE, onde nasceu minha paixão por Web.
              </i>
              <br />
              <br />
              Meus campos de interesse poderiam ser resumidos a criar soluções e tecnologias &nbsp;
              <i>
                <b className="purple">web</b>. Seja essa tecnologia legada ou nao ^_^{" "}
              </i>
              <br />
              <br />
              Sempre que possível, também gosto de aplicar minha paixão secundária para desenvolver jogos. Eu até chamaria isso de hobbie...
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>VOCÊ TAMBÉM PODE ME ENCONTRAR EM</h1>
            <p>
              Minhas <span className="purple">redes sociais </span>estão aqui
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ldnovaes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ldnovaes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devleanof"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
