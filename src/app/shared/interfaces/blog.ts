interface BlogPoint {
  _id: string;
  head: string;
  body: string;
}

export interface Blog {
  _id: string;
  label: string;
  heading: string;
  subHeading: string;
  date: string;
  img: string;
  points: BlogPoint[];
  __v: number;
}
