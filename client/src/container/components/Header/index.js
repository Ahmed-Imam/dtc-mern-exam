import React from 'react'
import { HeaderWrapper } from '../../style'
import {logout} from '../../../actions/auth'
import { connect } from 'react-redux'
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';
class Header extends React.PureComponent {

    logout = ()=>{
        this.props.history.push('/')
        this.props.logout()
    }
    render() {
        const { navClicked, isLoginPage } = this.props
        return (
            <HeaderWrapper>
                <div className="nav">
                {!isLoginPage && <FontAwesomeIcon onClick={navClicked} size = 'lg' icon={faBars} />}
                <span>Exam App @ReactJS</span>
                </div>
                <div className="log-out">
                {!isLoginPage && <FontAwesomeIcon onClick={this.logout} size = 'lg' icon={faSignOutAlt} />}
                </div>
            </HeaderWrapper>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    logout: (data) => dispatch(logout(data)),
    
})



export default withRouter(connect(null, mapDispatchToProps)(Header));
