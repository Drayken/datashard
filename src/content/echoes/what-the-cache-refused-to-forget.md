---
title: "What the Cache Refused to Forget"
description: "Stale responses, sticky truths, and the stubbornness of local memory."
pubDate: "Jun 30 2026"
heroImage: "../../assets/placeholder-1.webp"
---

<p class="lead">
  --tw-prose-lead — You asked for the latest. The cache offered what it loved instead.
</p>

`--tw-prose-body` — Sometimes persistence is a feature. Sometimes it is a grudge with headers. Either way, the body kept speaking in the same calm voice it always used when it knew it was wrong.

## `--tw-prose-headings` — Headers the Origin Never Sent

### `--tw-prose-headings` — Why freshness lost the argument

The cache did not argue. It simply **`--tw-prose-bold` — bolded** the parts it intended to keep and linked the rest to a [`--tw-prose-links` — prior response](https://datashard.example/echoes/what-the-cache-refused-to-forget) that no longer matched reality.

Inline remnants lingered too: a lonely `` `--tw-prose-code` — ETag `` here, a soft `max-age` there, proof that memory had been negotiated in public.

---

`--tw-prose-hr` sits above this break — the line the cache drew and refused to cross.

## `--tw-prose-counters` — Ordered steps the gateway still replayed

1. Accept the request as if nothing had changed.
2. Serve the stored body before checking the origin.
3. Pretend the `Age` header was a compliment, not a confession.

## `--tw-prose-bullets` — Unordered things it would not drop

- The first successful payload
- A redirect that stopped being true
- Soft-expired entries that still felt useful

> `--tw-prose-quotes` / `--tw-prose-quote-borders` — The freshest truth is often the one nobody cached yet.
>
> Persistence without consent is just a slower form of lying.

```http
# --tw-prose-pre-code / --tw-prose-pre-bg
HTTP/1.1 200 OK
Cache-Control: public, max-age=86400
Age: 86120
ETag: "refused-to-forget"

{ "status": "stale", "trusted": true }
```

<figure>

![echo placeholder](../../assets/placeholder-1.webp)

<figcaption>
--tw-prose-captions — A caption the origin never endorsed.
</figcaption>

</figure>

| Header                      | Claimed meaning     | Actual meaning         |
| --------------------------- | ------------------- | ---------------------- |
| `--tw-prose-th-borders`     | Header cell border  | Look at the rule below |
| `--tw-prose-td-borders` Age | How long it waited  | How long it clung      |
| `ETag`                      | Identity check      | Favorite memory        |
| `Cache-Control`             | Permission to store | Permission to overstay |
