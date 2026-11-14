import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MembershipForm from "@/components/MembershipFormEn";

export default function Membership() {
  return (
    <div
      className="min-h-screen bg-[#F6F6F6] overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#134074] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Participation</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE is an independent, non-profit foundation working for ethical and responsible use of artificial intelligence in the Netherlands.
              As a participant, you become part of the community around NAIE and can work with others to contribute to our activities.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Explanation */}
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
                        How does participation work?
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          As a participant, you are involved in NAIE’s work. Participation offers a way to be part of the foundation and work with others to promote the ethical and responsible use of AI.
                        </p>
                        <p>
                          You can contribute your knowledge, experience, or time to projects, working groups, activities, or practical support. We welcome different backgrounds and perspectives; you do not need to be an AI specialist to contribute.
                        </p>
                        <p>
                          Participation is not membership of an association and carries no voting rights. The board is responsible for the foundation’s policies and decisions. Participants can share ideas and suggestions and help shape NAIE’s work.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
                        How can you contribute?
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        Active engagement is about how you contribute to the foundation’s work and goals. This can, for example, be through:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        {[
                          "professional input in working groups or projects",
                          "participation in events or meetings",
                          "contributions to insight, analysis, or methodology work",
                          "practical organisational support",
                        ].map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-[7px] w-2 h-2 rounded-full bg-[#FF7A1A] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        There are different ways to get involved. Together, we can explore how you would like to contribute based on your interests, experience, and available time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Privacy</h2>
                      <p className="text-gray-600 leading-relaxed">
                        The information you submit through the form is used for participant administration and communication about your involvement with NAIE.
                        We do not publish participant information without consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-lg">
                  <Link to="/en/about-us">Learn more about NAIE</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#134074] hover:bg-[#0B2545] text-white font-semibold rounded-lg"
                >
                  <Link to="/en/contact">
                    Questions? Get in touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
                    Become a participant
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Fill in the form below to register your interest in becoming a participant. Use the motivation field to tell us why you would like to get involved and how you might contribute.
                  </p>
                  <MembershipForm />
                </CardContent>
              </Card>

              <Card className="mt-6 border-0 shadow-md bg-[#E0F2FE]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0B2545] mb-2">Note</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Participants contribute to NAIE’s work and community. Participation carries no voting rights; responsibility for governing the foundation rests with the board.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}