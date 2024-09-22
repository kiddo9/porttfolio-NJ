const Moblienav = document.getElementById('MobileNav');
const CloseButton = document.getElementById('CloseMenu')
let MenuButton = document.getElementById('ToggleMenu')
const List = document.getElementById('SkillsList')

MenuButton.addEventListener('click', ToggleNav)
CloseButton.addEventListener('click', CloseNav)

function ToggleNav(){
    Moblienav.style.transform = 'translateX(-5%)';
    Moblienav.style.transition = '1s ease'
    CloseButton.style.display = 'block'
    MenuButton.style.display = 'none'
}

function CloseNav(){
    Moblienav.style.transform = '';
    Moblienav.style.transition = '1s ease'
    CloseButton.style.display = ''
    MenuButton.style.display = ''
}


let SkillsList = [
    {
        name: "HTML5",
        type: 'base'
    },
    {
        name: "CSS3",
        type: 'base'
    },
    {
        name: 'Tailwinds',
        type: 'Framework'
    },
    {
        name: 'JavaScript',
        type: 'base',
    },
    {
        name: 'React',
        type: 'Framework'
    },
    {
        name: 'React Native',
        type: 'Framework'
    },
    {
        name: 'Vue',
        type: 'Framework'
    },
    {
        name: 'Angular',
        type: 'Framework'
    },
    {
        name: 'PHP',
        type: 'base'
    },
    {
        name: 'Laravel',
        type: 'Framework'
    },
    {
        name: 'node js',
        type: 'base'
    },
    {
        name: 'express js',
        type: 'Framework'
    },
    {
        name: 'MySQL',
        type: 'database',
        category: 'sql'
    },
    {
        name: 'postgres',
        type: 'database',
        category: 'sql'
    },
    {
        name: 'mongodb',
        type: 'database',
        category: 'no-sql'
    },
    {
        name: 'Python'
    },
    {
        name: 'Go lang'
    },
    {
        name: 'c, c++, c#'
    },
    {
        name: 'API integrations'
    },
]

List.innerHTML = SkillsList.map((skill) => {
    return `
      <div class="bg-gray-300 text-center py-2 rounded-lg">${skill.name}</div>
    `;
}).join('');


;
    


