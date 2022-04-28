//fetch('data.json')
//  .then(function(response){
//    response.json().then(function(data){
//      console.log('json data:',data);
//    });
//  })
// .catch(function(err) {
//    console.log('Fetch Error :-S', err);
//  });


fetch('data.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
