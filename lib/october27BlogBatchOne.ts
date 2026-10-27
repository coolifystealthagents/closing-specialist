import type { BlogPost } from './types';

export const october27BlogBatchOne: readonly BlogPost[] = [
  {
    "slug": "wire-instruction-callback-verification",
    "title": "Wire Instruction Callback Verification",
    "description": "A callback routine that tests wiring instructions against a known number before disbursement.",
    "category": "Wire safety",
    "publishedAt": "2026-10-27",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-wire-instruction-callback-verification.svg",
    "sections": [
      {
        "heading": "Treat the phone number as the control",
        "paragraphs": [
          "Wire fraud succeeds when a familiar email thread is the only thing confirming where money should go. The defense is not a better email banner. It is a callback to a number the settlement team already had on file, made by a person who is not reading the new instructions while dialing.",
          "Write the rule in the closing file before a wire is ever requested: the assistant may compare account details, but only the closing manager or a designated disbursement owner may confirm them. That separation keeps the person who receives a suspicious message from also being the person who clears it."
        ]
      },
      {
        "heading": "Capture the instruction without acting on it",
        "paragraphs": [
          "When wiring instructions arrive, the assistant saves the message, the attachment, and the envelope details into the transaction record. Record the sender address, the time received, the stated bank, the routing number, the account number, and the beneficiary name exactly as written. Do not retype from a screenshot when the original attachment is available.",
          "Flag any change from a prior instruction set. A new bank, a new account holder, a revised routing number, or a sudden urgency note all move the item out of routine processing. The flag should name what changed and who was notified, not simply say review needed."
        ]
      },
      {
        "heading": "Run the callback with a fixed script",
        "paragraphs": [
          "The caller dials the number stored in the title file or the number printed on the lender's own verified documentation, never a number supplied in the suspicious message. The script asks the bank or sender to confirm the beneficiary name, the last four digits of the account, and whether the instruction was issued on the date shown.",
          "Log the call time, the number dialed, the name of the person who answered, and the answers given. If the call goes to voicemail, the verification is incomplete. A voicemail greeting is not a confirmation, and a returned call to an unknown number does not repair the gap."
        ]
      },
      {
        "heading": "Handle a mismatch without improvising",
        "paragraphs": [
          "If the name, account, or date does not match, stop the disbursement and preserve the original message. Notify the closing manager and the lender contact through a separate channel. Do not ask the sender to explain the discrepancy by replying to the same email, because that reply may reach the same compromised mailbox.",
          "A mismatch is not resolved by a second email that looks more official. It is resolved by an independent confirmation from the institution that holds the account, or by holding funds until the parties provide instructions through a verified process."
        ]
      },
      {
        "heading": "Attach the evidence to the file",
        "paragraphs": [
          "The completed callback record belongs beside the disbursement entry, not in a personal folder. Include the instruction copy, the verification log, the identity of the verifier, and the date the funds were released. If the instruction was later corrected, keep both versions and note which one governed the transfer.",
          "A reviewer should be able to answer three questions from the file alone: what was requested, how it was verified, and who approved the release. If any answer requires asking the person who did the work, the record is not finished."
        ]
      },
      {
        "heading": "Review callbacks as a weekly sample",
        "paragraphs": [
          "Pull a small sample of completed wires each week and check that the dialed number came from an approved source, that the log was completed before release, and that any exception has an owner. Look for patterns such as repeated voicemail confirmations or instructions that arrived outside normal channels.",
          "The measure that matters is not how many wires closed. It is how many releases had an independent verification recorded before funds moved, and how quickly a flagged instruction reached a person with authority to stop it."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can the assistant confirm wiring instructions directly with the bank?",
        "a": "The assistant can place the callback and document the answers when the settlement team has approved that step and the number comes from a verified source. Authority to release funds stays with the designated disbursement owner."
      },
      {
        "q": "What if the sender insists the old number is disconnected?",
        "a": "That urgency is a reason to slow down. Confirm through the lender or bank using contact details already in the file, and hold the disbursement until the institution independently confirms the account."
      },
      {
        "q": "How long should callback records be kept?",
        "a": "Follow the brokerage or title agency retention schedule and the lender's requirements. The practical minimum is the life of the transaction plus the period the agency can be asked to defend the disbursement."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "FBI Internet Crime Complaint Center, business email compromise guidance",
      "url": "https://www.ic3.gov/"
    }
  },
  {
    "slug": "title-commitment-schedule-b-review",
    "title": "Reading Schedule B Before the File Moves",
    "description": "A review routine for requirements, exceptions, and endorsements in a title commitment.",
    "category": "Title review",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-title-commitment-schedule-b-review.svg",
    "sections": [
      {
        "heading": "Separate requirements from exceptions",
        "paragraphs": [
          "Schedule B is two different lists wearing one label. The requirements tell the parties what must happen before the policy issues, such as paying off a lien or recording a release. The exceptions describe what the policy will not cover, such as an easement or a boundary matter.",
          "A preparer who treats both as a single checklist will either chase items that need no action or miss a condition that blocks issuance. The first pass sorts every line into requirement, exception, or unclear, and unclear lines go to the title officer rather than into a guess."
        ]
      },
      {
        "heading": "Map each requirement to a source document",
        "paragraphs": [
          "For every requirement, record the instrument or payoff that satisfies it, the party responsible, and the evidence expected. A mortgage payoff needs a good-through date and a per-diem figure. A release needs a recording reference once it exists. An HOA item needs the association's current statement or estoppel.",
          "The map should show which requirements are already satisfied in the file and which are only promised. A promise in an email is not a recorded release, and a payoff quoted two weeks ago may no longer be accurate at disbursement."
        ]
      },
      {
        "heading": "Read exceptions against the property record",
        "paragraphs": [
          "Compare each exception to the survey, plat, and prior policy. Note the recording number, the affected area, and whether the exception is standard for the jurisdiction. If an exception appears in a new location or with different language than the prior policy, mark the difference for the title officer.",
          "The assistant can gather and compare documents. The decision about whether an exception is acceptable, insurable, or needs a curative affidavit belongs to the title officer and, where required, the underwriter."
        ]
      },
      {
        "heading": "Track endorsement requests separately",
        "paragraphs": [
          "Endorsements often depend on facts that are easy to lose in a general checklist: the loan type, the property use, the survey date, and whether the borrower is an entity. Keep a short endorsement log with the requested form, the reason, the supporting document, and the approval status.",
          "When a requested endorsement cannot be supported by the file, say so early. Discovering the gap at the closing table forces a choice between delaying the signing and accepting coverage the parties did not expect."
        ]
      },
      {
        "heading": "Re-read the commitment after every update",
        "paragraphs": [
          "Commitments change. A new exception can appear after a survey is returned, a requirement can be added after a lender review, and a payoff can be revised. Each update gets a dated comparison against the prior version, with additions and removals called out.",
          "Store the comparison beside the commitment in the transaction record. A reviewer should be able to see which version governed the closing and why a line disappeared, rather than assuming the newest PDF erased the issue."
        ]
      },
      {
        "heading": "Set the handoff point for the closing table",
        "paragraphs": [
          "Before the signing appointment, confirm that every open requirement has a named owner and a realistic completion date. Anything that cannot be satisfied before signing should be identified in writing so the closing manager can decide whether to proceed, hold, or restructure.",
          "A clean schedule is not one with no exceptions. It is one where each line has been read, classified, sourced, and assigned, and where the remaining judgment sits with the person authorized to make it."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a VA interpret whether a title exception is a defect?",
        "a": "No. The assistant can identify the document, compare versions, and flag a difference. The title officer and underwriter decide whether an exception is acceptable or needs curative work."
      },
      {
        "q": "What is the most common Schedule B handoff failure?",
        "a": "Treating an old payoff quote or an email promise as satisfied evidence. The file then looks complete until disbursement, when the number or the release no longer matches."
      },
      {
        "q": "How should a revised commitment be stored?",
        "a": "Keep each version with its effective date and a short change note. Replace nothing silently, because the prior version may explain why a requirement was originally raised."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "American Land Title Association, title insurance basics",
      "url": "https://www.alta.org/"
    }
  },
  {
    "slug": "seller-payoff-statement-reconciliation",
    "title": "Seller Payoff Reconciliation Before Disbursement",
    "description": "How to check good-through dates, per diem, and second liens on a seller payoff.",
    "category": "Disbursement",
    "publishedAt": "2026-10-27",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-seller-payoff-statement-reconciliation.svg",
    "sections": [
      {
        "heading": "Start with the good-through date",
        "paragraphs": [
          "A payoff statement is a snapshot with an expiration. The first check is whether the stated good-through date covers the scheduled disbursement day. If the closing moves, the quote must be refreshed even when the principal balance looks unchanged.",
          "Record the statement date, the good-through date, the per-diem amount, and the payoff method. A wire cutoff earlier than the closing time can make a valid quote unusable on the day, so the calendar entry should include the lender's funding deadline rather than only the appointment time."
        ]
      },
      {
        "heading": "Match every lien to a payoff or release",
        "paragraphs": [
          "List each mortgage, judgment, tax lien, and HOA claim shown on the commitment, then mark whether the file contains a payoff, a release, or a written statement that the item will be paid at closing. An item with none of those is an open requirement, not a rounding difference.",
          "Second liens are a frequent blind spot because the first lender's payoff does not clear them. If a home equity line exists, confirm whether it is closed, frozen, or still advancing, and get a payoff that reflects the current drawn balance."
        ]
      },
      {
        "heading": "Recompute the arithmetic independently",
        "paragraphs": [
          "The assistant recalculates principal, interest, fees, and per diem from the statement's own figures and compares the result with the settlement statement. Note any difference rather than adjusting a line to make the totals agree.",
          "Escrow and impound balances, prepayment penalties, and reconveyance fees should each have a line and a source. When a fee appears without a stated basis, ask the lender or servicer for the itemization instead of accepting the total."
        ]
      },
      {
        "heading": "Handle a short or changed payoff",
        "paragraphs": [
          "If the payoff exceeds the available seller proceeds, the file needs a funding decision, not a creative allocation. The closing manager determines whether the seller will bring funds, whether a lienholder will accept a short payoff, and what the lender requires in writing.",
          "A revised payoff after closing requires the same treatment as an original: new statement, new good-through date, and a documented recalculation. Do not overwrite the prior version, because the difference may need to be explained to the seller or the underwriter."
        ]
      },
      {
        "heading": "Confirm the release path",
        "paragraphs": [
          "Payment does not remove a lien from the record. The file should name who will record the satisfaction or release, the expected turnaround, and the follow-up date. For lenders that issue releases through a vendor, capture the confirmation number and the recording reference when it arrives.",
          "Post-closing, the release becomes a tracked item rather than an assumption. A paid loan with no recorded release is still an exception on the title record and can surface when the property is sold again."
        ]
      },
      {
        "heading": "Make the payoff package reviewable",
        "paragraphs": [
          "Assemble the statement, the calculation, the disbursement entry, and the release confirmation in one place. Add a short note explaining any variance between the quoted payoff and the amount sent.",
          "The test is whether a reviewer can reconstruct the payment without calling the closer. If the only explanation is verbal, the file cannot support the disbursement if a question arrives months later."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who should request the payoff statement?",
        "a": "The assistant can request it through the servicer's approved channel when the transaction owner has authorized that step. The closing manager reviews the terms and decides how the payoff affects the settlement."
      },
      {
        "q": "Is a verbal payoff quote acceptable?",
        "a": "Only if the lender's written process allows it and the quote is documented with the caller, date, and reference. A written statement is safer because it can be attached to the file."
      },
      {
        "q": "What happens if the release arrives after closing?",
        "a": "Track it on a post-closing calendar with an owner and a due date. Record the release number when it is recorded and clear the exception only after the recording is confirmed."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "Consumer Financial Protection Bureau, mortgage closing resources",
      "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
    }
  },
  {
    "slug": "closing-disclosure-delivery-evidence",
    "title": "Closing Disclosure Delivery Evidence",
    "description": "A timing record for delivery, receipt, and re-disclosure on a residential closing.",
    "category": "Compliance timing",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-closing-disclosure-delivery-evidence.svg",
    "sections": [
      {
        "heading": "Know which clock is running",
        "paragraphs": [
          "The closing disclosure has a delivery rule, and the file needs to show when the consumer received it, not only when the title company sent it. Those are different dates when a document goes by mail, sits in an unopened portal, or is handed over at an appointment.",
          "The preparer records the delivery method, the timestamp, and the evidence of receipt. For electronic delivery, that means the consent record and the system receipt. For in-person delivery, it means a signed acknowledgement or a dated receipt that identifies the document."
        ]
      },
      {
        "heading": "Log the consumer receipt date separately",
        "paragraphs": [
          "Create three fields: sent, delivered, and received. A portal upload fills the sent field. A system delivery confirmation fills the delivered field. Only evidence that the borrower actually obtained the document fills the received field.",
          "When the rule assumes receipt after mailing, record the mailing date and the assumed receipt date with the rule that produced it. A reviewer should not have to infer which convention the file used."
        ]
      },
      {
        "heading": "Catch the events that restart the clock",
        "paragraphs": [
          "A changed APR, a changed loan product, a prepayment penalty, or a changed closing date can each alter the timing analysis. The assistant compares the current disclosure with the prior version and flags any changed term that the closing manager needs to evaluate.",
          "The flag should quote the old value and the new value and point to the source of the change. A general note that figures were updated is not enough to show whether a new delivery period applies."
        ]
      },
      {
        "heading": "Keep the version history intact",
        "paragraphs": [
          "Each disclosure version gets a sequence number, a date, and a reason for revision. Store the versions together so the closing manager can compare them without searching email. Do not delete an earlier version because it was superseded.",
          "If a revised disclosure is issued close to consummation, the file should show who decided the timing was acceptable and what evidence supported that decision. That is a judgment for the closing manager, not a data-entry step for the assistant."
        ]
      },
      {
        "heading": "Test the receipt trail before the signing",
        "paragraphs": [
          "The day before signing, verify that the latest disclosure is the one the borrower received, that the receipt evidence is attached, and that no unresolved term change is waiting for review. Confirm the borrower knows how to reach the closing team if the portal fails.",
          "A last-minute delivery that cannot be evidenced should pause the appointment. Proceeding because the borrower says it is fine leaves the file without the record the lender and examiner will expect."
        ]
      },
      {
        "heading": "Report timing exceptions honestly",
        "paragraphs": [
          "Track deliveries that occurred inside the protected window, re-disclosures triggered by a changed term, and appointments moved because receipt could not be shown. Pair each count with the number of files reviewed so the measure has a denominator.",
          "A low exception count is not proof of good practice if no one is checking receipt. The useful signal is whether the file contains evidence that matches the date the team relied on."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does a portal upload prove the borrower received the disclosure?",
        "a": "It proves the document was made available. Receipt usually needs the system's delivery or access record, plus the borrower's electronic consent where required."
      },
      {
        "q": "Can the assistant decide whether a revised disclosure restarts the waiting period?",
        "a": "No. The assistant can identify the changed term and assemble the version history. The closing manager or compliance owner determines the timing consequence."
      },
      {
        "q": "What should be attached when delivery is in person?",
        "a": "A dated acknowledgement that identifies the document and the person who received it. A note in the file saying handed to borrower is weaker than a signed receipt."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "Consumer Financial Protection Bureau, TILA-RESPA integrated disclosure rule",
      "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
    }
  },
  {
    "slug": "hoa-estoppel-transfer-fee-queue",
    "title": "HOA Estoppel and Transfer Fee Queue",
    "description": "A tracking routine for association statements, expiration dates, and closing transfer charges.",
    "category": "Association items",
    "publishedAt": "2026-10-27",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-hoa-estoppel-transfer-fee-queue.svg",
    "sections": [
      {
        "heading": "Request the right document the first time",
        "paragraphs": [
          "An association estoppel is not the same as a monthly statement or a paid assessment receipt. The request should name the property, the unit, the owner, the closing date, and the document the association or its manager actually issues for a sale.",
          "Record the request date, the portal or email used, the quoted fee, and the promised turnaround. If the association uses a standard form, keep a copy of the submitted form so a later dispute about scope can be answered from the file."
        ]
      },
      {
        "heading": "Date the statement and its expiration",
        "paragraphs": [
          "Estoppels expire. Put the statement date and the expiration date at the top of the item, then compare the expiration with the scheduled closing. If the closing moves past expiration, request an update instead of relying on the older document.",
          "Some associations also require a separate clearance letter after closing. Note that requirement at intake so it is not discovered during the post-closing audit."
        ]
      },
      {
        "heading": "Break out the charges",
        "paragraphs": [
          "List regular assessments, special assessments, late fees, legal fees, capital contributions, transfer fees, and any document or rush charge as separate lines. Each line needs a source in the statement and a treatment in the settlement statement.",
          "A lump sum labeled closing fee cannot be checked. Ask the manager for the component amounts and the authority for each charge, then route any disputed item to the closing manager rather than deciding whether it is payable."
        ]
      },
      {
        "heading": "Coordinate with the closing calendar",
        "paragraphs": [
          "Association items often arrive late because the manager is a third party with its own queue. Track the request against the closing date and escalate when the promised turnaround has passed. A polite status request with the transaction details is more effective than a repeated general inquiry.",
          "For rush closings, confirm whether the association offers an expedited option and what it costs. Record the cost decision with the party who approved it, because rush fees are a frequent source of closing-table disagreement."
        ]
      },
      {
        "heading": "Reconcile the final figures",
        "paragraphs": [
          "At settlement, compare the estoppel totals with the amounts actually collected or credited. Note per-diem assessments, payments posted after the statement date, and any transfer fee paid outside closing.",
          "If the association reports a balance after closing, attach the payment evidence and the clearance contact. The goal is a record that shows what was owed, what was paid, and what the association acknowledges."
        ]
      },
      {
        "heading": "Close the item with evidence",
        "paragraphs": [
          "An HOA item is closed when the statement is current, the charges are accounted for, and any required post-closing clearance is either received or on a dated follow-up. A paid invoice without an updated ledger is only partial evidence.",
          "Review a sample of association files each month for expired statements and unposted payments. Those two failures account for most of the rework that surfaces after the buyer has already moved in."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can the assistant order the estoppel directly?",
        "a": "Yes, when the transaction owner has approved the request and the association accepts requests from the closing team. The assistant documents the order and routes disputed charges for review."
      },
      {
        "q": "What should happen when the estoppel expires before closing?",
        "a": "Request an updated statement and record the delay. The closing manager decides whether the closing can proceed while the update is pending."
      },
      {
        "q": "How are transfer fees verified?",
        "a": "Use the association's written schedule or the estoppel line item, and keep the authority for the charge with the settlement statement. Do not rely on a verbal quote from a manager."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "U.S. Department of Housing and Urban Development, home buying and settlement",
      "url": "https://www.hud.gov/topics/buying_a_home"
    }
  },
  {
    "slug": "earnest-money-receipt-ledger",
    "title": "Earnest Money Receipt and Deposit Ledger",
    "description": "A deposit trail for earnest money from receipt to escrow credit and refund.",
    "category": "Escrow records",
    "publishedAt": "2026-10-27",
    "readTime": "7 min read",
    "thumbnail": "/article-thumbnails/october-27/closingspecialist-earnest-money-receipt-ledger.svg",
    "sections": [
      {
        "heading": "Record the money when it is promised",
        "paragraphs": [
          "The earnest money clock starts with the contract term, not with the day someone remembers to check the bank. At intake, note the amount, the required deposit date, the holder, the delivery method, and the party responsible for sending it.",
          "Create a ledger row for each deposit rather than a single note on the file. A transaction can have an initial deposit, an additional deposit after inspection, and a refund, and each movement needs its own date and evidence."
        ]
      },
      {
        "heading": "Match the receipt to the contract",
        "paragraphs": [
          "Compare the amount received with the amount required and the date received with the date required. A short deposit, a late deposit, or a deposit sent to the wrong holder is an exception that the agent and closing manager need to see promptly.",
          "Attach the bank receipt or escrow acknowledgement, not a screenshot of a payment app confirmation alone. The holder's record is what supports the credit at closing."
        ]
      },
      {
        "heading": "Keep custody and accounting separate",
        "paragraphs": [
          "The assistant can prepare the ledger, request receipts, and flag missing deposits. The assistant should not move funds, authorize a release, or decide which party is entitled to a disputed deposit.",
          "When a deposit is held by a brokerage or law firm rather than the title company, record the holder and the instructions for transferring the credit to closing. A missing transfer is not solved by adding the amount to the settlement statement without a matching receipt."
        ]
      },
      {
        "heading": "Track refunds and reallocations",
        "paragraphs": [
          "If a deposit is refunded or applied differently, record the request, the approval, the date sent, and the recipient. Keep the original deposit row intact and add a linked movement rather than editing history.",
          "Disputes over earnest money often turn on who said what and when. A dated ledger with the governing contract clause is more useful than a narrative written after the disagreement."
        ]
      },
      {
        "heading": "Reconcile at closing",
        "paragraphs": [
          "Before disbursement, confirm that every deposit on the ledger is either credited on the settlement statement or accounted for as returned. Compare the escrow holder's figure with the ledger, and note any difference before the file closes.",
          "If a deposit was never received, the closing manager needs to know before the signing, not after. A last-minute discovery can change the cash to close and the parties' willingness to proceed."
        ]
      },
      {
        "heading": "Audit the ledger monthly",
        "paragraphs": [
          "Sample files for deposits with no receipt, receipts with no ledger entry, and credits that do not match the amount received. Report the count against the number of files with deposits that month.",
          "The ledger is healthy when a reviewer can follow one dollar from contract term to escrow credit without asking anyone to explain a gap."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who should hold earnest money?",
        "a": "The contract and state practice determine the holder. The assistant records the designated holder and the delivery instructions; the closing manager resolves any conflict."
      },
      {
        "q": "Is a payment app screenshot enough evidence?",
        "a": "It shows a transfer was initiated. The file also needs the receiving holder's acknowledgement or bank record showing the funds arrived."
      },
      {
        "q": "What if the deposit arrives after the contract deadline?",
        "a": "Flag it immediately with the date received and the contract term. The agents and closing manager decide the consequence; the assistant does not waive or extend the deadline."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/closing-package-completeness",
    "source": {
      "label": "National Association of Realtors, buyer and seller resources",
      "url": "https://www.nar.realtor/"
    }
  }
];
