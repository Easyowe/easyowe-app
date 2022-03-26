import { Box, Button, Group, Text, Grid, Title, useMantineColorScheme } from '@mantine/core';
import { useForm, formList } from '@mantine/form';
import React from 'react'

type Props = {}

const ActivityLog = (props: Props) => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const form = useForm({
        initialValues: {
            activityLog: formList([{
                name: 'Jon Doe',
                date: 'NO RECORDED ACTIVITY',
                value: 24.31
            }]),
        },
    });

    const fields = form.values.activityLog.map((_, index) => (
        <Group key={index} mt='xs' sx={(theme) => ({
            borderColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[2],
            borderStyle: 'solid',
            borderRadius: 15
        })}
            px={40}
            pb={25}
            pt={15}
        >
            <Grid justify="space-between" align="center" grow style={{ flex: 1 }}>
                <Grid.Col span={2}>
                    <Text size='lg' weight={500} align='justify'>
                        ${form.values.activityLog[index].value}
                    </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text size='xs' weight={500} mb={2} align='justify'>
                        {form.values.activityLog[index].date}
                    </Text>
                    <Title order={3} align='justify'>
                        {form.values.activityLog[index].name}
                    </Title>

                </Grid.Col>
                <Grid.Col span={1}>
                    <Button
                        style={{
                            marginTop: '10px',
                            height: '32px',
                            width: '92px',
                            backgroundColor: '#5E4AE3'
                        }}
                        variant='filled'
                        radius={30}
                        onClick={() => console.log('show some details')}
                    >
                        View
                    </Button>
                </Grid.Col>
            </Grid>
        </Group>
    ));

    return (
        <Box sx={{ maxWidth: 500 }} mx='auto'>
            {fields.length > 0 ? (
                <Group mb='xs'>
                    <Text weight={500} size='sm' pl={40} sx={{ flex: 1 }}>
                        Value
                    </Text>
                    <Text weight={500} size='sm' pr={72}>
                        Date and Name
                    </Text>
                    <Text weight={500} size='sm' pr={40}>
                        View Button
                    </Text>
                </Group>
            ) : (
                <Text color='dimmed' align='center'>
                    No recent activity...
                </Text>
            )}

            {fields}

        </Box>
    );
}

export default ActivityLog