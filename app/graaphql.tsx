
import client from "../apollo-client";
import { gql } from "@apollo/client";

export async function GetDataContractors() {

  const {  error , data: { contractors } }: any = await client.query({
    
    query: gql`
    {
      contractors{
        data{
          attributes{
            fullname,
            specialities,
            dayrate,
            availability
          }
        }
      }
    }
          `,
          
  });
  return contractors.data.map((value: any) => {
    const res = { ...value.attributes };
    return res;
  });
}