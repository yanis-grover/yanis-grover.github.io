
// Generate experience cards
const experienceData = [
    {
        position: 'Research Data Scientist Intern',
        company: 'Oracle',
        dates: 'September 2024 - Present',
        achievements: [
            'Designed, implemented, and evaluated fully integrated LLM Agents at Oracle Labs, improving workflow automation for data scientists'
        ]
    },
    // Add more experience data here...
];

const experienceContainer = document.querySelector('.experience-container');

experienceData.forEach((experience) => {
    const experienceCard = document.createElement('div');
    experienceCard.classList.add('experience-card');

    const experienceCardHTML = `
        <h3>${experience.position} at ${experience.company}</h3>
        <p>${experience.dates}</p>
        <ul>
            ${experience.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
        </ul>
    `;

    experienceCard.innerHTML = experienceCardHTML;
    experienceContainer.appendChild(experienceCard);
});

// Generate skills list
const skillsData = [
    'Python',
    'R',
    'C',
    'SQL',
    'NodeJS',
    'Git',
    'Google Cloud Platform',
    'AWS',
    'Microsoft Azure',
    'Snowflake',
    'LaTeX',
    'Microsoft Office',
    'G Suite'
];

const skillsList = document.querySelector('.skills-list');

skillsData.forEach((skill) => {
    const skillsListItem = document.createElement('li');
    skillsListItem.textContent = skill;
    skillsList.appendChild(skillsListItem);
});
