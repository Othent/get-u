import { useState } from 'react';
import * as Styled from './styles';
import { Othent } from 'othent';
import { useEffect } from 'react';

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

    const getURequest = await fetch('')
    setClaimedU(getURequest)
  }

  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>
        <Styled.getUContainer>
          <img className="u-logo" src="/u.png" alt="$U logo" />
          <h1>$U Token Faucet</h1>
          {userDetails ? (
            <>

              <span>Claimed</span>

            </>
          ) : (
            <Styled.logIn onClick={getU}>
              <img src="/google.svg" alt="Google Icon" />
              <span>Get $U with Google</span>
            </Styled.logIn>
          )}
        </Styled.getUContainer>
      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};

export default U;
