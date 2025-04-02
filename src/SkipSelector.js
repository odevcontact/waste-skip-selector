import React, { useEffect, useState } from 'react';
import './SkipSelector.css'; // Import the CSS file for styling

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);  // Store skip data
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track error state

  useEffect(() => {
    const postcode = 'NR32';
    const area = 'Lowestoft';

    fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch skip data');
        }
        return response.json();
      })
      .then((data) => {
        setSkips(data);  // Set the fetched skip data
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err.message);  // Set error message if fetch fails
        setLoading(false);  // Set loading to false if there's an error
      });
  }, []);  // Empty dependency array to run only once on mount

  // Loading state
  if (loading) return <div className="loading">Loading skips...</div>;

  // Error state
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="skip-selector">
      <h2>Select Your Skip</h2>
      <div className="skip-options">
        {skips.length === 0 ? (
          <p>No skips available for this location.</p>
        ) : (
          skips.map((skip) => (
            <div className="skip-option" key={skip.id}>
              <h3>{skip.size} Cubic Yard Skip</h3>
              <p><strong>Price (before VAT):</strong> £{skip.price_before_vat}</p>
              <p><strong>VAT:</strong> £{(skip.price_before_vat * skip.vat) / 100}</p>
              <p><strong>Total Price:</strong> £{(skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100).toFixed(2)}</p>
              <p><strong>Allowed on Road:</strong> {skip.allowed_on_road ? 'Yes' : 'No'}</p>
              <p><strong>Allows Heavy Waste:</strong> {skip.allows_heavy_waste ? 'Yes' : 'No'}</p>
              <button>Select</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkipSelector;

