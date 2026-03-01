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
    serviceType: "Portfolio Management",
    services: [
      {
        id: 1,
        servicename: "Portfolio Allocation",
        image: "/services/portfolio-management/portfolio-allocation.jpg",
        tags: ["Micro-market mapping", "Risk-balanced mix", "Liquidity planning"],
        description:
          "We curate and rebalance real estate portfolios aligned with your wealth objectives, liquidity preferences, and risk profile. Our decisions are driven by micro-market strength and forward demand cycles to keep capital positioned where it performs."
      },
      {
        id: 2,
        servicename: "Performance Reviews",
        image: "/services/portfolio-management/performance-reviews.jpg",
        tags: ["Yield tracking", "Benchmark insights", "Action-ready reports"],
        description:
          "We deliver structured portfolio reviews with yield tracking, appreciation analysis, and benchmark comparisons, so you can make clear hold, rotate, or exit decisions with confidence."
      },
      {
        id: 3,
        servicename: "Exit Planning",
        image: "/services/portfolio-management/exit-planning.jpg",
        tags: ["Timing strategy", "Value unlock", "Capital rotation"],
        description:
          "Markets shift. Portfolios must adapt. We identify underperforming holdings, recommend capital rotation, and structure strategic exits to strengthen long-term portfolio resilience and returns."
      }
    ]
  },

  {
    serviceType: "HNI and NRI Support",
    services: [
      {
        id: 4,
        servicename: "Documentation Compliance",
        image: "/services/hni-and-nri-support/documentation-compliance.jpg",
        tags: ["Clear paperwork", "Compliance checks", "Risk reduction"],
        description:
          "We manage documentation workflows, regulatory coordination, tax alignment, and due diligence, reducing risk and bringing clarity at every stage."
      },
      {
        id: 5,
        servicename: "Remote Ownership",
        image: "/services/hni-and-nri-support/remote-ownership.jpg",
        tags: ["On-ground coordination", "Inspection oversight", "Handover support"],
        description:
          "We act as your on-ground representative for inspections, handovers, developer coordination, and documentation follow-ups, ensuring control without being physically present."
      },
      {
        id: 6,
        servicename: "Financial Structuring",
        image: "/services/hni-and-nri-support/financial-structuring.jpg",
        tags: ["Finance alignment", "Tax-aware planning", "Wealth integration"],
        description:
          "We support financing alignment and capital structuring so every real estate decision fits your broader wealth plan and stays flexible over time."
      }
    ]
  },

  {
    serviceType: "Investment Management",
    services: [
      {
        id: 7,
        servicename: "Deal Sourcing",
        image: "/services/investment-management/deal-sourcing.jpg",
        tags: ["Verified opportunities", "Corridor intelligence", "Entry positioning"],
        description:
          "We identify high-potential opportunities backed by infrastructure triggers, demand-supply patterns, and location fundamentals, with disciplined entry positioning."
      },
      {
        id: 8,
        servicename: "Risk Due Diligence",
        image: "/services/investment-management/risk-due-diligence.jpg",
        tags: ["Legal verification", "Developer assessment", "Pricing validation"],
        description:
          "We evaluate legal standing, developer credibility, pricing benchmarks, and financial feasibility, eliminating blind spots before capital is committed."
      },
      {
        id: 9,
        servicename: "Yield Growth",
        image: "/services/investment-management/yield-growth.jpg",
        tags: ["Lease-led returns", "Hold period advice", "Exit optimization"],
        description:
          "Beyond acquisition, we advise on leasing alignment, holding periods, and exits to improve yield consistency and long-term capital growth."
      }
    ]
  },

  {
    serviceType: "Leasing Management",
    services: [
      {
        id: 10,
        servicename: "Tenant Placement",
        image: "/services/leasing-management/tenant-placement.jpg",
        tags: ["Quality tenants", "Strong screening", "Vacancy control"],
        description:
          "We source and screen quality tenants with a focus on stability, credibility, and long-term occupancy."
      },
      {
        id: 11,
        servicename: "Lease Negotiation",
        image: "/services/leasing-management/lease-negotiation.jpg",
        tags: ["Owner-first terms", "Clear clauses", "Dispute prevention"],
        description:
          "We structure and negotiate lease terms that protect owner interests, reduce disputes, and maintain clarity for both sides."
      },
      {
        id: 12,
        servicename: "Renewal Management",
        image: "/services/leasing-management/renewal-management.jpg",
        tags: ["Renewal planning", "Escalation management", "Tenant continuity"],
        description:
          "We manage renewals, escalations, and tenant coordination to reduce vacancy cycles and protect consistent cashflows."
      }
    ]
  },

  {
    serviceType: "Transactions Management",
    services: [
      {
        id: 13,
        servicename: "Acquisition Advisory",
        image: "/services/transactions-management/acquisition-advisory.jpg",
        tags: ["Asset shortlisting", "Negotiation edge", "Disciplined entry"],
        description:
          "From asset selection to negotiation strategy, we guide acquisitions with risk-managed pricing and strong entry positioning."
      },
      {
        id: 14,
        servicename: "Closing Coordination",
        image: "/services/transactions-management/closing-coordination.jpg",
        tags: ["Document control", "Timeline discipline", "Registration support"],
        description:
          "We coordinate legal review, compliance checks, financial flow, and registration, delivering a time-bound, seamless closing."
      },
      {
        id: 15,
        servicename: "Divestment Strategy",
        // image: "/services/transactions-management/divestment-strategy.jpg",
        image: "/services/portfolio-management/exit-planning.jpg",
        tags: ["Buyer targeting", "Pricing strategy", "Smooth exits"],
        description:
          "We structure divestments to maximize value realization by aligning timing, market appetite, and pricing strategy."
      }
    ]
  }
];