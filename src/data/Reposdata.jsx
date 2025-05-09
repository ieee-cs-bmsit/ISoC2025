const reposData = [
  {
    _id: {
      $oid: "681a07c0917ebd822fabba07",
    },
    id: 1,
    name: "GoFr",
    shortDescription: "GoFr is designed to simplify microservice development.",
    longDescription:
      "GoFr is designed to simplify microservice development, with key focuses on Kubernetes deployment and out-of-the-box observability. While capable of building generic applications, microservices remain at its core.",
    domain: ["Golang framework"],
    stars: 0,
    forks: 0,
    url: "https://github.com/gofr-dev/gofr",
    image: `/images/repoimages/repoimg1.png`,
    category: "Gold",
    maintainer:"Akhilesh"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba08",
    },
    id: 2,
    name: "Helmcharts",
    shortDescription:
      "An Extensive Collection of Helm Charts for Datastores & Applications",
    longDescription:
      "The zop.dev Helm Charts repository is designed to simplify the deployment and management of popular datastores and applications on Kubernetes. With pre-configured charts that work out-of-the-box and allow for explicit overrides, our goal is to streamline operations and integrate seamlessly with the zop.dev ecosystem.",
    domain: ["Golang"],
    stars: 35,
    forks: 8,
    url: "https://github.com/zopdev/helm-charts",
    image: "/images/repoimages/repoimg2.png",
    category: "Gold",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba09",
    },
    id: 3,
    name: "OpenTofu",
    shortDescription:
      "A Terraform-based open-source framework to provision, manage, and operate Kubernetes clusters",
    longDescription:
      "A Terraform-based open-source framework to provision, manage, and operate Kubernetes clusters, cloud services, and observability systems across AWS, GCP, Azure, and OCI — with production-ready modules.Goal\nTo simplify and standardize Kubernetes cluster creation, datastore management, and infrastructure provisioning across major cloud providers, while keeping the system modular and extensible.",
    domain: [""],
    stars: 20,
    forks: 5,
    url: "https://github.com/zopdev/opentofu-modules",
    image: "/images/repoimages/repoimg3.png",
    category: "Gold",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0a",
    },
    id: 4,
    name: "TensorZero",
    shortDescription:
      "TensorZero creates a feedback loop for optimizing LLM applications ",
    longDescription:
      "TensorZero creates a feedback loop for optimizing LLM applications — turning production data into smarter, faster, and cheaper models.\n\nIntegrate our model gateway\nSend metrics or feedback\nOptimize prompts, models, and inference strategies\nWatch your LLMs improve over time\nIt provides a data & learning flywheel for LLMs by unifying:\n\n Inference: one API for all LLMs, with <1ms P99 overhead\n Observability: inference & feedback → your database\n Optimization: from prompts to fine-tuning and RL\n Evaluations: compare prompts, models, inference strategies\n Experimentation: built-in A/B testing, routing, fallbacks",
    domain: ["AI"],
    stars: 15,
    forks: 3,
    url: "https://github.com/tensorzero/tensorzero",
    image: "/images/repoimages/repoimg4.png",
    category: "Gold",
    maintainer:"Atul"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0b",
    },
    id: 5,
    name: "OpenRCT2",
    shortDescription:
      "An open-source re-implementation of RollerCoaster Tycoon 2",
    longDescription:
      "OpenRCT2 is an open-source re-implementation of RollerCoaster Tycoon 2 (RCT2). The gameplay revolves around building and maintaining an amusement park containing attractions, shops and facilities. The player must try to make a profit and maintain a good park reputation whilst keeping the guests happy. OpenRCT2 allows for both scenario and sandbox play. Scenarios require the player to complete a certain objective in a set time limit whilst sandbox allows the player to build a more flexible park with optionally no restrictions or finance.\nRollerCoaster Tycoon 2 was originally written by Chris Sawyer in x86 assembly and is the sequel to RollerCoaster Tycoon. The engine was based on Transport Tycoon, an older game which also has an equivalent open-source project, OpenTTD.",
    domain: ["C++"],
    stars: 25,
    forks: 7,
    url: "https://github.com/OpenRCT2/OpenRCT2",
    image: "/images/repoimages/repoimg5.png",
    category: "Gold",
    maintainer:"Atul"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0c",
    },
    id: 6,
    name: "Bloom",
    shortDescription: "BioBloom - AI-Powered Sustainable Farming Solutions",
    longDescription:
      "BioBloom is a comprehensive agricultural technology platform designed to help farmers and agricultural enthusiasts make informed decisions about their farming practices. The platform combines modern web technologies with agricultural expertise to provide a suite of tools and features for sustainable farming.\n\nFeatures\nUser Authentication System\n\nSecure login and registration\nProfile management\nPassword recovery system\nAgricultural Insights\n\nCrop recommendations\nAir Quality Index (AQI) monitoring\nWeather information integration\nSustainable farming practices\nInteractive Dashboard\n\nReal-time data visualization\nSaved searches functionality\nCustomizable user experience",
    domain: ["Agriculture"],
    stars: 30,
    forks: 6,
    url: "https://github.com/Kushal-Raj-135/Bloom",
    image: "/images/repoimages/repoimg6.png",
    category: "Silver",
    maintainer:"Kushal Raj GS"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0d",
    },
    id: 7,
    name: "SafeVision",
    shortDescription:
      " AI-Powered Intelligent Surveillance for Assault Prevention",
    longDescription:
      "SafeVision is an AI-powered real-time surveillance system designed to detect and prevent potential assaults by actively analyzing CCTV feeds. Unlike traditional CCTV systems that passively record incidents, SafeVision detects suspicious activities and sends real-time alerts to authorities for immediate action.\n\nThis project aims to create safer public environments by leveraging computer vision and deep learning models that can recognize aggressive behavior, distress, and abnormal crowd patterns.\nFeatures\nReal-time monitoring of CCTV video feeds.\nDetects suspicious activities using YOLOv8.\nSends instant alerts with video snapshots and location data.\nOpen-source and modular, welcoming contributions for new AI model integrations.",
    domain: ["AI"],
    stars: 18,
    forks: 4,
    url: "https://github.com/UmashankarGouda/SafeVision",
    image: "/images/repoimages/repoimg7.png",
    category: "Silver",
    maintainer:"Umashankar"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0e",
    },
    id: 8,
    name: "Dify",
    shortDescription:
      "Dify is an open-source platform for developing LLM-powered AI applications",
    longDescription:
      "Dify is an open-source platform for developing LLM-powered AI applications, designed to help developers and businesses efficiently build, deploy, and manage AI-driven solutions. With Dify, users can easily create and test complex AI workflows, integrate a wide range of advanced models and tools, and optimize their performance in real-world applications. The platform offers an intuitive interface, supporting RAG (Retrieval-Augmented Generation) pipelines, intelligent agent capabilities, and robust model management, enabling developers to seamlessly transition from prototype to production.\n\nDify's models and tools were originally stored in the main Dify repository. However, starting from Dify v1.0.0 (February 2025), all models and tools have been migrated into plugins and are now stored in this repository. All plugins in this repository will be uploaded to the Dify Marketplace, where they will be maintained and updated by the official Dify team. The plugins in the Marketplace are available for all Dify users to explore and use.",
    domain: ["AI& Plugins"],
    stars: 22,
    forks: 5,
    url: "https://github.com/langgenius/dify-official-plugins",
    image: "/images/repoimages/repoimg8.png",
    category: "Platinum",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba0f",
    },
    id: 9,
    name: "OpenHands",
    shortDescription:
      "a platform for software development agents powered by AI.",
    longDescription:
      "Welcome to OpenHands (formerly OpenDevin), a platform for software development agents powered by AI.\n\nOpenHands agents can do anything a human developer can: modify code, run commands, browse the web, call APIs, and yes—even copy code snippets from StackOverflow.",
    domain: ["AI Agents"],
    stars: 12,
    forks: 2,
    url: "https://github.com/All-Hands-AI/OpenHands",
    image: "/images/repoimages/repoimg9.png",
    category: "Gold",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681a07c0917ebd822fabba10",
    },
    id: 10,
    name: "Zed",
    shortDescription: "Zed, a high-performance, multiplayer code editor",
    longDescription:
      "Welcome to Zed, a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.",
    domain: ["  Rust"],
    stars: 10,
    forks: 1,
    url: "https://github.com/zed-industries/zed",
    image: "/images/repoimages/repoimg10.png",
    category: "Gold",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7eba677907c5f71bf712",
    },
    id: 11,
    name: "Discourse",
    shortDescription:
      "A platform for community discussion. Free, open, simple.",
    longDescription:
      "Discourse is a 100% open-source community platform for those who want complete control over how and where their site is run.\n\nOur platform has been battle-tested for over a decade and continues to evolve to meet users’ needs for a powerful community platform.\n\nWith Discourse, you can:\n\n💬 Create discussion topics to foster meaningful conversations.\n\n⚡️ Connect in real-time with built-in chat.\n\n🎨 Customize your experience with an ever-growing selection of official and community themes.\n\n🤖 Enhance your community with plugins, from chatbots powered by Discourse AI to advanced tools like SQL analysis with the Data Explorer plugin.",
    domain: ["RoR"],
    stars: 42,
    forks: 10,
    url: "https://github.com/discourse/discourse",
    image: "/images/repoimages/repoimg11.png",
    category: "Gold",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7ed5677907c5f71bf714",
    },
    id: 12,
    name: "Ultralytics",
    shortDescription: "YOLOv5 🚀 in PyTorch > ONNX > CoreML > TFLite",
    longDescription:
      "Ultralytics YOLOv5 🚀 is a cutting-edge, state-of-the-art (SOTA) computer vision model developed by Ultralytics. Based on the PyTorch framework, YOLOv5 is renowned for its ease of use, speed, and accuracy. It incorporates insights and best practices from extensive research and development, making it a popular choice for a wide range of vision AI tasks, including object detection, image segmentation, and image classification.",
    domain: ["Python"],
    stars: 42,
    forks: 10,
    url: "https://github.com/ultralytics/yolov5",
    image: "/images/repoimages/repoimg12.png",
    category: "",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7ee6677907c5f71bf716",
    },
    id: 13,
    name: "Smile",
    shortDescription: "",
    longDescription: "",
    domain: ["NLP"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Shahid6174/Smile",
    image: "/images/repoimages/repoimg13.png",
    category: "Bronze",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7ef6677907c5f71bf718",
    },
    id: 14,
    name: "QBC",
    shortDescription: "",
    longDescription: "",
    domain: ["Web Dev"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Shahid6174/QBC",
    image: "/images/repoimages/repoimg14.png",
    category: "Silver",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f09677907c5f71bf71a",
    },
    id: 15,
    name: "Image-Iguana",
    shortDescription: "Image Iguana is a versatile image processing application",
    longDescription:
      "Image Iguana is a versatile image processing application designed to help users manage, edit, and enhance their images effortlessly. With a user-friendly interface and powerful features, Image Iguana is suitable for both beginners and professionals alike.\n\nFeatures Image Editing: Crop, resize, and adjust brightness/contrast.Filters and Effects: Apply various filters to enhance your images.Batch Processing: Process multiple images at once for efficiency.User-Friendly Interface: Intuitive design for easy navigation.Cross-Platform Support: Available on Windows, macOS, and Linux.",
    domain: ["AI"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Shahid6174/Image-Iguana",
    image: "/images/repoimages/repoimg15.png",
    category: "Silver",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f13677907c5f71bf71c",
    },
    id: 16,
    name: "DynamicAmbulence",
    shortDescription: "This project is a Dynamic Ambulance Dispatch System",
    longDescription:
      "Dynamic Ambulance Dispatch System (DADS)This project is a Dynamic Ambulance Dispatch System designed to efficiently allocate ambulance resources during emergencies and facilitate patient admissions to hospitals based on various factors such as casualties, road conditions, and patient details.The main objectives of this system are:Emergency Response Optimization: To swiftly identify the nearest hospital to an emergency location, considering factors like road conditions and casualties.Patient Admission Management: To manage patient admissions to hospitals based on their proximity, available resources, and severity of their condition.Efficient Resource Allocation: To optimize the allocation of ambulance resources by determining the shortest routes and optimal hospitals for patient treatment.Data Management: To maintain a record of patient details, including their name, age, medical history, and contact information, for effective communication and follow-up.User Interface: To provide a user-friendly interface for emergency responders to input emergency details, select hospitals, and manage patient admissions.The system utilizes graph algorithms like Dijkstra's and Floyd-Warshall to calculate shortest paths and optimal routes between emergency locations and hospitals. It also employs linked lists and file I/O operations for efficient data storage and retrieval.Overall, this project aims to enhance emergency response efficiency and improve patient care by leveraging technology to streamline ambulance dispatch and hospital admissions processes.",
    domain: ["Web Dev"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Shahid6174/DynamicAmbulence",
    image: "/images/repoimages/repoimg16.png",
    category: "Silver",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f1c677907c5f71bf71e",
    },
    id: 17,
    name: "War-Data-Analysis",
    shortDescription: "a comprehensive database and visualization tool",
    longDescription:
      "The War Management System is a comprehensive database and visualization tool designed to manage and analyze military resources, personnel, missions, and equipment. Using historical data from World War II, this system provides insights into various aspects of military logistics, helping in strategic decision-making and historical analysis. Features include: \n\n Personnel Management: Track the details and status of military personnel, including roles, units, and contact information.Unit Management: Manage and analyze different military units, including their types, commanders, and locations.Mission Management: Record and visualize mission details, including objectives, status, and associated locations.Equipment Tracking: Maintain an inventory of military equipment, tracking their status and deployment.Supply Chain Management: Manage supplies, track their availability, and monitor usage across units.Data Visualization: Generate bar charts and other visualizations to analyze personnel status and other key metrics.",
    domain: ["Data Analytics"],
    stars: 42,
    forks: 10,
    url: "https://github.com/itsmenuma/War-Data-Analysis",
    image: "/images/repoimages/repoimg17.png",
    category: "Silver",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f26677907c5f71bf720",
    },
    id: 18,
    name: "openSUSE",
    shortDescription: "The makers' choice for sysadmins, developers and desktop",
    longDescription:
      "The openSUSE project is a worldwide effort that promotes the use of Linux everywhere. We create one of the world's best Linux distributions, as well as a variety of tools, such as OBS, OpenQA, Kiwi, YaST, OSEM. Working together in an open, transparent and friendly manner as part of the worldwide Free and Open Source Software community.The project is controlled by its community and relies on the contributions of individuals, working as testers, writers, translators, usability experts, artists and ambassadors or developers. The project embraces a wide variety of technology, people with different levels of expertise, speaking different languages and having different cultural backgrounds.",
    domain: ["Node.js"],
    stars: 42,
    forks: 10,
    url: "https://github.com/opensuse",
    image: "/images/repoimages/repoimg18.png",
    category: "Platinum",
    maintainer:"Numa"
  },
 
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 19,
    name: "GitLab",
    shortDescription: "the most comprehensive Al-powered DevSecOps Platform.",
    longDescription:
      "the most comprehensive Al-powered DevSecOps Platform.",
    domain: ["Ruby "],
    stars: 42,
    forks: 10,
    url: "https://github.com/gitlabhq",
    image: "/images/repoimages/repoimg19.png",
    category: "Platinum",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f30677907c5f71bf722",
    },
    id: 20,
    name: "Typing Tutor",
    shortDescription: "onsole-based application that helps users improve their typing",
    longDescription:
      "Typing Tutor is a console-based application that helps users improve their typing speed and accuracy. The program selects random paragraphs from a text file, and users are required to type them as quickly and accurately as possible. It provides feedback on typing speed (characters per minute) and accuracy and keeps track of previous attempts.Features Random Paragraph Selection: The program randomly selects a paragraph from a file for each typing session.Typing Speed and Accuracy: It calculates and displays the typing speed (in characters per minute) and accuracy percentage. Difficulty Levels: Users can select from three difficulty levels: Easy, Medium, and Hard.Tracking Attempts: The program keeps track of up to 10 typing attempts and displays the statistics for each.",
    domain: ["Web Dev"],
    stars: 42,
    forks: 10,
    url: "https://github.com/itsmenuma/Typing-Tutorr",
    image: "/images/repoimages/repoimg20.png",
    category: "Bronze",
    maintainer:"Numa"
  },
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 21,
    name: "Fin tech forge",
    shortDescription: "modular platform designed to provide smart, AI-powered financial tools",
    longDescription:
      "FinTechForge is an open-source modular platform designed to provide smart, AI-powered financial tools and insights. From sentiment analysis of financial news to secure authentication and dashboards, this project empowers developers, analysts, and students to build and extend finance-focused applications.",
    domain: ["MERN"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Community-Programmer/FinTechForge",
    image: "/images/repoimages/repoimg21.png",
    category: "Silver",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 22,
    name: "Local-loop",
    shortDescription: " platform designed to connect communities through local events",
    longDescription:
      "LocalLoop is an open-source neighborhood platform designed to connect communities through local events and deals. From discovering nearby activities to finding the best local offers, this project empowers neighborhoods to build stronger connections and support local businesses.",
    domain: ["MERN"],
    stars: 42,
    forks: 10,
    url: "https://github.com/SarthakRawat-1/local-loop",
    image: "/images/repoimages/repoimg22.png",
    category: "Silver",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 23,
    name: "Scrapy",
    shortDescription: "a fast high-level web crawling & scraping framework",
    longDescription:
      "Scrapy is a BSD-licensed fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. It can be used for a wide range of purposes, from data mining to monitoring and automated testing. Scrapy is maintained by Zyte (formerly Scrapinghub) and many other contributors.",
    domain: ["Python"],
    stars: 42,
    forks: 10,
    url: "https://github.com/scrapy/scrapy",
    image: "/images/repoimages/repoimg23.png",
    category: "Gold",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 24,
    name: "StockMind",
    shortDescription: "StockMind is a Stock peer competitor and Stock Analysis tool",
    longDescription:
      "StockMind is a Stock peer competitor and Stock Analysis tool that identifies peer competitors for a company and fetches its live stock prices.Features: Competitor Analysis – Uses Gemini LLM to find peer competitors based on the company's industry.Real-Time Stock Prices – Fetches live stock data using the yfinance library.Automated Ticker Retrieval – Extracts the stock ticker symbol from Alpha Vantage API.Company Information Fetching – Uses Wikipedia API to gather company details.US Market Focused – Currently designed for United States stock exchanges.",
    domain: ["Fintech AI"],
    stars: 42,
    forks: 10,
    url: "https://github.com/sharathchandra-patil/StockMind",
    image: "/images/repoimages/repoimg24.png",
    category: "Silver",
    maintainer:"TBD"
  },
  {
    _id: {
      $oid: "681c7f3a677907c5f71bf724",
    },
    id: 25,
    name: "DebateMate",
    shortDescription: "AI-Powered Debate Analysis & Trainer",
    longDescription:
      "DebateMate is an open-source platform that offers personalized, one-to-one AI training sessions with secure authentication. Users receive customized learning roadmaps powered by Gemini AI, and after uploading or live-recording debate audio, the system transcribes, analyzes performance, and provides corrective feedback to enhance debating and public speaking skills.",
    domain: ["MERN"],
    stars: 42,
    forks: 10,
    url: "https://github.com/Ankit27-09/DebateMate",
    image: "/images/repoimages/repoimg25.png",
    category: "Silver",
    maintainer:"TBD"
  },
];

export default reposData;