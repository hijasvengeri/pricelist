

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/ProductsTable.css'; // Import the CSS file

// const ProductsTable = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://pricelist-ib0a.onrender.com/api/products');
//       setProducts(response.data);
//       setFilteredProducts(response.data); // Initialize filteredProducts with all products
//     } catch (error) {
//       console.error('Error fetching the products data', error);
//     }
//   };

//   const handleSearchChange = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     filterProducts(searchTerm);
//   };

//   const filterProducts = (searchTerm) => {
//     if (!searchTerm) {
//       setFilteredProducts(products); // If no search term, show all products
//       return;
//     }

//     const filtered = products.filter((product) =>
//       product.brand && product.brand.toLowerCase().includes(searchTerm)
//     );
//     setFilteredProducts(filtered);
//   };

//   const mergeCells = () => {
//     const mergedCells = [];
//     let prevItem = null;
//     let rowSpanCount = 0;

//     for (let i = 0; i < filteredProducts.length; i++) {
//       const currentItem = filteredProducts[i].items;

//       if (currentItem === prevItem) {
//         rowSpanCount++;
//       } else {
//         if (prevItem !== null) {
//           mergedCells.push({ rowSpan: rowSpanCount, item: prevItem });
//         }
//         prevItem = currentItem;
//         rowSpanCount = 1;
//       }
//     }

//     // Push the last item
//     if (prevItem !== null) {
//       mergedCells.push({ rowSpan: rowSpanCount, item: prevItem });
//     }

//     return mergedCells;
//   };

//   return (
//     <div>
//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search by Brand..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />

//       {/* Table */}
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="th-td">Sl No</th>
//             <th className="th-td">Items</th>
//             <th className="th-td">Brand</th>
//             <th className="th-td">Single</th>
//             <th className="th-td">5+</th>
//             <th className="th-td">10+</th>
//             <th className="th-td">20+</th>
//             <th className="th-td">50+</th>
//             <th className="th-td">100+</th>
//             <th className="th-td">GST</th>
//             <th className="th-td">MRP</th>
//             <th className="th-td" style={{ width: '200px' }}>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product, index) => (
//             <tr key={product.id}>
//               {/* Sl No column */}
//               {index === 0 || product.items !== filteredProducts[index - 1].items ? (
//                 <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
//                   {product.slno}
//                 </td>
//               ) : null}

//               {/* Items column */}
//               {index === 0 || product.items !== filteredProducts[index - 1].items ? (
//                 <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
//                   {product.items}
//                 </td>
//               ) : null}

//               {/* Brand column */}
//               <td>{product.brand}</td>
//               <td>{product.single}</td>
//               <td>{product.price1}</td>
//               <td>{product.price2}</td>
//               <td>{product.price3}</td>
//               <td>{product.price4}</td>
//               <td>{product.price5}</td>
//               <td>{(product.gst * 100).toFixed(0)}%</td>
//               <td>{product.mrp}</td>

//               {/* Image column */}
//               {index === 0 || product.items !== filteredProducts[index - 1].items ? (
//                 <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
//                   {/* <img src={product.imageURL} alt={product.items} className="img" /> */}
//                 </td>
//               ) : null}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductsTable;








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductsTable.css'; // Import the CSS file

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://pricelist-ib0a.onrender.com/api/products');
      setProducts(response.data);
      setFilteredProducts(response.data); // Initialize filteredProducts with all products
    } catch (error) {
      console.error('Error fetching the products data', error);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterProducts(searchTerm);
  };

  const filterProducts = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products); // If no search term, show all products
      return;
    }

    const filtered = products.filter((product) =>
      (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
      (product.items && product.items.toLowerCase().includes(searchTerm))
    );
    setFilteredProducts(filtered);
  };

  const mergeCells = () => {
    const mergedCells = [];
    let prevItem = null;
    let rowSpanCount = 0;

    for (let i = 0; i < filteredProducts.length; i++) {
      const currentItem = filteredProducts[i].items;

      if (currentItem === prevItem) {
        rowSpanCount++;
      } else {
        if (prevItem !== null) {
          mergedCells.push({ rowSpan: rowSpanCount, item: prevItem });
        }
        prevItem = currentItem;
        rowSpanCount = 1;
      }
    }

    // Push the last item
    if (prevItem !== null) {
      mergedCells.push({ rowSpan: rowSpanCount, item: prevItem });
    }

    return mergedCells;
  };

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by Brand or Items..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th className="th-td">Sl No</th>
            <th className="th-td">Items</th>
            <th className="th-td">Brand</th>
            <th className="th-td">Single</th>
            <th className="th-td">5+</th>
            <th className="th-td">10+</th>
            <th className="th-td">20+</th>
            <th className="th-td">50+</th>
            <th className="th-td">100+</th>
            <th className="th-td">GST</th>
            <th className="th-td">MRP</th>
            <th className="th-td" style={{ width: '200px' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              {/* Sl No column */}
              {index === 0 || product.items !== filteredProducts[index - 1].items ? (
                <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
                  {product.slno}
                </td>
              ) : null}

              {/* Items column */}
              {index === 0 || product.items !== filteredProducts[index - 1].items ? (
                <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
                  {product.items}
                </td>
              ) : null}

              {/* Brand column */}
              <td>{product.brand}</td>
              <td>{product.single}</td>
              <td>{product.price1}</td>
              <td>{product.price2}</td>
              <td>{product.price3}</td>
              <td>{product.price4}</td>
              <td>{product.price5}</td>
              <td>{(product.gst * 100).toFixed(0)}%</td>
              <td>{product.mrp}</td>

              {/* Image column */}
              {index === 0 || product.items !== filteredProducts[index - 1].items ? (
                <td rowSpan={mergeCells().find(cell => cell.item === product.items).rowSpan}>
                  {/* <img src={product.imageURL} alt={product.items} className="img" /> */}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;






