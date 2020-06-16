import React, { Component } from 'react'
import { 
    Content,
    List,
    ListItem,
    Text,
    View,
    Left,
    Right
} from 'native-base';


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            dataList: null
        }
    }
    componentDidMount(){
        this.setState({isFetching: true});
        this.loadData()
    }
    loadData(){
        fetch("https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&q=covid", {
        	"method": "GET",
	        "headers": {
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
                "x-rapidapi-key": "28882bf552mshb9a5134d12260c0p11d26ajsn845085f6f0e0"
                }
            })
                .then(response => response.json())
                    .then(json => {
                        this.setState({dataList: json, isFetching: false})
                    })
    }
    
    render() {
        const { 
            dataList,
            isFetching
         } = this.state;
        
        return (
            <Content>
                {
                    isFetching && !dataList ?
                    <List>
                        <ListItem>
                            <Text>loading ..........</Text>
                        </ListItem>
                    </List>
                    :
                    <List>
                    {
                        dataList && dataList.articles.map((item, index)=> (
                            <ListItem key={index} itemDivider>
                                <Left>
                                    <Text>{item.title}</Text>
                                </Left>
                                <Right>
                                    <Text>{item.published_date}</Text>
                                </Right>                                
                            </ListItem>                            
                        ))
                    }
                    </List>
                }                
            </Content>
        )
    }
}

export default Home
