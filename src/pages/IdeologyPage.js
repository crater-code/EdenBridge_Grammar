import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import Footer from '../components/Footer'
import IdeologyHero from '../components/ideology/IdeologyHero'
import CorePhilosophy from '../components/ideology/CorePhilosophy'
import LearningModel from '../components/ideology/LearningModel'
import GuidingPrinciples from '../components/ideology/GuidingPrinciples'
import RoleOfAdult from '../components/ideology/RoleOfAdult'

function IdeologyPage() {
  return (
    <div className="relative bg-gradient-to-br from-[#1c2e26] via-[#2a4a3a] to-[#1c2e26] min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <IdeologyHero />
        <CorePhilosophy />
        <LearningModel />
        <GuidingPrinciples />
        <RoleOfAdult />
        <Footer />
      </div>
    </div>
  )
}

export default IdeologyPage
