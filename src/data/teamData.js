// Team and firm data - exact content from PDF

// Import team images
import anupImage from '../images/about us images/CA ANUP SHRIVASTAVA.jpeg';
import vinayImage from '../images/about us images/CA VINARMA SHRIVASTAVA.jpeg';
import architImage from '../images/about us images/CA ARCHIT SAXENA.jpeg';
import anujImage from '../images/about us images/CA ANUJ JAIN.jpeg';
import sakshiImage from '../images/about us images/CA SAKSHI AGRAWAL.jpeg';

export const firmInfo = {
  name: "AVMS & Associates",
  type: "Chartered Accountants",
  location: "Bhopal, Madhya Pradesh, India",
  yearsOfExperience: "30+",
  industriesServed: "22+",
  description: "AVMS & Associates is a professional chartered accountancy firm based in Bhopal, Madhya Pradesh, with more than thirty years of experience across audit, taxation, compliance, and financial advisory services.",
  approach: "Our approach is straightforward: do the work properly, document it thoroughly, communicate findings clearly, and stand behind what we certify. We do not issue qualified audit reports to please a client, and we do not look the other way when something does not reconcile.",
  specialization: "We are not a generalist practice trying to do everything. We have depth in specific areas — statutory audit for scheduled commercial banks, government and public sector audit, forensic investigations, GST compliance and litigation, income tax advisory, and corporate compliance under the Companies Act, 2013."
};

// Team Members
export const teamMembers = [
  {
    id: 1,
    name: "CA Anup Shrivastava",
    designation: "Lead Partner",
    certifications: ["CISA", "FAFD"],
    certificationsFull: [
      {
        abbr: "CISA",
        full: "Certified Information Systems Auditor",
        description: "Global certification for IT audit and cybersecurity professionals"
      },
      {
        abbr: "FAFD",
        full: "Fellow in Anti-Fraud and Forensics from ICAI",
        description: "Advanced certification in forensic accounting and fraud detection"
      }
    ],
    specializations: [
      "Information Systems Audit",
      "Forensic Audit",
      "Banking Audit"
    ],
    experience: "Leading statutory bank audits, concurrent audits, IS audits for RBI-empaneled assignments",
    expertise: [
      "Fraud detection and investigation",
      "Fund diversion investigations",
      "Forensic accounting for banking clients",
      "Forensic accounting for corporate clients",
      "Information systems audit for banks",
      "Statutory branch audit for scheduled commercial banks"
    ],
    image: anupImage
  },
  {
    id: 2,
    name: "CA Vinayma Shrivastava",
    designation: "Partner",
    image: vinayImage
  },
  {
    id: 3,
    name: "CA Archit Saxena",
    designation: "Partner",
    image: architImage
  },
  {
    id: 4,
    name: "CA Anuj Jain",
    designation: "Partner",
    image: anujImage
  },
  {
    id: 5,
    name: "CA Sakshi Agrawal",
    designation: "Partner",
    image: sakshiImage
  }
];

export const leadPartner = teamMembers[0];

export const empanelments = [
  {
    id: 1,
    name: "RBI Category-I Empanelment",
    authority: "Reserve Bank of India",
    description: "Authorized to conduct statutory branch audits, concurrent audits, and IS audits for scheduled commercial banks",
    scope: [
      "Statutory branch audits for scheduled commercial banks",
      "Concurrent audits",
      "Revenue audits",
      "Information Systems (IS) audits",
      "Stock audits for banking institutions"
    ],
    icon: "FaUniversity",
    badge: "/images/icons/rbi-badge.png"
  },
  {
    id: 2,
    name: "C&AG Registration",
    authority: "Comptroller and Auditor General of India",
    description: "Qualified for government audit assignments, PSU audits, autonomous bodies",
    scope: [
      "Central government department audits",
      "State government department audits",
      "Public Sector Undertaking (PSU) audits",
      "Autonomous body audits",
      "Grant-funded project audits",
      "Compliance with GFR 2017 and CAG audit standards"
    ],
    icon: "FaLandmark",
    badge: "/images/icons/cag-badge.png"
  },
  {
    id: 3,
    name: "ICAI Membership",
    authority: "Institute of Chartered Accountants of India",
    description: "All partners are members in good standing with the Institute of Chartered Accountants of India",
    scope: [
      "Professional practice standards",
      "Code of ethics compliance",
      "Continuing professional education",
      "Peer review compliance"
    ],
    icon: "FaCertificate",
    badge: "/images/icons/icai-badge.png"
  }
];

export const teamData = {
  firmInfo,
  leadPartner,
  empanelments
};

export default teamData;
