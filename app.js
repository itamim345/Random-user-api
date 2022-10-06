function getFriend (){
    fetch('https://randomuser.me/api/')
    .then (resp => resp.json())
    .then (data => displayFriend(data))
}


function displayFriend (friend){
    console.log(friend.results[0].name);
}

getFriend()