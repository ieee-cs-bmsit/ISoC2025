import { Link } from "react-router-dom";

const faqs = [
    {
      question: "What is IEEE Summer of Code?",
      answer:
        "IEEE Summer of Code is an open-source initiative by IEEE aimed at helping students and professionals contribute to real-world projects, gain mentorship, and build technical and collaborative skills.",
    },
    {
      question: "Who can participate?",
      answer:
        "The event is open to all students, regardless of their branch or college. If you're enthusiastic about open-source development, you're welcome to join!",
    },
    {
      question: "Is there any registration fee?",
      answer: "No, registration is completely free.",
    },
    {
      question: "When does the event take place?",
      answer: "The program runs from 5th May 2025 to 21st June 2025.",
    },
    {
      question: "How will the event be conducted?",
      answer:
        "The event will be held in a hybrid format, including both online collaboration and 2 offline Meet & Code sessions, such as coding meetups, networking, and speaker events.",
    },
    {
      question: "What are 'Meet & Code' sessions?",
      answer:
        "These are hands-on interactive sessions with mentorship, coding, and brainstorming opportunities. They include:\n\n• In-person talks\n• Live coding\n• Networking",
    },
    {
      question: "What do participants get?",
      answer:
        "Participants stand a chance to win:\n\n• Awesome Goodies and Swags\n• Certificates\n• Networking opportunities with industry experts\n\nTotal prize pool is worth ₹40,000+.",
    },
    {
      question: "What if I am new to open source?",
      answer:
        "That’s perfectly okay — everyone starts somewhere! Open source is meant to be welcoming. Look out for repositories with the 'good first issue' label — these are beginner-friendly tasks picked to help you get started smoothly.\n\nPlus, you won’t be alone. Many open-source communities have mentors, active maintainers, and friendly contributors who are happy to guide you through your first pull request. Don’t hesitate to ask questions — collaboration is the heart of open source. All you need to bring is curiosity and a willingness to learn. We’ve got the rest!",
    },
    {
      question: "Is it a team-based or individual competition?",
      answer: "This is an individual participation event.",
    },
    {
      question: "How are contributions evaluated?",
      answer:
        "Based on code quality, innovation, and mentor feedback. A leaderboard will track progress.",
    },
    {
      question: "What is the selection/acceptance criteria?",
      answer:
        "There is no selection process—everyone who registers on time and follows the guidelines can participate.",
    },
    {
      question: "Are Meet & Code sessions mandatory?",
      answer: "No, but highly recommended for mentorship and networking.",
    },
    {
      question: "What if I face technical issues?",
      answer: (
        <>
          Contact us at {""}
          <a className="text-blue-600" href="ieee_cs@bmsit.in" target="_blank" rel="noopener noreferrer">
          ieee_cs@bmsit.in
          </a>
           {" "} or in our {""}
          <a className="text-blue-600" href="https://discord.gg/9AJHMUPa" target="_blank" rel="noopener noreferrer">
            Discord Server
          </a>
          . We’ll assist but can’t guarantee extensions.
        </>
      ),
    },
  ];
  
  export default faqs;
  