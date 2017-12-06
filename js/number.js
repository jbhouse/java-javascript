function updateI(){
  document.getElementById('inpt').innerHTML = i;
};
window.addEventListener('load', function() {
  updateI();
  document.body.classList.add('bg-light');
})

var i = 0;

document.getElementById('minus').addEventListener('click',function(){
  i--;
  updateI();
  checkDivisible();
});

document.getElementById('plus').addEventListener('click',function(){
  i++;
  updateI();
  checkDivisible();
});

function checkDivisible(){
  if (i!=0) {
    if (!document.getElementById('inpt').classList.contains('text-white')) {
        document.getElementById('inpt').classList.add('text-white')
    }
  }
  if (i%2===0) {
    if (document.getElementById('inpt').classList.contains('bg-dark')) {
      document.getElementById('inpt').classList.remove('bg-dark');
    }
    document.getElementById('inpt').classList.add('bg-danger');
  } else {
    if (document.getElementById('inpt').classList.contains('bg-danger')) {
      document.getElementById('inpt').classList.remove('bg-danger');
    }
    document.getElementById('inpt').classList.add('bg-dark');
  }
  if (i%3===0) {
    document.getElementById('inpt').classList.add('font-italic');
  } else {
    if (document.getElementById('inpt').classList.contains('font-italic')) {
      document.getElementById('inpt').classList.remove('font-italic');
    };
  };
  if (i%7===0) {
    document.getElementById('inpt').classList.add('font-weight-bold');
  } else {
    if (document.getElementById('inpt').classList.contains('font-weight-bold')) {
      document.getElementById('inpt').classList.remove('font-weight-bold');
    };
  };
};