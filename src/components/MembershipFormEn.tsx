import { Button } from "@/components/ui/button";

export default function MembershipFormEn() {
  return (
    <form
      className="space-y-5"
      action="https://formspree.io/f/xoedjzgn"
      method="POST"
    >
      {/* Honeypot (simple spam filter) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Subject line in the email you receive */}
      <input type="hidden" name="_subject" value="New participant request from naie.nl" />

      {/* Ensures clear categorisation in your inbox */}
      <input type="hidden" name="topic" value="Participation" />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organisation / affiliation <span className="text-gray-400">(optional)</span>
        </label>
        <input
          name="affiliation"
          type="text"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
          placeholder="E.g. public sector, academia, private sector"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          How would you like to get involved?
        </label>
        <select
          name="intent"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm bg-white"
          defaultValue="Not sure yet"
          required
        >
          <option>Support activities and events</option>
          <option>Contribute to projects or working groups</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Short motivation <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm resize-none"
          placeholder="Why would you like to become a participant, and how would you like to contribute?"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg"
      >
        Submit participant request
      </Button>

      <p className="text-sm text-gray-600 leading-relaxed">
        Participation carries no voting rights. The board is responsible for governing the foundation.
      </p>

      <p className="text-xs text-gray-500 leading-relaxed">
        The information you provide is used for participant administration and communication about your involvement with NAIE. We do not publish participant information without consent.
      </p>
    </form>
  );
}