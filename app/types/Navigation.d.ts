export type Navigation = {
  name: string,
  slug: string,
  childs?: Navigation[],
  light?: boolean,
  cta?: boolean,
}