import styled from 'styled-components'
export const LoginWrapper = styled.div`
  position: absolute;
    top: -70px;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-wrpper {
        display: flex;
        flex-direction: column;
        width: 16%;
        min-width: 250px;
    }
   
`
export const LoginBtn = styled.span`
    display; inline-block;
    margin-top: 25px;
    width: 100%;
    background: red;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0 ;
    opacity: ${props => props.active ? '0.5':'1'};
    color: white ;
    
   
`
export const RegisterBtn = styled.span`
    display; inline-block;
    margin-top: 10px;
    width: 100%;
    background: red;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0 ;
    opacity: ${props => props.active ? '0.5':'1'};
    color: white ;
    
   
`

export const ModalBtns = styled.div`
        margin-top: 10px;
        padding: 10px;
        width: 90%;
        background: red;
        color: white;
        border-radius: 10px;
        text-align: center;

   
`
export const ModalWrapper = styled.div`
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
export const ErrorMessage = styled.span`
        color: red;
        font-size: 12px;
        align-self: center;
    
`