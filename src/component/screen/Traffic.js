import React from 'react'
import styled from 'styled-components';

function Traffic() {
  return (
    <>
        <TrafficContainer>
            <TrafficTop>
                <TrafficUl>
                    <TrafficLi>
                        <TrafficDivBlack></TrafficDivBlack>
                        <TrafficH3>Total guest</TrafficH3>
                    </TrafficLi>
                    <TrafficLi>
                        <TrafficDivBlue></TrafficDivBlue>
                        <TrafficH3>Male guest</TrafficH3>
                    </TrafficLi>
                    <TrafficLi>
                        <TrafficDivVoilet></TrafficDivVoilet>
                        <TrafficH3>Female guest</TrafficH3>
                    </TrafficLi>
                </TrafficUl>
                <TrafficIcon>
                    <TrafficImgDivOne>
                        <TrafficImage src={require("../../assets/images/arrow-fill.svg").default} />
                    </TrafficImgDivOne>   
                    <TrafficImgDiv>
                        <TrafficImage src={require("../../assets/images/arrow-fill-1.svg").default} />
                    </TrafficImgDiv>  
                </TrafficIcon>
            </TrafficTop>
            <TrafficBottom>
                <TrafficBottomDiv>
                    <TrafficBottomImage src={require("../../assets/images/group.svg").default} />
                </TrafficBottomDiv>
            </TrafficBottom>
        </TrafficContainer>
    </>
  )
}

export default Traffic

const TrafficContainer = styled.section`
    width: 56%;
    padding: 20px 35px;
    background-color: #fff;
    border-radius: 20px;
    margin: 20px 0px;
`;
const TrafficTop = styled.section`
    display: flex;
    justify-content: space-between;
    
`;
const TrafficUl = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const TrafficLi = styled.li`
    display: flex;
    align-items: center;
`;
const TrafficDivBlack = styled.div`
   background-color: #000;
   padding: 5px;
   height: 5px;
   border-radius: 5px;
   margin-right: 5px;

`;
const TrafficH3 = styled.h3`
    font-size: 15px;
    font-weight: 600;
    margin-right: 15px;
    color: #000;
`;
const TrafficDivBlue = styled.div`
   background-color: #A5E3E3;
   height: 5px;
   padding: 5px;
   border-radius: 5px;
   margin-right: 5px;
`;
const TrafficDivVoilet = styled.div`
    background-color: #D2A2F7;
    padding: 5px;
    height: 5px;
    border-radius: 5px;
    margin-right: 5px;
`;
const TrafficIcon = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TrafficImgDivOne = styled.div`
    width: 20px;
`;
const TrafficImage = styled.img`
    display: block;
    width: 100%;
`;
const TrafficImgDiv = styled.div`
    width: 20px;
`;
const TrafficBottom = styled.section``;
const TrafficBottomDiv = styled.div`
    width: 80%;
`;
const TrafficBottomImage = styled.img`
    display: block;
    width: 100%;
`;
