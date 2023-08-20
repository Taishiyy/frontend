import React from "react";

const RecommendBook = ({data,color}) => {
    const filteredData = data.filter(item => item.color === color);

    const randomBooks = [];
    while (randomBooks.length < 3 && filteredData.length > 0) {
        const randomBook = Math.floor(Math.random() * filteredData.length);
        if (!randomBooks.includes(randomBook)) {
            randomBooks.push(randomBook);
        }
    }

    const recommendedBooks = randomBooks.map(index => (
        <div key={index}>
            <a href={filteredData[index].url}><img src={filteredData[index].url} alt="" /></a>
        </div>
    ));

    return (
        <div>
            {recommendedBooks}
        </div>
    );
};

export default RecommendBook;