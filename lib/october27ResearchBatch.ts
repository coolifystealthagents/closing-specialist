import type { ResearchPost } from './types';

export const october27ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "wire-callback-exception-audit",
    "title": "Wire Callback Exceptions in Closing Files",
    "summary": "A source-level review of callback records, instruction changes, and the points where wire verification is documented or deferred.",
    "cluster": "Closing Specialist Research",
    "publishedAt": "2026-10-27",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-wire-callback-exception-audit.svg",
    "finding": "The most useful wire control is a record showing which number was dialed, who answered, and what was confirmed before release. Files that contain only an email approval cannot demonstrate independent verification.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This review looks at how settlement files document the verification of wiring instructions, and where the record becomes too thin to reconstruct the decision. The scope is the closing file: the instruction received, the callback attempted, the confirmation recorded, and the release approved. It does not evaluate any individual institution or estimate fraud rates.",
          "The unit of observation is one disbursement event. A file can contain several wires, so each release is treated separately rather than counted once per transaction."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "A complete record contains the original instruction with its envelope details, the source of the phone number used, the call time, the identity of the person reached, the fields confirmed, and the name of the approver. A record missing the number source or the approver is incomplete even if the wire settled without incident.",
          "Public guidance consistently recommends out-of-band verification of changes to payment instructions. The review uses that recommendation as a benchmark for the record, not as evidence that any particular file was fraudulent."
        ]
      },
      {
        "heading": "Observed failure patterns",
        "paragraphs": [
          "Three patterns recur. First, a callback is made but the number comes from the same email that delivered the instructions. Second, the callback reaches a general line and the confirmation is recorded as verified without a named person. Third, a late instruction change is approved by reply to the originating thread.",
          "Each pattern leaves the same gap: no independent party confirmed the account. The file may look complete because a note exists, but the note does not identify a separate source of truth."
        ]
      },
      {
        "heading": "Interpretation and limits",
        "paragraphs": [
          "These observations describe documentation quality, not the prevalence of fraud. A file with a weak record may still involve a legitimate transfer, and a file with a strong record may involve a criminal who controlled both ends of the callback. The control reduces risk; it does not eliminate it.",
          "The sample is also biased toward files that reached a review queue. Closing teams that only examine exceptions will see a different distribution than teams that sample completed wires."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "Make the number source a required field in the wire record, and separate the preparer from the approver. Add a stop condition for any instruction that differs from a prior set, and require a new callback rather than an email clarification.",
          "Review a monthly sample of completed wires for missing number sources and unnamed confirmations. Those two fields predict whether the file can survive a challenge better than the presence of a generic verification checkbox."
        ]
      }
    ],
    "sources": [
      {
        "label": "FBI Internet Crime Complaint Center, business email compromise",
        "url": "https://www.ic3.gov/"
      },
      {
        "label": "American Land Title Association, wire fraud resources",
        "url": "https://www.alta.org/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage closing resources",
        "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
      }
    ]
  },
  {
    "slug": "cd-delivery-timestamp-review",
    "title": "Closing Disclosure Delivery Timestamps",
    "summary": "A review of sent, delivered, and received timestamps and the gaps that appear between them in closing files.",
    "cluster": "Closing Specialist Research",
    "publishedAt": "2026-10-27",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-cd-delivery-timestamp-review.svg",
    "finding": "Files often record when a disclosure was sent but not when the consumer received it. The missing middle timestamp is where timing disputes begin.",
    "sections": [
      {
        "heading": "Research question",
        "paragraphs": [
          "The review asks how closing teams record the delivery of the closing disclosure and whether those records distinguish transmission from receipt. It examines the fields available in the file rather than the substance of the disclosure itself.",
          "Files were grouped by delivery method: electronic portal, email attachment, in-person, and mail. Each method produces a different evidence trail, and comparing them without that distinction obscures the actual control."
        ]
      },
      {
        "heading": "Method",
        "paragraphs": [
          "For each file, the reviewer looked for a sent timestamp, a delivery or access confirmation, a consumer receipt, and the date the team treated as the start of the waiting period. Where a field was absent, it was recorded as absent rather than inferred from the next document.",
          "The review also noted whether a revised disclosure existed and whether the revision included a reason and a new receipt date. Version history was treated as part of the delivery record, not as a separate administrative artifact."
        ]
      },
      {
        "heading": "What the timestamps show",
        "paragraphs": [
          "Electronic portals produced the richest transmission data and the weakest receipt data. A document could be uploaded on Monday and opened on Wednesday, while the file contained only the Monday timestamp. In-person deliveries often had a signed acknowledgement but no time of day.",
          "Mail deliveries were the least consistent. Some files recorded the mailing date and applied an assumed receipt period; others recorded only the date the document was generated, which is not a delivery event at all."
        ]
      },
      {
        "heading": "Limits of the review",
        "paragraphs": [
          "A timestamp does not establish that the borrower understood the document, and an access log does not prove the person who opened it was the borrower. The review therefore describes evidence quality, not compliance outcomes.",
          "The files came from a small number of workflows and were not randomly selected. Differences between teams may reflect their software rather than their diligence."
        ]
      },
      {
        "heading": "Implications for the closing file",
        "paragraphs": [
          "Add a received field that cannot be filled by the same action that sends the document. Require the consumer's acknowledgement or the system's access record, and keep the mailing date with the rule used to derive an assumed receipt date.",
          "Before the signing appointment, compare the latest disclosure version with the receipt evidence. If the received date is missing, the appointment is at risk regardless of how complete the rest of the package looks."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, TILA-RESPA integrated disclosure rule",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
      },
      {
        "label": "Consumer Financial Protection Bureau, closing disclosure",
        "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, settlement process",
        "url": "https://www.hud.gov/topics/buying_a_home"
      }
    ]
  },
  {
    "slug": "title-exception-rework-study",
    "title": "Title Exception Rework and Record Quality",
    "summary": "A study of repeated Schedule B exceptions and what the surrounding file shows about the cause of rework.",
    "cluster": "Closing Specialist Research",
    "publishedAt": "2026-10-27",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-title-exception-rework-study.svg",
    "finding": "Rework clusters around exceptions that were never assigned an owner or a source document. The extra review time is usually a handoff defect rather than a title defect.",
    "sections": [
      {
        "heading": "Scope and definitions",
        "paragraphs": [
          "This study treats rework as a requirement or exception that returned to review after it had been marked resolved. The scope covers title commitments and the documents used to clear or accept their schedules. It excludes policy interpretation and any judgment about insurability.",
          "Each rework event was classified by cause: missing source, conflicting source, wrong property, expired evidence, or unclear ownership. The classification is operational and does not assign fault to an individual."
        ]
      },
      {
        "heading": "Evidence collected",
        "paragraphs": [
          "For each event, the review recorded the commitment version, the requirement or exception text, the document that was supposed to satisfy it, the date it was marked resolved, and the date it returned. Notes and correspondence were used only to identify the cause, not as proof that the item was correct.",
          "Files were compared across versions to see whether a requirement disappeared without a corresponding document or reappeared after an update. Silent disappearance was treated as a record gap."
        ]
      },
      {
        "heading": "Patterns in the sample",
        "paragraphs": [
          "Missing source and unclear ownership were the largest categories. A payoff marked satisfied without a good-through date, or a release marked complete without a recording reference, tended to return during the pre-closing review. Conflicting sources were less frequent but produced longer delays because two documents had to be reconciled.",
          "Expired evidence appeared most often near month-end closings, when a statement issued earlier in the month no longer covered the disbursement date. The rework was predictable from the statement date, but the file had no field for expiration."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The sample reflects files that reached a second review, so it overrepresents problems. A file that cleared on the first pass may still contain weak evidence that no one tested.",
          "The classification also relies on the notes available. Where a cause was ambiguous, it was grouped as unclear ownership, which may understate the role of source quality."
        ]
      },
      {
        "heading": "Practical response",
        "paragraphs": [
          "Add an expiration field to every time-sensitive requirement, and require a recording or receipt reference before an item can be marked complete. Assign an owner at the moment the requirement is created, not when it first fails review.",
          "Review rework by cause each month. If one cause dominates, change the intake template or the evidence rule rather than adding another review layer."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Land Title Association, title insurance basics",
        "url": "https://www.alta.org/"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, home buying",
        "url": "https://www.hud.gov/topics/buying_a_home"
      }
    ]
  },
  {
    "slug": "notary-packet-completeness-study",
    "title": "Signing Packet Completeness at the Table",
    "summary": "A review of returned signing packages for missing initials, dates, notarial certificates, and page-order defects.",
    "cluster": "Closing Specialist Research",
    "publishedAt": "2026-10-27",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-notary-packet-completeness-study.svg",
    "finding": "Most returned-package defects are visible before the signer leaves. The missing control is a page-by-page field check, not a faster scan-back.",
    "sections": [
      {
        "heading": "Question and sample",
        "paragraphs": [
          "The review asked which defects appear in returned notary packages and whether they could have been detected during the appointment. Packages were drawn from purchase, refinance, and seller-only signings, and each was checked against the lender's document list.",
          "A defect was counted once per document even if it contained several missing fields, so the measure reflects affected documents rather than the total number of blank lines."
        ]
      },
      {
        "heading": "Defect categories",
        "paragraphs": [
          "The categories were missing signature, missing initials, missing or incorrect date, defective notarial certificate, missing page, wrong signer capacity, and page-order mismatch. Each returned package was also checked for a scan-back confirmation that matched the page count.",
          "Notarial certificate defects included a missing venue, an incomplete acknowledgement, and a certificate attached to the wrong document. These are not clerical afterthoughts because they can require re-execution."
        ]
      },
      {
        "heading": "What the returns showed",
        "paragraphs": [
          "Missing initials and dates were the most common defects, particularly on documents with several signature blocks. Defective certificates were less common but far more costly because they usually required a new appointment or a corrective acknowledgement.",
          "Packages with a completed field checklist had fewer defects across every category. The checklist mattered more than the notary's experience level, which suggests the issue is attention distribution rather than skill."
        ]
      },
      {
        "heading": "Interpretation and limits",
        "paragraphs": [
          "The review cannot show whether a defect would have caused a funding delay, only that the document was incomplete when returned. It also relies on the package as submitted, so a page lost in shipping may be misclassified as never executed.",
          "The sample size is modest and drawn from a limited set of closing teams. The pattern is consistent with process design, but it should not be treated as a benchmark for any other office."
        ]
      },
      {
        "heading": "Implications",
        "paragraphs": [
          "Build the field checklist from the actual packet order and require the notary to confirm completion before the signer leaves. Add a page-count and certificate check to the scan-back step.",
          "Track defects by document and category. When one form keeps failing, revise the packet instructions or the document itself instead of reminding notaries to be more careful."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Notary Association, notarization standards",
        "url": "https://www.nationalnotary.org/"
      },
      {
        "label": "American Land Title Association, settlement resources",
        "url": "https://www.alta.org/"
      },
      {
        "label": "Consumer Financial Protection Bureau, closing disclosure",
        "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
      }
    ]
  },
  {
    "slug": "post-closing-recording-gap-review",
    "title": "Post-Closing Recording Gaps",
    "summary": "A review of rejected instruments and the delay between submission and recorded evidence in closed files.",
    "cluster": "Closing Specialist Research",
    "publishedAt": "2026-10-27",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-post-closing-recording-gap-review.svg",
    "finding": "Recording delay is usually measured from shipping, which hides the period between rejection and resubmission. Measuring from acceptance changes which files look late.",
    "sections": [
      {
        "heading": "Scope",
        "paragraphs": [
          "This review examines the interval between document submission and confirmed recording for deeds, mortgages, and releases in closed files. It separates submission, rejection, correction, resubmission, and acceptance so the delay can be attributed to a stage.",
          "Files with no recording evidence at all were treated as open rather than excluded, because an absent record is itself the finding."
        ]
      },
      {
        "heading": "Method and evidence",
        "paragraphs": [
          "Each instrument was followed through the recorder's submission reference and the final instrument number. Where a rejection occurred, the reason code and the resubmission date were recorded. The review used the recorder's acceptance as the completion event.",
          "Delivery confirmations were kept separate from acceptance. A courier receipt or electronic submission acknowledgement was not counted as a recorded document."
        ]
      },
      {
        "heading": "Observed gaps",
        "paragraphs": [
          "Most instruments were accepted within the expected window. The long tail came from rejections that were corrected slowly, often because the rejection notice went to an individual mailbox rather than the closing queue. A second cluster involved releases that depended on a third party's submission rather than the closing team's.",
          "Several files showed a resubmission without a recorded reason, which made it impossible to tell whether the original defect was fixed or a new document was sent."
        ]
      },
      {
        "heading": "Limits",
        "paragraphs": [
          "Recorder turnaround varies by jurisdiction and by season, so elapsed time alone is not a quality measure. The review therefore focuses on internal gaps between events rather than total days.",
          "The sample overrepresents files that remained open long enough to be noticed, and it does not include instruments recorded by a party outside the closing team's visibility."
        ]
      },
      {
        "heading": "Implications for tracking",
        "paragraphs": [
          "Use recorded acceptance as the completion event and capture the instrument number in the same field. Route rejection notices to a shared queue with a reason code and an owner, and require the resubmission to reference the original submission.",
          "Review open instruments weekly by stage. A file that has been submitted but not accepted is a different problem from one that was rejected and not corrected, and they need different follow-up."
        ]
      }
    ],
    "sources": [
      {
        "label": "Property Records Industry Association, recording standards",
        "url": "https://pria.us/"
      },
      {
        "label": "American Land Title Association, title insurance basics",
        "url": "https://www.alta.org/"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      }
    ]
  }
];
