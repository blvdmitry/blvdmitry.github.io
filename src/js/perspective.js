class Perspective {
	constructor(el, options) {
		this._options = options;

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
		this.mouseOutHandler = this.mouseOutHandler.bind(this);
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

		parent.style.transform = `rotateY(${x / 60}deg) rotateX(${-y / 60}deg)`;
		move.forEach(el => {
			el.style.transform = `translateX(${-x / 200}%) translateY(${-y / 200}%)`;
		});
	}

	mouseMoveHandler(e) {
		let { xHalf, xStart, yHalf, yStart } = this._state;
		let x = e.clientX - (xHalf + xStart);
		let y = e.clientY - (yHalf + yStart);

		this.setStyles(x, y);
	}

	mouseOutHandler() {
		// this.setStyles(0, 0);
	}

	init() {
		let elParent = this._elems.parent;
		let rect = elParent.getBoundingClientRect();
		let xHalf = rect.width / 2;
		let yHalf = rect.height / 2;

		this.setState({
			xHalf, yHalf,
			xStart: rect.left,
			yStart: rect.top
		});

		elParent.addEventListener('mousemove', this.mouseMoveHandler);
		elParent.addEventListener('mouseout', this.mouseOutHandler);
	}
}

export default Perspective;