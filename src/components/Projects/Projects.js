import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import licitacoes from "../../Assets/Projects/licitacoes.png";
import velocinet from "../../Assets/Projects/velocinet.png";
import gerenciamento from "../../Assets/Projects/gerenciamento-loja.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">projetos </strong>recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui você encontra os projetos mais importantes que desenvolvi
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={licitacoes}
              isBlog={false}
              title="Gerenciamento de Licitações"
              description="O projeto é uma inovação para empresas que participam de licitações. Ele rastreia todas as licitações no PNCP e outros portais oferecendo filtros avançados de pesquisa e simplificando o processo de criação de propostas com preenchemimento automático dos dados da empresa, evitando possíveis erros de digitação que possam afetar o processo licitátorio ou atrasar o pagamento do Órgão ao Licitante."
              ghLink="https://www.linkedin.com/posts/ldnovaes_hoje-decidi-compartilhar-o-meu-projeto-mais-activity-7116472487957164032-8kJV?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={velocinet}
              isBlog={false}
              title="Monitoramento de Velocidade"
              description="Este projeto tem como objetivo fornecer uma solução profissional para o monitoramento contínuo e automatizado da velocidade da internet, visando oferecer praticidade e eficiência aos usuários. O software pode ser configurado para iniciar automaticamente junto com o sistema operacional, proporcionando uma experiência de utilização mais agradável e livre de preocupações."
              ghLink="https://github.com/ldnovaes/monitoramento-velocidade-internet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gerenciamento}
              isBlog={false}
              title="Gerenciamento de Loja"
              description="Este é um projeto com fins didático onde utilizei Java com JSF para sua construção e docker para implantação. O intuito era adquirir experiência e conhecimento com projetos monolíticos de forma que futuros desafios sejam encarados de maneira mais profissional e objetiva. O projeto é responsível para diversos tamanhos de telas e possui opções dark/light para escolha do usuário."
              ghLink="https://github.com/ldnovaes/gerenciamento-loja-jsf"
              //demoLink="https://github.com/ldnovaes/gerenciamento-loja-jsf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
