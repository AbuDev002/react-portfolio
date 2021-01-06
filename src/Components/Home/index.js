import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, Homeinfo, HomeDesc, HomeBtn, Span } from './style.js'
import styled from 'styled-components'
const Home = () => {
  return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hamza Nabil</HomeTitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  );
}

export default Home;
