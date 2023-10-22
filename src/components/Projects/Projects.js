import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import licitacoes from "../../Assets/Projects/licitacoes.png";
import velocinet from "../../Assets/Projects/velocinet.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">projetos </strong>recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui você encontra todos os projetos em que desenvolvi
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={licitacoes}
              isBlog={false}
              title="Gerenciamento de Licitações"
              description="O projeto é uma inovação para empresas que participam de licitações. Ele rastreia todas as licitações no PNCP e outros portais, oferece filtros de pesquisa e simplifica o processo de criação de propostas, preenchendo automaticamente os dados da empresa para evitar erros de digitação que possam afetar o pagamento pelo órgão contratante."
              ghLink="https://www.linkedin.com/posts/ldnovaes_hoje-decidi-compartilhar-o-meu-projeto-mais-activity-7116472487957164032-8kJV?utm_source=share&utm_medium=member_desktop"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={velocinet}
              isBlog={false}
              title="Monitoramento de Velocidade"
              description="Este projeto tem como objetivo fornecer uma solução profissional para o monitoramento contínuo e automatizado da velocidade da internet, visando oferecer praticidade e eficiência aos usuários. O software pode ser configurado para iniciar automaticamente junto com o sistema operacional, proporcionando uma experiência de utilização mais agradável e livre de preocupações."
              ghLink="https://github.com/ldnovaes/monitoramento-velocidade-internet"
              demoLink="https://github.com/ldnovaes/monitoramento-velocidade-internet"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
