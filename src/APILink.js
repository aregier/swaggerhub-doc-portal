
import React from 'react';

const APILink = props => {
    // TODO: Get name of api from inside the openapi documentation itself
    // let name = props.apiLinkData.name
    let name = "test"
    let apiLink = props.apiLinkData.uri

    function handleClick() {
      props.updateDefinitionLink(apiLink)
    }

  return (  
    <div className="api-link" onClick={() => handleClick()}>
      {name}
    </div>
  )
}

export default APILink;