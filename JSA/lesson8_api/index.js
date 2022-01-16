let form_input = document.getElementById("form-input");

form_input.onsubmit = (e) => {
  e.preventDefault();

  let city_input = form_input.city.value;

  console.log(city_input);

  form_input.city.value = "";
};
