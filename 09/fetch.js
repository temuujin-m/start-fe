//fetch('data.json')
//  .then(function(response){
//    response.json().then(function(data){
//      console.log('json data:',data);
//    });
//  })
// .catch(function(err) {
//    console.log('Fetch Error :-S', err);
//  });

function getFetch(url, callback){
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

getFetch('data.json', () => console.log(data));

//fetch('data.json')
//    .then((response) => response.json())
//    .then((data) => console.log(data));
