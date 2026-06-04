import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MembershipForm from "@/components/MembershipFormNo";

export default function Medlemskap() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Deelnemerschap</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE is een onafhankelijke non-profitorganisatie die zich inzet voor ethisch en verantwoord gebruik van kunstmatige intelligentie in Noorwegen.
              Het deelnemerschap staat open voor individuen die ons werk willen ondersteunen of op termijn een professionele bijdrage willen leveren.
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
                          Alle deelnemers starten als <span className="font-medium text-[#0B2545]">steundeelnemer</span>.
                          Als steundeelnemer ondersteunt u de doelstellingen van NAIE en kunt u ons werk volgen, deelnemen aan activiteiten en bijdragen op de manier die u wilt.
                        </p>
                        <p>
                          Na een periode van actieve deelname (meestal 6-12 maanden) kunnen steundeelnemers een aanvraag indienen om
                          <span className="font-medium text-[#0B2545]"> stemgerechtigd deelnemer</span> te worden.
                          Stemgerechtigde deelnemers hebben formeel stemrecht op de jaarvergadering en kunnen worden gekozen in het bestuur of andere vertrouwensposities.
                        </p>
                        <p>
                          Deelnemerschap geeft niet automatisch stemrecht. Het bestuur beoordeelt aanvragen voor stemrecht op basis van
                          concrete bijdragen, betrokkenheid en activiteit binnen de stichting.
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
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Wat wordt beschouwd als actieve deelname?</h2>
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
                        Dit zijn voorbeelden, geen harde eisen. Het bestuur beoordeelt elk geval in het licht van het doel en de praktijk van de stichting.
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
                        NAIE verwerkt persoonsgegevens in het kader van het deelnemerschap. De gegevens worden uitsluitend gebruikt voor de administratie van het deelnemerschap, communicatie en de beoordeling van de deelnemersstatus.
                        We slaan alleen noodzakelijke informatie op, zoals naam, e-mailadres, eventuele organisatie-affiliatie (indien opgegeven) en de categorie van deelnemerschap.
                        NAIE maakt gebruik van externe dienstverleners voor de veilige opslag van data. De verwerking vindt plaats in overeenstemming met de geldende privacywetgeving.
                        U kunt op elk gewenst moment verzoeken om inzage, correctie of verwijdering van uw gegevens door contact met ons op te nemen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-lg">
                  <Link to="/over-ons">Lees meer over NAIE</Link>
                </Button>
                <Button asChild className="bg-[#134074] hover:bg-[#0B2545] text-white font-semibold rounded-lg">
                  <Link to="/kontakt">
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
                    Vul het onderstaande formulier in om steundeelnemer te worden. Als u actief wilt bijdragen, kunt u hierover iets schrijven in het veld voor uw motivatie.
                  </p>
                  <MembershipForm />
                </CardContent>
              </Card>

              <Card className="mt-6 border-0 shadow-md bg-[#E0F2FE]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0B2545] mb-2">Let op</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We gebruiken twee categorieën deelnemerschap om onderscheid te maken tussen ondersteuning en formele verantwoordelijkheid.
                    Het steundeelnemerschap is voor iedereen die mee wil doen. Stemgerechtigdheid is voor degenen die op de langere termijn een formelere verantwoordelijkheid binnen de stichting willen dragen.
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