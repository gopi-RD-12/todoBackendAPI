
# Todo Application

Main file `index.js ` and database `todoList` with a collections `users` and `todos` 

** todoList** 
`users Schema`: 

username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    todos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Todo"
        }
    ]

In the `todos` field relation between `users` and `todos` collections 

   `todos Schema`: 
    
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
  },
      description:{
        type:String,
        required:true
      },
      status:{
        type:Boolean,
        default:false
      }


      `user_id` field reference from the User unquie Id .


      ### `users API` 


       1. `Registeration API `:


      ##### path : `/user-details/register`
      ##### Method :`POST` 
      Description : To create a account in application 

      REQUEST:

      {
        "username":"abc",
        "email":"abc@gmail.com",
        "password":"abc123"
      }



      RESPONSE:


            {message: "Registered Successfully"}




      2. `Login API` : 

      ##### path : `/user-details/login`
      ##### Method :`POST` 
      Description : To login a account in application 


REQUEST:

      {
        "email":"abc@gmail.com",
        "password":"abc123"
      }



      RESPONSE:

            
            {
                "message": "Login Successfully",

                "jwt_token":"asdfghjkl.,mn bvcx"
            
            }


            
      3. `Get All Users` API 

      ##### path : `/user-details/users`
      ##### Method :`GET` 
      Description : To get all the users login  in application  

    


    4. `Get Specific User` API 

     ##### path : `/user-details/users/:userId`
      ##### Method :`GET` 
      Description : To get the specific  users by `userId` login  in application


    // user Todos 

    5. `Add Todos` API 
      ##### path : `/todo-list/todos`
      ##### Method :`POST` 
      Description : To create todos 

    6. `Get  All Todos ` API 

     ##### path : `/todo-list/todos`
      ##### Method :`GET` 
      Description : To get all todos from `todos` collections 

    7. `Get Specific Todos ` API 

     ##### path : `/todo-list/todos/:todoId`
      ##### Method :`GET` 
      Description : To get specific todos from `todos` collections  

    8. `Update Todo` API  

    ##### path : `/todo-list/todos/:todoId`
      ##### Method :`PUT` 
      Description : To update specific todos from `todos` collections  

    9. `Delete Todo ` APi 

    ##### path : `/todo-list/todos/:todoId`
      ##### Method :`DELETE` 
      Description : To delete specific todos from `todos` collections  














 

