import * as React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { RouteComponentProps, withRouter } from 'react-router'

import { MatchProfile } from '@tinder/components'
import { UserQuery } from '../../../../GraphQl'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

export const C: React.FC<RouteComponentProps<{ userId: string }>> = ({
    match: { params }
}) => {
    const { data, loading } = useQuery(UserQuery, {
        variables: { id: params.userId }
    })

    if (loading) return <p>loading</p>

    const {
        user: { username, age, job, education, description }
    } = data

    return (
        <MatchProfile
            url={url}
            name={username}
            age={age}
            job={job}
            education={education}
            description={description}
        />
    )
}

export const Profile = withRouter(C)
