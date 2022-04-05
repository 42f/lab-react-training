const IdCard = ({
	lastName,
	firstName,
	gender,
	height,
	birth,
	picture
}) => {

	return (
		<div className="container">
			<img src={picture} alt={firstName} />
			<div className="IdCardInfos">
				<p><b>Fist Name:</b> {firstName}</p>
				<p><b>Last Name:</b> {lastName}</p>
				<p><b>Gender:</b> {gender}</p>
				<p><b>Height:</b> {height / 100} m</p>
				<p><b>Birth:</b>  {birth.toDateString()}</p>
			</div>
		</div>
	)
}

export default IdCard
