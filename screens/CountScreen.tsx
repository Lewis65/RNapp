import React from 'react'
import { Button, StatusBar, Text } from "react-native";
import { connect } from 'react-redux'

import Container from './Container'

class CountScreen extends React.Component<
    {
        count: {
            value: number
        }
    }, {}> {

    render() {
        return(
        <Container>
            <StatusBar hidden={true}/>
            <Text>You clicked {this.props.count.value} times but it doesn't change. How not-fun.</Text>
            <Button
            title="Aww"
            onPress = {() => {}}
            />
        </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { count } = state
    return { count }
}

export default connect(mapStateToProps)(CountScreen)