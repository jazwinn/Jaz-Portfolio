export interface Role {
  company: string;
  title: string;
  period: string;
  current?: boolean;
  location: string;
  points: string[];
  tech: string[];
}

export const experience: Role[] = [
  {
    company: "Quantified Energy Labs Pte Ltd",
    title: "C++ Developer Intern",
    period: "April 2026 \u2014 Present",
    current: true,
    location: "Singapore",
    points: [
      "Migrated a drone application from Windows to Linux ARM, reducing payload heat generated and improving power efficiency by 15\u201320%.",
      "Built a multi-stage frame alignment, sampling and stitching video pipeline with coarse-to-fine refinement passes to generate high-fidelity composite modules.",
      "Built an AI-powered module corner detector with robust geometric fitting, reducing manual parameter calibration to streamline end-to-end post-processing automation.",
      "Integrated an ESP microcontroller with a field power supply to enable remote power control, centralising device management and enabling end-to-end test automation.",
    ],
    tech: [
      "C++",
      "Linux ARM",
      "Computer Vision",
      "Embedded",
      "Image Stitching",
      "Test Automation",
    ],
  },
  {
    company: "Digipen Institute of Technology",
    title: "Teaching Assistant",
    period: "September 2024 \u2014 April 2025",
    location: "Singapore",
    points: [
      "Mentored freshmen through computing and mathematics modules, working through problem sets and debugging sessions one on one.",
      "Translated dense lecture material into practical guidance, focusing on the reasoning behind a solution rather than the answer itself.",
    ],
    tech: ["C++", "Mathematics", "Mentoring"],
  },
];

export const education = {
  school: "Singapore Institute of Technology (DigiPen)",
  degree: "BSc Computer Science, Real-Time Interactive Simulation",
  period: "August 2023 \u2014 April 2027",
  modules: ["Machine Learning", "Parallel Programming", "Low-Level Programming"],
};
