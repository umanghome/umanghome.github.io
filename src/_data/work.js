module.exports = function () {
  return {
    skills: [
      {
        title: 'Languages',
        items: [
          ['HTML', 'CSS', 'JavaScript'],
          ['PHP', 'MySQL'],
          ['Python', 'Java'],
        ],
      },

      {
        title: 'Frameworks & Tools',
        items: [
          ['React', 'Redux', 'Next.js'],
          ['Svelte', 'Sapper', 'Node.js'],
          ['Laravel', 'Cordova', 'Firebase', 'Git'],
        ],
      },
    ],

    experience: {
      title: 'Experience',
      items: [
        {
          company: 'Razorpay [YC W15]',
          roles: [
            {
              role: 'Senior Frontend Engineer (Payments)',
              duration: 'March 2019 to Present',
              work: [
                'Overhauling and revamping Razorpay Checkout in terms of UI and codebase',
                'Supporting an increasing number of payment methods on Razorpay Checkout',
                'Creating and maintaining alternate versions of Razorpay Checkout',
              ],
            },

            {
              role: 'Frontend Engineer',
              duration: 'October 2017 to March 2019',
              work: [
                'Created multiple pages for the Razorpay website',
                'Revamped and added support for Goods and Services Tax (GST) for Invoices product',
                'Created patterns and libraries for tracking user behavior across Dashboard and Website',
                'Added support for multiple payment methods to Razorpay Checkout',
                "Migrated Razorpay's blog from Ghost to a static website generated from a WordPress CMS",
              ],
            },
          ],
          url: 'https://razorpay.com',
          linkTitle: 'Razorpay',
        },

        {
          company: 'Wingify',
          roles: [
            {
              role: 'Software Engineer (PushCrew, now VWO Engage)',
              duration: 'June 2017 to October 2017',
              work: [
                'Created a tracking library in JavaScript capable in capturing analytics through multiple services',
                'Enhanced service workers to retain more Push Notification subscribers on Firefox',
                'Added multiple features to the Dashboard using ReactJS',
                'Wrote scripts and created a Slack command to allow easier tracking of ownership and usage of Staging instances',
              ],
            },

            {
              role: 'Software Engineering Intern (PushCrew)',
              duration: 'December 2016 to January 2017',
              work: [
                'Using ReactJS and Redux, developed automated flow allowing customers to convert to HTTPS accounts, thus reducing 60 to 80 monthly support tickets',
                'Implemented changes in the display of pricing tiers for better customer acquisition',
                'Integrated MixPanel',
                'Developed landing pages',
              ],
            },
          ],
          url: 'https://wingify.com/',
          linkTitle: 'Wingify',
        },

        {
          company: 'Independent Contractor',
          roles: [
            {
              duration: 'March 2016 to June 2017',
              work: [
                'Worked on various web-based (frontend and backend) projects',
              ],
            },
          ],
        },
      ],
    },

    projects: [
      {
        title: 'Diagnosis of Brain Tumor using Machine Learning Algorithms',
        description: [
          "As a final project for my Bachelor's Course in Computer Science and Engineering, my team and I looked into various ways of creating an intermediate system that helps the radiologists identify Brain Tumor quicker by identifying areas in the Brain MRI scans that may be abnormal.",
        ],
        technologies: ['Python', 'scikit-learn', 'scikit-image'],
      },

      {
        title: 'LeapDrop',
        description: [
          'Hacked together a system to drag (using hand gestures) a webpage from one computer, drop it onto another, and have it open instantaneously.',
          'Won the first position in Hardware Category at InOut 3.0.',
        ],
        technologies: [
          'Leap Motion',
          'NodeJS',
          'Socket.IO',
          'Android',
          'Chrome Extension',
        ],
        url: 'https://medium.com/hackernoon/building-leapdrop-f4191ff2f36d',
      },

      {
        title: 'Picture Band',
        description: [
          'Built a web platform to enable the sharing of photos among groups by using a single, personalized URL.',
        ],
        technologies: ['Laravel', 'JavaScript', 'Bootstrap', 'jQuery'],
        url: 'https://pictureband.co',
      },

      {
        title: 'ieacon',
        description: [
          "Built the MVP consisting of a mobile app that interfaces with Estimote's Bluetooth beacons, and a CRM for restaurant order and inventory management.",
        ],
        technologies: ['ReactJS', 'Laravel', 'Cordova', 'Firebase'],
      },

      {
        title: 'KhiKhi',
        description: [
          'KhiKhi was built at MIT Media Lab Design Innovation 2015. It is a pair of microcontrollers that allow people to share laughter remotely.',
          'Built an interface to make two Tessel microcontrollers communicate with each other over WiFi using HTTP requests.',
        ],
        technologies: ['NodeJS', 'Tessel'],
        url: 'https://umanghome.github.io/khikhi',
      },

      {
        title: 'Cult Classics',
        description: [
          'Built the website and did Product Design for a hobby-based business where we made and sold wooden, engraved products.',
        ],
        technologies: ['Laravel', 'ReactJS'],
      },

      {
        title: 'IMBb Sorter',
        description: [
          'IMDb Sorter allows you to sort movies of your choice based on their IMDb Ratings.',
        ],
        technologies: ['ReactJS', 'OMDb API'],
      },

      {
        title: 'Timetable',
        description: [
          'An Android app to display the timetable for all branches of / Engineering at Babaria Institute of Technology.',
        ],
        technologies: ['ReactJS', 'Cordova'],
        url:
          'https://play.google.com/store/apps/details?id=com.umanghome.timetable',
        linkTitle: 'Download the app',
      },

      {
        title: 'Attendance Calculator',
        description: [
          "An Android app to update the user's attendance daily and show the attendance percentage.",
        ],
        technologies: ['ReactJS', 'Cordova'],
        url:
          'https://play.google.com/store/apps/details?id=com.umanghome.attendance',
        linkTitle: 'Download the app',
      },

      {
        title: 'RuralFuse',
        description: [
          'Developed at InOut 2.0, adhering to the theme of Connecting Rural India, RuralFuse was developed as a platform to enable job-seekers in rural areas to providers in towns.',
        ],
        technologies: ['Laravel', 'JavaScript'],
        url: 'https://devpost.com/software/ruralfuse-q2aj78',
      },

      {
        title: 'KC India',
        description: [
          'KC India is a crowd-sourced list of Keratoconus clinics in India.',
        ],
        technologies: ['JavaScript', 'Parse'],
      },

      {
        title: 'Itinerate',
        description: ["Itinerate is an online itinerary generator, developed at InOut 1.0. The theme for the hackathon was to develop something relating to the travel industry."],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Google Maps API'],
      },
    ],
  };
}