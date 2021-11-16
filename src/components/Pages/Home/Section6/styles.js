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
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const ContentCenter = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding-top: 10px;
    text-align: center;
    max-width: 480px;

`
export const GridCard = styled.div`

    display: grid;
    grid-template-columns: 40% 28% 28%;
    column-gap: 2%;
    margin-top: 40px;
    margin-bottom: 60px;
    @media(max-width: 700px) {
        width: 100%;
        grid-template-columns: 1fr;
    }
`
export const CardSection6 = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: space-between;
    border-radius: 6px;
    box-shadow: 0 15px 25px rgba(0,0,0, .05);
    color: #677788;   
    cursor: pointer;
    justify-self: center;
    @media(max-width: 700px) {
        margin-bottom: 30px;
    }
    h3 {
        margin-top: 20px;
        padding: 0 20px;
    }
    p {
        padding: 0 20px;
    }
    img {
        border-radius: 6px 6px 0 0;
    }

`
export const ContainerLinkIcom = styled.div`

    display: flex;
    margin-left: 12px;
    margin-bottom: 20px;
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

export const ContainerLinkIcomTrasparent = styled.div`

    display: flex;
    margin-left: 12px;
    margin-bottom: 20px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-decoration: none;
        font-size: 14px;
        background-color: transparent; 
        padding: 12px 30px;
        color: #377dff;
        border-radius: 50px;
        font-weight: 600; 
        border: 1px solid rgba(0, 0, 0, .1);
        &:hover {
            color: blue;            
        }
        > svg {            
            margin-left: 5px;
        }  
    }

`


