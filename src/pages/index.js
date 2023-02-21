import Link from 'next/link'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      
      <div>
        <Link href='/statistics'>
          <h1>Statistics</h1>
        </Link>
      </div>

      <div>
        <Link href='/overview'>
          <h1>Overview</h1>
        </Link>
      </div>

    </>
  )
}
