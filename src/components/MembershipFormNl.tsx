import { Button } from "@/components/ui/button";

export default function MembershipFormNl() {
  return (
    <form
      className="space-y-5"
      action="https://formspree.io/f/xoedjzgn"
      method="POST"
    >
      {/* Honeypot (eenvoudig spamfilter) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Onderwerp van de ontvangen e-mail */}
      <input type="hidden" name="_subject" value="Nieuwe deelnemersaanmelding via naie.nl" />

      {/* Categorie voor de deelnemersadministratie */}
      <input type="hidden" name="topic" value="Deelnemerschap" />

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
          placeholder="uwnaam@voorbeeld.nl"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organisatie / achtergrond <span className="text-gray-400">(optioneel)</span>
        </label>
        <input
          name="affiliation"
          type="text"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
          placeholder="Bijvoorbeeld overheid, onderwijs, onderzoek of bedrijfsleven"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hoe zou u willen bijdragen?
        </label>
        <select
          name="intent"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm bg-white"
          defaultValue="Dat weet ik nog niet"
          required
        >
          <option>Ondersteunen bij activiteiten en evenementen</option>
          <option>Bijdragen aan projecten of werkgroepen</option>
          <option>Dat weet ik nog niet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Korte motivatie <span className="text-gray-400">(optioneel)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm resize-none"
          placeholder="Waarom wilt u deelnemer worden en hoe zou u willen bijdragen?"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg"
      >
        Aanmelden als deelnemer
      </Button>

      <p className="text-sm text-gray-600 leading-relaxed">
        Deelnemerschap geeft geen stemrecht. De bestuurlijke verantwoordelijkheid ligt bij het bestuur.
      </p>

      <p className="text-xs text-gray-500 leading-relaxed">
        We gebruiken uw gegevens voor de deelnemersadministratie en communicatie over uw betrokkenheid bij NAIE. We publiceren geen deelnemersgegevens zonder toestemming.
      </p>
    </form>
  );
}