import React from 'react';


class FootHeader extends React.Component{
render(){
	return(
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Other dropdown item
      </a>
      <hr class="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
  
</div>
		);
}
}
export default FootHeader