import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarWrapper, Button } from '../../style'


class Sidebar extends React.PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                sideBarList:[
                    {name : 'Home', icon:'faHome', link:'home'},
                    {name : 'Tables', icon:'faHome', link:'tables'},
                    {name : 'Messages', icon:'faHome', link:'messages'}
                ]
            }
        }
    render() {
        const { sideBarList } = this.state
        const { showSideBar } = this.props
        return (
            <SidebarWrapper showSideBar={showSideBar} className='SideBar'>
               {sideBarList.map((item,i)=>{
                   return(
                       <NavLink to={`/${item.link}`} activeClassName="selected">
                          <Button>{item.name}</Button>
                       </NavLink>
                
                   )
               })}
            </SidebarWrapper>
        )
    }
}


export default (Sidebar);