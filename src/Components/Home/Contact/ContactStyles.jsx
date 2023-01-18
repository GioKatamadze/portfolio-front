import styled from "styled-components";

const StyledContact = styled.div`
    scroll-margin-top: 100px;
    width: 100vw;
    height: max-content;
    margin-top: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff36;

    .formWrapper {
        width: 100%;
        height: auto;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: var(--box-shadow);
        overflow: hidden;
        padding: 5px;
    }

    .form {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 15px;
        font-weight: 400;
    }

    input, textarea {
        border: none;
        width: 100%;
        margin-top: 10px;
        padding: 5px;
        border-bottom: 1px solid #25252574;
    }

    button {
        width: 160px;
        height: 40px;
        background-color: #2792f0;
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
        transition: .1s;
        box-shadow: #78b8ef -4px 4px;
        :active {
            cursor: pointer;
            background-color: #2792f0;
        }
    }
`

export default StyledContact