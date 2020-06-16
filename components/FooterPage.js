import React, { Component } from 'react'

import {
    Footer,
    FooterTab,
    Button,
    Text
} from 'native-base'

export class FooterPage extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button hasText vertical>                        
                        <Text>Home</Text>
                    </Button>
                    <Button hasText vertical>                        
                        <Text>Refresh</Text>
                    </Button>
                    <Button hasText vertical>                        
                        <Text>About</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

export default FooterPage
