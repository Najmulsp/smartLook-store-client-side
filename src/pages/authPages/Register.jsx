import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
	// const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { toast } = useToast();

    const handleRegister = async (e) =>{
        e.preventDefault();
       
        const  name = e.target.name.value;
        const  email = e.target.email.value;
        const  password = e.target.password.value;
        const newUser={name, email, password}

		dispatch(registerUser(newUser)).then((data) => {
			if (data?.payload?.success) {
			  toast({
				title: data?.payload?.message,
			  });
			  navigate("/auth/login");
			} else {
			  toast({
				title: data?.payload?.message,
				variant: "destructive",
			  });
			}
		  });
    }


    return (
        <section
			style={{
				backgroundImage: `url('/assets/background/bg image.webp')`,
				backgroundRepeat: "no-repeat", backgroundSize: "cover",
			  }}
			className=" dark:text-gray-800">
	<div className="container flex flex-col justify-center items-center ite p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			{/* <img src={registerLogo}  alt="Register logo"/> */}
		</div>

		<div className="w-full max-w-md mr-6 p-8 mb-10 space-y-3 rounded-xl border border-orange-500 ">
	<h1 className="text-2xl font-bold text-center">Register</h1>
    <p className="text-sm text-center">Register to access your account</p>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block ">Name</label>
			<input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border rounded-md border-orange-300  bg-transparent focus:border-orange-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="User Email" className="block ">Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent focus:border-orange-600" />
		</div>
		<div className="relative space-y-1 text-sm">
			<label htmlFor="password" className="block ">Password</label>
			<input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent focus:border-orange-600" />
			<span
                className="text-2xl absolute top-8 right-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline />
                )}
              </span>
		</div>
		<button type="submit" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-[#f2b076] to-[#f24004] dark:text-gray-50">Register</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	
		{/* <SocialLogin></SocialLogin> */}
	
	<p className="text-xs text-center sm:px-6">Already have an account?
		<Link  to="/auth/login" className="underline font-bold"> Login</Link>
	</p>
</div>
	</div>
</section>
    );
};

export default Register;