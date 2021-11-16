import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 90px;
    margin-bottom: 40px;
    flex-direction: column;
`
export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #377dff;
    border-radius: 12px;
    @media(max-width: 700px) {
        padding-top: 30px;
        h1 {
            font-size: 25px;
        }
    }
`
export const HeroContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 50px;
    color: white;
    h1 {
        font-size: 40px;
        margin: 0;
        color: white;
    } 
    p {
        font-size: 20px;
        margin: 0;
    }

    @media(max-width: 700px) {
        width: 100%;
    }
`
export const HeroImagem = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding: 0;    
    height: 233px;
    overflow: hidden;
    img {
        border-radius: 0 0 12px 0;
    }
    @media(max-width: 700px) {
        display: none;

  }
`
