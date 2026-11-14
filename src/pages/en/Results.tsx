import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Results() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Results</h1>
          <p className="text-lg text-purple-200 max-w-2xl leading-relaxed">
            This page will host findings from our Dutch research on bias, responsible AI, and sustainability as they become available.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 sm:p-10 md:p-14">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start">
                <div className="rounded-xl bg-[#E0F2FE] p-8 text-center">
                  <BarChart3 className="w-10 h-10 text-[#134074] mx-auto mb-4" aria-hidden="true" />
                  <p className="text-3xl font-bold text-[#0B2545]">NlBBQ</p>
                  <p className="text-sm text-[#134074] mt-2">In preparation</p>
                </div>
                <div>
                  <span className="inline-block rounded-full bg-orange-100 text-orange-900 px-3 py-1 text-sm font-medium mb-4">
                    In preparation
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-4">A Dutch perspective on AI bias</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">NlBBQ is our planned benchmark project for examining bias in language models, with a focus on Dutch language and social context.</p>
                  <p className="text-[#0B2545] font-medium leading-relaxed mb-4">No NlBBQ results or datasets have been published on this website yet.</p>
                  <p className="text-gray-600 leading-relaxed mb-6">Future publications will include the methodology and context needed to interpret the findings.</p>
                  <Button asChild className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg h-auto whitespace-normal text-left py-3">
                    <Link to="/en/contact">
                      Questions about our research? Get in touch <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
