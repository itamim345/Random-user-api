function getFriend (){
    fetch('https://randomuser.me/api/')
    .then (resp => resp.json())
    .then (data => displayFriend(data))
}


function displayFriend (friend){
    //console.log(friend.results[0].name);
    let frndWrapper = document.getElementById('frnd-wrapper');
    console.log(friend);
    frndWrapper.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${friend.results[0].name.first +" " + friend.results[0].name.last} </h5>
      <p><strong>Email</strong> : ${friend.results[0].email} </h3>
      <p><strong>Gender</strong> : ${friend.results[0].gender} </h3>
      <p><strong>Age</strong> : ${friend.results[0].dob.age} </p>
      <p><strong>City</strong> : ${friend.results[0].location.city} </p>
      <p><strong>Country</strong> : ${friend.results[0].location.country} </p>
    </div>
  </div>`
}

getFriend()