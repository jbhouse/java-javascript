var globalId = 1;
var arbitraryInteger = 1;

function addRow(tableId, firstNam, lastNam, dur, rel){
  var newRow = document.createElement('tr');
  // creating td for the id
  var newId = document.createElement('td');
  var actualId = document.createTextNode(tableId);
  newId.appendChild(actualId);
  // creating td for first name
  var newDescription = document.createElement('td');
  var desciptionText = document.createTextNode(firstNam);
  newDescription.appendChild(desciptionText);
  // creating td for last name
  var newReason = document.createElement('td');
  var reasonText = document.createTextNode(lastNam);
  newReason.appendChild(reasonText);
  // creating td for duration of relationship
  var newDur = document.createElement('td');
  var durText = document.createTextNode(dur);
  newDur.appendChild(durText);
  // creating td for type of relationship you have with that person
  var newStatus = document.createElement('td');
  var statusText = document.createTextNode(rel);
  newStatus.appendChild(statusText);
  // add a delete button
  var deleteBTN = document.createElement('button');
  var delText = document.createTextNode('delete');
  deleteBTN.appendChild(delText);
  deleteBTN.classList.add('btn','btn-danger','del-button');
  // creating an event listener for the deletion of said row on click
  deleteBTN.addEventListener('click', function(){
    var thisButton = this;
    if (arbitraryInteger===1) {
      while (thisButton = thisButton.previousSibling) {
        thisButton.classList.add('invisible');
      }
      this.classList.remove('btn-danger');
      this.classList.add('btn-primary','btn-sm');
      this.innerHTML = 'undo';
      arbitraryInteger = 0;
    } else {
        while (thisButton = thisButton.previousSibling) {
          thisButton.classList.remove('invisible');
        }
        this.classList.add('btn-danger');
        this.classList.remove('btn-primary','btn-sm');
        this.innerHTML = 'delete';
        arbitraryInteger = 1;
    }
  });
  // adding all of the table columns to the new row
  newRow.appendChild(newId)
  newRow.appendChild(newDescription);
  newRow.appendChild(newReason);
  newRow.appendChild(newDur);
  newRow.appendChild(newStatus);
  newRow.appendChild(deleteBTN);
  // adding that new row to the table
  document.getElementById('tbod').appendChild(newRow);
};

document.getElementById('submitter').addEventListener('click', function(){
  addRow(globalId, document.getElementById('firstName').value, document.getElementById('lastName').value, document.getElementById('duration').value, document.getElementById('relationshipStatus').value);
  globalId++;
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('relationshipStatus').value = '';
});

document.getElementById('canceler').addEventListener('click',function(){
    document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('relationshipStatus').value = '';
});

// window.onbeforeunload = function(event) {
//     document.getElementsByClassName('hidden')
// };