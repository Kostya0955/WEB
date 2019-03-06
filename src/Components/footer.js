import React from 'react';


class Footer extends React.Component{
render(){
	return(
	<footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-3 is-offset-2">
                        <h2><strong>О факультете</strong></h2>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Vestibulum errato isse</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                          
                        </ul>

                    </div>
  
                    <div class="column is-3">
                        <h2><strong>Контакты</strong></h2>
                        <ul>
                            <li><a href="#">Labore et dolore magna aliqua</a></li>
                            <li><a href="#">Kanban airis sum eschelor</a></li>
                            <li><a href="#">Modular modern free</a></li>
                            <li><a href="#">The king of clubs</a></li>
                            
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h2><strong>Мы в соц. сетях</strong></h2>
                        
                       		<a href="#"><i class="fab fa-vk"></i></a> 
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            
                    </div>
                </div>
                
            </div>

        </footer>
		);
}
}
export default Footer