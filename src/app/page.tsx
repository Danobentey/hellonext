import Button from "./components/Button";
import Productcard from "./components/Productcard";
import "./style.css";
import ICONS from "./images/icons";
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

  return (
    <>
      <header className="mt-[60px]">
        <h1 className="text-8xl">We help you start real companies.</h1>
        {/* <img src="" alt="" /> */}

        <div className="flex gap-5 mt-[40px]">
          <Button title="Secure your spo" />

          <h2 className="text-2xl ml-auto w-[50%]">
            Take your business to the next level, launch your startup, and
            upskill yourself as an entrepreneur. Sign ups for 2024 Summer
            Program is now open!
          </h2>
        </div>
      </header>

    <section>
      <div className="mt-[90px] mb-16 mx-auto w-[90%] h-[590px]">
        <img src={ICONS.main_hero.src} alt="main" className="rounded-tl-[290px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[290px] mx-auto"  />
      </div>
    </section>

      <section className="rounded-3xl flex-2 bg-gray-500 p-5">
        <h2 className="mb-8">
          OUR PROGRAM
        </h2>
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
          At Inner Circle, your businesses solve real-world problems and make lasting
          societal impact.
        </h1>
        {/* <div></div> */}
        <img src="" alt="" />
        <div className="overflow-auto">
          <table className="table-fixed w-full text-left mt-6">
            <thead>
              <tr className="p-7">
                <th>Startup</th>
                <th>Founder(s)</th>
                <th>About</th>
              </tr>
            </thead>
            <tbody className="">
              {alumni.map((al, idx) => (
                <tr key={idx} className="border-collapse border-t pt-4">
                  <td>{al.startup}</td>
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
        <p className="text-xs mt-8">
          We have a dynamic network of companies and schools that support our
          mission.
        </p>
      </section>

      <section className="w-full">
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
              <i>third</i>
              <i>third</i>
              <i>third</i>
            </span>
          </div>
        </div>
      </section>

      <section className="p-5 mt-[140px]">
        <h2>CONTRIBUTORS AND SPEAKERS </h2>
        <aside>
          <h1 className="text-4xl mb-8 mt-8 max-w-[25ch]">
            Gain valuable insights and real-world experience from industry
            leaders and entrepreneurs.
          </h1>
        </aside>
      </section>
    </>
  );
}
