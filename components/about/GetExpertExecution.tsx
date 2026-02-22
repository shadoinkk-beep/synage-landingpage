import ArrowSlideButton from "../common/ArrowSlideButton"

export const GetExpertExecution = ()=>{


    return (
        <>
        <section className="section section-dark">
            <div className="section-content">
        {/* ================= CTA ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl">
            Get Expert Execution.
          </h2>

          <p className="text-sm md:text-base opacity-80">
            If you&apos;re an HNI, NRI, corporate, or expat navigating buying,
            selling, leasing, or managing luxury property in Gurgaon or South
            Delhi, speak with Synage. We bring experience, discretion, and
            end-to-end ownership support to handle it properly.
          </p>

          <div className="flex justify-center pt-2">
            <ArrowSlideButton
            className="max-w-80"
              text="Book A Consultation"
              link="/contact"
            />
          </div>
        </div>
            </div>
        </section>
        </>
    )

}