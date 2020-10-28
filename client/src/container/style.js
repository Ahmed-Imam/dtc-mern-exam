import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    wdith:100%;
    .body{
      
        margin-top: 75px;
        @media only screen and (max-width: 1105px) {
            margin-left:3%;
        }
    }

  
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    z-index: 1020;
    width: 100%;
    background: white;
    height: 55px;
    padding: 0 0;
    margin: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #dcddde;
    .nav{
        cursor: pointer;
        display: flex;
        margin : 10px;
        span{
            color: red;
            display: inline-block;
            margin-left: 20px;
            font-size: 18px;
            font-weight: 700;
       
        }
        svg{
            color: red;
            margin-left: 10px;
            
        }
    }
    .log-out{
        cursor: pointer;
        display: flex;
        margin : 10px;
        svg{
            color: red;
            margin-left: 10px;
            
        }

    }
   
   
 
`
export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    height:95%;
    margin-top:45px;
    width: 250px;
  
    position: absolute;
    box-sizing: border-box;
    border-right: 1px solid #dcddde;
    padding-top: 20px;
    transition: width 1s;
    overflow: hidden;
    a{
        text-decoration: none;
        color: #000;
    }
    .selected{
        background: red;
        color: white;
        
    }
    ${props => props.showSideBar ? 
        `
            width: 250px;
           
         
            ` 
        : ` 
            width:0;
     
           
            `};

`

export const Button = styled.div`
    display: flex;
    width: 80%;
    padding: 10px; 
    border-radius: 5px;
    margin: 3px;

`


