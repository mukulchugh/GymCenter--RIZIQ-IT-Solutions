import React, { useState } from "react";
import SharedNav from "../Shared/SharedNav";
import FitnessOneImage from "../../../assets/Image/Fitness/kik.png";
import FitnessTwoImage from "../../../assets/Image/Fitness/nu.png";
import CareersImage from "../../../assets/Image/Careers/careers.jpeg";
import Package from "../Package/Package";

const Careers = () => {
  return (
    <>
      <SharedNav />
      <div className="fitness_margin grid grid-cols-1 md:grid-cols-2 gap-8 mid-container">
        <div className="fitness_content z-20 order-2 md:order-1">
          <span className="bg-[#dbdce0] text-xs sm:text-sm md:text-md p-2 rounded-3xl text-[#071B46]">
            <button className="btn btn-xs hover:bg-slate-400 border-0 rounded-3xl bg-white text-[#071B46]">
              Careers
            </button>{" "}
            Discover Your Potential
          </span>

          <h1 className="md:text-[60px] text-[50px] my-5 text-primary font-bold">
            Join Our Team
          </h1>
          <p className="text-[#071B46] mb-5 text-justify">
            Founded in 2002, we are the innovators
            of the 24/7 fitness concept. Over the
            span of 21 years, Anytime Fitness has
            become the world’s largest 24/7
            fitness franchise, with thousands of
            clubs in more than 40+ countries. But
            we couldn’t do it without the hard
            work and dedication of a great group
            of people, and we are always on the
            lookout for more.
            <br />
            <br />
            If you are looking for a career in
            fitness, or just want to stay fit and
            healthy, then we at Anytime Fitness
            want to offer you a chance to become
            part of our amazing team and build a
            career in gym. If you are looking for
            a challenging and rewarding career as
            a gym trainer, then Anytime Fitness is
            the perfect place for you.
          </p>
          {/* <div className="">
            <button className="btn btn-primary text-md w-36 font-bold">
              Get Started
            </button>
            <button className="btn bg-[#E5E5E5] mt-5 sm-mt-0 text-md w-36 ml-4 hover:text-white font-bold border-0 text-[#071B46]">
              Preview
            </button>
          </div> */}
          {jobListings.map((job) => (
            <Accordion
              title={job.title}
              description={job.description}
            />
          ))}
        </div>
        <div className="rounded-xl order-1 h-[500px] md:order-2 z-10 bg-[#071B46] flex items-center justify-center">
          <img
            src={CareersImage}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Careers;

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <div
        className="border-b border-gray-200"
        onClick={toggleAccordion}
        role="button"
      >
        <button className="flex items-center justify-between w-full px-4 py-3 text-left focus:outline-none">
          <span className="text-lg font-medium text-gray-800">
            {title}
          </span>
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 8a1 1 0 0 1 1.7-.7l3.59 3.58L16.29 7.3a1 1 0 1 1 1.42 1.4l-6 6a1 1 0 0 1-1.42 0l-4-4A1 1 0 0 1 6 8z"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="p-4">
          <h4
            className="font-bold 
            text-gray-700
          "
          >
            About
          </h4>
          <p className="text-gray-700">
            {description.content}
          </p>
          <h4
            className="mt-4
            font-bold
          "
          >
            Required Skills
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {description.requiredSkills.map(
              (skill) => (
                <li>{skill}</li>
              )
            )}
          </ul>

          <h4 className="mt-4 font-bold">
            Qualifications
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {description.qualifications.map(
              (qualification) => (
                <li>{qualification}</li>
              )
            )}
          </ul>

          <h4 className="mt-4 font-bold">
            Other Details
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Experience: </b>
              {
                description.otherDetails
                  .experience
              }
            </li>
            {/* compensation: "10 LPA to 12 LPA",
            experience: "5-8 Years", position:
            "Full time", contact: "Please send
            your resume to
            marketingcareers@example.com", */}
            <li>
              <b>Compensation: </b>
              {
                description.otherDetails
                  .compensation
              }
            </li>
            <li>
              <b>Position: </b>
              {description.otherDetails.position}
            </li>
            <p className="mt-4">
              {description.otherDetails.contact}
            </p>
          </ul>
        </div>
      )}
    </div>
  );
};

const jobListings = [
  {
    title: "L&D Manager",
    description: {
      content:
        "Develop and maintain Learning Management System (LMS) from scratch. Conceptualize, design, and maintain relevant training content in consultation with SMEs and relevant departments. Analyze and identify learning needs to develop new training programs or modify/improve existing training programs. Designs and implements highly effective, results-driven training and development strategies in accordance with the organization’s objectives and employees’ personal goals and growth. Assess the success of development plans and help employees make the most of learning opportunities. Conduct and deliver classroom training, demonstrations, on-the-job training, role-play, self-study, meetings, conferences, and workshops. Design the SOP’s at the Corporate and club level viz Departmental processes, Recruitment, On-boarding, etc. Skill enhancement at the Corporate & Club level. Enhances organizational performance with learning and development activities and new initiatives. Engage in coaching and relationship building at Corporate and Club level. Research and identify external consultants and trainers to conduct training in specific areas. Develop continuous process improvements to enhance organizational effectiveness. Identifies and incorporates best practices and lessons learned into program plans. Perform facilitation of Change management initiatives and review of current development programs to ensure linkage to company goals. Assess Leadership Development, team development, organizational programs & Practices.",
      requiredSkills: [
        "Strong written and verbal communication skills",
        "Good interpersonal skills",
        "Go-getter attitude enhancement",
        "Proactive and highly action-oriented",
        "Prior experience in Sales training (preferred)",
        "Prior experience in the Fitness industry (preferred)",
      ],
      qualifications: [
        "BSc. or BA degree in Business, Psychology, or other related area",
        "Master’s degree in behavioral science or MBA in Human Resources, or any related area",
        "Certified in CPLP, TTT or NLP",
      ],
      otherDetails: {
        compensation: "8 LPA to 10 LPA",
        experience: "5-7 Years",
        position: "Full time",
        contact:
          "Please share your resume at hr@anytimefitness.in",
      },
    },
  },
  {
    title: "Frontend Developer",
    description: {
      content:
        "We are seeking a skilled Frontend Developer to join our team. The ideal candidate should have a strong understanding of HTML, CSS, and JavaScript. Proficiency in modern frontend frameworks like React or Vue.js is required. Experience with responsive design and cross-browser compatibility is a plus. Collaborate with the design team to translate UI/UX wireframes into high-quality code. Optimize applications for maximum speed and scalability. Stay up-to-date with the latest frontend development trends and technologies.",
      requiredSkills: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with frontend frameworks like React or Vue.js",
        "Knowledge of responsive design and cross-browser compatibility",
        "Strong problem-solving and debugging skills",
        "Familiarity with version control systems (e.g., Git)",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or a related field",
        "Proven work experience as a Frontend Developer or similar role",
        "Portfolio of previous frontend projects",
      ],
      otherDetails: {
        compensation: "Negotiable",
        experience: "2-4 Years",
        position: "Full time",
        contact:
          "Please submit your application to frontendjobs@example.com",
      },
    },
  },
  {
    title: "Marketing Manager",
    description: {
      content:
        "We are hiring a Marketing Manager to oversee our marketing department. The candidate should have a strong understanding of marketing principles and strategies. Develop and execute marketing campaigns across various channels, including digital marketing, social media, email marketing, and content creation. Analyze market trends and competition to identify new opportunities. Collaborate with cross-functional teams to develop and implement marketing plans. Monitor and evaluate the performance of marketing campaigns. Manage the marketing budget and allocate resources effectively.",
      requiredSkills: [
        "Strong knowledge of marketing principles and strategies",
        "Experience in developing and executing marketing campaigns",
        "Proficiency in digital marketing channels",
        "Excellent analytical and problem-solving skills",
        "Effective communication and leadership abilities",
      ],
      qualifications: [
        "Bachelor's degree in Marketing, Business, or a related field",
        "Proven work experience as a Marketing Manager or similar role",
        "In-depth understanding of market research and analysis",
        "Familiarity with marketing automation tools",
      ],
      otherDetails: {
        compensation: "10 LPA to 12 LPA",
        experience: "5-8 Years",
        position: "Full time",
        contact:
          "Please send your resume to marketingcareers@example.com",
      },
    },
  },
  {
    title: "Data Scientist",
    description: {
      content:
        "We are seeking a Data Scientist to join our data analytics team. The candidate should have a strong background in statistical analysis, machine learning, and data visualization. Develop predictive models and algorithms to extract insights from large datasets. Clean and preprocess data for analysis. Collaborate with cross-functional teams to identify business problems and provide data-driven solutions. Communicate findings and present data-driven insights to stakeholders. Stay up-to-date with the latest data science tools and techniques.",
      requiredSkills: [
        "Proficiency in statistical analysis and machine learning techniques",
        "Strong programming skills in Python or R",
        "Experience with data visualization tools",
        "Solid understanding of database systems and SQL",
        "Excellent problem-solving and critical thinking abilities",
      ],
      qualifications: [
        "Master's degree or higher in Data Science, Statistics, or a related field",
        "Proven work experience as a Data Scientist or similar role",
        "Hands-on experience with data analysis and modeling tools",
        "Strong knowledge of data mining and cleaning techniques",
      ],
      otherDetails: {
        compensation: "Negotiable",
        experience: "3-5 Years",
        position: "Full time",
        contact:
          "Please submit your application to datasciencejobs@example.com",
      },
    },
  },
  {
    title: "UX Designer",
    description: {
      content:
        "We are looking for a talented UX Designer to join our design team. The candidate should have a strong understanding of user-centered design principles and processes. Conduct user research and create user personas. Develop wireframes, prototypes, and interaction designs. Collaborate with cross-functional teams to ensure a seamless user experience. Conduct usability testing and gather user feedback. Stay updated with the latest UX design trends and best practices.",
      requiredSkills: [
        "Solid understanding of user-centered design principles",
        "Proficiency in design tools such as Sketch, Adobe XD, or Figma",
        "Experience with user research and usability testing",
        "Strong communication and collaboration skills",
        "Attention to detail and strong problem-solving abilities",
      ],
      qualifications: [
        "Bachelor's degree in Design, Human-Computer Interaction, or a related field",
        "Proven work experience as a UX Designer or similar role",
        "Portfolio showcasing previous UX design projects",
      ],
      otherDetails: {
        compensation: "8 LPA to 10 LPA",
        experience: "2-4 Years",
        position: "Full time",
        contact:
          "Please send your portfolio and resume to uxdesignjobs@example.com",
      },
    },
  },
  {
    title: "Content Writer",
    description: {
      content:
        "We are seeking a creative and talented Content Writer to join our marketing team. The candidate should have excellent writing and editing skills. Develop engaging and informative content for various channels, including websites, blogs, social media, and marketing collaterals. Conduct research to gather relevant information for content creation. Optimize content for SEO and target audience. Collaborate with cross-functional teams to ensure content consistency and brand voice.",
      requiredSkills: [
        "Excellent writing and editing skills",
        "Strong command of the English language",
        "Ability to research and gather information",
        "Familiarity with SEO and content optimization",
        "Attention to detail and ability to meet deadlines",
      ],
      qualifications: [
        "Bachelor's degree in English, Journalism, Marketing, or a related field",
        "Proven work experience as a Content Writer or similar role",
        "Portfolio showcasing writing samples",
        "Familiarity with content management systems (CMS)",
      ],
      otherDetails: {
        compensation: "6 LPA to 8 LPA",
        experience: "2-4 Years",
        position: "Full time",
        contact:
          "Please submit your writing samples and resume to contentjobs@example.com",
      },
    },
  },
  {
    title: "Project Manager",
    description: {
      content:
        "We are hiring a Project Manager to lead and manage our projects. The candidate should have strong leadership and organizational skills. Define project scopes, goals, and deliverables. Develop and maintain project timelines and budgets. Coordinate and communicate with stakeholders, team members, and vendors. Monitor project progress and ensure timely completion. Identify and mitigate project risks. Conduct project evaluations and provide reports to stakeholders.",
      requiredSkills: [
        "Strong leadership and organizational skills",
        "Excellent communication and interpersonal abilities",
        "Experience in project management methodologies",
        "Knowledge of project management tools",
        "Ability to manage multiple projects simultaneously",
      ],
      qualifications: [
        "Bachelor's degree in Project Management, Business, or a related field",
        "Proven work experience as a Project Manager or similar role",
        "Project management certification (e.g., PMP) preferred",
        "Familiarity with Agile or Scrum methodologies",
      ],
      otherDetails: {
        compensation: "10 LPA to 12 LPA",
        experience: "5-8 Years",
        position: "Full time",
        contact:
          "Please send your resume to projectmanagerjobs@example.com",
      },
    },
  },
  {
    title: "Sales Executive",
    description: {
      content:
        "We are seeking a dynamic and results-oriented Sales Executive to join our sales team. The candidate should have excellent communication and negotiation skills. Identify and pursue new sales leads and opportunities. Build and maintain relationships with clients. Prepare sales presentations and proposals. Achieve sales targets and contribute to the growth of the organization. Stay updated with industry trends and competitor activities.",
      requiredSkills: [
        "Strong communication and negotiation skills",
        "Proven ability to meet or exceed sales targets",
        "Excellent interpersonal and relationship-building abilities",
        "Ability to work in a target-driven environment",
        "Familiarity with CRM software",
      ],
      qualifications: [
        "Bachelor's degree in Business, Marketing, or a related field",
        "Proven work experience as a Sales Executive or similar role",
        "Track record of successful sales performance",
        "Understanding of sales techniques and principles",
      ],
      otherDetails: {
        compensation: "Commission-based",
        experience: "2-5 Years",
        position: "Full time",
        contact:
          "Please submit your application to salesexecutivejobs@example.com",
      },
    },
  },
  {
    title: "HR Generalist",
    description: {
      content:
        "We are hiring an HR Generalist to join our human resources department. The candidate should have a strong understanding of HR processes and practices. Handle end-to-end recruitment, including sourcing, screening, and interviewing candidates. Administer HR policies and procedures. Assist in employee onboarding and offboarding processes. Provide guidance and support to employees on HR-related matters. Maintain employee records and HR databases. Assist in performance management and employee engagement initiatives.",
      requiredSkills: [
        "Solid knowledge of HR processes and practices",
        "Experience in end-to-end recruitment",
        "Strong interpersonal and communication skills",
        "Ability to handle sensitive and confidential information",
        "Familiarity with HRIS software",
      ],
      qualifications: [
        "Bachelor's degree in Human Resources, Business, or a related field",
        "Proven work experience as an HR Generalist or similar role",
        "Knowledge of employment laws and regulations",
        "Certification in HR management (e.g., PHR, SHRM-CP) preferred",
      ],
      otherDetails: {
        compensation: "7 LPA to 9 LPA",
        experience: "3-5 Years",
        position: "Full time",
        contact:
          "Please send your resume to hrgeneralistjobs@example.com",
      },
    },
  },
  {
    title: "Graphic Designer",
    description: {
      content:
        "We are seeking a talented Graphic Designer to join our design team. The candidate should have a strong portfolio showcasing creative and visually appealing designs. Create graphics and visual elements for various marketing collaterals, websites, and social media platforms. Collaborate with cross-functional teams to understand design requirements. Stay updated with design trends and tools. Use design software to create high-quality graphics.",
      requiredSkills: [
        "Proficiency in design software such as Adobe Photoshop, Illustrator, and InDesign",
        "Strong creative and artistic abilities",
        "Ability to understand design requirements and translate them into visually appealing graphics",
        "Attention to detail and ability to meet deadlines",
        "Strong communication and collaboration skills",
      ],
      qualifications: [
        "Bachelor's degree in Graphic Design, Fine Arts, or a related field",
        "Proven work experience as a Graphic Designer or similar role",
        "Portfolio showcasing creative design projects",
        "Knowledge of print and digital design principles",
      ],
      otherDetails: {
        compensation: "6 LPA to 8 LPA",
        experience: "2-4 Years",
        position: "Full time",
        contact:
          "Please submit your portfolio and resume to graphicdesignjobs@example.com",
      },
    },
  },
  {
    title: "Financial Analyst",
    description: {
      content:
        "We are hiring a Financial Analyst to join our finance team. The candidate should have a strong background in financial analysis and reporting. Analyze financial data and generate reports for management. Conduct financial forecasting and budgeting. Provide insights and recommendations based on financial analysis. Collaborate with cross-functional teams to support business decision-making. Stay updated with financial regulations and industry trends.",
      requiredSkills: [
        "Strong analytical and problem-solving skills",
        "Proficiency in financial analysis tools and techniques",
        "Excellent knowledge of financial statements and ratios",
        "Ability to interpret and present financial data",
        "Strong attention to detail and accuracy",
      ],
      qualifications: [
        "Bachelor's degree in Finance, Accounting, or a related field",
        "Proven work experience as a Financial Analyst or similar role",
        "Advanced knowledge of MS Excel",
        "Familiarity with financial software and ERP systems",
      ],
      otherDetails: {
        compensation: "9 LPA to 11 LPA",
        experience: "3-6 Years",
        position: "Full time",
        contact:
          "Please send your resume to financialanalystjobs@example.com",
      },
    },
  },
  {
    title: "Operations Manager",
    description: {
      content:
        "We are seeking an Operations Manager to oversee our day-to-day operations. The candidate should have strong leadership and problem-solving skills. Develop and implement operational policies and procedures. Monitor and improve operational processes and efficiency. Manage and allocate resources effectively. Collaborate with cross-functional teams to ensure smooth operations. Identify areas for improvement and implement corrective actions.",
      requiredSkills: [
        "Strong leadership and decision-making abilities",
        "Excellent problem-solving and analytical skills",
        "Ability to manage and allocate resources",
        "Knowledge of operational policies and procedures",
        "Effective communication and interpersonal abilities",
      ],
      qualifications: [
        "Bachelor's degree in Business, Operations Management, or a related field",
        "Proven work experience as an Operations Manager or similar role",
        "Experience in process improvement and efficiency",
        "Knowledge of project management principles",
      ],
      otherDetails: {
        compensation: "10 LPA to 12 LPA",
        experience: "5-8 Years",
        position: "Full time",
        contact:
          "Please send your resume to operationsmanagerjobs@example.com",
      },
    },
  },
  {
    title: "Customer Support Representative",
    description: {
      content:
        "We are hiring a Customer Support Representative to join our customer service team. The candidate should have excellent communication and problem-solving skills. Handle customer inquiries and provide accurate and timely responses. Assist customers in troubleshooting issues and resolving complaints. Maintain customer records and update the CRM system. Collaborate with cross-functional teams to ensure customer satisfaction.",
      requiredSkills: [
        "Strong communication and interpersonal skills",
        "Ability to handle customer inquiries and complaints",
        "Excellent problem-solving and decision-making abilities",
        "Attention to detail and ability to multitask",
        "Familiarity with CRM software",
      ],
      qualifications: [
        "High school diploma or equivalent",
        "Proven work experience in customer service or a related field",
        "Knowledge of customer service principles and practices",
        "Strong computer skills",
      ],
      otherDetails: {
        compensation: "4 LPA to 6 LPA",
        experience: "1-3 Years",
        position: "Full time",
        contact:
          "Please send your resume to customersupportjobs@example.com",
      },
    },
  },
];
