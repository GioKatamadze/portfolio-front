import profileImage from "./profileImg.png"
import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100vw;
    height: 70px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    background-color: #F8F8F8;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 20px -20px;

    #title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: 5vw;
      text-decoration: none;
    }

    #title-box h2 {
      margin-left: 10px;
      color: #088b85;
      transition: .2s;
      font-weight: 700;
      font-size: 19px;
    }

    .profileImage {
      width: 31px;
      height: 31px;
      border-radius: 100%;
      background-image: url(${profileImage});
      background-size: cover;
      border: 2px solid #088b85;
    }

    #title-box:hover {
      cursor: pointer;
    }


    .menuIcon {
      margin-right: 5vw;
      margin-top: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .menuIcon:hover {
      cursor: pointer;
    }

    .menuDiv {
      width: 100vw;
      height: 100vh; 
      position: absolute;
      top: 0; 
      right: 0;
      background-color: rgba(0, 0, 0, 0.2); 
    }

    @media (min-width: 768px) {
      .menuIcon, .menuDiv {
        display: none;
      }

      .profileImage {
      width: 40px;
      height: 40px;
      }

      #title-box {
      margin-top: 0;
      font-size: 25px;
    }
    }

    @media (min-width: 1000px) {
      #title-box {
      margin-left: 10vw;
    }
    }
`

export default StyledHeader