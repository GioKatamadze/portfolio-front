import Header from "../../Components/Home//Header/Header.jsx";
import SingleProject from "../../Components/Projects/ProjectDiv/SingleProject.jsx";
import Footer from "../../Components/Home/Footer/Footer.jsx";
import styled from "styled-components";
import { useEffect } from "react";

const ProjectPage = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #F8F8F8;
`

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <ProjectPage>
            <Header />
            <SingleProject />
            <Footer />
        </ProjectPage>
    )
}

export default Project