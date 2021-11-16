import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 70px;
    margin-bottom: 40px;
    flex-direction: column;
    @media(max-width: 700px) {

        margin-top: 10px;
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

export const Setion4Content = styled.div`
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

export const Section4ContentGrid = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;

`

export const Section4ContentGridCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: start;
    h3 {
        color: #377dff;
        margin-top: 0;
    }


`

export const Section4Imagem = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    margin: auto;
    img {
        border-radius: 6px;
    }


    @media(max-width: 700px) {
        width: 80%;
        padding: 5px;
        margin-bottom: 20px;

  }
`
export const Setion4ContentIcon = styled.div`
    width: 50%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;




    @media(max-width: 700px) {
        width: 80%;
        padding: 5px;
        margin-bottom: 20px;

  }
`

