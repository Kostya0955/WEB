 import React from 'react';

class Articles extends React.Component{
render(){
    return(
    <footer class="footer">
            <div class="container">
             <h1> ЗАГОЛОВОК </h1>
                <div class="columns">
                    <div class="column is-3 is-offset-1">
                        <a>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </a>
                        <h2><strong>News</strong></h2>
                    </div>
                    <div class="column is-3">
                        <a>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </a>
                        <h2><strong>News</strong></h2>
                    </div>
                    <div class="column is-3">
                        <a>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </a>
                        <h2><strong>News</strong></h2>
                    </div>
                    <div class="column is-3">
                        <a>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </a>
                        <h2><strong>News</strong></h2>
                    </div>
                </div>
            </div>
        </footer>
        );
}
}
export default Articles