# Claims register

**Plan:** `PLAN-179-R3` (`ARB-321`); exit criterion E5 of `PLAN-173-R4`.

Every sentence on arbitercontrol.com that claims a capability has one row here. It names:

* the use-case page that explains it, on `docs.arbitercontrol.com`;
* the live case in the end-to-end suite (`ARB-324`) that proves it.

**A sentence goes live only when its row's live case passes.** Until then its status is `pending`, and the page is
not deployed.

| # | Where | Sentence (short form) | Use-case page | Live case (`ARB-324`) | Status |
|---|---|---|---|---|---|
| C1 | Hero, meta | Checks every pull request that touches sensitive code against your policy, and allows, blocks or escalates it before it can merge | UC1 | UC1 allow, deny and escalate rows | pending |
| C2 | Hero, meta | Policy kept as code in your own GitHub | Policy-author manual P1 | Policy-repo trust rows (unprotected repo denied) | pending |
| C3 | Hero | Whether a person or an AI agent wrote it | UC1 | UC1 rows with `actor_type` human and AI agent | pending |
| C4 | Hero, meta, Your Data | Runs in your own environment, with your own GitHub App and key | Administrator manual A2, A6 | Image row (self-hosted start on the test org's own App) | pending |
| C5 | How It Works | Reads the policy from your protected policy repository | Policy-author manual P1 | Policy-repo trust rows | pending |
| C6 | How It Works | Checks who approved and which checks passed, from GitHub | UC1 | UC1 approval and check rows | pending |
| C7 | How It Works | The check says what is missing | Developer manual D2 | Any UC1 deny row (comment's three parts) | pending |
| C8 | How It Works | Deterministic, with no LLMs in the enforcement path | Security packet | Three checks (`OPERATOR_plan187` `D1`): the network-allowlist live case, the same-answer replay case, and the CI check for LLM libraries and model files | pending |
| C9 | How It Works | Each decision is recorded with its policy commit, evidence and result | Administrator manual A17 | Restart, backup and diagnostics rows | pending |
| C10 | Use cases | UC1: protected paths need the named team's approval and passing checks | UC1 | UC1 rows, including dot-path cases (`ARB-332`) | pending |
| C11 | Use cases | UC2: a change under `.github/` needs approval; workflow changes need a security approval for their check results to count | UC2 | UC2 rows (`ARB-317`) | pending |
| C12 | Use cases | UC3: dependencies and lockfiles need a passing dependency check from a protected workflow, and approval | UC3 | UC3 rows (`ARB-318`, `ARB-264`) | pending |
| C13 | Use cases | UC4: every pull request needs a passing secret scan from a protected workflow | UC4 | UC4 rows (`ARB-319`, `ARB-264`) | pending |
| C14 | Use cases | UC5: self-approval never counts; merges around Arbiter are recorded and alerted | UC5 | UC5 rows (`ARB-320`, `ARB-102`) | pending |
| C15 | Your Data | Reads only the files a policy needs, while it evaluates, and never stores their contents | `PARTNER_DATA_RULE.md` summary | Data-rule row (no file contents in the database) | pending |
| C16 | Your Data | Decision records stay in your own database | `PARTNER_DATA_RULE.md` summary | Backup row | pending |

Each "Does not cover" line on the page repeats its use-case page's limit, and is not a claim.
