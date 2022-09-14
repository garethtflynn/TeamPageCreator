const createManager = (manager) => {
  return `
  <div class="card" style="width: 18rem; margin: 10px; float: left; width: 25%; padding: 0 10px;">
     <div class="card-body">
       <h5 class="card-title">${manager.name}</h5>
       <p class="card-text">${manager.role}</p>
     </div>
     <ul class="list-group list-group-flush">
      <p class="list-group-item">ID: ${manager.id} </p>
      <a href="mailto:${manager.email}" class="list-group-item">${manager.email}</a>
      <p>Office Number: ${manager.office}</p>
     </ul>
   </div>
    `;
};

const createEngineer = (engineer) => {
  return `
  <div class="card" style="width: 18rem; margin: 10px; float: left; width: 25%; padding: 0 10px;">
     <div class="card-body">
       <h5 class="card-title">${engineer.name}</h5>
       <p class="card-text">${engineer.role}</p>
     </div>
     <ul class="list-group list-group-flush">
      <p class="list-group-item">ID: ${engineer.id} </p>
      <a href="mailto:${engineer.email}" class="list-group-item">${engineer.email}</a>
      <p>Github<a href="href="https://github.com/${engineer.github}" class="list-group-item" target="_blank"> ${engineer.github}/a></p>
     </ul>
   </div>
    `;
};

const createIntern = (intern) => {
  return `
  <div class="card" style="width: 18rem; margin: 10px; float: left; width: 25%; padding: 0 10px;">
     <div class="card-body">
       <h5 class="card-title">${intern.name}</h5>
       <p class="card-text">${intern.role}</p>
     </div>
     <ul class="list-group list-group-flush">
      <p class="list-group-item">ID: ${intern.id} </p>
      <a href="mailto:${intern.email}" class="list-group-item">${intern.email}</a>
      <p class="list-group-item">School: ${intern.school}</p>
     </ul>
   </div>
    `;
};

const create = (data) => {
  cards = [];
  
  for(let i = 0; i < data.length; i++) {
    const employee = data[i]
    const role = employee.getrole() 

    if(role === 'Manager') {
        const manCard = createManager(employee)

        cards.push(manCard)
    }
    if(role === 'Engineer') {
        const engCard = createEngineer(employee)

        cards.push(engCard)
    }
    if(role === 'Intern') {
        const intCard = createIntern(employee)

        cards.push(intCard)
    }
  }

  const teamCards = cards.join('');
  const createTeam = createTeamPage(teamCards);
  return createTeam;
};

const createTeamPage = (teamCards) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Employee Tracker</title>
    </head>
    <h2 style="background-color: salmon; text-align: center; height: 50px ">My Team</h2>
    <body>
        ${teamCards} 
    </ul>
    </div>
    </body>
    </html>`;
};

module.exports = create;
