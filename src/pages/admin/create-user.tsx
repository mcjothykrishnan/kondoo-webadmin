import { Box, Select, SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
// import React from "react";
import AdminLayout from "layouts/admin";
import { TableData } from "views/admin/default/variables/columnsData";
import Card from "components/card/Card";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import actions from "../../actions/index";
import * as USERENTRIES from "../../entries/createUserEntries";
import reactSelect from "react-select";
export default function DataTables() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
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
  //redux integration
  const dispatch = useDispatch();
  const defaultValues = {};
  const [rowTableData, setRowTableData] = useState([]);
  const { user, userGet, userEdit, userCreate, userDelete } = useSelector(
    (state) => state?.user
  );
  const [entries, setEntries] = useState(USERENTRIES.userEntries);
  const [editId, setEditId] = useState();
  const [editAbleValues, setEditAbleValues] = useState({});
  const [btnTitle, setBtnTitle] = useState("Submit");
  console.log(user, "uservalue");
  console.log(userGet, "userGet");
  console.log(editId, "editId");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:editAbleValues,
  });

  function onSubmit(data1) {
    const submitData = { ...data1 };
    console.log(submitData, "checkData");
    const formData = {
      first_name: submitData.first_name,
      last_name: (submitData.last_name = ""),
      email: submitData.email,
      phone_number: (submitData.phone_number = parseInt(
        submitData.phone_number
      )),
      user_role: submitData.user_role,
      password: submitData.password,
      login_method: (submitData.login_method = "google"),
    };
    //  const phone= parseInt(data1?.phone_number)

    //   const formData = new FormData();
    // formData.append('first_name', "hjgjjyjy");
    // formData.append('phone_number', 8789968766);
    // formData.append('email', data1?.email);
    // formData.append('country_code', 344);
    // formData.append('user_role', data1?.user_role);
    // formData.append('password', data1?.password);
    // formData.append('status', data1?.status === 'Active' ? 1 : 0);

    if (editId) {
      const data = {
        data: formData,
        method: "PUT",
        apiName: `users/update/`,
        id: editId,
      };

      dispatch(actions.USER_EDIT(data));
    } else {
      const data = {
        data: formData,
        method: "post",
        apiName: "users/create",
      };

      dispatch(actions.USER_CREATE(data));
    }
    reset({
      user_id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      country_code: "",
      phone_number: "",
      display_picture: "",
      login_method: "",
      user_role: "",
      is_email_verified: "",
    });
    setEditId("");
    setBtnTitle("SUBMIT");
  }

  useEffect(() => {
    if (editId) {
      const data = {
        data: {},
        method: "GET",
        apiName: `users/`,
        id: editId,
      };

      dispatch(actions.USER_GET(data));
    }
  }, [editId]);
  useEffect(() => {
    if (editId) {
      console.log(editId, "editId");
     
        setEditAbleValues({
          
         
          first_name: userGet?.data?.first_name,
          email: userGet?.data?.email,
          phone_number: userGet?.data?.phone_number,
          user_role:userGet?.data?.user_role,
          password: userGet?.data?.password,
        });
      
    }
  }, [userGet, editId]);
  useEffect(() => {
    if (editId) {
      setBtnTitle("Submit & Update");
      reset(editAbleValues);
    }
  }, [editAbleValues]);
  useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: "users/list?skip=0&take=50",
    };
    console.log(data, "checkDataValue");

    dispatch(actions.USER(data));
  }, [dispatch, userGet,userEdit]);

  useEffect(() => {
    const tempArr = [];
    user?.data?.map((data) =>
      tempArr.push({
        id: data?.id,
        user_id: data?.user_id,
        first_name: data?.first_name,
        last_name: data?.last_name,
        email: data?.email,
        password: data?.password,
        country_code: data?.country_code,
        phone_number: data?.phone_number,
        display_picture: data?.display_picture,
        login_method: data?.login_method,
        user_role: data?.user_role,
        is_email_verified: data?.is_email_verified,
        status: data?.status,
        createdAt: data?.createdAt,
        updatedAt: data?.updatedAt,
      })
    );
    setRowTableData(tempArr);
  }, [user,userEdit,userCreate,userDelete]);

  const handleCancel = () => {
    reset({
      first_name:"",
      email: "",
      phone_number: "",
      user_role:"",
      password:"",
    });
    setBtnTitle("SUBMIT");
    setEditId();
  };
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card
          flexDirection="column"
          w="100%"
          p="50px"
          mb={"20px"}
          overflowX={{ sm: "scroll", lg: "hidden" }}
        >
          <FormControl>
            <SimpleGrid
              mb="20px"
              columns={{ sm: 1, md: 3 }}
              spacing={{ base: "20px", xl: "20px" }}
            >
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
                        {keyValue?.isTextInput && (
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
                              // type="text"
                              placeholder={keyValue.placeholder}
                              value={value}
                              onChange={onChange}
                              mb="24px"
                              fontWeight="500"
                              size="md"
                            />
                          </>
                        )}
                        {keyValue?.isPasswordInput && (
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
                            <InputGroup size="md">
                              <Input
                                isRequired={true}
                                fontSize="sm"
                                placeholder={keyValue.placeholder}
                                mb="24px"
                                size="md"
                                value={value}
                                onChange={onChange}
                                type={show ? "text" : "password"}
                                variant="auth"
                              />
                              <InputRightElement
                                display="flex"
                                alignItems="center"
                                mt="3px"
                              >
                                <Icon
                                  color={textColorSecondary}
                                  _hover={{ cursor: "pointer" }}
                                  as={
                                    show
                                      ? RiEyeCloseLine
                                      : MdOutlineRemoveRedEye
                                  }
                                  onClick={handleClick}
                                />
                              </InputRightElement>
                            </InputGroup>
                          </>
                        )}
                        {keyValue?.isDropdownInput && (
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
                            <Select
                              isRequired={true}
                              variant="auth"
                              fontSize="sm"
                              ms={{ base: "0px", md: "0px" }}
                              placeholder={keyValue.placeholder}
                              value={value}
                              onChange={onChange}
                              mb="24px"
                              fontWeight="500"
                              size="md"
                            >
                              <option value="admin">Admin</option>
                              <option value="player">Player</option>
                            </Select>
                            {/* <Select
                              id="balance"
                              variant="mini"
                              mt="5px"
                              me="0px"
                              defaultValue="admin"
                            >
                              <Input
                                isRequired={true}
                                fontSize="sm"
                                placeholder={keyValue.placeholder}
                                mb="24px"
                                size="md"
                                value={value}
                                onChange={onChange}
                                type={show ? "text" : "password"}
                                variant="auth"
                              />
                              <option value="admin">Admin</option>
                              <option value="Player">Player</option>
                            </Select> */}

                            {/* <Input
                              isRequired={true}
                              variant="auth"
                              fontSize="sm"
                              ms={{ base: "0px", md: "0px" }}
                              // type="text"
                              placeholder={keyValue.placeholder}
                              value={value}
                              onChange={onChange}
                              mb="24px"
                              fontWeight="500"
                              size="md"
                            /> */}
                          </>
                        )}
                      </>
                    )}
                  />
                  {errors && errors[keyValue?.name]?.type === "required" && (
                    <div>
                      {/* <CustomTypography text={`${keyValue?.label} is Required`} type="error" /> */}
                      {`${keyValue?.label} is Required`}
                    </div>
                  )}
                  {errors && errors[keyValue?.name]?.type === "pattern" && (
                    <div>
                      {/* <CustomTypography text={`${keyValue?.label} is Invalid`} type="error" /> */}
                      {`${keyValue?.label} is Invalid`}
                    </div>
                  )}
                </Grid>
              ))}

              <div></div>
              <div></div>
              <SimpleGrid
                style={{ display: "flex" }}
                spacing={{ base: "20px", xl: "20px" }}
              >
                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  size="sm"
                  onClick={handleSubmit(onSubmit)}
                >
                  {btnTitle}
                </Button>
                <Button
                  fontSize="sm"
                  size="sm"
                  me="0px"
                  mb="26px"
                  py="15px"
                  h="50px"
                  w="100%"
                  borderRadius="16px"
                  bgColor={googleBg}
                  color={googleText}
                  fontWeight="500"
                  _hover={googleHover}
                  _active={googleActive}
                  _focus={googleActive}
                  onClick={() => handleCancel()}
                >
                  Cancel
                </Button>
              </SimpleGrid>
            </SimpleGrid>
          </FormControl>
        </Card>

        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <ColumnsTable
            columnsData={columnsDataColumns}
            // tableData={tableDataColumns as unknown as TableData[]}
            tableData={rowTableData as unknown as TableData[]}
            onEdit={(id) => setEditId(id)}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
