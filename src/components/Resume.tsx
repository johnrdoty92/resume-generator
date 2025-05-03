import { type ResumeProps } from "../types";
import { Document, type DocumentProps, Page } from "@react-pdf/renderer";
import { Header } from "./Header";
import { styles } from "../util/style";
import { WorkExperienceSection } from "./WorkExperienceSection";
import { WorkProjectsSection } from "./WorkProjectsSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";

export const Resume = ({
  contactInfo,
  skills,
  education,
  workExperience,
  workProjects,
  ...props
}: ResumeProps & DocumentProps) => {
  return (
    <Document {...props}>
      <Page size="LETTER" style={styles.page}>
        <Header {...contactInfo} />
        <SkillsSection skills={skills} />
        <WorkExperienceSection workExperience={workExperience} />
        <WorkProjectsSection workProjects={workProjects} />
        <EducationSection education={education} />
      </Page>
    </Document>
  );
};
