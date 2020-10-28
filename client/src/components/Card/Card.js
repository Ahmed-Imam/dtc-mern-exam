import React, { Component } from 'react';
import {Wrapper, CardHeader, CardBody, CardFooter} from './style'
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Card extends Component {

    render(){
        const { title, body, delPost } = this.props

        return(
            <Wrapper>
                <CardHeader>
                   <div className='image'></div>
                 <span>{title}</span>
                </CardHeader>
                <CardBody>
                    {body}
                </CardBody>
                <CardFooter>
                   <FontAwesomeIcon onClick={delPost} size = 'lg' icon={faTrashAlt} />
                </CardFooter>
            </Wrapper>
        )
    }
}

export default Card