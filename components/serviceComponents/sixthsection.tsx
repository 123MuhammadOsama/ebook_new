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
    question: "Do I own the rights to my ebook once it's completed?",
    answer:
      "Yes, you own the full rights to your ebook once it's completed and payment is made. As a leading book publishing company, we respect your intellectual property and ensure that our ebook ghostwriting services are designed to give you complete ownership of the content. Whether you plan to sell, share, or use the ebook as part of a larger project, the rights are entirely yours.",
  },
  {
    question: 'How much does your ebook writing service cost?',
    answer:
      'The cost of our ebook writing service varies depending on the complexity, length, and specific requirements of your project. We offer affordable pricing to cater to different budgets while maintaining high-quality writing standards. For an accurate estimate, we recommend discussing your project with us so we can provide a custom quote based on your needs.',
  },
  {
    question: 'Will my ebook be 100% original?',
    answer:
      'Absolutely! We pride ourselves on delivering 100% original content. Our ebook writers create every project from scratch, ensuring that your ebook is unique and tailored specifically to your vision. We also run plagiarism checks to guarantee that your ebook is free from any copied material and meets the highest originality standards.',
  },
  {
    question: 'How do you help with eBook distribution?',
    answer:
      "We provide comprehensive services to help get you worldwide readership. Whether it’s publishing on Amazon Kindle, Apple Books, or other ebook publishing platforms, we manage the process to ensure your ebook is available across all key channels. Additionally, our team provides expert guidance on marketing strategies, including optimizing your book's listing, setting competitive pricing, and boosting visibility to help your ebook gain traction and sales.",
  },
  {
    question: 'What if I don’t have a specific ebook topic in mind?',
    answer:
      "No worries! Our team of expert writers can help brainstorm and develop a unique ebook topic based on your interests, expertise, or target audience. We’ll work closely with you to create a concept that aligns with your goals. Whether you're unsure of the direction or need guidance, we're here to help shape your vision into an engaging ebook.",
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
            className="bottom-0"
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
