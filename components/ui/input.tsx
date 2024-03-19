import * as React from "react";
import { ForwardedRef } from "react";

import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeLowVision,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputLoginUsername = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className="w-full p-2 border-b focus:border-b-2 outline-0"
          ref={ref}
          {...props}
        />
        <div className="absolute top-2 right-3 ">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    );
  }
);
InputLoginUsername.displayName = "InputLoginUsername";

const InputLoginPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [passwordShown, setPasswordShown] = React.useState(false);
    const toggleEye = () => {
      setPasswordShown(!passwordShown);
    };
    return (
      <div className="relative">
        <input
          type={passwordShown ? "text" : "password"}
          placeholder={passwordShown ? "password" : "********"}
          className="w-full p-2 pr-3 border-b focus:border-b-2 outline-0"
          ref={ref}
          {...props}
        />
        <div
          className="absolute cursor-pointer top-2 right-3"
          id="toggle-password"
          onClick={toggleEye}
        >
          <FontAwesomeIcon icon={passwordShown ? faEye : faEyeLowVision} />
        </div>
      </div>
    );
  }
);
InputLoginPassword.displayName = "InputLoginPassword";

export { Input, InputLoginUsername, InputLoginPassword };
