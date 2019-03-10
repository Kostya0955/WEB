import React from 'react';


class FootHeader extends React.Component{
render(){
	return(
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Студентам</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Расписание Занятий
      </a>
      <a class="dropdown-item">
        Восстановление
      </a>
      <hr class="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        Библиотека
      </a>
    </div>
  </div>
  
</div>
		);
}
}
export default FootHeader