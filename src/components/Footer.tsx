import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/naie_logo_v1_white.svg";

type Lang = "nl" | "en";

function getLangFromPath(pathname: string): Lang {
  const first = pathname.split("/")[1];
  return first === "en" ? "en" : "nl";
}

function withLang(lang: Lang, path: string) {
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

export default function Footer() {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  // Structural text changes based on selection language
  const content =
    lang === "en"
      ? {
          about: "About NAIE",
          activities: "Activities",
          results: "Results",
          blog: "Blog",
          resources: "Resources",
          privacy: "Privacy",
          contact: "Contact",
          organisations: "For organisations",
          copyright:
            "Dutch Institute for AI Ethics (NAIE). All rights reserved.",
        }
      : {
          about: "Over NAIE",
          activities: "Activiteiten",
          results: "Resultaten",
          blog: "Blog",
          resources: "Bronnen & hulpmiddelen",
          privacy: "Privacy",
          contact: "Contact",
          organisations: "Voor organisaties",
          copyright:
            "Stichting Nederlands AI-Ethiek Instituut (NAIE). Alle rechten voorbehouden.",
        };

  return (
    <footer className="bg-[#0B2545] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <img
              src={logo}
              alt="NAIE logo"
              className="h-10 w-auto mb-4 object-contain"
            />
            <p className="text-sm text-purple-200 leading-relaxed">
              {content.copyright}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">
              {lang === "en" ? "Navigation" : "Navigatie"}
            </h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <Link 
                  to={withLang(lang, lang === "en" ? "/about-us" : "/over-ons")} 
                  className="hover:text-white"
                >
                  {content.about}
                </Link>
              </li>
              <li>
                <Link
                  to={withLang(lang, lang === "en" ? "/activities" : "/activiteiten")}
                  className="hover:text-white"
                >
                  {content.activities}
                </Link>
              </li>
              <li>
                <Link
                  to={withLang(lang, lang === "en" ? "/results" : "/resultaten")}
                  className="hover:text-white"
                >
                  {content.results}
                </Link>
              </li>
              <li>
                <Link 
                  to={withLang(lang, lang === "en" ? "/blog" : "/blog")} 
                  className="hover:text-white"
                >
                  {content.blog}
                </Link>
              </li>
              <li>
                <Link
                  to={withLang(lang, lang === "en" ? "/resources" : "/resources")}
                  className="hover:text-white"
                >
                  {content.resources}
                </Link>
              </li>
              <li>
                <Link
                  to={withLang(lang, lang === "en" ? "/privacy" : "/privacy")}
                  className="hover:text-white"
                >
                  {content.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">
              {lang === "en" ? "Get in touch" : "Neem contact op"}
            </h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <Link
                  to={withLang(lang, lang === "en" ? "/for-organisations" : "/voor-organisaties")}
                  className="hover:text-white"
                >
                  {content.organisations}
                </Link>
              </li>
              <li>
                <Link 
                  to={withLang(lang, lang === "en" ? "/contact" : "/contact")} 
                  className="hover:text-white"
                >
                  {content.contact}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@naie.nl"
                  className="hover:text-white"
                >
                  contact@naie.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#2E0F66] text-center text-xs py-4 text-purple-200">
        © {new Date().getFullYear()} NAIE
      </div>
    </footer>
  );
}