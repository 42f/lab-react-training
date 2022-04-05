import Rating from "./Rating"

const DriverCard = ({
	name,
	rating,
	img,
	car,
}) => {

	return (
		<div className="driver-card">
			<div className="img-cropper">
				<img src={img} alt={name} />
			</div>
			<div className="driver-infos">
				<h2>{name}</h2>
				<p><Rating>{rating}</Rating></p>
				<p><span>{car.model}</span><span>{car.licensePlate}</span> </p>
			</div>
		</div>
	)
}

export default DriverCard
