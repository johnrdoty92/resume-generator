export type ContactInfo = {
  name: string;
  phone: string;
  email: string;
  socials: {
    linkedInUrl: string;
    githubUrl: string;
  };
};

export type WorkExperience = {
  company: string;
  start: Date;
  end: Date | "Present";
  title: string;
  location: string;
  achievements: string[];
};

export type WorkProject = {
  projectName: string;
  url: string;
  achievements: string[];
};

export type Education = {
  school: string;
  year: number;
  degreeOrProgram: string;
  gpa?: number;
  description: string;
};

export type ResumeProps = {
  author: string;
  title: string;
  keywords: string;
  skills: string[];
  contactInfo: ContactInfo;
  workExperience: WorkExperience[];
  workProjects: WorkProject[];
  education: Education[];
};
