import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import planets from "../../Assets/Projects/planets.png";
import robot from "../../Assets/Projects/robot.png";
import data_integration from "../../Assets/Projects/data_integration.png";
import nlp from "../../Assets/Projects/nlp.png";
import plate from "../../Assets/Projects/plate.png";
import diabetes from "../../Assets/Projects/diabetes.png";
import enterprise from "../../Assets/Projects/enterprise.png";
import flappybird from "../../Assets/Projects/flappybird.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={singasong}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Melody to Symphony: Music Generation from Humming <br></br> ____________________________
                
                </span>
              }
              description="Development of an innovative AI-driven music generation system for my MSc dissertation, employing deep learning techniques and Recurrent Neural Networks. The system accurately transcribes hummed melodies and creates coherent music, showcased through a webserver-based application. This project not only bolstered my expertise in AI, machine learning, and deep learning but also contributed to the field of AI-driven creative applications."
              ghLink="https://github.com/YoussefIbourk/MsC-THESIS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  NLP Twitter Topics Classification <br></br> ____________________________
                
                </span>
              }
              description="Development of a Natural Language Processing (NLP) pipeline for Twitter topic classification using machine learning algorithms (Logistic Regression , SVC, Naïve Bayes Multinomial, ...) and data analytics techniques."
              ghLink="https://github.com/YoussefIbourk/MsC-Python-NLPTwitterTopicsClassification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Diabetes Prediction Dashboard <br></br> ____________________________

                </span>
              }
              description="Development of a dashboard of diabetes prediction with R, using an interaction between n data pre-processing, machine learning (KNN and Logistic Regression ), and user interface modules: visualization, model building, evaluation, data processing, training, and prediction."
              ghLink="https://github.com/YoussefIbourk/MsC-R-DiabetesPredictionDashboard"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data_integration}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Data Integration <br></br> ____________________________

                </span>
              }
              description="Python program for combining multiple data sources provided (csv, json and xml) files and text file containing emails, and pushing these to a central organisational data store, the main idea is to read and extract data from these various formats, wrangle the data, solving inconsistencies, and bring data together into a singular format and to be mapped to a relational database using only Python's standard libraries and PonyORM"
              ghLink="https://github.com/YoussefIbourk/MsC-Python-DataIntegrationAndRelationalDatabaseMapping"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planets}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Exoplanets Detection, Kepler Telescope <br></br> ____________________________

                </span>
              }
              description="In This project I developed an R code using the Random Forest algorithm to analyze data collected by the Kepler telescope and identify exoplanet, split the data into a training and testing set, and calculate the accuracy of the predictions. In this project I used data mining techniques, machine learning algorithms, data pre-processing, model building, and data visualization m. I also gained a deeper understanding of the subject matter in the astronomy field."
              ghLink="https://github.com/YoussefIbourk/MsC-R-AstronomyAnomalyDetectionKeplerDataset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plate}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Number Plate Detection <br></br> ____________________________

                </span>
              }
              description="I developed an application that analyzes vehicle images and extracts license plate information using image 
segmentation. I employed automatic thresholding, edge-based methods, and morphology-based methods, to determine region boundaries and extract meaningful information. 
By transforming the extracted license plate to a text, we will be able to assign and stock the car's informations (owner's name, brand, ...) in a database."
              ghLink="https://github.com/YoussefIbourk/Semestre6-Matlab-FinalProject-NumberPlateDetection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Line Follower Robot <br></br> ____________________________

                </span>
              }
              description="A line-following robot based on a three-wheeled car. The robot was 
designed to follow a line using two sensors, and various features through hardware 
implementation and coding to create a highly effective line-following robot to be recognized as the best."
              ghLink="https://github.com/YoussefIbourk/Semestre5-Arduino-FinalProject-LineFollowerRobot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enterprise}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Enterprise Network <br></br> ____________________________

                </span>
              }
              description="Creation of an enterprise network based on Linux OS that facilitates communication between devices. The 
network utilizes a DHCP Server to assign IP addresses, a DNS Server to translate domain names to IP 
addresses for browsing, an HTTP Server to deliver website content, an FTP Server to transfer files within 
the network, and an SMTP Server to send and receive emails under the same server."
              ghLink="https://github.com/YoussefIbourk/Semestre5-Linux-FinalProject-EnterpriseNetwork"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title={
                <span style={{ color: '#623686', fontWeight: 'bold' }}>
                  Flappy Bird <br></br> ____________________________

                </span>
              }
              description="Rebuilding the famous game 'Flappy Bird' using C++. The concept is too simple: Tap the screen to fly up, release to dive down, and maneuver through gaps in a series of green pipes clearly styled after those in the Super Mario series. The gaps were invitingly wide, many times the height of the bird. But because the bird moved so fast and dove up and down so quickly, making it through the gap without wiping out proved extremely challenging. Because you get just one point for each pipe cleared, your high score is likely to be in single digits, if not zero."
              ghLink="https://github.com/YoussefIbourk/Semestre5-Cpp-FinalProject-FlappyBird"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
