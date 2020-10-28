import React, { Component } from 'react';
import {Wrapper} from './style'

class Breadcrumb extends Component {

    render(){
        const { breadcrumbs } = this.props

        return(
            <Wrapper>
                {breadcrumbs}
            </Wrapper>
        )
    }
}

export default Breadcrumb