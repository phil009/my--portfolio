const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2021 - Present",
    description:
      "Lead the frontend development team in creating responsive and accessible web applications using React and Next.js.",
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions Co.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained client websites, focusing on performance optimization and cross-browser compatibility.",
  },
  {
    title: "Junior Web Developer",
    company: "Digital Creations LLC",
    period: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of company websites and web applications using HTML, CSS, and JavaScript.",
  },
];

export default function WorkExperience() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 ml-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {exp.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              {exp.company}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center mb-2">
              {exp.period}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
