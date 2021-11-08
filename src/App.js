import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ReachoutForm from './components/ReachoutForm/ReachoutForm';
import TimeLine from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';

import {
  TIMELINE_DATA, PROJECTS_DATA, SKILLS
} from './Data';

import GET_ENTRIES from './ContentfulClient';
import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import React from 'react';


const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  const [HeaderData, setHeaderData] = useState({});
  const [FooterData, setFooterData] = useState({});
  const [personalDetails, setPersonalDetails] = useState({});

  useEffect(() => {
    // initializing Google Analytics
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('/');
    // Fetching contentful data
    const fetchServerData = async () => {
      const headerResponse = await GET_ENTRIES('headerData');
      const footerResponse = await GET_ENTRIES('footerData');
      const personalDetailsResponse = await GET_ENTRIES('personalDetails');
      setHeaderData(headerResponse[0].fields);
      setFooterData(footerResponse[0].fields);
      setPersonalDetails(personalDetailsResponse[0].fields);
      // console.log(personalDetailsResponse[0].fields);
    }
    fetchServerData();
  }, []);

  return (
    <div className="App main-banner">
      <Container fluid className="mainContainer">
        <Row>
          <Header
            varient={HeaderData?.varient}
            title={HeaderData?.title}
            links={HeaderData?.links}
          />
        </Row>
        <Row id="intro" className="align-items-center bg-intro full-height">
          <PersonalDetails
            title={personalDetails.title}
            subtitle={personalDetails?.subtitle?.content[0]?.content[0]?.value}
          />
        </Row>
        <Row id="projects" className="bg-projects align-items-center full-height">
          <Projects
            title={PROJECTS_DATA.title}
            projects={PROJECTS_DATA.projects}
            more_projects_link={PROJECTS_DATA.more_projects_link}
          />
        </Row>
        <Row id="skills" className="bg-skills align-items-center full-height text-dark">
          <Skills
            title={SKILLS.title}
            skill_catrgories={SKILLS.skill_catrgories}
          />
        </Row>
        {
          TIMELINE_DATA &&
          <Row id="experience" className="bg-projects">
            <TimeLine sectionTitle={TIMELINE_DATA.title} timelineData={TIMELINE_DATA.timeline} />
          </Row>
        }
        <Row id="reachout" className="bg-reachout full-height align-items-center justify-content-center" >
          <ReachoutForm />
        </Row>
        {FooterData && <Row>
          <Footer title="Built With" technologies={FooterData?.technologies} />
        </Row>}
      </Container>
    </div>
  );
}

export default App;
