const buttonEnter = document.getElementById("searchID");
const inputID = document.getElementById("inputID");
const okID = document.getElementById("okID");

const containerID = document.getElementById("containerID");
containerID.style.display = "none";

const dialogID = document.getElementById("dialogID");
dialogID.style.display = "none";


const containerMessageID = document.getElementById("containerMessageID");
containerMessageID.style.display = "none";

inputID.addEventListener("input", () => {
    if (!inputID.value) {
        buttonEnter.disabled = true;
        return;
    }

    buttonEnter.disabled = false;
});

const getClients = async () => {
    try {
        const response = await fetch(`http://localhost:3000/clients`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        alert("Server indisponível");
    }
}

const showBar = (client) => {
    const { totalCuts, cutsNeeded, cutsRemaining } = client.loyaltyCard;
    const legendID = document.getElementById("legendID");
    legendID.innerHTML = `${totalCuts} de ${cutsNeeded}`;

    const progressID = document.getElementById("progressID");
    progressID.value = totalCuts;
    progressID.max = cutsNeeded;

    const hairCutID = document.getElementById("hairCutID");
    hairCutID.innerHTML = cutsRemaining;

}

const showCard = (client) => {
    const { totalCuts, cutsNeeded } = client.loyaltyCard;
    const { id } = client;

    const gridCheckID = document.getElementById("gridCheckID");
    const allChecksHTML = [];

    for (let i = 0; i < totalCuts; i++) {
        allChecksHTML.push("<div class='check'><img src='assets/PinCheck.png'></div>");
    }

    gridCheckID.innerHTML = allChecksHTML.join(" ");

    const checkID = document.getElementById("checkID");
    checkID.innerHTML = `ID: ${id}`;

    const descriptionID = document.getElementById("descriptionID");
    descriptionID.innerHTML = `Ao fazer cortes de cabelo, o ${cutsNeeded}° corte sai de graça!`;

    if (totalCuts >= cutsNeeded) {
        dialogID.style.display = "flex";
    }

}

const showPerfil = (client) => {
    const { clientSince, name } = client;

    const nameID = document.getElementById("nameID");
    nameID.innerHTML = name;

    const dateID = document.getElementById("dateID");
    dateID.innerHTML = `Cliente deste ${clientSince}`;

}

const showHistory = (client) => {
    const { appointmentHistory } = client;
    const otheInfoID = document.getElementById("otheInfoID");
    otheInfoID.innerHTML = ` ${appointmentHistory.length} cortes`;

    const listHistoryID = document.getElementById("listHistoryID");
    const allHistory = appointmentHistory.map(({ date, time }) => {
        return `<div class='item-history'>
            <div class='data-item-history'>
                <div class='date-item-history'> ${date} </div>
                <div class='date-item-hour'> ${time} </div>
            </div>
            <img src='assets/checkIcon.png'>
        </div>`
    });
    listHistoryID.innerHTML = allHistory.join(" ");

}

buttonEnter.onclick = async () => {
    const allClients = await getClients();
    const filterClient = allClients.find((client) => client.id.replace("-", "").includes(inputID.value));

    if (filterClient) {
        containerMessageID.style.display = "none";
        containerID.style.display = "flex";
        showBar(filterClient);
        showCard(filterClient);
        showPerfil(filterClient);
        showHistory(filterClient);
    } else {
        containerID.style.display = "none";
        containerMessageID.style.display = "block";
    }

}


okID.onclick = async () => {
    dialogID.style.display = "none";
};