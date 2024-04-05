import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './clothesSection.css';
import { clothesData } from "../../DataFile";

function ClothesCard({ data }) {
    const { image, name, rating, price, pastprice , id} = data;

    return (
        <a href={`#/productinfo?id=${encodeURIComponent(id)}`}>
            <div className="clothes-card">
                <img src={image} alt={name} />
                <p>{name}</p>
                <div className="rating">
                    {[...Array(rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <p className="price">{price} LE <span className="before-sale">{pastprice} LE</span></p>
            </div>
        </a>
    );
}

function ClothesContainer() {
    const [category, setCategory] = useState('all');

    const clothesToDisplay = category === 'all' ? clothesData :
        clothesData.filter((data) => data.category === category);

    return (
        <div className="clothes-container">
            <div className="filter">
                <button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>الجميع</button>
                <button className={category === 'Men' ? 'active' : ''} onClick={() => setCategory('Men')}>رجال</button>
                <button className={category === 'Women' ? 'active' : ''} onClick={() => setCategory('Women')}>سيدات</button>
                <button className={category === 'Baby' ? 'active' : ''} onClick={() => setCategory('Baby')}>اطفال</button>
            </div>
            {clothesToDisplay.map((data, index) => (
                <ClothesCard key={index} data={data} />
            ))}
        </div>
    );
}

export default ClothesContainer;
