import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

export default function Hero() {
  return (
      <section className="flex flex-col items-center mt-16 opacity-80">
        <h2 className="text-3xl md:text-6xl text-center">
          Create calenders with <span>style.</span>
        </h2>
        {/* description */}
        <p className="text-center md:text-lg px-3 mt-4 font-lexend-deca">
          A tool for creating your appointments attractive and beautifull.
        </p>
       <Button label="Get Started" className="mt-8"/>
        <Globe className=" mt-80"/>
      </section>
  );
}
