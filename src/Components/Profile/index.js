import React from 'react';
import { ProfileSection,ProfileWrapper, ProfileTitle, ProfileTitleSpan, ProfileList, ProfileItem, ProfileItemSpan, SpanWeb, SkillsSection, SkillsDescription, SkillsBar, SkillsBarTitle, SkillsBarPerc, SkillParent, SkillParentSpan, SpanSp1, SpanSp2, SpanSp3 } from './style.js'
import styled from 'styled-components'

const Profile = () => {
  return (
        <ProfileSection>
            <div class="container">
                <ProfileWrapper>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <SpanWeb class="web">www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileWrapper>
                
                <SkillsSection>
                    <ProfileTitle>Some <span>skills</span></ProfileTitle>
                    <SkillsDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDescription>
                    <SkillsBar>
                        <SkillsBarTitle>Bootstrap</SkillsBarTitle>
                        <SkillsBarPerc>100%</SkillsBarPerc>
                        <SkillParent>
                            <SpanSp1></SpanSp1>
                        </SkillParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsBarTitle>CSS3</SkillsBarTitle>
                        <SkillsBarPerc>90%</SkillsBarPerc>
                        <SkillParent>
                            <SpanSp2></SpanSp2>
                        </SkillParent>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <SkillsBarTitle>Photoshop</SkillsBarTitle>
                        <SkillsBarPerc>80%</SkillsBarPerc>
                        <SkillParent>
                            <SpanSp3></SpanSp3>
                        </SkillParent>
                    </SkillsBar>
                </SkillsSection>
                
            </div>
        </ProfileSection>
  );
}

export default Profile;
