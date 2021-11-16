import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 70px;
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
    padding-top: 10px;
    background-color: #f7faff;
    border-radius: 6px;
    @media(max-width: 700px) {
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        
    }
`
export const HeroContent = styled.div`
    width: 40%;
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    margin: auto;
    padding: 0 60px;
    
    > p {
        padding-right: 50px;
        
    }
    @media(max-width: 700px) {
        width: 70%;
        align-content: center;
        justify-content: center;
        align-items: center;
        margin: auto;        
        text-align: center;
        padding-top: 30px;
    }
`
export const ContainerCTA = styled.div`
    display: flex;
    margin-top: 30px;
`
export const ContainerButton = styled.div`
    a {
        text-decoration: none;
        font-size: 14px;
        margin-right: 10px;
        background-color: #377dff;
        padding: 12px 30px;
        color: white;
        border-radius: 6px;
        font-weight: 600;  
        &:hover {
            background-color: blue;        
        }        
    }
`
export const ContainerLinkIcom = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-decoration: none;
        font-size: 14px;
        background-color: transparent; 
        padding: 2px 10px;
        color: #377dff;
        border-radius: 6px;
        font-weight: 600; 
        &:hover {
            color: blue;            
        }
        > svg {            
            margin-left: 5px;
        }  
    }
`
export const HeroImagem = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0;
    margin-top: 90px;
    img {
        border-radius: 0 0 6px 0;         
    }
    @media(max-width: 700px) {
        margin-top: 30px;
        
  }
`