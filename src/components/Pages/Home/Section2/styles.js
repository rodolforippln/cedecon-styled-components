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

export const Setion2Content = styled.div`
    width: 30%;
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

export const Section2Imagem = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 50px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    @media(max-width: 700px) {
        width: 80%;
        padding: 5px;
        margin-bottom: 20px;

  }
`
export const Setion2ContentIcon = styled.div`
    width: 50%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;

    @media(max-width: 700px) {
        width: 80%;
        padding: 25px;
        margin-bottom: 20px;
        justify-content: center

  }
`

