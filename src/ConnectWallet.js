import Swal from "sweetalert2";

export const sleep = (ms) => new Promise((accept) => setTimeout(accept, ms));

const connectWallet = async (props) => {
  while (
    !window.keplr ||
    !window.getEnigmaUtils ||
    !window.getOfflineSignerOnlyAmino
  ) {
    await sleep(100);
  }

  if (!window.keplr) {
    Swal.fire({
      title: "Missing Keplr",
      text: "Please install Keplr extension",
      icon: "warning",
    });
  } else {
    window.keplr.experimentalSuggestChain({
      rpc: props.chainRPC,
      rest: props.chainREST,
      chainId: props.chainId,
      chainName: props.chainId,
      stakeCurrency: {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
      },
      bip44: {
        coinType: 529,
      },
      bech32Config: {
        bech32PrefixAccAddr: "secret",
        bech32PrefixAccPub: "secret" + "pub",
        bech32PrefixValAddr: "secret" + "valoper",
        bech32PrefixValPub: "secret" + "valoperpub",
        bech32PrefixConsAddr: "secret" + "valcons",
        bech32PrefixConsPub: "secret" + "valconspub",
      },
      currencies: [
        {
          coinDenom: "SCRT",
          coinMinimalDenom: "uscrt",
          coinDecimals: 6,
          coinGeckoId: "secret",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "SCRT",
          coinMinimalDenom: "uscrt",
          coinDecimals: 6,
          coinGeckoId: "secret",
        },
      ],
      gasPriceStep: { low: 0.1, average: 0.25, high: 0.3 },
      features: ["secretwasm"],
    });
    await window.keplr.enable(props.chainId);

    const offlineSigner = window.getOfflineSigner(props.chainId);
    const enigmaUtils = window.getEnigmaUtils(props.chainId);

    const accounts = await offlineSigner.getAccounts();

    return [accounts[0].address, offlineSigner, enigmaUtils];
  }
};

export default connectWallet;
