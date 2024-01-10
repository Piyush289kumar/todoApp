const inputBox = document.querySelector('#inputBox');
const addTaskBtn = document.querySelector('#addTaskBtn');
const listContainer = document.querySelector('#listContainer');

addTaskBtn.addEventListener('click',()=>{

    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let myDate = new Date();
        
        let span2 = document.createElement('span');
        span2.innerHTML = myDate.toLocaleDateString();
        span2.setAttribute('class', 'myDate')
        li.appendChild(span2);


        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    
    inputBox.value = '';
    saveData();


});

listContainer.addEventListener('click', (el)=>{

    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked'); 
        saveData();       
    } else if(el.target.tagName === 'SPAN') {
        if (confirm("Do you remove task ?")) {
            el.target.parentElement.remove();
            saveData();
        }
    }

},false);



function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

(()=>{
    listContainer.innerHTML = localStorage.getItem('data');
})()

