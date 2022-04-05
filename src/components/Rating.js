const Rating = ({
	children
}) => {

	children = children < 0 ? 0 : children;
	const maxStars = 5;
	let rating = Math.round(children) < maxStars ? Math.round(children) : maxStars;
	const stars = '★'.repeat(rating).padEnd(maxStars, '☆');

	return (
		<div>
			{stars}
		</div>
	)
}

export default Rating
