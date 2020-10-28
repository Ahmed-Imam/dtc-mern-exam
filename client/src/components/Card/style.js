import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid #dcddde;
    border-radius: 4px;
    padding: 16px;
    -webkit-transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    



`

export const CardHeader = styled.div`
    height: 50px;
    width: 100%;
    min-height: 50px;
    display: flex;
    .image{
        display: flex;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        margin-right: 5px;
        background: #eee;
    }
    span{
        display: inline-block;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 7px;
        margin-left: 3px;
        font-weight: 600;
        font-size: 17px;
        text-overflow: ellipsis;
    }
    border-bottom: 1px dashed #aaa;
    
`

export const CardBody= styled.div`
    height: 80px;
    min-height: 80px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    
    
`

export const CardFooter = styled.div`
    max-width: 400px;
    height: 200px;
    display: flex;
    justify-content: flex-end;
    
    border-radius: 4px;
    padding: 16px;
    -webkit-transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    }
    svg{
        color: red;
        cursor: pointer;
    }
    
`
