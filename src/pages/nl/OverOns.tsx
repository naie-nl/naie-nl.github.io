import { Link } from "react-router-dom";
import { Users, Target, Handshake, ArrowRight, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const boardMembers = [
  {
    name: "Wessel Braakman",
    role: "Bestuursvoorzitter",
    description: "Senior QA consultant, Bouvet.",
    image: "wessel-braakman.png",
    linkedin: "https://www.linkedin.com/in/wesselbraakman/",
  },
  {
    name: "Alejandra Palacio Perez",
    role: "Vice-voorzitter",
    description: "Agile coaching | productontwikkeling | teamleiderschap, Bouvet.",
    image: "alejandra-palacio-perez.png",
    linkedin: "https://www.linkedin.com/in/alejandra-palacio-perez-a398b912/",
  },
  {
    name: "Teresa Dalen Herland",
    role: "Bestuurslid",
    description: "Head of QA and Test, Rema1000.",
    image: "teresa-dalen-herland.png",
    linkedin: "https://www.linkedin.com/in/teresa-h-33499114/",
  },
  {
    name: "Kathinka Theodore Aakenes Vik",
    role: "Bestuurslid",
    description: "Jurist en vakspecialist voor AI, LDO.",
    image: "kathinka-theodore-aakenes-vik.png",
    linkedin: "https://www.linkedin.com/in/kathinka-theodore-aakenes-vik-b3060688/",
  },
];

export default function OmOss() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Over ons</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE (Norsk AI-Etikkforening) is een onafhankelijke non-profitorganisatie die zich inzet voor ethisch en verantwoord gebruik van kunstmatige intelligentie in Noorwegen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D148A] mb-6">Onze missie</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NAIE is opgericht met de visie om AI eerlijker, transparanter en duurzamer te maken.
                </p>
                <p>
                  We leveren statistieken en inzichten op drie hoofdgebieden: Bias in AI-systemen,
                  Verantwoorde AI-ontwikkeling en Duurzaamheid in AI-technologie.
                </p>
                <p>
                  NAIE werkt nauw samen met de Noorse Gelijkheid- en Anti-discriminatieombudsman (LDO)
                  en andere belangrijke spelers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Target,
                  title: "Visie",
                  desc: "Een toekomst waarin AI eerlijk, transparant en duurzaam is voor iedereen.",
                },
                {
                  icon: Handshake,
                  title: "Samenwerking",
                  desc: "We werken nauw samen met onderzoeksinstellingen en het bedrijfsleven.",
                },
                {
                  icon: Users,
                  title: "Gemeenschap",
                  desc: "We bouwen aan een netwerk van experts en betrokken actoren.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ECE7FF] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#5A23C9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3D148A] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D148A] mb-4">Het Bestuur</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Het bestuur van NAIE bestaat uit gedreven professionals met expertise op het gebied van AI, ethiek en technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">
            {boardMembers.map((member) => {
              const Wrapper: any = member.linkedin ? "a" : "div";
              const wrapperProps = member.linkedin
                ? {
                    href: member.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={member.name}
                  {...wrapperProps}
                  className={member.linkedin ? "block group" : "block"}
                >
                  <Card className="border-0 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex">
                    <CardContent className="p-8 text-center flex flex-col flex-grow">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}board/${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-[#3D148A]">
                        {member.name}
                      </h3>

                      <p className="text-[#FF7A1A] text-sm font-medium mt-1">
                        {member.role}
                      </p>

                      <p className="text-gray-600 text-sm mt-3">
                        {member.description}
                      </p>

                      {/* Bottom aligned LinkedIn icon */}
                      <div className="mt-auto pt-6 flex justify-center">
                        <div className="w-9 h-9 rounded-full bg-[#ECE7FF] flex items-center justify-center transition-colors group-hover:bg-[#E0D8FF]">
                          <Linkedin className="w-4 h-4 text-[#5A23C9]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#3D148A] mb-4">Deelnemerschap</h2>
                  <p className="text-gray-600 leading-relaxed">
                    NAIE is een stichting die rust op de inzet van haar deelnemers. Alle deelnemers starten als steundeelnemer, en na verloop van tijd kunnen deelnemers die actiever willen bijdragen
                    stemrecht krijgen door actieve participatie. We zijn transparant over hoe dit in zijn werk gaat.
                  </p>
                </div>
      
                <div className="text-center md:text-right flex flex-col md:items-end gap-3">
                  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                    <Link to="/nl/deelnemerschap">
                      Lees over deelnemerschap <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
      
                  <Button asChild variant="outline" className="rounded-lg">
                    <Link to="/kontakt">Vragen? Neem contact op</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Organisatiegegevens</h2>
                  <ul className="space-y-3 text-purple-200">
                    <li><span className="text-white font-medium">Naam:</span> Norsk AI-Etikkforening (NAIE)</li>
                    <li><span className="text-white font-medium">Type:</span> Onafhankelijke non-profitorganisatie</li>
                    <li><span className="text-white font-medium">KVK-nr (Org.nr):</span> 932 552 728</li>
                    <li><span className="text-white font-medium">Licentie:</span> CC BY 4.0</li>
                  </ul>
                </div>

                <div className="text-center md:text-right">
                  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                    <Link to="/kontakt">
                      Neem contact op <ArrowRight className="ml-2 w-4 h-4" />
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