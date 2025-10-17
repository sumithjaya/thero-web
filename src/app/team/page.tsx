import CalForm from "@/components/Calculators/MainForm";
import CalChartArea1 from "@/components/Charts/CalChartArea1";
import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import HeroCalculators from "@/components/hero/HeroCalculators";
import HeroTeam from "@/components/hero/HeroTeam";
import RatingStars from "@/components/Testimonials/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAlt,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function Calculators() {
  const team = [
    {
      name: "Alice Johnson",
      role: "Retirement Specialist",
      img: "/images/team/1.jpg",
    },
    { name: "Bob Smith", role: "Financial Advisor", img: "/images/team/2.jpg" },
    { name: "Clara Lee", role: "Pension Expert", img: "/images/team/3.jpg" },
    { name: "David Kim", role: "Wealth Planner", img: "/images/team/4.jpg" },
    {
      name: "Ella Brown",
      role: "Superannuation Specialist",
      img: "/images/team/5.jpg",
    },
    { name: "Frank White", role: "Tax Strategist", img: "/images/team/6.jpg" },
    {
      name: "Grace Green",
      role: "Client Success Manager",
      img: "/images/team/7.jpg",
    },
    {
      name: "Henry Black",
      role: "Investment Consultant",
      img: "/images/team/8.jpg",
    },
  ];
  return (
    <div className="font-sans   grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   pb-20 ">
      <HeroTeam />

      <section>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white  shadow-md hover:shadow-lg transition"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={290}
                height={367}
                style={{
                  borderRadius: "16px",
                  objectFit: "cover",
                  height: "367px",
                }}
                className="   object-cover mb-4"
              />
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px",
                  borderRadius: "16px",
                  position: "absolute",
                  bottom: 10,
                  maxHeight: "96px",
                }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 70px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "20px" }}>
            <h1
              style={{ fontSize: "44px", fontWeight: 700, marginBottom: "0" }}
            >
              <span style={{ color: "#0047AB" }}> How we calculate </span>
            </h1>
            <h1
              style={{
                fontSize: "44px",
                fontWeight: 700,
                marginBottom: "25px",
              }}
            >
              Our assessment and Our assumptions
            </h1>
            <p
              style={{
                color: "#545454",
                fontWeight: 400,
                fontSize: "18px",
                marginBottom: "25px",
              }}
            >
              Yet bed any for assistance indulgence unpleasing. Not thoughts all
              exercise blessing. Indulgence way everything joy alteration
              boisterous the attachment.{" "}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p
                style={{ color: "#0047AB", fontWeight: 700, fontSize: "18px" }}
              >
                More FAQs
              </p>{" "}
              <BsArrowRight
                style={{ color: "#0047AB", fontWeight: 700, fontSize: "18px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flex: 2 }}>
            <CtaAndFaq />
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "60px 70px",
          display: "flex",
          flex: 2,
          width: "100%",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "#ffffffff" }}>
          <ContactForm />
        </div>
        <div style={{ flex: 1, padding: "36px" }}>
          <h5 style={{ color: "#1F1F1F", fontSize: "44px", fontWeight: 700 }}>
            Contact Us
          </h5>
          <p style={{ color: "#1F1F1F", fontSize: "18px", fontWeight: 400 }}>
            There is now an abundance of readable dummy texts. These are usually
            used when a text is required purely to fill a space.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ display: "flex", flex: 1 }}>
              <div
                style={{
                  backgroundColor: "#002855",
                  color: "#FFF",
                  borderRadius: "16px",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BiPhone style={{ fontSize: "32px", color: "#FFF" }} />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#1F1F1F",
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#545454",
                  }}
                >
                  {" "}
                  (+081) 9876 1234
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <div
                style={{
                  backgroundColor: "#002855",
                  color: "#FFF",
                  borderRadius: "16px",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BiMailSend style={{ fontSize: "32px", color: "#FFF" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#1F1F1F",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#545454",
                  }}
                >
                  johndoe@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 20 }}>
              <div
                style={{
                  backgroundColor: "#002855",
                  color: "#FFF",
                  borderRadius: "16px",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BsGeoAlt style={{ fontSize: "32px", color: "#FFF" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#1F1F1F",
                  }}
                >
                  Address
                </p>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#545454",
                  }}
                >
                  London Eye, London
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                gap: 20,
                padding: "50px",
                borderTop: "1px solid #dddddd",
                marginTop: "20px",
              }}
            >
              <div
                style={{ color: "#1F1F1F", fontSize: "22px", fontWeight: 700 }}
              >
                Social Media
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "#0047AB solid 1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaFacebook style={{ color: "#0047AB" }} />{" "}
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "#0047AB solid 1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsTwitterX style={{ color: "#0047AB" }} />
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "#0047AB solid 1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsYoutube style={{ color: "#0047AB" }} />
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "#0047AB solid 1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsLinkedin style={{ color: "#0047AB" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
