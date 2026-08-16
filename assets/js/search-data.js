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
  },{id: "nav-cv",
          title: "cv",
          description: "Software engineer in New York City — full-stack product work in React, TypeScript, and Go, with a background in developer platforms and real-time graphics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Engineering work, and the games and experiments that got me here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-library",
          title: 'Library',
          description: "The app storefront and launcher for holographic displays",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Library/";
            },},{id: "projects-arcgis-on-holographic-displays",
          title: 'ArcGIS on Holographic Displays',
          description: "The rendering layer bringing enterprise geospatial data into real 3D",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arcgis-integration/";
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
            },},{id: "projects-holographic-display-r-amp-d",
          title: 'Holographic Display R&amp;amp;D',
          description: "Display calibration research, and a co-invented patent on multi-viewer holographic imaging",
          section: "Projects",handler: () => {
              window.location.href = "/projects/holographic-display-patent/";
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
          description: "Taking a conversational AI hologram from experiment to shipped product",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liteforms/";
            },},{id: "projects-melody-painter",
          title: 'Melody Painter',
          description: "A creative VR music builder and god simulator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/melody-painter/";
            },},{id: "projects-outbreak-legacy",
          title: 'Outbreak: Legacy',
          description: "An innovative brick-breaker game with unique features",
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
            },},{id: "projects-agentic-ai-mortgage-pos",
          title: 'Agentic AI Mortgage POS',
          description: "Full-stack product engineering on an agentic AI mortgage point-of-sale platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tidalwave/";
            },},{id: "projects-looking-glass-unity-plugin",
          title: 'Looking Glass Unity Plugin',
          description: "Owning the developer experience of a holographic display SDK",
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
