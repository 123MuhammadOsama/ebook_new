'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What types of ebooks do you write?',
    answer:
      'We write ebooks across a wide range of genres, including fiction (romance, thrillers, fantasy, etc.), non-fiction (business, self-help, education, etc.), and specialized subjects like health, technology, and personal development. Whether you need an engaging story, informative guide, or expert insight, our team is well-versed in tackling the delicacies and specifications. ',
  },
  {
    question: 'How long does the ebook writing process take? ',
    answer:
      'The timeline for writing an ebook depends on factors such as the complexity of the topic, length, and your specific requirements. Generally, the process takes between 4 to 8 weeks, which includes writing, editing, proofreading, and formatting. We work with you to ensure the timeline aligns with your goals and deliverables.',
  },
  {
    question: 'What are the credentials of your ghost ebook writers?',
    answer:
      'Our ebook ghost writers are highly qualified professionals with a range of backgrounds, including published authors, experts in various industries, and former faculty members of top universities. They have extensive experience in writing ebooks across different genres and are dedicated to producing high-quality, engaging content according to your vision and requirements.',
  },
  {
    question: 'Do you claim any ownership over the ebooks you write?',
    answer:
      'No, we do not claim any ownership or rights to the ebooks we write. Once the project is completed and paid for, full ownership rights belong to you, the author. We respect your intellectual property, and all content is created specifically for you under our ghostwriting services. Your ebook is exclusively yours.',
  },
  {
    question: 'What is the payment process? ',
    answer:
      'Our payment process is simple and transparent. We typically require an initial deposit to begin work on your ebook, with the remaining balance due upon completion. Payments can be made via bank transfer or Papal. We provide a customized quote based on the scope of your project before any work begins.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatQuestion = (question: string) => {
    return question.split(/(\d+)/).map((part, i) =>
      /\d+/.test(part) ? (
        <span key={i} className="text-red-500">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="mx-4 lg:mx-10 space-y-6 lg:space-y-10 mt-20 2xl:mx-36">
      <h2 className="font-bold text-[32px] lg:text-[36px]">
        Let’s Clear Things Up – <span className="text-red-500">FAQ Time!</span>
      </h2>
      <p className="text-[18px] lg:text-[16px] w-[300px] sm:w-[500px] lg:w-[900px]">
        Everything you need to know about ebook creation and publishing, in one
        spot. Find the most common queries answered to initiate your ebook
        project with us!
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Image Section - Hidden on small screens */}
        <div className="hidden lg:block">
          <Image
            src="/faq.png"
            alt="FAQs"
            height={500}
            width={500}
            className="bottom-0 h-auto w-auto"
          />
        </div>

        {/* FAQ List Section */}
        <div className="space-y-6 lg:space-y-10 p-4 w-full lg:w-[400px] xl:w-[700px] 2xl:w-[1500px] pt-16">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b-2 border-black pb-4">
              <div
                className="flex items-center justify-between cursor-pointer text-[22px] lg:text-[24px]"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium`}>
                  {formatQuestion(item.question)}
                </span>
                {openIndex === index ? (
                  <FaArrowDown className="text-black" />
                ) : (
                  <FaArrowUp className="text-black" />
                )}
              </div>
              <div
                className={`transition-all duration-200 overflow-hidden ${
                  openIndex === index ? 'max-h-[1000px] mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-black text-[14px] lg:text-[16px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
