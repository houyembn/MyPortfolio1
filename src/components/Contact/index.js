import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { contact } from '../../data/constants';
import { Experiences } from "../Experiences";
import HeroImg from '../../images/Moi.jpg'


// Styled components

export const Img = styled.img`
  width: 80%;
  height: 80%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  display: block; 
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Section = styled.section`
  margin: 20px 0;
  color: ${({ theme }) => theme.text_secondary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;
  gap: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WorkCanvas = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 370px;
  border-radius: 16px;
  padding-top: 60px; /* Adjusts how far down the image appears */

  @media (max-width: 960px) {
    padding-top: 30px;
  }
`;


const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const WorkContentContainer = styled.div`
  height: 110px;
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(133, 76, 228, 0.5);
    transform: translateY(-5px);
  }

  box-shadow: rgba(133, 76, 228, 0.15) 0px 4px 24px;
`;

const WorkContentLogo = styled.img`
  height: 50px;
  border-radius: 10px;
  background-color: #000;
`;

const WorkContentTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  color: ${({ theme }) => theme.text_primary + 99};
  margin: 0;
`;

const WorkContentDetails = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Contact = () => {
  const [audio] = useState(new Audio('/audios/hi.mp3')); // Set default audio source

  const handleMouseEnter = () => {
    audio.play();
  };

  const handleMouseLeave = () => {
    audio.pause();
    audio.currentTime = 0;
  };



  return (
    <Section id="work">
      <Container>
        <Title>My Contact</Title>
        <WorkContainer>
         <WorkCanvas
          // onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <Img src={HeroImg} alt="hero-image" />
          {/* <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
            <Experiences />
          </Canvas> */}
        </WorkCanvas>
          <WorkContent>
            {contact.map(({ id, name, img, duration, audioScript }) => (
              <WorkContentContainer 
                key={id}
              >
                <WorkContentLogo src={img} />
                <div>
                  <WorkContentTitle>{name}</WorkContentTitle>
                  <WorkContentDetails>{duration}</WorkContentDetails>
                </div>
              </WorkContentContainer>
            ))}
          </WorkContent>
        </WorkContainer>
      </Container>
    </Section>
  );
};

export default Contact;
