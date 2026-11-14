import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MembershipForm from "@/components/MembershipFormNl";

export default function Deelnemerschap() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Deelnemerschap</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE is een onafhankelijke stichting zonder winstoogmerk die zich inzet voor ethisch en verantwoord gebruik van kunstmatige intelligentie in Nederland.
              Als deelnemer maakt u deel uit van de gemeenschap rond NAIE en kunt u samen met anderen bijdragen aan ons werk.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Explanation */}
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Hoe werkt het deelnemerschap?</h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Als deelnemer bent u betrokken bij het werk van NAIE. Het deelnemerschap biedt een manier om deel uit te maken van de stichting en samen met anderen bij te dragen aan ethisch en verantwoord gebruik van AI.
                        </p>
                        <p>
                          U kunt uw kennis, ervaring of tijd inzetten voor projecten, werkgroepen, activiteiten of praktische ondersteuning. Verschillende achtergronden en perspectieven zijn welkom; u hoeft geen AI-specialist te zijn om bij te dragen.
                        </p>
                        <p>
                          Deelnemerschap is geen lidmaatschap van een vereniging en geeft geen stemrecht. Het bestuur draagt de verantwoordelijkheid voor het beleid en de besluiten van de stichting. Deelnemers kunnen ideeën en suggesties inbrengen en meedenken over het werk van NAIE.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Hoe kunt u bijdragen?</h2>
                      <p className="text-gray-600 leading-relaxed">
                        Actieve deelname gaat over hoe u bijdraagt aan het werk en de doelen van de stichting. Dit kan bijvoorbeeld door:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        {[
                          "inhoudelijke input in werkgroepen of projecten",
                          "deelname aan evenementen of bijeenkomsten",
                          "bijdragen aan inzichten, analyses of methodologieën",
                          "praktisch organisatorisch werk",
                        ].map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-[7px] w-2 h-2 rounded-full bg-[#FF7A1A] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        Er zijn verschillende manieren om mee te doen. Samen kijken we welke bijdrage past bij uw interesses, ervaring en beschikbare tijd.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Privacy en verwerking van deelnemersgegevens</h2>
                      <p className="text-gray-600 leading-relaxed">
                        De gegevens die u via het formulier verstrekt, gebruiken we voor de deelnemersadministratie en communicatie over uw betrokkenheid bij NAIE. We publiceren geen deelnemersgegevens zonder toestemming. Voor vragen over uw gegevens kunt u contact met ons opnemen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-lg">
                  <Link to="/nl/over-ons">Lees meer over NAIE</Link>
                </Button>
                <Button asChild className="bg-[#134074] hover:bg-[#0B2545] text-white font-semibold rounded-lg">
                  <Link to="/nl/contact">
                    Vragen? Neem contact op <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Deelnemerschap aanvragen</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Vul het onderstaande formulier in om u aan te melden als deelnemer. Vertel in het motivatieveld waarom u wilt meedoen en hoe u eventueel zou willen bijdragen.
                  </p>
                  <MembershipForm />
                </CardContent>
              </Card>

              <Card className="mt-6 border-0 shadow-md bg-[#E0F2FE]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0B2545] mb-2">Let op</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deelnemers dragen bij aan het werk en de gemeenschap van NAIE. Het deelnemerschap geeft geen stemrecht; de bestuurlijke verantwoordelijkheid ligt bij het bestuur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}