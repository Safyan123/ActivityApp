import React, {Component} from 'react'
import NetInfo from "@react-native-community/netinfo";

export const NetworkContext = React.createContext()

export class NetworkProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      isInternetWorking: false
    }
  }

  componentDidMount(){
    this.handleNetwork = NetInfo.addEventListener(state => {
      this.handleConnectionChange(state)
    });
  }

  componentWillUnmount() {
    this.handleNetwork.remove();
  }

  handleConnectionChange = network => {
    console.log("Network type : ", network.type);
    console.log('Network : ', network.isConnected);
    this.setState({isInternetWorking: network.isConnected})
  }
  
  render(){
    const{
      props:{
        children,
      },
      state:{
        isInternetWorking,
      },
    } = this
    return (
      <NetworkContext.Provider value={{
        isInternetWorking
      }}>
        {children}
      </NetworkContext.Provider>
    )
  }
}