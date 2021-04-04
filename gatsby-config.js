module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://wangchristine.com`,
    // Your Name
    name: 'Christine Wang',
    // Main Site Title
    title: `Christine Wang | Strategist, Artist, Entrepreneur`,
    // Description that goes under your name in main bio
    description: `Strategist | Artist | Entrepreneur`,
    // Optional: Twitter account handle
    author: `@wangchristinecom`,
    // Optional: Github account URL
    //github: ``,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/christinewang0/`,
    // Content of the About Me section
    about: `Christine is a multi-cultural, multi-lingual and multi-faceted senior professional with 12+ years of experience in innovation, 
    digitization and new venture building across different industries. She is currently the Managing Director of Lufthansa Innovation Hub 
    and also run her own advisory business CX Consulting.
    Apart from her business career, Christine is  a violinist with 17 years of education and an avid documentary photographer since 2010. 
    Her work was last displayed in a solo exhibition in Shanghai in 2018`,
    
   // Optional: List your experience, they must have `name` and `description`. `link` is optional.
   experience: [
    {
      time: '2019 - Today',
      name: 'Lufthansa Innovation Hub GmbH | Managing Director | Berlin & Singapore ',
      description: 'Overall responsibility of the business, strategy and day-to-day operations',
      link: 'https://github.com/RyanFitzgerald/devfolio',
    },
    {
      time: '2019 - Today',
      name: 'Globex Corp',
      description: 'Full-Stack Developer, December 2017 - February 2020',
      link: 'https://github.com/RyanFitzgerald/devfolio',
    },
    {
      time: '2019 - Today',
      name: 'Hooli',
      description: 'Full-Stack Developer, May 2015 - December 2017',
      link: 'https://github.com/RyanFitzgerald/devfolio',
    },
  ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
  projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
