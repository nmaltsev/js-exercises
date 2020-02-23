
export class AbstractBuilder {
  /**
   * API for constructing JSON objects
   */
	constructor(parent, data) {
		this.parent = parent;
		this.data = data;
	}

	ok() {
		if (this.compile) this.compile(this.data);
		return this.parent;
	}

	build() {
		return this.data;
	}
}

export class FlightOrder extends AbstractBuilder {

	constructor (orderId) {
		super(null, {
			"data": {
		        "type": "flight-order",
		        "id": orderId,
			}
		});
	}

	forOffer(offerId) {
		return new Offer(this,
			(offer) => {
				if (!Array.isArray(this.data.data.offers)) this.data.data.offers = [];
				this.data.data.offers.push(offer);
			},
			offerId);
	}
}

export class Offer extends AbstractBuilder {

	constructor(parent, reducer, offerId) {
		super(parent, {
			id: offerId,
		});
		this.compile = reducer;
	}

	seat(travelerId,  seatName) {
		return new Seat(this,
			(seat) => {
				if (!Array.isArray(this.data.travelers)) this.data.travelers = [];
				this.data.travelers.push(seat);
			},
			travelerId,
			seatName
		).ok();
	}
}

export class Seat extends AbstractBuilder {

	constructor(parent, reducer, travelerId, seatName) {
		super(parent, {
			traveler: travelerId,
			seatName: seatName
		});
		this.compile = reducer;
	}
}

export function forOrder(orderId) {
	return new FlightOrder(orderId);
}

 
