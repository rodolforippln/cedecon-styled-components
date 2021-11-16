import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    margin-top: 70px;
    margin-bottom: 40px;
    flex-direction: column;
    @media(max-width: 700px) {
        margin-top: 60px;
    }
`
export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    margin: auto;    
`
export const ContentSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 23% 1fr;
    column-gap: 15px;
    margin: auto;  
    @media(max-width: 700px) {
        grid-template-columns: 1fr;
    }    
`
export const Sidebar = styled.div`
    display: flex;
    @media(max-width: 700px) {
        display: none;
    }   
`
export const ContainerCursos = styled.div`
    display: flex;
    height: 205px;
    @media(max-width: 700px) {
        display: none;
    } 
`
export const CardImage = styled.div`
    position: relative;
    max-width: 350px;
    img {
        border-radius: 12px;
    }
`
export const TagImg = styled.div`
    position: absolute;
    left: 15px;
    top: 15px;
    color: white;
    small {
        background-color: #00c9a7;
        border-radius: 6px;
        padding: 3px 6px;
    }
`
export const ImgReviews = styled.div`
    position: absolute;
    left: 15px;
    top: 148px;
    color: white;
`
export const ContentReviews = styled.div`
    display: flex;
`
export const StarContainer = styled.div`
    margin-right: 10px;
`
export const NotaReviews = styled.div`

    
`
export const ValorSpan = styled.span`
    margin-right: 10px;    
`
export const TextSpan = styled.span`
    font-size: 13px;
    color: rgba(255,255,255,.7)    
`
export const CardContent = styled.div`
    width: 100%;
    position: relative;
    padding: 10px 20px;
    display: flex;
    flex-direction: column; 
    p {
        font-size: 16px;
        margin-top: 5px;
    }   
`
export const ConatinerTitle = styled.div`
    display: flex;  
    width: 100%;
    justify-content: space-between;
`
export const ContainerAvatarFull = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    height: 24px;
    margin-top: 8px;
    width: 100%;
`
export const ContainerAvatarImage = styled.div`
    img {
        border-radius: 50%;
    }     
`
export const ContainerAvatarText = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;     
`
export const ContainesList = styled.ul`
    list-style: none;  
    display: flex;
`
export const ListItem = styled.li`    
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    padding: 0;
    margin-right: 10px;    
`
export const ContainerPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
`
export const ContentPrice = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-content: flex-start;
    text-align: center;
    h5 {
        font-size: 16px;
        color: rgba(55,125,255);
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #677788;
    } 
`
export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    h5 {
        font-size: 20px;
        margin-bottom: 10px;
    } 
`
export const ResultFilter = styled.div`

`
export const DGrid = styled.div`
    display: grid;
    h5 {
        text-transform: uppercase;
        letter-spacing: .03125rem;
        font-size: .75rem;
        font-weight: 600;
        padding: 0.5rem 0;
    }
    a {
        margin-bottom: 0.25rem;
        font-size: .875rem;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        color: #677788;
        &:hover {
            color: #377DFF;
        }         
    }
`
export const SpanBranco = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 0 5px;
    margin-left: 10px;
`
export const SpanVerde = styled.div`
    color: white;
    background-color: #00c9a7;
    border-radius: 50px;
    
    padding: 0 5px;
    margin-left: 10px;
`
