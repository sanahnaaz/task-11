import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Grapht from './Grapht';


function Spotlight() {
    return (
        <>
            <SpotContainer>
                <TopContainer>
                    <DivOne>
                        <MIcon>
                            <MSpan>
                                <SpanIconImage src={require("../../assets/images/white-icon.svg").default} />
                            </MSpan>
                            <MH3>Male Guest</MH3>
                        </MIcon>
                        <MCount>
                            <MLeft>
                                <MH4>Total invites</MH4>
                                <MH1>8,124</MH1>
                            </MLeft>
                            <HR />
                            <MRight>
                                <MH4>Total Come</MH4>
                                <MH1>4,204</MH1>
                            </MRight>
                        </MCount>
                    </DivOne>
                    <DivTwo>
                        <FIcon>
                            <FSpan>
                                <SpanImage src={require("../../assets/images/white-icon2.svg").default} />
                            </FSpan>
                            <FH3>Female Guest</FH3>
                        </FIcon>
                        <FCount>
                            <FLeft>
                                <FH4>Total invites</FH4>
                                <FH1>9,620</FH1>
                            </FLeft>
                            <HR />
                            <FRight>
                                <FH4>Total Come</FH4>
                                <FH1>6,125</FH1>
                            </FRight>
                        </FCount>
                    </DivTwo>
                    <DivThree>
                        <VisitH4>Visitor Traffic</VisitH4>
                        <VisitDiv>
                            <VisitImage alt="graph" src={require("../../assets/images/group 3465418.svg").default} />
                        </VisitDiv>
                    </DivThree>
                </TopContainer>
                <Seemore>
                    <SeeRight>
                        <SeeH5>Recently Guest</SeeH5>
                        <SeeH6>See more</SeeH6>
                    </SeeRight>
                    <SeeLeft>
                        <SeeH5>Guest Traffic</SeeH5>
                        <SeeH6>See more</SeeH6>
                    </SeeLeft>
                </Seemore>

                <BottomContainer>
                    <Profile />
                    <Grapht />
                </BottomContainer>
            </SpotContainer>
        </>
    )
}

export default Spotlight;

const BottomContainer = styled.section`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1080px){
        flex-wrap: wrap;
    }
    @media all and (max-width: 980px){
        flex-wrap: wrap;
    }  
`;
const SpotContainer = styled.section`
    background: #f5f1f1;
    width: 80%;
    padding: 25px;
    
    @media all and (max-width: 768px){
    width: 100%;
  }
  @media all and (max-width: 640px){
    width: 120%;
  }
`;
const TopContainer = styled.section`
    display: flex;
    justify-content: space-between;
@media all and (max-width: 768px){
    flex-wrap: wrap;
}
`;
const DivOne = styled.div`
    background-color: #A5E3E3;
    width: 39%;
    padding: 40px;
    border-radius: 18px;
    @media all and (max-width: 980px){
        padding: 30px;
    }
    @media all and (max-width: 768px){
        padding: 15px;
        width: 100%;
        margin: 10px 10px;
    }
`;
const MIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
@media all and (max-width: 768px){
    margin-left: 180px;
}
@media all and (max-width: 480px){
    margin-left: 60px;
}
`;
const MSpan = styled.span`
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    background: #000;
    display: inline-block;
`;
const SpanIconImage = styled.img`
    display: block;
    width: 100%; 
`;
const MH3 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;
`;
const MCount = styled.section`
    display: flex;
    justify-content: space-between;
@media all and (max-width: 768px){
    justify-content: space-around;
}
`;
const MLeft = styled.div`

`;
const MH4 = styled.h4`
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
`;
const MH1 = styled.h1`
    font-size: 45px;
    font-weight: bold;
    color: #000;
    @media all and (max-width: 1280px){
        font-size: 35px;
    }
    @media all and (max-width: 980px){
        font-size: 25px;
    }
    @media all and (max-width: 768px){
        font-size: 20px;
        text-align: center;
    }
`;
const HR = styled.hr`
    border-right: 1px solid #000;
`;
const MRight = styled.div``;
const DivTwo = styled.div`
    background-color: #D2A2F7;
    width: 39%;
    padding: 40px;
    border-radius: 18px;
    @media all and (max-width: 980px){
        padding: 30px;
    }
    
    @media all and (max-width: 768px){
        padding: 10px;
        width: 100%;
        margin: 10px 10px;
    }
`;
const FIcon = styled.div`
     display: flex;
    align-items: center;
    margin-bottom: 15px;
    @media all and (max-width: 768px){
        margin-left: 180px;
}
@media all and (max-width: 480px){
    margin-left: 60px;
}
`;
const FSpan = styled.span`
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    background: #000;
    display: inline-block;
`;
const SpanImage = styled.img`
    display: block;
    width: 100%;
`;
const FH3 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #000;

`;
const FCount = styled.section`
     display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px){
    justify-content: space-around;
}
`;
const FLeft = styled.div``;
const FH4 = styled.h4`
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
    
`;
const FH1 = styled.h1`
    font-size: 45px;
    font-weight: bold;
    color: #000;
    @media all and (max-width: 1280px){
        font-size: 35px;
    }
    @media all and (max-width: 980px){
        font-size: 25px;
    }
    @media all and (max-width: 768px){
        font-size: 20px;
        text-align: center;
    }
`;
const FRight = styled.div``;
const DivThree = styled.div`
    width: 14%;
    background-color: #fff;
    border-radius: 15px;
    @media all and (max-width: 768px){
        width: 100%;
        margin: 10px 10px;
    }
`;
const VisitH4 = styled.h4`
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
const VisitDiv = styled.div`
    @media all and (max-width: 768px){
        width: 50%;
        margin: 0 auto;
}
`;
const VisitImage = styled.img`
    display: block;
    width: 100%;
`;
const Seemore = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
@media all and (max-width: 480px){
        flex-wrap: wrap;
}
`;
const SeeRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 38%;
@media all and (max-width: 980px){
   display: none;
} 
@media all and (max-width: 480px){
    width: 50%;
}
`;
const SeeH5 = styled.h5`
    font-size: 18px;
    color: #000;
    font-weight: 500;
@media all and (max-width: 768px){
    font-size: 15px;
    }
@media all and (max-width: 480px){
    font-size: 13px;
}
`;
const SeeH6 = styled.h6`
    font-size: 12px;
    color: grey;
    font-weight: 700;
@media all and (max-width: 480px){
    font-size: 10px;
}
`;
const SeeLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
`;
