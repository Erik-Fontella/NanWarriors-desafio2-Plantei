import Carousel from "@Pages/Home/components/Carousel/Carousel"
import './SectionStore.css'

const SectionStore = () => {
  return (
    <section className="section-store-container">
        <h2>This Weeks Most Popular <span>And Best Selling</span></h2>
        <Carousel/>

        <h2>Plants <span>In Sale</span></h2>
        <Carousel/>
    </section>
  )
}

export default SectionStore