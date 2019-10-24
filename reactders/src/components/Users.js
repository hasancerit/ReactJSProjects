import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Kisi from './Kisi';


class Users extends Component {

    render() {
        let {users} = this.props;
        return (
            <div>
            {
                users.map(user => {
                    return(
                        <Kisi key={user.key} name={user.name} surname={user.surname} aciklama={user.aciklama}></Kisi>
                    )
                })
            }
            </div>
        )
    }
}

Users.propTypes = {
    users : PropTypes.array
}

export default Users;
