import Link from "next/link"
import Image from "next/image"
import Hero from '../public/hero.jpg'


export default function Home() {
  return (
  <div>
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="z-10 relative">
        <h1>aiCreator.ro</h1>

        <div className="flex-column gap-4 px-5 md:flex md:m-auto md:max-w-5xl">

          <div className="box">
            <p className="font-heading text-3xl mb-2 inline-block">BlogCreator</p>
            <p>Check here our AI-powered SaaS solution to generate SEO-optimized blog posts in seconds. Get high-quality content, without sacrificing your time.</p>
            <button className="w-full mt-4">
              <Link href="post/new" className="btn">Begin</Link>
            </button>
          </div>
          <div className="box">
            <p className="font-heading text-3xl mb-2 inline-block">CustomDesign</p>
            <p>The AI-powered SaaS solution to generate SEO-optimized blog posts in seconds. Get high-quality content, without sacrificing your time.</p>
            <button className="w-full mt-4">
              <Link href="post/new" className="btn">Begin</Link>
            </button>          
          </div>          
          <div className="box">
            <p href="post/new" className="font-heading text-3xl mb-2 inline-block">24Hours turnover</p>
            <p>Improve the appearance and positioning of web pages in organic search results. We are the best in the town! Check this out!</p>
            <button className="w-full mt-4">
              <Link href="post/new" className="btn">Begin</Link>
            </button>          
          </div> 

        </div>

      </div>
      <Image src={Hero} alt="Hero" fill className="absolute object-cover" />
    </div>
  </div>
  )
}
