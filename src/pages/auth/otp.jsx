import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  
  
  export function OTP() {
    return (
      <section className="m-8 flex gap-4">
        <div className="w-full lg:w-3/5 mt-24">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">Enter the OTP</Typography>
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
            <div className="mb-1 flex flex-col gap-6">
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
  
            </div>
            <Button className="mt-6" fullWidth>
              Submit
            </Button>
          </form>
  
        </div>
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src="/img/together2.jpg"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
  
      </section>
    );
  }
  
  export default OTP;
  