// types/services.ts

export interface Service {
  id: number;
  servicename: string;
  image: string;
  tags: string[];
  description: string;
}

export interface ServiceTypeGroup {
  serviceType: string;
  services: Service[];
}

export const servicesData: ServiceTypeGroup[] = [
  {
    serviceType: "Transactions",
    services: [
      {
        id: 1,
        servicename: "Luxury Transaction Advisory",
        image: "/images/service1.jpg",
        tags: ["Gurgaon", "South Delhi", "#100Cr+"],
        description:
          "Buy-side and sell-side execution for condos, villas, and farmhouses."
      },
      {
        id: 2,
        servicename: "Primary Sales Execution",
        image: "/images/service2.jpg",
        tags: ["Developer Ties", "Launch Access", "Premium Projects"],
        description:
          "Direct developer coordination and early access to new launches."
      },
      {
        id: 3,
        servicename: "High-Value Asset Deals",
        image: "/images/service3.jpg",
        tags: ["HNIs", "Discreet", "Off-Market"],
        description:
          "Confidential advisory for ultra-luxury and off-market transactions."
      }
    ]
  },
  {
    serviceType: "Leasing",
    services: [
      {
        id: 4,
        servicename: "Residential Leasing",
        image: "/images/service4.jpg",
        tags: ["Tenant Screening", "Corporate Clients", "Fast Closure"],
        description:
          "End-to-end leasing support with verified tenants."
      },
      {
        id: 5,
        servicename: "Commercial Leasing",
        image: "/images/service5.jpg",
        tags: ["Office Spaces", "Retail", "Negotiation"],
        description:
          "Strategic leasing for office and retail properties."
      },
      {
        id: 6,
        servicename: "Lease Management",
        image: "/images/service6.jpg",
        tags: ["Renewals", "Documentation", "Compliance"],
        description:
          "Ongoing lease tracking, renewals, and contract management."
      }
    ]
  },
  {
    serviceType: "Portfolio Management",
    services: [
      {
        id: 7,
        servicename: "Investment Structuring",
        image: "/images/service7.jpg",
        tags: ["Diversification", "Risk Planning", "Yield Focus"],
        description:
          "Portfolio planning and allocation for long-term growth."
      },
      {
        id: 8,
        servicename: "Asset Rebalancing",
        image: "/images/service8.jpg",
        tags: ["Performance Review", "Exit Strategy", "Capital Gain"],
        description:
          "Optimizing portfolio based on market movement."
      },
      {
        id: 9,
        servicename: "NRI Portfolio Advisory",
        image: "/images/service9.jpg",
        tags: ["Remote Handling", "Legal Support", "Full Representation"],
        description:
          "Complete portfolio handling for overseas investors."
      }
    ]
  }
];
