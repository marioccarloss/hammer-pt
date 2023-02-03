import Link from "next/link";
import useHome from "./hooks/useHome";
import { Ctas } from "./types/Home.d";
import Image from 'next/image';

export default function Page () {
  const { data } = useHome();

  return (
    <main>
      <div className="py-4 px-4 lg:px-3 xl:px-0 lg:container mx-auto | lg:flex items-center gap-6 | relative z-10">
        <article className='flex-1'>
          <span className="block text-primary text-[14px] md:text-[20px] mb-4">
            {data.tagline}
          </span>
          <h1 className='text-[30px] lg:text-[48px] | text-secondary font-extra-bold leading-none mb-6'>
            {data.title}
          </h1>
          <p className="text-secondary text-[12px] sm:text-[18px] | mt-6">
            {data.description}
          </p>
          <div>
            {data.ctas.map((cta: Ctas) => (
              <Link
                key={cta.url}
                href={cta.url}
                className="btn btn--primary mt-6"
              >
                {cta.name}
              </Link>
            ))}
          </div>
        </article>
        <Image
          src={data.image.src}
          alt={data.tagline}
          width={605}
          height={566.77}
        />
      </div>
    </main>
  )
}
