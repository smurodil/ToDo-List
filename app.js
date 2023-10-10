const form = document.querySelector('form');
const ul = document.querySelector('ul')
const counterEl = document.querySelector('#counter')
const smallEl = document.querySelector('small')

let counter = 0

const todos = JSON.parse(localStorage.getItem('todos')) || []

if(todos.length){
    counter += todos.length
    counterEl.textContent = `Counter: ${counter}`
    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.textContent = todo
        ul.appendChild(li)
    });
}


counterEl.textContent = `Counter: ${counter}`

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(form.text.value.trim()){
        const inputText = form.text.value

        const li = document.createElement('li')
        li.textContent = inputText
        ul.appendChild(li)
        counter++
        counterEl.textContent = `Counter: ${counter}`
        todos.push(inputText)
        localStorage.setItem('todos', JSON.stringify(todos))

        form.reset()
    }else{
        smallEl.classList.remove('hidden')
        setTimeout(() => {
            smallEl.classList.add('hidden')
        }, 3000);
    }
}) 