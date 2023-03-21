import axios from "axios";
import React from "react";



export const getPoliticianList = async (params: { offset: string, limit: string }): Promise<IDs003001Csv> => {
  const options = {
    method: 'GET',
    url: 'https://sheets.wevis.info/api/v1/db/data/noco/p_aqbfnqj70sja2y/Ds003001Csv/views/Ds003001Csv',
    params: params,
    headers: {
      'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQHB1bmNodXAud29ybGQiLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6IjEiLCJyb2xlcyI6InVzZXIiLCJ0b2tlbl92ZXJzaW9uIjoiMTdkOTNmYTZhYjc1ZjVmZWYyODU5ZDRjZTA2ZmJlNGYxOTU2YTA4OWU4NzRlODliODI0ZjMyZTFjNDZkNzY0N2YxNmMxZDkxZjI4MjJlNzAiLCJpYXQiOjE2NzYwMTkwMTYsImV4cCI6MTY3NjA1NTAxNn0.xWHXv7KgousY7gYHzhQl2EeF-vBIB0EDzclg0mgLoxM'
    }
  };

  const res = await axios.request<IDs003001Csv>(options)
  if (res.status === 200)
    return await Promise.resolve(res.data)
  else
    return await Promise.reject(res)
}

export const getPoliticianListCount = async () => {
  const options = {
    method: 'GET',
    url: 'https://sheets.wevis.info/api/v1/db/data/noco/p_aqbfnqj70sja2y/Ds003001Csv/views/Ds003001Csv/count',
    // params: { offset: '0', limit: '100', where: '' },
    headers: {
      'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQHB1bmNodXAud29ybGQiLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6IjEiLCJyb2xlcyI6InVzZXIiLCJ0b2tlbl92ZXJzaW9uIjoiMTdkOTNmYTZhYjc1ZjVmZWYyODU5ZDRjZTA2ZmJlNGYxOTU2YTA4OWU4NzRlODliODI0ZjMyZTFjNDZkNzY0N2YxNmMxZDkxZjI4MjJlNzAiLCJpYXQiOjE2NzYwMTkwMTYsImV4cCI6MTY3NjA1NTAxNn0.xWHXv7KgousY7gYHzhQl2EeF-vBIB0EDzclg0mgLoxM'
    }
  };

  await axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  })
}
export interface IAdditionalPositions {
  "company": {
    "title": "string",
    "agency": "string",
    "address": "string",
    "sub_district": "string",
    "district": "string",
    "province": "string",
    "post_code": "string",
    "remark": "string",
  },
  "position_title": "string",
  "remark": "string",
}


export interface IPreviosJob {
  "company": {
    "title": "string",
    "agency": "string",
    "address": "string",
    "sub_district": "string",
    "district": "string",
    "province": "string",
    "post_code": "string",
    "remark": "string"
  },
  "start_year": number,
  "end_year": number,
  "position_title": "string"
}

export interface IDs003001Csv {
  "list":
  {
    "SubmittedDate": "string",
    "PersonId": 0,
    "Position": "string",
    "Role": "string",
    "AnnualIncome": "string",
    "AnnualExpense": "string",
    "AssetsValue": "string",
    "DebtValue": "string",
    "TitleTh": "string",
    "FirstNameTh": "string",
    "MiddleNameTh": "string",
    "LastNameTh": "string",
    "TitleEn": "string",
    "FirstNameEn": "string",
    "MiddleNameEn": "string",
    "LastNameEn": "string",
    "FormerTitleTh": "string",
    "FormerFirstNameTh": "string",
    "FormerMiddleNameTh": "string",
    "FormerLastNameTh": "string",
    "FormerTitleEn": "string",
    "FormerFirstNameEn": "string",
    "FormerMiddleNameEn": "string",
    "FormerLastNameEn": "string",
    "Gender": "string",
    "Age": "string",
    "MarriageStatus": "string",
    "PositionTitle": "string",
    "Party": "string",
    "DocumentSubmittedType": "string",
    "StartWorkDate": "string",
    "InauguralDate": "string",
    "SubDistrict": "string",
    "District": "string",
    "ProvinceCode": "string",
    "Province": "string",
    "PostCode": "string",
    "ChildCount": "string",
    "NonMaritalChildCount": "string",
    "AdoptedChildCount": "string",
    "SiblingCount": "string",
    "AdditionalPositions": "string" | IAdditionalPositions[],
    "PreviousJobs": "string" | IPreviosJob[],
    "Id": 0,
    "CreatedAt": "string",
    "UpdatedAt": "string"
  }[],
  "pageInfo": {
    "pageSize": number,
    "totalRows": number,
    "isFirstPage": boolean,
    "isLastPage": boolean,
    "page": number
  }
}