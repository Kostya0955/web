import React from 'react';
import ReactDOM from 'react-dom';
import FootHeader from './Components/Header/foot-header.js';
import Footer from './Components/Footer/footer.js';
import Carousel from './Components/Carousel.js'

class App extends React.Component{
	render(){
		return(
<div>
<section className="hero is-primary">
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
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
     <FootHeader/>
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
	 <div className="box cta">
        <p class="has-text-centered">
          <a> LINK 1  </a>
           <a> LINK 2  </a>
             <a> LINK 2  </a>
               <a> LINK 2  </a>
        </p>

    </div> 

<Footer/>

</div>

		);
	}
}
ReactDOM.render(<App/>, document.getElementById('root'));

