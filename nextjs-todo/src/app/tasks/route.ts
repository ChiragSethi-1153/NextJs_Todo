import axios from "axios";

export async function GET() {
    try{
        const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
        console.log(response)
        return response
    }catch(err){
        console.log(err)
        return 
    }
}

export async function POST() {
    const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
    console.log(response)
    return response
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