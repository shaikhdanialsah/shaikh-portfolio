const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/shaikhdanialsah',
  title: 'shaikhdanial',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shaikh Danial',
  description:
    'I am a tech-driven final-year IT student passionate about web development, currently delving into React and Flask technologies.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/shaikhdanialsah',
  },
  contact:'https://wa.me/+60193409508'
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AniRec+',
    description:
      'This web app project is still in progress and for the completion of my final year project',
    stack: ['React', 'Flask', 'Data Visualization'],
    sourceCode: 'https://github.com/shaikhdanialsah',
    livePreview: 'https://github.com/shaikhdanialsah',
  },
  {
    name: 'MyTNB',
    description:
      'This mobile app project aims to help users to estimate their electricity bill based on current electricity rates.',
    stack: ['Java'],
    sourceCode: 'https://github.com/shaikhdanialsah/myTNB',
  },
  {
    name: 'Shoppink',
    description:
      'A web application that sells electronic items online',
    stack: ['PHP', 'MySQL', 'Javascript', 'HTML'],
    sourceCode: 'https://github.com/shaikhdanialsah',
    livePreview: 'http://shoppink.infinityfreeapp.com/shoppink/index.php',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'Flask',
  'PHP',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shaikhdanial02@gmail.com',
}

export { header, about, projects, skills, contact }
