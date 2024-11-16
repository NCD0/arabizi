# Arabizi

Arabizi is a JavaScript library that converts Arabic text into Arabizi (a Latin-based transliteration of Arabic). It provides a simple and efficient way to represent Arabic characters using Latin letters and numbers.

## Features

- Converts Arabic characters to their corresponding Arabizi representations.
- Supports a wide range of Arabic characters and punctuation.
- Input validation to ensure proper usage.

## Installation

You can install the library using npm:

```bash
npm install arabizi
```

## Usage

Here’s a simple example of how to use the Arabizi library:

```js
const arabizi = require("arabizi");

const arabicText = "عربي";
const arabiziText = arabizi(arabicText);

console.log(arabiziText); // Output: 3rby
```

### Input Validation

The `arabizi` function performs the following validations:

- Input must be a string.
- Input cannot be blank.
- Input must contain at least one Arabic letter.

### Error Handling

If the input does not meet the validation criteria, the function will throw an error with a descriptive message.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

NCD0
