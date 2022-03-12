 //add item to to-do list
 function newItem(){

    //create <li> on document
    let li = $('<li></li>');
    //assign value to <li> from input
    let inputValue = $('#input').val();
    li.append(inputValue);

    //append <li> to <ol> 
    if (inputValue === '') {
      alert("Please enter text to add an item!");
    } else {
      $('#list').append(li);
    }

    //strike through text if item double-clicked
    function crossOut() {
          li.toggleClass("strike");
      }
  
      li.on("dblclick", function crossOut() {
          li.toggleClass("strike");
      });
  
    //add "x" button to denote removal of an item from the list
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);

    //remove item from the list
    function deleteListItem(){
      li.addClass("delete")
      }

    //enable click-and-drag functionality on the list items
    $('#list').sortable();
  }