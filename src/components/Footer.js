import { Container, Row, Col, Form, Button } from "react-bootstrap";
import profile from "../assets/img/profile1.jpeg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/github.svg";
import medium from "../assets/img/medium.svg";
import resumePdf from "../assets/Resume TSR.pdf"; // Import your resume file
import { useState } from 'react';


export const Footer = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });

            if (response.ok) {
                alert('Feedback sent successfully!');
                setFeedback({ name: '', email: '', message: '' });
            } else {
                alert('Error sending feedback. Please try again.');
            }
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Error sending feedback. Please try again.');
        }
    };

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="logo-icons">
                        <img className="footer-img"
                            src={profile}
                            alt="Profile"
                        />
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/tsairithvik'>
                                <img src={navIcon1} alt='LinkedIn Icon' />
                            </a>
                            <a href='https://github.com/tsrithvik'>
                                <img src={github} alt='GitHub Icon' />
                            </a>
                            <a href='https://medium.com/@sairithvik1234'>
                                <img src={medium} alt='Medium Icon' />
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} className="feedback-form">
                        <h4>Send Me Your Feedback</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="formName">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={feedback.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="formEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={feedback.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="formMessage">
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={3}
                                    value={feedback.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    required
                                />
                            </Form.Group>
                            <Button className= 'formSubmit' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={6} className="text-start">
                        <a href={resumePdf} download="resume.pdf" style={{textDecoration: 'none'}}><button className="button-56">Download Resume</button></a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>CopyRight©️ 2024.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
