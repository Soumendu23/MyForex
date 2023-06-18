import "./styles.css";
import {useEffect} from 'react';

import axios from "axios";

export default function App() {

    // GET with Axios

//Get Access  Token

    // useEffect(() => {
    //   const fetchPost = async () => {
    //     const options = {
    //       method: 'POST',
    //       url: 'https://sandbox.api.ofx.com/v1/oauth/token',
    //       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //       data: {grant_type: 'client_credentials', client_id: 'y3heFmGllQuGeMP20G1huJ2pYGiHWwHR', client_secret: 'pP285sEkGJtm2Zs2', scope: 'payments'}
    //     };
        
    //     try {
    //       const { data } = await axios.request(options);
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchPost();
    // }, []);


    //Create a Quote

    useEffect(() => {
      const fetchPost = async () => {

        const options = {
          method: 'POST',
          url: 'https://sandbox.api.ofx.com/v1/payments/quotes',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer GEAvRw1G5JWq3QNrc0vKLOqVONlG'
          },
          data: {
            detailedResponse: 'true',
            buyCurrency: 'USD',
            buyAmount: 1100,
            sellCurrency: 'AUD',
            sellAmount: 0
          }
        };
        
        try {
          const { data } = await axios.request(options);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPost();
    }, []);


    //Get a Quote


    // useEffect(() => {
    //   const fetchPost = async () => {



    //     const options = {
    //       method: 'POST',
    //       url: 'https://sandbox.api.ofx.com/v1/payments/beneficiaries',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         Authorization: 'Bearer GEAvRw1G5JWq3QNrc0vKLOqVONlG'
    //       },
    //       data: { 
    //         "currency": "AUD",
    //         "name": "Test name",
    //         "classification": "Own Account",
    //         "paymentReason": "Test payment reason",
    //         "beneficiaryBankDetails": {
    //             "bankName": "Westpac AU",
    //             "bankBranchName": "C",
    //             "branchCode": "234434",
    //             "account": "45663",
    //             "bankAddress": {
    //                 "addressLine": "1,vaChatswood Brnch",
    //                 "citySuburb": "Sydney",
    //                 "stateProvince": "New South Wales",
    //                 "postCode": "2060",
    //                 "country": "AU"
    //             }
    //         },
    //         "beneficiaryAddress": { 
    //             "country": "AU",
    //             "addressLine": "9/11,vaBridge Street",
    //             "citySuburb": "Sydney",
    //             "stateProvince": "New South Wales",
    //             "postCode": "2000"
    //         }
           
    //     }
    //     };
        
    //     try {
    //       const { data } = await axios.request(options);
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchPost();
    // }, []);


//Create a Beneficiary

    // useEffect(() => {
    //   const fetchPost = async () => {




    //     // import axios from 'axios';

    //     const options = {
    //       method: 'GET',
    //       url: 'https://sandbox.api.ofx.com/v1/payments/quotes/ec3e0b72-f1f6-464c-b4b8-6965daf03446',
    //       headers: {Accept: 'application/json', Authorization: 'Bearer GEAvRw1G5JWq3QNrc0vKLOqVONlG'}
    //     };
        
    //     try {
    //       const { data } = await axios.request(options);
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchPost();
    // }, []);


//Create a Deal

    // useEffect(() => {
    //   const fetchPost = async () => {





    //     const options = {
    //       method: 'POST',
    //       url: 'https://sandbox.api.ofx.com/v1/payments/deals',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         Authorization: 'Bearer GEAvRw1G5JWq3QNrc0vKLOqVONlG'
    //       },
    //       data: {
    //         "quoteId": "3fffd7b3-823d-4fad-9a14-2ba78164e80e",
    //         "fundingSource": "Own account",
    //         "beneficiaries" : [{
    //               "beneficiaryId": "4fc4afa5-fa07-47ee-b306-937dae6d57c2",
    //               "amount":13208,
    //               "payReason": "PayReason",
    //               "payReference": "PayReference"
    //         }]
    //     }
    //     };
        
    //     try {
    //       const { data } = await axios.request(options);
    //       console.log(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchPost();
    // }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
