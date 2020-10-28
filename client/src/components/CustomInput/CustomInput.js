import React, { Component } from 'react';
import {Wrapper, Error} from './style'

class CustomInput extends Component {

    render(){     
        const { label, name, onChange, value, error, type, placeholder } = this.props
        const inputType = type ? type:'text'
        return(
            <div>
            <Wrapper>
                    <input 
                        placeholder={placeholder} 
                        autocomplete="off" 
                        name={name} 
                        value={value} 
                        onChange={onChange} 
                        id="field" 
                        type={inputType} 
                        required/>    
            </Wrapper>
            { error && <Error>{error}</Error>}
            </div>
        )
    }
}

export default CustomInput