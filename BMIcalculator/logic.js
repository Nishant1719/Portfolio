const form = document.querySelector('form')
// If we take values here outside the eventlistner it will take empty values.

form.addEventListener('submit',function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const msg = document.querySelector('#msg')
    if(height === " " || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid ${height}`;
    } else if(weight === " " || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid ${weight}`;
    } else {
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi <= 18.6 ){
            msg.innerHTML = "Under Weight"
        }
        else if (bmi > 18.6 && bmi <= 24.9 ){
            msg.innerHTML = "Normal Range"
        }
        else {
            msg.innerHTML = "Overweight"
        }
    }
 

})