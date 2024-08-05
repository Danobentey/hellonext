import Button from "./components/Button";
import Productcard from "./components/Productcard";
import "./style.css";
import ICONS from "./images/icons";
import Partners from "./components/Partners";
import ProfileCard from "./components/ProfileCard";
import PROFILES from "./images/profiles";
// import {} from "banner"

export default function Home() {
  const services = [
    {
      src: ICONS.crown.src,
      title: "Mentorship",
      desciption:
        "Gain invaluable insights from Ivy League and Fortune 500 guest speakers, paired with personalized mentorship to guide your path.",
    },
    {
      src: ICONS.plane.src,
      title: "Launch a Business",
      desciption:
        "Equipped with the right tools and resources, you'll bring your startup from concept to creation, ready to enter the market.",
    },
    {
      src: ICONS.rocket.src,
      title: "Career Preparation",
      desciption:
        "Dive into a variety of disciplines, gaining exposure that helps crystallize your future career aspirations.",
    },
    {
      src: ICONS.globe.src,
      title: "Community",
      desciption:
        "Join a like-minded community of highly motivated individuals, fostering connections that propel your personal and professional growth.",
    },
  ];

  const alumni = [
    {
      startup: "Pawpals",
      founders: [
        { name: "Phuong Linh Nguyen", img: "" },
        { name: "Prakhar Sharma", img: "" },
      ],
      about:
        "PawPals is a pet-technology startup that delivers professional and extensive services for your pet right at your home. ",
    },
    {
      startup: "Mentor Magnet",
      founders: [
        { name: "Dai Lam", img: "" },
        { name: "Khoa Minh Nguyen", img: "" },
        { name: "Thuy Linh Doan", img: "" },
      ],
      about:
        "MentorMagnet connects Gen Z tutors and tutees on a shared platform without taking extra effort to find tutors or tutees.",
    },
    {
      startup: "StuNotes.ai",
      founders: [
        { name: "Ha Thu Nguyen", img: "" },
        { name: "Thoma Kitahara-Bigot", img: "" },
      ],
      about:
        "PStuNotes is a startup aimed to make IB/AP students' lives easier by generating their learning materials into practical exam questions.",
    },
  ];

  const experts = [
    {
      img: PROFILES.yen.src,
      name: "Thu Yen nguyen",
      company: "Bank of America",
      role: "Business Analyst",
      statement: "Thu-Yen Nguyen is a business analyst at Bank of America, a leading investment bank with more than a trillion dollars AUM. Prior to joining BofA, she worked at VinFast working in their product management arm.",
    },
    {
      img: PROFILES.may.src,
      name: "Co May Nguyen",
      company: "Stucolab",
      role: "CEO",
      statement: "Co May is a founder and CEO of Stucolab space – a collaborative study environment that aims to cultivate a community of students who can thrive collectively. In the past program, she shared her wealth of expertise in marketing and branding.",
    },
    {
      img: PROFILES.cuong.src,
      name: "Viet Cuong Nguyen",
      company: "VietcomBank",
      role: "Deputy CEO",
      statement: "Nguyễn Việt Cường is the Deputy CEO of VietcomBank, a leading commercial bank with $62 billion in assets. He holds decades of experience in the financial services industry and has worked with renowned companies in the past",
    },
    {
      img: PROFILES.mads.src,
      name: "Mads Warner",
      company: "Ecotek",
      role: "CEO",
      statement: "Mads Werner is a 3x Founder and serial entrepreneur. Currently, he is the CEO of EcoTek, a leading technology consultancy company as an extension of EcoPark Group. Previously, he was a venture capitalist at Golden Gate Ventures.",
    },
  ]

  return (
    <>
      <header className="mt-[60px]">
        <h1 className="text-8xl">We help you start real companies.</h1>
        {/* <img src="" alt="" /> */}

        <div className="flex gap-5 mt-[90px]">
          <Button title="Secure your spot" />

          <h2 className="text-2xl ml-auto w-[50%]">
            Take your business to the next level, launch your startup, and
            upskill yourself as an entrepreneur. Sign ups for 2024 Summer
            Program is now open!
          </h2>
        </div>
      </header>

      <section>
        <div className="mt-[90px] mb-16 mx-auto w-[90%] h-[590px]">
          <img
            src={ICONS.main_hero.src}
            alt="main"
            className="rounded-tl-[290px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[290px] mx-auto"
          />
        </div>
      </section>

      <section className="rounded-3xl flex-2 bg-gray-500 p-5">
        <h2 className="mb-8">OUR PROGRAM</h2>
        <h1 className="text-4xl mx-3 mb-8 max-w-[22ch]">
          Launch your business in our transformative entrepreneurship journey.
        </h1>
        <div className="grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 gap-8 grid-flow-col">
          {services.map((i, index) => (
            <Productcard
              key={index}
              icon={i.src}
              desc={i.desciption}
              product_name={i.title}
            />
          ))}
        </div>
      </section>

      <section className="p-5 mt-12">
        <h2>ALUMNI STARTUP</h2>
        <h1 className="text-4xl mb-8 mt-8 max-w-[25ch]">
          At Inner Circle, your businesses solve real-world problems and make
          lasting societal impact.
        </h1>
        {/* <div></div> */}
        <img src={ICONS.two_nerds.src} alt="" className="ml-auto" />

        <div className="mt-20 overflow-auto">
          <table className="table-fixed w-full text-left mt-6">
            <thead>
              <tr className="h-12">
                <th>Startup</th>
                <th>Founder(s)</th>
                <th>About</th>
              </tr>
            </thead>
            <tbody className="">
              {alumni.map((al, idx) => (
                <tr key={idx} className="border-collapse border-t h-32">
                  <td className="text-4xl">{al.startup}</td>
                  <td>
                    {al.founders.map((f, i) => (
                      <span key={i} className="inline-block mr-2">
                        {f.name}
                      </span>
                    ))}
                  </td>
                  <td>{al.about}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-5 mt-12">
        <h2>PARTNERS & SPONSORS</h2>
        <h1 className="text-4xl mb-8 mt-8 max-w-[25ch]">
          Our Program is backed by the best.
        </h1>
        <p className="text mt-8 mb-8">
          We have a dynamic network of companies and schools that support our
          mission.
        </p>

        <Partners />
      </section>

      {/* <section className="w-full">
        <div className="container">
          <div className="first-slide w-full">
            <span>first - slide</span>
          </div>
          <div className="words words--first w-full flex">
            <span className="flex justify-between gap-14">
              <b>second</b>
              <b>second</b>
              <b>second</b>
            </span>
          </div>
          <div className="words words--second w-full">
            <span className="flex justify-between">
              <b>second</b>
              <b>second</b>
              <b>second</b>
            </span>
          </div>
          <div className="words words--second w-full">
            <span className="flex justify-between">
              <b>second</b>
              <b>second</b>
              <b>second</b>
            </span>
          </div>
        </div>
      </section> */}

      <section className="p-5 mt-24">
        <h2>CONTRIBUTORS AND SPEAKERS </h2>
        <aside>
          <h1 className="text-4xl mb-8 mt-8 max-w-[25ch]">
            Gain valuable insights and real-world experience from industry
            leaders and entrepreneurs.
          </h1>
          {/* class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-12" */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
            {experts.map((i, idx) => (
              <ProfileCard key={idx} name={i.name} company={i.company} role={i.role} statement={i.statement} img={i.img} />
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
