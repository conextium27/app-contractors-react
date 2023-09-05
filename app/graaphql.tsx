const API_URL = 'http://localhost:1377/graphql';

const CONTRACTORS_QUERY = `
query{
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
  `;

async function fetchData() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query:CONTRACTORS_QUERY }),
  });

  if (!response.ok) {
    throw new Error('Error al realizar la consulta GraphQL');
  }

  const data = await response.json();
  console.log(1111, data.data.contractors.data)
  return data.data.contractors.data.map((value:any) => {
    return value.attributes
  });
}
export default fetchData;
