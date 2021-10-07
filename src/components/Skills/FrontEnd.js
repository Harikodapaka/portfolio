import ProgressBar from 'react-bootstrap/ProgressBar';


function FrontEnd() {
    return (
        <div className="d-flex align-items-center">
            <span bg="primary" className="col-md-2">
                HTML
            </span>
            <ProgressBar className="col" now={40} />
        </div>
    );
}

export default FrontEnd;
