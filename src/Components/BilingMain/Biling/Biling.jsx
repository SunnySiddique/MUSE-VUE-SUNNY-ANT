import Header from "../../HeaderMain/Header/Header"
import BilingInformation from "../BilingInformation/BilingInformation"
import WifySection from "../WifySection/WifySection"

const Biling = () => {
  return (
    <>
      <Header title="Biling" smallTitle="Biling" />
      <main>
        <section className="section">
          {/* WifySection */}
          <div className="WifySection">
            <WifySection />
          </div>
        </section>
        <section className="section">
          <BilingInformation />
        </section>
      </main>
    </>
  )
}

export default Biling
