import imageBanner from '../../assets/images/hammer.png'
import { Home } from '../types/Home.d'

export default function useHome() {
  const data: Home = {
    title: 'Confía en Hammer Insurance ¡somos vecinos!',
    tagline: 'Seguro integral en el que puedes confiar',
    description: 'Calidad en el trato al cliente y los mejores precios del mercado, amplias coberturas y facilidad en los pagos.',
    image: imageBanner,
    ctas: [
      {
        name: 'Servicios',
        url: 'servicios',
      },
      {
        name: 'Solicitar presupuesto',
        url: 'presupuesto',
        outlined: true
      }
    ]
  }

  return { data };
}
