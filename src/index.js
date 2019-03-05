import React from 'react';
import ReactDOM from 'react-dom';
import FootHeader from './Components/Header/foot-header.js';
import Footer from './Components/Footer/footer.js';
import Carousel from './Components/Carousel.js';
import FooterNav from './Components/NavAboveFooter/FooterNav.js';
import Articles from './Components/Articles/Articles.js';



class App extends React.Component{
	render(){
		let i=0;
		return(
			
<div>
<section className="hero is-primary">

    <div className="container">
	    <div className="navbar-brand">
			<a>
		  		<img src="https://bulma.io/images/placeholders/128x128.png"/>
			</a>
			 <h1 className="title">
		        Факультет Международных образовательных программ МГТУ им. Н.Э.Баумана
		      </h1>
		</div>
    </div>

    

    <div className ="FootHeader">
    	<FootHeader/>     
    </div>


   
</section>

  <Carousel slides={[
	{
		'image': 'https://place-hold.it/500x500&text=slide1',
		'text': '1'
	},
	{
		'image': 'https://place-hold.it/500x500&text=slide2',
		'text': '2'
	}

  ]} />
	 
<Articles/>

<FooterNav/>

<Footer/>

</div>


		);
	}
}


ReactDOM.render(
	
		<App/>,
	 document.getElementById('root'));

