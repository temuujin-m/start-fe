function getFetch(url, callback){
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}