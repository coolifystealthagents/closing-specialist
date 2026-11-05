import type { ResearchPost } from './types';
export const november05ResearchPosts: ResearchPost[] = [
  {
    "slug": "wire-limit-verification-completeness",
    "title": "Wire limit verification completeness",
    "summary": "A measurement protocol for wire limit completeness in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Closing coordination",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of wire limit completeness records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/wire-limit-verification-completeness.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The wire limit completeness note should separate the request, the decision that is still open, and the person who can close it. The next reviewer should not have to ask which document is authoritative. Name the trigger that brought the case into the queue. Separate the request from the decision, because a complete request is not an approval. In this wire limit completeness case, the record points to the closing record and names the closing manager as the decision owner.",
          "Distinguish a new request from a correction to an earlier one. Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. Say which system of record governs if two sources disagree. The wire limit completeness reviewer records confirmation, the owner, and the next action in one place.",
          "Name the person who can close the question and the date by which the answer is needed. Record the queue and the entity so the case cannot drift into another team's work. Name the trigger that brought the case into the queue. Confirm that the request belongs in this queue before assigning an owner. In the wire limit completeness queue, an item without a next action is treated as an exception."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Map each wire limit completeness value to its source: wire request for the request, bank limit for the check, and the closing record for the surviving destination value. Link each value to the field or page that supports it. Keep a version label on every file that can change. Keep the original document and the working copy in separate states. For wire limit completeness, the working file keeps wire request and bank limit beside the decision note.",
          "Compare the source and the destination values before drawing a conclusion. Record the export time beside any value taken from a system. Mark missing evidence as missing, with a reason, rather than leaving a blank. A case that moves between owners should keep both owner periods visible. Every wire limit completeness handoff names the closing manager and the field in the closing record that will confirm the change.",
          "Keep the original document and the working copy in separate states. The next reviewer should not have to ask which document is authoritative. Record the export time beside any value taken from a system. State whether the evidence is confirmed, inferred, or unavailable. The wire limit completeness close note cites the closing record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The the closing manager owns the decision in wire limit completeness; the preparer may compare, label, and route but may not approve the outcome. A case that moves between owners should keep both owner periods visible. A short written rule is easier to test than an unwritten habit. Preparation, comparison, and follow-up may sit with the assistant. The wire limit completeness case note should show what the closing record held at the time and who reviewed it.",
          "A clean-looking status is not evidence that the underlying work is correct. Do not let a deadline expand a role beyond its written limit. A short written rule is easier to test than an unwritten habit. A role change should trigger a review of queue access. For wire limit completeness, compare wire request with the destination value rather than relying on a status label.",
          "Name the owner for every open item, including items waiting on someone else. Keep emergency authority narrow and followed by a review note. A clean-looking status is not evidence that the underlying work is correct. A delegation needs a scope, a limit, an end date, and a named backup. A sample wire limit completeness review checks wire request, bank limit, and the surviving value in the closing record."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Each morning the team reviews wire limit completeness arrivals, items waiting on the the closing manager, and items ready for a verified close. A clean-looking status is not evidence that the underlying work is correct. Do not let a status update stand in for a verified event. A short written rule is easier to test than an unwritten habit. Apply the same wire limit completeness test to approval note and to the value that survives in the closing record.",
          "Name the owner for every open item, including items waiting on someone else. Leave the next shift a queue that needs no chat history. If the team cannot reproduce the result from the record, the control is not finished. Escalate an item that has waited past the written threshold. The wire limit completeness record should let a second reviewer rebuild the decision from bank limit and approval note.",
          "If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. The next reviewer should not have to ask which document is authoritative. A short written rule is easier to test than an unwritten habit. In this wire limit completeness case, the record points to the closing record and names the closing manager as the decision owner."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "If the record does not match the surviving value, stop the dependent action and log the conflict in the closing record rather than choosing the more convenient value. Do not close a case just because the requester stopped asking. Separate a data conflict from a policy conflict. A case that moves between owners should keep both owner periods visible. The wire limit completeness reviewer records confirmation, the owner, and the next action in one place.",
          "Record the stop reason and the release decision together. If the exception repeats, give it a reason code. Separate a data conflict from a policy conflict. Do not rewrite the earlier record to match the later answer. A wire limit completeness exception keeps confirmation attached and routes the question to the closing manager.",
          "Keep the original request so a later correction does not erase the reason for the work. Record the stop reason and the release decision together. Separate a data conflict from a policy conflict. If the exception repeats, give it a reason code. For wire limit completeness, the working file keeps wire request and bank limit beside the decision note."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Record the wire limit completeness close reason, the approver, and the surviving evidence reference in the same case note. Record the approximate value, the approver, and the final check time. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every wire limit completeness handoff names the closing manager and the field in the closing record that will confirm the change.",
          "A closed status is not proof that the destination changed. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Keep the prior value so the change can be explained. In the wire limit completeness queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. A closed status is not proof that the destination changed. Tie the close note to the original request and the final evidence. Keep the original request so a later correction does not erase the reason for the work. The wire limit completeness case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Review wire limit completeness with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Check whether the definition changed during the period. For wire limit completeness, compare wire request with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. Report age and dependency, not only the total count. The next reviewer should not have to ask which document is authoritative. Report a null result as clearly as a positive one. The wire limit completeness close note cites the closing record, the approver, and the time of the final check.",
          "Report a null result as clearly as a positive one. Separate what was observed from what the team believes caused it. Name the owner for every open item, including items waiting on someone else. Use case-level review to explain an outlier before calling it a trend. Apply the same wire limit completeness test to approval note and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The wire limit completeness working paper should show the request, the source, the decision, the action, and the surviving value without a private inbox. Avoid a private second version in a personal document. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The wire limit completeness record should let a second reviewer rebuild the decision from bank limit and approval note.",
          "A short written rule is easier to test than an unwritten habit. Write the note so a reviewer can reconstruct the decision without a meeting. Make the handoff readable by the next shift and the next auditor. If the team cannot reproduce the result from the record, the control is not finished. A sample wire limit completeness review checks wire request, bank limit, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. Keep the note short enough to read with the case. A short written rule is easier to test than an unwritten habit. Archive the extract with the study so it can be repeated. The wire limit completeness reviewer records confirmation, the owner, and the next action in one place."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "title-endorsement-cycle",
    "title": "Title endorsement cycle",
    "summary": "A measurement protocol for endorsement cycle in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Title coordination",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of endorsement cycle records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/title-endorsement-cycle.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Before work begins on endorsement cycle, confirm which entity, period, and queue the case belongs to and who accepts the outcome. Record the queue and the entity so the case cannot drift into another team's work. Confirm that the request belongs in this queue before assigning an owner. State explicitly what is in scope and what is out of scope for the case. For endorsement cycle, the working file keeps endorsement request and commitment version beside the decision note.",
          "Separate the request from the decision, because a complete request is not an approval. Write the decision in one sentence so the reviewer knows what would count as an answer. Name the person who can close the question and the date by which the answer is needed. A case that moves between owners should keep both owner periods visible. Every endorsement cycle handoff names the closing manager and the field in the closing record that will confirm the change.",
          "State explicitly what is in scope and what is out of scope for the case. The next reviewer should not have to ask which document is authoritative. Write the decision in one sentence so the reviewer knows what would count as an answer. Record the requester and the promised response time. The endorsement cycle close note cites the closing record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The evidence set for endorsement cycle should join endorsement request, commitment version, underwriter note, and approval on one stable case reference. A case that moves between owners should keep both owner periods visible. A short written rule is easier to test than an unwritten habit. Keep the original document and the working copy in separate states. The endorsement cycle case note should show what the closing record held at the time and who reviewed it.",
          "A clean-looking status is not evidence that the underlying work is correct. Do not let a deadline expand a role beyond its written limit. A short written rule is easier to test than an unwritten habit. Name the repository where sensitive evidence is held. For endorsement cycle, compare endorsement request with the destination value rather than relying on a status label.",
          "Name the owner for every open item, including items waiting on someone else. State whether the evidence is confirmed, inferred, or unavailable. A clean-looking status is not evidence that the underlying work is correct. Mark missing evidence as missing, with a reason, rather than leaving a blank. A sample endorsement cycle review checks endorsement request, commitment version, and the surviving value in the closing record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Write the endorsement cycle authority limit into the case template, including the amount, scope, and end date of any delegation. A clean-looking status is not evidence that the underlying work is correct. Do not let a familiar requester bypass the approval boundary. A short written rule is easier to test than an unwritten habit. Apply the same endorsement cycle test to underwriter note and to the value that survives in the closing record.",
          "Name the owner for every open item, including items waiting on someone else. If two roles share a queue, mark which one decides each item. If the team cannot reproduce the result from the record, the control is not finished. Write the authority limit into the case template. The endorsement cycle record should let a second reviewer rebuild the decision from commitment version and underwriter note.",
          "If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. The next reviewer should not have to ask which document is authoritative. A short written rule is easier to test than an unwritten habit. In this endorsement cycle case, the record points to the closing record and names the closing manager as the decision owner."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "A endorsement cycle status update should point to a verifiable event in the closing record, not to a feeling about progress. Check that the owner is actually available before assigning. Do not let a status update stand in for a verified event. A case that moves between owners should keep both owner periods visible. The endorsement cycle reviewer records approval, the owner, and the next action in one place.",
          "A handoff is complete only when the receiver acknowledges it. Compare arrivals and completions, not only the backlog total. Do not let a status update stand in for a verified event. Record one next action and one due time per open item. A endorsement cycle exception keeps approval attached and routes the question to the closing manager.",
          "Keep the original request so a later correction does not erase the reason for the work. A handoff is complete only when the receiver acknowledges it. Do not let a status update stand in for a verified event. Compare arrivals and completions, not only the backlog total. For endorsement cycle, the working file keeps endorsement request and commitment version beside the decision note."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A repeated endorsement cycle exception becomes a reason code in the queue, not a story retold in each thread. Route one bounded question to the owner instead of negotiating in the queue. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every endorsement cycle handoff names the closing manager and the field in the closing record that will confirm the change.",
          "Record the stop reason and the release decision together. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Record who released the dependent action and when. In the endorsement cycle queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. Record the stop reason and the release decision together. An escalation that ends in silence remains open. Keep the original request so a later correction does not erase the reason for the work. The endorsement cycle case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Close endorsement cycle only when the destination value in the closing record, the approver, and the time of the final check are all visible. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Record the close reason with the same codes used in the exception queue. For endorsement cycle, compare endorsement request with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. A closed status is not proof that the destination changed. The next reviewer should not have to ask which document is authoritative. Do not mark complete until the check is repeatable by another reviewer. The endorsement cycle close note cites the closing record, the approver, and the time of the final check.",
          "Do not mark complete until the check is repeatable by another reviewer. If the destination is another team, require an acknowledgment. Name the owner for every open item, including items waiting on someone else. Reopen the case when the destination value is disputed. Apply the same endorsement cycle test to underwriter note and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The endorsement cycle review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. Record the sample frame, the reviewer, and the criteria. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The endorsement cycle record should let a second reviewer rebuild the decision from commitment version and underwriter note.",
          "A short written rule is easier to test than an unwritten habit. Choose the sample from the export before the meeting. Report a null result as clearly as a positive one. If the team cannot reproduce the result from the record, the control is not finished. A sample endorsement cycle review checks endorsement request, commitment version, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. A stable total can hide a growing tail. A short written rule is easier to test than an unwritten habit. End the review with one change and one measure. The endorsement cycle reviewer records approval, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Label endorsement request and commitment version with their versions so a later reviewer can tell a stale extract from a current one. A short written rule is easier to test than an unwritten habit. Record event time separately from entry time. A clean-looking status is not evidence that the underlying work is correct. A endorsement cycle exception keeps approval attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. Name the owner and the date beside each decision. Avoid a private second version in a personal document. In this endorsement cycle case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Do not store credentials or unnecessary personal data in the case. Link the evidence to the exact field it supports. Record event time separately from entry time. Every endorsement cycle handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "escrow-analysis-variance",
    "title": "Escrow analysis variance",
    "summary": "A measurement protocol for escrow analysis variance in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Post-closing records",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of escrow analysis variance records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/escrow-analysis-variance.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "For escrow analysis variance, the first step is to write the open decision, the requesting role, and the queue owner before anyone touches the closing record. A case that moves between owners should keep both owner periods visible. A short written rule is easier to test than an unwritten habit. State explicitly what is in scope and what is out of scope for the case. The escrow analysis variance case note should show what the closing record held at the time and who reviewed it.",
          "A clean-looking status is not evidence that the underlying work is correct. Do not let a deadline expand a role beyond its written limit. A short written rule is easier to test than an unwritten habit. Note the observation window; a case without a period cannot be compared later. For escrow analysis variance, compare escrow statement with the destination value rather than relying on a status label.",
          "Name the owner for every open item, including items waiting on someone else. Record the requester and the promised response time. A clean-looking status is not evidence that the underlying work is correct. Name the person who can close the question and the date by which the answer is needed. A sample escrow analysis variance review checks escrow statement, analysis worksheet, and the surviving value in the closing record."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Attach escrow statement and analysis worksheet to the case, label their versions, and record the time each was observed. A clean-looking status is not evidence that the underlying work is correct. Record who supplied each document and when it arrived. A short written rule is easier to test than an unwritten habit. Apply the same escrow analysis variance test to disbursement record and to the value that survives in the closing record.",
          "Name the owner for every open item, including items waiting on someone else. Do not treat a screenshot as a substitute for the system record. If the team cannot reproduce the result from the record, the control is not finished. Keep a version label on every file that can change. The escrow analysis variance record should let a second reviewer rebuild the decision from analysis worksheet and disbursement record.",
          "If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. The next reviewer should not have to ask which document is authoritative. A short written rule is easier to test than an unwritten habit. In this escrow analysis variance case, the record points to the closing record and names the closing manager as the decision owner."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "When escrow analysis variance changes a record in the closing record, the the closing manager approves and the preparer records the action; the two roles stay separate. Keep emergency authority narrow and followed by a review note. Do not let a familiar requester bypass the approval boundary. A case that moves between owners should keep both owner periods visible. The escrow analysis variance reviewer records ledger entry, the owner, and the next action in one place.",
          "A delegation needs a scope, a limit, an end date, and a named backup. When urgency presses against the limit, pause and route the decision. Do not let a familiar requester bypass the approval boundary. A complete packet is not an approval; the decision needs a person and a timestamp. A escrow analysis variance exception keeps ledger entry attached and routes the question to the closing manager.",
          "Keep the original request so a later correction does not erase the reason for the work. A delegation needs a scope, a limit, an end date, and a named backup. Do not let a familiar requester bypass the approval boundary. When urgency presses against the limit, pause and route the decision. For escrow analysis variance, the working file keeps escrow statement and analysis worksheet beside the decision note."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "End the escrow analysis variance shift with an owner, a next action, and a due time on every open case. Assign every unowned case before new work begins. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every escrow analysis variance handoff names the closing manager and the field in the closing record that will confirm the change.",
          "A handoff is complete only when the receiver acknowledges it. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Escalate an item that has waited past the written threshold. In the escrow analysis variance queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. A handoff is complete only when the receiver acknowledges it. A case with no next action is an exception even if it says in progress. Keep the original request so a later correction does not erase the reason for the work. The escrow analysis variance case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "When the record does not match the surviving value, preserve both versions, record the observation times, and route one answerable question to the the closing manager. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Keep the failed attempt and the correction in the same history. For escrow analysis variance, compare escrow statement with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. Record the stop reason and the release decision together. The next reviewer should not have to ask which document is authoritative. Check whether the exception came from a form, a rule, or a permission. The escrow analysis variance close note cites the closing record, the approver, and the time of the final check.",
          "Check whether the exception came from a form, a rule, or a permission. Do not rewrite the earlier record to match the later answer. Name the owner for every open item, including items waiting on someone else. If the exception repeats, give it a reason code. Apply the same escrow analysis variance test to disbursement record and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The final escrow analysis variance check compares ledger entry with the surviving value in the closing record; a status label alone is not a close. Tie the close note to the original request and the final evidence. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The escrow analysis variance record should let a second reviewer rebuild the decision from analysis worksheet and disbursement record.",
          "A short written rule is easier to test than an unwritten habit. Compare the destination field, not only the activity log. Do not mark complete until the check is repeatable by another reviewer. If the team cannot reproduce the result from the record, the control is not finished. A sample escrow analysis variance review checks escrow statement, analysis worksheet, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. Test one closed case by rebuilding it from the evidence map. A short written rule is easier to test than an unwritten habit. Verify that the surviving record is the one downstream teams will use. The escrow analysis variance reviewer records ledger entry, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Report escrow analysis variance open cases by age and dependency, not only the total, because a stable total can hide an aging tail. A short written rule is easier to test than an unwritten habit. Report age and dependency, not only the total count. A clean-looking status is not evidence that the underlying work is correct. A escrow analysis variance exception keeps ledger entry attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. Check whether the definition changed during the period. Record the sample frame, the reviewer, and the criteria. In this escrow analysis variance case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Set the next review date before the action begins. Keep the prior procedure available for comparison. Report age and dependency, not only the total count. Every escrow analysis variance handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Store sensitive escrow analysis variance evidence in the approved repository and keep only the reference and access path in the analysis note. A case that moves between owners should keep both owner periods visible. Use the approved repository for sensitive content. The record should show the source, the decision, and the surviving value in one place. In the escrow analysis variance queue, an item without a next action is treated as an exception.",
          "Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. Use the approved repository for sensitive content. The next reviewer should not have to ask which document is authoritative. For escrow analysis variance, the working file keeps escrow statement and analysis worksheet beside the decision note.",
          "Use the approved repository for sensitive content. The record should show the source, the decision, and the surviving value in one place. A short written rule is easier to test than an unwritten habit. Make the handoff readable by the next shift and the next auditor. For escrow analysis variance, compare escrow statement with the destination value rather than relying on a status label."
        ]
      }
    ],
    "sources": [
      {
        "label": "CFPB: closing disclosure",
        "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "municipal-lien-search-coverage",
    "title": "Municipal lien search coverage",
    "summary": "A measurement protocol for lien search coverage in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Title coordination",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of lien search coverage records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/municipal-lien-search-coverage.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Start lien search coverage with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. A clean-looking status is not evidence that the underlying work is correct. Distinguish a new request from a correction to an earlier one. A short written rule is easier to test than an unwritten habit. Apply the same lien search coverage test to commitment note and to the value that survives in the closing record.",
          "Name the owner for every open item, including items waiting on someone else. Name the trigger that brought the case into the queue. If the team cannot reproduce the result from the record, the control is not finished. Confirm that the request belongs in this queue before assigning an owner. The lien search coverage record should let a second reviewer rebuild the decision from result letter and commitment note.",
          "If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. The next reviewer should not have to ask which document is authoritative. A short written rule is easier to test than an unwritten habit. In this lien search coverage case, the record points to the closing record and names the closing manager as the decision owner."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "A reviewer should be able to rebuild lien search coverage from commitment note, clearance, and the the closing record record without asking for a private screenshot. State whether the evidence is confirmed, inferred, or unavailable. Record who supplied each document and when it arrived. A case that moves between owners should keep both owner periods visible. The lien search coverage reviewer records clearance, the owner, and the next action in one place.",
          "Mark missing evidence as missing, with a reason, rather than leaving a blank. Compare the source and the destination values before drawing a conclusion. Record who supplied each document and when it arrived. Link each value to the field or page that supports it. A lien search coverage exception keeps clearance attached and routes the question to the closing manager.",
          "Keep the original request so a later correction does not erase the reason for the work. Mark missing evidence as missing, with a reason, rather than leaving a blank. Record who supplied each document and when it arrived. Compare the source and the destination values before drawing a conclusion. For lien search coverage, the working file keeps search request and result letter beside the decision note."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A standing instruction for lien search coverage needs a limit and an expiry, and the the closing manager should confirm it is still current. Approval, payment, records disposition, and policy exceptions stay with the named owner. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every lien search coverage handoff names the closing manager and the field in the closing record that will confirm the change.",
          "A delegation needs a scope, a limit, an end date, and a named backup. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Write the authority limit into the case template. In the lien search coverage queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. A delegation needs a scope, a limit, an end date, and a named backup. Record rejected and deferred requests as well as approvals. Keep the original request so a later correction does not erase the reason for the work. The lien search coverage case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The daily lien search coverage pass starts with the oldest item, the unassigned handoff, and the case paused for more than two business days. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Log the handoff time when a case crosses a shift. For lien search coverage, compare search request with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. A handoff is complete only when the receiver acknowledges it. The next reviewer should not have to ask which document is authoritative. Leave the next shift a queue that needs no chat history. The lien search coverage close note cites the closing record, the approver, and the time of the final check.",
          "Leave the next shift a queue that needs no chat history. Record one next action and one due time per open item. Name the owner for every open item, including items waiting on someone else. Compare arrivals and completions, not only the backlog total. Apply the same lien search coverage test to commitment note and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The lien search coverage exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. An escalation that ends in silence remains open. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The lien search coverage record should let a second reviewer rebuild the decision from result letter and commitment note.",
          "A short written rule is easier to test than an unwritten habit. Preserve both values and the time each was observed. Check whether the exception came from a form, a rule, or a permission. If the team cannot reproduce the result from the record, the control is not finished. A sample lien search coverage review checks search request, result letter, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. When access blocks the work, name the system, role, and approver. A short written rule is easier to test than an unwritten habit. Separate a data conflict from a policy conflict. The lien search coverage reviewer records clearance, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "If lien search coverage hands work to another team, keep it open until that team acknowledges receipt and the surviving record is confirmed. A short written rule is easier to test than an unwritten habit. A closed status is not proof that the destination changed. A clean-looking status is not evidence that the underlying work is correct. A lien search coverage exception keeps clearance attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. Record the close reason with the same codes used in the exception queue. Tie the close note to the original request and the final evidence. In this lien search coverage case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Keep the prior value so the change can be explained. Note the next review date before closing. A closed status is not proof that the destination changed. Every lien search coverage handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "A useful lien search coverage review ends with one testable change, one owner, and a date to measure whether the change moved the result. A case that moves between owners should keep both owner periods visible. Separate what was observed from what the team believes caused it. The record should show the source, the decision, and the surviving value in one place. In the lien search coverage queue, an item without a next action is treated as an exception.",
          "Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. Separate what was observed from what the team believes caused it. The next reviewer should not have to ask which document is authoritative. For lien search coverage, the working file keeps search request and result letter beside the decision note.",
          "Separate what was observed from what the team believes caused it. The record should show the source, the decision, and the surviving value in one place. A short written rule is easier to test than an unwritten habit. Report a null result as clearly as a positive one. For lien search coverage, compare search request with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Keep the lien search coverage record short enough to read during the day and specific enough to survive a later audit. A short written rule is easier to test than an unwritten habit. Keep the source reference and the coded value in the same row. Name the owner and the date beside each decision. The lien search coverage close note cites the closing record, the approver, and the time of the final check.",
          "Do not let a deadline expand a role beyond its written limit. Avoid a private second version in a personal document. Name the owner and the date beside each decision. Keep the source reference and the coded value in the same row. The lien search coverage case note should show what the closing record held at the time and who reviewed it.",
          "The record should show the source, the decision, and the surviving value in one place. Use the approved repository for sensitive content. Keep the source reference and the coded value in the same row. Name the owner for every open item, including items waiting on someone else. The lien search coverage record should let a second reviewer rebuild the decision from result letter and commitment note."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "closing-package-courier-completeness",
    "title": "Closing package courier completeness",
    "summary": "A measurement protocol for courier completeness in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Post-closing records",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of courier completeness records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/closing-package-courier-completeness.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The courier completeness note should separate the request, the decision that is still open, and the person who can close it. Record the requester and the promised response time. Distinguish a new request from a correction to an earlier one. A case that moves between owners should keep both owner periods visible. The courier completeness reviewer records recording note, the owner, and the next action in one place.",
          "Name the person who can close the question and the date by which the answer is needed. Separate the request from the decision, because a complete request is not an approval. Distinguish a new request from a correction to an earlier one. Record the queue and the entity so the case cannot drift into another team's work. A courier completeness exception keeps recording note attached and routes the question to the closing manager.",
          "Keep the original request so a later correction does not erase the reason for the work. Name the person who can close the question and the date by which the answer is needed. Distinguish a new request from a correction to an earlier one. Separate the request from the decision, because a complete request is not an approval. For courier completeness, the working file keeps package inventory and courier receipt beside the decision note."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Map each courier completeness value to its source: package inventory for the request, courier receipt for the check, and the closing record for the surviving destination value. Record the export time beside any value taken from a system. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every courier completeness handoff names the closing manager and the field in the closing record that will confirm the change.",
          "Mark missing evidence as missing, with a reason, rather than leaving a blank. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Keep a version label on every file that can change. In the courier completeness queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. Mark missing evidence as missing, with a reason, rather than leaving a blank. Preserve a conflicting value instead of overwriting the first one. Keep the original request so a later correction does not erase the reason for the work. The courier completeness case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The the closing manager owns the decision in courier completeness; the preparer may compare, label, and route but may not approve the outcome. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. A role change should trigger a review of queue access. For courier completeness, compare package inventory with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. A delegation needs a scope, a limit, an end date, and a named backup. The next reviewer should not have to ask which document is authoritative. If two roles share a queue, mark which one decides each item. The courier completeness close note cites the closing record, the approver, and the time of the final check.",
          "If two roles share a queue, mark which one decides each item. A complete packet is not an approval; the decision needs a person and a timestamp. Name the owner for every open item, including items waiting on someone else. When urgency presses against the limit, pause and route the decision. Apply the same courier completeness test to delivery confirmation and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Each morning the team reviews courier completeness arrivals, items waiting on the the closing manager, and items ready for a verified close. A case with no next action is an exception even if it says in progress. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The courier completeness record should let a second reviewer rebuild the decision from courier receipt and delivery confirmation.",
          "A short written rule is easier to test than an unwritten habit. Open the day with a queue pass by age, owner, and missing evidence. Leave the next shift a queue that needs no chat history. If the team cannot reproduce the result from the record, the control is not finished. A sample courier completeness review checks package inventory, courier receipt, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. Keep the queue view readable on one screen. A short written rule is easier to test than an unwritten habit. Do not let a status update stand in for a verified event. The courier completeness reviewer records recording note, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "If the record does not match the surviving value, stop the dependent action and log the conflict in the closing record rather than choosing the more convenient value. A short written rule is easier to test than an unwritten habit. Record the stop reason and the release decision together. A clean-looking status is not evidence that the underlying work is correct. A courier completeness exception keeps recording note attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. Keep the failed attempt and the correction in the same history. An escalation that ends in silence remains open. In this courier completeness case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Record who released the dependent action and when. Do not close a case just because the requester stopped asking. Record the stop reason and the release decision together. Every courier completeness handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Record the courier completeness close reason, the approver, and the surviving evidence reference in the same case note. A case that moves between owners should keep both owner periods visible. If the destination is another team, require an acknowledgment. The record should show the source, the decision, and the surviving value in one place. In the courier completeness queue, an item without a next action is treated as an exception.",
          "Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. If the destination is another team, require an acknowledgment. The next reviewer should not have to ask which document is authoritative. For courier completeness, the working file keeps package inventory and courier receipt beside the decision note.",
          "If the destination is another team, require an acknowledgment. The record should show the source, the decision, and the surviving value in one place. A short written rule is easier to test than an unwritten habit. Do not mark complete until the check is repeatable by another reviewer. For courier completeness, compare package inventory with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Review courier completeness with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. A short written rule is easier to test than an unwritten habit. Include a routine case, a reopened case, and a cross-owner handoff. Check whether the definition changed during the period. The courier completeness close note cites the closing record, the approver, and the time of the final check.",
          "Do not let a deadline expand a role beyond its written limit. Record the sample frame, the reviewer, and the criteria. Check whether the definition changed during the period. Include a routine case, a reopened case, and a cross-owner handoff. The courier completeness case note should show what the closing record held at the time and who reviewed it.",
          "The record should show the source, the decision, and the surviving value in one place. Separate what was observed from what the team believes caused it. Include a routine case, a reopened case, and a cross-owner handoff. Name the owner for every open item, including items waiting on someone else. The courier completeness record should let a second reviewer rebuild the decision from courier receipt and delivery confirmation."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The courier completeness working paper should show the request, the source, the decision, the action, and the surviving value without a private inbox. If the team cannot reproduce the result from the record, the control is not finished. Write the note so a reviewer can reconstruct the decision without a meeting. A clean-looking status is not evidence that the underlying work is correct. A sample courier completeness review checks package inventory, courier receipt, and the surviving value in the closing record.",
          "The next reviewer should not have to ask which document is authoritative. Keep the source reference and the coded value in the same row. Avoid a private second version in a personal document. The record should show the source, the decision, and the surviving value in one place. Apply the same courier completeness test to delivery confirmation and to the value that survives in the closing record.",
          "Link the evidence to the exact field it supports. If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. Use the approved repository for sensitive content. A courier completeness exception keeps recording note attached and routes the question to the closing manager."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Archives: records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "seller-proceeds-adjustment-evidence",
    "title": "Seller proceeds adjustment evidence",
    "summary": "A measurement protocol for proceeds adjustment evidence in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Closing coordination",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of proceeds adjustment evidence records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/seller-proceeds-adjustment-evidence.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Before work begins on proceeds adjustment evidence, confirm which entity, period, and queue the case belongs to and who accepts the outcome. Write the decision in one sentence so the reviewer knows what would count as an answer. Do not let a deadline expand a role beyond its written limit. A clean-looking status is not evidence that the underlying work is correct. Every proceeds adjustment evidence handoff names the closing manager and the field in the closing record that will confirm the change.",
          "Name the person who can close the question and the date by which the answer is needed. The next reviewer should not have to ask which document is authoritative. Keep the original request so a later correction does not erase the reason for the work. Confirm that the request belongs in this queue before assigning an owner. In the proceeds adjustment evidence queue, an item without a next action is treated as an exception.",
          "The record should show the source, the decision, and the surviving value in one place. Name the person who can close the question and the date by which the answer is needed. Give the case a stable identifier before any document is attached. Keep the original request so a later correction does not erase the reason for the work. The proceeds adjustment evidence case note should show what the closing record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The evidence set for proceeds adjustment evidence should join settlement statement, adjustment note, lender approval, and disbursement on one stable case reference. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Name the repository where sensitive evidence is held. For proceeds adjustment evidence, compare settlement statement with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. Mark missing evidence as missing, with a reason, rather than leaving a blank. The next reviewer should not have to ask which document is authoritative. Do not treat a screenshot as a substitute for the system record. The proceeds adjustment evidence close note cites the closing record, the approver, and the time of the final check.",
          "Do not treat a screenshot as a substitute for the system record. Link each value to the field or page that supports it. Name the owner for every open item, including items waiting on someone else. Compare the source and the destination values before drawing a conclusion. Apply the same proceeds adjustment evidence test to lender approval and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Write the proceeds adjustment evidence authority limit into the case template, including the amount, scope, and end date of any delegation. Record rejected and deferred requests as well as approvals. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The proceeds adjustment evidence record should let a second reviewer rebuild the decision from adjustment note and lender approval.",
          "A short written rule is easier to test than an unwritten habit. Preparation, comparison, and follow-up may sit with the assistant. If two roles share a queue, mark which one decides each item. If the team cannot reproduce the result from the record, the control is not finished. A sample proceeds adjustment evidence review checks settlement statement, adjustment note, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. Name the backup owner and the coverage window in advance. A short written rule is easier to test than an unwritten habit. Do not let a familiar requester bypass the approval boundary. The proceeds adjustment evidence reviewer records disbursement, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "A proceeds adjustment evidence status update should point to a verifiable event in the closing record, not to a feeling about progress. A short written rule is easier to test than an unwritten habit. A handoff is complete only when the receiver acknowledges it. A clean-looking status is not evidence that the underlying work is correct. A proceeds adjustment evidence exception keeps disbursement attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. Log the handoff time when a case crosses a shift. A case with no next action is an exception even if it says in progress. In this proceeds adjustment evidence case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Escalate an item that has waited past the written threshold. Check that the owner is actually available before assigning. A handoff is complete only when the receiver acknowledges it. Every proceeds adjustment evidence handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A repeated proceeds adjustment evidence exception becomes a reason code in the queue, not a story retold in each thread. A case that moves between owners should keep both owner periods visible. Do not rewrite the earlier record to match the later answer. The record should show the source, the decision, and the surviving value in one place. In the proceeds adjustment evidence queue, an item without a next action is treated as an exception.",
          "Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. Do not rewrite the earlier record to match the later answer. The next reviewer should not have to ask which document is authoritative. For proceeds adjustment evidence, the working file keeps settlement statement and adjustment note beside the decision note.",
          "Do not rewrite the earlier record to match the later answer. The record should show the source, the decision, and the surviving value in one place. A short written rule is easier to test than an unwritten habit. Check whether the exception came from a form, a rule, or a permission. For proceeds adjustment evidence, compare settlement statement with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Close proceeds adjustment evidence only when the destination value in the closing record, the approver, and the time of the final check are all visible. A short written rule is easier to test than an unwritten habit. Record the approximate value, the approver, and the final check time. Record the close reason with the same codes used in the exception queue. The proceeds adjustment evidence close note cites the closing record, the approver, and the time of the final check.",
          "Do not let a deadline expand a role beyond its written limit. Tie the close note to the original request and the final evidence. Record the close reason with the same codes used in the exception queue. Record the approximate value, the approver, and the final check time. The proceeds adjustment evidence case note should show what the closing record held at the time and who reviewed it.",
          "The record should show the source, the decision, and the surviving value in one place. If the destination is another team, require an acknowledgment. Record the approximate value, the approver, and the final check time. Name the owner for every open item, including items waiting on someone else. The proceeds adjustment evidence record should let a second reviewer rebuild the decision from adjustment note and lender approval."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The proceeds adjustment evidence review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. If the team cannot reproduce the result from the record, the control is not finished. Choose the sample from the export before the meeting. A clean-looking status is not evidence that the underlying work is correct. A sample proceeds adjustment evidence review checks settlement statement, adjustment note, and the surviving value in the closing record.",
          "The next reviewer should not have to ask which document is authoritative. Include a routine case, a reopened case, and a cross-owner handoff. Record the sample frame, the reviewer, and the criteria. The record should show the source, the decision, and the surviving value in one place. Apply the same proceeds adjustment evidence test to lender approval and to the value that survives in the closing record.",
          "Keep the prior procedure available for comparison. If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. Separate what was observed from what the team believes caused it. A proceeds adjustment evidence exception keeps disbursement attached and routes the question to the closing manager."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Label settlement statement and adjustment note with their versions so a later reviewer can tell a stale extract from a current one. Keep the note short enough to read with the case. Make the handoff readable by the next shift and the next auditor. Do not let a deadline expand a role beyond its written limit. In this proceeds adjustment evidence case, the record points to the closing record and names the closing manager as the decision owner.",
          "The record should show the source, the decision, and the surviving value in one place. The next reviewer should not have to ask which document is authoritative. Write the note so a reviewer can reconstruct the decision without a meeting. Name the owner and the date beside each decision. The proceeds adjustment evidence reviewer records disbursement, the owner, and the next action in one place.",
          "Keep the note short enough to read with the case. Name the owner for every open item, including items waiting on someone else. Keep the original request so a later correction does not erase the reason for the work. A case that moves between owners should keep both owner periods visible. In the proceeds adjustment evidence queue, an item without a next action is treated as an exception."
        ]
      }
    ],
    "sources": [
      {
        "label": "CFPB: closing disclosure",
        "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  },
  {
    "slug": "attorney-review-handoff-latency",
    "title": "Attorney review handoff latency",
    "summary": "A measurement protocol for attorney handoff latency in closing operations, with a frozen population and an evidence sample.",
    "cluster": "Document coordination",
    "publishedAt": "2026-11-05",
    "finding": "A reproducible count of attorney handoff latency records missing a required field, reported with its window and exclusions.",
    "thumbnail": "/thumbnails/november-05/attorney-review-handoff-latency.png",
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "For attorney handoff latency, the first step is to write the open decision, the requesting role, and the queue owner before anyone touches the closing record. Keep the original request so a later correction does not erase the reason for the work. The next reviewer should not have to ask which document is authoritative. Note the observation window; a case without a period cannot be compared later. For attorney handoff latency, compare review request with the destination value rather than relying on a status label.",
          "Use the same definition across the queue and the review so the counts agree. Name the person who can close the question and the date by which the answer is needed. The next reviewer should not have to ask which document is authoritative. Name the trigger that brought the case into the queue. The attorney handoff latency close note cites the closing record, the approver, and the time of the final check.",
          "Name the trigger that brought the case into the queue. Record the queue and the entity so the case cannot drift into another team's work. Name the owner for every open item, including items waiting on someone else. Separate the request from the decision, because a complete request is not an approval. Apply the same attorney handoff latency test to attorney note and to the value that survives in the closing record."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Attach review request and document set to the case, label their versions, and record the time each was observed. Preserve a conflicting value instead of overwriting the first one. A short written rule is easier to test than an unwritten habit. A case that moves between owners should keep both owner periods visible. The attorney handoff latency record should let a second reviewer rebuild the decision from document set and attorney note.",
          "A short written rule is easier to test than an unwritten habit. Keep the original document and the working copy in separate states. Do not treat a screenshot as a substitute for the system record. If the team cannot reproduce the result from the record, the control is not finished. A sample attorney handoff latency review checks review request, document set, and the surviving value in the closing record.",
          "A clean-looking status is not evidence that the underlying work is correct. Use the same case key in the queue and in the evidence extract. A short written rule is easier to test than an unwritten habit. Record who supplied each document and when it arrived. The attorney handoff latency reviewer records closing calendar, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "When attorney handoff latency changes a record in the closing record, the the closing manager approves and the preparer records the action; the two roles stay separate. A short written rule is easier to test than an unwritten habit. A delegation needs a scope, a limit, an end date, and a named backup. A clean-looking status is not evidence that the underlying work is correct. A attorney handoff latency exception keeps closing calendar attached and routes the question to the closing manager.",
          "The next reviewer should not have to ask which document is authoritative. The record should show the source, the decision, and the surviving value in one place. A role change should trigger a review of queue access. Record rejected and deferred requests as well as approvals. In this attorney handoff latency case, the record points to the closing record and names the closing manager as the decision owner.",
          "A clean-looking status is not evidence that the underlying work is correct. Write the authority limit into the case template. Keep emergency authority narrow and followed by a review note. A delegation needs a scope, a limit, an end date, and a named backup. Every attorney handoff latency handoff names the closing manager and the field in the closing record that will confirm the change."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "End the attorney handoff latency shift with an owner, a next action, and a due time on every open case. A case that moves between owners should keep both owner periods visible. Record one next action and one due time per open item. The record should show the source, the decision, and the surviving value in one place. In the attorney handoff latency queue, an item without a next action is treated as an exception.",
          "Name the owner for every open item, including items waiting on someone else. The record should show the source, the decision, and the surviving value in one place. Record one next action and one due time per open item. The next reviewer should not have to ask which document is authoritative. For attorney handoff latency, the working file keeps review request and document set beside the decision note.",
          "Record one next action and one due time per open item. The record should show the source, the decision, and the surviving value in one place. A short written rule is easier to test than an unwritten habit. Leave the next shift a queue that needs no chat history. For attorney handoff latency, compare review request with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "When the record does not match the surviving value, preserve both versions, record the observation times, and route one answerable question to the the closing manager. A short written rule is easier to test than an unwritten habit. Route one bounded question to the owner instead of negotiating in the queue. Keep the failed attempt and the correction in the same history. The attorney handoff latency close note cites the closing record, the approver, and the time of the final check.",
          "Do not let a deadline expand a role beyond its written limit. An escalation that ends in silence remains open. Keep the failed attempt and the correction in the same history. Route one bounded question to the owner instead of negotiating in the queue. The attorney handoff latency case note should show what the closing record held at the time and who reviewed it.",
          "The record should show the source, the decision, and the surviving value in one place. Do not rewrite the earlier record to match the later answer. Route one bounded question to the owner instead of negotiating in the queue. Name the owner for every open item, including items waiting on someone else. The attorney handoff latency record should let a second reviewer rebuild the decision from document set and attorney note."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The final attorney handoff latency check compares closing calendar with the surviving value in the closing record; a status label alone is not a close. If the team cannot reproduce the result from the record, the control is not finished. Compare the destination field, not only the activity log. A clean-looking status is not evidence that the underlying work is correct. A sample attorney handoff latency review checks review request, document set, and the surviving value in the closing record.",
          "The next reviewer should not have to ask which document is authoritative. Record the approximate value, the approver, and the final check time. Tie the close note to the original request and the final evidence. The record should show the source, the decision, and the surviving value in one place. Apply the same attorney handoff latency test to attorney note and to the value that survives in the closing record.",
          "Note the next review date before closing. If the team cannot reproduce the result from the record, the control is not finished. Do not let a deadline expand a role beyond its written limit. If the destination is another team, require an acknowledgment. A attorney handoff latency exception keeps closing calendar attached and routes the question to the closing manager."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Report attorney handoff latency open cases by age and dependency, not only the total, because a stable total can hide an aging tail. A stable total can hide a growing tail. Report a null result as clearly as a positive one. Do not let a deadline expand a role beyond its written limit. In this attorney handoff latency case, the record points to the closing record and names the closing manager as the decision owner.",
          "The record should show the source, the decision, and the surviving value in one place. The next reviewer should not have to ask which document is authoritative. Choose the sample from the export before the meeting. Check whether the definition changed during the period. The attorney handoff latency reviewer records closing calendar, the owner, and the next action in one place.",
          "A stable total can hide a growing tail. Name the owner for every open item, including items waiting on someone else. Keep the original request so a later correction does not erase the reason for the work. A case that moves between owners should keep both owner periods visible. In the attorney handoff latency queue, an item without a next action is treated as an exception."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Store sensitive attorney handoff latency evidence in the approved repository and keep only the reference and access path in the analysis note. Keep the original request so a later correction does not erase the reason for the work. Link the evidence to the exact field it supports. Do not let a deadline expand a role beyond its written limit. For attorney handoff latency, the working file keeps review request and document set beside the decision note.",
          "Make the handoff readable by the next shift and the next auditor. Write the note so a reviewer can reconstruct the decision without a meeting. Do not let a deadline expand a role beyond its written limit. Keep the source reference and the coded value in the same row. Every attorney handoff latency handoff names the closing manager and the field in the closing record that will confirm the change.",
          "Keep the note short enough to read with the case. Name the owner and the date beside each decision. A short written rule is easier to test than an unwritten habit. Record event time separately from entry time. The attorney handoff latency close note cites the closing record, the approver, and the time of the final check."
        ]
      }
    ],
    "sources": [
      {
        "label": "FTC: data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "GAO: internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "American Land Title Association",
        "url": "https://www.alta.org/"
      }
    ]
  }
];
