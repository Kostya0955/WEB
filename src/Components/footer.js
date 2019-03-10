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
                            <li><a href="#">Обучающимся</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Общая информация</a></li>
                          
                        </ul>

                    </div>
  
                    <div class="column is-3">
                        <h2><strong>Контакты</strong></h2>
                        <ul>
                            <li><a href="#">Адрес</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Схема проезда</a></li>
                            <li><a href="#">Администрация</a></li>
                            
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