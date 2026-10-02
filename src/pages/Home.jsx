import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import Favorites from '../components/home/Favorites'
import ReviewsCTA from '../components/home/ReviewsCTA'
import VisitCTA from '../components/home/VisitCTA'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutPreview />
      <Favorites />
      <ReviewsCTA />
      <VisitCTA />
    </main>
  )
}