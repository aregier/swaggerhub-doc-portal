import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import OrgConfig from './organization_config.json';
import ApiConfig from './api_config.json';
import Sidebar from './Sidebar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        organizationConfig: null,
        definitionList: null,
        definitionLink: "https://petstore.swagger.io/v2/swagger.json"
      }
      this.getOrganizationApis = this.getOrganizationApis.bind(this)
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  componentWillMount() {
    this.setState({
      organizationConfig: OrgConfig.orgData
    })
    this.updateDefinitionLink(ApiConfig.apis.filter(a => a.default)[0].uri);
  }
 
  getOrganizationApis(organization) {
    // Note: Leave method to allow for dynamic retrieval at runtime from an org in platforms other than swaggerhub (e.g. Azure API Management)
    // return static-defined apis from config
    this.setState({
      definitionList: ApiConfig.apis,
    });
  }

  updateDefinitionLink(newLink) {
    this.setState({
      definitionLink: newLink
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          organizationConfig={this.state.organizationConfig}
          definitionList={this.state.definitionList}
          updateDefinitionLink={this.updateDefinitionLink}
          getOrganizationApis={this.getOrganizationApis}
        />
        
        <div id="api-data">
          <SwaggerUI 
            url={this.state.definitionLink}
            docExpansion="list"
          />
        </div>
      </div>
    );
  }
}

export default App;
