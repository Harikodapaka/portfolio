import './PersonalDetails.css';
import { SiHey } from "react-icons/si";
import PropTypes from 'prop-types';


function PersonalDetails(props) {
    const { title, subtitle } = props;
    return (
        <section className="section-padding text-center text-white">
            <div className="container-md bg-shade p-3">
                <h1 className="font-italic">{title} <SiHey />,</h1>
                <div>
                    {subtitle}
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}

PersonalDetails.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};
PersonalDetails.defaultProps = {
    title: "",
    subtitle: ""
};
export default PersonalDetails;
