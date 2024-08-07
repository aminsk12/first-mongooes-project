export type TMonths = 
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

  export type TAcademicSemesterName ='Autam'|'Summar'|'Fall';
  export type TAcademicSemesterCode ='01'|'02'|'03';

export type TAcadamicSemister={
name: TAcademicSemesterName,
code : TAcademicSemesterCode,
year: string,
startMonth: TMonths
endMonth: TMonths
}


export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};