import { Col } from "react-bootstrap";

const anchorStyles = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit color from parent
    cursor: "pointer", // Change cursor to pointer on hover
};

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={anchorStyles}>
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    );
};
