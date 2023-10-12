import db from '@utils/database'


import {NextRequest,NextResponse} from "next/server";

type ResponseData = {
    message: string
  }
   
  export async function GET(req: NextRequest,res: NextResponse ) {
    try{
      const data= await db.query("SELECT * FROM poblacion");
      return NextResponse.json({data:data},{status:200})
    }catch(error){
      return NextResponse.json({error:error},{status:401});
    }
  }