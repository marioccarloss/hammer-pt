import { Navigation } from "../types/Navigation.d"
import imageBg from '../../assets/images/bg.png'

export default function useNavigation() {
  const data: Navigation[] = [
    {
      name: 'Servicios',
      slug: 'servicios',
      childs: [
        {
          name: 'Servicio 1',
          slug: 'servicio-1',
        },
        {
          name: 'Servicio 2',
          slug: 'servicio-2',
        },
        {
          name: 'Servicio 2',
          slug: 'servicio-2',
        }
      ]
    },
    {
      name: 'Pagos',
      slug: 'pagos',
    },
    {
      name: 'Oficinas',
      slug: 'oficinas',
    },
    {
      name: 'Blog',
      slug: 'blog',
    },
    {
      name: 'Nosotros',
      slug: 'nosotros',
      light: true,
    },
    {
      name: 'Contacto',
      slug: 'contacto',
      light: true,
    },
    {
      name: 'Pedir Presupuesto',
      slug: 'presupuesto',
      light: true,
      cta: true,
    },
  ]

  const bgImage = {
    image: {
      src: imageBg,
      alt: 'imagen de fondo'
    }
  }

  return { data, bgImage }
}