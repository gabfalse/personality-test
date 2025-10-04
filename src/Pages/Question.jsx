const Questions = [
  {
    id: 1,
    question: "How do you handle a big project or important task at work?",
    options: [
      {
        text: "Create a big vision, divide roles, and lead the team.",
        type: "SOLARIETH",
      },
      {
        text: "Analyze details and data before taking action.",
        type: "VARNETH",
      },
      {
        text: "Look for creative ideas and out-of-the-box solutions.",
        type: "AERYTH",
      },
      {
        text: "Invite team discussions and focus on collaboration.",
        type: "NIVARETH",
      },
      {
        text: "Make quick decisions and execute immediately.",
        type: "LUNARETH",
      },
      {
        text: "Follow procedures and work steadily until done.",
        type: "THARITH",
      },
      { text: "Be flexible and adapt to changes.", type: "ELARITH" },
      {
        text: "Ensure everything is according to rules and transparent.",
        type: "ZERYTH",
      },
    ],
  },
  {
    id: 2,
    question:
      "When you have to make a tough decision, what do you usually consider?",
    options: [
      {
        text: "Its impact on the bigger vision and leadership.",
        type: "SOLARIETH",
      },
      { text: "Logic, data, and available facts.", type: "VARNETH" },
      {
        text: "The possibility of new ideas or creative opportunities.",
        type: "AERYTH",
      },
      { text: "The opinions and feelings of others.", type: "NIVARETH" },
      { text: "Efficiency and speed of completion.", type: "LUNARETH" },
      { text: "Safety, stability, and procedure.", type: "THARITH" },
      {
        text: "Whether it becomes an exciting challenge for me.",
        type: "ELARITH",
      },
      { text: "The right moral and ethical values.", type: "ZERYTH" },
    ],
  },
  {
    id: 3,
    question: "How do you prioritize between multiple tasks at the same time?",
    options: [
      { text: "Create a long-term strategy and delegate.", type: "SOLARIETH" },
      {
        text: "Analyze details and arrange in logical order.",
        type: "VARNETH",
      },
      {
        text: "Choose the most interesting or creative first.",
        type: "AERYTH",
      },
      { text: "Discuss with others to find agreement.", type: "NIVARETH" },
      {
        text: "Focus on quick results and execute immediately.",
        type: "LUNARETH",
      },
      { text: "Work step by step according to procedure.", type: "THARITH" },
      { text: "Adjust to changing situations.", type: "ELARITH" },
      { text: "Choose what is most morally right.", type: "ZERYTH" },
    ],
  },
  {
    id: 4,
    question: "What type of work environment makes you most productive?",
    options: [
      { text: "A competitive and challenging environment.", type: "SOLARIETH" },
      { text: "An orderly, calm place full of data.", type: "VARNETH" },
      { text: "A creative space with freedom of ideas.", type: "AERYTH" },
      {
        text: "A collaborative environment with supportive team.",
        type: "NIVARETH",
      },
      {
        text: "A place that gives freedom to make decisions.",
        type: "LUNARETH",
      },
      { text: "A stable, neat, and structured environment.", type: "THARITH" },
      { text: "A dynamic situation full of new challenges.", type: "ELARITH" },
      { text: "A place that upholds integrity and honesty.", type: "ZERYTH" },
    ],
  },
  {
    id: 5,
    question: "How do you plan and go through your daily routines?",
    options: [
      {
        text: "With ambitious targets and measured strategy.",
        type: "SOLARIETH",
      },
      {
        text: "With detailed checklists and priority analysis.",
        type: "VARNETH",
      },
      {
        text: "With spontaneity, so there’s something new every day.",
        type: "AERYTH",
      },
      {
        text: "With flexibility, adjusting to people’s needs around me.",
        type: "NIVARETH",
      },
      {
        text: "By quickly moving straight to important things.",
        type: "LUNARETH",
      },
      { text: "With a regular and disciplined schedule.", type: "THARITH" },
      { text: "With free flow, ready to adapt anytime.", type: "ELARITH" },
      { text: "With moral rules as my guide.", type: "ZERYTH" },
    ],
  },
  {
    id: 6,
    question:
      "What do you usually do when facing sudden disturbances or changes?",
    options: [
      { text: "Keep leading and guiding others.", type: "SOLARIETH" },
      { text: "Carefully analyze the new situation.", type: "VARNETH" },
      { text: "Find creative ways to keep going.", type: "AERYTH" },
      { text: "Seek input from people around me.", type: "NIVARETH" },
      { text: "Immediately make a quick decision.", type: "LUNARETH" },
      {
        text: "Stick to the original plan as much as possible.",
        type: "THARITH",
      },
      { text: "Adapt flexibly.", type: "ELARITH" },
      { text: "Ensure the solution doesn’t break principles.", type: "ZERYTH" },
    ],
  },
  {
    id: 7,
    question: "How do you maintain consistency in completing daily tasks?",
    options: [
      {
        text: "With leadership motivation and a big vision.",
        type: "SOLARIETH",
      },
      {
        text: "With disciplined analysis and technical detail.",
        type: "VARNETH",
      },
      { text: "By trying new methods to avoid boredom.", type: "AERYTH" },
      { text: "With support and teamwork from others.", type: "NIVARETH" },
      { text: "With strong personal determination.", type: "LUNARETH" },
      { text: "With a stable and structured routine.", type: "THARITH" },
      { text: "With new challenges as a trigger.", type: "ELARITH" },
      { text: "With commitment to values and integrity.", type: "ZERYTH" },
    ],
  },
  {
    id: 8,
    question: "What do you usually do to improve your effectiveness?",
    options: [
      { text: "Learn leadership and new strategies.", type: "SOLARIETH" },
      { text: "Sharpen technical and analytical skills.", type: "VARNETH" },
      { text: "Experiment with fresh ideas.", type: "AERYTH" },
      { text: "Learn communication and empathy.", type: "NIVARETH" },
      { text: "Practice making quick decisions.", type: "LUNARETH" },
      { text: "Improve routine discipline.", type: "THARITH" },
      { text: "Seek bigger challenges.", type: "ELARITH" },
      { text: "Strengthen personal ethics.", type: "ZERYTH" },
    ],
  },
  {
    id: 9,
    question: "How do you usually interact with new people or a new team?",
    options: [
      {
        text: "Appear confident and become the center of attention.",
        type: "SOLARIETH",
      },
      {
        text: "Observe first, then speak based on data/facts.",
        type: "VARNETH",
      },
      { text: "Greet warmly and share creative ideas.", type: "AERYTH" },
      { text: "Try to be friendly and listen to them.", type: "NIVARETH" },
      {
        text: "Straight to the point, directly propose teamwork.",
        type: "LUNARETH",
      },
      { text: "Formal and by the rules.", type: "THARITH" },
      { text: "Relaxed and easily adaptable.", type: "ELARITH" },
      { text: "Firm, transparent, and honest.", type: "ZERYTH" },
    ],
  },
  {
    id: 10,
    question: "What do you usually do when there’s conflict at work?",
    options: [
      { text: "Take charge and direct to finish quickly.", type: "SOLARIETH" },
      { text: "Use logic and analysis to find a solution.", type: "VARNETH" },
      { text: "Offer creative ideas as a middle ground.", type: "AERYTH" },
      { text: "Be a mediator and listen to all sides.", type: "NIVARETH" },
      { text: "Be firm, quickly make my own decision.", type: "LUNARETH" },
      { text: "Follow existing procedures.", type: "THARITH" },
      {
        text: "Look for challenges to solve it in a new way.",
        type: "ELARITH",
      },
      {
        text: "Stick firmly to integrity, never compromise on wrong.",
        type: "ZERYTH",
      },
    ],
  },
];

export default Questions;
