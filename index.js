const isValidRel = (item) => {
  return item !== "" && item !== undefined;
}

const isValidAge = (item) => {
    const numericValue = parseInt(item);

    return isNaN(numericValue) || item.trim() !== "";
}

const createNewItemOnTheList = (object)=>{
    let parentElement = document.querySelector('#household-list')
    let newDiv =  document.createElement('div');
    for (var key in object) {
        if (object.hasOwnProperty(key)) {   
            var paragraph = document.createElement('p');
            paragraph.textContent = key + ": " + object[key];
            newDiv.appendChild(paragraph);
        }
    }
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        parentElement.removeChild(newDiv);
    });

    newDiv.appendChild(deleteButton);

    parentElement.appendChild(newDiv)
}

const displayErrorMessage = (message, form) => {
    let errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.classList.add('error-message');
    form.appendChild(errorElement);
}

const clearErrorMessages = () => {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage){
        errorMessage.remove();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var formData = new FormData(form);

        var formDataObject = {};
        formData.forEach(function(value, key){
            if(key == 'smoker'){
             formDataObject[key] = value == "on" ? 'Yes' : 'No'
            }
            else{
                formDataObject[key] = value;
            }
        });

        
        let age = formDataObject['age'];
        let relationship = formDataObject['rel'];

       if(!isValidAge(age)){
        displayErrorMessage('Please add a valid age', form)
        return
       }
     
        if(!isValidRel(relationship)){
            displayErrorMessage('Please add a relationship', form)
            return;
        } 

        createNewItemOnTheList(formDataObject)
        form.reset();
    });
});
