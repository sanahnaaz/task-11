import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <>
      <HeaderTop>
          <LogoContainer>
              <LogoImage src={require("../../assets/images/logo.svg").default} />
          </LogoContainer>
          <HeadUl>
            <HeadLi>
              <HeadA href=""> Overview</HeadA>
            </HeadLi>
            <HeadLi>
              <HeadA href="">Guest List</HeadA>
            </HeadLi>
            <HeadLi>
              <HeadA href="">Temporery Traffic</HeadA>
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
                <MenuH5>Dashboard</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/fluent_food-cake-20-regular.svg").default} />
                </MenuIcon>
                <MenuH5>Catering Status</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/bx_bar-chart-square.svg").default} />
                </MenuIcon>
                <MenuH5>Guest Traffic</MenuH5>
              </MenuLi>
              <MenuLi>
                <MenuIcon>
                  <MenuImage src={require("../../assets/images/ant-design_gift-outlined.svg").default} />
                </MenuIcon>
                <MenuH5>Guest Traffic</MenuH5>
              </MenuLi>
            </MenuUl>
            <SetMenu>Settings</SetMenu>
            <SetUl>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/healthicons_ui-user-profile-outline.svg").default} />
                </SetIcon>
                <SetH5>Account</SetH5>
              </SetLi>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/clarity_wallet-line.svg").default} />
                </SetIcon>
                <SetH5>Wallet</SetH5>
              </SetLi>
              <SetLi>
                <SetIcon>
                  <SetImage src={require("../../assets/images/fluent_chat-help-20-regular.svg").default} />
                </SetIcon>
                <SetH5>Help & Support</SetH5>
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
  padding-top: 70px;
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
const HeadA = styled.a`
    font-size: 20px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
      color: #000;
      font-weight: normal;
      border-bottom: 3px solid #000;
    }
`;
const IconUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const IconLi = styled.li`
  width: 40px;

`;
const IconImage = styled.img`
  display: block;
  width: 100%;
`;
const SideContainer = styled.section`
  width: 20%;
  padding-left: 20px;
`;
const SideBar = styled.section`
  margin-top: 30px;
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
  margin-bottom: 13px;
`;
const MenuIcon = styled.span`
  margin-right: 8px;
`;
const MenuImage = styled.img`

`;
const MenuH5 = styled.h5`
  margin: 0;
`;
const SetMenu = styled.h4`
  color: #8D8989;
  font-size: 15px;
  margin-bottom: 20px;
`;
const SetUl = styled.ul`
  padding-left: 10px;
`;
const SetLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;
const SetIcon = styled.span`
  margin-right: 8px;
`;
const SetImage = styled.img`

`;
const SetH5 = styled.h5`
  margin: 0;
`;