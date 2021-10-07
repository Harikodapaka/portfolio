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

function GetImage(name) {
    switch (name) {
        case "html":
            return <AiFillHtml5 />;
        case "css":
            return <DiCss3 />;
        case "bootstrap":
            return <FaBootstrap />;
        case "ts":
            return <DiJavascript1 />;
        case "angular":
            return <DiAngularSimple />;
        case "react":
            return <FaReact />;
        case "dnet":
            return <DiDotnet />;
        case "jquery":
            return <DiJqueryLogo />;
        case "mongo":
            return <DiMongodb />;
        case "sass":
            return <FaSass />;
        case "node":
            return <FaNodeJs />;
        case "java":
            return <FaJava />;
        case "sql":
            return <DiMsqlServer />;
        case "docker":
            return <FaDocker />;
        case "git":
            return <FaGitAlt />;
        case "aws":
            return <FaAws />;
        case "azure":
            return <SiMicrosoftazure />;
        case "sys-design":
            return <GrStackOverflow />;
        case "design-pattern":
            return <RiFlowChart />;
        default:
            return null;
    }
}

export default GetImage;