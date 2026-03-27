export type Project = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Forecast Studio",
    description:
      "A forecasting workflow for testing feature engineering choices, comparing models, and communicating uncertainty with clear visual outputs.",
    image: "/images/projects/project-forecast.svg",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    title: "Signal Explorer",
    description:
      "An analysis environment for moving from raw, messy event streams to more useful diagnostics, metrics, and model-ready datasets.",
    image: "/images/projects/project-signal.svg",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    title: "Model Audit Notebook",
    description:
      "A lightweight toolkit for evaluating model behavior, surfacing failure modes, and producing concise reports for stakeholders.",
    image: "/images/projects/project-audit.svg",
    githubUrl: "https://github.com/",
    featured: true,
  },
];
