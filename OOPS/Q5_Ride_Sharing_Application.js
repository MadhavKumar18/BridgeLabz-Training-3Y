class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance, driver) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
        this.driver = driver;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (!Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        const farePerKm = 12;
        return this.distance * farePerKm;
    }
}

const driver = new Driver("Raj", 4.8, "Swift Dzire", "UP16AB1234");

try {
    const trip = new Trip("Mathura", "Agra", 60, driver);
    console.log(`Driver: ${trip.driver.name}, Rating: ${trip.driver.rating}`);
    console.log(`Vehicle: ${trip.driver.vehicle} (${trip.driver.vehicleNumber})`);
    console.log(`Route: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log(`Fare: ₹${trip.calculateFare()}`);
} catch (error) {
    console.log(`Trip error: ${error.message}`);
}

try {
    const invalidTrip = new Trip("Mathura", "Agra", -5, driver);
    console.log(`Fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
    console.log(`Trip error: ${error.message}`);
}
