import React, { Component } from 'react';
import { web3 } from './provider';

class Test extends Component {
  async componentWillMount() {
    let noAcc = web3.eth.defaultAccount;
    console.log(noAcc);

    let account = await web3.eth.accounts.create();
    console.log(account);

    let res = (web3.eth.defaultAccount = account.address);
    console.log(res);
  }

  testWeb3 = async () => {
    let gas = await web3.eth.getGasPrice();
    console.log(gas);
  };

  render() {
    return (
      <div>
        <p>Test</p>

        <button id="verify-button" className="btn btn-primary mt-5">
          Verify with Wyre
        </button>

        <button
          onClick={() => {
            this.testWeb3();
          }}
        >
          get price
        </button>
      </div>
    );
  }
}

export default Test;
