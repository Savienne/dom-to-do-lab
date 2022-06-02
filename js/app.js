const inp = document.querySelector('input')
const ul = document.querySelector('ul')
const btn = document.getElementById('Submit')
const resetBtn = document.getElementById('Reset')

resetBtn.addEventListener('click',function(evt){
    inp.value = ''
    ul.innerHTML = ''

})

btn.addEventListener('click',function(evt) {
    
    const li = document.createElement('li')
    li.textContent = inp.value
    ul.appendChild(li)
    inp.value = ''


})