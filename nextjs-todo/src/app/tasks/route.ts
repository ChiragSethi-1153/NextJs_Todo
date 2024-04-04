import axios from "axios";

export async function GET() {
    try{
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
        console.log(response)
        return Response.json(response?.data, {status: response?.status});
    }catch(err : any ){
        console.log(err)
        return new Response(err?.message ?? "Something went wrong", {
                    status: err?.response?.status ?? 500,
                  });
    }
}

export async function POST(req: Request) {
    console.log(req.body)
    // const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
    // console.log(response)
    // return response
}

export async function PUT() {
    const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
    console.log(response)
    return response
}

export async function DELETE({params}: {params: {id: string}}) {
    const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks/${params.id}`)
    console.log(response)
    return response
}

// const dPOST = async (req: Request, { params }: { params: { id: string } }) => {
//     try {
      
//       let sessionDetails = await req.json();
//       const response = await axios.post(
//         `${BASE_URL}${ATTENDANCE_API_PATH}/${params.id}/attendances`,
//         {
//           student_id: [sessionDetails?.student_id],
//           status: sessionDetails?.status,
//         }
//       );
//       return Response.json(response.data, {
//         status: response.status,
//       });
//     } catch (err: any) {
//       return new Response(err?.message ?? "Something went wrong", {
//         status: err?.response?.status ?? 500,
//       });
//     }
//   };