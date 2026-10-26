import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12BlogPosts';
import { october12ResearchPosts } from './october12ResearchPosts';
import { october13BlogPosts } from './october13BlogPosts';
import { october13ResearchPosts } from './october13ResearchPosts';
import { october22BlogBatch, october22ResearchBatch } from './october22Batch';

const existingBlogPosts: BlogPost[] = [
  {
    "slug": "closing-manager-vs-closing-va",
    "title": "Closing manager vs closing VA",
    "description": "A practical guide to closing manager vs closing va for title teams, real estate operations leaders, and transaction coordinators.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Closing manager vs closing VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For title teams, real estate operations leaders, and transaction coordinators, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What closing checklist support can handle",
        "paragraphs": [
          "Maintain review-ready requirement lists for each transaction. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/closing-checklist-support",
    "internalSibling": "/blog/closing-document-index",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/close/"
    }
  },
  {
    "slug": "closing-document-index",
    "title": "Build a closing document index",
    "description": "A practical guide to build a closing document index for title teams, real estate operations leaders, and transaction coordinators.",
    "category": "Document systems",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a closing document index starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For title teams, real estate operations leaders, and transaction coordinators, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What document coordination can handle",
        "paragraphs": [
          "Organize approved closing records and stakeholder requests. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/document-coordination",
    "internalSibling": "/blog/real-estate-milestone-map",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/close/"
    }
  },
  {
    "slug": "real-estate-milestone-map",
    "title": "Create a real estate milestone map",
    "description": "A practical guide to create a real estate milestone map for title teams, real estate operations leaders, and transaction coordinators.",
    "category": "Closing controls",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Create a real estate milestone map starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For title teams, real estate operations leaders, and transaction coordinators, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What stakeholder update support can handle",
        "paragraphs": [
          "Prepare approved communications around milestones and exceptions. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/stakeholder-updates",
    "internalSibling": "/blog/closing-status-update-rhythm",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/close/"
    }
  },
  {
    "slug": "closing-status-update-rhythm",
    "title": "A closing status update rhythm",
    "description": "A practical guide to a closing status update rhythm for title teams, real estate operations leaders, and transaction coordinators.",
    "category": "Stakeholder communication",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "A closing status update rhythm starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For title teams, real estate operations leaders, and transaction coordinators, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What date and milestone tracking can handle",
        "paragraphs": [
          "Keep critical dates visible across the closing workflow. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/date-milestone-tracking",
    "internalSibling": "/blog/post-closing-record-check",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/close/"
    }
  },
  {
    "slug": "post-closing-record-check",
    "title": "Design a post-closing record check",
    "description": "A practical guide to design a post-closing record check for title teams, real estate operations leaders, and transaction coordinators.",
    "category": "Document systems",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Design a post-closing record check starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For title teams, real estate operations leaders, and transaction coordinators, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What closing file preparation can handle",
        "paragraphs": [
          "Assemble organized files for accountable review. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/closing-file-preparation",
    "internalSibling": "/blog/closing-manager-vs-closing-va",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/close/"
    }
  }
];
const existingResearchPosts: ResearchPost[] = [
  {
    "slug": "closing-checklist-support-workflow-boundary-review-1",
    "title": "Closing checklist support: workflow boundary review",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing checklist support workflows.",
    "cluster": "Closing controls",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "document-coordination-source-quality-audit-2",
    "title": "Document coordination: source quality audit",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve document coordination workflows.",
    "cluster": "Document systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "stakeholder-updates-exception-pattern-study-3",
    "title": "Stakeholder update support: exception pattern study",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve stakeholder update support workflows.",
    "cluster": "Stakeholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "date-milestone-tracking-handoff-reliability-brief-4",
    "title": "Date and milestone tracking: handoff reliability brief",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve date and milestone tracking workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-file-preparation-review-consistency-report-5",
    "title": "Closing file preparation: review consistency report",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing file preparation workflows.",
    "cluster": "Closing controls",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "post-closing-records-workflow-boundary-review-6",
    "title": "Post-closing records support: workflow boundary review",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve post-closing records support workflows.",
    "cluster": "Document systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-checklist-support-source-quality-audit-7",
    "title": "Closing checklist support: source quality audit",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing checklist support workflows.",
    "cluster": "Stakeholder communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "document-coordination-exception-pattern-study-8",
    "title": "Document coordination: exception pattern study",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve document coordination workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "stakeholder-updates-handoff-reliability-brief-9",
    "title": "Stakeholder update support: handoff reliability brief",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve stakeholder update support workflows.",
    "cluster": "Closing controls",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "date-milestone-tracking-review-consistency-report-10",
    "title": "Date and milestone tracking: review consistency report",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve date and milestone tracking workflows.",
    "cluster": "Document systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-file-preparation-workflow-boundary-review-11",
    "title": "Closing file preparation: workflow boundary review",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing file preparation workflows.",
    "cluster": "Stakeholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "post-closing-records-source-quality-audit-12",
    "title": "Post-closing records support: source quality audit",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve post-closing records support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-checklist-support-exception-pattern-study-13",
    "title": "Closing checklist support: exception pattern study",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing checklist support workflows.",
    "cluster": "Closing controls",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "document-coordination-handoff-reliability-brief-14",
    "title": "Document coordination: handoff reliability brief",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve document coordination workflows.",
    "cluster": "Document systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "stakeholder-updates-review-consistency-report-15",
    "title": "Stakeholder update support: review consistency report",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve stakeholder update support workflows.",
    "cluster": "Stakeholder communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "date-milestone-tracking-workflow-boundary-review-16",
    "title": "Date and milestone tracking: workflow boundary review",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve date and milestone tracking workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-file-preparation-source-quality-audit-17",
    "title": "Closing file preparation: source quality audit",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing file preparation workflows.",
    "cluster": "Closing controls",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "post-closing-records-exception-pattern-study-18",
    "title": "Post-closing records support: exception pattern study",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve post-closing records support workflows.",
    "cluster": "Document systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-checklist-support-handoff-reliability-brief-19",
    "title": "Closing checklist support: handoff reliability brief",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve closing checklist support workflows.",
    "cluster": "Stakeholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "document-coordination-review-consistency-report-20",
    "title": "Document coordination: review consistency report",
    "summary": "A source-led brief on how title teams, real estate operations leaders, and transaction coordinators can define, inspect, and improve document coordination workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/close/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [...october22BlogBatch, ...october13BlogPosts,...october12BlogPosts,...existingBlogPosts].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = [...october22ResearchBatch, ...october13ResearchPosts,...october12ResearchPosts,...existingResearchPosts].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
