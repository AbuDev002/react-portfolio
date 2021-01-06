/*
.profile_skills .profile .profile-title,
.profile_skills .skills .skills-title{
   
}

.profile_skills .profile .profile-title span,
.profile_skills .skills .skills-title span{
    
}

export const SkillsTitle = styled.h2`

`
export const SkillsTitleSpan = styled.span`

`

*/

import styled from 'styled-components'

export const ProfileSection = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const ProfileWrapper = styled.div`
    width: 50%;
    float: left;
`

export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const ProfileTitleSpan = styled.span`
font-weight: normal;
`

export const ProfileList = styled.ul`
    list-style: none
`
export const ProfileItem = styled.li`
    margin-bottom: 8px
`
export const ProfileItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold 
`
export const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424 
`
export const SkillsSection = styled.div`
    width: 50%;
    float: left;  
`

export const SkillsDescription = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const SkillsBarTitle = styled.span`
    float: left;
`
export const SkillsBarPerc = styled.span`
    float: right;
    margin-right: 100px;
`
export const SkillParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SpanTitle = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const SpanSp1 = styled.span`
    width: 100%;
`
export const SpanSp2 = styled.span`
width: 90%;
`
export const SpanSp3 = styled.span`
width: 80%;
`

/*
@media (max-width:768px) {
    .profile_skills .profile , 
    .profile_skills .skills {
        width: 100%;
        float: none
    }
    .profile_skills .profile {
        margin-bottom: 20px
    }*/