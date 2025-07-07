import invitations from "./data/invitaionExample.js"
const invitationCards = document.getElementById('invitation-cards')


invitations.map((item)=>{
    invitationCards.innerHTML += `
         <div class="card" key="${item.id}">
            <img src="${item.img}" alt="" />
            <button>Create invitation</button>
        </div>
    `
})