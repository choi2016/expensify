class VisToggle extends React.Component{
	constructor(props) {
		super(props);
		this.visTog = this.visTog.bind(this);
		this.state = {
			vis: false
		};
	}
	
	visTog() {
		this.setState((prevState) => {
			return {
				vis: prevState.vis = !prevState.vis
			};
		})
	}

	render() {
		return (
			<div>
				<h1>VISIBILITY TITLE</h1>
				<button onClick={this.visTog}>
				{this.state.vis ? 'Hide detail' : 'Show detail'}
				</button>
				{this.state.vis && (
					<p>welcome to a new world!</p>
				)}
			</div>
		);
	}
}

ReactDOM.render(<VisToggle />, document.getElementById('app'))