import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Pursuing the Parks',
        link: 'https://captainflint1715.github.io/Perusing-the-Parks/',
        gitHubLink: 'https://github.com/CaptainFlint1715/Perusing-the-Parks',
    },
    {
        id: 2,
        title: 'Timed Coding Quiz',
        link: 'https://laurenraehaas.github.io/timed_coding_quiz/',
        gitHubLink: 'https://github.com/laurenraehaas/timed_coding_quiz',
    },
    {
        id: 3,
        title: 'Daily-Planner',
        link: 'https://laurenraehaas.github.io/daily-planner/',
        gitHubLink: 'https://github.com/laurenraehaas/daily-planner',
    },
    {
        id: 4,
        title: 'Weather-App',
        link: 'https://laurenraehaas.github.io/weather-app/',
        gitHubLink: 'https://github.com/laurenraehaas/weather-app',
    }
]
function Portfolio() {
    return(
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <div>
                        <a href= {project.link}>Deployment</a>
                        <a href= {project.gitHubLink}>GitHub Link</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Portfolio