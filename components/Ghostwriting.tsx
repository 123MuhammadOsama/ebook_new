import Image from 'next/image';
import React from 'react';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  src: string; // URL to the image
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'The Clarity Compass',
    subtitle: 'James Radcliffe',
    src: '/book1.png',
  },
  {
    id: 2,
    title: 'The Clarity Compass',
    subtitle: 'James Radcliffe',
    src: '/book2.png',
  },
  {
    id: 3,
    title: 'The sound of silence',
    subtitle: 'Emmet Greyson',
    src: '/book3.png',
  },
  {
    id: 4,
    title: 'The Paradox of love',
    subtitle: 'Max Winterfield',
    src: '/book4.png',
  },
  {
    id: 5,
    title: "The Alchemist's Last Secret",
    subtitle: 'Tobias Blackwood',
    src: '/book5.png',
  },
  {
    id: 6,
    title: 'The lonly art of surviving',
    subtitle: 'Beck Greyson',
    src: '/book6.png',
  },
  {
    id: 7,
    title: 'The last beat of Avalon',
    subtitle: 'Collumn Throne',
    src: '/book7.png',
  },
  {
    id: 8,
    title: 'Notes to the Universe',
    subtitle: 'IVY Sinclair',
    src: '/book8.png',
  },
  {
    id: 9,
    title: 'The girl who spoke in color',
    subtitle: 'Alina Solis',
    src: '/book9.png',
  },
  {
    id: 10,
    title: 'Sunflowers in winter',
    subtitle: 'Arden Lake',
    src: '/book10.png',
  },
  {
    id: 11,
    title: 'Heros of the forgatton kingdom',
    subtitle: 'Isadora Faulkner',
    src: '/book11.png',
  },
  {
    id: 12,
    title: 'The ALgorithm of Love',
    subtitle: 'Zayne Voss',
    src: '/book12.png',
  },
  {
    id: 13,
    title: 'The Ninth Chronical of Seraphim Lane',
    subtitle: 'Benedict Gray',
    src: '/book13.png',
  },
  {
    id: 14,
    title: 'The Midnight Mapmaker',
    subtitle: 'Elara Moonstane',
    src: '/book14.png',
  },
  {
    id: 15,
    title: 'Recipe for Disaster',
    subtitle: 'Maeve St. Clair',
    src: '/book15.png',
  },
  {
    id: 16,
    title: 'Six Lies Before Breakfast',
    subtitle: 'Leo Finch',
    src: '/book16.png',
  },
  {
    id: 17,
    title: 'Thread of Fate and Fire',
    subtitle: 'Soraya Lennox',
    src: '/book17.png',
  },
  {
    id: 18,
    title: 'Confessions of an Accidental Psychic',
    subtitle: 'Oliver Blackwell',
    src: '/book18.png',
  },
  {
    id: 19,
    title: 'Echos in Void',
    subtitle: 'Draven Valles',
    src: '/book19.png',
  },
];

const Ghostwriting = () => {
  return (
    <div className="mx-4 sm:mx-8 2xl:mx-32 pt-20 flex gap-2 xl:gap-10">
      {/* left */}
      <div className="w-[1000px] lg:w-[1200px] space-y-8">
        <h2 className="text-[34px] lg:text-[36px] font-bold">
          USA’s Top <span className="text-red-500">Ebook Writing Agency</span>
          Creative and Expert-Driven
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          Having been long into the ebook writing business and knowing this
          domain inside out, we pride ourselves on being the go-to team for all
          things ebook writing. The founder of EbookWritingStudio always
          believed that anyone with a story to tell should be able to share it
          with the world, regardless of their background. This belief drives us
          to provide accessible, affordable, and high-quality ebook writing
          services USA wise, helping authors, entrepreneurs, and businesses
          create ebooks that truly resonate with readers.
        </p>
        <p className="text-[14px] lg:text-[16px]">
          We’re here to make the process easy, creative, and fun. From the first
          spark of an idea to the final, polished manuscript, we work closely
          with you to ensure everything is aligned perfectly with your
          requirements. Our vision is simple – to help you achieve ebook success
          with a service that’s built on creativity, expertise, and a deep
          passion for storytelling. Let’s create something amazing together!
        </p>

        <h2 className="text-[34px] lg:text-[36px] font-bold">
          How Do <span className="text-red-500"> We Instill Excellence</span> in
          Every Page?
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          At EbookWritingStudio, we believe that excellence in ebook creation is
          more than just a goal—it’s our standard. Each page we craft is infused
          with dedication to quality, precision, and originality. Our approach
          focuses on delivering an excpetional ebook writing service that stands
          out in the crowded digital marketplace. Whether you are a first-time
          author or a seasoned writer, our team of experts is here to ensure
          your work exceeds expectations. Here’s how we achieve this:
        </p>
        <p className="text-[14px] lg:text-[16px]">
          When you hire an ebook writer from EbookWritingStudio, you can be sure
          that your content will be well-organized and properly formatted for
          readability across all devices. Structural precision is at the heart
          of our services. Every chapter flows seamlessly into the next, with
          carefully designed formatting that makes your ebook look polished and
          professional. We&apos;ve the best ebook writers for hire who take the
          time to ensure that headers, subheadings, and paragraphs are
          appropriately spaced and aligned, following the best practices for
          ebooks across platforms like Kindle, Apple Books, and PDF formats.
          This structural expertise ensures your readers can engage with your
          content effortlessly. When you outsource ebook writing to us, we
          ensure that each project is formatted for optimum reading experience,
          meeting the highest standards of the ebook industry.
        </p>

        <h2 className="text-[34px] lg:text-[36px] font-bold">
          Hire an <span className="text-red-500">Our Pricing Respects</span>{' '}
          Every Budget!
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          We believe that everyone deserves access to high-quality ebook
          services, so our pricing is designed to be inclusive. We’re all about
          clear communication and honest pricing. Our services provide full cost
          transparency, making it easy to know what goes into crafting your
          ebook. From planning the story and its writer to final editing, we
          make sure you understand our process and get excellent value for your
          investment.Whether want to hire a pdf ebook writer to help writing an
          ebook or looking to outsource a service, we’re ready to deliver the
          best possible solutions without a heft price tag.
        </p>
        <p className="text-[14px] lg:text-[16px]">
          We prioritize affordability, knowing that online ebook writing support
          should fit into a range of budgets without sacrificing excellence. Our
          prices are designed to make it easy for you to get help writing an
          ebook. whether you’re after a business guide, lifestyle read, or a
          unique narrative, we offer a cheap ebook writing service without
          compromising on quality. With multiple discount options and seasonal
          offers, EbookWritingStudio ensures that you get top-notch services at
          reduced rates. We frequently provide discounts for repeat customers,
          offering quality at a fair price, giving you the flexibility to choose
          the service level that best suits your project and pocket size. Our
          flexible payment options give you peace of mind and convenience. We
          offer staggered payment plans that allow you to pay over time, so you
          can start on your project now with an initial upfront payment. The
          remaining amount is settled before delivery. Whether you’re looking
          for fast, freelance support in Seattle or custom ebook creation
          elsewhere, our payment options are designed to meet your needs with
          ease.
        </p>

        <h2 className="text-[34px] lg:text-[36px] font-bold">
          Instant Support{' '}
          <span className="text-red-500">No Waiting Around!</span>
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          At EbookWritingStudio, we know how important it is to have support
          right when you need it. That&apos;s why we&apos;re here 24/7 to listen
          to and resolve your concerns. Our customer support experts can walk
          you through our services, pricing, timelines, and any other questions
          you have, so you feel confident in every decision you make.
        </p>
        <p className="text-[14px] lg:text-[16px]">
          Whether it’s answering a question about your first draft, offering
          editing help, or providing marketing insights for your launch, our
          team is committed to making your experience with EbookWritingStudio
          smooth and enjoyable. Whether you’re new to ebook writing or a
          seasoned pro, you don’t have to wonder “if there are any ebook writing
          workshops near me”—our team is here, ready to support you directly and
          instantly. We offer free consultations with absolutely no waiting
          time. Reach out to us anytime, and get the assistance without
          unnecessary delays.
        </p>
      </div>
      {/* right */}
      <div className="hidden lg:block h-[2200px] xl:h-[1800px] 2xl:h-[1800px] w-[600px] bg-gray-900 rounded-lg ml-20 relative overflow-hidden">
        <div className="flex flex-col animate-scroll-vertical h-[200%] space-y-[200px] xl:space-y-[300px] 2xl:space-y-[500px]">
          {slides.map((slide) => (
            <div key={slide.id} className="h-64 flex-shrink-0 p-4 text-center">
              <Image
                src={slide.src}
                alt={slide.title}
                width={600}
                height={200}
                className="rounded-lg mx-auto h-auto w-auto"
              />
              <h3 className="text-[24px] font-bold mt-2 text-white">
                {slide.title}
              </h3>
              <p className="text-white text-[16px]">{slide.subtitle}</p>
            </div>
          ))}
          {/* Duplicate the slides for continuous scrolling */}
          {slides.map((slide) => (
            <div
              key={`${slide.id}-copy`}
              className="h-64 flex-shrink-0 p-4 text-center"
            >
              <Image
                src={slide.src}
                alt={slide.title}
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2">{slide.title}</h2>
              <p className="text-gray-500">{slide.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ghostwriting;
