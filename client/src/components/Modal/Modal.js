import React, { Component } from 'react';
import {Wrapper, Content} from './style'

class Modal extends Component {

    render(){     
        const { onClose, children } = this.props
        return(
          <Wrapper onClick={onClose}>
              <Content>
                    {children}
              </Content>
          </Wrapper>
        )
    }
}

export default Modal