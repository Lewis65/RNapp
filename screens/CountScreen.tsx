import React from 'react'
import { Button, StatusBar, Text } from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCount } from '../redux/actions/setCount'

import Container from './Container'

class CountScreen extends React.Component<
    {
        count: {
            value: number
        },
        setCount: Function
    }, {}> {

    render() {
        return(
        <Container>
            <StatusBar hidden={true}/>
            <Text>You clicked {this.props.count.value} times and that important info is available between screens. Neat.</Text>
            <Button
            title="One more time"
            onPress = {() => {this.props.setCount(this.props.count.value + 1)}}
            />
        </Container>
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setCount
    }, dispatch)
)

const mapStateToProps = (state) => {
    const { count } = state
    return { count }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountScreen)