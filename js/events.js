const form = document.getElementById('form');
const button = document.getElementById('button');

const name = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('comment');


// Para validar
const formIsValid = {
    name:false,
    email:false,
    comment:false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
   
})

name.addEventListener('change', (e) => {
   if(e.target.value.trim().length > 0) {
        formIsValid.name = true;
   }
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) {
         formIsValid.email = true;
    }
 })

 comment.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) {
         formIsValid.comment = true;
    }
 })

 const formValues = Object.values(formIsValid);
    console.log(formValues);
    const valid = formValues.findIndex(value => value == false)
    
    if(valid == -1) {
    
        button.removeAttribute('disabled'); 
        form.submit();
        console.log('Hola') 
       
    } 


const validateForm = () => {
    const formValues = Object.values(formIsValid);
   
    const valid = formValues.findIndex(value => value == false)
    
    if(valid == -1) {
    
        button.removeAttribute('disabled'); 
        form.submit();
       
       
    } else alert('Formulario inválido, por favor rellene los campos');

}













