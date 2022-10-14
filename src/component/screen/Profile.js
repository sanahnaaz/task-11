import React from 'react'
import styled from 'styled-components'


function Profile() {
  return (
    <>
       <ProfileContainer>
            <ProfileList>
                <ProDivOne>
                    <ProLeft>
                        <ProDivImage>
                            <ProImage src={require("../../assets/images/rectangle.jpg")} />
                        </ProDivImage>
                        <ProName>
                            <ProInput type={"text"} value={"Aisyah Namanya"} />
                            <ProP>2 minute ago</ProP>
                        </ProName>
                    </ProLeft>
                    <ProRight>
                        <ProIconContainer>
                            <ProEditIcon src={require("../../assets/images/solid_pen.svg").default} />
                        </ProIconContainer>
                        <ProIconContainer>
                            <ProDltIcon src={require("../../assets/images/trash-alt.svg").default} />
                        </ProIconContainer>
                        <ProIconContainer>
                            <ProIcon src={require("../../assets/images/three-dots.svg").default} />
                        </ProIconContainer>
                    </ProRight>                        
                </ProDivOne>
                <ProDivTwo>
                    <ProTwoLeft>
                        <ProTwoDivImage>
                            <ProTwoImage src={require("../../assets/images/cak-handoko.jpg")} />
                        </ProTwoDivImage>
                        <ProTwoName>
                            <ProTwoInput type={"text"} value={"ACak Handoko"} />
                            <ProTwoP>6 minute ago</ProTwoP>
                        </ProTwoName>
                    </ProTwoLeft>
                    <ProTwoRight>
                        <ProTwoIconContainer>
                            <ProTwoEditIcon src={require("../../assets/images/solid_pen.svg").default} />
                        </ProTwoIconContainer>
                         <ProTwoIconContainer>
                            <ProTwoDltIcon src={require("../../assets/images/trash-alt.svg").default} />
                        </ProTwoIconContainer>
                        <ProTwoIconContainer>
                            <ProTwoIcon src={require("../../assets/images/three-dots.svg").default} />
                        </ProTwoIconContainer>
                    </ProTwoRight>                        
                </ProDivTwo>
                <ProDivThree>
                    <ProThreeLeft>
                        <ProThreeDivImage>
                            <ProThreeImage src={require("../../assets/images/rectangle.jpg")} />
                        </ProThreeDivImage>
                        <ProThreeName>
                            <ProThreeInput type={"text"} value={"Aisyah Namanya"} />
                            <ProThreeP>2 minute ago</ProThreeP>
                        </ProThreeName>
                    </ProThreeLeft>
                    <ProThreeRight>
                        <ProThreeIconContainer>
                            <ProThreeEditIcon src={require("../../assets/images/solid_pen.svg").default} />
                        </ProThreeIconContainer>
                         <ProThreeIconContainer>
                            <ProThreeDltIcon src={require("../../assets/images/trash-alt.svg").default} />
                        </ProThreeIconContainer>
                        <ProThreeIconContainer>
                            <ProThreeIcon src={require("../../assets/images/three-dots.svg").default} />
                        </ProThreeIconContainer>
                    </ProThreeRight>                        
                </ProDivThree>
            </ProfileList>
       </ProfileContainer>
    </>
  )
}

export default Profile

const ProfileContainer = styled.section`
    width: 39%;
`;
const ProfileList = styled.section`

`;
const ProDivOne = styled.div`
    padding: 20px;display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
`;
const ProLeft = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProDivImage = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
    
`;
const ProName = styled.div``;
const ProInput = styled.input`
    font-weight: bold;
    font-size: 13px;

`;
const ProP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProIconContainer = styled.section`
   width: 18px;
`;
const ProDltIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProEditIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProDivTwo = styled.div`
    padding: 20px;display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
`;
const ProTwoLeft = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProTwoDivImage = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProTwoImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
`;
const ProTwoName = styled.div``;
const ProTwoInput = styled.input`
    font-weight: bold;
    font-size: 13px;
`;
const ProTwoP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProTwoRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProTwoIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProTwoIconContainer = styled.section`
    width: 18px;
`;
const ProTwoDltIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProTwoEditIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProDivThree = styled.div`
    padding: 20px;display: flex;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin: 20px 0px;
`;
const ProThreeLeft = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProThreeDivImage = styled.div`
    width: 40px;
    margin-right: 20px;
`;
const ProThreeImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 50px;
`;
const ProThreeName = styled.div``;
const ProThreeInput = styled.input`
    font-weight: bold;
    font-size: 13px;
`;
const ProThreeP = styled.p`
    color: grey;
    font-size: 10px;
`;
const ProThreeRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const ProThreeIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProThreeIconContainer = styled.section`
    width: 18px;
`;
const ProThreeDltIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProThreeEditIcon = styled.img`
    display: block;
    width: 100%;
`;

