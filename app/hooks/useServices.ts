import imgCar from '../../assets/images/car.png'
import imgHome from '../../assets/images/home.png'
import imgMarket from '../../assets/images/market.png'
import imgBrand from '../../assets/images/brand.png'
import { Service } from '../types/Service.d'

export default function useServices () {
  const data: Service[] = [
    {
      title: 'Auto',
      description: 'Múltiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!',
      image: imgCar,
    },
    {
      title: 'Hogar',
      description: 'Protege tu casa, propiedad en alquiler, casa móvil o seguro de inquilino. Elige entre múltiples opciones.',
      image: imgHome,
    },
    {
      title: 'Negocio',
      description: 'Asegura tu negocio, tus trabajadores, y cualquier vehículoculo commercial. General Liability, Workers Comp, Bonds etc.',
      image: imgMarket,
    },
    {
      title: 'Placas',
      description: 'Hammer renueva las placas y calcomanías de su auto, además de gestionar el cambio de propietario y demás tramitaciones.',
      image: imgBrand,
    }
  ]

  return { data }
}