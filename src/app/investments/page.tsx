import ContactForm from "@/components/ContactForm";
import CtaAndFaq from "@/components/CtaAndFaq";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import TeamScroller from "@/components/TeamScroller";
import RatingStars from "@/components/Testimonials/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsGeoAlt, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function Home() {
  return (
    <div className="font-sans   grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   pb-20 ">
       
      <Hero />
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

      <div>
        
      <section>
        <TeamScroller/>
      </section>
        <section style={{ padding: "60px 70px", display: "flex" }}>
          <div style={{ flex: 1, padding: "0 50px 0 0px" }}>
            <div>
              <svg
                width="65"
                height="52"
                viewBox="0 0 65 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.581 10.2144H25.7915V0H24.581C18.0636 0.00896991 11.8158 2.60229 7.2078 7.21122C2.59977 11.8201 0.00768621 18.0685 0 24.5858V51.4837H28.106V23.3753H10.258C10.5663 19.7875 12.2083 16.4457 14.8599 14.0092C17.5114 11.5728 20.98 10.2188 24.581 10.2144ZM25.685 25.7988V49.0651H2.42106V24.5858C2.4277 18.919 4.60203 13.4693 8.49822 9.35437C12.3944 5.23939 17.7172 2.77087 23.3753 2.45495V7.82727C19.1437 8.13763 15.1858 10.0363 12.2955 13.1426C9.40516 16.2489 7.79609 20.3331 7.79096 24.5761V25.7867L25.685 25.7988Z"
                  fill="#D1DAE8"
                />
                <path
                  d="M46.5592 23.3753C46.867 19.7871 48.5087 16.4446 51.1603 14.0077C53.812 11.5707 57.2808 10.2164 60.8822 10.212H62.0927V0H60.8822C54.3638 0.00704935 48.1144 2.5996 43.5052 7.2088C38.896 11.818 36.3034 18.0674 36.2964 24.5858V51.4837H64.4V23.3753H46.5592ZM61.9789 49.0651H38.7126V24.5858C38.7192 18.9194 40.8932 13.4701 44.7889 9.35516C48.6846 5.24025 54.0068 2.77147 59.6644 2.45495V7.82727C55.4328 8.13763 51.4749 10.0363 48.5846 13.1426C45.6943 16.2489 44.0852 20.3331 44.0801 24.5761V25.7867H61.9789V49.0651Z"
                  fill="#D1DAE8"
                />
              </svg>
            </div>
            <h4
              style={{
                fontSize: "44px",
                fontWeight: 700,
                marginBottom: "30px",
              }}
            >
              What they say, from our{" "}
              <span style={{ color: "#0047AB" }}>clients</span>
            </h4>
            <p style={{ color: "#545454", marginBottom: "30px" }}>
              Our customers says about serving quality and other.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <button
                style={{
                  backgroundColor: "#ECF4FE",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  margin: "10px 0 0 0",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0047AB",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <BsArrowLeft />
              </button>
              <button
                style={{
                  backgroundColor: "#0047AB",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  margin: "10px 0 0 0",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffffff",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div
            style={{
              flex: 2,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "70px",
              gap: "30px",
              position: "relative", // 👈 Make this a positioning context
            }}
          >
            <div
              style={{
                position: "absolute", // 👈 Position it absolutely
                top: 0,
                right: 0,
                zIndex: -1, // 👈 Push it behind
              }}
            >
              <svg
                width="532"
                height="540"
                viewBox="0 0 532 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="532" height="540" rx="20" fill="#ECF4FE" />
              </svg>
            </div>
            <div
              style={{
                width: "640px",
                boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                borderRadius: "26px",
                display: "flex",
                marginLeft: "250px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div>
                <div style={{ padding: "20px" }}>
                  <div
                    className="relative "
                    style={{ height: "80px", width: "80px" }}
                  >
                    <Image
                      src="/images/client1.jpg"
                      alt="Client photo"
                      fill
                      className="rounded-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#1F1F1F",
                    marginBottom: "16px",
                  }}
                >
                  Very helpful in urgent situation, love the product and best
                  service.
                </p>
                <RatingStars value={4.6} colorClass="text-amber-400" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <svg
                    width="24px"
                    height="64px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
                        fill="#bdbfc0ff"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p style={{ fontSize: "16px", color: "#0047AB" }}>
                    Robert Smith
                  </p>
                </div>
              </div>
            </div>{" "}
            <div
              style={{
                width: "640px",
                boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                borderRadius: "26px",
                display: "flex",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div>
                <div style={{ padding: "20px" }}>
                  <div
                    className="relative "
                    style={{ height: "80px", width: "80px" }}
                  >
                    <Image
                      src="/images/client2.jpg"
                      alt="Client photo"
                      fill
                      className="rounded-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#1F1F1F",
                    marginBottom: "16px",
                  }}
                >
                  Love the interface and really easy to use so far, Great
                  service!
                </p>
                <RatingStars value={4.6} colorClass="text-amber-400" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <svg
                    width="24px"
                    height="64px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
                        fill="#bdbfc0ff"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p style={{ fontSize: "16px", color: "#0047AB" }}>Sarah K.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section style={{ padding: "60px 70px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#002855",
            borderRadius: "30px",
            color: "#FFFFFF",
            padding: "60px 70px", // Moved padding here
            height: "190px",
            width: "100%", // 🔥 Now stretches full width
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ fontSize: "36px", fontWeight: 700 }}>
              Will I have enough money?
            </h1>
            <p style={{ fontSize: "18px", fontWeight: 400 }}>
              Find out if your income will be sufficient in the years ahead.
            </p>
          </div>
          <div>
            <Link
              href="/page"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#002855",
                fontSize: "18px",
                fontWeight: 700,
                padding: "30px 40px",
                borderRadius: "16px",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "60px 70px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "20px" }}>
            <h1
              style={{ fontSize: "44px", fontWeight: 700, marginBottom: "0" }}
            >
              Any <span style={{ color: "#0047AB" }}>questions? </span>
            </h1>
            <h1
              style={{
                fontSize: "44px",
                fontWeight: 700,
                marginBottom: "25px",
              }}
            >
              We got you.
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
