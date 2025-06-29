// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-berry",
          title: 'BeRrY',
          description: "A two-player competitive abstract strategy game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/berry/";
            },},{id: "projects-card-odyssey",
          title: 'Card Odyssey',
          description: "A 54-card based solitaire strategy game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/card-odyssey/";
            },},{id: "projects-circle-0",
          title: 'Circle 0',
          description: "A game of beautiful messes and inevitable destruction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/circle0/";
            },},{id: "projects-hyper-ecofarm",
          title: 'Hyper Ecofarm',
          description: "A real-time farming strategy and resource management game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyper-ecofarm/";
            },},{id: "projects-i-39-m-a-tree",
          title: 'I&amp;#39;m A Tree',
          description: "A serious first-person VR tree simulator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/im-a-tree/";
            },},{id: "projects-liteforms",
          title: 'Liteforms',
          description: "A Unity3D app to create and chat with conversational AI characters",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liteforms/";
            },},{id: "projects-melody-painter",
          title: 'Melody Painter',
          description: "A creative VR music builder and god simulator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/melody-painter/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/outbreak-legacy/";
            },},{id: "projects-puzzlegami",
          title: 'PuzzleGami',
          description: "Paper folding puzzles that bend your brain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/puzzlegami/";
            },},{id: "projects-six-games-in-one",
          title: 'Six Games In One',
          description: "Six simultaneous experimental games in one package",
          section: "Projects",handler: () => {
              window.location.href = "/projects/six-games-in-one/";
            },},{id: "projects-straight-ahead",
          title: 'Straight Ahead',
          description: "A 2D fancy casual bouncing ball game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/straight-ahead/";
            },},{id: "projects-swirlyyy",
          title: 'Swirlyyy',
          description: "A two-player endless rhythm racer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swirlyyy/";
            },},{id: "projects-swirlyyyy-vr",
          title: 'Swirlyyyy VR',
          description: "A VR endless rhythm racer on Gear VR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swirlyyyy-vr/";
            },},{id: "projects-looking-glass-unity-plugin",
          title: 'Looking Glass Unity Plugin',
          description: "A Unity Plugin project with plenty of features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unity-plugin/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%69%79%75%6E%6C%69%75.%76%61%6E%69%6C%6C%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/liushiyun", "_blank");
        },
      },{
        id: 'social-itch',
        title: 'Itch',
        section: 'Socials',
        handler: () => {
          window.open("https://vanillabreeze.itch.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
