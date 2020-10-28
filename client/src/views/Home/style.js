import styled from 'styled-components'
export const PostBtn = styled.span`
    display; inline-block;
    margin-top: 25px;
    width: 100%;
    background: red;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0 ;
    opacity: ${props => props.active ? '0.5' : '1'};
    color: white ;
    
   
`
export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-gap: 16px;
    grid-template-rows: 0fr;
    justify-content: center;
    @media only screen and (max-width: 1276px) {
        grid-template-columns: 450px 450px;
    }
    @media only screen and (max-width: 1105px) {
        grid-template-columns: 400px 400px;
    }
    @media only screen and (max-width: 844px) {
        grid-template-columns: 400px;
    }

    @media only screen and (max-width: 480px) {
        grid-template-columns: 340px;
    }
   
`
export const AddBtn = styled.div`
        position: fixed;
        bottom:10px;
        right:10px;
        padding: 10px;
        width: 100px;
        background: red;
        color: white;
        border-radius: 10px;
        text-align: center;

   
`
export const NewPostWrapper = styled.div`
        display: flex;
        width: 250px;
        flex-direction: column;
        background: white;
        padding: 20px;
        border-radius: 5px;
        height: 270px;
        margin-top: 200px;
        z-index: 99;   
`