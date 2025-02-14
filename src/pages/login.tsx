import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { InputField, Button, Checkbox, Row, VerticalSpacer, Typography } from "@cred/neopop-web/lib/components";
import { mainColors, colorGuide, colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import './login.css';

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
      setIsChecked(event.target.checked);
  };
    return (
        <div className="login-container">
            <div className="login-image-section">
                <div className="image-overlay"></div>
                <img
                    src="https://playground.cred.club/static/media/animations.4b48768e.png"
                    alt="Login illustration"
                    className="login-image"
                />
                <div className="image-text">
                    <div className="welcome-container">
                        <Typography {...FontVariant.CirkaHeadingBold20} color={mainColors.yellow}>
                            Welcome to Our Platform
                        </Typography>
                        <Typography {...FontVariant.HeadingSemiBold16} color="white">
                            Experience seamless connectivity and security
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="login-form-section">
                <div className="login-card">
                <Typography {...FontVariant.CirkaHeadingBold20} color={mainColors.yellow} fontWeight={800} fontSize={30}>
            Login. Not everyone gets in.
        </Typography>
        <br/>
        <br/>


                    <form className="login-form">
                        <div className="form-group">
                            <InputField
                                autoFocus
                                colorConfig={{
                                    labelColor: "#0d0d0d",
                                    textColor: "#000000",
                                }}
                                colorMode="light"
                                id="email"
                                label="Your Email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>

                        <div className="form-group">
                            <InputField
                                colorConfig={{
                                    labelColor: "#0d0d0d",
                                    textColor: "#000000",
                                }}
                                colorMode="light"
                                id="password"
                                label="Your Password"
                                placeholder="Enter your password"
                                type="password"
                            />
                        </div>

                        
                        <Checkbox
            isChecked={isChecked}
            colorConfig={colorGuide.lightComponents.checkbox}
            handleChange={handleChange}
        >
            <Typography {...FontVariant.BodyRegular16} color={colorPalette.popBlack[100]}>
                Mr agree to terms & conditions
            </Typography>
        </Checkbox>
                            {/* <button type="button" className="forgot-password">
                                <Typography {...FontVariant.BodyRegular16} color={mainColors.blue}>
                                    Forgot password?
                                </Typography>
                            </button> */}


                        <Button
                            variant="primary"
                            kind="elevated"
                            size="big"
                            colorMode="dark"
                            onClick={() => {
                                console.log("I'm clicked");
                            }}
                        >
                            Sign in
                        </Button>

                        <div className="divider"></div>

                        <Typography {...FontVariant.BodyRegular16} color={colorPalette.popBlack[100]} align="center">
                            Or continue with
                        </Typography>

                        <div className="social-login">
                            <button type="button" className="social-button google">
                                Google
                            </button>
                            <button type="button" className="social-button apple">
                                Apple
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;