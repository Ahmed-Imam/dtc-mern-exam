import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 22px;
    & label {
        position: absolute;
        margin-left: 10px;
        color: #392b58;
        font-size: 14px;
        font-family: 'Roboto';
        transition: all .20s ease-in-out;
      }

      & input {
        box-sizing: content-box;
        height: 35px;
        border-radius: 4px;
        border: 2px solid #392b58;
        padding: 0 5px;
        font-family: 'Roboto';
        font-size: 16px;
        outline: none;
      }

       
    & input:valid {
        background: rgba(255, 255, 255, 0.1);
        color: black;
    }
    
    & input:focus {
        border: 2px solid #938ba3;
    }
    
    & input:focus + label {
        transform: translate(0, -28px);
        color: black;
    }
    
    & input:valid + label {
        transform: translate(0, -28px);
        color: black;
    }
    
    & input:focus ~ i {
        opacity: 1;
    }
    
    & input:valid ~ i {
        color: black;
    }

`
export const Error = styled.span` 
    display: inline-block;
    width: 97%;
    font-size: 12px;
    color: red;
    text-align: right;
    
`