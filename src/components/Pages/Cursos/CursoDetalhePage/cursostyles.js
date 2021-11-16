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
    @media(max-width: 700px) {
        padding-top: 30px;
        h1 {
            font-size: 25px;
        }
    }
`


export const ContainerCursoDetalhes = styled.div`
    width: 90%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media(max-width: 700px) {
        padding-top: 30px;
        h1 {
            font-size: 25px;
        }
    }
`