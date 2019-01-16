import React, { Component } from 'react';
import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    console.debug('API Call:', endpoint, params, verb);

    params._token = // for now, hardcode token for "testuser"
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6' +
      'InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N' +
      'jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        data: params
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }
}

export default JoblyApi;
