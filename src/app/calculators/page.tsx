import CalForm from "@/components/Calculators/MainForm";
import CalChartArea1 from "@/components/Charts/CalChartArea1";
import SegmentedBars from "@/components/Charts/SegmentedBars";
import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Header from "@/components/header";
import Hero from "@/components/Home/Hero";
import HeroCalculators from "@/components/hero/HeroCalculators";
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
  return (
    <div className="font-sans   grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   pb-20 ">
      <HeroCalculators />
      <div style={{ minHeight: "400px", boxSizing: "border-box" }}>
        <svg
          width="1240"
          height="160"
          viewBox="0 0 1240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1189.9 0C1208.69 1.50182e-10 1218.08 2.14568e-05 1225.07 4.05859C1229.58 6.67676 1233.32 10.4243 1235.94 14.9316C1240 21.919 1240 31.3128 1240 50.0996V109.9C1240 128.687 1240 138.081 1235.94 145.068C1233.32 149.576 1229.58 153.323 1225.07 155.941C1218.08 160 1208.69 160 1189.9 160H886.734C870.852 160 861.944 145.732 854.402 131.754C851.623 126.603 847.397 122.377 842.246 119.598C835.578 116 826.751 116 809.1 116H430.9C413.249 116 404.422 116 397.754 119.598C392.603 122.377 388.377 126.603 385.598 131.754C378.056 145.732 369.148 160 353.266 160H50.0996C31.3128 160 21.919 160 14.9316 155.941C10.4243 153.323 6.67676 149.576 4.05859 145.068C2.50622e-05 138.081 1.97247e-10 128.687 0 109.9V50.0996C1.97247e-10 31.3128 2.50622e-05 21.919 4.05859 14.9316C6.67676 10.4243 10.4243 6.67676 14.9316 4.05859C21.919 2.51158e-05 31.3128 1.97996e-10 50.0996 0H1189.9Z"
            fill="#002855"
          />
        </svg>
      </div>

      <section>
        <CalForm />
      </section>
      <section style={{width:'100%',padding:'70px 70px'}}>
        <div style={{ display: "flex", gap: "50px", flex: 2, width: "100%" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: 50,
              boxShadow: "0px 0px 10px 10px rgba(189, 185, 185, 0.15)",
              borderRadius: "26px",
              flex: 1,
            }}
          >
            <h4 style={{ fontSize: "26px", fontWeight: 700 }}>Projection</h4>
            <CalChartArea1/>
          </div> 
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: 50,
              boxShadow: "0px 0px 10px 10px rgba(189, 185, 185, 0.15)",
              borderRadius: "26px",
              flex: 1,
            }}
          > 
            <h4 style={{ fontSize: "26px", fontWeight: 700 }}>Your Retirement Strategy</h4>
            <SegmentedBars/>
          </div>
        </div>
<div
  style={{
    display: "flex",
    alignItems: "center",   // ✅ fixed colon
    justifyContent: "center",
    width: "100%",
    padding: "30px 0",
  }}
>
  <button
    style={{
      backgroundColor: "#0047AB",
      fontWeight: 700,
      fontSize: "18px",
      borderRadius: "20px",
      color: "#FFFFFF",
      padding: "20px 30px",
      border: "none", // optional: removes default border
      cursor: "pointer", // optional: makes it clickable
    }}
  >
    Get Your Report
  </button>
</div>

      </section>
         
      <section style={{ padding: "60px 70px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "20px" }}>
            <h1
              style={{ fontSize: "44px", fontWeight: 700, marginBottom: "0" }}
            >
               <span style={{ color: "#0047AB" }}> How we calculate   </span>
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
