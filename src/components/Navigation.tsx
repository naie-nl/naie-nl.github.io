import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/naie_nl_logo_v1_with_text_blue.svg";


type Lang = "nl" | "en";

type NavItem = {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
};

const navItemsNl: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Over Ons", path: "/over-ons" },
  {
    label: "Activiteiten",
    path: "/activiteiten",
    children: [
      { label: "Bias", path: "/activiteiten/bias" },
      { label: "Verantwoorde AI", path: "/activiteiten/verantwoorde-ai" },
      { label: "Duurzaamheid", path: "/activiteiten/duurzaamheid" },
    ],
  },
  {
    label: "Inzicht",
    path: "/resultaten",
    children: [
      { label: "Resultaten", path: "/resultaten" },
      { label: "Blog", path: "/blog" },
      { label: "Bronnen & hulpmiddelen", path: "/resources" },
      { label: "Nieuws", path: "/nieuws" },
      { label: "Pers & Events", path: "/pers-en-events" },
    ],
  },
  { label: "Voor organisaties", path: "/voor-organisaties" },
  { label: "Deelnemerschap", path: "/deelnemerschap" },
  { label: "Contact", path: "/contact" },
];

const navItemsEn: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  {
    label: "Activities",
    path: "/activities",
    children: [
      { label: "Bias", path: "/activities/bias" },
      { label: "Responsible AI", path: "/activities/responsible-ai" },
      { label: "Sustainability", path: "/activities/sustainability" },
    ],
  },
  {
    label: "Insights",
    path: "/results",
    children: [
      { label: "Results", path: "/results" },
      { label: "Blog", path: "/blog" },
      { label: "Resources", path: "/resources" },
      { label: "News", path: "/news" },
      { label: "Press & Events", path: "/press-and-events" },
    ],
  },
  { label: "For organisations", path: "/for-organisations" },
  { label: "Participation", path: "/membership" },
  { label: "Contact", path: "/contact" },
];

// Bidirectional lookup mapping table
const pathTranslations: Record<string, string> = {
  "/": "/",
  "/over-ons": "/about-us",
  "/about-us": "/over-ons",
  "/activiteiten": "/activities",
  "/activities": "/activiteiten",
  "/activiteiten/bias": "/activities/bias",
  "/activities/bias": "/activiteiten/bias",
  "/activiteiten/verantwoorde-ai": "/activities/responsible-ai",
  "/activities/responsible-ai": "/activiteiten/verantwoorde-ai",
  "/activiteiten/duurzaamheid": "/activities/sustainability",
  "/activities/sustainability": "/activiteiten/duurzaamheid",
  "/resultaten": "/results",
  "/results": "/resultaten",
  "/blog": "/blog",
  "/resources": "/resources",
  "/nieuws": "/news",
  "/news": "/nieuws",
  "/pers-en-events": "/press-and-events",
  "/press-and-events": "/pers-en-events",
  "/voor-organisaties": "/for-organisations",
  "/for-organisations": "/voor-organisaties",
  "/deelnemerschap": "/membership",
  "/membership": "/deelnemerschap",
  "/privacy": "/privacy",
  "/contact": "/contact",
};

function getLangFromPath(pathname: string): Lang {
  const first = pathname.split("/")[1];
  return first === "en" ? "en" : "nl";
}

function withLang(lang: Lang, path: string): string {
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;
  const lang = useMemo(() => getLangFromPath(pathname), [pathname]);
  const base = `/${lang}`;

  const items = useMemo(() => (lang === "en" ? navItemsEn : navItemsNl), [lang]);

  // Safely extract the component path without the language parameter
  const currentPathNoLang = useMemo(() => {
    const parts = pathname.split("/");
    const maybeLang = parts[1];

    if (maybeLang === "nl" || maybeLang === "en") {
      const rest = "/" + parts.slice(2).join("/");
      // Keep root as "/" and strip trailing slashes safely
      return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
    }
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "") || "/";
  }, [pathname]);

  const isActive = (rawPath: string) => {
    const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));
    return normalize(currentPathNoLang) === normalize(rawPath);
  };

  const isChildActive = (children?: { path: string }[]) =>
    children?.some((c) => isActive(c.path)) ?? false;

  const switchLang = (next: Lang) => {
    if (lang === next) return;
    const translatedPath = pathTranslations[currentPathNoLang];
    // Posts have no translations yet; return to the target language's blog list.
    const targetPath = translatedPath ?? (
      currentPathNoLang.startsWith("/blog/") ? "/blog" : "/"
    );
    navigate(`${withLang(next, targetPath)}${location.search}${location.hash}`);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={base} className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="NAIE logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {items.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isChildActive(item.children)
                        ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                        : "text-gray-700 hover:text-[#134074] hover:bg-[#E0F2FE]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={withLang(lang, child.path)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? "text-[#FF7A1A] bg-[#FF7A1A]/5"
                              : "text-gray-700 hover:text-[#134074] hover:bg-[#E0F2FE]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={withLang(lang, item.path)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                      : "text-gray-700 hover:text-[#134074] hover:bg-[#E0F2FE]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Language Switcher + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F6F6F6] rounded-lg p-0.5">
              <button
                onClick={() => switchLang("nl")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "nl"
                    ? "bg-white text-[#0B2545] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇳🇱</span>
                <span className="hidden sm:inline">NL</span>
              </button>
              <button
                onClick={() => switchLang("en")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-white text-[#0B2545] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇬🇧</span>
                <span className="hidden sm:inline">EN</span>
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {items.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="px-3 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={withLang(lang, child.path)}
                        onClick={() => setMobileOpen(false)}
                        className={`block pl-6 pr-3 py-2 text-sm rounded-md transition-colors ${
                          isActive(child.path)
                            ? "text-[#FF7A1A] bg-[#FF7A1A]/5"
                            : "text-gray-600 hover:text-[#134074] hover:bg-[#E0F2FE]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={withLang(lang, item.path)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                        : "text-gray-700 hover:text-[#134074] hover:bg-[#E0F2FE]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}