import { Box, SimpleGrid } from "@chakra-ui/react";
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
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import actions from '../../actions/index';
import { userEntries } from '../../entries/createUserEntries';
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
  const defaultValues = {
    // user_id: "",
    // first_name: "",
    // last_name: "",
    // email: "",
    // password: "",
    // country_code: "",
    // phone_number: "",
    // display_picture: "",
    // login_method: "",
    // user_role: "",
    // is_email_verified:""
  };
  const [rowTableData, setRowTableData] = useState([]);
  const { userGet, user } = useSelector((state) => state?.user);

  console.log(user, 'uservalue');
  console.log(userGet, 'userGet');


  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  function onSubmit(data1) {
    console.log(data1, 'checkData');
    const data = {
      data: data1,
      method: 'post',
      apiName: 'users/create',
    };

    dispatch(actions.USER_CREATE(data));
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
      is_email_verified:""
    });
  }

  useEffect(() => {
    const data = {
      data: {},
      method: 'get',
      apiName: 'users/list?skip=0&take=50',
    };
    console.log(data, 'checkDataValue');

    dispatch(actions.USER(data));
  }, [dispatch, userGet]);

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
        updatedAt: data?.updatedAt
   
      }),
    );
    setRowTableData(tempArr);
  }, [user]);

  const handleCancel = () => {
    reset(defaultValues);
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




 {userEntries?.map((keyValue,key) => (
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
                  {keyValue.label}<Text color={brandStars}>*</Text>
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
                
                </>
              )}
            />
            {errors && errors[keyValue?.name]?.type === 'required' && (
              <div >
                {/* <CustomTypography text={`${keyValue?.label} is Required`} type="error" /> */}
                {`${keyValue?.label} is Required`}
              </div>
            )}
            {errors && errors[keyValue?.name]?.type === 'pattern' && (
              <div >
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
                  Sign In
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
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
