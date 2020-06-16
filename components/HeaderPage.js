import React, { Component } from 'react'
import {
    Header,
    Left,
    Body,
    Title,
    Subtitle,
    Right,
    Button, 
    Text
} from 'native-base'

export class HeaderPage extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button hasText transparent>
                        <Text>Home</Text>
                    </Button>
                </Left>
                <Body>
                    <Title>Covid - 19</Title>
                    <Subtitle>news</Subtitle>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default HeaderPage
