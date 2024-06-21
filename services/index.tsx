import request, {gql} from "graphql-request"

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwt9p0ds00j908umkshwzvkt/master";
export const getCarsList = async () => {
    const query = gql`
      query CarLists {
          carLists {
            carAvg
            createdAt
            id
            name
            price
            publishedAt
            seat
            updatedAt
            carType
            carBrand
            image {
              url
            }
            address {
              id
            }
          }
        }
         `

    const result = await request(MASTER_URL, query);
    console.log(result, "result=========>")
    return result;
}


export const getStoreLocations = async () => {
    try {
        const query = gql`
        query storeLocation {
        storesLocations {
        address
      }
    }
  `

        const result = await request(MASTER_URL, query);
        return result;
    } catch (err) {
        console.log(err);

    }
}

export const getCarLocation = async (formValue: any) => {
    try {
        const query = gql`
        query getCarLocation {
         carLists (where: { id: "${formValue}" }) {
        address {
      address
    }
  }
}
  `

        const result = await request(MASTER_URL, query);
        return result;
    } catch (err) {
        console.log(err);
    }
}


export const createBooking = async (formValue: any) => {
    console.log(formValue, "/////////////////////////")
    const mutationQuery = gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` + formValue.userName + `", 
      pickUpDate: "` + formValue.pickUpDate + `", 
      pickUpTime: "` + formValue.pickUpTime + `", 
      dropOffDate: "` + formValue.dropOffDate + `",
      address : "` + formValue.location + `" ,
      dropOffTime: "` + formValue.dropOffTime + `", 
      contactNumber: "` + formValue.contactNumber + `", 
      email: "` + formValue.email + `",
      carId: "` + formValue.carId + `",
     }
    ) {
      id
    }
  }
  `
    console.log(`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` + formValue.userName + `", 
      pickUpDate: "` + formValue.pickUpDate + `", 
      pickUpTime: "` + formValue.pickUpTime + `", 
      dropOffDate: "` + formValue.dropOffDate + `", 
      dropOffTime: "` + formValue.dropOffTime + `", 
      contactNumber: "` + formValue.contactNumber + `", 
      email: "` + formValue.email + `", 
    }
    ) {
      id
    }
  }
  `)
    const result = await request(MASTER_URL, mutationQuery);
    return result;
}