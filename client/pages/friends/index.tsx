import { ActivityCard } from '@components/ActivityCard';
import React from 'react'
import { TextInput, Checkbox, Button, Group, Box, Grid, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import SearchBar from '@components/FriendsPage/SearchBar';

type Props = {};

const index = (props: Props) => {
    const form = useForm({
        initialValues: {
            search: '',
        },
    });

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