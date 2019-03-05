import React from 'react';


class FootHeader extends React.Component{
render(){
	return(
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
    
      Docs
    </a>
    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider"/>
      <div class="navbar-item">
        Version 0.7.4
      </div>
    </div>
  </div>
</nav>	
		);
}
}
export default FootHeader