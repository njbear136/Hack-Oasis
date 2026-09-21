"use client";

import { useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";

const playfair = localFont({
    src: "./fonts/HennyPenny-Regular.woff2",
    variable: "--font-playfair",
});

const pixel= Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-pixel",
});

const kavoon= localFont({
    src: "./fonts/Kavoon.ttf",
    weight: "400",
    variable: "--font-script",
});

const marykate= localFont({
    src: "./fonts/MaryKate.ttf",
    variable: "--font-body",
});

//FAQ
function Reveal({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref= useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            {threshold: 0.15}
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
         ref= {ref}
         className={`transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         } ${className}`}
         >
            {children}
         </div>
    );
    }


    //FAQ row
    function FaqItem({ q,a}: {q: string, a: string}) {
        const [open, setOpen] = useState(false);
        return(
            <div className="border-b border-black/20 py-4">
                <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-left text-black"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                >
                <span className="text-xl sm:text-2xl">{q}</span>
                <span className="ml-4 text-2xl leading-none">{open ? "-" : "+"}</span>
                </button>
                {open && (
                    <p
                    className="mt-3 text-black/80"
                    style={{
                        fontFamily: "var(--font-body)",
                    fontSize: "clamp(1.4rem, 1.4vw, 1.2rem)",
                    }}
                    >
                        {a}
                    </p>
                )}
            </div>
        );
    }

const faqData = [
    {q:"What can I build?", a: "Anything software or hardware! It can be a website, a game, a cyberdeck, etc. You can build anything you like, just make sure to track the time!"},
    {q:"Can beginners come?", a: "Yes, of course. It will take you a bit of willpower to learn, but we have tons of resources and tutorials you can use to learn coding and get ready for the big event!"},
    {q:"Who's eligible to participate?", a: "Any teen aged 13-18 at the time of the event."},
    {q:"Is this free?", a: "Yes! Participation is absolutely free, we will be covering your food and accomodation. You can work on projects for more hours to get stipends for your flights too!"},
    {q:"When is it?", a: "January 2027. Detailed schedule and timing will be released closer to the event."},
    {q:"What is Hack Club?", a: "Hack Club is a 501(c)(3) nonprofit (ein: 81-2908499) that helps high school students learn to code and build projects. We're the largest teen-led coding community, with over 50,000 students building projects with their friends in Hack Club each year. In the past, we've run events like Juice (a 2 month game jam leading to a pop-up cafe in shanghai, china), Hack Club: the game (a 2-day territory capture game across the entirety of Manhattan, NYC), and Undercity (a 4-day hardware hackathon at github hq)!"},
    {q:"I have more questions...", a: "Feel free to join our slack channel #hack-oasis and we will assist you with any questions you may have."}
];

export default function Home() {
    return (
        <main 
        className={`${playfair.variable} ${pixel.variable} ${kavoon.variable} ${marykate.variable} relative`}
    >
        <div
        className="fixed left-1/2 top-0 z-50 w-32 -translate-x-1/2 sm:w-44"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)"}}
        >
            <Image
            src= "/flag-orpheus-top.png"
            alt="Hack Club"
            width={300}
            height={300}
            className="h-auto w-full"
            priority
            />
        </div>

<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    <video
    autoPlay
    muted
    playsInline
    className="absolute inset-0 -z-20 h-full w-full object-cover"
    >
     <source src="/hero-video.mp4" type="video/mp4"/>
    </video>

    <div className="absolute inset-0 -z-10 bg-black/20" />

    <div className= "flex flex-col items-center px-6 text-center">
        <h1
        className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
        style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            lineHeight: 1,
            WebkitTextStroke: "2.5px #04184e",
        }}
        >
            Hack Oasis
        </h1>

        <p
        className="mt-10 text-indigo-950/90"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(0.55rem, 1.3vw, 0.85rem)",
              lineHeight: 2.1,
              letterSpacing: "0.25em",
            }}
          >
            A 3 DAY HACKATHON IN
            <br />
            ABU DHABI, UAE
            <br />
            JANUARY 2027
          </p>

          <Link 
          href= "https://rsvp.hackclub.community/hack-oasis/"
          className="mt-10 inline-block border-4 border-white bg-teal-400 px-8 py-4 text-white transition-all duration-150 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-teal-300 active:translate-x-[2px] active:translate-y-[2px] active:scale-100 active:bg-teal-500 active:shadow-none"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "clamp(0.65rem,1.5vw, 0.85rem)",
            letterSpacing: "0.15em",
            boxShadow: "6px 6px 0 0 rgba(0,0,0,0.35)",
          }}
          >
            START
          </Link>
          </div>
</section>


<section
className= "relative flex min-h-screen items-center bg-cover bg-center px-6 py-24 sm:px-16"
style={{backgroundImage: "url('/section-bg5.jpg')"}}
>
    <Reveal className="max-w-3xl">
        <h2
        className= "text-white"
        style={{
            fontFamily: "var(--font-script)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            WebkitTextStroke: "1.5px #2db3d4",
        }}
        >
            What is Hack Oasis
        </h2>
        <div
        className= "mt-6 space-y-6 text-black"
        style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "clamp(1.35rem, 2.1vw, 1.75rem)",
            lineHeight: 1.6,
        }}
        >
            <p>
              Hack Oasis is a flagship Hack Club event happening in Abu
              Dhabi, UAE. Build creative projects for 50 hours and you can
              earn an invite to our coding oasis!
            </p>
           <p>
              Your food and accommodation will be covered — any work you do
              after getting your ticket counts toward your flight stipend or
              anything else you might want to purchase from our shop. If you
              can't make it to the event, use your hours to buy
              yourself gifts from the shop!
            </p> 
        </div>
    </Reveal>
</section>



<section
 className="relative flex min-h-screen items-center bg-cover bg-center px-6 py-24 sm:px-16"
 style={{backgroundImage: "url('/section-bg5.jpg')"}}
 >
    <Reveal className="w-full max-w-2xl">
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-script)",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 5rem)",
              WebkitTextStroke: "1.5px #2db3d4",
            }}
          >
            FAQ
          </h2>
          <div className="mt-6">
            {faqData.map((item) => (
                <FaqItem key={item.q} {...item} />
    ))}
          </div>
          </Reveal>
 </section>



 <section
 className="relative flex min-h-screen items-center bg-cover bg-center px-6 py-24 sm:px-16"
 style={{backgroundImage: "url('/section-bg5.jpg')"}}
 >
    <Reveal>
        <p
        className="max-w-2xl text-black"
        style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "clamp(1.35rem, 2.1vw, 1.75rem)",
            lineHeight: 1.7,
        }}
        >
            A project by Hack Clubbers at{""} <Link href="https://hackclub.com/" className="underline">Hack Club!</Link> 
             Hack Club is a 501(c)(3) nonprofit and network of 100k+
            technical high schoolers. We believe you learn best by building,
            so we are creating this community and providing grants so
            you can make awesome projects. In the past few years, we have
            sent{""} <Link href="https://www.youtube.com/watch?v=ufMUJ9D1fi8" className="underline"> 30 teen hackers hiking the Pacific Crest Trail,{""}</Link>
            <Link href="https://www.youtube.com/watch?v=8iM1W8kXrQA" className="underline"> hosted a hackathon for the worst ideas, {""}</Link>
            <Link href="https://youtu.be/dTGFOKblRc4?si=ywttK4FcWRH_QVVn" className="underline"> flew 200+ teenagers to china to build projects,</Link>
             <Link href="https://www.youtube.com/watch?v=kaEFv7e49mo" className="underline"> and ran the largest teen hardware hackathon at GitHub HQ.{""}</Link>
            </p>

        <p
         className="max-w-2xl text-black"
        style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "clamp(1.35rem, 2.1vw, 1.75rem)",
            lineHeight: 1.7,
        }}
        > 
            Read about Hack Club in{""}
            <Link href="https://www.wsj.com/articles/teen-hackers-try-to-convince-parents-they-are-up-to-good-11569922200" className="underline"> {""}The Wall Street Journal,{""}</Link>
            <Link href="https://www.cbsnews.com/sanfrancisco/news/hack-club-hosts-teen-coders-san-francisco/"  className="underline"> CBS News,{""} and {""}</Link> 
            <Link href="https://www.nasa.gov/learning-resources/space-out-this-summer-with-variety-of-nasa-stem-activities/"  className="underline"> nasa.gov, {""}</Link>
            <Link href="https://www.youtube.com/live/UbfAhFxDomE?t=7033s" className="underline"> or watch us on stage with AMD CEO Lisa Su at CES.</Link>           
        </p>

        <div
        className="mt-12 grid grid-cols-2 gap-10 text-black sm:w-fit sm:grid-cols-2"
        style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 1.3vw, 1.15rem)",
        }}
        >
        <div>
            <p className="mb-3">community</p>
            <ul className="space-y-2 font-normal">
                <li><Link href="https://slack.hackclub.com/" className="underline">join our slack</Link></li>
                <li><Link href="https://events.hackclub.com/" className="underline">community events</Link></li>
                <li><Link href="https://workshops.hackclub.com/" className="underline">workshops</Link></li>
                <li><Link href="https://forms.hackclub.com/bounty" className="underline">bounty</Link></li>
                <li><Link href="https://hackclub.com/conduct/" className="underline">code of conduct</Link></li>
            </ul>
        </div>

        <div>
            <p className="mb-3"> hack club </p>
            <ul className="space-y-2 font-normal">
                <li><Link href="https://hackclub.com/philosophy/" className="underline">philosophy</Link></li>
                <li><Link href="https://hackclub.com/team/" className="underline">our team & board</Link></li>
                <li><Link href="https://hackclub.com/brand/" className="underline">branding</Link></li>
                <li><Link href="https://hackclub.com/philanthropy/" className="underline">donate</Link></li>
                <li><Link href="https://hackclub.com/privacy-and-terms" className="underline">privacy and terms</Link></li>
            </ul>
        </div>
        </div>

        <p
        className="mt-10 text-black"
        style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 1.3vw, 1.15rem)",
        }}
        >
            Made by Hack Oasis orgs^^
        </p>
        <p
         className="mt-2 text-black"
         style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 1.3vw, 1.15rem)",
         }}
         >
            Organizers: Aptar, Ayisha, Newton, Mewton, Akshaya, NJ, Athrav, Arman
         </p>
    </Reveal>
 </section>
    </main>
    );
}