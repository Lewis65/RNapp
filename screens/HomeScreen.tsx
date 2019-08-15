import React from 'react'
import { Button, StatusBar, Text } from "react-native";
import { connect } from 'react-redux'
import Container from './Container'

const HomeScreen = (props) => {
    return (
    <Container>
      <StatusBar hidden={true}/>
      <Text>Welcome home!</Text>
      <Text>You have pressed butan {props.count.value} times. Well done.</Text>
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

  const mapStateToProps = (state) => {
    const { count } = state
    return { count }
}

export default connect(mapStateToProps)(HomeScreen)