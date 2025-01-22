import React from "react";

function Experience() {
  const experiences = [
    {
      company: "PMI GRANITE",
      role: "Bookkeeper",
      duration: "2023-2024",
      tasks: [
        "Recoding daily transaction",
        "Prepare Financial Statement",
        "Bank Reconciliation",
        "Billing",
        "Prepare Month End Report",
      ],
    },
    {
      company: "TROPICANA WORLDWIDE CORP",
      role: "Accounting Supervisor",
      duration: "2022-2024",
      tasks: [
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
        "Recoding daily transaction",
        "Prepare Financial Statement",
        "Bank Reconciliation",
        "Billing",
        "Prepare Month End Report",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen pt-28 space-y-10">
      <h2>My Experiences</h2>
      <div className="grid grid-cols-2 gap-10">
        {experiences.map((experience, index) => (
          <figure
            key={index}
            className="flex flex-col bg-mybrown/50 rounded-xl shadow-mybrown shadow-md p-10 space-y-5"
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
