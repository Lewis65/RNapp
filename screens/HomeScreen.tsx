import React from 'react'
import { Button, StatusBar, Text } from "react-native";
import Container from './Container'

const HomeScreen = (props) => {
    return (
    <Container>
      <StatusBar hidden={true}/>
      <Text>Welcome home</Text>
      <Button
        title="What time is it?"
        onPress={() => props.navigation.navigate("Time")}
      />
      <Button
        title="Press butan"
        onPress={() => props.navigation.navigate("Count")}
      />
    </Container>
    )
  }

  export default HomeScreen