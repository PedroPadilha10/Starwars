preencherTabela();
preencherNaves();
preencherArmas();

async function preencherTabela() {
    const response = await swapiGet('people/')
    const tableData = response.data.results;
    console.log(tableData);
    tableData.forEach( perso => {
    $('#personagenstable').append(`<tr><td>${perso.name}</td></tr>`);
})

}

async function preencherNaves() {
    const response = await swapiGet('starships/')
    const tableData = response.data.results;
    console.log(tableData);
    tableData.forEach( nav => {
    $('#navtable').append(`<tr><td>${nav.name}</td></tr>`);
})

}

async function preencherArmas() {
    const response = await swapiGet('planets/')
    const tableData = response.data.results;
    console.log(tableData);
    tableData.forEach( nav => {
    $('#planetastable').append(`<tr><td>${nav.name}</td></tr>`);
})

}

  function swapiGet(param) {
      return axios.get(`https://swapi.dev/api/${param}`);
  }