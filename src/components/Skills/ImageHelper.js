import {
    DiAngularSimple, DiJavascript1, DiCss3, DiDotnet,
    DiJqueryLogo, DiMongodb, DiMsqlServer
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { GrStackOverflow } from 'react-icons/gr';
import { SiMicrosoftazure } from 'react-icons/si';
import { RiFlowChart } from 'react-icons/ri';
import {
    FaReact, FaBootstrap, FaSass, FaNodeJs, FaJava, FaAws, FaGitAlt, FaDocker
} from 'react-icons/fa';
import './Skills.css';

function GetImage(name, iconColor) {
    let iconStyles = { color: `${iconColor}`};
    switch (name) {
        case "html":
            return <AiFillHtml5 style={iconStyles} title={name}/>;
        case "css":
            return <DiCss3 title={name} style={iconStyles}/>
        case "bootstrap":
            return <FaBootstrap title={name} style={iconStyles} />;
        case "js":
            return <DiJavascript1 title={name} style={iconStyles} />;
        case "angular":
            return <DiAngularSimple title={name} style={iconStyles} />;
        case "react":
            return <FaReact title={name} style={iconStyles} />;
        case "dnet":
            return <DiDotnet title={name} style={iconStyles} />;
        case "jquery":
            return <DiJqueryLogo title={name} style={iconStyles} />;
        case "mongo":
            return <DiMongodb title={name} style={iconStyles} />;
        case "sass":
            return <FaSass title={name} style={iconStyles} />;
        case "node":
            return <FaNodeJs title={name} style={iconStyles} />;
        case "java":
            return <FaJava title={name} style={iconStyles} />;
        case "sql":
            return <DiMsqlServer title={name} style={iconStyles} />;
        case "docker":
            return <FaDocker title={name} style={iconStyles} />;
        case "git":
            return <FaGitAlt title={name} style={iconStyles} />;
        case "aws":
            return <FaAws title={name} style={iconStyles} />;
        case "azure":
            return <SiMicrosoftazure title={name} style={iconStyles} />;
        case "sys-design":
            return <GrStackOverflow title={name} style={iconStyles} />;
        case "design-pattern":
            return <RiFlowChart title={name} style={iconStyles} />;
        default:
            return null;
    }
}

export default GetImage;