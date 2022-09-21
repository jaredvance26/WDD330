const button = document.querySelector('button.calculate');
const calculateFizzBuzz = () => {
  const number = document.querySelector("input.number").value;
  const container = document.querySelector("div.fizzbuzz");

  for (let num = 0; num < number; num ++) {
    if (num % 3 === 0 && num % 5 === 0) {
      const fizzbuzz = document.createElement("p");
      fizzbuzz.textContent = `${num} FizzBuzz`;

      container.appendChild(fizzbuzz);
    }
    else if (num % 3 === 0) {
      const fizz = document.createElement("p");
      fizz.textContent = `${num} Fizz`;

      container.appendChild(fizz);
    }

    else if (num % 5 === 0) {
      const buzz = document.createElement("p");
    	buzz.textContent =`${num} Buzz`;

      container.appendChild(buzz);
    }
  }
};

button.onclick = () => {
	document.querySelector("div.fizzbuzz").innerHTML = '';
	calculateFizzBuzz();
	console.log( document.querySelector("input.number").value)
};
