import client from "../apollo-client";
import { gql } from "../node_modules/@apollo/client/core/index";
// import {  gql } from '@apollo/client';
export async function GetDataContractors() {

  const { data: { contractors } }: any = await client.query({
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