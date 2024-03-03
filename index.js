class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        } else {
            console.log("Phone number not found.");
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log(`Now dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

class Observer {
    update(phoneNumber) {}
}

class PrintPhoneNumberObserver extends Observer {
    update(phoneNumber) {
        console.log(`Dialing ${phoneNumber}`);
    }
}

class CustomPrintObserver extends Observer {
    update(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}

// Testing the implementation
const telephone = new Telephone();

// Adding observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new CustomPrintObserver();
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Adding phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

// Dialing phone numbers
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2345678901");

// Removing phone number
telephone.removePhoneNumber("1234567890");

// Trying to dial a removed phone number
telephone.dialPhoneNumber("1234567890");
