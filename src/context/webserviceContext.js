import React, {Component} from 'react'
import { API_BASE_URL, ACTIVITIES_URL } from '../config/config';

export const WebserviceContext = React.createContext()

export class WebserviceProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      userObj: {},
      allActivities: [],
      isRequestInProcess: false,
    }
  }

  getAllActivities = () => {
    
    this.setState({isRequestInProcess: true})

    fetch(API_BASE_URL + ACTIVITIES_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('<-------- Activities Response --------->', responseJson);

      if (responseJson != undefined) {
        this.setState({allActivities: responseJson})
      }else {
        console.log(' No ');
      }
      this.setState({isRequestInProcess: false})
    })
    .catch((error) => {
      console.log(error);
      this.setState({isRequestInProcess: false})
    });
  }

  createActivityApi = async (activityobj) => {
    this.setState({isRequestInProcess: true})

    const response = await fetch(API_BASE_URL + ACTIVITIES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityobj)
    }).then((response) => response.json())
    
    this.setState({isRequestInProcess: false})

    if (response) {  
      return true
    }else{
      return false
    }

  }
  
  render(){
    const{
      props:{
        children,
      },
      state:{
        allActivities,
        isRequestInProcess,
      },
      getAllActivities,
      createActivityApi,
    } = this
    return (
      <WebserviceContext.Provider value={{
        allActivities,
        isRequestInProcess,
        getAllActivities,
        createActivityApi,
      }}>
        {children}
      </WebserviceContext.Provider>
    )
  }
}