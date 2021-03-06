import "./css/reset.css";
import "./App.css";
import "./css/style.css";
import "./css/responsive.css";

import { useEffect, useState } from "react";
import connectWallet, { sleep } from "./ConnectWallet";
import { SigningCosmWasmClient } from "secretjs";
import MiddleEarth from "./MiddleEarth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLocation } from "react-router-dom";

import "./css/sweetalert-theme.css";
import Swal from "sweetalert2";

import { getFromLS, setToLS } from "./storage";
//import {getAllNftDetails} from "./components/snip721";
import { db } from "./firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

const chainInfo = {
  client: null,

  // Testnet Pulsar-2
  chainId: process.env["REACT_APP_CHAIN_ID"],
  chainRPC: process.env["REACT_APP_CHAIN_RPC"],
  chainREST: process.env["REACT_APP_CHAIN_REST"],
  randomMintContractAddress: process.env["REACT_APP_MINTING_CONTRACT"],
  snip20ContractAddress: process.env["REACT_APP_TOKEN_CONTRACT"],
  nftContract: process.env["REACT_APP_NFT_CONTRACT"],
  priceForEach: process.env["REACT_APP_MINT_PRICE"],
  backendService: process.env["REACT_APP_BACKEND_SERVICE"],
  //-----//

  // Mainnet Secret-4
  // chainId: "secret-4",
  // chainRPC: "https://rpc-secret.scrtlabs.com/secret-4/rpc",
  // chainREST: "https://api.scrt.network",
  // randomMintContractAddress: "",
  // snip20ContractAddress: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
  // nftContract: "",
  // priceForEach: "1000000",
  //-----//

  clientAddress: null,
  permit: null,
  balancePermit: null,
  offlineSigner: null,
};

const traitTypeFormat = (description, trait) => {
  if (trait !== "Background") {
    const lowerDesc = description.toLowerCase();
    let type;
    if (lowerDesc.includes("bull")) {
      type = "bull_";
    } else if (lowerDesc.includes("female")) {
      type = "female_";
    } else if (lowerDesc.includes("male")) {
      type = "male_";
    }

    return type + trait.toLowerCase().replace(/ /g, "_");
  } else {
    return trait.toLowerCase();
  }
};

function capitalizeWords(arr) {
  return arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  });
}

let traitTypeToDisplay = (trait) => {
  if (trait === "background") {
    return "Background";
  }

  trait = trait.split("_");

  if (trait[0] === "bull" || trait[0] === "male" || trait[0] === "female") {
    trait.shift();
  }

  const capitalized = capitalizeWords(trait);

  return capitalized.join(" ");
};

function App() {
  const [addressContainer, setAddressContainer] = useState(
    <a className="ctn" href="#popup2" onClick={() => handleConnectButton()}>
      Connect Wallet
    </a>
  );
  const [sscrtBalance, setSscrtBalance] = useState(0);
  const [sscrtWrapper, setSscrtWrapper] = useState(
    sscrtBalance / 1000000 + " $sSCRT"
  );
  const [scrtBalance, setScrtBalance] = useState("0");
  const [scrtWrapper, setScrtWrapper] = useState(
    scrtBalance / 1000000 + " $SCRT"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nftCollection, setNftCollection] = useState([]);
  //const [amounttoBuy, setAmounttoBuy] = useState(1);
  const [mintVisibleClass, setMintVisibleClass] = useState("");
  const [mintCount, setMintCount] = useState(1);
  const [totalMints, setTotalMints] = useState(0);

  let location = useLocation();
  useEffect(() => {
    onSnapshot(collection(db, "remaining-mints"), async (snapshot) => {
      if (snapshot.docs.length > 0) {
        setTotalMints(snapshot.docs[0].data().remaining);
      }
    });
    // console.log(totalMints)
  }, [totalMints]);

  // useEffect(() => {
  //   if (chainInfo.client) {
  //     const countMsg = {
  //       remaining: {},
  //     };
  //     chainInfo.client
  //       .queryContractSmart(chainInfo.randomMintContractAddress, countMsg)
  //       .then(async (result) => {
  //         handleSetCounter(result.remaining);
  //       });
  //   }
  // }, [chainInfo.client]);

  useEffect(() => {
    if (location.pathname === "/mycollection") {
      fetchMyCollection();
    }
  }, [location.pathname]);

  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].replaceWith(acc[i].cloneNode(true));
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    window.addEventListener("click", ({ target }) => {
      const isClosest = target.closest(".popup");

      if (!isClosest) {
        if (
          document.getElementById("popup1").classList.contains("mint-visible")
        ) {
          document.getElementById("popup1").classList.remove("mint-visible");
        }
      }
    });

    const connect = async () => {
      await handleConnect();
    };
    // connect();
    window.addEventListener("keplr_keystorechange", async () => {
      await handleConnect();
    });
  }, []);

  const handleSetCounter = async (count) => {
    const remaining_mints_db = doc(
      db,
      "remaining-mints",
      "austin-remaining-mints"
    );
    await updateDoc(remaining_mints_db, {
      remaining: count,
    });
    setTotalMints(count);
  };

  const toggleMobileMenu = (menu) => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleConnectButton = async () => {
    await handleConnect();
    await getBalance();
  };

  const handleConnect = async () => {
    let enigmaUtils;
    [chainInfo.clientAddress, chainInfo.offlineSigner, enigmaUtils] =
      await connectWallet(chainInfo);
    setAddressContainer(
      <a onClick={() => getBalance()} className="ctn" href="#popup2">
        {chainInfo.clientAddress.slice(0, 9) +
          "..." +
          chainInfo.clientAddress.slice(-3)}
      </a>
    );
    chainInfo.client = new SigningCosmWasmClient(
      chainInfo.chainREST,
      chainInfo.clientAddress,
      chainInfo.offlineSigner,
      enigmaUtils
    );
  };

  const getBalance = async () => {
    setSscrtWrapper(
      <Skeleton
        width={150}
        height={30}
        highlightColor={"#1d040e"}
        baseColor={"#f95050"}
      />
    );
    setScrtWrapper(
      <Skeleton
        width={150}
        height={30}
        highlightColor={"#1d040e"}
        baseColor={"#f95050"}
      />
    );
    // if (getFromLS(`balancePermit-${chainInfo.clientAddress}${chainInfo.chainId}`)) {
    //   const { signature } = await window.keplr.signAmino(
    //       chainInfo.chainId,
    //       chainInfo.clientAddress,
    //       {
    //         chain_id: chainInfo.chainId,
    //         account_number: "0", // Must be 0
    //         sequence: "0", // Must be 0
    //         fee: {
    //           amount: [{ denom: "uscrt", amount: "0" }], // Must be 0 uscrt
    //           gas: "1", // Must be 1
    //         },
    //         msgs: [
    //           {
    //             type: "query_permit", // Must be "query_permit"
    //             value: {
    //               permit_name: "gyld-nft6",
    //               allowed_tokens: [chainInfo.snip20ContractAddress],
    //               permissions: ["balance", "owner"],
    //             },
    //           },
    //         ],
    //         memo: "", // Must be empty
    //       },
    //       {
    //         preferNoSetFee: true, // Fee must be 0, so hide it from the user
    //         preferNoSetMemo: true, // Memo must be empty, so hide it from the user
    //       }
    //   );
    //   chainInfo.balancePermit = signature;
    //   setToLS(`balancePermit-${chainInfo.clientAddress}${chainInfo.chainId}`, signature);
    // }

    let viewingKey;
    let usd = 0;
    //fetch api
    const url =
      "https://min-api.cryptocompare.com/data/price?fsym=SCRT&tsyms=USD";

    try {
      const response = await fetch(url);
      const data = await response.json();
      usd = data.USD;
    } catch (error) {
      console.log(`error fetching price: ${error}`);
    }

    let tries = 0;
    while (true) {
      tries += 1;
      if (window?.keplr) {
        try {
          //console.log(`trying to get viewing key`);
          viewingKey = await window.keplr.getSecret20ViewingKey(
            chainInfo.chainId,
            chainInfo.snip20ContractAddress
          );
        } catch (error) {}
        if (viewingKey || tries === 3) {
          break;
        }
      }
      await sleep(100);
    }

    //console.log(`Got viewing key: ${viewingKey}`);

    if (viewingKey) {
      const msg = {
        balance: {
          address: chainInfo.clientAddress,
          key: viewingKey,
        },
      };
      getSscrtBalance(msg, usd);
    } else {
      setSscrtWrapper(
        <span
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "0 0.6em 0 0.3em",
            border: "solid",
          }}
          onClick={async () => {
            if (window?.keplr) {
              await window.keplr.suggestToken(
                chainInfo.chainId,
                chainInfo.snip20ContractAddress
              );
            }
          }}
        >
          Add sSCRT to Keplr
        </span>
      );
    }

    // const msg = {
    //   with_permit: {
    //     query: {
    //       balance: {
    //         address: chainInfo.clientAddress
    //       }
    //     },
    //     permit: {
    //       params: {
    //         permit_name: "gyld-nft6",
    //         allowed_tokens: [chainInfo.snip20ContractAddress],
    //         chain_id: chainInfo.chainId,
    //         permissions: ["balance", "owner"],
    //       },
    //       signature: getFromLS(`balancePermit-${chainInfo.clientAddress}${chainInfo.chainId}`),
    //     }
    //   }
    // }

    const account = await chainInfo.client.getAccount(chainInfo.clientAddress);
    const scrtBal = account.balance[0].amount;
    setScrtBalance(parseFloat(scrtBal).toFixed(4));
    setScrtWrapper(
      (parseFloat(scrtBal) / 1000000).toFixed(4) +
        " SCRT ($" +
        ((parseFloat(scrtBal) / 1000000) * usd).toFixed(2) +
        ")"
    );
  };

  const getSscrtBalance = async (msg, usd) => {
    const balance = await chainInfo.client.restClient.queryContractSmart(
      chainInfo.snip20ContractAddress,
      msg
    );
    setSscrtBalance(balance.balance.amount);
    setSscrtWrapper(
      (parseFloat(balance.balance.amount) / 1000000).toFixed(4) +
        " sSCRT ($" +
        ((parseFloat(balance.balance.amount) / 1000000) * usd).toFixed(2) +
        ")"
    );
  };

  const fetchMyCollection = async () => {
    // hack to hide the mint popup
    // hideMintSuccess();

    //mock nft data
    if (!window.keplr) {
      Swal.fire({
        title: "Missing Keplr",
        text: "Please install Keplr extension",
        icon: "warning",
      });
      return false;
    } else {
      if (chainInfo.clientAddress === null) {
        const accounts = await window
          .getOfflineSigner(chainInfo.chainId)
          .getAccounts();
        chainInfo.clientAddress = accounts[0].address;
      }

      // console.log(`permit for address: ${chainInfo.clientAddress}`);

      let permit = undefined;
      try {
        permit = getFromLS(
          `${chainInfo.clientAddress}${chainInfo.nftContract}`
        );
      } catch (_e) {
        // do nothing
      }

      // console.log(`permit: ${JSON.stringify(permit)}`);

      while (!chainInfo.client) {
        await sleep(50);
      }
      if (!permit) {
        const { signature } = await window.keplr.signAmino(
          chainInfo.chainId,
          chainInfo.clientAddress,
          {
            chain_id: chainInfo.chainId,
            account_number: "0", // Must be 0
            sequence: "0", // Must be 0
            fee: {
              amount: [{ denom: "uscrt", amount: "0" }], // Must be 0 uscrt
              gas: "1", // Must be 1
            },
            msgs: [
              {
                type: "query_permit", // Must be "query_permit"
                value: {
                  permit_name: "gyld-nft6",
                  allowed_tokens: [chainInfo.nftContract],
                  permissions: ["balance", "owner"],
                },
              },
            ],
            memo: "", // Must be empty
          },
          {
            preferNoSetFee: true, // Fee must be 0, so hide it from the user
            preferNoSetMemo: true, // Memo must be empty, so hide it from the user
          }
        );
        permit = signature;
        setToLS(`${chainInfo.clientAddress}${chainInfo.nftContract}`, permit);
      }
      //setModalContent(() => (<div className="dog-loader-test">Checking your dogs...</div>))
      Swal.fire({
        title: "Checking...",
        didOpen: () => {
          Swal.showLoading();
        },
      });

      let tokens = [];
      try {
        tokens = await chainInfo.client.queryContractSmart(
          chainInfo.nftContract,
          {
            with_permit: {
              query: {
                tokens: {
                  owner: chainInfo.clientAddress,
                  limit: 4444,
                },
              },
              permit: {
                params: {
                  permit_name: "gyld-nft6",
                  allowed_tokens: [chainInfo.nftContract],
                  chain_id: chainInfo.chainId,
                  permissions: ["balance", "owner"],
                },
                signature: permit,
              },
            },
          }
        );
      } catch (e) {
        console.log(e);
        Swal.fire({
          title: "Error Signing Permit",
          text: e,
          icon: "error",
        });
        return false;
      }
      const allTokens = tokens.token_list.tokens;

      if (allTokens.length < 1) {
        Swal.fire({
          title: "You have no NFTs yet!",
          didOpen: () => {
            Swal.hideLoading();
          },
        });
        return false;
      }
      Swal.fire({
        title: "Acquiring...",
        didOpen: () => {
          Swal.showLoading();
        },
      });

      let myTokens = [];

      for (let i = 0; i < allTokens.length; i++) {
        let tokenFromCache = getFromLS(
          `${chainInfo.nftContract}-${allTokens[i]}`
        );

        if (!tokenFromCache) {
          const msg = {
            with_permit: {
              query: {
                nft_dossier: {
                  token_id: allTokens[i],
                },
              },
              permit: {
                params: {
                  permit_name: "gyld-nft6",
                  allowed_tokens: [chainInfo.nftContract],
                  chain_id: chainInfo.chainId,
                  permissions: ["balance", "owner"],
                },
                signature: permit,
              },
            },
          };
          let singleToken =
            await chainInfo.client.restClient.queryContractSmart(
              chainInfo.nftContract,
              msg
            );
          // console.log(dog)
          singleToken["token_id"] = allTokens[i];
          setToLS(`${chainInfo.nftContract}-${allTokens[i]}`, singleToken);
          myTokens.push(singleToken);
        } else {
          myTokens.push(tokenFromCache);
        }
      }
      if (myTokens.length > 0) {
        // console.log(`tokens: ${JSON.stringify(myTokens)}`)
        Swal.close();

        for (let i = 0; i < myTokens.length; i++) {
          let data = {
            attributes: [],
          };
          try {
            // // todo: remove this when working with real data
            // myTokens[i].nft_dossier.public_metadata.extension.attributes = [{
            //   trait_type: "Background",
            //   value: "Night"
            // },{
            //   trait_type: "Bottom Hand",
            //   value: "Hammer"
            // },{
            //   trait_type: "Head",
            //   value: "Ram Horns White"
            // }];
            // myTokens[i].nft_dossier.public_metadata.extension.description = "Bull Bigfoot #1";

            let attrs = myTokens[
              i
            ].nft_dossier.public_metadata.extension.attributes
              .map((attr) => {
                if (attr?.trait_type && attr?.value) {
                  const traitType = traitTypeFormat(
                    myTokens[i].nft_dossier.public_metadata.extension
                      .description,
                    attr.trait_type
                  );

                  return `${traitType}=${attr.value}`;
                }
              })
              .reduce(
                (previousValue, currentValue) =>
                  `${previousValue}&${currentValue}`
              );
            //construct the URL according to the attributes
            let url = `${chainInfo.backendService}/attributestatistics?${attrs}`;

            const response = await fetch(url);
            data = await response.json();
          } catch (error) {
            console.log(error);
          }

          // reformat types (ugh)
          data.attributes = data.attributes.map((attr) => {
            return {
              score: attr.score,
              percentage: attr.percentage,
              type: traitTypeToDisplay(attr.type),
              value: attr.value,
            };
          });
          let entranceMnemonic = myTokens[
            i
          ].nft_dossier.private_metadata.extension.attributes.find(
            (attribute) => attribute.trait_type === "entrance_mnemonic"
          );
          myTokens[i].entranceMnemonic = entranceMnemonic["value"]; //save scores as another object to use in the list

          myTokens[i].scores = data.attributes; //save scores as another object to use in the list

          try {
            //construct the URL according to the attributes
            let url = `${chainInfo.backendService}/tokenstatistics?token=${myTokens[i].token_id}`;

            const response = await fetch(url);
            data = await response.json();
          } catch (error) {
            console.log(error);
          }
          myTokens[i].totals = data.score; //save scores as another object to use in the list
        }
        setNftCollection(myTokens);
      } else {
        Swal.fire({
          title: "You have no NFTs yet!",
          didOpen: () => {
            Swal.hideLoading();
          },
        });
      }
    }
  };

  //   const fetchMyCollection = async () => {
  //     //mock nft data
  //     //Data should be fetched from the contract and saved into the nftData array
  //     let permit = chainInfo.permit;
  //
  //     if (!permit) {
  //       const { signature } = await window.keplr.signAmino(
  //           chainInfo.chainId,
  //           chainInfo.clientAddress,
  //           {
  //             chain_id: chainInfo.chainId,
  //             account_number: "0", // Must be 0
  //             sequence: "0", // Must be 0
  //             fee: {
  //               amount: [{ denom: "uscrt", amount: "0" }], // Must be 0 uscrt
  //               gas: "1", // Must be 1
  //             },
  //             msgs: [
  //               {
  //                 type: "query_permit", // Must be "query_permit"
  //                 value: {
  //                   permit_name: "nft-view-permit",
  //                   allowed_tokens: [chainInfo.nftContract],
  //                   permissions: ["owner"],
  //                 },
  //               },
  //             ],
  //             memo: "", // Must be empty
  //           },
  //           {
  //             preferNoSetFee: true, // Fee must be 0, so hide it from the user
  //             preferNoSetMemo: true, // Memo must be empty, so hide it from the user
  //           }
  //       );
  //       chainInfo.permit = {signature, params: {
  //           permit_name: "nft-view-permit",
  //           allowed_tokens: [chainInfo.nftContract],
  //           permissions: ["owner"],
  //           chain_id: chainInfo.chainId
  //       }};
  //     }
  //
  //     if (!chainInfo.permit) {
  //       console.log("failed to save permit`);
  //       return;
  //     }
  //
  //     const tokens = await chainInfo.client.restClient.queryContractSmart(chainInfo.nftContract, {
  //       with_permit: {
  //         permit: chainInfo.permit,
  //         query: {
  //           tokens: {
  //             owner: chainInfo.clientAddress,
  //           },
  //         },
  //         // limit: 10
  //       },
  //     });
  //
  //     let token_ids = tokens?.token_list?.tokens;
  //
  //     if (!token_ids) {
  //       return;
  //     }
  //     const details = await getAllNftDetails(token_ids, chainInfo.client, chainInfo.clientAddress, chainInfo.nftContract, permit);
  //
  //     console.log(`details: ${JSON.stringify(details)}`);
  // //const nftData = [
  // //       {
  // //         id: "#4352",
  // //         name: `NFT #${details.id}`,
  // //         details: "white",
  // //         lhand: "none"
  // //       },
  // //       {
  // //         name: "NFT 2",
  // //         id: "#2548",
  // //         background: "green",
  // //         lhand: "Sword"
  // //       },
  // //       {
  // //         name: "NFT 3",
  // //         id: "#2548",
  // //         background: "yellow",
  // //         lhand: "Axe"
  // //       }
  // //     ];
  //     let nftData = details.map(item => {
  //       return {
  //         id: item.id,
  //         name: item.all_nft_info.info.name,
  //         attributes: item.all_nft_info.info.attributes,
  //         image: item.all_nft_info.info.extension.image
  //       };
  //     });
  //
  //     for (let i = 0; i < nftData.length; i++) {
  //       let data = {
  //         attributes: []
  //       }
  //       try {
  //         //construct the URL according to the attributes
  //         let code = "p5CbBJPQfYHjNq/PxjAEAsebbVjOgP2h2qkk8zQyvd1KDxhLynQgeg=="
  //         let url = "https://cryptids-testnet.azurewebsites.net/api/attributestatistics?background=" + nftData[i].background + "&lhand=" + nftData[i].lhand + "&code=" + code
  //         const response = await fetch(url);
  //         data = await response.json();
  //       } catch (error) {
  //         console.log(error);
  //       }
  //       nftData[i].scores = data.attributes; //save scores as another object to use in the list
  //     }
  //     setNftCollection(nftData);
  //   }

  const checkWhitelist = async () => {
    // return true;
    let data = {
      whitelist: false,
    };
    try {
      const url = `${chainInfo.backendService}/iswhitelisted?address=${chainInfo.clientAddress}`;
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    return data.whitelist;
  };

  const toggleMintVisible = () => {
    if (mintVisibleClass === "") {
      showMintSuccess();
    } else {
      hideMintSuccess();
    }
  };

  const hideMintSuccess = () => {
    setMintVisibleClass("");
  };
  const showMintSuccess = () => {
    setMintVisibleClass("mint-visible");
  };

  const handleMint = async (mintCount) => {
    if (!chainInfo.clientAddress) {
      Swal.fire({
        icon: "warning",
        title: "Wallet not connected",
        text: "Please connect your wallet!",
      });
      return;
    }

    //use mintCount variable to query the contract for "mintCount" number of mints.

    hideMintSuccess();
    const whiteListCheck = await checkWhitelist();
    console.log(`is whitelisted: ${whiteListCheck}`);
    if (!whiteListCheck) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not whitelisted!",
      });
      return false;
    }

    if (!mintCount) {
      mintCount = 1;
    }

    let msg = btoa(
      JSON.stringify({
        mint: {
          amount_to_mint: Number(mintCount),
          mint_for: chainInfo.clientAddress,
        },
      })
    );

    try {
      let tx = await chainInfo.client.execute(
        chainInfo.snip20ContractAddress,
        {
          send: {
            recipient: chainInfo.randomMintContractAddress,
            amount: (Number(chainInfo.priceForEach) * mintCount).toString(),
            msg,
          },
        },
        "",
        [],
        {
          gas: 80_000 + Number(mintCount) * 80_000,
          amount: {
            denom: "uscrt",
            amount: 6250,
          },
        }
      );
      //console.log(`resp: ${JSON.stringify(tx)}`);
      console.log(`mint successful`);
      showMintSuccess();
    } catch (e) {
      console.log(`Failed to mint: ${e}`);

      //let eText = e.toString();
      if (e.message.includes("insufficient funds")) {
        Swal.fire({
          icon: "error",
          title: "Failed to mint",
          text: "Insufficient sSCRT balance",
        });
      }
      if (e.message.includes("timed out waiting for tx")) {
        Swal.fire({
          icon: "warning",
          title: "Timed out",
          text: "Timed out waiting for response, however transaction may have been successful. Check My Collection for more details",
        });
      } else if (e.message.includes("out of gas")) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Out of gas. Try increasing the gas amount set by Keplr",
        });
      } else if (e.message.includes("Request rejected")) {
      } else if (e.message.includes("Address is not whitelisted")) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Address is not whitelisted or has already minted the maximum amount",
        });
      } else {
        // Swal.fire({
        //       icon: 'error',
        //       title: 'Failed',
        //       text: 'Please try again',
        //     }
        // )
      }
    }
    const countMsg = {
      remaining: {},
    };
    const resultCount = await chainInfo.client.queryContractSmart(
      chainInfo.randomMintContractAddress,
      countMsg
    );
    await handleSetCounter(resultCount.remaining);
    return null;
  };

  return (
    <MiddleEarth
      chainInfo={chainInfo}
      addressContainer={addressContainer}
      getBalance={getBalance}
      toggleMobileMenu={toggleMobileMenu}
      mobileMenuOpen={mobileMenuOpen}
      sscrtWrapper={sscrtWrapper}
      scrtWrapper={scrtWrapper}
      nftCollection={nftCollection}
      handleMint={handleMint}
      mintVisibleClass={mintVisibleClass}
      toggleMintVisible={toggleMintVisible}
      mintCount={mintCount}
      setMintCount={setMintCount}
      totalMints={totalMints}
    />
  );
}

export default App;
