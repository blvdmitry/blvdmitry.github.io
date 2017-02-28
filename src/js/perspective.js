class Perspective {
	constructor(el) {
		this._state = {
			xHalf: null,
			yHalf: null,
			xCenter: null,
			yCenter: null
		};

		this._elems = {
			parent: el,
			move: el.querySelectorAll('.js-perspective__move')
		};

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.setStyles = this.setStyles.bind(this);

		this.init.call(this);
	}

	setState(nextState) {
		this._state = {
			...this._state,
			...nextState
		};
	}

	setStyles(x, y) {
		let { parent, move } = this._elems;

		parent.style.transform = `rotateY(${x / 90}deg) rotateX(${-y / 90}deg)`;
		move.forEach(el => {
			el.style.transform = `translateX(${-x / 350}%) translateY(${-y / 350}%)`;
		});
	}

	mouseMoveHandler(e) {
		let { xHalf, xStart, yHalf, yStart } = this._state;
		let x = e.clientX - (xHalf + xStart);
		let y = e.clientY - (yHalf + yStart);

		this.setStyles(x, y);
	}

	init() {
		let xHalf = window.innerWidth / 2;
		let yHalf = window.innerHeight / 2;

		this.setState({
			xHalf, yHalf,
			xStart: 0,
			yStart: 0
		});

		window.addEventListener('mousemove', this.mouseMoveHandler);
	}
}

export default Perspective;