const axios = require("axios");

module.exports = {
  findId(keySearch, dataSet) {
    const detailData = dataSet.find(data => data.id.toString() === keySearch.toString())
    if(detailData)
      return detailData
    return false;
  },
  
  findSubId(keySearch, dataSet, keyJSON) {
    return result = dataSet.filter(data => data[keyJSON].toString() === keySearch.toString())
  },

  async getDataById(id) {
    const res = await axios.get("https://kasirpintar.co.id/allAddress.txt");
    
    if (res.data.address_kecamatan && res.data.address_kecamatan.length > 0) {
      const findResult = this.findId(id, res.data.address_kecamatan);
      if (findResult !== false) {
        return {
          origin: "Kecamatan",
          data: findResult,
        };
      }
    } 
    if (res.data.address_kelurahan && res.data.address_kelurahan.length > 0)
    {
      const findResult = this.findId(id,res.data.address_kelurahan);
      if (findResult !== false) {
        return {
          origin: "Kelurahan",
          data: findResult,
        };
      }
    }
    if (res.data.address_kota && res.data.address_kota.length > 0)
    {
      const findResult = this.findId(id,res.data.address_kota);
      if (findResult !== false) {
        return {
          origin: "Kota",
          data: findResult,
        };
      }
    }
    if (res.data.address_provinsi && res.data.address_provinsi.length > 0)
    {
      const findResult = this.findId(id, res.data.address_provinsi);
      if (findResult !== false) {
        return {
          origin: "Provinsi",
          data: findResult,
        };
      }
    } 
    return {
      origin: "-",
      data: null,
    };;
  },

  async getDataBySubId(id, type) {
    const res = await axios.get("https://kasirpintar.co.id/allAddress.txt");

    if(type === 'kecamatan') 
      return this.findSubId(id, res.data.address_kecamatan, "kota_id");
    else if(type === 'kelurahan') 
      return this.findSubId(id, res.data.address_kelurahan, "kecamatan_id");
    else if(type === 'kota') 
      return this.findSubId(id, res.data.address_kota, "provinsi_id");
  }
  
};
