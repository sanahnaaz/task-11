import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderTop>
          <LogoContainer>
              <LogoImage src={require("../../assets/images/logo.svg").default} />
          </LogoContainer>
          <HeadUl>
            <HeadLi>
              <HeadA > Overview</HeadA>
            </HeadLi>
            <HeadLi>
              <HeadA to="/profile">Guest List</HeadA>
            </HeadLi>
            <HeadLi>
              <HeadA to="/guestTaffic">Temporery Traffic</HeadA>
            </HeadLi>
          </HeadUl>
          <IconUl>
            <IconLi>
              <IconImage src={require("../../assets/images/bxs_bell.svg").default} />
            </IconLi>
            <IconLi>
              <IconImage src={require("../../assets/images/rectangle.jpg")} />
            </IconLi>
          </IconUl>
      </HeaderTop>
      <SideContainer>
        <SideBar>
            <MainMenu>Main Menu</MainMenu>
            <MenuUl>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/akar-icons_dashboard.svg").default} />
                </MenuIcon>
                <MenuH5 to="/">Dashboard</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/fluent_food-cake-20-regular.svg").default} />
                </MenuIcon>
                <MenuH5 to="/catering">Catering Status</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/bx_bar-chart-square.svg").default} />
                </MenuIcon>
                <MenuH5 to="/guestTaffic">Guest Traffic</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/ant-design_gift-outlined.svg").default} />
                </MenuIcon>
                <MenuH5 to="/gifts">Gifts</MenuH5>
                <MenuSpan>22</MenuSpan>
              </MenuLi>
            </MenuUl>
            <SetMenu>Settings</SetMenu>
            <SetUl>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/healthicons_ui-user-profile-outline.svg").default} />
                </SetIcon>
                  <SetH5 to="/account">Account</SetH5>
              </SetLi>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/clarity_wallet-line.svg").default} />
                </SetIcon>
                <SetH5 to="/wallet">Wallet</SetH5>
              </SetLi>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/fluent_chat-help-20-regular.svg").default} />
                </SetIcon>
                <SetH5 to="/help">Help & Support</SetH5>
              </SetLi>
            </SetUl>
        </SideBar>  
      </SideContainer> 
    </>
  )
}

export default Header;

const HeaderTop = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  padding-top: 0px;
  margin-top: 70px;
`;
const LogoContainer = styled.h1`
  margin: 0;
  display: contents;
`;
const LogoImage = styled.img`

`;
const HeadUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 65%;
`;
const HeadLi = styled.li`
    margin-right: 30px;
`;
const HeadA = styled(Link)`
    font-size: 17px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      border-bottom: 2px solid #000;
    }
    @media all and (max-width: 980px){
      font-size: 15px;
  }
`;
const IconUl = styled.ul`
  justify-content: space-between;
  display: flex;
  
  list-style: none;
`;
const IconLi= styled(Link)`
  width: 40px;
  margin-left: 10px;
  
`;
const IconImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const SideContainer = styled.section`
  width: 20%;
  padding-left: 20px;
`;
const SideBar = styled.section`
  margin-top: 50px;
`;
const MainMenu = styled.h4`
  color: #8D8989;
  margin-bottom: 20px;
  font-size: 15px;
  
`;
const MenuUl = styled.ul`
  padding-left: 10px;
`;
const MenuLi = styled.li`
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  @media all and (max-width: 980px){
    font-size: 12px;
  }
  
`;
const MenuIcon = styled.span`
  margin-right: 8px;
`;
const MenuImage = styled.img`

`;
const MenuH5 = styled(Link)`
  margin: 0;
  &:hover{
      color: #000;
      font-weight: bold;
    }
`;
const MenuSpan = styled.span`
    background-color: #A5E3E3;
    border-radius: 10px;
    padding: 3px;
    display: inline-block;
	  margin-left: 5px;
    font-size: 10px;
    color: #fff;
`;
const SetMenu = styled.h4`
  color: #8D8989;
  font-size: 15px;
  margin: 50px 0px 20px;

`;
const SetUl = styled.ul`
  padding-left: 10px;
`;
const SetLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  @media all and (max-width: 1280px){
    font-size: 12px;
  }
`;
const SetIcon = styled.span`
  margin-right: 8px;
`;
const SetImage = styled.img`

`;
const SetH5 = styled(Link)`
  margin: 0;
  &:hover{
      color: #000;
      font-weight: bold;
    }
`;