import React from 'react';

const HowWeWorkHomeSection = () => {
  const dummyText = [
    {
      id: 1,
      name: 'Explore Products',
      desc: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices',
    },
    {
      id: 2,
      name: 'Rapid Responce',
      desc: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices',
    },
    {
      id: 3,
      name: 'Explore Products',
      desc: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices',
    },
  ];

  return (
    <>
      <div className="w-full gap-10 block lg:flex justify-center items-center p-6 lg:mb-16 lg:px-20">
        <div className="w-full">
          <div>
            <p className="text-primary font-medium py-3">WORK</p>
            <h1 className="text-primary text-5xl font-bold py-3">
              How <span className="text-primary2">we Works</span>
            </h1>
            <p className="text-text-gray text-[16px]">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Delta has 100+ integrations with tools you
              already use and love.
            </p>
          </div>
          <div className="py-10">
            <img src="/assets/icons/svg/howWeWork.svg" alt="How We Work" />
          </div>
        </div>
        <div className="w-full">
          {dummyText &&
            dummyText.map((text, index) => (
              <div key={index} className="p-2 my-8 text-primary">
                <div className="flex gap-6 items-center my-3 text-2xl">
                  <p className="border-2 border-primary rounded-full w-12 h-12 p-2 text-center">
                    {text?.id}
                  </p>
                  <p className="text-primary font-semibold">{text?.name}</p>
                </div>
                <p className="text-text-gray text-[20px]">{text?.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HowWeWorkHomeSection;
