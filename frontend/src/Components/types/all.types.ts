export type ButtonProps = {
  to?: string;
  className: string;
  href?: string;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  disabled: boolean;
};

export type dataType = {
  name?: string;
  username?: string;
  identifier?: string;
  email?: string;
  password: string | number;
  confirmPassword?: string | number;
};
export type AuthContextType = {
  isLoggedIn: boolean;
  token: string | number | null;
  userInfos: userInfosType | null;
  isLoading: boolean;
  login: (userInfos: userInfosType | null, token: string) => void;
  logOut: () => void;
};
export type userInfosType = {
  createdAt: string;
  email: string;
  name: string;
  role: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
};
export type tokenType = string | null;
export type topbarLinksType = {
  createdAt: string;
  href: string;
  parent: string;
  title: string;
  updatedAt: string;
  __v: string;
  _id: string;
  id: string;
  submenus?: topbarLinksType[];
};
export type courseCategoryIDType = {
  createdAt: string;
  name: string;
  title: string;
  updatedAt: string;
  __v: string;
  _id: string;
};
export type courseCommentAnswerType = {
  answer: number;
  body: string;
  course: string;
  createdAt: string;
  creator: courseCreatorType;
  isAnswer: number;
  mainCommendID: string;
  score: number;
  updatedAt: string;
  __v: number;
  _id: string;
};
export type courseCommentType = {
  answer: number;
  answerContent: courseCommentAnswerType;
  body: string;
  createdAt: string;
  creator: courseCreatorType;
  isAnswer: number;
  score: number;
  updatedAt: string;
  __v: string;
  _id: string;
};
export type courseCreatorType = {
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  profile: string;
  role: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
};
export type courseSessionType = {
  course: string;
  createdAt: string;
  free: string;
  time: string;
  title: string;
  updatedAt: string;
  __v: string;
  _id: string;
};
export type courseType = {
  categoryID: courseCategoryIDType;
  comments: courseCommentType[];
  courseStudentsCount: number;
  cover: string;
  createdAt: string;
  creator: courseCreatorType[];
  description: string;
  discount: number;
  isComplete: number;
  isUserRegisteredToThisCourse: boolean;
  name: string;
  price: number;
  sessions: courseSessionType[];
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
export type lastCourseType = {
  categoryID: courseCategoryIDType;
  courseAverageScore: number;
  cover: string;
  createdAt: string;
  creator: string;
  description: string;
  discount: number;
  isComplete: number;
  name: string;
  price: number;
  registers: number;
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  __v: number;
  _id: string;
  isSlider?: boolean;
};
export type articleType = {
  body: string;
  categoryID: courseCategoryIDType;
  cover: string;
  createdAt: string;
  creator: courseCreatorType;
  description: string;
  publish: number;
  shortName: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
