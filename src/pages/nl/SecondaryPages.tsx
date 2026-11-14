import { Link } from "react-router-dom";
import {
  BookOpen, ExternalLink, Newspaper, Calendar, Building2, Mail,
  Phone, MapPin, ArrowRight, FileText, Video, Mic
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ===================== RESOURCES ===================== */
export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "NlBBQ — in voorbereiding",
      description: "Gepland benchmarkproject voor onderzoek naar bias in taalmodellen in de Nederlandse context. Er zijn nog geen resultaten of datasets gepubliceerd.",
      link: "/nl/activiteiten/bias",
      linkText: "Lees meer",
    },
    {
      icon: BookOpen,
      title: "Rapporten en publicaties",
      description: "Hier vindt u toekomstige onderzoeksrapporten, analyses en publicaties van de Nederlandse stichting.",
      link: "/nl/resultaten",
      linkText: "Bekijk resultaten",
    },
    {
      icon: Video,
      title: "Presentaties",
      description: "Materialen van toekomstige presentaties, webinars en lezingen over AI-ethiek komen hier beschikbaar.",
      link: "/nl/pers-en-events",
      linkText: "Bekijk events",
    },
    {
      icon: ExternalLink,
      title: "Externe bronnen",
      description: "Handige links naar internationale standaarden, kaders en tools voor verantwoorde AI.",
      link: "#",
      linkText: "Binnenkort beschikbaar",
    },
  ];

  return (
    <PageWrapper
      title="Bronnen & Hulpmiddelen"
      subtitle="Ontdek onze bronnen, rapporten en tools voor ethische AI."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((res) => (
              <Card
                key={res.title}
                className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <res.icon className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2545] mb-1">
                        {res.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {res.description}
                      </p>
                      <Link
                        to={res.link}
                        className="text-[#FF7A1A] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {res.linkText} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ===================== Nieuws ===================== */
export function Nieuws() {
  const news = [
    {
      date: "Juni 2026",
      title: "NAIE is opgericht",
      summary: "Sinds 4 juni staat NAIE ingeschreven in de Kamer van Koophandel.",
    }
  ];

  return (
    <PageWrapper title="Nieuws" subtitle="Laatste nieuws van Stichting Nederlands AI-Ethiek Instituut.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news.map((item, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Newspaper className="w-5 h-5 text-[#134074] mt-1" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#FF7A1A] uppercase tracking-wider">{item.date}</span>
                      <h3 className="text-lg font-bold text-[#0B2545] mt-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ===================== PERS & EVENTS ===================== */
export function PersEnEvents() {
  return (
    <PageWrapper title="Pers & events" subtitle="Nieuws over presentaties, evenementen en media-aandacht van de Nederlandse stichting.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-md"><CardContent className="p-8">
            <p className="text-gray-600 leading-relaxed">Er zijn hier nog geen persberichten of evenementen gepubliceerd. Nieuwe bijdragen van de Nederlandse stichting verschijnen op deze pagina.</p>
          </CardContent></Card>
        </div>
      </section>
    </PageWrapper>
  );
}

export function VoorOrganisaties() {
  const offerings = [
    {
      title: "Inhoudelijke lezingen en presentaties",
      icon: Mic,
      description:
        "Presentaties over bias en ethische uitdagingen in generatieve AI, met speciale aandacht voor de Nederlandse taal, cultuur en samenleving.",
      bullets: [
        "Wat is bias in generatieve AI, en waarom is dit relevant in Nederland",
        "Risico's van het gebruik van AI in de publieke sector en maatschappelijk kritische diensten",
        "Inzichten en geleerde lessen uit het lopende onderzoek van NAIE",
      ],
    },
    {
      title: "Onderzoeks- en inzichtsbeoordelingen",
      icon: FileText,
      description:
        "Kennisgebaseerde evaluaties van methodologieën, bevindingen en beperkingen in ons onderzoek. Dit is geen verkoopgesprek, maar een professionele dialoog gebaseerd op open data en kritische reflectie.",
      bullets: [
        "Methodologie en interpretatie van resultaten",
        "Beperkingen en onzekerheden in metingen",
        "Besluitvormingsondersteuning en competentieontwikkeling",
      ],
    },
    {
      title: "Workshops en bewustwording",
      icon: Video,
      description:
        "Interactieve workshops die vooroordelen in AI concreet, begrijpelijk en bespreekbaar maken – afgestemd op de doelgroep en de beschikbare tijd.",
      bullets: [
        "Analyse van AI-gegenereerde antwoorden en identificatie van bias",
        "Discussie over realistische praktijkscenario's",
        "Reflectie op verantwoordelijkheid, risico's en ethische afwegingen",
      ],
    },
  ];

  return (
    <PageWrapper
      title="Voor organisaties"
      subtitle="Professionele bijdragen voor een beter begrip van vooroordelen (bias), ethiek en maatschappelijke effecten van kunstmatige intelligentie in een Nederlandse context."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-6">Wat wij bieden</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Stichting Nederlands AI-Ethiek Instituut (NAIE) is een non-profitorganisatie die zich inzet voor een beter begrip van vooroordelen (bias),
                  ethiek en maatschappelijke effecten van kunstmatige intelligentie in een Nederlandse context.
                </p>
                <p>
                  Naast het delen van open onderzoek en inzichten, bieden we professionele bijdragen aan organisaties die hun
                  begrip van risico's, verantwoordelijkheden en consequenties rondom AI-gebruik willen versterken.
                </p>
                <p>
                  Ons aanbod is stevig verankerd in doorlopend onderzoek en expertise. De inkomsten worden gebruikt om de operationele kosten,
                  voorbereidingen en verdere ontwikkeling van het werk van NAIE te dekken.
                </p>
              </div>

              <Card className="border-0 shadow-md mt-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">Praktische informatie</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    NAIE is een non-profitorganisatie. Wanneer wij een vergoeding vragen voor professionele bijdragen zoals lezingen, workshops of
                    evaluaties, is dit puur om de werkzaamheden te dekken die bijdragen aan het doel van de stichting. De prijs is afhankelijk van de omvang,
                    duur en mate van maatwerk. Na overleg geven we graag een vrijblijvende prijsopgave. Alle inkomsten
                    worden geherinvesteerd in het werk van NAIE.
                  </p>
                </CardContent>
              </Card>

              <Button asChild className="mt-6 bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                <Link to="/contact">
                  Neem contact op <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {offerings.map((o) => (
                <Card key={o.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#0B2545]/10 flex items-center justify-center shrink-0">
                        <o.icon className="w-6 h-6 text-[#0B2545]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#0B2545] mb-1">{o.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{o.description}</p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                          {o.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-[7px] w-2 h-2 rounded-full bg-[#FF7A1A] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}



/* ===================== CONTACT ===================== */
export function Contact() {
  return (
    <PageWrapper title="Contact" subtitle="Neem contact met ons op voor vragen, samenwerkingen of het deelnemerschap.">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-6">Contactinformatie</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "E-mail", value: "contact@naie.nl" },
                  { icon: MapPin, label: "Adres", value: "Albert van Damstraat 4\n1689XN Zwaag" },
                  { icon: Phone, label: "KVK-nr (Org.nr)", value: "42075283" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#134074]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-[#0B2545] whitespace-pre-line">
					  {item.value}
					  </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="mt-8 border-0 shadow-md bg-[#E0F2FE]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0B2545] mb-2">Voor organisaties</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Geïnteresseerd in een samenwerking of diensten van NAIE? Bekijk onze pagina voor organisaties.
                  </p>
                  <Link to="/voor-organisaties" className="text-[#FF7A1A] text-sm font-medium inline-flex items-center gap-1">
                    Lees meer <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-6">Stuur ons een bericht</h2>
					<form
					  className="space-y-5"
					  action="https://formspree.io/f/xoedjzgn"
					  method="POST"
					>
					  {/* Honeypot (eenvoudig spamfilter) */}
					  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

					  {/* Optional: subject die als e-mailonderwerp binnenkomt */}
					  <input type="hidden" name="_subject" value="Nieuw bericht van naie.nl" />

					  <div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
						<input
						  name="name"
						  type="text"
						  required
						  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
						  placeholder="Uw naam"
						/>
					  </div>

					  <div>
						<label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
						<input
						  name="email"
						  type="email"
						  required
						  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
						  placeholder="je@email.nl"
						/>
					  </div>

					  <div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
						<select
						  name="topic"
						  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm bg-white"
						  defaultValue="Algemene vraag"
						>
						  <option>Algemene vraag</option>
						  <option>Samenwerking</option>
						  <option>Deelnemerschap</option>
						  <option>Pers</option>
						  <option>Anders</option>
						</select>
					  </div>

					  <div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
						<textarea
						  name="message"
						  rows={4}
						  required
						  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm resize-none"
						  placeholder="Schrijf hier uw bericht..."
						/>
					  </div>

					  <Button type="submit" className="w-full bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
						Bericht verzenden
					  </Button>
					</form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ===================== SHARED WRAPPER ===================== */
function PageWrapper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />
      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-purple-200 max-w-2xl">{subtitle}</p>
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
}