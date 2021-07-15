import React from 'react'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import Div from '../atoms/Div'


const ProfileDataInput = ({item}) => {
    return (
      
            <Div column borderBottom >
                    <H3>{item[item]}</H3>
                    <P>{item}</P>
            </Div>
    )
}


export default ProfileDataInput