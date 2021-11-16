import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 100px;
    margin-bottom: 40px;
    flex-direction: column;
    @media(max-width: 700px) {
        margin-top: 60px;
    }
`
export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: url(/images/components/abstract-shapes-19.svg) center no-repeat;
    
`
export const ContentCenter = styled.div`

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 10px;
    text-align: center;
    max-width: 480px;
`