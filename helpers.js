const isValidRel = (item) => {
    return typeof item === 'string'
}
  
const isValidAge = (item) => {
      const numericValue = parseInt(item);
  
      return !isNaN(numericValue) && numericValue >= 0;
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


export { isValidRel, isValidAge, createNewItemOnTheList, displayErrorMessage, clearErrorMessages }
