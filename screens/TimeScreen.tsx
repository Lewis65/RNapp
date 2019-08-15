import React from 'react'
import { Button, StatusBar, Text } from "react-native";
import Container from './Container'

const TimeScreen = (props) => {
    return(
    <Container>
      <StatusBar hidden={true}/>
      <Text>The time is {Date.now()}</Text>
      <Button
        title="Ok great thanks"
        onPress={() => props.navigation.navigate("Home")}
      />
    </Container>
    )
  }

  export default TimeScreen