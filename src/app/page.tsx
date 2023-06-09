import Img from '@/components/img';

export default function Home() {
  return (
    <main>
      Dicebear

      <Img src='https://api.dicebear.com/6.x/adventurer/svg?seed=Felix' alt='avatar' className='h-10 w-10'/>
    </main>
  )
}
