export type Home = {
  title: string,
  tagline: string,
  description: string,
  image: {
    src: string
  },
  ctas: Ctas[]
}

export type Ctas = {
  name: string,
  url: string,
  btn_outlined?: boolean
}
