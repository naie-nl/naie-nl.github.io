import { Link, useParams } from "react-router-dom"; // 👈 1. Added useParams here
import { useMemo } from "react";
import { ArrowRight, BarChart3, Shield, Leaf, TrendingUp, Users, Award, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const stats = [
  { value: "3", label: "Peilers", icon: TrendingUp },
  { value: "1200+", label: "AI-antwoorden geanalyseerd", icon: BarChart3 },
  { value: "Nederlands eerste", label: "Bias-indicator", icon: Award },
  { value: "Samenwerking", label: "met instituten", icon: Users },
];

const questions = [
  {
    question: "Hoe weten we of een AI-systeem mensen van verschillende leeftijden, geslachten of nationaliteiten eerlijk behandelt?",
    context: "We analyseren of taalmodellen systematisch verschillende antwoorden geven op basis van beschermde of kwetsbare groepen in een Nederlandse context.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Als AI stilletjes bepaalde groepen uitsluit van vacatures, wie merkt dat op — en wie is er verantwoordelijk?",
    context: "We onderzoeken of geautomatiseerde aanbevelingen of beoordelingen leiden tot onbedoelde discriminatie.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Wat gebeurt er als AI-aanbevelingen in de zorg of welzijn gebaseerd zijn op vertekende historische data?",
    context: "Historische datasets kunnen systematische fouten bevatten. We testen hoe dit moderne AI-systemen beïnvloedt.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Hoe voorkomen we dat AI stereotype opvattingen versterkt in plaats van ze uit te dagen?",
    context: "We analyseren of AI gevestigde stereotypen herhaalt of versterkt in taal en besluitvormingsondersteuning.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Als een AI-systeem Nederlandse mensen, cultuur of identiteit verkeerd weergeeft — wie corrigeert dat?",
    context: "We onderzoeken hoe wereldwijde modellen omgaan met de Nederlandse taal, cultuur en maatschappelijke verhoudingen.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Hoe kunnen we ervoor zorgen dat AI minderheden of kwetsbare groepen niet over het hoofd ziet?",
    context: "We testen of modellen bepaalde maatschappelijke groepen systematisch ondervertegenwoordigen of verkeerd interpreteren.",
    pillar: "Bias",
    color: "#5A23C9",
  },
  {
    question: "Zou u vertrouwen op een beslissing die uw leven beïnvloedt als u niet begrijpt hoe het algoritme daartoe is gekomen?",
    context: "We zetten ons in voor meer openheid en uitlegbaarheid in AI-systemen die individuen beïnvloeden.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Wanneer AI-systemen fouten maken, wie moet er dan verantwoordelijk worden gehouden — en hoe?",
    context: "We analyseren de verantwoordelijkheidslijnen tussen ontwikkelaars, leveranciers og organisaties die AI gebruiken.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Hoe transparant moeten publieke instellingen zijn wanneer ze AI gebruiken bij jeugdzorg, HR of belastingen?",
    context: "We onderzoeken de eisen voor transparantie en documentatie wanneer AI wordt ingezet in de publieke sector.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Hoe zorgen we ervoor dat AI-oplossingen niet meer problemen veroorzaken dan ze oplossen?",
    context: "We beoordelen risico's, onbedoelde gevolgen en de behoefte aan continue evaluatie van AI-systemen.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Mag AI meebeslissen over wie financiële steun, een baan of een woning krijgt?",
    context: "We discussiëren over waar de grens moet liggen tussen geautomatiseerde aanbevelingen en menselijk oordeel.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Welke veiligheidsmechanismen hebben we nodig voordat scholen of gemeenten op AI gaan vertrouwen?",
    context: "We brengen de eisen voor testen, documentatie en risicobeoordeling in kaart voordat AI in kwetsbare sectoren wordt gebruikt.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Hoe moeten bedrijven hun AI-systemen testen om er zeker van te zijn dat ze niet onbedoeld discrimineren?",
    context: "We ontwikkelen en passen methodologieën aan voor de systematische evaluatie van bias en eerlijkheid.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Als AI advies geeft aan een manager in een gevoelige HR-zaak, hoe zorgen we er dan voor dat het advies wettig en eerlijk is?",
    context: "We analyseren juridische en ethische implicaties van het gebruik van AI bij besluitvormingsondersteuning.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Waar moet de grens liggen tussen machine-aanbevelingen en menselijk oordeel?",
    context: "We onderzoeken hoe de interactie tussen mens en machine op een verantwoorde manier kan worden gestructureerd.",
    pillar: "Verantwoorde AI",
    color: "#FF7A1A",
  },
  {
    question: "Hoeveel energie mogen we AI-systemen laten verbruiken — en wie bepaalt wat 'het waard is'?",
    context: "We maken de milieu-impact van het trainen en exploiteren van grote taalmodellen inzichtelijk.",
    pillar: "Duurzaamheid",
    color: "#10B981",
  },
  {
    question: "Is het verantwoord om steeds grotere modellen te trainen als de milieu-impact onbekend is?",
    context: "We onderzoeken het energieverbruik, het gebruik van hulpbronnen en de behoefte aan meer transparantie rond de klimaatvoetafdruk van AI-modellen.",
    pillar: "Duurzaamheid",
    color: "#10B981",
  },
];

const milestones = [
  { year: "Juni 2026", title: "NAIE gesticht", description: "Op 4 februari 2026 werd de Stichting Nederlands AI-Ethiek Instituut opgenomen in de Kamer van Koophandel." }
];

export default function HomePage() {
  // 👈 2. Read the dynamic language route parameter here (defaults to 'nl')
  const { lang = "nl" } = useParams<{ lang?: string }>();

  // 👈 3. Move the pillars array INSIDE the function component so it can use the dynamic `lang` variable safely
  const pillars = useMemo(() => [
    {
      title: "Bias",
      description:
        "We onderzoeken en meten bias in AI-systemen. Via de NoBBQ-benchmark testen we grote taalmodellen op scheve verhoudingen gerelateerd aan geslacht, etniciteit, religie en andere beschermde categorieën.",
      icon: BarChart3,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/2c507247-45cd-446a-a931-cc2cf506b4f8.png",
      path: `/${lang}/activiteiten/bias`, // 🔄 Dynamic layout link string context
      color: "#5A23C9",
    },
    {
      title: "Verantwoorde AI",
      description:
        "Wij stimuleren verantwoorde ontwikkeling en gebruik van kunstmatige intelligentie in Nederland. Ons werk omvat richtlijnen, best practices en tools voor ethische AI-implementatie.",
      icon: Shield,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/9162907a-6407-4f58-908a-72c3fb328131.png",
      path: `/${lang}/activiteiten/ansvarlig-ai`, // 🔄 Dynamic layout link string context
      color: "#FF7A1A",
    },
    {
      title: "Duurzaamheid",
      description:
        "Wij onderzoeken de milieu-impact van AI-systemen og werken aan een duurzamere AI-ontwikkeling. We meten en rapporteren over energieverbruik en CO2-voetafdruk.",
      icon: Leaf,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/5dbf5d3e-295f-427b-86d9-cfecd9b430b2.png",
      path: `/${lang}/activiteiten/baerekraft`, // 🔄 Dynamic layout link string context
      color: "#10B981",
    },
  ], [lang]);

  // Show a random subset on each page load for readability
  const featuredQuestions = useMemo(() => {
    const copy = [...questions];
    // Fisher–Yates shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(6, copy.length));
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3D148A] via-[#3D148A] to-[#5A23C9] text-white">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-02-17/ad1ba338-c564-4323-8d62-62e122d7bb05.png"
            alt="AI Ethics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D148A]/90 to-[#3D148A]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-[#FF7A1A] rounded-full animate-pulse" />
              <span className="text-sm text-purple-200">Stichting Nederlands AI-Ethiek Instituut</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ethische kunstmatige{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#E85E00]">
                intelligentie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-200 leading-relaxed mb-8 max-w-2xl">
              Onafhankelijke non-profitorganisatie die statistieken en inzichten levert over Bias, Duurzaamheid en Verantwoorde AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg px-6">
                <Link to={`/${lang}/resultaten`}> {/* 🔄 Updated with template string dynamic language route context */}
                  Bekijk resultaten
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 !bg-transparent rounded-lg px-6">
                <Link to={`/${lang}/over-ons`}> {/* 🔄 Updated with template string dynamic language route context */}
                  Over ons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-6 h-6 text-[#FF7A1A] mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-[#3D148A]">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Questions That Need Answering */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ECE7FF] rounded-full px-4 py-1.5 mb-4">
              <HelpCircle className="w-4 h-4 text-[#5A23C9]" />
              <span className="text-sm font-medium text-[#5A23C9]">Waarom NAIE bestaat</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D148A] mb-4">
              Vragen die om antwoorden vragen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Deze vragen drijven ons werk aan. Ze zijn de reden waarom NAIE is opgericht – en ze verdienen grondige, onafhankelijke antwoorden.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuestions.map((q, i) => (
              <Card
                key={i}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${q.color}12`, color: q.color }}
                    >
                      {q.pillar}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-3 leading-snug group-hover:text-[#3D148A] transition-colors">
                    {q.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{q.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-[#5A23C9] hover:bg-[#3D148A] text-white font-semibold rounded-lg">
              <Link to={`/${lang}/resultaten`}> {/* 🔄 Updated with template string dynamic language route context */}
                Bekijk wat we hebben gevonden <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Does NAIE Do - Pillars */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D148A] mb-4">Wat doet NAIE?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We werken met drie hoofdpeilers om ethisch en verantwoord gebruik van kunstmatige intelligentie in Nederland te stimuleren.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link key={pillar.title} to={pillar.path} className="group">
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${pillar.color}15` }}
                      >
                        <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A]">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: pillar.color }}>
                      Lees meer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D148A] mb-4">Mijlpalen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Onze reis naar meer ethische en verantwoorde AI in Nederland.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF7A1A] to-[#5A23C9] hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <Card className="inline-block border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <span className="text-sm font-semibold text-[#FF7A1A]">{milestone.year}</span>
                        <h3 className="text-lg font-bold text-[#3D148A] mt-1">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-[#FF7A1A] rounded-full border-4 border-white shadow-md z-10 shrink-0 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

	  {/* CTA Section */}
	  <section className="py-20 bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white">
	    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
	  	<h2 className="text-3xl md:text-4xl font-bold mb-4">Wilt u meer weten?</h2>
	  	<p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
	  	  Ontdek onze resultaten, bronnen en leer meer over hoe NAIE zich inzet voor ethische AI in Nederland.
	  	</p>
	  	<div className="flex flex-wrap justify-center gap-4">
	  	  {/* Updated with template string dynamic language route context */}
	  	  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
	  		<Link to={`/${lang}/resultaten`}>Bekijk resultaten</Link>
	  	  </Button>
	  	 
	  	  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 !bg-transparent rounded-lg">
	  		<Link to={`/${lang}/deelnemerschap`}>Lees over deelnemerschap</Link>
	  	  </Button>
	  	 
	  	  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 !bg-transparent rounded-lg">
	  		<Link to={`/${lang}/contact`}>Contact met ons opnemen</Link>
	  	  </Button>
	  	</div>
	    </div>
	  </section>

      <Footer />
    </div>
  );
}