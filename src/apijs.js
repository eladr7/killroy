Deployment on testnet -

Addresses -

NFT address: secret15nf83dftyrtrlguvzxmk7cdjaryv4fs7x7avpg
Minting address: secret1h2zadahnmk2ltxl8vq54vt8ytkmp4cqsw27sd9
LGND address: secret13vwtx4h3f4m226r2ga8aja0vsrv68yq3jnvt75


How to mint:

    You send LGND to the minting contract which handles everything for you. The msg field specifies how many nfts you want to buy, and whether you want to buy as a gift for a different address (not necessary in this case).
The minting price on testnet is 1 ulgnd

Code example:
    async function mintNftsWithSnip(
        secretNetwork,
        nftContract,
        snipContract,
        priceForEach,
        amountToBuy,
        buyFor = null,
    ) {
        let msg = Buffer.from(
            JSON.stringify({
                mint: {
                    amount_to_mint: amountToBuy,
                    mint_for: buyFor || secretNetwork.address,
                },
            }),
        ).toString("base64");

        try {
            let tx = await secretNetwork.tx.snip20.send(
                {
                    sender: secretNetwork.address,
                    contractAddress: snipContract,
                    msg: {
                        send: {
                            recipient: nftContract,
                            amount: (priceForEach * amountToBuy).toString(),
                            msg,
                        },
                    },
                },
                {
                    gasLimit: 500_000,
                    gasPriceInFeeDenom: 0.25,
                },
            );
            console.log(
                `Gas used for mintNfts (x${amountToBuy}): ${JSON.stringify(
                    tx.gasUsed,
                )}`,
            );
            return tx.code === 0;
        } catch (e) {
            console.log(Failed to mint ${e});
        }
        return null;
    }

    Backend services (just uses mock data for now till we get the real stuff)

### IsWhitelisted

GET /api/IsWhitelisted?address={}

    Returns whether the user is whitelisted for this mint.
    Does not return the amount of tokens available to him

#### Request

##### Query Params

| param   | type   | function                                     | required |
|---------|--------|----------------------------------------------|----------|
| address | string | Bech32 address to check whitelist status for | true     |

##### Example

bash
curl 'https://cryptids-testnet.azurewebsites.net/api/iswhitelisted?address=secret1p0vgghl8rw4ukzm
7geyy0f0tl29glxrtnlalue&code=zia7kDoux1zpLWsflavaXR/mfI9rTJjQRmRiJ9bPvBZOwNlqIaOvmQ=='


##### Response

| status | type                           | function                                                           |
|--------|--------------------------------|--------------------------------------------------------------------|
| 200    | body: { whitelist: boolean } | Request successful. Returns whether or not the user is whitelisted |
| 400    | body: { error: string }      | Error querying status                                              |

##### Example

json
{
    "whitelist": true
}

### AttributeStatistics

GET /api/AttributeStatistics?...

Returns the rarity of attributes. Supports querying one of each type of attribute.
    Returns their score and rarity

#### Request

##### Query Params

| param      | type   | function                  | required |
|------------|--------|---------------------------|----------|
| background | string | Background attribute type | false    |
| body       | string | body attribute type       | false    |
| hairs      | string | hairs attribute type      | false    |
| eyes       | string | eyes attribute type       | false    |
| rhand      | string | Right Hand attribute type | false    |
| lhand      | string | Left Hand attribute type  | false    |
| wear       | string | Wear attribute type       | false    |
| horns      | string | Horns attribute type      | false    |

##### Example

bash
curl -X GET 'https://cryptids-testnet.azurewebsites.net/api/attributestatistics?background=white&lhand=none&code=p5CbBJPQfYHjNq/PxjAEAsebbVjOgP2h2qkk8zQyvd1KDxhLynQgeg=='

#### Response

| status | type                                                                    | function                                                                                                            |
|--------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 200    | body: { attributes: [attribute]: {score: float, percentage: float } } | Request successful. For each requested attribute will return their corresponding score and percentage of appearance |
| 400    | body: { error: string }                                               | Error                                                                                                               |


##### Example
json
{
    "attributes": {
    "background": {
        "white": {
            "score": "26",
                "percentage": "50"
        }
    },
    "lhand": {
        "none": {
            "score": "63",
                "percentage": "51"
        }
    }
}
}