export interface ICourseData {
  course_id: string;
  description: string;
  title: string;
  website: string;
  skills: string[];
}

export interface IEducationData {
  area: string;
  courses: ICourseData[];
  gpa: string;
  startDate: string;
  endDate?: string;
  institution: string;
  studyType: string;
  website: string;
}

export interface IInterestData {
  keywords: string[];
  name: string;
}

export interface ILanguageData {
  fluency: string;
  language: string;
}

export interface ISkillData {
  keywords: string[];
  level: string;
  name: string;
}

export interface IVolunteerData {
  highlights: string[];
  organization: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  website: string;
}

export interface IWorkData {
  company: string;
  position: string;
  summary: string;
  website: string;
  highlights: string[];
  startDate: string;
  endDate?: string;

  skills: string[];
}

export interface IBasicsData {
  email: string;
  label: string;
  location: {
    city: string;
    countryCode: string;
    postalCode: string;
    region: string;
  };
  name: string;
  picture: string;
  summary: string;
  website: string;
  github: string;
  linkedin: string;
  pdf: string;
}

export interface IResumeData {
  basics: IBasicsData;
  education: IEducationData[];
  interests: IInterestData[];
  languages: ILanguageData[];
  skills: ISkillData[];
  volunteer: IVolunteerData[];
  work: IWorkData[];
}

export interface IProfile {
  name: string;
  title: string;
  pictureUrl: string;
  resumeUrl: string;
  accounts: Array<any>;
}

export interface IPersonalData {
  name: string;
  email: string;
  job: string;
  picture: string;
  accounts: any;
}
