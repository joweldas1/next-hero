









import connectDB from "@/lib/connectDB"

export const POST=async(request)=>{
try {
    const db= await connectDB()
    const userCollection = db.collection("users")
    
    const newUser = await request.json()
    const email = newUser.email

    const exitEmail = await userCollection.findOne({email})
    if( exitEmail &&  exitEmail.email===email){
        return new Response(
            JSON.stringify({message:"Invalid email , Please use another email"})
        )
    } 
   else{
    const req = await userCollection.insertOne(newUser)
    return Response.json({message:"New user created"})
   }
} catch (error) {
    return Response.json({message:"Something went wrong"})
    
}
}