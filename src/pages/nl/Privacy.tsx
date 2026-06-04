import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div
      className="min-h-screen bg-[#F6F6F6] overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy</h1>
          <p className="text-lg text-purple-200 leading-relaxed">
            Norsk AI-Etikkforening (NAIE) verwerkt persoonsgegevens op een verantwoorde en transparante manier.
            Deze pagina beschrijft hoe wij omgaan met gegevens die gerelateerd zijn aan het deelnemerschap en contact.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Wie is de verwerkingsverantwoordelijke?</h2>
            <p>
              Norsk AI-Etikkforening (NAIE) is de verwerkingsverantwoordelijke voor de persoonsgegevens die worden verzameld via onze website en in het kader van het deelnemerschap.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Welke gegevens verzamelen we?</h2>
            <p>
              In het kader van het deelnemerschap en contact kunnen wij de volgende gegevens verwerken:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Eventuele organisatie-affiliatie (indien opgegeven)</li>
              <li>Deelnemerscategorie en deelnemersstatus</li>
              <li>Datum van aanmelding en eventuele wijzigingen in de deelnemersstatus</li>
            </ul>
            <p className="mt-4">
              Wij verzamelen geen gevoelige persoonsgegevens.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Doel van de verwerking</h2>
            <p>
              De gegevens worden uitsluitend gebruikt voor:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>De administratie van het deelnemerschap</li>
              <li>Communicatie met deelnemers</li>
              <li>Beoordeling van de deelnemersstatus in overeenstemming met de statuten</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Opslag en beveiliging</h2>
            <p>
              NAIE maakt gebruik van externe dienstverleners voor de veilige opslag van deelnemersgegevens.
              De verwerking vindt plaats in overeenstemming met de geldende privacywetgeving.
            </p>
            <p className="mt-4">
              Toegang tot deelnemersgegevens is beperkt tot het bestuur en wordt uitsluitend gebruikt voor de administratie van de stichting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Bewaartermijn</h2>
            <p>
              Gegevens van actieve deelnemers worden bewaard zolang het deelnemerschap actief is.
              Gegevens van voormalige deelnemers worden normaal gesproken binnen 12 maanden na beëindiging van het deelnemerschap verwijderd,
              tenzij er een legitieme noodzaak is voor verdere opslag.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">Uw rechten</h2>
            <p>
              U heeft recht op inzage in de gegevens die wij over u hebben opgeslagen, en u kunt verzoeken om correctie of verwijdering.
              Verzoeken kunnen aan ons worden gericht via de contactpagina.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}