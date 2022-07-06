import axios, { AxiosRequestConfig } from "axios";
import getConfig from "next/config";

import { Career } from "../pages/types/career";
import { CareerApiException } from "../pages/types/exception/CareerApiException";
import { getRequestApiException } from "../pages/types/exception/RequestApiException";

const { publicRuntimeConfig } = getConfig();
const { NFT_API_URL } = publicRuntimeConfig;

const baseURL = NFT_API_URL;

export class CareerApi {
  private static instance: CareerApi;

  public static getInstance(): CareerApi {
    if (!CareerApi.instance) {
      CareerApi.instance = new CareerApi();
    }
    return CareerApi.instance;
  }

  async getCareers(): Promise<Career[]> {
    const url = `http://localhost:3333/careers`;
    const config: AxiosRequestConfig = { baseURL };
    return axios
      .get(url, config)
      .then((response) =>
        response.status === 200
          ? response.data
          : getRequestApiException(response.status, CareerApiException)
      )
      .catch((error) => {
        throw getRequestApiException(error.response.status, CareerApiException);
      });
  }

  async registerCareer(
    title: string,
    period: string,
    location: string,
    salary: string,
    responsibilities: string,
    requirements: string,
    niceToHave: string
  ): Promise<any> {
    const url = `http://localhost:3333/careers`;
    const config: AxiosRequestConfig = {
      url,
    };
    const body = {
      title,
      period,
      location,
      salary,
      responsibilities,
      requirements,
      niceToHave,
    };
    return axios
      .post(url, body, config)
      .then((response) =>
        response.status === 200
          ? response.data
          : getRequestApiException(response.status, CareerApiException)
      )
      .catch((error) => {
        throw error;
      });
  }

  async updateCareer(
    _id: string,
    title: string,
    period: string,
    location: string,
    salary: string,
    responsibilities: string,
    requirements: string,
    niceToHave: string
  ): Promise<any> {
    const url = `http://localhost:3333/careers/${_id}`;
    const config: AxiosRequestConfig = {
      url,
    };
    const body = {
      title,
      period,
      location,
      salary,
      responsibilities,
      requirements,
      niceToHave,
    };
    return axios
      .put(url, body, config)
      .then((response) =>
        response.status === 200
          ? response.data
          : getRequestApiException(response.status, CareerApiException)
      )
      .catch((error) => {
        throw error;
      });
  }

  async deleteCareer(_id: string): Promise<any> {
    console.log(_id);
    const url = `http://localhost:3333/career/${_id}`;

    return axios
      .delete(url)
      .then((response) =>
        response.status === 200
          ? response.data
          : getRequestApiException(response.status, CareerApiException)
      )
      .catch((error) => {
        throw error;
      });
  }
}
