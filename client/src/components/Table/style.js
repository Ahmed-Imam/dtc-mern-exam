import styled from 'styled-components'
export const Wrapper = styled.div`
          position: relative;
          width:100%;
          z-index: 1;
          margin: auto;
          overflow: auto;
          max-height: ${props => props.tableHeight};
          z-index:0;
   
 
`
export const StyledTable = styled.table`
          width: 100%;
          margin: auto;
          border-collapse: separate;
          border-spacing: 0;
          th,  td {
          padding: 5px 10px;
          border: 1px solid #ddd;
          background: #fff;
          vertical-align: top;
          }
          thead tr th,  thead tr td{
               background: ${props => props.tableSettings && props.tableSettings.headerBgColor ? props.tableSettings.headerBgColor  :'#fff'};
               color: ${props => props.tableSettings && props.tableSettings.headerColor ? props.tableSettings.headerColor  :'#000'};   
               position: -webkit-sticky;
               position: sticky;
               font-weight: 700;
               z-index:99;
               font-size:${props => props.tableSettings && props.tableSettings.headerFontSize ? props.tableSettings.headerFontSize  :'12px'};
               top: 0;
               text-align: center;
          }
          tr td {
      
               white-space: nowrap;
               z-index:2;
               font-size:${props => props.tableSettings && props.tableSettings.contentFontSize ? props.tableSettings.contentFontSize  :'14px'};
               color: ${props => props.tableSettings && props.tableSettings.contentColor ? props.tableSettings.contentColor  :'#000'};
           
       
          } 
          tr:nth-child(odd) td {background-color: #eee !important;}
          tfoot, tfoot th, tfoot td {
               position: -webkit-sticky;
               position: sticky;
               bottom: 0;
               background: #666;
               color: #fff;
               z-index:4;
               font-size: 16px;
               font-weight: 700; 
               background: ${props => props.tableSettings && props.tableSettings.headerBgColor ? props.tableSettings.headerBgColor  :'#fff'};
               color: ${props => props.tableSettings && props.tableSettings.headerColor ? props.tableSettings.headerColor  :'#000'};   
          }

   
 
`



