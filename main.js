var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
let books=[];
 

//form submit event

form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    //console.log(1);
    //get input value
    var newItem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';
    //add text node with input value

    li.appendChild(document.createTextNode(newItem));
    //CREATE DELETE BUTTON
    var deleteBtn=document.createElement('button');
    //add class to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    books.push(newItem);
    document.forms[0].reset();

    console.warn('added',{books});

    //saving to local storage
    localStorage.setItem('moBooksList',JSON.stringify(books));

}

function removeItem(e){
    console.log(1);
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}