import invitations from "../../data/invitaionExample.js";

const selectImgBox = document.querySelector(".select-invitation");
const returnImg = document.getElementById("returnImg");
const imgStatus = document.getElementById("imgStatus");
const invitationInfoBox = document.querySelector(".invitation-info");
const form = document.getElementById("invitation-form");

let selectedTemplateId = null;

const formData = {
  address: "",
  month: "",
  week: "",
  day: "",
  time: "",
  wedding: "",
  kelin: "",
  kuyov: "",
};

function updateInvitationInfo(styleData) {
  invitationInfoBox.innerHTML = "";

  Object.keys(formData).forEach((key) => {
    const value = formData[key];
    if (!value) return; 

    const p = document.createElement("p");
    p.textContent = value;

    const style = styleData[key.toLowerCase()];
    if (style) {
      p.style.position = "absolute";
      p.style.bottom = style.bottom;
      p.style.left = style.left;
      p.style.fontSize = style.fontSize;
      p.style.color = "#656846";
      p.style.fontFamily = "sans-serif";
    }

    invitationInfoBox.appendChild(p);
  });
}

window.selectTemplate = function (id) {
  selectedTemplateId = id;

  const selected = invitations.find((item) => item.id == id);
  if (!selected) return;

  returnImg.src = selected.img;
  returnImg.style.display = "block";
  imgStatus.style.display = "none";

  updateInvitationInfo(selected.invitationInfo[0]);
};

invitations.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = "";
  img.setAttribute("key", item.id);
  img.onclick = () => window.selectTemplate(item.id);
  selectImgBox.appendChild(img);
});

form.addEventListener("input", function (e) {
  const { name, value } = e.target;

  if (name === "date") {
    const dateObj = new Date(value);
    // formData.month = dateObj.toLocaleString("uz-UZ", { month: "long" });
    formData.day = dateObj.getDate();
    formData.week = dateObj.toLocaleString("uz-UZ", { weekday: "long" });
  } else {
    formData[name] = value;
  }

  const selected = invitations.find((item) => item.id == selectedTemplateId);
  if (selected) {
    updateInvitationInfo(selected.invitationInfo[0]);
  }
});

const downloadBtn = document.getElementById('downloadBtn');
const targetDiv = document.querySelector('.return');

downloadBtn.addEventListener('click', () => {
  html2canvas(targetDiv).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'invitation.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

