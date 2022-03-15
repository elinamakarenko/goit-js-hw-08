import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
initForm();

form.addEventListener('submit', event=>{
    event.preventDefault();
   const formData = new FormData(form);
   formData.forEach((key, value) => 
       console.log(`${value}-${key}`)
   );
   localStorage.removeItem('feedback-form-state');
  form.elements.email.value = "";
  form.elements.message.value = "";
});

form.addEventListener('input', throttle ((event)=>{
let parsedFilters = localStorage.getItem('feedback-form-state');
parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};
console.log(parsedFilters);
parsedFilters[event.target.name]=event.target.value;
if(parsedFilters){
    localStorage.setItem('feedback-form-state', JSON.stringify(parsedFilters));
}
}, 2000)
)

function initForm() {
    let parsedFilters = localStorage.getItem('feedback-form-state');
    if (parsedFilters) {
        parsedFilters = JSON.parse(parsedFilters);
        Object.entries(parsedFilters).forEach(
            ([name, value]) => (form.elements[name].value = value),
        );
    }
 
   
}