import React, { useState } from "react";

const ColorBook = (props) => {
  const num = () => Math.floor(Math.random() * props.data.length)+1;

    const [rand, setRand] = useState(null);

    return (
    <div>
        <button onClick={() => setRand(num())}>乱数発生</button>

        {rand !== null && <p key={rand}>{rand}</p>}
    </div>
    );
};

export default ColorBook;
