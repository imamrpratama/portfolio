import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Eduvice",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    description:
      "This project is built using Laravel, PHP, MySQL, and Tailwind CSS. It powers Eduvice, a web platform that enables users to donate, track, and manage electronic devices to be refurbished and distributed to students in need, promoting digital inclusion and reducing electronic waste.",
    images: [
      "/portfolio/images/eduvice_1.png",
      "/portfolio/images/eduvice_2.png",
      "/portfolio/images/eduvice_3.png",
    ],
    demo: "https://eduvice.id",
  },
  {
    id: 2,
    title: "Indonesia Sustainability Forum",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    description:
      "This website is built using Laravel, MySQL, and Tailwind CSS, delivering a modern, responsive, and secure web platform. It powers the Indonesia Sustainability Forum site, providing information about the event and enabling users to register as participants seamlessly.",
    images: [
      "/portfolio/images/isf_1.png",
      "/portfolio/images/isf_2.png",
      "/portfolio/images/isf_3.png",
    ],
    demo: "https://indonesiasustainabilityforum.co.id/",
  },
  {
    id: 3,
    title: "Asset Management System",
    tech: ["Laravel", "REST API", "MS SQL"],
    description:
      "Built using Laravel, REST API, and MS SQL, designed to streamline organizational asset tracking and maintenance. The Asset Management System enables users to efficiently manage asset records, monitor conditions, and automate maintenance scheduling.",
    images: [
      "/portfolio/images/asset_1.png",
      "/portfolio/images/asset_2.png",
      "/portfolio/images/asset_3.png",
    ],
    demo: "https://demo.example.com",
  },
  {
    id: 4,
    title: "Villa Berastagimas",
    tech: ["Laravel", "REST API", "Tailwind CSS", "Xendit"],
    description:
      "Developed with Laravel, REST API, and MS SQL, this system serves as a comprehensive villa booking platform integrated with asset management data. It enables users to reserve villas, track booking status, and complete payments securely through the Xendit payment gateway.",
    images: ["/portfolio/images/villa_1.png", "/portfolio/images/villa_2.png"],
    demo: "https://villaberastagimas.com",
  },
  {
    id: 5,
    title: "FAMA Asset Management",
    tech: ["Flutter", "REST API", "Firebase Cloud Messaging"],
    description:
      "Built with Flutter and integrated through REST API with the Asset Management System, this mobile application enables users to perform assigned tasks and submit real-time proof such as photos and locations. Designed for field operations, it streamlines task tracking, verification, and reporting, ensuring transparency and accountability across maintenance and asset management activities.",
    images: ["/portfolio/images/fama.png"],
    demo: "https://play.google.com/store/apps/details?id=com.assets_management.fama&hl=en",
  },
  {
    id: 6,
    title: "Automation Google Drive Backup",
    tech: ["Laravel", "Google Drive API", "Automation"],
    description:
      "Developed with Laravel, this project automates the process of backing up files to Google Drive with integrated email notifications and error handling. It allows users to schedule and manage backups directly from the Laravel console, ensuring secure data storage, simplified recovery, and reliable automation for maintaining critical project files.",
    images: [
      "/portfolio/images/gdrive_1.png",
      "/portfolio/images/gdrive_2.png",
    ],
    demo: "https://github.com/imamrpratama/automation-gdrive-backup",
  },
  {
    id: 7,
    title: "Harmoni Rent Car",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    description:
      "Built with Next.js, this website serves as a company profile platform for Harmoni Rent Car, showcasing available vehicles and rental services. It features a clean, responsive design where users can browse cars, view details, and make bookings easily via WhatsApp, providing a simple and direct communication channel for customers.",
    images: [
      "/portfolio/images/harmoni_1.png",
      "/portfolio/images/harmoni_2.png",
    ],
    demo: "https://harmonirentcar.com",
  },
];
