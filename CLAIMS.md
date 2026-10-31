# Claims register

**Plan:** `PLAN-179-R3` (`ARB-321`); exit criterion E5 of `PLAN-173-R4`.

Every sentence on arbitercontrol.com that claims a capability has one row here. It names:

* the public page that explains it, on `docs.arbitercontrol.com` (a manual section; no use-case pages at launch, `OPERATOR_plan226` `D2`);
* the live case in the end-to-end suite (`ARB-324`) that proves it.

**A sentence goes live only when its row's live case passes.** Until then its status is `pending`, and the page is
not deployed.

**Whose run counts** (`OPERATOR_plan234` `D1`): a live case from a suite that reads the operator's `bypass-token`
(`merge-events`, `v1d`, `uc1`, `uc2`, `uc5`, `trusted`, `uc3`) passes a row only from the operator's own run. An
assistant's run of those suites is a development run: it is named here, but it never marks a row passed. The `live`
and `platform` suites are not affected.

| # | Where | Sentence (short form) | Use-case page | Live case (`ARB-324`) | Status |
|---|---|---|---|---|---|
| C1 | Hero, meta, How It Works | Checks every pull request that touches sensitive code against your policy, and allows, blocks or escalates it before it can merge, when GitHub requires its check | Policy-author manual P10 | UC1 allow, deny and escalate rows | pending |
| C2 | Hero, meta | Policy kept as code in your own GitHub | Policy-author manual P1 | `uc5` Z6 (ruleset removed → DENY `POLICY_REPO_UNPROTECTED`, restored → ALLOW) and Z6b (a bypass actor → DENY, restored → ALLOW) | passed: the operator's run `20261031T010608Z-2b61f112-e67487e2e06c` (image `2b61f112`, harness on `main` `97540752`; `ARB-320` comment `738b1f99`) |
| C3 | Hero | Whether a person or an AI agent wrote it | Policy-author manual P10 | UC1 rows with `actor_type` human and AI agent | pending |
| C4 | Hero, meta, Your Data | Runs in your own environment, with your own GitHub App and key | Administrator manual A4, A6 | Image row (self-hosted start on the test org's own App) | pending |
| C5 | How It Works | Reads the policy from your protected policy repository | Policy-author manual P1 | `uc5` Z6 (ruleset removed → DENY `POLICY_REPO_UNPROTECTED`, restored → ALLOW) and Z6b (a bypass actor → DENY, restored → ALLOW) | passed: the operator's run `20261031T010608Z-2b61f112-e67487e2e06c` (image `2b61f112`, harness on `main` `97540752`; `ARB-320` comment `738b1f99`) |
| C6 | How It Works | Checks who approved and which checks passed, from GitHub | Policy-author manual P10 | UC1 approval and check rows | pending |
| C7 | How It Works | The check says what is missing | Developer manual D2 | Any UC1 deny row (comment's three parts) | pending |
| C8 | How It Works | Deterministic, with no LLMs in the enforcement path | Security packet | Three checks (`OPERATOR_plan187` `D1`): the network-allowlist live case, the same-answer replay case, and the CI check for LLM libraries and model files | pending |
| C9 | How It Works | Each decision is recorded with the policy commit it used, the approvals and checks it counted, and its result | Administrator manual A19; data-rule page | An export row that shows the policy commit, counted approvals and result for an allow and a deny | pending |
| C10 | Use cases | UC1: protected paths need the named team's approval and passing checks | Policy-author manual P10 | UC1 rows, including dot-path cases (`ARB-332`) | pending |
| C11 | Use cases | UC2: your starter policy needs approval for a change under `.github/`; workflow changes need a security approval for their check results to count | Policy-author manual P10 | UC2 rows (`ARB-317`) | pending |
| C12 | Use cases | UC3: your starter policy needs a passing dependency check, from a protected workflow the pull request cannot change, and approval for dependencies and lockfiles | Starter policy, "Dependency changes" | UC3 live cases D1–D6 (`PLAN-194-R2`; `ARB-318`; harness ArbiterControl/arbiter#75): no trusted scan → DENY, passing scan → ALLOW, failing scan (npm, Go) → DENY, a faked ordinary check with both approvals → DENY `trusted_result_missing`, an unscanned manifest needs approval. Development run on `main` `44eb0375` (`20261029T183839Z-44eb0375-9237cf75c603`, an assistant's run; `OPERATOR_plan234` `D3`); counts once the operator's own run of the `uc3` suite passes | pending |
| C13 | Use cases | UC4: every pull request needs a passing secret scan from a protected workflow the pull request cannot change | Policy-author manual P11 | UC4 rows (`ARB-319`, `ARB-264`) | pending |
| C14 | Use cases | UC5: self-approval never counts; merges around Arbiter are recorded and alerted to your own webhook | Pull request author guide D4; administrator manual A16 | UC5 rows (`ARB-320`, `ARB-102`) | passed: the operator's runs `uc5` `20261031T010608Z-2b61f112-e67487e2e06c` and Z2 `20261031T014400Z-2b61f112-229f05e6932e` (`ARB-320` comments `738b1f99`, `09852630`), and `merge-events` V1–V7 `20261031T014855Z-2b61f112-07a3ec129d45` (harness at #79's head `5f5c74dd`; `ARB-324` comment `3c96a6fc`); all on image `2b61f112` |
| C15 | Your Data | Reads only the files a policy needs, while it evaluates, and never stores their contents | `PARTNER_DATA_RULE.md` summary | Data-rule row (no file contents in the database) | pending |
| C16 | Your Data | Decision records stay in your own database | `PARTNER_DATA_RULE.md` summary | Backup and restore B1 (`PLAN-206-R3`; ArbiterControl/arbiter#70): restore keeps the backup's decisions, drops a later one, `/health/status` ok | pending |

Each "Does not cover" line on the page repeats its use-case page's limit, and is not a claim.
