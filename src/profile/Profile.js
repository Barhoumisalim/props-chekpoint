import React from 'react'
import PropTypes from 'prop-types'

const Profile = (props) => {
   
    return (
        <div>
            {props.z}
            <h1> {props.fullname}</h1>
            <h1> {props.bio}</h1>
            <h1> {props.profession}</h1>
            {props.children}
        </div>
    )
}
Profile.defaultProps= {
    fullname :'Mohammed',
    bio:'mmm',
    profession:'Student'
}
Profile.prototype={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}

export default Profile