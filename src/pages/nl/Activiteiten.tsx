import { Link, useParams } from "react-router-dom";
import { BarChart3, Shield, Leaf, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const activities = {
  overview: {
    title: "Activiteiten",
    subtitle: "NAIE werkt met drie hoofdpeilers om ethische og verantwoorde AI in Noorwegen te bevorderen.",
  },
  bias: {
    title: "Bias",
    icon: BarChart3,
    color: "#134074",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/2c507247-45cd-446a-a931-cc2cf506b4f8.png",
    intro: "NAIE onderzoekt en meet bias in AI-systemen door middel van systematische testen en benchmarking.",
    sections: [
      {
        title: "NoBBQ – Norwegian Bias Benchmark for Question-answering",
        content:
          "NoBBQ is de eerste benchmark in Noorwegen die specifiek is ontworpen om bias te meten in grote taalmodellen (LLM's) in het Noors. De benchmark test AI-modellen op scheve verhoudingen gerelateerd aan beschermde categorieën zoals geslacht, etniciteit, religie, leeftijd, handicap en seksuele geaardheid.",
      },
      {
        title: "Hoe werkt NoBBQ?",
        content:
          "NoBBQ bestaat uit duizenden vragen die zijn ontworpen om impliciete en expliciete bias in AI-antwoorden te onthullen. De modellen worden getest met contextuele scenario's waarin het antwoord niet mag worden beïnvloed door stereotypen of vooroordelen. We analyseren de antwoorden systematisch om patronen van partijdigheid te identificeren.",
      },
      {
        title: "Resultaten en bevindingen",
        points: [
          "Meer dan 1200 AI-gegenereerde antwoorden zijn geanalyseerd",
          "Significante verschillen in bias-niveaus tussen verschillende modellen",
          "Noorwegens eerste systematische bias-indicator voor AI",
          "Samenwerking met LDO om bevindingen te koppelen aan anti-discriminatiewetgeving",
        ],
      },
    ],
  },
  "verantwoorde-ai": {
    title: "Verantwoorde AI",
    icon: Shield,
    color: "#FF7A1A",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/9162907a-6407-4f58-908a-72c3fb328131.png",
    intro: "NAIE bevordert de verantwoorde ontwikkeling en het gebruik van kunstmatige intelligentie door middel van richtlijnen, best practices en tools.",
    sections: [
      {
        title: "Wat is verantwoorde AI?",
        content:
          "Verantwoorde AI gaat over het ontwikkelen en gebruiken van kunstmatige intelligentie op een manier die ethisch, transparant, eerlijk is en in lijn met mensenrechten en maatschappelijke waarden. Dit houdt in dat er rekening wordt gehouden met potentiële negatieve gevolgen en dat er actief aan wordt gewerkt om deze te minimaliseren.",
      },
      {
        title: "De aanpak van NAIE",
        content:
          "Wij werken aan het ontwikkelen van praktische tools en richtlijnen die organisaties kunnen gebruiken om verantwoorde AI te implementeren. Dit omvat kaders voor ethische beoordeling, checklists voor AI-projecten en begeleiding voor transparantie og uitlegbaarheid.",
      },
      {
        title: "Aandachtsgebieden",
        points: [
          "Transparantie en uitlegbaarheid in AI-systemen",
          "Eerlijkheid en non-discriminatie",
          "Privacy en gegevensbeveiliging",
          "Menselijke controle og oversturing",
          "Verantwoording en traceerbaarheid",
        ],
      },
    ],
  },
  duurzaamheid: {
    title: "Duurzaamheid",
    icon: Leaf,
    color: "#10B981",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/5dbf5d3e-295f-427b-86d9-cfecd9b430b2.png",
    intro: "NAIE onderzoekt de milieu-impact van AI-systemen en werkt aan een meer duurzame AI-ontwikkeling.",
    sections: [
      {
        title: "AI en milieu-impact",
        content:
          "Het trainen en draaien van grote AI-modellen vereist enorme hoeveelheden energie en rekenkracht. Dit heeft een aanzienlijke impact op het milieu door CO2-uitstoot, waterverbruik en elektronisch afval. NAIE zet zich in om deze impact inzichtelijk te maken en te verminderen.",
      },
      {
        title: "Ons werk",
        content:
          "Wij meten en rapporteren over het energieverbruik en de CO2-voetafdruk van AI-systemen die in Noorwegen worden gebruikt. Door middel van onderzoek en samenwerking ontwikkelen we aanbevelingen voor duurzamere AI-praktijken.",
      },
      {
        title: "Kernthema's",
        points: [
          "Energieverbruik bij het trainen van AI-modellen",
          "CO2-voetafdruk van datacentra",
          "Waterverbruik in koelsystemen",
          "Duurzame alternatieven en optimalisatietechnieken",
          "Rapportage en transparantie over milieu-impact",
        ],
      },
    ],
  },
};

type ActivityKey = "bias" | "verantwoorde-ai" | "duurzaamheid";

export default function Activiteiten() {
  const { slug } = useParams<{ slug?: string }>();

  const activity = slug ? activities[slug as ActivityKey] : null;

  if (!activity || !slug) {
    return <OverviewPage />;
  }

  const act = activity as typeof activities.bias;

  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="absolute inset-0 opacity-15">
          <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 to-[#0B2545]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-purple-200 hover:text-white !bg-transparent mb-4 -ml-3">
            <Link to="/activiteiten">
              <ArrowLeft className="w-4 h-4 mr-2" /> Terug naar activiteiten
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${act.color}20` }}>
              <act.icon className="w-7 h-7" style={{ color: act.color }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{act.title}</h1>
          </div>
          <p className="text-lg text-purple-200 max-w-2xl">{act.intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {act.sections.map((section, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0B2545] mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                )}
                {section.points && (
                  <ul className="space-y-3 mt-4">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: act.color }} />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0B2545] mb-4">Ontdek onze resultaten</h2>
          <p className="text-gray-600 mb-6">Bekijk wat we hebben gevonden via ons onderzoek en onze analyses.</p>
          <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
            <Link to="/resultater">
              Bekijk resultaten <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function OverviewPage() {
  const pillarList: ActivityKey[] = ["bias", "verantwoorde-ai", "duurzaamheid"];

  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{activities.overview.title}</h1>
          <p className="text-lg text-purple-200 max-w-2xl">{activities.overview.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillarList.map((key) => {
              const act = activities[key] as typeof activities.bias;
              return (
                <Link key={key} to={`/nl/activiteiten/${key}`} className="group">
                  <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                    <div className="h-52 overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${act.color}15` }}>
                          <act.icon className="w-5 h-5" style={{ color: act.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A0A0A]">{act.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{act.intro}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: act.color }}>
                        Lees meer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}