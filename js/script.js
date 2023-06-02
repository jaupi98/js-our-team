const team = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & Ceo',
        'image':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image':'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'walter Gordon',
        'role': 'Office Manager',
        'image':'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'social  Media Manager',
        'image':'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Doveloper',
        'image':'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Grafic Designer',
        'image':'barbara-ramos-graphic-designer.jpg'
    }
];
// MILESTONE 1
for(let i=0; i<team.length; i++){
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
}

// MILESTONE 2

const infos = document.getElementById('info');

for(let i=0; i<team.length; i++){
    infos.innerHTML += team[i].name +'<br>';
    infos.innerHTML += team[i].role +'<br>';
    infos.innerHTML += team[i].image +'<br>' +'<br>';
}
