import React, { Component } from 'react';
import { LoginWrapper, LoginBtn, RegisterBtn, ModalBtns, ModalWrapper, ErrorMessage } from './style'
import CustomInput from '../../components/CustomInput'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { loginUser, registerUser } from '../../actions/auth'
import Modal from '../../components/Modal'
import Loader from 'react-loader-spinner'
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameErr: false,
            passwordErr: false,
            registerModal: false,
            newPass: '',
            name: ''
        }
    }
    componentDidMount(){
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.auth.isLoading !== this.props.auth.isLoading &&
            this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }

    }
    logIn = () => {
        const { username, password } = this.state
        if (this.errFree()) {
            const data = { username: username, password: password }
            this.props.loginUser(data)
        }

    }
    redisterUser = () => {
        const { name, newPass } = this.state
        if (name.length > 0 || newPass.length >= 7) {
            const data = { name: name, password: newPass }
            this.props.registerUser(data)
        }
    }
    onChange = e => {

        this.setState({ [e.target.name]: e.target.value }, () => {
            const { username, password } = this.state
            if (username.length) {
                this.setState({ usernameErr: null })

            } else {
                this.setState({ usernameErr: 'incorrect username' })
            }

            if (password.length && password.length >= 7) {
                this.setState({ passwordErr: null })
            } else {

                this.setState({ passwordErr: 'password should be greater than 7' })
            }
        })

    }
    errFree = () => {
        const { usernameErr, password } = this.state
        if (password.length < 8 || usernameErr !== null) {
            return false
        } else {
            return true
        }
    }
    render() {

        const { username, password, usernameErr, passwordErr, registerModal, isLoading, newPass, name } = this.state
        const { auth } = this.props
        const registrationError = newPass.length && newPass.length < 8 ? 'password should be greater than 7' : ''
        return (
            <LoginWrapper>
                <div className='inner-wrpper'>
                    {auth.error && <ErrorMessage style={{ alignSelf: 'center' }}>{auth.message}</ErrorMessage>}
                    <CustomInput placeholder={'Username'} type='username' error={usernameErr} name='username' value={username} onChange={this.onChange} />
                    <CustomInput placeholder={'Password'} type={'password'} error={passwordErr} name='password' label='Password' value={password} onChange={this.onChange} />
                    <LoginBtn active={!this.errFree()} onClick={() => this.logIn()}>Login</LoginBtn>
                    <RegisterBtn onClick={() => this.setState({ registerModal: true })}>Register</RegisterBtn>
                    {registerModal &&
                        <Modal>
                            <ModalWrapper>
                                {isLoading &&
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <Loader
                                            type="Puff"
                                            color="red"
                                            height={20}
                                            width={20} />
                                    </div>
                                }
                                {auth.registerError && <ErrorMessage style={{ alignSelf: 'center' }}>{auth.message}</ErrorMessage>}
                                {auth.registerSuccess && <ErrorMessage style={{ alignSelf: 'center' }}>{auth.message+', please login.'}</ErrorMessage>}
                                <CustomInput placeholder='Name' name='name' label='Name' value={name} onChange={this.onChange} />
                                <CustomInput placeholder='Password' name='newPass' error={registrationError} label='Password' value={newPass} onChange={this.onChange} />
                                <ModalBtns active={!this.errFree() || isLoading} onClick={() => this.redisterUser()}>Register</ModalBtns>
                                <ModalBtns style={{ marginTop: 8 }} onClick={() => this.setState({ registerModal: false })}>Cancel</ModalBtns>
                            </ModalWrapper>

                        </Modal>
                    }
                </div>


            </LoginWrapper>
        )
    }
}
const makeMapStateToProps = () => {

    const mapStateToProps = (state) => {
        return {
            auth: state.auth

        }
    }

    return mapStateToProps
}

const mapDispatchToProps = dispatch => ({
    loginUser: (data) => dispatch(loginUser(data)),
    registerUser: (data) => dispatch(registerUser(data)),
})

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(Login));