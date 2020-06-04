let reservationArr = []

class Reservation {
	constructor(name, phone, email, unique) {
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.unique = unique;
	}

}

//  Add listener to reservation button
$(".makeReservationButton").click(makeReservation);

function makeReservation() {

	const reservation = new Reservation($('#nameInput').val(), $('#phoneInput').val(), $('#nameEmail').val(), $('#unique').val());
	reservationArr.push();

}


