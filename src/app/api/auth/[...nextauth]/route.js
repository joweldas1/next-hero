import connectDB from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    secret:process.env.NEXT_API_SECRET ,
    session:{
        strategy:"jwt",
        maxAge:30 * 24 * 60 * 60 
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{label:'Email',name:'email',type:'text', required:true,placeholder:"Enter your email"},
                password:{label:'Password',name:'password',type:'password', required:true,placeholder:"Enter your password"}
            },

            async authorize(credentials){
                const {email,password} = credentials
                if(!credentials){
                    return null
                }
                if(email){  
                    const db = await connectDB()
                    const currentUser = await db.collection("users").findOne({email})

                    if(currentUser){
                        if(currentUser.password===password){
                            return currentUser 
                        }
                    }
                }
                return null
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_API_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_API_GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.NEXT_API_GITHUB_CLIENT_ID,
            clientSecret:process.env.NEXT_API_GITHUB_CLIENT_SECRET
          })
    ]
    ,
    callbacks:{
           
        async jwt({ token, account, user }) {
          if (account) {
            token.type= user.type
          }
          return token
        },
        async session({ session,  token }) {
          session.user.type=token.type
          return session
        },
  }, 
  
    
    pages:{
    }
}
const handler = NextAuth(authOptions)


const users = [
    {
        id:1,
        name:"Zahid",
        email:"z@gmail.com",
        type:'admin',
        image:'https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_1280.png',
        password:"asdf"
    },
    {
        id:2,
        name:"Xahid",
        email:"zx@gmail.com",
        type:'admin',
        password:"asdf"
    },
    {
        id:1,
        name:"Yahid",
        email:"y@gmail.com",
        type:'admin',   
        password:"asdf"
    },
]

export { handler as GET, handler as POST }



  // callbacks:{
    //     async jwt({token,user}){
    //         console.log(token,user);
            
    //         if (user) { if (typeof window !== "undefined") { localStorage.setItem("access_token", user.tokens.access_token); } return { ...token, ...user }; } return token; }
    // }

// import connectDB from "@/lib/connectDB";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// export const authOptions = {
//   secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   providers: [
   
//     CredentialsProvider({
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           required: true,
//           placeholder: "You email",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           required: true,
//           placeholder: "Enter Password",
//         },
//       },

//       async authorize(credentials) {
//         const { email, password } = credentials;

//         if (!credentials) {
//           return null;
//         }

//         // if (email) {
//         // //   const db = await connectDB();
//         //   const currentUser =await db.collection('users').findOne({ email });
          
         
//         //   if (currentUser) {
//         //     if (currentUser.password === password) {
//         //       return currentUser;
//         //     }
//         //   }
//         // }    
//         return null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
//     }),
//     GitHubProvider({
//       clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
//       clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
//     })
 
//   ],

//   callbacks : {
//     async jwt({ token, account, user }) {
//       // Persist the OAuth access_token and or the user id to the token right after signin
//       if (account) {
//         token.type = user.type
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.type = token.type
//       return session;
//     },
//   }


// };

// const handler = NextAuth(authOptions);



// export { handler as GET, handler as POST };