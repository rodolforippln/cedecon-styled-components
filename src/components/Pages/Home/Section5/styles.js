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
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
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
export const GridCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
    margin-top: 40px;
    justify-content: center;
    @media(max-width: 700px) {
        width: 100%;
        grid-template-columns: 1fr;
    }
`
export const CardSection5 = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    h3 {
        margin-top: 20px;
    }
`
export const Section5ImgPoint = styled.div`

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    color: #000;
    span {
        font-weight: 600;        
    }
`
export const ContentBgImage = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 25px rgba(0,0,0, .1);
    width: 80%;
`
export const ControlsBrowser = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5px;
`
export const TextFinal = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 5px;
    font-size: 12px;
    margin-top: 20px;
    color: #677788;
    line-height: 23px;
`