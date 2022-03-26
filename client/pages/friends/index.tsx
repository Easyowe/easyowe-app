import { ActivityCard } from '@components/ActivityCard';
import React from 'react'
import { Box, Container } from '@mantine/core';
import SearchBar from '@components/FriendsPage/SearchBar';


const index = () => {
    

    const activityLog = [
        {
            name: 'Jon Doe',
            date: 'NO RECORDED ACTIVITY',
            value: 24.31,
        },
        {
            name: 'Jon Doe',
            date: 'NO RECORDED ACTIVITY',
            value: 24.31,
        },
        {
            name: 'Jon Doe',
            date: 'NO RECORDED ACTIVITY',
            value: 24.31,
        }, {
            name: 'Jon Doe',
            date: 'NO RECORDED ACTIVITY',
            value: 24.31,
        }

    ]

    // const renderActCard = () => (

    // )

    const fields = activityLog.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
    ))
    return (
        <>
        <Container>

            <SearchBar />
            <Box mx="auto">{fields}</Box>
            </Container>
        </>
    )
}


export default index