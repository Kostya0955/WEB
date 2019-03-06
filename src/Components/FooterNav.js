import React from 'react';
import Columns from './Columns.js';
import Collapse from 'react-css-collapse';
import { CSSTransitionGroup } from 'react-transition-group'

class FooterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show:false}
    this.onShow = this.onShow.bind(this);
    this.state = {animatedClass: ''}
  }
  componentDidMount(){
  setTimeout(() => this.setState({
      animatedClass: 'animated'
    }), 0);
  }

  onShow() {
      this.setState({
        show: !this.state.show
      })
  }
  
render() {
  const body = this.state.show &&  <Columns/>    
	return(
    <div className ="FooterNav">
      <nav class="navbar" role="navigation">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" onClick={this.onShow}>
            <i class="fas fa-info"></i>
               Информация
          </a>
        </div>
        <a class="navbar-item">
         <i class="fas fa-question"></i>
           Что делать если?
        </a>
        <a class="navbar-item">
          <i class="fas fa-sitemap"></i>
            Карта сайта
        </a>
          


      </nav>	
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={500}>
          {body}
      </CSSTransitionGroup>

     
      
</div>

		)

}
}
export default FooterNav