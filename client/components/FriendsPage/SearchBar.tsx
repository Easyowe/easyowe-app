import React from 'react'
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import {

    Grid,
} from '@mantine/core'
import classes from './SearchBar.module.css';


const SearchBar = () => {
    const form = useForm({
        initialValues: {
            search: '',
        },
    });

    return (
        <>
            <Grid justify="center"
                align="center"
                style={{
                    width: '60%',
                    margin:'auto'
                }}>
                <Grid.Col xs={2} md={2} lg={2}>
                    <Button
                        sx={(theme) => ({
                            padding: '0 2em',
                            backgroundColor: theme.colors.primary[5],
                        })}
                        variant="filled"
                        radius={999}
                        onClick={() => console.log('show some details')}
                    >
                        Back
                    </Button>
                </Grid.Col>
                <Grid.Col md={6} lg={10}>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            required
                            placeholder="Search"
                            {...form.getInputProps('search')}
                            className={classes.input_field}
                        //rightSection={}
                        />

                    </form>
                </Grid.Col>
            </Grid>



        </>
    )
}


export default SearchBar