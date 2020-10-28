import React from 'react';
import styled from 'styled-components'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { getLocalStorage } from '../../utils/localStorage'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { getUserInfo } from '../../actions/user'
import Table from '../../components/Table'
import Loader from 'react-loader-spinner'
const HEADER = [
    { name: '#', width: 50 },
    { name: 'Name', width: 300 },
    { name: 'Email', width: 150 },
    { name: 'phone', width: 150 },
    { name: 'Age', width: 100 },
]
class Home extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            fetching: false,
            newPostModal: false,
            title: null,
            body: null,
            addingPostLoader: false,
            currentPage: 1,
            pageSize: 10,
        }
    }
    componentDidMount() {
        if (getLocalStorage('isAuthenticated')) {
            this.props.getUserInfo(1, 10)
        }
    }

    componentDidUpdate(prevProps) {
        const { users } = this.props
        if (!getLocalStorage('isAuthenticated')) {
            this.props.history.push('/login')
        }
        if (prevProps.users.isLoading !== users.isLoading &&
            prevProps.users.data !== users.data) {
            this.setState({ data: [...this.state.data, ...users.data] })
        }
    }



    handleWaypointEnter = () => {

        const { users } = this.props
        if (Number(users.totalPages) !== Number(users.currentPage)) {
            this.props.getUserInfo(Number(users.currentPage) + 1, 10)
        }
    }

    renderTableContent = () => {
        const { data } = this.state

        let tabledata = []
        data && data.map((val, idx) => {

            tabledata.push(<tr key={idx}>
                <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                <td><span >{val.name}</span></td>
                <td><span >{val.email}</span></td>
                <td><span >{val.phone}</span></td>
                <td><span >{val.age}</span></td>

            </tr>)
        })
        return tabledata

    }
    render() {
        const { users } = this.props
        return (
            <div>
                <div style={{ marginLeft: 30, marginRight: 30 }}>

                    <Table
                        tableData={this.renderTableContent()}
                        hasTotal
                        handleWaypointEnter={() => this.handleWaypointEnter()}
                        headerContent={HEADER} />
                    {users.isLoading && <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                        <Loader
                            type="Puff"
                            color="red"
                            height={20}
                            width={20} />
                    </div>}
                </div>
            </div>

        )
    }
}


const makeMapStateToProps = () => {
    const mapStateToProps = (state) => {
        return {
            users: state.users
        }
    }
    return mapStateToProps
}
const mapDispatchToProps = dispatch => ({
    getUserInfo: (page, pageSize) => dispatch(getUserInfo(page, pageSize)),
})

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(Home));