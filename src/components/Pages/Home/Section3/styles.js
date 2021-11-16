import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 70px;
    margin-bottom: 40px;
    flex-direction: column;
    @media(max-width: 700px) {
        margin-top: 1px;
    }
`
export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 10px;     

    @media(max-width: 700px) {
        flex-direction: column-reverse;
        margin-top: 20px;
        align-content: center;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        text-align: center;
    }
`
export const Setion3Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: auto;
    
    > p {
        padding-right: 50px;
    }
    @media(max-width: 700px) {
        width: 100%;
        display: flex;
        > p {
            padding: 0 10px;            
        }
    }
`
export const Section3Imagem = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 50px;

    @media(max-width: 700px) {
        width: 80%;
        padding: 5px;
        margin-bottom: 20px;
  }
`


