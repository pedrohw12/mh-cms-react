import { CareerApi } from "../api/careerApi";
import { Career } from "../pages/types/career";
import { CareerApiException } from "../pages/types/exception/CareerApiException";
import { RequestApiException } from "../pages/types/exception/RequestApiException";

export class CareerRepository {
  careerApi: CareerApi;

  constructor() {
    this.careerApi = CareerApi.getInstance();
  }

  async getCareers(): Promise<Career[]> {
    return this.careerApi
      .getCareers()
      .then(async (data) => {
        return data;
      })
      .catch((error) => {
        if (
          error instanceof CareerApiException ||
          error instanceof RequestApiException
        ) {
          throw error;
        }
        throw new Error("Error fetching careers");
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
    if (!title || !period || !location || !salary || !responsibilities) {
      alert("Please fill all the inputs.");
      return;
    }
    return this.careerApi
      .registerCareer(
        title,
        period,
        location,
        salary,
        responsibilities,
        requirements,
        niceToHave
      )
      .then(async (data) => {
        alert("Career successfully registered!");
        return data;
      })
      .catch((error) => {
        if (
          error instanceof CareerApiException ||
          error instanceof RequestApiException
        ) {
          throw error;
        }
        throw new Error("Error registering careers");
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
    return this.careerApi
      .updateCareer(
        _id,
        title,
        period,
        location,
        salary,
        responsibilities,
        requirements,
        niceToHave
      )
      .then(async (data) => {
        alert("Career successfully updated!");
        return data;
      })
      .catch((error) => {
        if (
          error instanceof CareerApiException ||
          error instanceof RequestApiException
        ) {
          throw error;
        }
        throw new Error("Error updating careers");
      });
  }

  async deleteCareer(_id: string): Promise<any> {
    console.log(_id)
    let confirmAction = confirm("Are you sure to delete this career?");
    return (
      confirmAction &&
      this.careerApi
        .deleteCareer(_id)
        .then(async (data) => {
          alert("Career successfully deleted!");
          return data;
        })
        .catch((error) => {
          if (
            error instanceof CareerApiException ||
            error instanceof RequestApiException
          ) {
            throw error;
          }
          throw new Error("Error deleting career");
        })
    );
  }
}
