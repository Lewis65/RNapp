import React, { useState } from 'react'
import { Button, StatusBar, Text } from "react-native";
import Container from './Container'

const CountScreen = () => {

    const [count, setCount] = useState(0)

    return(
        <Container>
            <StatusBar hidden={true}/>
            <Text>You clicked {count} times. How fun.</Text>
            <Button
            title="Wheeee"
            onPress={() => setCount(count + 1)}
            />
        </Container>
    )
}

export default CountScreen