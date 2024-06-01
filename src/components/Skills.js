import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import skills from "../assets/img/skills.svg";


export const Skills= ()=> {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                    <h2 style={{ color: 'white' }}>
                        Skills
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <img src={skills} alt="Skill-img" style={{ height: '50px', width: '50px' }} />
                        </div>
                    </h2>
                    <p>This section highlights the various skills I have acquired from different platforms and experiences. 
                        It encompasses a range of technical and soft skills that I have developed through online courses, 
                        hands-on projects, and professional experiences.</p>
                        <Carousel responsive={responsive} infinite= {true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter3} alt='Image' />
                                <h5>Full Stack Development</h5>
                                <p>Udemy</p>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='Image' />
                                <h5>Java Programming</h5>
                                <a href='https://www.geeksforgeeks.org/user/sairithvef5j/' style={{textDecoration: 'none'}}><p>Geeks For Geeks</p></a>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt='Image' />
                                <h5>Data Analysis using SQL</h5>
                                <a href='https://www.hackerrank.com/profile/sairithvik1234' style={{textDecoration: 'none'}}><p>Hacker Rank</p></a>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image' />
                                <h5>Postgres SQL</h5>
                                <p>Udemy</p>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image' />
                                <h5>Excel</h5>
                                <p>Great Learning</p>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='Image' />
                                <h5>Git</h5>
                                <p>Udemy</p>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image' />
                                <h5>MERN Stack</h5>
                                <p>Udemy</p>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='bg-img-left' src={colorSharp} />
        </section>
      )
}