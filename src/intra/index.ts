import axios from "axios";

class IntraRequest {
  // The base URL for the Intra API
  url: string;
  // Headers to be used in requests
  headers: object;

  constructor(headers: object | null) {
    this.url = "https://api.intra.42.fr";
    this.headers = headers || {};

    // Set default Content-Type and Accept headers
    this.headers["Content-Type"] = "application/json";
    this.headers["Accept"] = "application/json";
  }

  // Private method to get the access token from the Intra API
  private async Authorization() {
    const response = await axios.post(`${this.url}/oauth/token`, {
      grant_type: "client_credentials",
      client_id: process.env.INTRA_UID,
      client_secret: process.env.INTRA_SECRET,
    });

    if (response.status !== 200 || !response?.data?.access_token) {
      throw new Error("Failed to get token");
    }

    return `Bearer ${response.data.access_token}`;
  }

  // Method to send GET requests to the Intra API
  async get(endpoint: string, params) {
    try {
      const response = await axios.get(this.url + endpoint, {
        params,
        headers: { Authorization: await this.Authorization() },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }

  // Method to send POST requests to the Intra API
  async post(endpoint: string, data) {
    try {
      const response = await axios.post(this.url + endpoint, data, {
        headers: { Authorization: await this.Authorization() },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }

  // Method to send PUT requests to the Intra API
  async put(endpoint: string, data) {
    try {
      const response = await axios.put(this.url + endpoint, data, {
        headers: { Authorization: await this.Authorization() },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }

  // Method to send DELETE requests to the Intra API
  async delete(endpoint: string, data) {
    try {
      const response = await axios.delete(this.url + endpoint, {
        headers: { Authorization: await this.Authorization() },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
}

export default IntraRequest;
