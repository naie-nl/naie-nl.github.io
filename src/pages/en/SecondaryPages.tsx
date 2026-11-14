import { Link } from "react-router-dom";
import {
  BookOpen,
  ExternalLink,
  Newspaper,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  FileText,
  Video,
  Mic,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * English pages use the /en/ route prefix.
 */
function en(path: string) {
  if (path === "/") return "/en";
  return `/en${path}`;
}

/* ===================== RESOURCES ===================== */
export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "NlBBQ — in preparation",
      description:
        "Planned benchmark project for examining bias in language models in the Dutch context. No results or datasets have been published yet.",
      link: en("/activities/bias"),
      linkText: "Read more",
    },
    {
      icon: BookOpen,
      title: "Reports and publications",
      description:
        "Future research reports, analyses, and publications from the Dutch foundation will be shared here.",
      link: en("/results"),
      linkText: "View results",
    },
    {
      icon: Video,
      title: "Presentations",
      description:
        "Materials from future presentations, webinars, and talks on AI ethics will be shared here.",
      link: en("/press-and-events"),
      linkText: "View events",
    },
    {
      icon: ExternalLink,
      title: "External resources",
      description:
        "Useful links to international standards, frameworks, and tools for responsible AI.",
      link: "#",
      linkText: "Coming soon",
    },
  ];

  return (
    <PageWrapper
      title="Resources"
      subtitle="Explore our resources, reports, and tools for ethical AI."
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

/* ===================== NEWS ===================== */
export function News() {
  const items = [{ date: "June 2026", title: "NAIE foundation registered", summary: "Stichting Nederlands AI-Ethiek Instituut was registered with the Dutch Chamber of Commerce in June 2026." }];

  return (
    <PageWrapper
      title="News"
      subtitle="Latest updates from the Dutch Institute for AI Ethics."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {items.map((item, i) => (
              <Card
                key={i}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Newspaper className="w-5 h-5 text-[#134074] mt-1" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#FF7A1A] uppercase tracking-wider">
                        {item.date}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B2545] mt-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {item.summary}
                      </p>
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

/* ===================== PRESS & EVENTS ===================== */
export function PressAndEvents() {
  return (
    <PageWrapper title="Press & events" subtitle="Presentations, events, and media coverage from the Dutch foundation.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-md"><CardContent className="p-8">
            <p className="text-gray-600 leading-relaxed">No press items or events have been published here yet. New contributions from the Dutch foundation will appear on this page.</p>
          </CardContent></Card>
        </div>
      </section>
    </PageWrapper>
  );
}

export function ForOrganisations() {
  const offerings = [
    {
      title: "Talks and presentations",
      icon: Mic,
      description:
        "Talks on bias and ethical challenges in generative AI, with a focus on Dutch language and context.",
      bullets: [
        "Bias in GenAI and why it matters in the Netherlands",
        "Risk and responsibility in public sector use cases",
        "Insights and learnings from NAIE research work",
      ],
    },
    {
      title: "Research and insight reviews",
      icon: FileText,
      description:
        "Evidence-based reviews of methods, findings, and limitations in bias measurement and evaluation.",
      bullets: [
        "Method and interpretation of results",
        "Limitations and uncertainty in measurements",
        "Competence building and decision support",
      ],
    },
    {
      title: "Workshops and awareness",
      icon: Video,
      description:
        "Interactive workshops that make bias and responsible AI concrete and discussable for your organisation.",
      bullets: [
        "Analyze model outputs and identify bias patterns",
        "Discuss realistic scenarios and trade-offs",
        "Build shared understanding of risk and responsibility",
      ],
    },
  ];

  return (
    <PageWrapper
      title="For organisations"
      subtitle="Professional contributions that build understanding of bias, ethics, and societal impact of AI in a Dutch context."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-6">
                What we offer
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dutch Institute for AI Ethics (NAIE) is a non-profit
                  organisation working to increase understanding of bias, ethics,
                  and societal effects of AI in a Dutch context.
                </p>
                <p>
                  We offer professional contributions to organisations that want
                  to strengthen their understanding of risk, responsibility, and
                  consequences related to using AI systems.
                </p>
                <p>
                  Any revenue is used to cover operations and further development
                  of NAIE’s work.
                </p>
              </div>

              <Card className="border-0 shadow-md mt-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                    Practical information
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scope, duration, and tailoring determine the price. We can
                    provide a non-binding estimate after a short dialogue.
                  </p>
                </CardContent>
              </Card>

              <Button
                asChild
                className="mt-6 bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg"
              >
                <Link to={en("/contact")}>
                  Get in touch <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {offerings.map((o) => (
                <Card
                  key={o.title}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#0B2545]/10 flex items-center justify-center shrink-0">
                        <o.icon className="w-6 h-6 text-[#0B2545]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#0B2545] mb-1">
                          {o.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {o.description}
                        </p>
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
    <PageWrapper
      title="Contact"
      subtitle="Get in touch with us for questions, collaboration, or participation."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
                Contact information
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "contact@naie.nl" },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Albert van Damstraat 4\n1689XN Zwaag",
                  },
                  { icon: Phone, label: "Org. no.", value: "42075283" },
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
                  <h3 className="font-bold text-[#0B2545] mb-2">
                    For organisations
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Want collaboration or professional contributions from NAIE?
                    See our page for organisations.
                  </p>
                  <Link
                    to={en("/for-organisations")}
                    className="text-[#FF7A1A] text-sm font-medium inline-flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
                    Send us a message
                  </h2>

                  <form
                    className="space-y-5"
                    action="https://formspree.io/f/xoedjzgn"
                    method="POST"
                  >
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New message from naie.nl"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        name="topic"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm bg-white"
                        defaultValue="General inquiry"
                      >
                        <option>General inquiry</option>
                        <option>Collaboration</option>
                        <option>Participation</option>
                        <option>Press</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]/30 focus:border-[#134074] transition-colors text-sm resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg"
                    >
                      Send message
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
    <div
      className="min-h-screen bg-[#F6F6F6]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
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