import React from "react";

function Experience() {
  const experiences = [
    {
      company: "LEO GLOBAL TALENT",
      role: "Bookkeeper",
      duration: "US Client | 2024 - Present",
      tasks: [
        "Prepare Profit and Loss",
        "Invoicing",
        "Bank Reconciliation",
        "BAS / IAS Preparation / Lodging",
        "Prepare Balance Sheet",
        "Superannuation Preparation / Lodging",
      ],
    },
    {
      company: "PMI GRANITE",
      role: "Bookkeeper",
      duration: "AU Client | 2023-2024",
      tasks: [
        "Recoding daily transaction",
        "Prepare Financial Statement",
        "Bank Reconciliation",
        "Prepare Owner Draws",
        "Billing",
        "Prepare Month End Report",
      ],
    },
    {
      company: "TROPICANA WORLDWIDE CORP",
      role: "Accounting Supervisor",
      duration: "2022-2024",
      tasks: [
        "Bank Reconciliation",
        "Help the team in addressing disputes",
        "Present Monthly Profit and Loss",
        "Prepare and checking revolving fund replenishment",
        "Checking Payroll",
        "Monitor Account Payables, Advances to suppliers, and advance to employees",
      ],
    },
    {
      company: "PHOTOPRO TRADING GEN. MDSE.CO",
      role: "Administrative Assistant",
      duration: "2021-2022",
      tasks: [
        "Sales Book recording",
        "Variance Analysis",
        "Bank Reconciliation",
        "Bank Deposit for Daily Collection",
        "Managing Accounts Receivables and Payables",
        "Monthly and Daily Report for Revenue and Collection",
      ],
    },
    {
      company: "KCC PROPERTY HOLDINGS. INC",
      role: "Accounts Payable",
      duration: "2023-2024",
      tasks: [
        "Variance Analysis",
        "Encoding data",
        "Bank Reconciliation",
        "Preparing Invoices for payment",
        "Checking and Analyzing invoices",
        "Monitor payables to avoid overdue account",
      ],
    },
  ];

  return (
    <section id="experience" className="pt-24 space-y-10">
      <h2>My Experiences</h2>

      <div className="grid grid-cols-2 gap-10 p-10">
        {experiences.map((experience, index) => (
          <figure
            key={index}
            className="flex flex-col bg-mybrown/70 rounded-xl shadow-mybrown shadow-md p-10 space-y-5"
          >
            <header className="space-y-2">
              <h4 className="underline">{experience.company}</h4>
              <p className="font-poppinsBold tracking-wider">
                • {experience.role}{" "}
                <span className="font-poppinsRegular">
                  | {experience.duration}
                </span>
              </p>
            </header>
            <figcaption>
              {experience.tasks.map((task, idx) => (
                <p key={idx}>- {task}</p>
              ))}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Experience;
