const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
// Events
button.forEach((button) => {
  button.addEventListener('click', (event_obj_anyName) => {
    console.log(event_obj_anyName);
    console.log(event_obj_anyName.target); // Tells from which element its comming from
    if (event_obj_anyName.target.id === 'grey') {
      body.style.backgroundColor = event_obj_anyName.target.id;
    }
    if (event_obj_anyName.target.id === 'white') {
      body.style.backgroundColor = event_obj_anyName.target.id;
    }
    if (event_obj_anyName.target.id === 'blue') {
      body.style.backgroundColor = event_obj_anyName.target.id;
    }
    if (event_obj_anyName.target.id === 'yellow') {
      body.style.backgroundColor = event_obj_anyName.target.id;
    }
  });
});
