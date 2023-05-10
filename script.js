const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'textfield': appendTextField(label)
            break
    }

}

const appendText = (label = "Default") => {
    let container = document.createElement('div')
    container.setAttribute('class', 'item row')
  
    let checkboxDiv = document.createElement('div')
    checkboxDiv.setAttribute('class', 'col-auto mt-2')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'form-check-input')

    let inputDiv = document.createElement('div')
    inputDiv.setAttribute('class', 'col mb-2')

    let input = document.createElement('input')
    input.setAttribute('id', 'idtoremove')
    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control')
  
   
    checkboxDiv.appendChild(checkbox)
    container.appendChild(checkboxDiv)
    inputDiv.appendChild(input)
    container.appendChild(inputDiv)
  
  
    document.querySelector('#display').appendChild(container)
  }
  
  const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    elem.setAttribute('class', 'item row')
    
    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('class', 'col mb-2')


    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-primary form-control mt-2')
    button.textContent = label
  
    let checkboxDiv = document.createElement('div')
    checkboxDiv.setAttribute('class', 'col-auto mt-3')
    
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'checkbox')
    
    checkboxDiv.appendChild(checkbox)
    elem.appendChild(checkboxDiv)
    buttonDiv.appendChild(button)
    elem.appendChild(buttonDiv)
  
    document.querySelector('#display').appendChild(elem)
  }
  
  const appendTextField = (label = "Default") => {
    let Field = document.createElement('div')
    Field.setAttribute('class', 'item row')
  
    let checkboxDiv = document.createElement('div')
    checkboxDiv.setAttribute('class', 'col-auto mt-2')
  
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'form-check-input')
  
    let InputDiv = document.createElement('div')
    InputDiv.setAttribute('class', 'col mb-2')
  
    let Input = document.createElement('input')
    Input.setAttribute('id', 'idtoremove')
    Input.setAttribute('placeholder', label)
    Input.setAttribute('class', 'form-control')
  
    checkboxDiv.appendChild(checkbox)
    Field.appendChild(checkboxDiv)
    InputDiv.appendChild(Input)
    Field.appendChild(InputDiv)
  
    document.querySelector('#display').appendChild(Field)
  }
  

  const remove = () => {
    let items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let checkbox = item.querySelector('input[type="checkbox"]')
      if (checkbox.checked) {
        item.remove()
      }
    }
  }