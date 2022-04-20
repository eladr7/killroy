export const GetTokenInfo = async (
    secretjs,
    token,
    address,
    token_id,
    auth
) => {
    const {key, permit} = auth;
    let balanceResponse;

    try {
        if (permit) {
            balanceResponse = await secretjs.queryContractSmart(token, {
                with_permit: {
                    permit,
                    // viewer: "address_of_the_querier_if_different_from_owner",
                    query: {
                        all_nft_info: {
                            token_id,
                        },
                    },
                    // limit: 10
                },
            });
        } else {
            balanceResponse = await secretjs.queryContractSmart(token, {
                all_nft_info: {
                    token_id
                },
            });
        }

        console.log(`nft details response: ${JSON.stringify(balanceResponse)}`);

        balanceResponse.token_id = token_id;
        return balanceResponse;
    } catch (e) {
        console.error(`Failed to get details: ${e}`);
        return undefined;
    }
}

//(secretjs: SigningCosmWasmClient | undefined, account: string | undefined, token: string | undefined, token_id: string, permit: Permit): Promise<GetTokenInfoResponse | undefined>
export const getNftDetails = async (secretjs, account, token, token_id, permit) => {
    if (secretjs) {
        return await GetTokenInfo(secretjs, token || "yo", account || "yo", token_id || "yo", {permit});
    }
    return undefined;
}

//(token_ids: string[], secretjs: SigningCosmWasmClient, account: string, token: string, permit: Permit)
export const getAllNftDetails = async (token_ids, secretjs, account, token, permit) => {
    let promises = []
    for (const id of token_ids) {
        promises.push({id, details: getNftDetails(secretjs, account, token, id, permit)});
    }

    return await Promise.all(promises);
}
