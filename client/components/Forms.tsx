import { NativeSelect, TextInput, useMantineColorScheme } from '@mantine/core';
import { useForm } from '@mantine/hooks'
import React, { useState } from 'react'

type Props = {}

const Forms = (props: Props) => {
    const [text, setText] = useState('');
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const form = useForm({
        initialValues: {
            search: '',
            sort: 'Latest',
        }
    });
    return (
        <form style={{ textAlign: 'center' }}>
            <TextInput
                placeholder='Search'
                onChange={(e) => setText(e.target.value)}
                style={{
                    margin: '50px 100px 0px auto', width: '300px', display: 'inline-block'
                }}
                radius='lg'
                variant={dark ? 'default' : 'filled'}
            />
            <NativeSelect style={{
                margin: '20px auto 20px auto',
                width: '100px',
                height: '30px',
                display: 'inline-block',
                borderRadius: '30px',
                color: dark ? 'lightgrey' : 'black', backgroundColor: dark ? '#62626A' : 'white'
            }}
                data={['Latest', 'Highest', 'Lowest']}
                placeholder='Latest'
                variant={dark ? 'default' : 'filled'}
                required
                onChange={(e) => console.log(e.target.value)}
            />



        </form>
    )
}

export default Forms