import { useState } from 'react';
import * as Styled from './styles';
import { Othent } from 'othent';
import { useEffect } from 'react';
import axios from 'axios';


const U = () => {
  const [othent, setOthent] = useState(null);
  useEffect(() => {
    const initOthent = async () => {
      try {
        const othentData = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
        setOthent(othentData);
      } catch (error) {
        console.error('Error init othent:', error);
      }
    };
    initOthent();
  }, []);

  const [userDetails, setUserDetails] = useState(null);
  const [claimedU, setClaimedU] = useState(null);

  async function getU() {
    const userDetails = await othent.logIn();
    setUserDetails(userDetails);


    const transferReq = await axios({
        method: 'POST',
        url: 'https://server.othent.io/claim-u',
        data: { userDetails }
    })
    const transferResponse = transferReq.data.success

    if (transferResponse === true) {
      setClaimedU('success');
    } else if (transferResponse === 'alreadyClaimed') {
      setClaimedU('alreadyClaimed');
    } else {
      setClaimedU('failed');
    }
  }

  function shortenWalletAddress(walletAddress) {
    const shortened = walletAddress.slice(0, 7) + '...' + walletAddress.slice(-7);
    return shortened;
  }


  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>
        <Styled.getUContainer>
          <img className="u-logo" src="/u.png" alt="$U logo" />
          <h1 className="u-title">$U Token Faucet</h1>
          {claimedU ? (
            claimedU === 'success' ? (
              <>
                <span>
                  <span style={{ color: 'green' }}>Successfully claimed: </span>
                  {1} $U
                </span>
                <p className="u-p">
                  Wallet address:
                  <a
                    className="walletAddressLink"
                    target="_blank"
                    href={`https://sonar.warp.cc/#/app/contract/${userDetails.contract_id}?network=mainnet`}
                  >
                    {' '}
                    {shortenWalletAddress(userDetails.contract_id)}
                  </a>
                </p>
              </>
            ) : claimedU === 'alreadyClaimed' ? (
              <>
                <span>
                  <span style={{ color: 'red' }}>Already claimed</span>
                </span>
              </>
            ) : (
              <>
                <span>
                  <span style={{ color: 'red' }}>Claim failed</span>
                </span>
              </>
            )
          ) : (
            <>
              <p className="u-p">Claim Arweave $U tokens with your Google account!</p>
              <Styled.logIn onClick={getU}>
                <img src="/google.svg" alt="Google Icon" />
                <span>Claim with Google</span>
              </Styled.logIn>
            </>
          )}
        </Styled.getUContainer>
      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};

export default U;


