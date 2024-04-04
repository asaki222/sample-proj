import { isValidRel, isValidAge, createNewItemOnTheList, displayErrorMessage, clearErrorMessages } from './helpers.js';



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
        clearErrorMessages()
        form.reset();
    });
});
