const  Random = ({
	min,
	max
}) => {

	const randomValue =  Math.floor(min + (Math.random() * (max - min)));

	return (
		<div className="container">
			<p>
				Random value between {min} and {max} => {randomValue}
			</p>
		</div>
	)
}

export default Random
