import HeroSection from '../components/HeroSection'
import CurrentlySection from '../components/CurrentlySection'
import PillarsOverview from '../components/PillarsOverview'
import StartupProblems from '../components/StartupProblems'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CurrentlySection />
      <PillarsOverview />
      <StartupProblems />
      <CTASection />
    </>
  )
}
