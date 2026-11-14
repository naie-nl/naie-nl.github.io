import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Resultaten() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resultaten</h1>
          <p className="text-lg text-purple-200 max-w-2xl leading-relaxed">
            Hier publiceren we de resultaten van ons Nederlandse onderzoek naar bias, verantwoorde AI en duurzaamheid zodra deze beschikbaar zijn.
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
                  <p className="text-sm text-[#134074] mt-2">In voorbereiding</p>
                </div>
                <div>
                  <span className="inline-block rounded-full bg-orange-100 text-orange-900 px-3 py-1 text-sm font-medium mb-4">
                    In voorbereiding
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-4">Een Nederlands perspectief op bias in AI</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">NlBBQ is ons geplande benchmarkproject om bias in taalmodellen te onderzoeken. Daarbij staan de Nederlandse taal en maatschappelijke context centraal.</p>
                  <p className="text-[#0B2545] font-medium leading-relaxed mb-4">Er zijn op deze website nog geen NlBBQ-resultaten of datasets gepubliceerd.</p>
                  <p className="text-gray-600 leading-relaxed mb-6">Bij toekomstige publicaties delen we de gebruikte methode en de context die nodig is om de bevindingen te begrijpen.</p>
                  <Button asChild className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg h-auto whitespace-normal text-left py-3">
                    <Link to="/kontakt">
                      Vragen over ons onderzoek? Neem contact op <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
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
