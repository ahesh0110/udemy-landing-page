import React from 'react';
import categories from '../data/categories';


export default function Categories(){
return (
<section className="categories">
<div className="container">
<h2>Top categories</h2>
<div className="cat-grid">
{categories.map(cat=> (
<div key={cat.id} className="cat">
<div className="icon">{cat.title.charAt(0)}</div>
<div className="title">{cat.title}</div>
</div>
))}
</div>
</div>
</section>
);
}