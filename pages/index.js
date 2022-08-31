//https://docs.etherscan.io

import { useState } from 'react';
import Web3 from 'web3';

const valueToEther = (value) => {
  return Web3.utils.fromWei(value, 'ether');
};

const fetchETHData = async () => {
  const addr = '0x881D40237659C251811CEC9c364ef91dC08D300C';
  const results = 1000;
  // const url=`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${process.env.ETHERSCAN_KEY}`
  // const balanceUrl=`https://api.etherscan.io/api?module=account&action=balance&address=${addr}&tag=latest&apikey=${process.env.ETHERSCAN_KEY}`
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${addr}&startblock=0&endblock=99999999&page=1&offset=${results}&sort=asc&apikey=${process.env.ETHERSCAN_KEY}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data.result);

  return data;
};

export default function Home() {
  const [data, setData] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    fetchETHData().then((response) => {
      setLoading(false);
      setData(response.result);
      setCurrentList(response.result.filter((_record, index) => index < 25));
      setHeader(Object.keys(response.result[0]).filter((key, index) => index < 5));
    });
  }

  function getHeaderContent() {
    return header.map((col) => (
      <th key={col} className='font-bold p-2 border-b text-left capitalize border-l'>
        {col}
      </th>
    ));
  }

  function getColumns(data) {
    const columns = [];
    Object.entries(data).forEach((entry, index) => {
      const [key, value] = entry;
      if (index < 5) {
        columns.push(
          <td key={key} className='p-2 border-b text-left border-l max-w-xs truncate'>
            {value}
          </td>
        );
      }
    });

    return columns;
  }

  function getBodyContent() {
    return currentList.map((data) => {
      return (
        <tr key={data.hash} className='odd:bg-gray-100'>
          {getColumns(data)}
        </tr>
      );
    });
  }

  return (
    <div className='flex items-center flex-col'>
      <button
        onClick={handleClick}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5'>
        {loading ? 'Fetching...' : 'Fetch Data'}
      </button>
      <div className='p-6 w-full'>
        <table className='table-auto border w-full'>
          <thead>
            <tr>{getHeaderContent()}</tr>
          </thead>
          <tbody>{getBodyContent()}</tbody>
        </table>
      </div>
    </div>
  );
}
