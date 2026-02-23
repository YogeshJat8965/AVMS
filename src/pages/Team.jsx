import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaCheckCircle, FaPhone, FaIdCard, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { teamMembers, leadPartner } from '../data/teamData';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Updated team data with full details from client
  const partnersData = [
    {
      id: 1,
      name: "CA Anup Shrivastava",
      title: "Founding Partner",
      icai: "075270",
      qualifications: "B.Sc., FCA, DISA (ICA), CISA (USA), FAFD, CCAB, AICA Level-1, Social Auditor",
      experience: "30+ Years",
      contact: "+91-9827210226",
      image: leadPartner.image,
      certBadges: ["CISA", "FAFD", "DISA", "CCAB"],
      description: "CA Anup Shrivastava founded AVMS & Associates in 1993 and has spent the three decades since building one of the most credential-rich audit practices in Central India. His qualifications span every major dimension of modern audit work - from financial statement assurance to forensic investigation to technology system evaluation.",
      expertise: [
        "Holds the Certified Information Systems Auditor (CISA) certification from ISACA, USA - a globally recognized credential for IT systems, controls, and processes evaluation",
        "FAFD-certified (Forensic Accounting and Fraud Detection) with deep experience in investigating financial fraud and tracing misappropriated funds",
        "Led statutory bank audit assignments for scheduled commercial banks over three decades",
        "Conducted forensic investigations commissioned by banking institutions and government bodies",
        "Certified Social Auditor qualified to conduct Social Audits of government welfare schemes under MGNREGA framework",
        "DISA qualification from ICAI and AICA Level-1 certification in Artificial Intelligence in Accounting"
      ]
    },
    {
      id: 2,
      name: "CA Sudeep Moitra",
      title: "Senior Partner",
      icai: "400340",
      qualifications: "B.Com, FCA, DISA (ICA), CCAB",
      experience: "21+ Years",
      contact: "+91-9827016895",
      image: teamMembers[1]?.image,
      certBadges: ["FCA", "DISA", "CCAB"],
      description: "CA Sudeep Moitra is a Fellow of ICAI with over two decades of focused experience in statutory audit, system audit, and bank audit assignments. He is DISA-qualified under ICAI - a professional certification specifically designed for Chartered Accountants who work with information systems and technology-driven financial environments.",
      expertise: [
        "Primary domain in banking with statutory and concurrent audit assignments for public sector banks",
        "Expert in examining lending decisions, KYC compliance, bank-wide MIS systems, and RBI compliance frameworks",
        "Deep understanding of Reserve Bank of India's Master Directions on Statutory Central Auditors and Branch Auditors",
        "Specialized in Long-Form Audit Report (LFAR) for credit, investment, and treasury operations",
        "Focus on internal controls to prevent errors, fraud, and regulatory lapses"
      ]
    },
    {
      id: 3,
      name: "CA Archit Saxena",
      title: "Partner, Internal Audit & Project Evaluation",
      icai: "471369",
      qualifications: "B.Com, ACA, AICA Level-1",
      experience: "3+ Years",
      contact: "+91-9806414224",
      image: teamMembers.find(m => m.name === "CA Archit Saxena")?.image,
      certBadges: ["ACA", "AICA"],
      description: "CA Archit Saxena focuses on internal audits, statutory audits, and project evaluations - assignments that require both technical audit discipline and a genuine understanding of how real organizations work. He brings a risk-based approach to every engagement: before designing the audit scope, he spends time understanding the client's specific risk landscape. That way, audit work is concentrated where the real exposures are, rather than spread thinly across everything.",
      expertise: [
        "His experience covers both government assignments and private sector work. Government audit assignments operate under a distinct framework - General Financial Rules (GFR), CAG audit standards, public procurement guidelines (CVC and CPPP requirements), and scheme-specific monitoring frameworks",
        "Private sector assignments focus more on commercial risk, profitability drivers, internal controls over financial reporting, and operational efficiency",
        "CA Archit's strength in deviation analysis - finding where actual outcomes differ from plans, targets, or budgets - makes his audit reports genuinely useful for management, not just for compliance",
        "Specializes in internal audit (government and private sector), statutory audit, and project evaluation with risk-based framework",
        "Expert in public procurement guidelines compliance, scheme-specific monitoring frameworks, and management reporting",
        "The best internal audit report is one that management reads, discusses, and acts on. That is the standard he aims for"
      ]
    },
    {
      id: 4,
      name: "CA Sakshi Agrawal",
      title: "Partner, Corporate Law, GST & Assurance",
      icai: "427741",
      qualifications: "B.Com, FCA, CCAB",
      experience: "11+ Years",
      contact: "+91-8770044885",
      image: teamMembers.find(m => m.name === "CA Sakshi Agrawal")?.image,
      certBadges: ["FCA", "CCAB"],
      description: "CA Sakshi Agrawal is a Fellow of ICAI with over eleven years of experience spread across corporate law, GST advisory, audit assurance, and financial reporting. She leads the firm's corporate and regulatory compliance practice.",
      expertise: [
        "Complete lifecycle of company compliance: incorporation, MCA21 filings, board documentation, director procedures",
        "Expert in Companies Act, 2013 compliance including Form AOC-4 and Form MGT-7",
        "Full GST compliance cycle under CGST Act, 2017: registration, monthly returns (GSTR-1, GSTR-3B), annual returns",
        "Handles GSTR-9, GSTR-9C reconciliation, ITC reconciliation against GSTR-2B, and e-invoicing compliance",
        "Represents clients in GST appeals before GST Appellate Authority and responds to show cause notices"
      ]
    },
    {
      id: 5,
      name: "CA Anuj Jain",
      title: "Partner, Income Tax, GST Audit & IT Systems",
      icai: "457485",
      qualifications: "B.Com, ACA, DISA (ICA), AICA Level-1",
      experience: "4+ Years",
      contact: "+91-6266395486",
      image: teamMembers.find(m => m.name === "CA Anuj Jain")?.image,
      certBadges: ["ACA", "DISA", "AICA"],
      description: "CA Anuj Jain combines income tax expertise with a technology-oriented approach to audit - a combination that is increasingly valuable as tax authorities deploy data analytics to identify discrepancies in returns.",
      expertise: [
        "Income tax advisory for individuals, HUFs, partnership firms, LLPs, and companies under Income Tax Act, 1961",
        "ITR preparation and filing, advance tax scheduling, TDS compliance (Forms 24Q, 26Q, 27Q, 27EQ)",
        "Capital gains tax planning and tax audit under Section 44AB",
        "Represents clients before ITO, ACIT, DCIT, and CIT(A) in assessment and scrutiny proceedings",
        "Uses data analysis to evaluate large transaction datasets with DISA and AICA Level-1 certifications"
      ]
    },
    {
      id: 6,
      name: "CA Vinamra Shrivastava",
      title: "Partner, Management Audit & Risk",
      icai: "457411",
      qualifications: "B.Com, ACA, AICA Level-1",
      experience: "4+ Years",
      contact: "+91-7987914958",
      image: teamMembers.find(m => m.name === "CA Vinamra Shrivastava")?.image,
      certBadges: ["ACA", "AICA"],
      description: "CA Vinamra Shrivastava leads the firm's management audit and enterprise risk practice. His focus is on the operational reality of businesses - how processes are actually designed and executed, whether controls exist in practice.",
      expertise: [
        "Specializes in stock audits for bank lending against inventory",
        "Independent verification of pledged stock existence, valuation, and condition",
        "Stock audits under RBI guidelines for manufacturing, trading, and agribusiness clients",
        "Management audit examining operational processes and control effectiveness",
        "Enterprise risk assessment and control gap analysis"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              The People Behind AVMS & Associates
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              A CA firm is only as good as the professionals who run it. At AVMS & Associates, our six partners collectively bring over 80 years of combined experience across audit, taxation, forensic investigation, corporate compliance, and IT system analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Detailed Profiles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {partnersData.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
              >
                <div className={`grid grid-cols-1 ${index === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-8 lg:gap-12`}>
                  {/* Image */}
                  <div className={`${index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl sticky top-24"
                    >
                      {partner.image && (
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-[500px] object-cover"
                        />
                      )}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg">
                          {partner.title}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Details */}
                  <div className={`${index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {partner.name}
                    </h2>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <FaIdCard className="text-primary-600" />
                          <span className="text-sm font-semibold">ICAI Membership</span>
                        </div>
                        <p className="text-gray-900 font-bold">{partner.icai}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <FaBriefcase className="text-primary-600" />
                          <span className="text-sm font-semibold">Experience</span>
                        </div>
                        <p className="text-gray-900 font-bold">{partner.experience}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <FaPhone className="text-primary-600" />
                          <span className="text-sm font-semibold">Contact</span>
                        </div>
                        <a href={`tel:${partner.contact}`} className="text-primary-700 font-bold hover:text-primary-800">
                          {partner.contact}
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <FaGraduationCap className="text-primary-600" />
                          <span className="text-sm font-semibold">Qualifications</span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed">{partner.qualifications}</p>
                      </div>
                    </div>

                    {/* Certification Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {partner.certBadges.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="prose prose-lg max-w-none mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-accent-600">⚡</span>
                        Key Expertise
                      </h3>
                      <div className="space-y-3">
                        {partner.expertise.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 bg-accent-50 p-4 rounded-lg border border-accent-100"
                          >
                            <FaCheckCircle className="text-accent-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-800 text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                {index < partnersData.length - 1 && (
                  <div className="mt-20 border-t-2 border-gray-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
