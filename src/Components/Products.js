import { Link, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { allCategories } from "./Contexts/CategoriesContext";
import { productsDetails } from "./Contexts/ProdcutsContext";

function Products (){
    const categories = useContext(allCategories);
    const productCategories = useContext(productsDetails);
    const { categoryId } = useParams();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("featured");

    useEffect(()=>{
        document.title = `SafeZone PPE Store | Products`;
    }, []);

    const products = useMemo(() => {
        const selected = categoryId
            ? productCategories.filter((category) => String(category.id) === categoryId)
            : productCategories;
        const filtered = selected.flatMap((category) =>
            category.products.map((product) => ({ ...product, categoryId: category.id, categoryName: category.name }))
        ).filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        );

        return [...filtered].sort((a, b) => {
            if (sort === "price-low") return a.price - b.price;
            if (sort === "price-high") return b.price - a.price;
            if (sort === "name") return a.name.localeCompare(b.name);
            return 0;
        });
    }, [categoryId, productCategories, search, sort]);

    const activeCategory = productCategories.find((category) => String(category.id) === categoryId);

    return (
        <section className="products page-section">
            <div className="container products-container">
                <div className="page-heading">
                    <span className="eyebrow">Protection for every job</span>
                    <h1>{activeCategory ? activeCategory.name : "Shop safety essentials"}</h1>
                    <p>{activeCategory?.description || "Explore reliable personal protective equipment selected for comfort, durability, and safer workdays."}</p>
                </div>

                <div className="catalog-toolbar">
                    <div className="search-box">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
                        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" aria-label="Search products" />
                    </div>
                    <label className="sort-control">
                        <span>Sort by</span>
                        <select value={sort} onChange={(event) => setSort(event.target.value)}>
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: low to high</option>
                            <option value="price-high">Price: high to low</option>
                            <option value="name">Name</option>
                        </select>
                    </label>
                </div>

                <div className="category-filters" aria-label="Filter products by category">
                    <NavLink to="/products" end>All products</NavLink>
                    {categories.map((category) => (
                        <NavLink key={category.id} to={`/products/category/${category.id}`}>{category.title}</NavLink>
                    ))}
                </div>

                <div className="catalog-meta">
                    <p><strong>{products.length}</strong> {products.length === 1 ? "product" : "products"}</p>
                    {(search || categoryId) && <Link to="/products" onClick={() => setSearch("")}>Clear filters</Link>}
                </div>

                {products.length > 0 ? (
                    <div className="product-grid">
                        {products.map((product) => (
                            <article className="product-card" key={product.id}>
                                <Link className="product-image" to={`/products/category/${product.categoryId}/${product.id}`}>
                                    <span className="category-tag">{product.categoryName}</span>
                                    <img src={product.image_url} alt={product.name} />
                                </Link>
                                <div className="product-card-body">
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="product-card-footer">
                                        <span className="price">${product.price.toFixed(2)}</span>
                                        <Link className="view-product" to={`/products/category/${product.categoryId}/${product.id}`} aria-label={`View ${product.name}`}>
                                            View product <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <h2>No products found</h2>
                        <p>Try a different search or clear your filters.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Products;
