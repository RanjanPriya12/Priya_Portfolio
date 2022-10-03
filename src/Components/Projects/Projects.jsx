import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiHeroku } from 'react-icons/si';


import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Bebo Beauty',
            image: 'https://miro.medium.com/max/828/0*KvkEHMZ4nxyNVwGV.png',
            project_desc:
                `A product-based E-commerce website in India selling women's cosmetics products like cream, oil, shampoo etc, BEBO BEAUTY is an INDIAN beauty brand that specialises in beauty tools and products that provide real results.`,
            deploy_link: 'https://bebobeautyclone.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/BeautyBebo-Clone',
            tech_stack: [
                 <SiMongodb/>,
                <FaNodeJs />,
                <SiHeroku/>,
                <SiRedux />,
                <FaReact/>,
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                
               
           
            ],
        },
        {
            id: 2,
            project_name: 'Vedix Clone',
            image: 'https://priya-portfolio.vercel.app/vedix.png',
            project_desc:
                `A product-based E-commerce website in India selling women's and men's cosmetics and hair products. It is an Ayurvedic cosmetics website.`,
            deploy_link: 'https://vedix-clone.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/Vedix-Clone-backend',
            tech_stack: [
                 <SiMongodb/>,
                <FaNodeJs />,
                <SiHeroku/>,
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                
               
           
            ],
        },
        {
            id: 3,
            project_name: 'Weather App',
            image: 'https://cdn-images-1.medium.com/max/1000/1*byFU8pg2DzazOuuWHfRJLw.png',
            project_desc:
                'This weather app is one of best free weather apps with full features: Local weather, weather map (weather map service) and weather widgets with hourly and weekly weather infomation',
            deploy_link: 'https://priya-weatherapp.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/BaseLineAssignment',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                
               
           
            ],
        },
    
        {
            id: 4,
            project_name: 'Anthropologie Clone',
            image: 'https://cdn-images-1.medium.com/max/1000/1*f8Jltwl1-7LEC8DKufb0OA.png',
            project_desc:
                'Anthropologie is an American clothing retailer with approximately 200 stores across the U.S. and Canada which offer an assortment of clothing, jewelry, home furniture, decoration, beauty, and gifts.',
            deploy_link: 'https://anthropologie-web.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/Anthropolgie-Clone',
            tech_stack: [
                <FaCss3 />,
                <SiRedux />,
                <FaReact/>,
                <FaNodeJs />,
                <SiHeroku/>,
                <SiMongodb/>,
               
           
            ],
        },
        {
            id: 5,
            project_name: `BlueFly Clone`,
            image: `https://cdn-images-1.medium.com/max/1000/1*3yeLj5Egk4ZYxV_HdJjDnA.png`,
            project_desc:
                'Bluefly is the original online fashion retailer. Today, Bluefly is a fast growing, fashion marketplace offering 3,000+ brands across shoes, handbags, dresses, sportswear, cashmere and even diamonds.',
            deploy_link: 'https://bluefly.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/bluefly',
            tech_stack: [ <FaCss3 />,
            <SiRedux />,
            <FaReact/>,
            <FaNodeJs />,
            <SiHeroku/>,
            <SiMongodb/>,],
        },
      
        
        {
            id: 6,
            project_name: 'Boat Clone',
            image: 'https://priya-portfolio.vercel.app/BoatImage.png',
            project_desc:
                "India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. Queries hovering inside your head related to the noise isolating headphones.",
            deploy_link: 'https://boatclone68d310.netlify.app/',
            repo_link: 'https://github.com/RanjanPriya12/InternAssignment',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
            ],
        },
        
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%', height:"40%" }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
