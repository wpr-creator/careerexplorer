/* Shared, grade-appropriate career profiles used by every page. */
(function (global) {
  'use strict';

  const source = Object.freeze({
    name: 'U.S. Bureau of Labor Statistics Occupational Outlook Handbook',
    url: 'https://www.bls.gov/ooh/occupation-finder.htm',
    wageDataYear: '2024',
    reviewed: 'July 2026'
  });

  function attachSource(careers) {
    return Object.freeze(Object.fromEntries(
      Object.entries(careers).map(([id, career]) => [id, Object.freeze({ ...career, source })])
    ));
  }

  global.CareerExplorerData = Object.freeze({
    source,
    careers: Object.freeze({
      tkk: attachSource({
  "builder": {
    "label": "🏗️ Builder",
    "does": "Uses tools and materials to make or fix buildings and things.",
    "income": "About $50,000–$90,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Wake up early! Drive to a job site"
      },
      {
        "time": "",
        "task": "Measure wood and cut it just right"
      },
      {
        "time": "",
        "task": "Build walls for a new house"
      },
      {
        "time": "",
        "task": "Eat lunch outside"
      },
      {
        "time": "",
        "task": "Fix a door that won't close"
      },
      {
        "time": "",
        "task": "Clean up the site at the end of the day"
      }
    ],
    "pathway": [
      {
        "icon": "🏠",
        "level": "At Home / Elementary",
        "steps": "Build things with cardboard boxes, LEGO, or wood scraps. Help a grown-up fix things around the house. Draw pictures of buildings you'd like to make."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take shop class. Join robotics or building clubs. Help with school projects that involve building."
      },
      {
        "icon": "📐",
        "level": "High School",
        "steps": "Take construction or woodshop classes. Get a summer job helping a builder. Learn about blueprints and measurements."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Learn on the job or go to a trade school. No 4-year college needed! Apprenticeship programs pay you while you learn."
      }
    ],
    "colleges": "Trade schools and programs: UTI, Wyotech, community college CTE programs, and apprenticeship programs through unions nationwide."
  },
  "farmer": {
    "label": "🌾 Farmer",
    "does": "Grows food, takes care of animals, and works outside.",
    "income": "About $40,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Wake up before sunrise! Feed the chickens and check on the cows"
      },
      {
        "time": "",
        "task": "Water the vegetable garden"
      },
      {
        "time": "",
        "task": "Drive the tractor to plow a field"
      },
      {
        "time": "",
        "task": "Pick ripe tomatoes"
      },
      {
        "time": "",
        "task": "Sell vegetables at the farmers market"
      },
      {
        "time": "",
        "task": "Watch the sunset"
      }
    ],
    "pathway": [
      {
        "icon": "🌱",
        "level": "At Home / Elementary",
        "steps": "Grow a plant from a seed in a cup. Visit a farm or farmers market. Feed animals if you can. Learn about where your food comes from."
      },
      {
        "icon": "🌿",
        "level": "Middle School",
        "steps": "Join 4-H club. Grow a bigger garden. Learn about soil, weather, and plants in science class."
      },
      {
        "icon": "🚜",
        "level": "High School",
        "steps": "Take agriculture classes. Join FFA (Future Farmers of America). Work on a farm after school or on weekends."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Work on a farm, go to community college, or get a 4-year degree in agriculture. UC Davis and Cal Poly have great farm programs."
      }
    ],
    "colleges": "Top agriculture schools: UC Davis, Iowa State, Cal Poly SLO, Texas A&M, Cornell."
  },
  "mechanic": {
    "label": "🔧 Mechanic",
    "does": "Fixes cars, trucks, and machines so they work right.",
    "income": "About $45,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Put on your uniform"
      },
      {
        "time": "",
        "task": "A car comes in making a funny noise — you listen carefully and figure out what's wrong"
      },
      {
        "time": "",
        "task": "Fix the brakes"
      },
      {
        "time": "",
        "task": "Change the oil on another car"
      },
      {
        "time": "",
        "task": "Show a customer what you fixed"
      },
      {
        "time": "",
        "task": "Order new parts for tomorrow's work"
      }
    ],
    "pathway": [
      {
        "icon": "🔩",
        "level": "At Home / Elementary",
        "steps": "Tinker with broken toys to see how they work. Watch videos about how car engines work. Help a grown-up with simple repairs."
      },
      {
        "icon": "⚙️",
        "level": "Middle School",
        "steps": "Take shop class. Build model cars or robots. Start learning tool names and how to use them safely."
      },
      {
        "icon": "🚗",
        "level": "High School",
        "steps": "Take auto tech classes at school. Work at a repair shop. Compete in SkillsUSA auto contests."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Trade school or community college auto program (1–2 years). Earn mechanic certifications (ASE). No 4-year degree required!"
      }
    ],
    "colleges": "Strong auto programs: UTI, Lincoln Tech, Wyotech, and community colleges with automotive technology programs."
  },
  "scientist": {
    "label": "🔬 Scientist",
    "does": "Asks questions, does experiments, and finds out how things work.",
    "income": "About $65,000–$120,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Come into the lab"
      },
      {
        "time": "",
        "task": "Write down today's big question"
      },
      {
        "time": "",
        "task": "Set up an experiment with test tubes and special liquids"
      },
      {
        "time": "",
        "task": "Wait and watch what happens"
      },
      {
        "time": "",
        "task": "Write down everything you see"
      },
      {
        "time": "",
        "task": "Share your discovery with your team"
      },
      {
        "time": "",
        "task": "Think of the next question to ask!"
      }
    ],
    "pathway": [
      {
        "icon": "🧪",
        "level": "At Home / Elementary",
        "steps": "Do experiments at home — mix vinegar and baking soda! Grow crystals. Look at bugs with a magnifying glass. Ask why things happen."
      },
      {
        "icon": "🔬",
        "level": "Middle School",
        "steps": "Enter your school science fair. Join a science club. Visit science museums. Keep a science notebook."
      },
      {
        "icon": "🧬",
        "level": "High School",
        "steps": "Take AP Biology or AP Chemistry. Do a science internship. Apply for summer research programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Get a college science degree. Then maybe graduate school for more research. Many scientists have a PhD."
      }
    ],
    "colleges": "Great science schools: MIT, Stanford, UC Berkeley, UCSD, Johns Hopkins, University of Chicago."
  },
  "doctor": {
    "label": "🩺 Doctor",
    "does": "Checks on people, figures out what is wrong, and helps them feel better.",
    "income": "About $100,000–$250,000+ a year.",
    "day": [
      {
        "time": "",
        "task": "Put on your white coat"
      },
      {
        "time": "",
        "task": "Visit patients in the hospital"
      },
      {
        "time": "",
        "task": "Listen to heartbeats with a stethoscope"
      },
      {
        "time": "",
        "task": "Figure out why someone has a tummy ache"
      },
      {
        "time": "",
        "task": "Give good advice"
      },
      {
        "time": "",
        "task": "Perform a small procedure"
      },
      {
        "time": "",
        "task": "Write notes about each patient"
      },
      {
        "time": "",
        "task": "Help someone go home healthy!"
      }
    ],
    "pathway": [
      {
        "icon": "💊",
        "level": "At Home / Elementary",
        "steps": "Learn about the human body — bones, heart, lungs. Volunteer at health fairs. Show care when people around you are sick."
      },
      {
        "icon": "🏥",
        "level": "Middle School",
        "steps": "Join HOSA health club. Shadow a doctor or nurse. Take biology and health classes."
      },
      {
        "icon": "🩻",
        "level": "High School",
        "steps": "Take AP Biology, AP Chemistry. Volunteer at a hospital. Study hard — medical school is competitive!"
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4 years of college → 4 years of medical school → 3–7 years of training. It's a long road, but doctors help so many people!"
      }
    ],
    "colleges": "Top pre-med schools: Johns Hopkins, Duke, UCSD, UCLA, Emory. Medical schools: Harvard, UCSF, Mayo Clinic."
  },
  "coder": {
    "label": "💻 Coder",
    "does": "Writes instructions that make apps, games, and websites work.",
    "income": "About $70,000–$130,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Sit at your computer"
      },
      {
        "time": "",
        "task": "Look at a bug someone found in your app — something isn't working right"
      },
      {
        "time": "",
        "task": "Figure out what went wrong in the code"
      },
      {
        "time": "",
        "task": "Fix it! Test the app to make sure it works"
      },
      {
        "time": "",
        "task": "Build a new feature for a game"
      },
      {
        "time": "",
        "task": "Share it with your team"
      }
    ],
    "pathway": [
      {
        "icon": "🎮",
        "level": "At Home / Elementary",
        "steps": "Try Scratch at scratch.mit.edu — it's free! Play coding games on Code.org. Make your own simple game or animation."
      },
      {
        "icon": "💡",
        "level": "Middle School",
        "steps": "Learn Python on Khan Academy or freeCodeCamp. Join a coding club. Build a small app or website."
      },
      {
        "icon": "🖥️",
        "level": "High School",
        "steps": "Take AP Computer Science. Enter hackathons. Build apps and put them on GitHub."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Computer science degree, coding bootcamp, or self-teach with a strong portfolio. Many coders are hired based on what they've built!"
      }
    ],
    "colleges": "Top CS schools: MIT, Stanford, Carnegie Mellon, UC Berkeley, Georgia Tech, UCSD."
  },
  "artist": {
    "label": "🎨 Artist",
    "does": "Makes pictures, paintings, sculptures, and other beautiful things.",
    "income": "About $35,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Set up your art space"
      },
      {
        "time": "",
        "task": "Mix just the right colors"
      },
      {
        "time": "",
        "task": "Paint a landscape"
      },
      {
        "time": "",
        "task": "Draw character sketches for a new storybook"
      },
      {
        "time": "",
        "task": "Meet with a client who wants a mural for their restaurant"
      },
      {
        "time": "",
        "task": "Post your new work online"
      },
      {
        "time": "",
        "task": "Head to a gallery opening for a friend"
      }
    ],
    "pathway": [
      {
        "icon": "✏️",
        "level": "At Home / Elementary",
        "steps": "Draw and paint every single day. Fill up sketchbooks. Visit art museums and say what you like and don't like about each piece."
      },
      {
        "icon": "🖌️",
        "level": "Middle School",
        "steps": "Take art class. Try digital art with free tools like Krita. Enter local art contests."
      },
      {
        "icon": "🎭",
        "level": "High School",
        "steps": "Take AP Studio Art. Build your art portfolio. Apply to summer art programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Art school (BFA) or college arts program. Your portfolio is your most important application — keep making things!"
      }
    ],
    "colleges": "Top art schools: RISD, CalArts, SCAD, Pratt Institute, Art Center College of Design (Pasadena)."
  },
  "musician": {
    "label": "🎵 Musician",
    "does": "Plays instruments, sings, writes music, and performs for people.",
    "income": "About $35,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Morning: practice your instrument for an hour"
      },
      {
        "time": "",
        "task": "Afternoon: rehearse songs with your band"
      },
      {
        "time": "",
        "task": "Evening: perform at a concert — the crowd loves it! After the show: sign autographs and talk to fans"
      },
      {
        "time": "",
        "task": "Night: listen back to recordings and make notes"
      }
    ],
    "pathway": [
      {
        "icon": "🎶",
        "level": "At Home / Elementary",
        "steps": "Start learning an instrument — even a recorder or ukulele. Sing along to your favorite songs. Tap out rhythms on anything you can find."
      },
      {
        "icon": "🎸",
        "level": "Middle School",
        "steps": "Join school band, orchestra, or choir. Take private lessons. Learn music theory (the rules of music)."
      },
      {
        "icon": "🎤",
        "level": "High School",
        "steps": "Audition for honor bands and orchestras. Record your own music. Attend summer music programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Music school (conservatory), college music program, or start performing and building your own career. Practice never stops!"
      }
    ],
    "colleges": "Top music schools: Juilliard, Berklee, New England Conservatory, USC Thornton, Eastman."
  },
  "actor": {
    "label": "🎭 Actor",
    "does": "Acts out stories in plays, movies, and shows.",
    "income": "Income can change a lot depending on the job.",
    "day": [
      {
        "time": "",
        "task": "Morning: do vocal warm-ups and stretch your body"
      },
      {
        "time": "",
        "task": "Rehearsal: run through your lines with other actors"
      },
      {
        "time": "",
        "task": "The director gives you notes on how to improve"
      },
      {
        "time": "",
        "task": "Afternoon: film a scene for a commercial"
      },
      {
        "time": "",
        "task": "Evening: perform in front of a live audience"
      },
      {
        "time": "",
        "task": "Take a bow!"
      }
    ],
    "pathway": [
      {
        "icon": "🌟",
        "level": "At Home / Elementary",
        "steps": "Put on shows for your family. Read stories out loud with different voices. Pretend to be different characters."
      },
      {
        "icon": "🎪",
        "level": "Middle School",
        "steps": "Audition for the school play. Try community theater. Watch great actors and study how they move and speak."
      },
      {
        "icon": "🎬",
        "level": "High School",
        "steps": "Perform in every show you can. Attend theater camps. Make short films with friends."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Acting school or theater degree. Build a video reel. Audition, audition, audition!"
      }
    ],
    "colleges": "Top performing arts programs: Juilliard, NYU Tisch, Northwestern, Carnegie Mellon, USC."
  },
  "teacher": {
    "label": "🍎 Teacher",
    "does": "Helps students learn new things every day.",
    "income": "About $50,000–$90,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Greet your students at the door"
      },
      {
        "time": "",
        "task": "Start the day with a read-aloud"
      },
      {
        "time": "",
        "task": "Teach a math lesson using colorful blocks"
      },
      {
        "time": "",
        "task": "Help a student who is struggling — and watch them understand! Grade papers at lunch"
      },
      {
        "time": "",
        "task": "Lead an art project"
      },
      {
        "time": "",
        "task": "Send students home smiling"
      }
    ],
    "pathway": [
      {
        "icon": "📚",
        "level": "At Home / Elementary",
        "steps": "Teach things you know to younger kids, siblings, or friends. Play school. Notice what your favorite teachers do that you like."
      },
      {
        "icon": "🧑‍🏫",
        "level": "Middle School",
        "steps": "Tutor younger students. Volunteer at after-school programs. Take leadership roles in clubs."
      },
      {
        "icon": "📓",
        "level": "High School",
        "steps": "Volunteer in an elementary classroom. Take psychology or child development classes. Look for teacher cadet programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year education degree and a teaching credential. Student teaching (working in a real classroom) is part of the program!"
      }
    ],
    "colleges": "Strong education schools: Michigan, Stanford, Teachers College (Columbia), SDSU, UCLA. Most CSU campuses offer California teaching credentials."
  },
  "nurse": {
    "label": "🌡️ Nurse",
    "does": "Takes care of patients and helps doctors and families.",
    "income": "About $75,000–$120,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Start your shift"
      },
      {
        "time": "",
        "task": "Check on every patient"
      },
      {
        "time": "",
        "task": "Take temperatures and blood pressure"
      },
      {
        "time": "",
        "task": "Give medications"
      },
      {
        "time": "",
        "task": "Help a scared patient feel calmer by explaining what's happening"
      },
      {
        "time": "",
        "task": "Work closely with the doctor on a treatment plan"
      },
      {
        "time": "",
        "task": "Hug a patient on their way home — they got better!"
      }
    ],
    "pathway": [
      {
        "icon": "❤️",
        "level": "At Home / Elementary",
        "steps": "Learn basic first aid. Take care of people around you when they're sick. Visit a nurse if you can and ask them questions."
      },
      {
        "icon": "🩺",
        "level": "Middle School",
        "steps": "Join HOSA health club. Shadow a nurse. Take biology and health classes seriously."
      },
      {
        "icon": "💉",
        "level": "High School",
        "steps": "Volunteer at a hospital or clinic. Take AP Biology. Look into CNA (certified nursing assistant) programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Nursing college program (2 or 4 years) plus a nursing license (NCLEX exam). Many paths to nursing!"
      }
    ],
    "colleges": "Great nursing schools: UCSF, Johns Hopkins, Duke, Emory, University of Pennsylvania, and many community colleges and state universities."
  },
  "counselor": {
    "label": "🧑‍🤝‍🧑 Counselor",
    "does": "Listens to people and helps them solve problems.",
    "income": "About $50,000–$85,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Welcome a student into your office"
      },
      {
        "time": "",
        "task": "Really listen"
      },
      {
        "time": "",
        "task": "Ask questions to help them think through a problem"
      },
      {
        "time": "",
        "task": "Connect a family to helpful resources"
      },
      {
        "time": "",
        "task": "Run a small group for students who want to talk about big feelings"
      },
      {
        "time": "",
        "task": "Write notes and plan for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "💛",
        "level": "At Home / Elementary",
        "steps": "Be a good listener. Practice being kind and non-judgmental. Learn how to name and talk about feelings."
      },
      {
        "icon": "🤝",
        "level": "Middle School",
        "steps": "Join peer mediation or conflict resolution programs. Volunteer with younger kids. Take health and wellness classes."
      },
      {
        "icon": "📖",
        "level": "High School",
        "steps": "Take AP Psychology. Volunteer at a community center. Shadow a school counselor."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Psychology or social work degree. Then a master's degree (MSW or MA in counseling) to become fully licensed."
      }
    ],
    "colleges": "Strong social work and psychology programs: University of Michigan, USC, Columbia, UC Berkeley, Boston College."
  },
  "business_owner": {
    "label": "👔 Business Owner",
    "does": "Starts and runs their own company.",
    "income": "Income changes a lot.",
    "day": [
      {
        "time": "",
        "task": "Check your sales numbers from last night"
      },
      {
        "time": "",
        "task": "Meet with your team to plan the day"
      },
      {
        "time": "",
        "task": "Help a customer with a problem — and solve it! Interview someone who wants to work for you"
      },
      {
        "time": "",
        "task": "Work with a designer on new product packaging"
      },
      {
        "time": "",
        "task": "Celebrate a big order!"
      }
    ],
    "pathway": [
      {
        "icon": "🍋",
        "level": "At Home / Elementary",
        "steps": "Start a small business! Lemonade stand, baked goods, dog walking. Learn what people want and how to charge for it."
      },
      {
        "icon": "💼",
        "level": "Middle School",
        "steps": "Grow your business or try a new idea. Join Junior Achievement or DECA. Learn about money management."
      },
      {
        "icon": "📈",
        "level": "High School",
        "steps": "Start a real side business. Take economics and business classes. Enter entrepreneurship competitions."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Business degree is helpful but not required. Many entrepreneurs start during college. Real-world experience matters a lot!"
      }
    ],
    "colleges": "Top entrepreneurship schools: Babson College, Stanford, MIT, UC Berkeley Haas, Wharton (UPenn)."
  },
  "public_leader": {
    "label": "🏛️ Public Leader",
    "does": "Makes decisions to help their community.",
    "income": "Income changes a lot.",
    "day": [
      {
        "time": "",
        "task": "Read news and community updates in the morning"
      },
      {
        "time": "",
        "task": "Hold a meeting where citizens share their concerns"
      },
      {
        "time": "",
        "task": "Work with a team to solve a community problem"
      },
      {
        "time": "",
        "task": "Give a speech at a school event"
      },
      {
        "time": "",
        "task": "Vote on a new community rule"
      },
      {
        "time": "",
        "task": "Meet with young leaders in your town"
      }
    ],
    "pathway": [
      {
        "icon": "⭐",
        "level": "At Home / Elementary",
        "steps": "Run for class president or student council. Learn about your city government. Attend a town council meeting with a parent."
      },
      {
        "icon": "🗳️",
        "level": "Middle School",
        "steps": "Join student government. Volunteer for local campaigns or civic projects. Practice public speaking."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Government and Economics. Join debate club. Apply for Boys/Girls State program. Intern for a local official."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Political science, law, public policy, or economics degree. Law school or a master's in public policy opens big doors."
      }
    ],
    "colleges": "Great government and policy schools: Harvard Kennedy School, Georgetown, Princeton, UCLA Luskin, UCSD GPS."
  },
  "movie_director": {
    "label": "🎬 Movie Director",
    "does": "Leads a team to make movies or videos.",
    "income": "Income can change a lot.",
    "day": [
      {
        "time": "",
        "task": "Morning: review the day's script and storyboard with your team"
      },
      {
        "time": "",
        "task": "On set: tell actors where to stand and how to feel"
      },
      {
        "time": "",
        "task": "Watch the camera to make sure the shot is perfect"
      },
      {
        "time": "",
        "task": "Afternoon: review yesterday's footage with the editor"
      },
      {
        "time": "",
        "task": "Evening: plan tomorrow's big scene"
      }
    ],
    "pathway": [
      {
        "icon": "📱",
        "level": "At Home / Elementary",
        "steps": "Make short movies on a phone or tablet. Tell stories. Watch great movies and talk about what makes them exciting."
      },
      {
        "icon": "🎥",
        "level": "Middle School",
        "steps": "Make short films for school. Enter student film contests. Learn free video editing software (iMovie, DaVinci Resolve)."
      },
      {
        "icon": "🎞️",
        "level": "High School",
        "steps": "Take film or media arts class. Build a short film portfolio. Submit to youth film festivals."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Film school (BFA) or start making independent films while working your way up in the industry."
      }
    ],
    "colleges": "Top film schools: USC School of Cinematic Arts, NYU Tisch, AFI, UCLA, Chapman University, Emerson College."
  },
  "accountant": {
    "label": "📊 Accountant",
    "does": "Keeps track of money and checks that numbers are right.",
    "income": "About $60,000–$100,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review financial records for a client"
      },
      {
        "time": "",
        "task": "Find a math error — and fix it! Make sure a company paid all its taxes correctly"
      },
      {
        "time": "",
        "task": "Meet with a small business owner to show them how much money they made this year"
      },
      {
        "time": "",
        "task": "Double-check everything before it gets submitted"
      }
    ],
    "pathway": [
      {
        "icon": "🔢",
        "level": "At Home / Elementary",
        "steps": "Practice math every day. Keep track of your own allowance or savings. Learn to use a calculator."
      },
      {
        "icon": "📊",
        "level": "Middle School",
        "steps": "Take every math class available. Learn to use spreadsheets. Play stock market simulation games."
      },
      {
        "icon": "💹",
        "level": "High School",
        "steps": "Take AP Statistics and economics. Join DECA or FBLA (Future Business Leaders of America). Shadow an accountant."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Accounting or business degree (4 years). Then the CPA exam. Big accounting firms hire straight out of college!"
      }
    ],
    "colleges": "Strong accounting programs: University of Illinois, UT Austin, Michigan Ross, NYU Stern, BYU."
  },
  "office_manager": {
    "label": "📁 Office Manager",
    "does": "Keeps an office organized and helps a team work together.",
    "income": "About $45,000–$85,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Arrive early and check the schedule for the day"
      },
      {
        "time": "",
        "task": "Help a new employee get settled in"
      },
      {
        "time": "",
        "task": "Fix a mix-up in the calendar"
      },
      {
        "time": "",
        "task": "Order supplies the office needs"
      },
      {
        "time": "",
        "task": "Organize a team celebration"
      },
      {
        "time": "",
        "task": "Make sure everything runs smoothly so everyone else can do their jobs"
      }
    ],
    "pathway": [
      {
        "icon": "🗂️",
        "level": "At Home / Elementary",
        "steps": "Keep your room and school things organized. Help plan family outings. Practice being responsible and on time."
      },
      {
        "icon": "📅",
        "level": "Middle School",
        "steps": "Take on leadership roles in clubs. Learn to use calendars and to-do lists. Help organize school events."
      },
      {
        "icon": "💼",
        "level": "High School",
        "steps": "Take business and computer applications classes. Work part-time in an office, store, or service job."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Associate's or bachelor's degree in business administration. Or start in an entry-level office role and work your way up."
      }
    ],
    "colleges": "Business administration programs at community colleges and state universities like SDSU, CSULB, Arizona State."
  },
  "banker": {
    "label": "🏦 Banker",
    "does": "Helps people save and use their money wisely.",
    "income": "About $40,000–$90,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Welcome customers into the bank"
      },
      {
        "time": "",
        "task": "Help a family open a savings account for their child"
      },
      {
        "time": "",
        "task": "Explain how a home loan works to someone buying their first house"
      },
      {
        "time": "",
        "task": "Review financial data"
      },
      {
        "time": "",
        "task": "Help a small business get a loan to grow"
      },
      {
        "time": "",
        "task": "Count money accurately at the end of the day"
      }
    ],
    "pathway": [
      {
        "icon": "💰",
        "level": "At Home / Elementary",
        "steps": "Open a savings account. Learn the difference between spending and saving. Practice counting money and making change."
      },
      {
        "icon": "📈",
        "level": "Middle School",
        "steps": "Play stock market games. Learn about budgets. Take math seriously."
      },
      {
        "icon": "💳",
        "level": "High School",
        "steps": "Take economics and AP Statistics. Join DECA. Shadow a banker or financial advisor."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Finance, economics, or business degree. Certifications like CFP and CFA help for financial advisor roles."
      }
    ],
    "colleges": "Strong finance schools: Wharton (UPenn), NYU Stern, Michigan Ross, Georgetown, UT Austin McCombs."
  }
}),
      grades12: attachSource({
  "construction_worker": {
    "label": "👷 Construction Worker",
    "does": "Builds and fixes homes, schools, roads, and other important places.",
    "income": "About $40,000–$60,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Arrive at the job site"
      },
      {
        "time": "",
        "task": "Review the blueprint with the team"
      },
      {
        "time": "",
        "task": "Frame walls for a new house"
      },
      {
        "time": "",
        "task": "Problem-solve when supplies arrive late"
      },
      {
        "time": "",
        "task": "Safety check on the scaffolding"
      },
      {
        "time": "",
        "task": "Clean up and prep materials for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🏠",
        "level": "At Home & Elementary",
        "steps": "Build with cardboard, LEGO, or wood scraps at home. Visit construction sites with a parent. Try drawing buildings you'd like to make."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take shop class. Join robotics or building clubs. Help with home repair projects."
      },
      {
        "icon": "📐",
        "level": "High School",
        "steps": "Enroll in CTE building trades courses. Get a summer job or shadow a contractor. Take geometry and physics."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Apprenticeship program, trade school, or community college. No 4-year degree required!"
      }
    ],
    "colleges": "Trade programs: UTI, community college CTE programs, and apprenticeship programs through building trades unions."
  },
  "mechanic": {
    "label": "🔧 Mechanic",
    "does": "Checks, fixes, and cares for cars, trucks, machines, or engines.",
    "income": "About $45,000–$70,000 a year.",
    "day": [
      {
        "time": "",
        "task": "A car comes in making a funny noise"
      },
      {
        "time": "",
        "task": "You listen carefully and run a diagnostic"
      },
      {
        "time": "",
        "task": "Replace the brake pads"
      },
      {
        "time": "",
        "task": "Change the oil on another vehicle"
      },
      {
        "time": "",
        "task": "Explain to the owner what you fixed"
      },
      {
        "time": "",
        "task": "Order parts for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🔩",
        "level": "At Home & Elementary",
        "steps": "Tinker with broken toys. Watch videos on how engines work. Help a grown-up with simple repairs."
      },
      {
        "icon": "⚙️",
        "level": "Middle School",
        "steps": "Take shop class. Build model cars. Learn basic tools — wrenches, screwdrivers."
      },
      {
        "icon": "🚗",
        "level": "High School",
        "steps": "Take auto tech CTE classes. Work at a repair shop part-time. Compete in SkillsUSA auto contests."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Trade school or community college auto program (1–2 years). Earn ASE certifications. No 4-year degree required!"
      }
    ],
    "colleges": "Strong auto programs: UTI, Lincoln Tech, Wyotech, and community colleges with automotive technology programs."
  },
  "farmer": {
    "label": "🌿 Farmer",
    "does": "Grows food, cares for land, and may work with animals, plants, tools, and weather.",
    "income": "Income can vary a lot, often about $40,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Check on the animals before sunrise"
      },
      {
        "time": "",
        "task": "Inspect the irrigation system"
      },
      {
        "time": "",
        "task": "Meet with an extension agent about a crop pest"
      },
      {
        "time": "",
        "task": "Drive the tractor"
      },
      {
        "time": "",
        "task": "Record data in the farm app"
      },
      {
        "time": "",
        "task": "Review weather forecasts for the week"
      }
    ],
    "pathway": [
      {
        "icon": "🌱",
        "level": "At Home & Elementary",
        "steps": "Grow a plant from seed. Visit a farm or farmers market. Learn about where your food comes from."
      },
      {
        "icon": "🌿",
        "level": "Middle School",
        "steps": "Join 4-H or FFA. Grow a bigger garden. Take earth science and biology."
      },
      {
        "icon": "🚜",
        "level": "High School",
        "steps": "Enroll in agriculture CTE courses. Join FFA and raise an animal or grow a crop. Work on a local farm."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Community college or 4-year degree in agriculture, agribusiness, or environmental science."
      }
    ],
    "colleges": "Top agriculture schools: UC Davis, Iowa State University, Cal Poly SLO, Texas A&M, Cornell University."
  },
  "firefighter": {
    "label": "🚒 Firefighter",
    "does": "Helps people during fires, accidents, medical emergencies, and dangerous situations.",
    "income": "About $50,000–$90,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Shift starts — check all gear"
      },
      {
        "time": "",
        "task": "Run a training drill on hose techniques"
      },
      {
        "time": "",
        "task": "Visit a school to teach fire safety"
      },
      {
        "time": "",
        "task": "Emergency call: structure fire! Respond, assess, and contain"
      },
      {
        "time": "",
        "task": "Debrief with the team"
      },
      {
        "time": "",
        "task": "Station dinner and maintenance"
      }
    ],
    "pathway": [
      {
        "icon": "🚒",
        "level": "At Home & Elementary",
        "steps": "Learn fire safety rules. Visit your local fire station. Practice staying calm in emergencies."
      },
      {
        "icon": "🏃",
        "level": "Middle School",
        "steps": "Get CPR certified. Join a Junior Firefighter program. Stay physically active."
      },
      {
        "icon": "🩺",
        "level": "High School",
        "steps": "Enroll in EMT or public safety CTE courses. Volunteer at a fire department explorer post."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Fire academy (about 6 months). EMT certification. Associate's degree in fire science helps for promotion."
      }
    ],
    "colleges": "Fire science programs: San Diego Miramar College, Columbia Southern University, and local community colleges with fire academy partnerships."
  },
  "engineer": {
    "label": "🏗️ Engineer",
    "does": "Designs and improves buildings, bridges, machines, computers, or systems.",
    "income": "About $75,000–$120,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review 3D design files for a new bridge"
      },
      {
        "time": "",
        "task": "Team meeting on structural calculations"
      },
      {
        "time": "",
        "task": "Site visit to inspect construction"
      },
      {
        "time": "",
        "task": "Run computer simulations"
      },
      {
        "time": "",
        "task": "Update clients on the project timeline"
      },
      {
        "time": "",
        "task": "Revise blueprints with the architect"
      }
    ],
    "pathway": [
      {
        "icon": "🧱",
        "level": "At Home & Elementary",
        "steps": "Build with LEGO Technic or K'Nex. Enter science fairs. Play engineering games like Minecraft or Kerbal Space Program."
      },
      {
        "icon": "🤖",
        "level": "Middle School",
        "steps": "Join robotics club (FLL or FIRST). Build circuits with an Arduino. Take pre-algebra seriously."
      },
      {
        "icon": "📐",
        "level": "High School",
        "steps": "Take AP Physics, AP Calculus, and AP Chemistry. Compete in Science Olympiad. Tour university engineering departments."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year engineering degree. Many specializations: civil, mechanical, electrical, chemical. A Professional Engineer (PE) license comes with experience."
      }
    ],
    "colleges": "Top engineering schools: MIT, Stanford, Georgia Tech, UC San Diego, Cal Poly SLO, Purdue, University of Michigan."
  },
  "scientist": {
    "label": "👩‍🔬 Scientist",
    "does": "Asks questions, tests ideas, studies evidence, and learns new things about the world.",
    "income": "About $60,000–$110,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review overnight lab data"
      },
      {
        "time": "",
        "task": "Prepare specimens and run tests"
      },
      {
        "time": "",
        "task": "Lab meeting to share updates"
      },
      {
        "time": "",
        "task": "Write a section of a research paper"
      },
      {
        "time": "",
        "task": "Peer review a colleague's work"
      },
      {
        "time": "",
        "task": "Plan tomorrow's experiment"
      }
    ],
    "pathway": [
      {
        "icon": "🧪",
        "level": "At Home & Elementary",
        "steps": "Do experiments at home. Read about scientists. Visit science museums and nature centers."
      },
      {
        "icon": "🔬",
        "level": "Middle School",
        "steps": "Enter science fairs. Join a science club. Ask about summer science camps."
      },
      {
        "icon": "🧬",
        "level": "High School",
        "steps": "Take AP Biology, AP Chemistry, or AP Environmental Science. Apply for research internships."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's in a science field. Most research careers require a master's or PhD. Graduate school research assistantships often pay tuition."
      }
    ],
    "colleges": "Strong science schools: MIT, Stanford, Johns Hopkins, UC Berkeley, UCSD, University of Chicago."
  },
  "doctor": {
    "label": "🩺 Doctor",
    "does": "Helps people understand and improve their health.",
    "income": "Often more than $150,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Hospital rounds to check on overnight patients"
      },
      {
        "time": "",
        "task": "Clinic: see scheduled patients, review charts, order tests"
      },
      {
        "time": "",
        "task": "Consult a specialist on a complex case"
      },
      {
        "time": "",
        "task": "Review lab results"
      },
      {
        "time": "",
        "task": "Perform a procedure"
      },
      {
        "time": "",
        "task": "Write detailed notes for each patient"
      }
    ],
    "pathway": [
      {
        "icon": "❤️",
        "level": "At Home & Elementary",
        "steps": "Learn about the human body. Volunteer at health events. Show care when people around you are sick."
      },
      {
        "icon": "🩺",
        "level": "Middle School",
        "steps": "Join HOSA health club. Shadow a doctor or nurse. Take strong science classes."
      },
      {
        "icon": "🏥",
        "level": "High School",
        "steps": "Take AP Biology and AP Chemistry. Volunteer at a hospital or clinic. Research pre-med requirements."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year college (pre-med) → 4-year medical school → 3–7 year residency. A long road, but doctors help so many people!"
      }
    ],
    "colleges": "Strong pre-med programs: Johns Hopkins, Duke, UCSD, UCLA, Emory. Medical schools: Harvard, UCSF, Mayo Clinic."
  },
  "paleontologist": {
    "label": "🦕 Paleontologist",
    "does": "Studies fossils to learn about dinosaurs, ancient animals, plants, and Earth's past.",
    "income": "About $55,000–$100,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Drive to the dig site"
      },
      {
        "time": "",
        "task": "Carefully brush rock away from a fossil with hand tools"
      },
      {
        "time": "",
        "task": "Photograph and GPS-log the find"
      },
      {
        "time": "",
        "task": "Back at the museum lab — clean specimens, catalog fossils"
      },
      {
        "time": "",
        "task": "Work on a scientific paper about last season's discoveries"
      }
    ],
    "pathway": [
      {
        "icon": "🦴",
        "level": "At Home & Elementary",
        "steps": "Visit natural history museums. Collect rocks and learn to identify them. Read about dinosaurs and prehistoric life."
      },
      {
        "icon": "🌍",
        "level": "Middle School",
        "steps": "Join earth science clubs. Attend fossil hunting programs. Take strong biology and earth science."
      },
      {
        "icon": "🔭",
        "level": "High School",
        "steps": "Take AP Biology and earth science. Apply for museum internships. Look for university field programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's in geology, biology, or earth science. Most professional paleontologists earn a PhD. Work in universities, museums, or government."
      }
    ],
    "colleges": "Strong programs: University of Chicago, University of Montana, UC Berkeley, University of Kansas, Yale."
  },
  "coder": {
    "label": "💻 Coder",
    "does": "Writes instructions that help apps, websites, games, and computers work.",
    "income": "About $70,000–$130,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Check overnight bug reports"
      },
      {
        "time": "",
        "task": "Sprint meeting: plan the week's features"
      },
      {
        "time": "",
        "task": "Write code for a new feature"
      },
      {
        "time": "",
        "task": "Code review with a teammate"
      },
      {
        "time": "",
        "task": "Fix a bug causing crashes"
      },
      {
        "time": "",
        "task": "Update project documentation"
      }
    ],
    "pathway": [
      {
        "icon": "🎮",
        "level": "At Home & Elementary",
        "steps": "Try Scratch at scratch.mit.edu (free and fun!). Play coding games on Code.org. Ask to build a simple website."
      },
      {
        "icon": "💡",
        "level": "Middle School",
        "steps": "Learn Python on Khan Academy or freeCodeCamp. Join a coding club or hackathon. Build a small app."
      },
      {
        "icon": "🖥️",
        "level": "High School",
        "steps": "Take AP Computer Science. Enter hackathons. Build a portfolio of projects on GitHub."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "CS degree, coding bootcamp, or self-taught with a strong portfolio. Many employers care more about what you've built than your degree."
      }
    ],
    "colleges": "Top CS schools: MIT, Stanford, Carnegie Mellon, UC Berkeley, Georgia Tech, UCSD."
  },
  "nurse": {
    "label": "🌡️ Nurse",
    "does": "Cares for patients, checks health signs, gives medicine, and helps doctors and families.",
    "income": "About $75,000–$120,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Receive handoff from the night shift"
      },
      {
        "time": "",
        "task": "Check vital signs and give morning medications"
      },
      {
        "time": "",
        "task": "Educate a patient about their diagnosis"
      },
      {
        "time": "",
        "task": "Assist during a procedure"
      },
      {
        "time": "",
        "task": "Document updates in health records"
      },
      {
        "time": "",
        "task": "Detailed handoff to the next nurse"
      }
    ],
    "pathway": [
      {
        "icon": "❤️",
        "level": "At Home & Elementary",
        "steps": "Learn basic first aid with a parent. Show care for people when they're sick. Volunteer at community health events."
      },
      {
        "icon": "🩺",
        "level": "Middle School",
        "steps": "Join HOSA health club. Shadow a nurse if possible. Take biology and health classes seriously."
      },
      {
        "icon": "💉",
        "level": "High School",
        "steps": "Take AP Biology. Volunteer at a hospital. Look into CNA (certified nursing assistant) programs for teens."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Nursing degree (ADN: 2 years or BSN: 4 years) plus the NCLEX licensing exam."
      }
    ],
    "colleges": "Strong nursing programs: UCSF, Johns Hopkins, Duke, Emory, University of Pennsylvania, and community colleges nationwide."
  },
  "artist": {
    "label": "🎨 Artist",
    "does": "Creates pictures, designs, sculptures, digital art, or other visual work.",
    "income": "Income varies a lot, often about $35,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review a client brief for a new logo"
      },
      {
        "time": "",
        "task": "Sketch concepts in your sketchbook"
      },
      {
        "time": "",
        "task": "Refine ideas in Adobe Illustrator"
      },
      {
        "time": "",
        "task": "Video call with client to present options"
      },
      {
        "time": "",
        "task": "Work on a personal painting"
      },
      {
        "time": "",
        "task": "Post work-in-progress to your portfolio website"
      }
    ],
    "pathway": [
      {
        "icon": "✏️",
        "level": "At Home & Elementary",
        "steps": "Draw and paint every day. Fill sketchbooks. Visit art museums. Take every art class available to you."
      },
      {
        "icon": "🖌️",
        "level": "Middle School",
        "steps": "Explore digital art tools (Krita, Canva — both free). Enter local art contests. Study artists you admire."
      },
      {
        "icon": "🎭",
        "level": "High School",
        "steps": "Build an art portfolio. Take AP Studio Art. Apply to summer pre-college art programs. Learn Adobe Illustrator."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Art school (BFA), liberal arts college with arts program, or design school. Your portfolio website is your most important credential."
      }
    ],
    "colleges": "Top art and design schools: RISD, CalArts, Pratt Institute, SCAD, Art Center College of Design (Pasadena), SVA (New York)."
  },
  "actor": {
    "label": "🎭 Actor",
    "does": "Performs characters in plays, shows, movies, videos, or voice acting.",
    "income": "Income varies a lot because acting jobs can be part-time or project-based.",
    "day": [
      {
        "time": "",
        "task": "Morning warm-up: vocal exercises and stretching"
      },
      {
        "time": "",
        "task": "Cast rehearsal for an upcoming production"
      },
      {
        "time": "",
        "task": "Audition for a commercial"
      },
      {
        "time": "",
        "task": "Acting class to work on a new monologue"
      },
      {
        "time": "",
        "task": "Review your script"
      },
      {
        "time": "",
        "task": "Evening performance"
      },
      {
        "time": "",
        "task": "Take a bow!"
      }
    ],
    "pathway": [
      {
        "icon": "🌟",
        "level": "At Home & Elementary",
        "steps": "Put on shows for your family. Read stories aloud with different voices. Pretend to be different characters."
      },
      {
        "icon": "🎪",
        "level": "Middle School",
        "steps": "Audition for community theater. Watch great performances. Try improv classes."
      },
      {
        "icon": "🎬",
        "level": "High School",
        "steps": "Perform in every show you can. Attend summer theater intensives. Create video auditions for student films."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "BFA in acting or theater, conservatory training, or start auditioning professionally. Build your video reel."
      }
    ],
    "colleges": "Top performing arts programs: Juilliard, NYU Tisch, Northwestern, Carnegie Mellon, Yale School of Drama, USC."
  },
  "author": {
    "label": "✍️ Author",
    "does": "Writes stories, books, poems, articles, scripts, or information for readers.",
    "income": "Income varies a lot, often project-based or from book sales.",
    "day": [
      {
        "time": "",
        "task": "Morning pages: free write for 30 minutes"
      },
      {
        "time": "",
        "task": "Draft a new chapter"
      },
      {
        "time": "",
        "task": "Edit yesterday's writing"
      },
      {
        "time": "",
        "task": "Research for an article"
      },
      {
        "time": "",
        "task": "Reply to your editor's notes on a manuscript"
      },
      {
        "time": "",
        "task": "Evening: read — great writers are constant readers"
      }
    ],
    "pathway": [
      {
        "icon": "📖",
        "level": "At Home & Elementary",
        "steps": "Write stories — any stories! Keep a journal. Read as much as you possibly can across every genre."
      },
      {
        "icon": "📝",
        "level": "Middle School",
        "steps": "Submit writing to school publications and contests. Read widely in your genre. Start a blog or writing notebook."
      },
      {
        "icon": "✒️",
        "level": "High School",
        "steps": "Take AP English Language and Composition. Write for the school newspaper or literary magazine. Enter the Scholastic Art & Writing Awards."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "English, creative writing, or journalism degree. MFA programs for advanced writers. Build a portfolio through freelancing and independent publishing."
      }
    ],
    "colleges": "Strong writing programs: University of Iowa (Iowa Writers' Workshop), NYU, Columbia, Emerson College, UC Davis."
  },
  "musician": {
    "label": "🎵 Musician",
    "does": "Sings, plays instruments, writes music, records songs, or performs for audiences.",
    "income": "Income varies a lot, often about $35,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Practice scales and repertoire for 2 hours"
      },
      {
        "time": "",
        "task": "Compose a new piece using notation software"
      },
      {
        "time": "",
        "task": "Recording session in the studio"
      },
      {
        "time": "",
        "task": "Band rehearsal for the weekend show"
      },
      {
        "time": "",
        "task": "Live performance in the evening"
      },
      {
        "time": "",
        "task": "Review recordings and make notes"
      }
    ],
    "pathway": [
      {
        "icon": "🎶",
        "level": "At Home & Elementary",
        "steps": "Start an instrument — any instrument. Practice daily, even just 10 minutes. Listen to many genres of music actively."
      },
      {
        "icon": "🎸",
        "level": "Middle School",
        "steps": "Join school band, orchestra, or choir. Take private lessons if possible. Learn music theory."
      },
      {
        "icon": "🎤",
        "level": "High School",
        "steps": "Audition for competitive ensembles. Record original songs. Attend summer music programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Music conservatory, college music program, or self-producing and touring. Practice never stops!"
      }
    ],
    "colleges": "Top music schools: Juilliard, Berklee, New England Conservatory, USC Thornton, Eastman School of Music."
  },
  "photographer": {
    "label": "📸 Photographer",
    "does": "Takes photos of people, places, events, products, nature, or news.",
    "income": "About $35,000–$70,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Sunrise shoot for a nature project"
      },
      {
        "time": "",
        "task": "Edit yesterday's photos in Lightroom"
      },
      {
        "time": "",
        "task": "Meet a client to book a shoot"
      },
      {
        "time": "",
        "task": "Product photography session for a local business"
      },
      {
        "time": "",
        "task": "Update your portfolio website"
      },
      {
        "time": "",
        "task": "Watch a documentary for visual inspiration"
      }
    ],
    "pathway": [
      {
        "icon": "📷",
        "level": "At Home & Elementary",
        "steps": "Use your family's phone to practice composition. Study what makes a photo interesting. Visit photography exhibits."
      },
      {
        "icon": "🖼️",
        "level": "Middle School",
        "steps": "Get access to a basic camera. Learn about exposure: aperture, shutter speed, and ISO. Start a photo journal."
      },
      {
        "icon": "🎞️",
        "level": "High School",
        "steps": "Take a photography class. Enter photo contests. Build a portfolio website. Learn Adobe Lightroom."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "BFA in photography, film degree, or visual communications. Many photographers are self-taught with a strong portfolio."
      }
    ],
    "colleges": "Strong photography programs: RISD, Brooks Institute, Syracuse (Newhouse), NYU Tisch, SCAD, Art Center (Pasadena)."
  },
  "teacher": {
    "label": "🍎 Teacher",
    "does": "Helps students learn skills, understand ideas, and grow as people.",
    "income": "About $50,000–$90,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Greet students at the door"
      },
      {
        "time": "",
        "task": "Teach a lesson on the Civil Rights Movement"
      },
      {
        "time": "",
        "task": "Small group reading support"
      },
      {
        "time": "",
        "task": "Grade essays at lunch"
      },
      {
        "time": "",
        "task": "Collaborate with a colleague"
      },
      {
        "time": "",
        "task": "Call a parent about a student's progress"
      },
      {
        "time": "",
        "task": "Plan next week's unit"
      }
    ],
    "pathway": [
      {
        "icon": "📚",
        "level": "At Home & Elementary",
        "steps": "Teach things you know to younger kids or friends. Play school. Notice what your favorite teachers do that inspires you."
      },
      {
        "icon": "🧑‍🏫",
        "level": "Middle School",
        "steps": "Tutor younger students. Volunteer at after-school programs. Take leadership roles in clubs."
      },
      {
        "icon": "📓",
        "level": "High School",
        "steps": "Volunteer in an elementary classroom. Take psychology or child development classes. Look into teacher cadet programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year education degree or subject-area degree + credential program. Student teaching (a full semester in a real classroom) is required."
      }
    ],
    "colleges": "Strong education programs: University of Michigan, Stanford, Teachers College (Columbia), SDSU, UCLA. All CSU campuses offer California teaching credentials."
  },
  "counselor": {
    "label": "🧑‍🤝‍🧑 Counselor",
    "does": "Listens to people, helps them solve problems, and supports feelings and choices.",
    "income": "About $50,000–$85,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review case notes before appointments"
      },
      {
        "time": "",
        "task": "Individual session: help a student work through anxiety"
      },
      {
        "time": "",
        "task": "Group session with students navigating family changes"
      },
      {
        "time": "",
        "task": "Collaborate with teachers on a student's plan"
      },
      {
        "time": "",
        "task": "Connect a family to community resources"
      },
      {
        "time": "",
        "task": "Complete documentation"
      }
    ],
    "pathway": [
      {
        "icon": "💛",
        "level": "At Home & Elementary",
        "steps": "Be a kind and trustworthy friend. Practice listening without judgment. Learn how to name and talk about feelings."
      },
      {
        "icon": "🤝",
        "level": "Middle School",
        "steps": "Join peer mediation or conflict resolution programs. Volunteer with younger kids. Take health and wellness classes."
      },
      {
        "icon": "📖",
        "level": "High School",
        "steps": "Take AP Psychology. Volunteer at a community center or crisis hotline. Shadow a school counselor."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Psychology, social work, or human development degree. Then a master's (MSW or MA in counseling) for licensure."
      }
    ],
    "colleges": "Strong social work and psychology programs: University of Michigan, USC, Columbia, UC Berkeley, Boston College."
  },
  "coach": {
    "label": "🤸 Coach",
    "does": "Teaches athletes skills, teamwork, practice habits, and game strategy.",
    "income": "Income varies a lot, often about $35,000–$75,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Early morning lift with the team"
      },
      {
        "time": "",
        "task": "Film session reviewing game tape"
      },
      {
        "time": "",
        "task": "Individual technique sessions"
      },
      {
        "time": "",
        "task": "Plan next week's practice structure"
      },
      {
        "time": "",
        "task": "Afternoon practice: drills, scrimmage, conditioning"
      },
      {
        "time": "",
        "task": "Post-practice individual check-ins with athletes"
      }
    ],
    "pathway": [
      {
        "icon": "⚽",
        "level": "At Home & Elementary",
        "steps": "Play multiple sports. Help younger kids learn games. Study what great coaches do that inspires their athletes."
      },
      {
        "icon": "🏆",
        "level": "Middle School",
        "steps": "Become a team captain. Help coach youth sports leagues. Learn the strategy behind your sport."
      },
      {
        "icon": "🏋️",
        "level": "High School",
        "steps": "Compete at a high level and coach youth leagues on the side. Take anatomy and physiology. Get CPR certified."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Kinesiology, physical education, or sports science degree. Earn coaching certifications (CSCS, NASM). Graduate assistantships let you coach while earning a master's."
      }
    ],
    "colleges": "Strong kinesiology programs: Ohio State, University of Florida, Penn State, Oregon, SDSU, Cal Poly."
  },
  "social_worker": {
    "label": "🧑‍⚕️ Social Worker",
    "does": "Helps families and people find support, solve problems, and stay safe.",
    "income": "About $50,000–$80,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Review case files for home visits"
      },
      {
        "time": "",
        "task": "Visit a family to assess their safety and support needs"
      },
      {
        "time": "",
        "task": "Connect a client to food and rental assistance"
      },
      {
        "time": "",
        "task": "Meet with a hospital team about discharge planning"
      },
      {
        "time": "",
        "task": "Complete court-required documentation"
      }
    ],
    "pathway": [
      {
        "icon": "💙",
        "level": "At Home & Elementary",
        "steps": "Learn about fairness. Volunteer in community service projects. Notice when others need help and act on it."
      },
      {
        "icon": "🏘️",
        "level": "Middle School",
        "steps": "Join student government or social justice clubs. Organize a community service project."
      },
      {
        "icon": "📋",
        "level": "High School",
        "steps": "Volunteer at a food bank, shelter, or youth organization. Take AP Government or AP Psychology. Intern with a nonprofit."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's of Social Work (BSW) or psychology. Master's of Social Work (MSW) required for clinical or licensed (LCSW) positions."
      }
    ],
    "colleges": "Top social work programs: University of Michigan, Columbia, Washington University in St. Louis, USC, UC Berkeley."
  },
  "business_owner": {
    "label": "👔 Business Owner",
    "does": "Starts or runs a business, makes plans, solves problems, and works with customers.",
    "income": "Income varies a lot because owners earn different amounts.",
    "day": [
      {
        "time": "",
        "task": "Review sales numbers and customer messages"
      },
      {
        "time": "",
        "task": "Team standup meeting"
      },
      {
        "time": "",
        "task": "Pitch your business to a potential investor"
      },
      {
        "time": "",
        "task": "Solve a supply chain problem"
      },
      {
        "time": "",
        "task": "Work with a designer on new product packaging"
      },
      {
        "time": "",
        "task": "Write social media content for your brand"
      }
    ],
    "pathway": [
      {
        "icon": "🍋",
        "level": "At Home & Elementary",
        "steps": "Start a small business! Lemonade stand, baked goods, lawn mowing. Learn what customers want and how to price things."
      },
      {
        "icon": "💼",
        "level": "Middle School",
        "steps": "Grow your business or try a new one. Join DECA or Junior Achievement programs. Study businesses you admire."
      },
      {
        "icon": "📈",
        "level": "High School",
        "steps": "Start a real side business or social enterprise. Take economics and business classes. Enter youth entrepreneurship competitions."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Business degree helpful but not required. Many entrepreneurs start during or just after college. Real-world experience matters most."
      }
    ],
    "colleges": "Top entrepreneurship schools: Babson College, Stanford, MIT, UC Berkeley Haas, Wharton (UPenn)."
  },
  "salesperson": {
    "label": "📢 Salesperson",
    "does": "Helps people understand products or services and decide what to buy.",
    "income": "About $35,000–$90,000 a year, depending on the job.",
    "day": [
      {
        "time": "",
        "task": "Review your sales pipeline"
      },
      {
        "time": "",
        "task": "Cold outreach: email and call new prospects"
      },
      {
        "time": "",
        "task": "Product demo with a potential client"
      },
      {
        "time": "",
        "task": "Follow up with last week's prospects"
      },
      {
        "time": "",
        "task": "Team training on new features"
      },
      {
        "time": "",
        "task": "Prepare a proposal for a major account"
      }
    ],
    "pathway": [
      {
        "icon": "💬",
        "level": "At Home & Elementary",
        "steps": "Practice explaining things clearly. Run a small business. Notice how salespeople make you feel valued as a customer."
      },
      {
        "icon": "🗣️",
        "level": "Middle School",
        "steps": "Join debate or speech club. Sell items for school fundraisers. Notice what makes people say yes to an idea."
      },
      {
        "icon": "🏪",
        "level": "High School",
        "steps": "Take a marketing, communication, or business elective. Participate in DECA competitions. Get a part-time retail or customer service job."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Business, communications, or marketing degree. Many sales careers are open to high school graduates with strong interpersonal skills."
      }
    ],
    "colleges": "Strong business and marketing programs: Wharton (UPenn), Michigan Ross, Indiana Kelley, ASU, UC Davis."
  },
  "public_leader": {
    "label": "🏛️ Public Leader",
    "does": "Makes decisions, listens to people, and helps solve community problems.",
    "income": "Income varies a lot by job and city.",
    "day": [
      {
        "time": "",
        "task": "Read briefings on pending policy decisions"
      },
      {
        "time": "",
        "task": "Town hall meeting: listen to constituent concerns"
      },
      {
        "time": "",
        "task": "Meet with the budget director"
      },
      {
        "time": "",
        "task": "Press conference on a new initiative"
      },
      {
        "time": "",
        "task": "Review a proposed ordinance"
      },
      {
        "time": "",
        "task": "Community event: youth leadership ceremony"
      }
    ],
    "pathway": [
      {
        "icon": "⭐",
        "level": "At Home & Elementary",
        "steps": "Run for class president or student council. Learn about your city government. Attend a city council meeting with a parent."
      },
      {
        "icon": "🗳️",
        "level": "Middle School",
        "steps": "Join student government. Volunteer for local campaigns or civic organizations. Practice public speaking and debate."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Government and Economics. Join debate club. Apply for Boys/Girls State. Intern for a local official."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Political science, law, public policy, or economics degree. Law school or a master's in public policy (MPP) opens many doors."
      }
    ],
    "colleges": "Great government and policy schools: Harvard Kennedy School, Georgetown, Princeton Woodrow Wilson, UCLA Luskin, UCSD GPS."
  },
  "movie_director": {
    "label": "🎬 Movie Director",
    "does": "Leads a film or video project and helps actors, cameras, sound, and story work together.",
    "income": "Income varies a lot because many projects are temporary.",
    "day": [
      {
        "time": "",
        "task": "Pre-production meeting: review storyboards with the cinematographer"
      },
      {
        "time": "",
        "task": "Casting session: watch actors audition"
      },
      {
        "time": "",
        "task": "On set: direct a key scene, reviewing each take on the monitor"
      },
      {
        "time": "",
        "task": "Editing session on last week's footage"
      },
      {
        "time": "",
        "task": "Screen a rough cut with your producing team"
      }
    ],
    "pathway": [
      {
        "icon": "📱",
        "level": "At Home & Elementary",
        "steps": "Make short movies on a phone or tablet. Tell stories. Watch great films and talk about what makes them work."
      },
      {
        "icon": "🎥",
        "level": "Middle School",
        "steps": "Make short films for school. Enter student film contests. Learn free video editing (iMovie, DaVinci Resolve)."
      },
      {
        "icon": "🎞️",
        "level": "High School",
        "steps": "Take film or media arts class. Build a short film portfolio. Submit to youth film festivals."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Film school BFA, or work your way up from entry-level positions (production assistant, editor's assistant)."
      }
    ],
    "colleges": "Top film schools: USC School of Cinematic Arts, NYU Tisch, AFI, UCLA, Chapman University, Emerson College."
  },
  "adventure_guide": {
    "label": "🗺️ Adventure Guide",
    "does": "Leads people through outdoor activities like hiking, camping, climbing, or nature trips.",
    "income": "About $30,000–$65,000 a year.",
    "day": [
      {
        "time": "",
        "task": "Pack gear and check weather"
      },
      {
        "time": "",
        "task": "Lead a group on a backcountry trail teaching plant identification"
      },
      {
        "time": "",
        "task": "Treat a minor ankle sprain on the trail"
      },
      {
        "time": "",
        "task": "Teach map and compass navigation at a scenic overlook"
      },
      {
        "time": "",
        "task": "Set up camp"
      },
      {
        "time": "",
        "task": "Campfire, stars, and reflections"
      }
    ],
    "pathway": [
      {
        "icon": "🌲",
        "level": "At Home & Elementary",
        "steps": "Spend time outdoors. Learn to identify plants and animals near your home. Camp with family or a scouting program."
      },
      {
        "icon": "🏕️",
        "level": "Middle School",
        "steps": "Join Boy Scouts, Girl Scouts, or a similar outdoor program. Take a wilderness first aid class. Hike harder trails."
      },
      {
        "icon": "🧭",
        "level": "High School",
        "steps": "Lead outdoor trips or become a junior counselor at a camp. Get WFR certified. Take ecology or environmental science."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Outdoor education degree, environmental science program, or NOLS certificate. Many guides work seasonally while continuing education."
      }
    ],
    "colleges": "Strong outdoor education programs: University of Utah, Prescott College, Colorado State, Warren Wilson College, NAU."
  },
  "banker": {
    "label": "🏦 Financial Advisor / Banker",
    "does": "Analyzes financial data, advises clients on investments and savings, manages accounts, and helps individuals or organizations plan for the future.",
    "income": "About $55,000–$100,000+ per year; financial advisors often earn more with experience.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review markets and economic news"
      },
      {
        "time": "9:30 AM",
        "task": "Client meeting: help a family plan for college savings and retirement"
      },
      {
        "time": "11:00 AM",
        "task": "Review a loan application from a small business"
      },
      {
        "time": "1:00 PM",
        "task": "Update client portfolio recommendations"
      },
      {
        "time": "3:00 PM",
        "task": "Compliance review: ensure account documentation is in order"
      },
      {
        "time": "4:30 PM",
        "task": "Continuing education on new tax law changes"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Start a savings account. Learn the difference between needs and wants. Practice keeping track of your money."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Play stock market simulation games (e.g., SIFMA Foundation's Stock Market Game). Learn about budgeting. Take math seriously."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take economics and AP Statistics. Participate in DECA financial services events. Shadow a financial advisor or banker."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Finance, economics, or business degree. CFP (Certified Financial Planner) or CFA (Chartered Financial Analyst) certification for advanced roles."
      }
    ],
    "colleges": "Strong finance programs: Wharton (UPenn), NYU Stern, Michigan Ross, Georgetown McDonough, UT Austin McCombs, and many state universities with strong business schools."
  },
  "accountant": {
    "label": "📊 Accountant / Financial Analyst",
    "does": "Prepares and audits financial statements, tracks organizational spending, ensures compliance with tax law, and provides financial analysis.",
    "income": "About $60,000–$110,000 per year.",
    "day": [
      {
        "time": "8:30 AM",
        "task": "Review last month's financial statements for a client"
      },
      {
        "time": "10:00 AM",
        "task": "Audit meeting: go through expense records"
      },
      {
        "time": "12:00 PM",
        "task": "Prepare quarterly tax estimates"
      },
      {
        "time": "2:00 PM",
        "task": "Model out a financial forecast for a growing company"
      },
      {
        "time": "4:00 PM",
        "task": "Meet with a client to explain their financials"
      },
      {
        "time": "5:00 PM",
        "task": "Update spreadsheets and reconcile accounts"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Practice math every day — especially mental math. Help keep track of family expenses or a small savings goal."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take every math class available. Learn to use spreadsheets. Study how businesses earn and spend money."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Statistics and economics. Compete in DECA or FBLA. Shadow an accountant during tax season."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Accounting or finance degree (4 years). CPA exam after 150 college credit hours. Big 4 firms (Deloitte, PwC, EY, KPMG) hire heavily from college."
      }
    ],
    "colleges": "Strong accounting programs: University of Illinois Urbana-Champaign, UT Austin, Michigan Ross, NYU Stern, BYU, and many state universities with AACSB-accredited business schools."
  },
  "office_manager": {
    "label": "📁 Office Manager / Operations Coordinator",
    "does": "Keeps a workplace or organization running efficiently — managing schedules, coordinating teams, handling logistics, and solving day-to-day operational problems.",
    "income": "About $45,000–$85,000 per year.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review today's calendar and confirm all meetings"
      },
      {
        "time": "9:00 AM",
        "task": "Onboard a new employee"
      },
      {
        "time": "11:00 AM",
        "task": "Coordinate with IT on a tech issue"
      },
      {
        "time": "1:00 PM",
        "task": "Manage vendor invoices and check budget tracking"
      },
      {
        "time": "2:30 PM",
        "task": "Organize company event logistics"
      },
      {
        "time": "4:30 PM",
        "task": "Prepare the weekly status report for the director"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Keep your room, backpack, and schoolwork organized. Help plan family events. Practice being responsible with tasks."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Volunteer to help organize school events. Take on leadership roles that require coordinating others. Learn to use calendars and task lists."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take business, communications, and computer applications classes. Work part-time in a customer service or admin role."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Associate's or bachelor's in business administration. Many office managers start in entry-level admin roles and advance through skill and reliability."
      }
    ],
    "colleges": "Strong business administration programs at most community colleges (2-year AA) and 4-year programs at state universities like SDSU, CSULB, Arizona State, and many others nationwide."
  },
  "postal_worker": {
    "label": "📬 Postal / Logistics Professional",
    "does": "Processes and delivers mail and packages with accuracy and reliability; some roles involve supervising routes or managing distribution centers.",
    "income": "About $45,000–$70,000 per year with federal benefits for postal employees.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Sort the morning mail load by neighborhood"
      },
      {
        "time": "7:30 AM",
        "task": "Load the vehicle and verify the manifest"
      },
      {
        "time": "8:00 AM",
        "task": "Begin the delivery route"
      },
      {
        "time": "12:00 PM",
        "task": "Return undeliverable packages and pick up outgoing mail"
      },
      {
        "time": "2:30 PM",
        "task": "Complete end-of-day paperwork"
      },
      {
        "time": "3:00 PM",
        "task": "Done — and your evenings are your own"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Learn to be responsible and follow through on commitments. Take pride in doing things accurately."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take geography and map skills seriously. Practice organization and time management."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Work part-time in delivery, retail, or customer service. Explore logistics and supply chain as career fields."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "High school diploma required. USPS has its own hiring and training process. Logistics careers at UPS, FedEx, or Amazon may offer management tracks with or without a degree."
      }
    ],
    "colleges": "For logistics management and supply chain: Michigan State, Penn State, Arizona State, and community colleges with logistics and operations management certificates."
  },
  "cashier": {
    "label": "💰 Customer Service / Retail Professional",
    "does": "Helps customers with purchases, processes transactions accurately, resolves issues, and contributes to a positive store environment.",
    "income": "About $28,000–$45,000 per year for full-time roles; varies widely.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Open the register and prepare the checkout area"
      },
      {
        "time": "10:00 AM",
        "task": "Greet customers, process purchases, and handle questions"
      },
      {
        "time": "12:00 PM",
        "task": "Handle a return while keeping the line moving"
      },
      {
        "time": "2:00 PM",
        "task": "Help a customer find a product"
      },
      {
        "time": "4:00 PM",
        "task": "Balance the register"
      },
      {
        "time": "5:00 PM",
        "task": "Restock shelves and prep for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Practice good manners and patience. Learn to count money and make change. Notice how businesses treat their customers."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Volunteer in service roles. Learn to communicate clearly with all kinds of people. Study business and money management."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Get a part-time job in retail or food service. Take business or marketing classes."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Many customer service roles hire high school graduates. Advancement to management typically requires demonstrated leadership and may benefit from a business degree."
      }
    ],
    "colleges": "Retail management pathways through community college business programs, or 4-year retail management degrees at schools like Michigan State, Ball State, and LIM College."
  }
}),
      grades35: attachSource({
  "construction_worker": {
    "label": "👷 Construction Worker",
    "does": "Plans and constructs buildings, roads, and structures. Works with blueprints, tools, materials, and a team to bring designs to life.",
    "income": "About $45,000–$75,000 per year; skilled trades can earn significantly more.",
    "day": [
      {
        "time": "7:00 AM",
        "task": "Arrive at the job site and review the day's blueprints with your foreman"
      },
      {
        "time": "8:00 AM",
        "task": "Frame walls for a new house, measure twice, nail once"
      },
      {
        "time": "11:00 AM",
        "task": "Problem-solve with the team when the delivery arrives short on lumber"
      },
      {
        "time": "1:00 PM",
        "task": "Safety check on scaffolding before afternoon work"
      },
      {
        "time": "3:00 PM",
        "task": "Clean up the site, log progress, and prep materials for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Build things at home — cardboard, LEGO, wood scraps. Visit construction sites with a parent. Try art and drawing classes to understand scale and design."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take shop class or any hands-on elective. Join robotics club. Help with home repair projects with a parent or guardian."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Enroll in Career & Technical Education (CTE) building trades courses. Apply for a summer job or shadow a contractor. Take geometry and physics."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Apprenticeship programs (free, paid on-the-job training), trade school, or community college construction certificates. No 4-year degree required."
      }
    ],
    "colleges": "Strong construction management programs: Arizona State University, Purdue University, Cal Poly San Luis Obispo, Milwaukee School of Engineering, and community college CTE pathways nationwide."
  },
  "mechanic": {
    "label": "🔧 Mechanic",
    "does": "Diagnoses mechanical problems, repairs engines and parts, and performs maintenance on vehicles or other equipment.",
    "income": "About $45,000–$80,000 per year, depending on specialty and certifications.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Check in the first car and run a diagnostic scan"
      },
      {
        "time": "9:00 AM",
        "task": "Replace brake pads while listening to the engine idle"
      },
      {
        "time": "11:30 AM",
        "task": "Explain the repair clearly to the car owner"
      },
      {
        "time": "1:00 PM",
        "task": "Work on an oil change and tire rotation"
      },
      {
        "time": "3:30 PM",
        "task": "Update digital records and order parts for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Tinker with broken toys or electronics. Watch tutorials on how engines work. Visit an auto shop with a parent."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take shop class. Build model engines or RC cars. Learn basic tools — wrenches, screwdrivers, multimeters."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take auto tech CTE courses. Compete in SkillsUSA automotive events. Get a part-time job at a garage."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Vocational school or community college automotive programs (1–2 years). Earn ASE (Automotive Service Excellence) certifications."
      }
    ],
    "colleges": "Strong automotive technology programs: UTI (Universal Technical Institute), Wyotech, Lincoln Tech, community colleges nationwide, and manufacturer-specific training (BMW, Toyota, Ford ASSET programs)."
  },
  "farmer": {
    "label": "🌿 Farmer / Agricultural Scientist",
    "does": "Manages land and crops or livestock; may also research sustainable farming methods or agricultural technology.",
    "income": "Highly variable — from $40,000 to $100,000+ depending on scale and specialty.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Check on livestock before sunrise"
      },
      {
        "time": "7:30 AM",
        "task": "Inspect irrigation systems and soil moisture sensors"
      },
      {
        "time": "10:00 AM",
        "task": "Meet with an agricultural extension agent about a new crop pest"
      },
      {
        "time": "1:00 PM",
        "task": "Drive the tractor to turn a field"
      },
      {
        "time": "4:00 PM",
        "task": "Record crop data in the farm management app"
      },
      {
        "time": "6:00 PM",
        "task": "Review weather forecasts for the week"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Grow plants from seeds at home. Visit a farm or farmers market. Learn about where food comes from."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join 4-H or FFA (Future Farmers of America). Grow a small garden. Take earth science and biology classes."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Enroll in agriculture CTE courses. Raise an animal or grow a crop through FFA. Work or volunteer on a local farm."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Community college, 4-year degree in agriculture, agribusiness, plant science, or environmental science. Many farms also train through apprenticeships."
      }
    ],
    "colleges": "Top agriculture programs: UC Davis, Iowa State University, Cornell University, Texas A&M, Cal Poly San Luis Obispo, and community colleges with ag programs across rural regions."
  },
  "firefighter": {
    "label": "🚒 Firefighter / EMT",
    "does": "Responds to fires, medical emergencies, and rescue situations; educates communities about safety.",
    "income": "About $50,000–$90,000 per year with benefits.",
    "day": [
      {
        "time": "7:00 AM",
        "task": "Shift begins; check all gear and equipment"
      },
      {
        "time": "9:00 AM",
        "task": "Training drill — practice hose techniques and ladder placement"
      },
      {
        "time": "11:00 AM",
        "task": "Community outreach at a local school"
      },
      {
        "time": "1:30 PM",
        "task": "Emergency call: structure fire downtown. Respond, assess, contain"
      },
      {
        "time": "4:00 PM",
        "task": "Debrief and file incident reports"
      },
      {
        "time": "6:00 PM",
        "task": "Station maintenance and dinner with the crew"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Learn fire safety rules. Visit your local fire station. Practice staying calm in emergencies."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Get CPR certified (many programs start at age 12). Join a Junior Firefighter program if available. Stay physically active."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Enroll in EMT or public safety CTE courses. Volunteer at a fire department explorer post. Take health, anatomy, and PE seriously."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Fire academy (typically 6 months). EMT-Basic or Paramedic certification. Associate's degree in fire science helps for promotion."
      }
    ],
    "colleges": "Fire science and emergency management programs: San Diego Miramar College, Columbia Southern University, Oklahoma State University, and local community colleges with fire academy partnerships."
  },
  "engineer": {
    "label": "🏗️ Engineer",
    "does": "Applies science and math to design systems, machines, buildings, and technology that solve real-world problems.",
    "income": "About $75,000–$130,000 per year depending on field.",
    "day": [
      {
        "time": "8:30 AM",
        "task": "Review 3D design files for a new bridge support system"
      },
      {
        "time": "10:00 AM",
        "task": "Team meeting to discuss structural load calculations"
      },
      {
        "time": "11:30 AM",
        "task": "Site visit to inspect concrete pours"
      },
      {
        "time": "1:30 PM",
        "task": "Run computer simulations to test failure points"
      },
      {
        "time": "3:30 PM",
        "task": "Update client on project timeline"
      },
      {
        "time": "4:30 PM",
        "task": "Collaborate with architects on revised blueprints"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Build with LEGO Technic or K'Nex. Enter science fairs. Play engineering-based games like Minecraft or Kerbal Space Program."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join robotics club (FLL or FIRST). Take pre-algebra and science seriously. Build simple circuits with an Arduino or Raspberry Pi."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Physics, AP Calculus, and AP Chemistry. Compete in Science Olympiad or FIRST Robotics. Tour university engineering departments."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year engineering degree (civil, mechanical, electrical, chemical, etc.). Many engineers earn a Professional Engineer (PE) license after experience."
      }
    ],
    "colleges": "Top engineering schools: MIT, Stanford, Georgia Tech, UC San Diego, Cal Poly SLO, Purdue, University of Michigan, and Harvey Mudd. Many strong programs exist at state universities."
  },
  "scientist": {
    "label": "👩‍🔬 Scientist / Researcher",
    "does": "Formulates hypotheses, conducts controlled experiments, analyzes data, and publishes findings to advance human knowledge.",
    "income": "About $60,000–$115,000 per year; varies widely by field and sector.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review overnight data from the experiment in the lab"
      },
      {
        "time": "9:30 AM",
        "task": "Prepare specimens and run tests"
      },
      {
        "time": "11:30 AM",
        "task": "Lab meeting where the team shares updates"
      },
      {
        "time": "1:00 PM",
        "task": "Write a section of a research paper"
      },
      {
        "time": "3:00 PM",
        "task": "Peer review a colleague's draft"
      },
      {
        "time": "4:30 PM",
        "task": "Update your research journal and plan tomorrow's experiment"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Do experiments at home (vinegar + baking soda, grow crystals). Read about scientists. Visit science museums."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Enter science fairs. Join a science club. Ask teachers about summer science camps."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Biology, AP Chemistry, or AP Environmental Science. Apply for research internships. Shadow a university researcher."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's degree in a science field. Most research careers require a master's or PhD. Paid research assistantships are common in graduate school."
      }
    ],
    "colleges": "Strong science research programs: MIT, Stanford, Johns Hopkins, UC Berkeley, University of Chicago, UCSD, and many large state research universities with funded lab programs."
  },
  "doctor": {
    "label": "🩺 Doctor / Physician",
    "does": "Diagnoses illnesses, prescribes treatment, performs procedures, and guides patients toward better health outcomes.",
    "income": "Generally $150,000–$300,000+ per year after completing training.",
    "day": [
      {
        "time": "7:00 AM",
        "task": "Hospital rounds: check in on patients admitted overnight"
      },
      {
        "time": "9:00 AM",
        "task": "Clinic hours: see scheduled patients, review charts, order tests"
      },
      {
        "time": "12:00 PM",
        "task": "Consult with a specialist about a complex case"
      },
      {
        "time": "1:00 PM",
        "task": "Review lab results and update treatment plans"
      },
      {
        "time": "3:00 PM",
        "task": "Perform a minor procedure"
      },
      {
        "time": "5:00 PM",
        "task": "Dictate notes and sign off on prescriptions"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Volunteer at community health events. Read about the human body. Care for others around you who are sick."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join HOSA (Health Occupations Students of America). Take strong science classes. Shadow a doctor or nurse if possible."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Biology, AP Chemistry, AP Statistics. Volunteer at a hospital or clinic. Research pre-med requirements at colleges you like."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year college (pre-med) → 4-year medical school → 3–7 year residency. Total training: about 11–15 years. It's a long road, but it pays off."
      }
    ],
    "colleges": "Strong pre-med programs: Johns Hopkins, Duke, UCSD, UCLA, University of Michigan, NYU, Emory. Medical schools include Mayo Clinic, Harvard, UCSF, and others."
  },
  "paleontologist": {
    "label": "🦕 Paleontologist",
    "does": "Excavates and studies fossils to reconstruct ancient ecosystems, track evolutionary history, and understand climate change.",
    "income": "About $55,000–$100,000 per year.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Drive to the dig site"
      },
      {
        "time": "8:00 AM",
        "task": "Carefully brush rock away from a newly discovered bone"
      },
      {
        "time": "12:00 PM",
        "task": "Document the find with photos and GPS coordinates"
      },
      {
        "time": "2:00 PM",
        "task": "Back at the museum lab, clean specimens and catalog fossils"
      },
      {
        "time": "4:00 PM",
        "task": "Work on a scientific paper about last season's discoveries"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Visit natural history museums. Collect rocks and learn to identify them. Read about dinosaurs and prehistoric life."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join geology or earth science clubs. Attend fossil hunting programs. Take strong biology and earth science classes."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Biology, AP Environmental Science, and earth science. Apply for museum internships. Look for field programs run by universities."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's in geology, biology, or earth science. Most professional paleontologists earn a PhD. Many work in universities, museums, or government agencies."
      }
    ],
    "colleges": "Strong programs: University of Chicago, University of Montana, UC Berkeley, University of Kansas, Yale, and many state universities in fossil-rich regions (Wyoming, Montana, Utah)."
  },
  "coder": {
    "label": "💻 Software Developer / Coder",
    "does": "Writes and tests code that powers websites, apps, games, software systems, and digital tools.",
    "income": "About $80,000–$140,000 per year; varies widely by specialization.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Check overnight bug reports from users"
      },
      {
        "time": "10:00 AM",
        "task": "Sprint meeting: plan what features to build this week"
      },
      {
        "time": "11:00 AM",
        "task": "Deep work: write code for a new app feature"
      },
      {
        "time": "1:30 PM",
        "task": "Code review: read a teammate's code and give feedback"
      },
      {
        "time": "3:00 PM",
        "task": "Fix a bug causing crashes"
      },
      {
        "time": "4:30 PM",
        "task": "Update project documentation"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Try Scratch (scratch.mit.edu) — it's free and fun. Play coding games on Code.org. Ask if you can build a simple website."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Learn Python through Khan Academy or freeCodeCamp. Join a coding club or hackathon. Build a small game or app."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Computer Science A or Principles. Participate in hackathons. Build a portfolio of personal projects on GitHub."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year CS degree, coding bootcamp (3–6 months), or self-taught with a strong portfolio. Many employers care more about what you can build than your degree."
      }
    ],
    "colleges": "Top CS programs: MIT, Stanford, Carnegie Mellon, UC Berkeley, Georgia Tech, UCSD, UT Austin. Coding bootcamps (General Assembly, App Academy) are popular alternatives."
  },
  "nurse": {
    "label": "🌡️ Nurse / Healthcare Professional",
    "does": "Assesses patient conditions, administers treatments, communicates with doctors and families, and advocates for patient well-being.",
    "income": "About $75,000–$120,000 per year; advanced practice nurses earn more.",
    "day": [
      {
        "time": "7:00 AM",
        "task": "Receive handoff from the night shift: review each patient's status"
      },
      {
        "time": "8:00 AM",
        "task": "Administer morning medications and check vital signs"
      },
      {
        "time": "10:00 AM",
        "task": "Educate a patient and family about a new diagnosis"
      },
      {
        "time": "12:00 PM",
        "task": "Assist a doctor during a procedure"
      },
      {
        "time": "2:00 PM",
        "task": "Document updates in the health record"
      },
      {
        "time": "5:00 PM",
        "task": "Handoff to incoming nurse with thorough notes"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Volunteer at community health events. Learn basic first aid. Show care for people around you who are sick or hurt."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join HOSA. Shadow a nurse if possible. Take biology and health classes seriously."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Biology and chemistry. Volunteer at a hospital. Look into CNA (certified nursing assistant) programs available to high schoolers."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Associate's Degree in Nursing (ADN, 2 years) or Bachelor of Science in Nursing (BSN, 4 years), plus passing the NCLEX licensing exam."
      }
    ],
    "colleges": "Strong nursing programs: UCSF, Johns Hopkins, Duke, Emory, University of Pennsylvania, and hundreds of community colleges and state universities with accredited nursing programs."
  },
  "artist": {
    "label": "🎨 Visual Artist / Designer",
    "does": "Creates paintings, drawings, digital designs, sculptures, or other visual work for galleries, clients, or commercial purposes.",
    "income": "About $35,000–$90,000 per year; highly variable based on specialty and freelance work.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Review client brief for a new logo project"
      },
      {
        "time": "10:30 AM",
        "task": "Sketch concepts in your sketchbook"
      },
      {
        "time": "12:00 PM",
        "task": "Refine sketches in Adobe Illustrator"
      },
      {
        "time": "2:00 PM",
        "task": "Video call with client to present three logo options"
      },
      {
        "time": "3:30 PM",
        "task": "Work on a personal painting for an upcoming gallery show"
      },
      {
        "time": "5:30 PM",
        "task": "Post work-in-progress to your portfolio website"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Draw and paint every day. Fill sketchbooks. Visit art museums. Take every art class available."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Explore digital art tools (free: Krita, Canva). Enter local art contests. Study artists you admire and try copying their style to learn."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Build an art portfolio. Take AP Studio Art. Apply to summer pre-college art programs. Learn Adobe Illustrator and Photoshop."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Art school (BFA), liberal arts college with strong arts program, or design school. Build your portfolio website — it's your most important credential."
      }
    ],
    "colleges": "Top art and design schools: RISD, CalArts, Pratt Institute, SCAD (Savannah College of Art and Design), Art Center (Pasadena), and SVA (New York)."
  },
  "actor": {
    "label": "🎭 Actor / Performer",
    "does": "Interprets and portrays characters in stage productions, films, television, commercials, or voice work.",
    "income": "Highly variable — most performers build income from multiple related roles.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Morning warm-up: vocal exercises and physical stretching"
      },
      {
        "time": "10:00 AM",
        "task": "Rehearsal with the cast"
      },
      {
        "time": "1:00 PM",
        "task": "Audition for a commercial"
      },
      {
        "time": "3:00 PM",
        "task": "Acting class to work on a new monologue"
      },
      {
        "time": "5:00 PM",
        "task": "Review script and highlight character beats"
      },
      {
        "time": "7:30 PM",
        "task": "Evening performance. Take a bow"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Join your school play. Take drama class. Read stories aloud and practice using your voice expressively."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Audition for community theater. Watch great performances and study how actors use body and voice. Try improv classes."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Perform in every show you can. Attend a summer theater intensive. Create video auditions for student film projects."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "BFA in acting or theater, conservatory training, or dive into professional auditions. Build your reel (video portfolio) from student and independent projects."
      }
    ],
    "colleges": "Top theater and performing arts programs: Juilliard, NYU Tisch, Northwestern, Carnegie Mellon, Yale School of Drama, USC, and AMDA."
  },
  "author": {
    "label": "✍️ Author / Writer",
    "does": "Writes novels, nonfiction books, screenplays, articles, essays, or other content that informs, entertains, or inspires readers.",
    "income": "Variable — from project-based earnings to staff writing positions at $50,000–$90,000 per year.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Morning pages: write freely for 30 minutes"
      },
      {
        "time": "9:00 AM",
        "task": "Draft a new chapter"
      },
      {
        "time": "12:00 PM",
        "task": "Edit yesterday's writing"
      },
      {
        "time": "2:00 PM",
        "task": "Research for an article on medieval history"
      },
      {
        "time": "4:00 PM",
        "task": "Reply to your editor's notes on a manuscript"
      },
      {
        "time": "6:00 PM",
        "task": "Read — great writers are constant readers"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Write stories — any stories. Keep a journal. Read as much as you possibly can, across every genre."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Submit writing to school publications and contests. Read widely in your genre. Start a blog or creative writing notebook."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP English Language and Composition. Write for the school newspaper or literary magazine. Enter the Scholastic Art & Writing Awards."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "English, creative writing, or journalism degree. MFA programs for advanced writers. Build a portfolio through internships, freelancing, and independent publishing."
      }
    ],
    "colleges": "Strong writing programs: University of Iowa (Iowa Writers' Workshop), NYU, Columbia, Emerson College, UC Davis, and many state universities with journalism and creative writing MFA programs."
  },
  "musician": {
    "label": "🎵 Musician / Composer",
    "does": "Performs, records, or composes music across a wide range of genres and settings — from concert halls to recording studios.",
    "income": "About $35,000–$90,000 per year; varies enormously based on career path.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Practice scales and repertoire for 2 hours"
      },
      {
        "time": "11:00 AM",
        "task": "Compose a new piece using notation software"
      },
      {
        "time": "1:00 PM",
        "task": "Recording session in the studio"
      },
      {
        "time": "4:00 PM",
        "task": "Rehearse with the band for this weekend's show"
      },
      {
        "time": "7:00 PM",
        "task": "Perform live at a local venue"
      },
      {
        "time": "10:00 PM",
        "task": "Review recordings and make notes for improvement"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Start an instrument — any instrument. Practice every day, even 10 minutes. Listen to many genres of music actively."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join school band, orchestra, or choir. Take private lessons if possible. Learn music theory — it's the math of music."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Audition for competitive ensembles and honor bands. Record original songs. Attend summer music programs and conservatory pre-college camps."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Music conservatory, BM in performance, or music education degree. Self-producing and touring is also a legitimate path if you build an audience."
      }
    ],
    "colleges": "Top music programs: Juilliard, Berklee College of Music, New England Conservatory, USC Thornton, Eastman School of Music, and strong state programs at UT Austin and University of Michigan."
  },
  "photographer": {
    "label": "📸 Photographer / Videographer",
    "does": "Captures and edits images or video to document events, tell stories, advertise products, or create artistic work.",
    "income": "About $35,000–$75,000 per year; specialized or commercial photographers can earn more.",
    "day": [
      {
        "time": "7:00 AM",
        "task": "Sunrise shoot for a nature photography project"
      },
      {
        "time": "10:00 AM",
        "task": "Edit yesterday's wedding photos in Lightroom"
      },
      {
        "time": "12:30 PM",
        "task": "Meet with a client to book a shoot"
      },
      {
        "time": "2:00 PM",
        "task": "Product photography session for a local business"
      },
      {
        "time": "5:00 PM",
        "task": "Update your website and social portfolio"
      },
      {
        "time": "7:00 PM",
        "task": "Watch a documentary for visual inspiration"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Use your family's phone to practice composition. Study what makes a photo interesting. Visit photography exhibits at museums."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Get access to a basic camera. Learn about exposure: aperture, shutter speed, and ISO. Start a photo journal."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take a photography class. Enter photo contests. Build a portfolio website. Learn Adobe Lightroom and Premiere."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "BFA in photography, film degree, or visual communications. Many photographers are self-taught with a strong portfolio. Assisting a working photographer is invaluable."
      }
    ],
    "colleges": "Strong photography and media programs: RISD, Brooks Institute, Syracuse University (Newhouse), NYU Tisch, SCAD, Art Center (Pasadena), and state universities with strong journalism schools."
  },
  "teacher": {
    "label": "🍎 Teacher / Educator",
    "does": "Plans and delivers lessons, assesses student learning, builds relationships, and supports the intellectual and social development of students.",
    "income": "About $50,000–$90,000 per year depending on grade level and district.",
    "day": [
      {
        "time": "7:30 AM",
        "task": "Set up the classroom and review the day's lesson plan"
      },
      {
        "time": "8:15 AM",
        "task": "Teach a history lesson on the Civil Rights Movement"
      },
      {
        "time": "10:00 AM",
        "task": "Small group reading support"
      },
      {
        "time": "12:00 PM",
        "task": "Lunch + grade a set of essays"
      },
      {
        "time": "1:30 PM",
        "task": "Collaborate with a colleague"
      },
      {
        "time": "3:00 PM",
        "task": "Hold office hours and call a parent"
      },
      {
        "time": "4:30 PM",
        "task": "Plan next week's unit"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Teach what you know to a younger sibling, neighbor, or friend. Notice what great teachers do. Help others with schoolwork."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Tutor younger students. Volunteer at community programs. Join clubs where you can lead and explain things to peers."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Volunteer at an elementary school or after-school program. Take psychology or child development classes. Look into teacher cadet programs."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "4-year education degree or subject-area degree + credential program. Student teaching (a semester in a real classroom) is required."
      }
    ],
    "colleges": "Strong education programs: University of Michigan, Stanford (education school), Teachers College at Columbia, SDSU, UCLA, and many state universities. California teaching credential programs are at most CSUs."
  },
  "counselor": {
    "label": "🧑‍🤝‍🧑 Counselor / Social Worker",
    "does": "Supports individuals through personal, social, and emotional challenges by listening, providing guidance, and connecting them to resources.",
    "income": "About $50,000–$85,000 per year for counselors; varies by specialty.",
    "day": [
      {
        "time": "8:30 AM",
        "task": "Review case notes before appointments"
      },
      {
        "time": "9:00 AM",
        "task": "Individual session: guide a student through school anxiety"
      },
      {
        "time": "11:00 AM",
        "task": "Group session with students navigating family changes"
      },
      {
        "time": "1:00 PM",
        "task": "Collaborate with teachers about a student's academic plan"
      },
      {
        "time": "2:30 PM",
        "task": "Connect a family to community resources"
      },
      {
        "time": "4:00 PM",
        "task": "Complete documentation"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Be a kind and trustworthy friend. Practice listening without judgment. Learn about emotions and how to name them."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join peer mediation programs. Volunteer with younger kids. Take health and wellness or psychology electives if available."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Volunteer at a crisis hotline, community center, or mentoring program. Take AP Psychology. Shadow a school counselor or social worker."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's in psychology, social work, or human development. Master's degree (MSW or MA in counseling) is typically required for licensure."
      }
    ],
    "colleges": "Strong psychology and social work programs: University of Michigan, Boston College, USC, Columbia, UC Berkeley, and many state universities with CSWE-accredited social work programs."
  },
  "coach": {
    "label": "🤸 Coach / Athletic Trainer",
    "does": "Designs and leads training programs, teaches technique and strategy, builds team culture, and motivates athletes to reach their potential.",
    "income": "Variable — from $35,000 to $80,000+ per year depending on sport and level.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Early morning lift with the team"
      },
      {
        "time": "8:00 AM",
        "task": "Film session: review game tape with athletes"
      },
      {
        "time": "10:00 AM",
        "task": "Individual technique sessions"
      },
      {
        "time": "1:00 PM",
        "task": "Plan next week's practice structure"
      },
      {
        "time": "3:30 PM",
        "task": "Practice — drill work, scrimmage, and conditioning"
      },
      {
        "time": "6:00 PM",
        "task": "Post-practice review and individual check-ins"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Play multiple sports. Help younger kids learn games. Pay attention to what great coaches do — the ones who inspire you."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Become a team captain or help with youth sports in your community. Learn the strategy behind your sport."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Compete at a high level and coach youth leagues on the side. Take anatomy and physiology if available. Get CPR and first aid certified."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Kinesiology, physical education, or sports science degree. Many coaches also earn strength and conditioning certifications (CSCS, NASM). Graduate assistantships allow you to coach while earning a master's."
      }
    ],
    "colleges": "Strong kinesiology and sports science programs: Ohio State, University of Florida, Penn State, Oregon, SDSU, Cal Poly, and many state universities with Division I athletics."
  },
  "social_worker": {
    "label": "🧑‍⚕️ Social Worker / Advocate",
    "does": "Helps individuals and families access services, overcome challenges, and navigate complex systems like healthcare, housing, and education.",
    "income": "About $50,000–$80,000 per year.",
    "day": [
      {
        "time": "8:30 AM",
        "task": "Review case files for today's home visits"
      },
      {
        "time": "10:00 AM",
        "task": "Home visit: assess a family's safety and support needs"
      },
      {
        "time": "12:00 PM",
        "task": "Connect a client to emergency food and rental assistance"
      },
      {
        "time": "2:00 PM",
        "task": "Meet with a hospital team about discharge planning"
      },
      {
        "time": "4:00 PM",
        "task": "Complete court-required documentation"
      },
      {
        "time": "5:00 PM",
        "task": "Prepare a community resource guide"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Learn about fairness and advocacy. Volunteer with community service projects. Notice when others need help and act on it."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join student government or social justice clubs. Organize a community service project. Take civics and history classes."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Volunteer at a food bank, shelter, or youth organization. Take AP Government or AP Psychology. Intern with a nonprofit."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Bachelor's of Social Work (BSW) or psychology degree. Master's of Social Work (MSW) required for clinical or licensed positions (LCSW)."
      }
    ],
    "colleges": "Top social work programs: University of Michigan, Columbia, Washington University in St. Louis, USC, UC Berkeley, and many state universities with CSWE-accredited BSW/MSW programs."
  },
  "business_owner": {
    "label": "👔 Entrepreneur / Business Owner",
    "does": "Identifies a market need, builds a product or service, manages a team, handles finances, and adapts to challenges over time.",
    "income": "Highly variable — dependent on the business itself.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review overnight sales data and customer messages"
      },
      {
        "time": "9:30 AM",
        "task": "Team standup"
      },
      {
        "time": "11:00 AM",
        "task": "Pitch your business idea to a potential investor"
      },
      {
        "time": "1:30 PM",
        "task": "Solve a supply chain problem"
      },
      {
        "time": "3:00 PM",
        "task": "Work with a designer on new product packaging"
      },
      {
        "time": "5:00 PM",
        "task": "Write content for social media"
      },
      {
        "time": "7:00 PM",
        "task": "Research competitors"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Start a small business: lemonade stand, baked goods, lawn mowing. Learn what customers want and how to price things."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Expand your business or try a new one. Participate in DECA or Junior Achievement programs. Study businesses you admire."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Start a real side business or social enterprise. Take economics and business classes. Apply for youth entrepreneurship competitions."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Business degree helpful but not required. Many entrepreneurs start during college or right after. Programs like Y Combinator and incubators help early-stage businesses."
      }
    ],
    "colleges": "Top entrepreneurship programs: Babson College, Stanford, MIT Sloan, UC Berkeley Haas, Wharton (UPenn), Indiana University Kelley, and many state universities with entrepreneurship centers."
  },
  "salesperson": {
    "label": "📢 Sales Professional / Account Manager",
    "does": "Builds client relationships, explains products or services clearly, overcomes objections, and helps customers make informed decisions.",
    "income": "About $40,000–$100,000+ per year; many roles include performance bonuses.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review your pipeline: which deals are close to closing?"
      },
      {
        "time": "9:00 AM",
        "task": "Cold outreach: email and call 20 new prospects"
      },
      {
        "time": "11:00 AM",
        "task": "Product demo with a potential client"
      },
      {
        "time": "1:00 PM",
        "task": "Follow up with last week's prospects"
      },
      {
        "time": "2:30 PM",
        "task": "Team training on new product features"
      },
      {
        "time": "4:00 PM",
        "task": "Prepare a proposal for a major account"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Practice explaining things clearly. Run a small business. Observe how salespeople make you feel valued as a customer."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join debate or speech club. Sell items for school fundraisers. Notice what makes people say yes to an idea."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take a marketing, communication, or business elective. Participate in DECA competitions. Get a part-time retail or customer service job."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Business, communications, or marketing degree. Many sales careers are open to high school graduates with strong interpersonal skills."
      }
    ],
    "colleges": "Strong business and marketing programs: Wharton (UPenn), Michigan Ross, Indiana Kelley, ASU, UC Davis, and most major state universities with business schools."
  },
  "public_leader": {
    "label": "🏛️ Public Official / Policy Maker",
    "does": "Creates or influences policy, represents constituent interests, manages public agencies, and makes decisions that affect entire communities.",
    "income": "Highly variable — from local public service stipends to six-figure executive or legislative salaries.",
    "day": [
      {
        "time": "7:30 AM",
        "task": "Read briefings on three pending policy decisions"
      },
      {
        "time": "9:00 AM",
        "task": "Town hall meeting: listen to constituent concerns"
      },
      {
        "time": "11:00 AM",
        "task": "Meet with the city budget director"
      },
      {
        "time": "1:00 PM",
        "task": "Press conference on a new public safety initiative"
      },
      {
        "time": "3:00 PM",
        "task": "Review a proposed ordinance with the city attorney"
      },
      {
        "time": "5:00 PM",
        "task": "Community event: youth leadership ceremony"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Run for class representative or student council. Learn about your city or town government. Attend a city council meeting with a parent."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Participate in student government. Volunteer for a local campaign or civic organization. Practice public speaking and debate."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Government, AP Economics, and debate. Apply for Boys/Girls State. Intern for a local elected official."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Degrees in political science, public policy, law, economics, or communications. Law school or a master's in public policy (MPP) opens many doors."
      }
    ],
    "colleges": "Strong public policy and government programs: Harvard Kennedy School, Princeton Woodrow Wilson School, Georgetown, UCLA Luskin, UCSD GPS, and many strong state schools with government programs."
  },
  "movie_director": {
    "label": "🎬 Film Director / Media Producer",
    "does": "Oversees all creative aspects of a film or video project — from script interpretation to casting, visual style, editing, and final delivery.",
    "income": "Variable and project-based; successful directors can earn well above average.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Pre-production meeting: review storyboards with the cinematographer"
      },
      {
        "time": "10:00 AM",
        "task": "Casting session: watch actors audition"
      },
      {
        "time": "1:00 PM",
        "task": "On set: direct a key scene"
      },
      {
        "time": "4:00 PM",
        "task": "Editing session with the editor on last week's footage"
      },
      {
        "time": "6:30 PM",
        "task": "Screen a rough cut with your producing team and give notes"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Make short films on a phone or tablet. Tell stories. Watch great films and talk about what makes them work."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Make short films for school. Enter student film competitions. Learn iMovie or DaVinci Resolve (free)."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take film or media arts classes. Build a short film portfolio. Submit to youth film festivals. Volunteer on student film sets."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Film school BFA, or start working on independent projects while building your resume. Key early jobs: production assistant, camera assistant, editor's assistant."
      }
    ],
    "colleges": "Top film programs: USC School of Cinematic Arts, NYU Tisch, AFI (American Film Institute), UCLA, Chapman University Dodge, Emerson College, and UT Austin."
  },
  "adventure_guide": {
    "label": "🗺️ Outdoor Educator / Guide",
    "does": "Leads groups through outdoor environments, teaches skills like navigation and ecology, ensures safety, and builds connection to the natural world.",
    "income": "About $35,000–$70,000 per year; seasonal and geographic variation is significant.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Pack gear, check weather, and brief the group on the day's route"
      },
      {
        "time": "7:30 AM",
        "task": "Lead a 12-person group on a backcountry trail, teaching plant identification"
      },
      {
        "time": "12:00 PM",
        "task": "Treat a minor ankle sprain on the trail"
      },
      {
        "time": "2:00 PM",
        "task": "Teach map and compass navigation at a scenic overlook"
      },
      {
        "time": "5:00 PM",
        "task": "Set up camp and lead a group debrief"
      },
      {
        "time": "8:00 PM",
        "task": "Stars, campfire, and reflections"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Spend time outside. Learn to identify plants and animals near your home. Camp with family or in a scouting program."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Join Boy Scouts, Girl Scouts, or a similar outdoor program. Take a wilderness first aid or survival skills class. Hike harder trails."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Lead outdoor trips or become a junior counselor at a camp. Get wilderness first responder (WFR) certified. Take ecology or environmental science."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Outdoor education degree, environmental science program, or a NOLS (National Outdoor Leadership School) certificate. Many guides work seasonally."
      }
    ],
    "colleges": "Strong outdoor education and environmental programs: University of Utah, Prescott College, Colorado State, Warren Wilson College, NAU (Northern Arizona), and state universities with recreation management programs."
  },
  "banker": {
    "label": "🏦 Financial Advisor / Banker",
    "does": "Analyzes financial data, advises clients on investments and savings, manages accounts, and helps individuals or organizations plan for the future.",
    "income": "About $55,000–$100,000+ per year; financial advisors often earn more with experience.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review markets and economic news"
      },
      {
        "time": "9:30 AM",
        "task": "Client meeting: help a family plan for college savings and retirement"
      },
      {
        "time": "11:00 AM",
        "task": "Review a loan application from a small business"
      },
      {
        "time": "1:00 PM",
        "task": "Update client portfolio recommendations"
      },
      {
        "time": "3:00 PM",
        "task": "Compliance review: ensure account documentation is in order"
      },
      {
        "time": "4:30 PM",
        "task": "Continuing education on new tax law changes"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Start a savings account. Learn the difference between needs and wants. Practice keeping track of your money."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Play stock market simulation games (e.g., SIFMA Foundation's Stock Market Game). Learn about budgeting. Take math seriously."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take economics and AP Statistics. Participate in DECA financial services events. Shadow a financial advisor or banker."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Finance, economics, or business degree. CFP (Certified Financial Planner) or CFA (Chartered Financial Analyst) certification for advanced roles."
      }
    ],
    "colleges": "Strong finance programs: Wharton (UPenn), NYU Stern, Michigan Ross, Georgetown McDonough, UT Austin McCombs, and many state universities with strong business schools."
  },
  "accountant": {
    "label": "📊 Accountant / Financial Analyst",
    "does": "Prepares and audits financial statements, tracks organizational spending, ensures compliance with tax law, and provides financial analysis.",
    "income": "About $60,000–$110,000 per year.",
    "day": [
      {
        "time": "8:30 AM",
        "task": "Review last month's financial statements for a client"
      },
      {
        "time": "10:00 AM",
        "task": "Audit meeting: go through expense records"
      },
      {
        "time": "12:00 PM",
        "task": "Prepare quarterly tax estimates"
      },
      {
        "time": "2:00 PM",
        "task": "Model out a financial forecast for a growing company"
      },
      {
        "time": "4:00 PM",
        "task": "Meet with a client to explain their financials"
      },
      {
        "time": "5:00 PM",
        "task": "Update spreadsheets and reconcile accounts"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Practice math every day — especially mental math. Help keep track of family expenses or a small savings goal."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take every math class available. Learn to use spreadsheets. Study how businesses earn and spend money."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take AP Statistics and economics. Compete in DECA or FBLA. Shadow an accountant during tax season."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Accounting or finance degree (4 years). CPA exam after 150 college credit hours. Big 4 firms (Deloitte, PwC, EY, KPMG) hire heavily from college."
      }
    ],
    "colleges": "Strong accounting programs: University of Illinois Urbana-Champaign, UT Austin, Michigan Ross, NYU Stern, BYU, and many state universities with AACSB-accredited business schools."
  },
  "office_manager": {
    "label": "📁 Office Manager / Operations Coordinator",
    "does": "Keeps a workplace or organization running efficiently — managing schedules, coordinating teams, handling logistics, and solving day-to-day operational problems.",
    "income": "About $45,000–$85,000 per year.",
    "day": [
      {
        "time": "8:00 AM",
        "task": "Review today's calendar and confirm all meetings"
      },
      {
        "time": "9:00 AM",
        "task": "Onboard a new employee"
      },
      {
        "time": "11:00 AM",
        "task": "Coordinate with IT on a tech issue"
      },
      {
        "time": "1:00 PM",
        "task": "Manage vendor invoices and check budget tracking"
      },
      {
        "time": "2:30 PM",
        "task": "Organize company event logistics"
      },
      {
        "time": "4:30 PM",
        "task": "Prepare the weekly status report for the director"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Keep your room, backpack, and schoolwork organized. Help plan family events. Practice being responsible with tasks."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Volunteer to help organize school events. Take on leadership roles that require coordinating others. Learn to use calendars and task lists."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Take business, communications, and computer applications classes. Work part-time in a customer service or admin role."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Associate's or bachelor's in business administration. Many office managers start in entry-level admin roles and advance through skill and reliability."
      }
    ],
    "colleges": "Strong business administration programs at most community colleges (2-year AA) and 4-year programs at state universities like SDSU, CSULB, Arizona State, and many others nationwide."
  },
  "postal_worker": {
    "label": "📬 Postal / Logistics Professional",
    "does": "Processes and delivers mail and packages with accuracy and reliability; some roles involve supervising routes or managing distribution centers.",
    "income": "About $45,000–$70,000 per year with federal benefits for postal employees.",
    "day": [
      {
        "time": "6:00 AM",
        "task": "Sort the morning mail load by neighborhood"
      },
      {
        "time": "7:30 AM",
        "task": "Load the vehicle and verify the manifest"
      },
      {
        "time": "8:00 AM",
        "task": "Begin the delivery route"
      },
      {
        "time": "12:00 PM",
        "task": "Return undeliverable packages and pick up outgoing mail"
      },
      {
        "time": "2:30 PM",
        "task": "Complete end-of-day paperwork"
      },
      {
        "time": "3:00 PM",
        "task": "Done — and your evenings are your own"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Learn to be responsible and follow through on commitments. Take pride in doing things accurately."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Take geography and map skills seriously. Practice organization and time management."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Work part-time in delivery, retail, or customer service. Explore logistics and supply chain as career fields."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "High school diploma required. USPS has its own hiring and training process. Logistics careers at UPS, FedEx, or Amazon may offer management tracks with or without a degree."
      }
    ],
    "colleges": "For logistics management and supply chain: Michigan State, Penn State, Arizona State, and community colleges with logistics and operations management certificates."
  },
  "cashier": {
    "label": "💰 Customer Service / Retail Professional",
    "does": "Helps customers with purchases, processes transactions accurately, resolves issues, and contributes to a positive store environment.",
    "income": "About $28,000–$45,000 per year for full-time roles; varies widely.",
    "day": [
      {
        "time": "9:00 AM",
        "task": "Open the register and prepare the checkout area"
      },
      {
        "time": "10:00 AM",
        "task": "Greet customers, process purchases, and handle questions"
      },
      {
        "time": "12:00 PM",
        "task": "Handle a return while keeping the line moving"
      },
      {
        "time": "2:00 PM",
        "task": "Help a customer find a product"
      },
      {
        "time": "4:00 PM",
        "task": "Balance the register"
      },
      {
        "time": "5:00 PM",
        "task": "Restock shelves and prep for tomorrow"
      }
    ],
    "pathway": [
      {
        "icon": "🏫",
        "level": "Elementary School",
        "steps": "Practice good manners and patience. Learn to count money and make change. Notice how businesses treat their customers."
      },
      {
        "icon": "🏫",
        "level": "Middle School",
        "steps": "Volunteer in service roles. Learn to communicate clearly with all kinds of people. Study business and money management."
      },
      {
        "icon": "🏫",
        "level": "High School",
        "steps": "Get a part-time job in retail or food service. Take business or marketing classes."
      },
      {
        "icon": "🎓",
        "level": "After High School",
        "steps": "Many customer service roles hire high school graduates. Advancement to management typically requires demonstrated leadership and may benefit from a business degree."
      }
    ],
    "colleges": "Retail management pathways through community college business programs, or 4-year retail management degrees at schools like Michigan State, Ball State, and LIM College."
  }
})
    })
  });
})(window);
