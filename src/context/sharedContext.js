import React, { Component } from 'react';
import {WebserviceContext} from './webserviceContext'
import {NetworkContext} from './networkContext'

export function withSharedContext(Component) {
  class ComponentWithContext extends Component {
    render() {
      return (
        <NetworkContext.Consumer>
          {network => <WebserviceContext.Consumer>
            {services => <Component {...this.props} servicesProvider={services} networkProvider={network} />}
          </WebserviceContext.Consumer>
          }
        </NetworkContext.Consumer>
      )
    }
  }
  return ComponentWithContext;
}