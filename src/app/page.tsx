import Image from 'next/image'
import codegirl from '@/img/codegirl.png'
import logo from '@/img/logo.png'

export default function Home() {
  return (
    <main className='bg-pink-700 lg:bg-background lg:bg-cover flex flex-col max-h-screen h-screen'>
      <Image className="lg:sr-only" src={codegirl} alt="cover" />
      <div className='p-4 lg:p-16 mt-16 flex-1 flex flex-col justify-between'>
      <Image src={logo} alt="cover" width={180} />
      <div className='flex flex-col gap-4'>
      <h1 className='text-2xl lg:text-5x1/snug text-white
      font-bold'>
        Receba notícias <br/> atualizadas sobre o <br/> MERCADO DE TECNOLOGIA</h1>
      <button className='bg-zinc-800 hover:bg-pink-800 text-white rounded-lg w-full p-4 lg:w-72 ' 
      >Inscreva-se</button>
      </div>
      </div>
    </main>
  )
}
