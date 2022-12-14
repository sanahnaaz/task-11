import React from "react";
import styled from 'styled-components';


import {
  BarChart,
  Bar,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip
//   Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    Female_Guest: 200,
    Male_Guest: 250,
    Total_Guest: 1400,
    amt: 2400
  },
  {
    name: "Page B",
    Female_Guest: 150,
    Male_Guest: 195,
    Total_Guest: 2098,
    amt: 2210
  },
  {
    name: "Page C",
    Female_Guest: 200,
    Male_Guest: 230,
    Total_Guest: 2600,
    amt: 2290
  },
  {
    name: "Page D",
    Female_Guest: 250,
    Male_Guest: 350,
    Total_Guest: 3408,
    amt: 2000
  },
  {
    name: "Page E",
    Female_Guest: 200,
    Male_Guest: 260,
    Total_Guest: 2000,
    amt: 2181
  },
  {
    name: "Page F",
    Female_Guest: 180,
    Male_Guest: 290,
    Total_Guest: 2900,
    amt: 2500
  }
];

export default function Grapht() {
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

    <GraphContainer>
        <BarChartBox>
			<GraphHead>
				<GuestTop>
					<TotalDiv>
							<Tbox></Tbox>
							<Gh4>Total guest</Gh4>
					</TotalDiv>
					<TotalDiv>
							<Mbox></Mbox>
							<Gh4>Male guest</Gh4>
					</TotalDiv>
					<TotalDiv>
							<Fbox></Fbox>
							<Gh4>Female guest</Gh4>
					</TotalDiv>
				</GuestTop>
				<Slide>
					<Limg src={require("../../assets/images/arrow-fill.svg").default} />
					<Limg src={require("../../assets/images/arrow-fill-1.svg").default} />
				</Slide>
			</GraphHead>
          <BarChart
          width={500}
          height={250}
          data={data}
          margin={{
              top: 3,
              right: 10,
              left: 20,
              bottom: 3
              
          }}
          >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Total_Guest" stackId="a" fill="#000" />
          <Bar dataKey="Female_Guest" stackId="a" fill="#D2A2F7" />
          <Bar dataKey="Male_Guest" stackId="a" fill="#A5E3E3" />
          </BarChart>
        </BarChartBox>
    </GraphContainer>
    </>
  );
}



const GraphContainer = styled.section`
    width: 56%;
    padding: 20px 35px;
    background-color: #fff;
    border-radius: 20px;
    margin: 20px 0px;
    @media all and (max-width: 1280px){
      width: 80%;
      background-color: #f5f1f1;
      border-radius: 0px;
  }
  @media all and (max-width: 1080px){
        flex-wrap: wrap;
        width: 100%;
    }
  @media all and (max-width: 980px){
    flex-wrap: wrap;
    width: 100%;
  }
  @media all and (max-width: 768px){
    padding: 50px;
  }
  @media all and (max-width: 640px){
      display: none;
  }
`;
const BarChartBox = styled.section`
    width: 100%;
    margin: 0 auto;
`;
const GraphHead = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const GuestTop = styled.section`
	display: flex;
	align-items: center;
`;
const TotalDiv = styled.div`
    display: flex;
    align-items: center;
	  margin-right: 20px;
	  &:last-child{
		margin-right: 0;
	  }
`;
const Tbox = styled.span`
    background-color: #000;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
	  margin-right: 5px;
`;
const Gh4 = styled.h4`
    font-size: 15px;
    font-weight: 600;
    margin-right: 15px;
    color: #000;
    @media all and (max-width: 768px){
      font-size: 10px;
    }
`;
const Mbox = styled.span`
    background-color: #A5E3E3;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
	  margin-right: 5px;
`;
const Fbox = styled.span`
    background-color: #D2A2F7;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
	  margin-right: 5px;
`;
const Slide = styled.div`
  display: flex;
  width: 20px;
`;
const Limg = styled.img`
    display: block;
    width: 100%;
`;





const TrafficContainer = styled.section`
    width: 100%;
    padding: 20px 35px;
    background-color: #fff;
    border-radius: 20px;
    margin: 20px 0px;
    display: none;
    @media all and (max-width: 640px){
      display: block;
    }

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