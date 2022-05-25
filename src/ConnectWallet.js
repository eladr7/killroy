import Swal from "sweetalert2";

export const sleep = (ms) => new Promise((accept) => setTimeout(accept, ms));

const connectWallet = async (props) => {
  const chainId = "pulsar-2";
  const chainRPC = "http://rpc.pulsar.griptapejs.com:26657";
  const chainREST = "http://rpc.pulsar.griptapejs.com:1317";

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
    const CHAIN_ID = "pulsar-2";
    debugger;
    window.keplr.experimentalSuggestChain({
      rpc: "http://rpc.pulsar.griptapejs.com:26657",
      rest: "http://rpc.pulsar.griptapejs.com:1317",
      chainId: CHAIN_ID,
      chainName: "pulsar-2",
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
    await window.keplr.enable(chainId);

    const offlineSigner = window.getOfflineSigner(chainId);
    const enigmaUtils = window.getEnigmaUtils(chainId);

    const accounts = await offlineSigner.getAccounts();

    return [accounts[0].address, offlineSigner, enigmaUtils];
  }
};

export default connectWallet;
