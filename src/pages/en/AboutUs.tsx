import { Link } from "react-router-dom";
import { Users, Target, Handshake, ArrowRight, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const boardMembers = [
  {
    name: "Jessica Balla - de Boer",
    role: "Chair",
    description: "Projectmanager Location- and Area Development, Gemeente Hoorn.",
    image: "jessica-balla-de-boer.jpg",
    linkedin: "https://www.linkedin.com/in/jessica-balla-de-boer-7a731333/",
  },
  {
    name: "Tjen de Clerck",
    role: "Vice-chair",
    description: "Senior Security Consultant, Tech Scorpions.",
    image: "tjen-de-clerck.png",
    linkedin: "https://www.linkedin.com/in/tjendeclerck/",
  },
  {
    name: "Wessel Braakman",
    role: "Secretary/Treasurer",
    description: "Senior QA Consultant, Bouvet.",
    image: "wessel-braakman.png",
    linkedin: "https://www.linkedin.com/in/wesselbraakman/",
  },
];

export default function OmOss() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE (Dutch Institute for AI Ethics) is an independent,
              non-profit organisation working to promote the ethical and
              responsible use of artificial intelligence in the Netherlands.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NAIE was founded with a vision to make AI more fair,
                  transparent, and sustainable.
                </p>
                <p>
                  We provide insights in three main areas: Bias in AI systems,
                  Responsible AI development, and Sustainability in AI
                  technology.
                </p>
                <p>
                  NAIE collaborates with the Norwegian and Danish associations
                  and other key stakeholders.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Target,
                  title: "Vision",
                  desc: "A future where AI is fair, transparent, and sustainable for everyone.",
                },
                {
                  icon: Handshake,
                  title: "Collaboration",
                  desc: "We work closely with research institutions and industry.",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "We bring together people from different backgrounds around the ethical and responsible use of AI.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#134074]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B2545] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B2545] mb-4">
              Board
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NAIE’s board is multidisciplinary, bringing together different professional backgrounds and perspectives. We share a commitment to the ethical and responsible use of AI and to understanding its impact on people and society.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
            {boardMembers.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <Card className="border-0 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex">
                  <CardContent className="p-8 text-center flex flex-col flex-grow">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}board/${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#0B2545]">
                      {member.name}
                    </h3>

                    <p className="text-[#FF7A1A] text-sm font-medium mt-1">
                      {member.role}
                    </p>

                    <p className="text-gray-600 text-sm mt-3">
                      {member.description}
                    </p>

                    {/* Bottom aligned icon */}
                    <div className="mt-auto pt-6 flex justify-center">
                      <div className="w-9 h-9 rounded-full bg-[#E0F2FE] flex items-center justify-center transition-colors group-hover:bg-[#E0D8FF]">
                        <Linkedin className="w-4 h-4 text-[#134074]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0B2545] mb-4">Participation</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Participants form the community around NAIE and contribute their knowledge, experience, and time to projects and activities. Together, we shape the foundation’s work. Participation carries no voting rights; responsibility for governing the foundation rests with the board.
                  </p>
                </div>
      
                <div className="text-center md:text-right flex flex-col md:items-end gap-3">
                  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                    <Link to="/en/membership">
                      Learn more about participation <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
      
                  <Button asChild variant="outline" className="rounded-lg">
                    <Link to="/en/contact">Questions? Get in touch</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organisation Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0B2545] to-[#134074] text-white">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Organisation information
                  </h2>
                  <ul className="space-y-3 text-purple-200">
                    <li>
                      <span className="text-white font-medium">Name:</span>{" "}
                      Dutch Institute for AI Ethics (NAIE)
                    </li>
                    <li>
                      <span className="text-white font-medium">Type:</span>{" "}
                      Independent, non-profit organisation
                    </li>
                    <li>
                      <span className="text-white font-medium">KvK. no.:</span>{" "}
                      42075283
                    </li>
                    <li>
                      <span className="text-white font-medium">License:</span>{" "}
                      CC BY 4.0
                    </li>
                  </ul>
                </div>

                <div className="text-center md:text-right">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg"
                  >
                    <Link to="/en/contact">
                      Contact us <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}