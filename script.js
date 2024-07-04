const binInputField = document.getElementById("binary");
const decInputField = document.getElementById("decimal");
let arrValue, Value;

// Event listener for the binary input field.

binInputField.addEventListener("keyup", function () {
  document.getElementById("binary_warning").innerHTML = "";
  Value = binInputField.value;
  arrValue = Value.split("").map(Number);
  if (!containsOnlyZerosAndOnes(arrValue)) {
    this.value = "";
    document.getElementById("binary_warning").innerHTML =
      "Invalid input. <br />Please enter only binary numbers (0s and 1s).";
    return;
  }
  conver_to_decimal(arrValue);
});

// Event listener for the decimal input field.

decInputField.addEventListener("input", () => {
  conver_to_binary();
});

// Function to convert decimal to binary and display it in the text fields.

function conver_to_binary() {
  let decimal = parseInt(decInputField.value);
  if (isNaN(decimal)) {
    document.getElementById("decimal_warning").innerHTML =
      "Empty or invalid input !!";
    return;
  }
  let binary = (decimal >>> 0).toString(2);
  decInputField.value = decimal;
  binInputField.value = binary;
  document.getElementById("decimal_warning").innerHTML = "";
  document.getElementById("binary_warning").innerHTML = "";
}

// Function to convert binary to decimal and display it in the text fields.

function conver_to_decimal(x) {
  let binary = x.join("");
  if (!/^[01]+$/.test(binary)) {
    document.getElementById("binary_warning").innerHTML = "Empty input.";
    return;
  }
  let decimal = parseInt(binary, 2);
  decInputField.value = decimal;
  binInputField.value = binary;
  document.getElementById("decimal_warning").innerHTML = "";
}

// Function to validate if all elements in the array are zeros or ones.
function containsOnlyZerosAndOnes(arr) {
  return arr.every((element) => element === 0 || element === 1);
}
