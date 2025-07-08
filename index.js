import invitations from "./data/invitaionExample.js"
const invitationCards = document.getElementById('invitation-cards')


<<<<<<< HEAD
invitations.map((item)=>{
    invitationCards.innerHTML += `
         <div class="card" key="${item.id}">
            <img src="${item.img}" alt="" />
            <button>Create invitation</button>
        </div>
    `
})
=======
window.handleCreate = function (id){
    invitations.forEach((item)=>{
      if(item.id === id){
        window.location.href = 'http://127.0.0.1:5500/pages/createInvitation.html'
      }
    })
  }
  

invitations.map((item)=>{
    invitationCards.innerHTML += `
  <div class="card" key="${item.id}">
    <img src="${item.img}" alt="" />
    <button onclick="handleCreate(${item.id})">Create invitation</button>
  </div>
`

})



>>>>>>> 5418c1c (Removed large video file and added updated files)
