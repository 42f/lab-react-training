const BoxColor = ({
	r,
	g,
	b
}) => {

	const colorHexValue = '#' +
		r.toString(16).padStart(2, '0') +
		g.toString(16).padStart(2, '0') +
		b.toString(16).padStart(2, '0');

	const divStyle = {
		backgroundColor: colorHexValue
	};

	return (
		<div className="container">
			<div style={divStyle} className="boxColor">
				<p>rgb({r},{g},{b})</p>
				<p>{colorHexValue}</p>
			</div>
		</div >
	)
}

export default BoxColor
