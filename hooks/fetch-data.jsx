import { api } from "@/app/api";
import { cookies } from "next/headers";

/**
 * Utility function to fetch data from the API.
 *
 * @param {string} url - The endpoint to fetch from (relative to `api` base URL).
 * @param {string} token - Authorization token.
 * @param {string} method - HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {Object} [body=null] - Optional request body for POST/PUT requests.
 * @returns {Promise<Object>} - The parsed JSON response from the API.
 * @throws {Error} - Throws an error if the fetch fails or the response is not OK.
 */


export const fetchData = async (url, method, body = null) => {
    const cookie = await cookies();
    const token = cookie.get('jwt')?.value || null;
    try {
      const options = {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      // Include Content-Type and body only for applicable methods
      if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
      }
  
      const response = await fetch(`${api}${url}`, options);
  
      if (!response.ok) {
        const errorText = await response.text(); // Extract error details for debugging
        console.error('Error response text:', errorText);
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }
  
      // Handle cases where DELETE may not return a body
      if (method === 'DELETE') {
        return { success: true }; // Or customize based on API response
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in fetchData:', error);
      throw new Error('Failed to fetch data. Please try again.');
    }
  };