# Optional digital collectible layer — design only

The 3D products must remain usable and purchasable without a wallet. An NFT would be a separately described collectible associated with an Altair edition; it is not automatically copyright ownership, exclusivity, an investment, or a licence to redistribute the asset.

## Recommended scope

Keep ordinary marketplace sales and collectible sales separate. A Fab or other store purchase must retain the rights and access promised under its actual licence; it must not become dependent on an unrelated token. Choose whether a collectible grants only a certificate/artwork, a specific download entitlement, or both, and write that clearly before implementation.

An ERC-1155 edition is a reasonable candidate for limited numbered editions of one scene; ERC-721 fits unique one-of-one works. Chain, wallet, edition size, price and custody remain owner decisions. No contract, wallet connection, mint, payment or token is deployed by this work.

## Architecture to implement after the decisions

1. Store public teaser media and a versioned metadata document with a checksum. The metadata must identify the exact asset release, creator credit, included rights, limitations and licence URL.
2. Keep paid editable files in private object storage. Public IPFS metadata or a hash does not keep an attached paid file private.
3. Authenticate download requests with a short-lived wallet challenge containing domain, URI, nonce, issued time and expiry. Verify the signature, nonce and current ownership server-side. Never request seed phrases or private keys.
4. Issue expiring signed download URLs only after ownership checks and rate limits. Specify what happens to download rights when a token is transferred, and how prior downloads and licences are treated.
5. Test token transfer, stale ownership caches, replayed challenges, rejected signatures and unavailable chain providers on a test network.
6. Independently review contract permissions, mint limits, metadata updates, storage persistence and recovery before any production launch.

Example public metadata fields: name, edition, image, external_url, creator, asset_version, asset_sha256, licence_url, rights_summary. Do not embed private download URLs or credentials in token metadata.

Secondary-sale royalties may not be enforced by every marketplace. Do not promise ongoing royalties, price appreciation, guaranteed resale, permanent hosting without a funded plan, or exclusive ownership when ordinary copies are also sold.

The catalogue deliberately has no inactive “Mint” button or wallet prompt. Collectible functionality will be a distinct later release after its terms and infrastructure are concrete.
