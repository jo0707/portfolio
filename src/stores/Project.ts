export class Project {
  id: number;
  title: string;
  desc: string;
  image: string;
  github?: string;
  demo?: string;

  constructor(
    id: number,
    title: string,
    desc: string,
    image: string,
    github?: string,
    demo?: string
  ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.github = github;
    this.demo = demo;
  }
}
