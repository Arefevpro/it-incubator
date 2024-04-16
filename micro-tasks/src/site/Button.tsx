export const Button = () => {
  const myFirstSybscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Hello im Oleg");
  };

  const myTwoSybscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Hello im Ivan");
  };

  return (
    <div>
      <button onClick={myFirstSybscriber}>MyYoutobeChanelk-1</button>
      <button onClick={myTwoSybscriber}>MyYoutobeChanelk-2</button>
    </div>
  );
};
