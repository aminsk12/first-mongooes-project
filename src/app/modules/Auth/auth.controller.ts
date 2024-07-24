import catchhAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";

const loginUser = catchhAsync(async(req,res)=>{
    const result = await AuthService.loginUser(req.body)

    res.status(200).json({
        success: true,
        message: "User is logged succedfully",
        data: result,
      });
})

export const Authcontroller ={
    loginUser
}