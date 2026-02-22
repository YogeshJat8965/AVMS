// All services data - exact content from PDF
// 10 service categories for AVMS & Associates

export const services = [
  {
    id: 1,
    title: "Income Tax Services",
    slug: "income-tax",
    icon: "FaFileInvoiceDollar",
    shortDescription: "ITR filing, tax planning, scrutiny representation, and complete income tax compliance",
    description: "Income tax compliance in India is not optional, and mistakes are expensive. Whether you are filing an individual return under Section 139(1) of the Income Tax Act, 1961, responding to a scrutiny notice under Section 143(2), or dealing with an addition made by the Assessing Officer under Section 147, you need someone who knows the law, the procedure, and the practical realities of dealing with the Income Tax Department.",
    servicesInclude: [
      "ITR filing for individuals, firms, LLPs, companies (all ITR forms)",
      "Tax planning and advisory — minimizing liability within legal provisions",
      "Representation before Income Tax Officers (ITO), ACIT/DCIT, CIT(Appeals), ITAT",
      "Handling scrutiny assessments, notices under Section 143(2), 148, 142(1)",
      "TDS compliance — return filing, mismatch rectification, lower deduction certificates",
      "Capital gains planning under Sections 54, 54F, 54EC",
      "Income from house property — claiming deductions and handling deemed ownership issues",
      "Business income computation — allowable and disallowable expenses under Section 37",
      "Advance tax and self-assessment tax calculation",
      "Penalty and prosecution defense under Sections 270A and 276C"
    ],
    image: "/images/services/income-tax.jpg",
    category: "Tax"
  },
  {
    id: 2,
    title: "GST Compliance & Advisory",
    slug: "gst-compliance",
    icon: "FaFileInvoice",
    shortDescription: "Complete GST compliance, returns filing, ITC reconciliation, and GST litigation support",
    description: "The Goods and Services Tax regime, introduced in 2017, was supposed to simplify indirect taxation. In practice, it brought compliance complexity that many businesses were not prepared for — monthly returns, input tax credit reconciliation, e-invoicing, reverse charge, rate disputes, place of supply confusion, and notices for mismatches that the taxpayer did not even know existed.",
    servicesInclude: [
      "GST registration (new and migration from old indirect tax regime)",
      "Monthly GSTR-1 and GSTR-3B filing",
      "Quarterly filing for composition scheme taxpayers",
      "Annual return (GSTR-9) and reconciliation statement (GSTR-9C with statutory audit)",
      "Input Tax Credit (ITC) reconciliation and GSTR-2B review",
      "E-invoicing compliance for businesses above the turnover threshold",
      "GST notices — reply drafting for mismatch notices, show cause notices, demand orders",
      "GST refund filing — export refunds, inverted duty structure refunds",
      "GST litigation — representation before Joint Commissioner, Commissioner (Appeals), GST Appellate Tribunal",
      "Industry-specific GST rate classification guidance (particularly for food processing, textiles, real estate, construction)"
    ],
    image: "/images/services/gst-compliance.jpg",
    category: "Tax"
  },
  {
    id: 3,
    title: "Corporate Compliance (Companies Act, 2013)",
    slug: "corporate-compliance",
    icon: "FaBuilding",
    shortDescription: "ROC filings, board meetings, statutory compliance, and Companies Act requirements",
    description: "If your business is registered as a private limited company or a public limited company under the Companies Act, 2013, you have ongoing compliance obligations — annual filings with the Registrar of Companies (ROC), board meetings, maintenance of statutory registers, director KYC updates, and adherence to accounting standards. Miss a filing deadline, fail to hold board meetings, or neglect director disclosure requirements, and the penalties accumulate quickly.",
    servicesInclude: [
      "ROC annual filing — AOC-4 (financials), MGT-7 (annual return)",
      "DIR-3 KYC filing for directors",
      "Board meeting compliance — maintaining statutory gap between meetings",
      "Preparation and filing of board resolutions and minutes",
      "Share capital compliance — allotment, transfer, transmission",
      "Secretarial compliance for private limited companies",
      "Audit under Section 139 of the Companies Act",
      "Related party transaction compliance under Section 188",
      "Charge registration (Section 77) for loan agreements and security creation"
    ],
    image: "/images/services/corporate-compliance.jpg",
    category: "Corporate"
  },
  {
    id: 4,
    title: "Accounting & Book-keeping",
    slug: "accounting-bookkeeping",
    icon: "FaBook",
    shortDescription: "Complete accounting services, Tally implementation, financial statements, and bookkeeping",
    description: "Good accounting is the foundation of tax compliance, audit readiness, and sound business decision-making. If your books are not maintained properly — transactions unrecorded, bank reconciliations pending, expenses unsupported by invoices — your auditor cannot certify your books, your tax return will be inaccurate, and your business will lack the financial data it needs to grow responsibly.",
    servicesInclude: [
      "Day-to-day bookkeeping using Tally ERP or other accounting software",
      "Monthly, quarterly, and annual accounts preparation",
      "Bank reconciliation statements (BRS)",
      "Receivables and payables ledger maintenance",
      "Preparation of trial balance, profit & loss statement, and balance sheet",
      "Adherence to Indian Accounting Standards (AS) or Ind AS as applicable",
      "Migration from manual accounting to Tally or other software platforms",
      "Financial statement preparation for bank loan applications (CMA data format)",
      "Accounting guidance for newly established businesses"
    ],
    image: "/images/services/accounting.jpg",
    category: "Accounting"
  },
  {
    id: 5,
    title: "Audit Services",
    slug: "audit-services",
    icon: "FaClipboardCheck",
    shortDescription: "Statutory, Internal, Concurrent, Bank Branch, Tax, and IS Audits",
    description: "Audit is our core competency. Statutory audit, internal audit, concurrent audit, tax audit, bank branch audit, stock audit, IS audit — these are not interchangeable terms. Each serves a different regulatory or management purpose, is governed by a different set of professional standards, and delivers a different kind of assurance.",
    servicesInclude: [
      "Statutory Audit — Under Section 139 of the Companies Act, 2013",
      "Internal Audit — Mandatory under Section 138 for certain companies",
      "Concurrent Audit — Real-time audit for banks, reviews transactions daily/weekly",
      "Bank Branch Audit — Statutory audit for banks under Banking Regulation Act, 1949",
      "Tax Audit — Under Section 44AB of the Income Tax Act",
      "Information Systems Audit — For banks under RBI guidelines, conducted by CISA-qualified auditors"
    ],
    subServices: [
      {
        name: "Statutory Audit",
        description: "Conducted under Section 139 of the Companies Act, 2013. Required for all registered companies. Auditor appointed by shareholders, reporting to them via audit report.",
        standards: "Auditing Standards (SAs) issued by ICAI",
        deliverable: "Audit report on true and fair view of financial statements"
      },
      {
        name: "Internal Audit",
        description: "Mandatory under Section 138 for companies meeting size thresholds. Voluntary for others as a management tool.",
        focus: "Internal controls, operational efficiency, compliance verification",
        deliverable: "Internal audit report to management and audit committee"
      },
      {
        name: "Concurrent Audit",
        description: "Real-time or near-real-time audit, typically for banks. Reviews transactions daily or weekly.",
        focus: "Detecting irregularities early, compliance with RBI norms",
        standards: "RBI guidelines on concurrent audit"
      },
      {
        name: "Bank Branch Audit",
        description: "Statutory audit for scheduled commercial banks under Section 30 of the Banking Regulation Act, 1949. Requires RBI empanelment (we hold Category-I).",
        focus: "Verification of advances, NPA classification, KYC compliance, internal controls",
        deliverable: "Long Form Audit Report (LFAR) to bank and RBI"
      },
      {
        name: "Tax Audit",
        description: "Under Section 44AB of the Income Tax Act. Required for businesses above specified turnover thresholds.",
        focus: "Compliance with tax provisions, disallowances, deemed income",
        deliverable: "Form 3CD report"
      },
      {
        name: "Information Systems Audit (IS Audit)",
        description: "Required for banks under RBI guidelines. Conducted by CISA-qualified or similarly certified auditors.",
        focus: "IT general controls, application controls, cybersecurity, business continuity",
        deliverable: "IS Audit Report to bank management and RBI"
      }
    ],
    image: "/images/services/audit.jpg",
    category: "Audit"
  },
  {
    id: 6,
    title: "Forensic Audit",
    slug: "forensic-audit",
    icon: "FaSearchDollar",
    shortDescription: "Fraud investigation, fund flow analysis, and financial irregularity detection",
    description: "When financial irregularities are suspected — fund diversion, fraudulent invoicing, undisclosed liabilities, ghost employees on the payroll, round-tripping of funds — a standard statutory audit is not designed to detect them. Forensic audit is.",
    leadBy: "CA Anup Shrivastava (FAFD — Fellow in Anti-Fraud and Forensics from ICAI)",
    servicesInclude: [
      "Investigation of suspected fraud or financial misconduct",
      "Fund flow analysis and tracing diverted amounts",
      "Detection of ghost transactions, fictitious vendors, or dummy entities",
      "Examination of digital records, emails, and transaction logs",
      "Expert opinion and evidence preparation for legal proceedings",
      "Banking fraud investigation for financial institutions",
      "Corporate fraud investigation for shareholders, boards, or regulators",
      "Reporting to police, regulators, or courts as required"
    ],
    image: "/images/services/forensic-audit.jpg",
    category: "Audit"
  },
  {
    id: 7,
    title: "Audit of Government Bodies",
    slug: "government-audit",
    icon: "FaLandmark",
    shortDescription: "C&AG registered for government, PSU, and autonomous body audits",
    description: "Government departments, public sector undertakings (PSUs), autonomous bodies, and grant-funded organizations operate under a different financial and regulatory framework than private businesses. The GFR 2017 (General Financial Rules), the CAG's audit standards, programme-specific grant guidelines, and public accountability requirements shape what a government audit must examine.",
    registration: "C&AG registered",
    servicesInclude: [
      "Audit of central and state government departments",
      "PSU audits",
      "Autonomous body audits",
      "Grant utilization audits (central or state scheme-funded projects)",
      "Compliance with GFR 2017, PFMS guidelines, and fund-specific conditions",
      "Performance audit and value-for-money audit where applicable",
      "Reporting in the format required by the specific government programme or the C&AG"
    ],
    image: "/images/services/government-audit.jpg",
    category: "Audit"
  },
  {
    id: 8,
    title: "Audit for NGOs & Trusts",
    slug: "ngo-trust-audit",
    icon: "FaHandsHelping",
    shortDescription: "Audit and compliance for societies, trusts, Section 8 companies, and FCRA compliance",
    description: "Registered societies, charitable trusts, and Section 8 companies that work in the development sector face audit requirements from multiple sources — the Income Tax Department (for 12A/80G compliance), the Ministry of Home Affairs (for FCRA compliance), donor agencies (requiring financial and compliance audits), and the Companies Act (for Section 8 companies).",
    servicesInclude: [
      "Statutory audit for trusts, societies, and Section 8 companies",
      "12A/12AB registration for income tax exemption",
      "80G registration to allow donors to claim tax deduction",
      "FCRA compliance audit for foreign-funded organizations",
      "Utilization certificate audit for government grants",
      "Donor-specific audit formats (UN agencies, bilateral donors, private foundations)",
      "Annual return filing for trusts and societies under applicable state acts"
    ],
    image: "/images/services/ngo-audit.jpg",
    category: "Audit"
  },
  {
    id: 9,
    title: "Stock Audit",
    slug: "stock-audit",
    icon: "FaWarehouse",
    shortDescription: "Independent stock verification for banks and financial institutions",
    description: "Banks and financial institutions that extend working capital loans against hypothecation of stock and receivables require independent verification that the borrower actually holds the stock they claim to hold, that it is valued correctly, and that it has not been double-financed or encumbered elsewhere. That verification is done through a stock audit.",
    servicesInclude: [
      "Physical verification of hypothecated stocks at the borrower's premises",
      "Matching physical stock with book stocks as per the borrower's accounts",
      "Verification of stock valuation methods and their consistency with the applicable Accounting Standards and the bank's sanction terms",
      "Assessment of stock quality, usability, and age — identifying obsolete or non-moving stock",
      "Review of insurance coverage on hypothecated stocks",
      "Reporting in the format required by the specific lending institution, aligned with RBI guidelines on stock audit reporting"
    ],
    image: "/images/services/stock-audit.jpg",
    category: "Audit"
  },
  {
    id: 10,
    title: "Management Consultancy and Business Advisory",
    slug: "consultancy",
    icon: "FaUserTie",
    shortDescription: "Business structuring, financial planning, due diligence, and strategic advisory",
    description: "Beyond audit and compliance, businesses need guidance. How should a new business be structured for tax efficiency — as a proprietorship, a partnership, an LLP, or a private limited company? What is the right financial model for a bank loan application? How do you improve internal controls without slowing down operations? After thirty years and 22 industries, we understand how businesses work, where they tend to struggle, and what kind of professional guidance actually helps at each stage.",
    servicesInclude: [
      "Business structuring — choosing the right entity type (proprietorship, partnership, LLP, Pvt Ltd) based on tax implications, liability requirements, capital plans, and regulatory context",
      "Pre-audit review and financial cleanup — reviewing books before a statutory or bank audit to identify and resolve discrepancies",
      "Project report preparation — detailed financial projections, CMA (Credit Monitoring Arrangement) data, and project viability reports for bank loan and term loan applications",
      "Financial due diligence — for acquisitions, investments, or business combinations; examining target company accounts for undisclosed liabilities or irregularities",
      "MIS design and review — helping businesses build management information systems that produce reliable, timely financial data for decision-making",
      "Cost audit and cost reduction advisory — for manufacturing businesses; identifying where costs can be reduced without compromising quality or compliance",
      "Succession planning — for family businesses; advising on the legal, tax, and governance aspects of ownership transition"
    ],
    image: "/images/services/consultancy.jpg",
    category: "Advisory"
  }
];

export default services;
