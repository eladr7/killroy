import Swal from "sweetalert2";

export const sleep = (ms) => new Promise((accept) => setTimeout(accept, ms));

const connectWallet = async (props) => {

    const chainId = props.chainId;
    const chainRPC = props.chainRPC;
    const chainREST = props.chainREST;

    // while (
    //     !window.keplr ||
    //     !window.getEnigmaUtils ||
    //     !window.getOfflineSignerOnlyAmino
    // ) {
    //     await sleep(100);
    // }

    if (!window.keplr) {
        Swal.fire({
            title: 'Missing Keplr',
            text: 'Please install Keplr extension',
            icon: 'warning'
        })
    } else {

        await window.keplr.experimentalSuggestChain({
            chainId: chainId,
            chainName: chainId,
            rpc: chainRPC,
            rest: chainREST,
            bip44: {
                coinType: 529
            },
            bech32Config: {
                bech32PrefixAccAddr: "secret",
                bech32PrefixAccPub: "secretpub",
                bech32PrefixValAddr: "secretvaloper",
                bech32PrefixValPub: "secretvaloperpub",
                bech32PrefixConsAddr: "secretvalcons",
                bech32PrefixConsPub: "secretvalconspub"
            },
            currencies: [
                {
                    coinDenom: "SCRT",
                    coinMinimalDenom: "uscrt",
                    coinDecimals: 6,
                    coinGeckoId: "secret"
                }
            ],
            feeCurrencies: [
                {
                    coinDenom: "SCRT",
                    coinMinimalDenom: "uscrt",
                    coinDecimals: 6,
                    coinGeckoId: "secret"
                },
            ],
            stakeCurrency: {
                coinDenom: "SCRT",
                coinMinimalDenom: "uscrt",
                coinDecimals: 6,
                coinGeckoId: "secret"
            },
            coinType: 529,
            gasPriceStep: {
                low: 0.1,
                average: 0.25,
                high: 0.3
            },
        });

        await window.keplr.enable(chainId);

        const offlineSigner = window.getOfflineSigner(chainId);
        const enigmaUtils = window.getEnigmaUtils(chainId);

        const accounts = await offlineSigner.getAccounts()

        return [accounts[0].address, offlineSigner, enigmaUtils]

    }
}

export default connectWallet;
