import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

// Auth (kept non-localized for now)
import AuthCallback from "@/pages/AuthCallback";
import AuthError from "@/pages/AuthError";

import NotFound from "@/pages/NotFound";

// Blog pages (separate per language)
import { Blog as BlogNl, BlogPost as BlogPostNl } from "@/pages/nl/Blog";
import { Blog as BlogEn, BlogPost as BlogPostEn } from "@/pages/en/Blog";

// Norwegian pages
import IndexNl from "@/pages/nl/Index";
import OverOnsNl from "@/pages/nl/OverOns";
import ActiviteitenNl from "@/pages/nl/Activiteiten";
import ResultatenNl from "@/pages/nl/Resultaten";
import DeelnemerschapNl from "@/pages/nl/Deelnemerschap";
import {
  Resources as ResourcesNl,
  Nieuws as NieuwsNl,
  PersEnEvents as PersEnEventsNl,
  VoorOrganisaties as VoorOrganisatiesNl,
  Contact as ContactNl,
} from "@/pages/nl/SecondaryPages";
import PrivacyNl from "@/pages/nl/Privacy";

// English pages
import IndexEn from "@/pages/en/Index";
import AboutUsEn from "@/pages/en/AboutUs";
import AktivitiesEn from "@/pages/en/Activities";
import ResultsEn from "@/pages/en/Results";
import MembershipEn from "@/pages/en/Membership";
import {
  Resources as ResourcesEn,
  News as NewsEn,
  PressAndEvents as PressAndEventsEn,
  ForOrganisations as ForOrganisationsEn,
  Contact as ContactEn,
} from "@/pages/en/SecondaryPages";
import PrivacyEn from "@/pages/en/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          {/* Root -> default language */}
          <Route path="/" element={<Navigate to="/nl" replace />} />

          {/* ===========================
              Norwegian routes (/nl)
          =========================== */}
          <Route path="/nl" element={<IndexNl />} />
          <Route path="/nl/over-ons" element={<OverOnsNl />} />
          <Route path="/nl/activiteiten" element={<ActiviteitenNl />} />
          <Route path="/nl/activiteiten/:slug" element={<ActiviteitenNl />} />
          <Route path="/nl/resultaten" element={<ResultatenNl />} />
          <Route path="/nl/resources" element={<ResourcesNl />} />
          <Route path="/nl/nieuws" element={<NieuwsNl />} />
          <Route
            path="/nl/pers-en-events"
            element={<PersEnEventsNl />}
          />
          <Route path="/nl/voor-organisaties" element={<VoorOrganisatiesNl />} />
          <Route path="/nl/deelnemerschap" element={<DeelnemerschapNl />} />
          <Route path="/nl/contact" element={<ContactNl />} />
          <Route path="/nl/privacy" element={<PrivacyNl />} />

          {/* Blog under /nl */}
          <Route path="/nl/blog" element={<BlogNl />} />
          <Route path="/nl/blog/:slug" element={<BlogPostNl />} />

          {/* ===========================
              English routes (/en)
          =========================== */}
          <Route path="/en" element={<IndexEn />} />
          <Route path="/en/about-us" element={<AboutUsEn />} />
          <Route path="/en/activities" element={<AktivitiesEn />} />
          <Route path="/en/activities/:slug" element={<AktivitiesEn />} />
          <Route path="/en/results" element={<ResultsEn />} />
          <Route path="/en/resources" element={<ResourcesEn />} />
          <Route path="/en/news" element={<NewsEn />} />
          <Route
            path="/en/press-and-events"
            element={<PressAndEventsEn />}
          />
          <Route path="/en/for-organisations" element={<ForOrganisationsEn />} />
          <Route path="/en/membership" element={<MembershipEn />} />
          <Route path="/en/contact" element={<ContactEn />} />
          <Route path="/en/privacy" element={<PrivacyEn />} />
          
          {/* Blog under /en */}
          <Route path="/en/blog" element={<BlogEn />} />
          <Route path="/en/blog/:slug" element={<BlogPostEn />} />

          {/* Auth routes */}
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/error" element={<AuthError />} />

          {/* Backward compatibility redirects (Norwegian) */}
          <Route path="/about-us" element={<Navigate to="/nl/about-us" replace />} />
          <Route path="/activiteiten" element={<Navigate to="/nl/activiteiten" replace />} />
          <Route
            path="/activiteiten/:slug"
            element={<Navigate to="/nl/activiteiten/:slug" replace />}
          />
          <Route path="/resultaten" element={<Navigate to="/nl/resultaten" replace />} />
          <Route path="/resources" element={<Navigate to="/nl/resources" replace />} />
          <Route path="/nieuws" element={<Navigate to="/nl/nieuws" replace />} />
          <Route
            path="/pers-en-events"
            element={<Navigate to="/nl/pers-en-events" replace />}
          />
          <Route
            path="/voor-organisaties"
            element={<Navigate to="/nl/voor-organisaties" replace />}
          />
          <Route path="/contact" element={<Navigate to="/nl/contact" replace />} />
          <Route path="/blog" element={<Navigate to="/nl/blog" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/nl/blog/:slug" replace />} />
          
          {/* Backward compatibility redirects (English) */}
          <Route path="/about-us" element={<Navigate to="/en/about-us" replace />} />
          <Route path="/activities" element={<Navigate to="/en/activities" replace />} />
          <Route
            path="/activities/:slug"
            element={<Navigate to="/en/activities/:slug" replace />}
          />
          <Route path="/results" element={<Navigate to="/en/results" replace />} />
          <Route path="/resources" element={<Navigate to="/en/resources" replace />} />
          <Route path="/news" element={<Navigate to="/en/news" replace />} />
          <Route
            path="/press-and-events"
            element={<Navigate to="/en/press-and-events" replace />}
          />
          <Route
            path="/for-organisations"
            element={<Navigate to="/en/for-organisations" replace />}
          />
          <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
          <Route path="/blog" element={<Navigate to="/en/blog" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/en/blog/:slug" replace />} />

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;