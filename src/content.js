export const projectStory = {
  introduction:
    "",
  motivation: {
    title: "Motivation",
    lead: "Realtors are spending 3+ hours a day as a human FAQ",
    items: [
      {
        metric: "5-8",
        label: "active listings",
        detail: "A typical agent manages 5-8 active listings.",
      },
      {
        metric: "∼5",
        label: "calls per listing",
        detail:
          "Each listing generates ∼5 inbound calls per day asking for information that is already published in the listing such as location, nearest MRT price, PSF, tenure and others.",
      },
      {
        metric: "20+",
        label: "interruptions a day",
        detail:
          "That's around 20+ interruptions a day when half of it happens while the agent is in a viewing or after hours.",
      },
      {
        metric: "$$",
        label: "Compounding costs",
        detail:
          "The cost isn't just time. It's missed calls that become missed commissions, burnout from repeating the same 10 answers, and buyers who move on because they didn't get an instant answer.",
      },
    ],
  },
  successCriteria: {
    title: "Success criteria",
    items: [
      {
        label: "Agent Time",
        detail: "Percentage of Productivity lift from time freed.",
      },
      {
        label: "Buyer Experience",
        detail:
          "Buyer obtained the answer(s) they wanted or did they leave mid-way.",
      },
      {
        label: "Business Impact",
        detail: "Number of qualified leads converted into sales.",
      },
    ],
  },
  conversationFlow: {
    title: "Agent/Buyer Conversation Flow",
    steps: [
      {
        title: "Greeting",
        detail:
          "John greets the buyer and offers insights about available properties.",
      },
      {
        title: "Requirements",
        detail: "The buyer shares their requirements and interests.",
      },
      {
        title: "Recommendations",
        detail:
          "John recommends relevant options and answers follow-up questions.",
      },
      {
        title: "Interest",
        detail:
          "The buyer confirms their interest and provides contact details and preferred meeting dates.",
      },
      {
        title: "Wrap up",
        detail: "John summarizes the next steps and closes the conversation.",
      },
    ],
  },
  evidence: {
    src: "/images/elevenlabs-agent-conversation.png",
    alt: "ElevenLabs dashboard showing a property enquiry transcript, generated conversation summary, successful status, and workflow stages from greeting through booking and wrap-up.",
    caption:
      "A test conversation in ElevenLabs showing the transcript, generated summary, and workflow transitions. Demonstration data; responses may contain inaccuracies.",
    linkLabel: "View full-size evidence",
  },
  technicalMap: {
    title: "Technical Map",
    description:
      "The React and Vite website embeds the ElevenLabs widget, which connects buyers to the ElevenAgent. The agent uses the knowledge base for grounded property information and the workflow to manage the conversation sequence.",
    website: {
      title: "Website",
      detail: "React + Vite",
    },
    platform: {
      title: "ElevenLabs",
      nodes: [
        { title: "Widget", detail: "Voice and text interface" },
        { title: "ElevenAgents", detail: "Property enquiry agent" },
        { title: "Knowledge Base", detail: "Property information" },
        { title: "Workflow", detail: "Conversation sequence" },
      ],
    },
  },
  lessons: {
    title: "Lessons Learned",
    workedWell: {
      title: "What worked well",
      items: [
        "Managed to one shot the scenario after building.",
        "Used a simple RAG containing available to scope the conversation.",
        "The agent accurately extracts structured data (Name, Phone, Email) which are important for follow ups",
      ],
    },
    couldImprove: {
      title: "What could be improved",
      items: [
        "webhook tool into Calendar build a draft to book the buyer's time as a post-conversation confirmation.",
        "Additional data points on the property. Example: The AI Agent made up number of bedrooms.",
        "Agent hung up shortly after recommending a wrong meeting date :(",
      ],
    },
  },
};
