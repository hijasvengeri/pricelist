

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









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
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
//       console.log('Fetched Products:', response.data); // Log fetched products
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
//       (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
//       (product.items && product.items.toLowerCase().includes(searchTerm))
//     );
//     setFilteredProducts(filtered);
//     console.log('Filtered Products:', filtered); // Log filtered products
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF('p', 'mm', 'a4');
//     const tableColumn = ["Sl No", "Items", "Brand", "Single", "5+", "10+", "20+", "50+", "100+", "GST", "MRP", "Image"];
//     const tableRows = [];

//     filteredProducts.forEach(product => {
//       const productData = [
//         product.slno,
//         product.items,
//         product.brand,
//         product.single,
//         product.price1,
//         product.price2,
//         product.price3,
//         product.price4,
//         product.price5,
//         (product.gst * 100).toFixed(0) + '%',
//         product.mrp,
//         '' // Placeholder for image URL
//       ];
//       tableRows.push(productData);
//     });

//     console.log('Table Rows:', tableRows); // Log table rows

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       theme: 'grid',
//       styles: {
//         cellPadding: 3,
//         fontSize: 8,
//         overflow: 'linebreak',
//         cellWidth: 'wrap'
//       },
//       headStyles: { fillColor: [44, 62, 80] },
//       columnStyles: {
//         0: { cellWidth: 10 }, // Sl No
//         1: { cellWidth: 30 }, // Items
//         2: { cellWidth: 20 }, // Brand
//         11: { cellWidth: 40 } // Image
//       },
//       didDrawCell: (data) => {
//         if (data.column.index === 11 && data.cell.section === 'body') {
//           // Placeholder for handling images
//           // doc.addImage(data.cell.raw, 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10);
//         }
//       }
//     });

//     doc.save('pricelist.pdf');
//   };

//   return (
//     <div>
//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search by Brand or Items..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />

//       {/* Generate PDF button */}
//       <button onClick={generatePDF}>Generate PDF</button>

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
//               <td>{product.slno}</td>
//               <td>{product.items}</td>
//               <td>{product.brand}</td>
//               <td>{product.single}</td>
//               <td>{product.price1}</td>
//               <td>{product.price2}</td>
//               <td>{product.price3}</td>
//               <td>{product.price4}</td>
//               <td>{product.price5}</td>
//               <td>{(product.gst * 100).toFixed(0)}%</td>
//               <td>{product.mrp}</td>
//               <td>
//                 {/* <img src={product.imageURL} alt={product.items} className="img" /> */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductsTable;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
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
//       (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
//       (product.items && product.items.toLowerCase().includes(searchTerm))
//     );
//     setFilteredProducts(filtered);
//   };

//   const mergeCells = (products) => {
//     const mergedCells = [];
//     let prevItem = null;
//     let rowSpanCount = 0;

//     for (let i = 0; i < products.length; i++) {
//       const currentItem = products[i].items;

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

//   const generatePDF = () => {
//     const doc = new jsPDF('p', 'mm', 'a4');
//     const tableColumn = ["Sl No", "Items", "Brand", "Single", "5+", "10+", "20+", "50+", "100+", "GST", "MRP", "Image"];
//     const tableRows = [];

//     const mergedCells = mergeCells(filteredProducts);
//     const rowSpans = {};
//     mergedCells.forEach(cell => rowSpans[cell.item] = cell.rowSpan);

//     filteredProducts.forEach((product, index) => {
//       const previousItem = index > 0 ? filteredProducts[index - 1].items : null;
//       const shouldMerge = index === 0 || product.items !== previousItem;
//       const rowSpan = shouldMerge ? rowSpans[product.items] : 0;

//       if (shouldMerge) {
//         tableRows.push([
//           product.slno,
//           product.items,
//           product.brand,
//           product.single,
//           product.price1,
//           product.price2,
//           product.price3,
//           product.price4,
//           product.price5,
//           (product.gst * 100).toFixed(0) + '%',
//           product.mrp,
//           '' // Placeholder for image URL
//         ]);
//       } else {
//         tableRows.push([
//           '',
//           '',
//           product.brand,
//           product.single,
//           product.price1,
//           product.price2,
//           product.price3,
//           product.price4,
//           product.price5,
//           (product.gst * 100).toFixed(0) + '%',
//           product.mrp,
//           '' // Placeholder for image URL
//         ]);
//       }
//     });

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       theme: 'grid',
//       styles: {
//         cellPadding: 3,
//         fontSize: 8,
//         overflow: 'linebreak',
//         cellWidth: 'wrap'
//       },
//       headStyles: { fillColor: [44, 62, 80] },
//       columnStyles: {
//         0: { cellWidth: 10 }, // Sl No
//         1: { cellWidth: 30 }, // Items
//         2: { cellWidth: 20 }, // Brand
//         11: { cellWidth: 40 } // Image
//       },
//       didDrawCell: (data) => {
//         if (data.column.index === 11 && data.cell.section === 'body') {
//           // Placeholder for handling images
//           // doc.addImage(data.cell.raw, 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10);
//         }
//       },
//       willDrawCell: (data) => {
//         const rowIndex = data.row.index;
//         const cellIndex = data.column.index;
//         const product = filteredProducts[rowIndex];

//         if (cellIndex === 0 || cellIndex === 1 || cellIndex === 11) {
//           const prevProduct = rowIndex > 0 ? filteredProducts[rowIndex - 1] : null;

//           if (prevProduct && product.items === prevProduct.items) {
//             data.cell.text = ''; // Clear text for merged cells
//           }
//         }
//       }
//     });

//     doc.save('pricelist.pdf');
//   };

//   return (
//     <div>
//       {/* Search bar */}
//       <input
//         type="text"
//         placeholder="Search by Brand or Items..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         style={{
//           padding: '5px',
//           borderRadius: '5px',
//           marginRight: '10px',
//           border: '1px solid #ccc',
//           verticalAlign: 'middle',
//         }}
//       />

//       {/* Generate PDF button */}
//       <div style={{ display: 'inline-block', float: 'right' }}>
//         <button
//           onClick={generatePDF}
//           style={{
//             backgroundColor: 'blue',
//             color: 'white',
//             border: '1px solid blue',
//             padding: '5px 15px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             verticalAlign: 'middle',
//           }}
//         >
//           Generate PDF
//         </button>
//       </div>

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
//           {filteredProducts.map((product, index) => {
//             const previousItem = index > 0 ? filteredProducts[index - 1].items : null;
//             const shouldMerge = index === 0 || product.items !== previousItem;
//             const rowSpan = shouldMerge ? mergeCells(filteredProducts).find(cell => cell.item === product.items).rowSpan : 0;

//             return (
//               <tr key={product.id}>
//                 {/* Sl No column */}
//                 {shouldMerge ? (
//                   <td rowSpan={rowSpan}>
//                     {product.slno}
//                   </td>
//                 ) : null}

//                 {/* Items column */}
//                 {shouldMerge ? (
//                   <td rowSpan={rowSpan}>
//                     {product.items}
//                   </td>
//                 ) : null}

//                 {/* Brand column */}
//                 <td>{product.brand}</td>
//                 <td>{product.single}</td>
//                 <td>{product.price1}</td>
//                 <td>{product.price2}</td>
//                 <td>{product.price3}</td>
//                 <td>{product.price4}</td>
//                 <td>{product.price5}</td>
//                 <td>{(product.gst * 100).toFixed(0)}%</td>
//                 <td>{product.mrp}</td>

//                 {/* Image column */}
//                 {shouldMerge ? (
//                   <td rowSpan={rowSpan}>
//                     {/* <img src={product.imageURL} alt={product.items} className="img" /> */}
//                   </td>
//                 ) : null}
//               </tr>
//             );
//           })}
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




