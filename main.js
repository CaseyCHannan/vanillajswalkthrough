const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')


//Form submit event
form.addEventListener('submit', addItem)
//to delete list item
itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems)

// Add item
function addItem(e){
    e.preventDefault();
    console.log('successful event')

    const newItem = document.getElementById('item').value
    console.log(newItem)

    //create element and add to list...
    const li = document.createElement('li')
    //adding class to element
    li.className = 'list-group-item'
    console.log(li)
    li.appendChild(document.createTextNode(newItem))
    console.log(li)
    
    const deleteBtn = document.createElement('button')
    //now add classes..
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))

    li.appendChild(deleteBtn)

    //append new <li> to list
    itemList.appendChild(li)


}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this?')) {
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
} 

function filterItems(e) {
    let text = e.target.value.toLowerCase()
    // console.log(text)
    const items = itemList.getElementsByTagName('li')
    //convert to array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent
        if (itemName.toLocaleLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}