# Telephone Package

The Telephone package is a simple implementation of a telephone system in JavaScript. It allows users to add phone numbers, remove phone numbers, and dial phone numbers. Additionally, it incorporates the observer pattern to notify observers whenever a phone number is dialed.

## Features

- Add phone numbers
- Remove phone numbers
- Dial phone numbers
- Observer pattern implementation

## Usage

### Installation

You can simply clone the repository or download the files and include them in your project.

### Usage Example

```javascript
// Import the Telephone package
const { Telephone, PrintPhoneNumberObserver, CustomPrintObserver } = require('./telephone');

// Create a new telephone instance
const telephone = new Telephone();

// Create observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new CustomPrintObserver();

// Add observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Add phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

// Dial phone numbers
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2345678901");

// Remove a phone number
telephone.removePhoneNumber("1234567890");

// Try to dial a removed phone number
telephone.dialPhoneNumber("1234567890");
```

### Classes

#### Telephone

- `addPhoneNumber(phoneNumber)`: Adds a new phone number to the list of available phone numbers.
- `removePhoneNumber(phoneNumber)`: Removes a phone number from the list of available phone numbers.
- `dialPhoneNumber(phoneNumber)`: Dials the provided phone number if it exists in the list of available phone numbers.
- `addObserver(observer)`: Adds an observer to the list of observers.
- `removeObserver(observer)`: Removes an observer from the list of observers.
- `notifyObservers(phoneNumber)`: Notifies all observers when a phone number is dialed.

#### Observer

- `update(phoneNumber)`: Abstract method to be implemented by concrete observers.

#### PrintPhoneNumberObserver

- Prints the phone number being dialed.

#### CustomPrintObserver

- Prints a custom message when a phone number is dialed.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
