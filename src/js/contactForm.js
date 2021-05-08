export function contactForm(){

  const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

if (form !== null) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

  });

   function checkInputs(){
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value;
    let text;
    if(fullNameValue === ''){
      text = "Please Enter your fullName";
      errorMessage.innerHTML = text;
      return false;
    }
    if(emailValue === ''){
      text = "Email cannot be blank";
      errorMessage.innerHTML = text;
      return false;
    } else if (!isEmail(emailValue)) {
      text = "Not a valid email";
      errorMessage.innerHTML = text;
      return false;
   }
   if(messageValue === 'free pizza slices'){
    text = "Seriously no Free Slices!";
    errorMessage.innerHTML = text;
    return false;
  }
  text = "Thank you! your message has been sent";
  successMessage.innerHTML = text;

  form.reset();
  errorMessage.innerHTML = '';

  return true;

   }

   function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}


}