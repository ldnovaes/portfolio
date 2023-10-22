import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu me chamo <span className="purple">Leandro Duarte, </span>
            e moro em <span className="purple"> Brasília, Brasil.</span>
            <br /> Sou certificado por Harvard em "Computer Science for Python Programming".
            <br />
            Atualmente estou trabalhando como Desenvolvedor Back-End, com sede em aprender a cada dia mais um pouco sobre essa área ao qual sou apaixonado: Desenvolvimento Web.
            <br />
            <br />
            Mas além do trabalho, há algumas coisas que eu adoro fazer nas horas vagas:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever Artigos no dev.to
            </li>
            <li className="about-activity">
              <ImPointRight /> Passar o dia em família
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tudo que deve ser feito, merece ser bem feito"{" "}
          </p>
          <footer className="blockquote-footer">"Eu mesmo ;)"</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
