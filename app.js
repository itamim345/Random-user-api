function getFriend (){
    fetch('https://randomuser.me/api/')
    .then (resp => resp.json())
    .then (data => displayFriend(data))
}


function displayFriend (friend){
    //console.log(friend.results[0].name);
    let frndWrapper = document.getElementById('frnd-wrapper');
    console.log(friend);
    frndWrapper.innerHTML = `<div class="card" style="width: 16rem;">
    <img src="${friend.results[0].picture.large}" class="card-img-top img-thumbnail" style="height: 12rem">
    <div class="card-body">
      <h5 class="card-title">${friend.results[0].name.first +" " + friend.results[0].name.last} </h5>
      <h6><strong>Gender</strong> : ${friend.results[0].gender} </h6>
      <h6><strong>Age</strong> : ${friend.results[0].dob.age} </h6>
      <h6><strong>City</strong> : ${friend.results[0].location.city} </h6>
      <h6><strong>Country</strong> : ${friend.results[0].location.country} </h6>
      <em class="text-danger">Press Button agian to meet different friend</em>
    </div>
  </div>`
}

