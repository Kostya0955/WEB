import React from "react";


export default class Carousel extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			'image': '',
			'text': ''
		}
		this.interval = null
		this.index = 0
		this.showSlide = this.showSlide.bind(this)

	}

	showSlide () {
		this.setState(this.props.slides[this.index++])
		if (this.index === this.props.slides.length) {
			this.index = 0
		}
	}

	componentDidMount () {
		this.interval = setInterval(this.showSlide, 3e3)
		this.showSlide()
	}

	componentWillUnmount () {
		clearInterval(this.interval)
	}

	render () {
		return (
			
			<div className='columns'>
				<div className='column is-4'>
					<figure className='image is-square'>
						<img src={this.state.image} />
					</figure>
				</div>
				<div className='column is-8'>
					<h1 className="title"> Новость 1 </h1>
					<p>{this.state.text}</p>
				</div>
			</div>
		)
	}
}
