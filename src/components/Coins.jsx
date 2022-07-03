const Coins = ({ coin }) => {
  return (
    <tr>
      <td>
        <img src={coin.image} width={30} height={30} />
      </td>
      <td>
        <span>{coin.name}</span>
      </td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.current_price}</td>
    </tr>
  );
};

export default Coins;
