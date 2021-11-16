import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 90px;

    background-color: white;
    z-index: 100;
`
export const Content = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Navegacao = styled.div`
    display: flex;
`
export const Topnav = styled.div`
    overflow: hidden;
    a {
        float: left;
        display: block;
        color: #677788;
        text-align: center;
        padding: 1px 16px;
        text-decoration: none;
        font-size: 17px;
        &:hover {
            color: black;
        }
    }
`

