import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categoryName, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(category => category.json())
            .then(data => setCategory(data))
    }, [])
    // console.log(categoryName);
    return (
        <div>
            {
                categoryName.map(category =>
                    <Link key={category.category_id} to={`/category/${category.category_id}`} className='text-1xl block font-medium text-start mx-auto mt-2 border p-3 rounded-lg bg-slate-300 hover:bg-slate-400'>
                        {category.name}
                    </Link>
                )
            }
        </div>
    );
};

export default Category;