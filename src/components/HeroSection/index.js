import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/Moi.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { Experiences } from "../Experiences";
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import ClickImg from '../../images/touch.png';  // Import your image


const WorkCanvas = styled.div`
  flex: 1;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  position: relative;
`;

const PointerContainer = styled.div`
  position: absolute;
  top: 50%;  /* Adjust the vertical position */
  left: 80%;  /* Adjust the horizontal position */
  transform: translate(-50%, -50%);  /* Centers the icon container */
  pointer-events: none;  /* Ensures that it doesn't interfere with interactions */
  width: 50px;  /* Width to accommodate triangles */
  height: 50px;  /* Height to accommodate triangles */
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Space out the triangles */
  align-items: center;
`;

const Triangle = styled.div`
  position: absolute;  /* Position triangles absolutely within the container */
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid gray;  /* The triangle shape */
`;

const TriangleRow = styled.div`
  display: flex;
  justify-content: space-between;  /* Distribute triangles evenly horizontally */
  width: 100%;  /* Ensure the triangles are spread across the container */
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span style={{ width: '200px' }}>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <WorkCanvas>
              <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                <Experiences />
              </Canvas>
              {/* Add the image here */}
              <img src={ClickImg} alt="Click" style={{ position: 'absolute', bottom: '24%', right: '31%', width: '45px', height: '45px' }} />
            </WorkCanvas>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
