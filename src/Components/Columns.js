import React from 'react';


class Columns extends React.Component{
render(){
	return(
	<footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-3 is-offset-2">
                       
                        <ul>
                            <li><a href="#">Приемная комиссия</a></li>
                            <li><a href="#">Институты</a></li>
                            <li><a href="#">Поступающим</a></li>
                          
                        </ul>
                    </div>
                    <div class="column is-3">
                        
                        <ul>
                            <li><a href="#">Сведения </a></li>
                            <li><a href="#">Структура Университета</a></li>
                            <li><a href="#">История</a></li>
                           
                            
                        </ul>
                    </div>
                    <div class="column is-4">
                        
                        <ul>
                       		<li><a href="#">Сотрудникам</a></li>
                            <li><a href="#">Ученый совет</a></li>
                            <li><a href="#">Выпускникам</a></li>
                            
                  
                       </ul>
                    </div>
                </div>
                
            </div>

        </footer>
		);
}
}
export default Columns