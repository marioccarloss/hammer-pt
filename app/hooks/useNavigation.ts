import { Navigation } from "../types/Navigation.d"

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
      slug: 'pedir-presupuesto',
      light: true,
      cta: true,
    },
  ]

  return { data }
}