import useServices from '../../hooks/useServices';
import { Service } from '../../types/Service.d';
import Bbb from '../icons/Bbb';
import Google from '../icons/Google';
import Start from '../icons/Start';
import Yelp from '../icons/Yelp';
import Image from 'next/image';
import Arrow from '../icons/Arrow';

export default function OurServices () {
  const { data: services } = useServices();
  
  return (
    <div className='lg:pb-10'>
      <div className='lg:flex justify-center gap-5 mt-2 lg:mt-6 mb-26 lg:mb-24'>
        <div className='flex justify-center items-center text-center gap-3'>
          <b className='block leading-none text-[16px] font-extra-bold text-secondary'>4,9</b>
          <div className='flex gap-1'>
            {Array(5).fill(0).map((_, i) => <Start key={i} />)}
          </div>
          <span className='text-secondary text-[10px] block leading-none'>(525 Reviews de Clientes)</span>
        </div>
        <div className='flex justify-center items-center text-center gap-3'>
          <div className='rounded-lg px-2 py-4 shadow-2xl'>
            <div className='h-[35px] min-w-[100px] flex items-center justify-center bg-white'>
              <Google />
            </div>
          </div>
          <div className='rounded-lg px-2 py-4 shadow-2xl'>
            <div className='h-[35px] min-w-[100px] flex items-center justify-center bg-white'>
              <Bbb />
            </div>
          </div>
          <div className='rounded-lg px-2 py-4 shadow-2xl'>
            <div className='h-[35px] min-w-[100px] flex items-center justify-center bg-white'>
              <Yelp />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mb-8 lg:mb-20 px-4">
        <span className="block text-primary text-[14px] md:text-[20px] pt-10 mb-3 lg:mb-4">
          Servicios
        </span>
        <h1 className='text-[30px] | text-secondary font-extra-bold leading-none | mb-3 lg:mb-4'>
          Tu agente cercano: en Hammer Insurance nadie se queda atrás
        </h1>
        <p className="text-secondary text-[14px] sm:text-[18px] | mb-3 lg:mb-4">
          En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad, somos vecinos.
        </p>
      </div>
      <ul className='container mx-auto flex flex-wrap justify-center gap-10 xl:min-h-[265px] px-20 mb-14'>
        {services?.map((service: Service) => (
          <li key={service.id}>
            <div className='h-full bg-white rounded-lg shadow-2xl p-6 relative mr-[10%] max-w-[250px]'>
              <h2 className='text-[24px] text-secondary font-bold mb-2'>
                {service.title}
              </h2>
              <p className='text-[14px] text-secondary mb-4'>
                {service.description}
              </p>
              <div className='btn--outline--small'>
                Ver más
              </div>
              {service.image && (
                <Image
                  src={service.image.src}
                  className='absolute -bottom-4 -right-10'
                  alt={service.title}
                  width={130}
                  height={100}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center mb-14'>
        <div className='btn--outline--secondary'>
          <span>Ver todos los servicios</span>
          <div className='-rotate-90'>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  )
}