export const ESCROW_STATUS_START = `GET_ESCROW_STATUS_START`;
export const ESCROW_STATUS_SUCCESS = "GET_ESCROW_STATUS_SUCCESS";
export const ESCROW_STATUS_FAILURE = "GET_ESCROW_STATUS_FAILURE";


const getStatusStart = () => ({
  type: ESCROW_STATUS_START,
});

const getStatusSuccess = (payload) => ({
  type: ESCROW_STATUS_SUCCESS,
  payload,
});

const getStatusFailure = (error) => ({
  type: ESCROW_STATUS_FAILURE,
  error,
});


export const getEscrows = () => {
  return (dispatch, getState) => {
      let state = getState();
  		dispatch(getStatusStart());
    	//make api call
    	let data = [
   {
      "exchangeId":"poloniex",
      "asset":"btc",
      "amountTotal":1000000000,
      "amountTraded":750000000,
      "expirationTime":1544943200
   },
   {
      "exchangeId":"kraken",
      "asset":"bch",
      "amountTotal":2000000000,
      "amountTraded":1158800000,
      "expirationTime":1544982800
   },
   {
      "exchangeId":"bittrex",
      "asset":"ltc",
      "amountTotal":1000000000,
      "amountTraded":316200000,
      "expirationTime":1545202400
   },
   {
      "exchangeId":"paymium",
      "asset":"ltc",
      "amountTotal":500000000,
      "amountTraded":62400000,
      "expirationTime":1545288800
   },
   {
      "exchangeId":"poloniex",
      "asset":"btc",
      "amountTotal":1500000000,
      "amountTraded":251700000,
      "expirationTime":1545386000
   },
   {
      "exchangeId":"bittrex",
      "asset":"bch",
      "amountTotal":500000000,
      "amountTraded":397100000,
      "expirationTime":1545468800
   },
   {
      "exchangeId":"paymium",
      "asset":"btc",
      "amountTotal":1000000000,
      "amountTraded":500000000,
      "expirationTime":1546152800
   },
   {
      "exchangeId":"kraken",
      "asset":"btc",
      "amountTotal":253000000,
      "amountTraded":56000000,
      "expirationTime":1546800799
   },
   {
      "exchangeId":"bittrex",
      "asset":"ltc",
      "amountTotal":100000000,
      "amountTraded":23560000,
      "expirationTime":1547121020
   },
   {
      "exchangeId":"poloniex",
      "asset":"bch",
      "amountTotal":60000000,
      "amountTraded":14657000,
      "expirationTime":1547735275
   }];
    let results;
    if(getState().Escrows.Escrows.escrows.length == 0){
      results = data;      
    }else{
      results = getState().Escrows.Escrows.escrows;
    }

    dispatch(getStatusSuccess(results));
    }
  };
