const myImage = document.getElementById("teste");

async function getClients() {

    try {

        const response = await fetch(`http://localhost:3000/clients`)
        const data = await response.json();
        return data;
    }
    catch (error) {
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}

const allClients = getClients();


myImage.onclick = () => {

    console.log(allClients);

}