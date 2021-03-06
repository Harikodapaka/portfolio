import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ReachoutForm from './components/ReachoutForm/ReachoutForm';
import TimeLine from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import GET_ENTRIES from './ContentfulClient';
import ReactGA from 'react-ga';
import React from 'react';
import { useEffect, useState } from 'react';

import * as ReactFaIcons from 'react-icons/fa';


const Icon = ({ name, color }) => {
  const TagName = ReactFaIcons[name];
  return !!TagName ? <TagName style={{ color: color }} /> : <p>{name}</p>;
}

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  const [loading, setLoading] = useState(true);
  const [HeaderData, setHeaderData] = useState({});
  const [personalDetails, setPersonalDetails] = useState({});
  const [projectsData, setProjectsData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [timelineData, setTimelineData] = useState({});
  const [FooterData, setFooterData] = useState({});
  const [socialIcons, setSocialIcons] = useState([]);
  const [reachOutForm, setReachOutForm] = useState({});

  useEffect(() => {
    // initializing Google Analytics
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('/');
    // Fetching contentful data
    const fetchServerData = async () => {
      const headerResponse = await GET_ENTRIES('headerData');
      const personalDetailsResponse = await GET_ENTRIES('personalDetails');
      const projectsResponse = await GET_ENTRIES('projectsData');
      const skillsResponse = await GET_ENTRIES('skillsData');
      const timlineResponse = await GET_ENTRIES('timelineData');
      const footerResponse = await GET_ENTRIES('footerData');
      const socialIconsResponse = await GET_ENTRIES('socialIcons');
      const reachOutFormResponse = await GET_ENTRIES('reachOutForm');
      setHeaderData(headerResponse[0].fields);
      setPersonalDetails(personalDetailsResponse[0].fields);
      setProjectsData(projectsResponse[0].fields);
      setSkillsData(skillsResponse[0].fields);
      setTimelineData(timlineResponse[0].fields);
      setFooterData(footerResponse[0].fields);
      setSocialIcons(socialIconsResponse);
      setReachOutForm(reachOutFormResponse[0].fields);
      setLoading(false);
      // console.log(reachOutFormResponse);
    }
    fetchServerData();
  }, []);
  if (loading) {
    return null; // render null when app is not ready
  }
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
            title={projectsData?.title}
            projects={projectsData.projects}
            more_projects_link={projectsData.more_projects_link}
          />
        </Row>
        <Row id="skills" className="bg-skills align-items-center full-height text-dark">
          <Skills
            title={skillsData.title}
            skill_catrgories={skillsData.skillCatrgories}
          />
        </Row>
        {
          timelineData &&
          <Row id="experience" className="bg-projects">
            <TimeLine sectionTitle={timelineData?.title} timelineItems={timelineData?.timelineItems} />
          </Row>
        }
        <Row id="reachout" className="bg-reachout full-height align-items-center justify-content-center" >
          <ReachoutForm
            title={reachOutForm.title} subtitle={reachOutForm.subtitle}
            buttonText={reachOutForm.buttonText} successMessage={reachOutForm.successMessage}
            failureMessage={reachOutForm.failureMessage}
          />
        </Row>
        {FooterData && <Row>
          <Footer title={FooterData?.title} technologies={FooterData?.technologies} />
        </Row>}
        <div className="social-share">
          <div className="social-links">
            <ul>
              {socialIcons.map((link, i) => (
                <li key={i}>
                  <a href={link.fields?.href} target="blank">
                    <Icon name={link.fields?.icon} color={link.fields.iconColor} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
