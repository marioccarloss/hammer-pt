type Service = {
  id?: number,
  title: string,
  description: string
  image?: {
    src: string,
  }
}

export type Services = {
  title: string,
  info: Service[]
}
