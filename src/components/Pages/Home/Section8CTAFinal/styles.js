import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    flex-direction: column;
`
export const ContentContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    margin-bottom: 40px;
    margin: auto;
    @media(max-width: 700px) {
        width: 60%;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: auto;
        text-align: center;
    }
`
export const HeroContent = styled.div`
    width: 40%;
    display: flex;
    align-content: space-between;
    justify-content: space-between;
    padding: 0 60px;
    h3 {
        font-size: 16px;
    }    
    > p {
        padding-right: 50px;        
    }
    @media(max-width: 700px) {
        width: 100%;
    }
`
export const ContainerCTA = styled.div`
    display: flex;
`
export const ContainerButton = styled.div`
    a {
        text-decoration: none;
        font-size: 14px;
        background-color: #377dff;
        padding: 12px 30px;
        color: white;
        border-radius: 6px;
        font-weight: 600;  
        &:hover {
            background-color: blue;        
        }        
    }
    @media(max-width: 700px) {
        margin: 30px 0;
    }
`

