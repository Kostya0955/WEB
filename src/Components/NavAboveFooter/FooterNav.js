import React from 'react';
import Columns from './Columns.js';

class FooterNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {show:false}
    this.onShow = this.onShow.bind(this);
  }

  onShow(){
    console.log('---', 'clicked')
      this.setState({
        show: !this.state.show
      })
  }
render(){
  const body = this.state.show &&  <Columns/>    
	return(
    <div className ="FooterNav">
<nav class="navbar" role="navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" onClick={this.onShow}>
      Docs
    </a>
  </div>
    <a class="navbar-item">
    Home
  </a>
  <a class="navbar-item">
    Home2
  </a>
</nav>	

 {body}
</div>

		)

}
}
export default FooterNav