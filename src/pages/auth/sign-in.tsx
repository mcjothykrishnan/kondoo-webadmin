import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuthLayout from "layouts/auth/Default";
// Assets
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Footer from "components/footer/FooterAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import actions from "../../actions/index";
import Router from "next/router";
import entries from "entries/authEntries";
export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const errCol = useColorModeValue("red.500", "red.400");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const defaultValues = {};
  const [rowTableData, setRowTableData] = useState([]);
  const loginAdmin = useSelector((state) => state?.login?.login);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  function onSubmit(data1) {
    const submitData = { ...data1 };
    console.log(submitData, "checkData");
    const formData = {
      email: submitData.email,
      password: submitData.password,
    };

    const data = {
      data: formData,
      method: "post",
      apiName: "users/admin/sign-in",
    };

    dispatch(actions.LOGIN_ADMIN(data));
    // setNav();
    reset({
      email: "",
      password: "",
    });
  }

  const setNav = () => {
    Router.push("/admin/create-user");
  };

  useEffect(() => {
    if (loginAdmin?.data?.Success === true) {
      setNav();
    }
    if (loginAdmin?.data?.Success === false) {
    }
  }, [loginAdmin]);

  const handleCancel = () => {
    reset(defaultValues);
  };
  return (
    <DefaultAuthLayout illustrationBackground={"/img/auth/auth.png"}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            {entries?.map((keyValue, key) => (
              <Grid item md={keyValue.breakpoint} sm={12} xs={12} key={key}>
                <Controller
                  name={keyValue.name}
                  rules={{
                    required: keyValue?.validation?.required,
                    pattern: keyValue.pattern,
                  }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      {keyValue?.textField && (
                        <>
                          <FormLabel
                            display="flex"
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            mb="8px"
                          >
                            {keyValue.label}
                            <Text color={brandStars}>*</Text>
                          </FormLabel>
                          <Input
                            isRequired={true}
                            variant="auth"
                            fontSize="sm"
                            ms={{ base: "0px", md: "0px" }}
                            type="email"
                            placeholder={keyValue.placeholder}
                            value={value}
                            onChange={onChange}
                            // mb="24px"
                            fontWeight="500"
                            size="lg"
                          />
                        </>
                      )}
                      {keyValue?.passwordTextField && (
                        <>
                          <FormLabel
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            display="flex"
                          >
                            {keyValue.label}
                            <Text color={brandStars}>*</Text>
                          </FormLabel>
                          <InputGroup size="md">
                            <Input
                              isRequired={true}
                              fontSize="sm"
                              placeholder={keyValue.placeholder}
                              value={value}
                              onChange={onChange}
                              // mb="24px"
                              size="lg"
                              type={show ? "text" : "password"}
                              variant="auth"
                            />
                            <InputRightElement
                              display="flex"
                              alignItems="center"
                              mt="4px"
                            >
                              <Icon
                                color={textColorSecondary}
                                _hover={{ cursor: "pointer" }}
                                as={
                                  show ? RiEyeCloseLine : MdOutlineRemoveRedEye
                                }
                                onClick={handleClick}
                              />
                            </InputRightElement>
                          </InputGroup>
                        </>
                      )}
                    </>
                  )}
                />
                {errors && errors[keyValue?.name]?.type === "required" && (
                  <Text color={errCol}>
                    {/* <CustomTypography text={`${keyValue?.label} is Required`} type="error" /> */}
                    {`${keyValue?.label} is Required`}
                  </Text>
                )}
                {errors && errors[keyValue?.name]?.type === "pattern" && (
                  <Text color={errCol}>
                    {/* <CustomTypography text={`${keyValue?.label} is Invalid`} type="error" /> */}
                    {`${keyValue?.label} is Invalid`}
                  </Text>
                )}
              </Grid>
            ))}

            <Flex justifyContent="space-between" align="center" mb="24px" mt="10px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <Link href="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </Link>
            </Flex>
            <Link href="/admin/create-user">
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                onClick={handleSubmit(onSubmit)}
              >
                Sign In
              </Button>
            </Link>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Not registered yet?
              <Link href="/auth/sign-up">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Create an Account
                </Text>
              </Link>
            </Text>
          </Flex>
          <Flex align="center" mb="25px">
            <HSeparator />
            <Text color="gray.400" mx="14px">
              or
            </Text>
            <HSeparator />
          </Flex>
          <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            bgColor={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button>
          <Footer />
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
