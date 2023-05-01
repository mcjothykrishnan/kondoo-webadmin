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
// import React from "react";
import AdminLayout from "layouts/admin";
import Card from "components/card/Card";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import actions from "../../../actions/index";
import * as USERENTRIES from "../../../entries/userRoleEntries";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";

// import reactSelect from "react-select";
import Swal from 'sweetalert2'
import { columnUserRole } from "views/admin/dataTables/variables/columnsData";
import { TableData } from "views/admin/default/variables/columnsData";
export default function DataTables() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const errCol = useColorModeValue("red.500", "red.400");

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
  const loginAdmin = useSelector((state) => state?.login?.login);
  console.log(loginAdmin, "loginAdmin");
  const defaultValues = {};
  const [rowTableData, setRowTableData] = useState([]);
  const { role, roleGet, roleEdit, roleCreate, roleDelete } = useSelector(
    (state) => state?.role
  );
  const [entries, setEntries] = useState(USERENTRIES.entries);
  const [editId, setEditId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [editAbleValues, setEditAbleValues] = useState({});
  const [btnTitle, setBtnTitle] = useState("Submit");
 console.log(rowTableData,"dwt")

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: editAbleValues,
  });

  function onSubmit(data1) {
    const submitData = { ...data1 };
    const formData = {
      user_role: submitData.user_role,  
      is_admin:true
    };
  

    if (editId) {
      const data = {
        data: formData,
        method: "PUT",
        apiName: `users/role/update/`,
        id: editId,
      };

      dispatch(actions.ROLE_EDIT(data));
     
    } else {
      const data = {
        data: formData,
        method: "post",
        apiName: "users/role/create",
      };

      dispatch(actions.ROLE_CREATE(data));
     
    }
    reset({
      
      user_role: "",
    });

    setEditId("");
    setEntries(USERENTRIES.entries);
    setBtnTitle("Submit");
  }

  useEffect(() => {
    if (editId) {
      const data = {
        data: {},
        method: "GET",
        apiName: `users/role/`,
        id: editId,
      };

      dispatch(actions.ROLE_GET(data));
    }
  }, [editId]);
  useEffect(() => {
    if (editId) {
      console.log(editId, "editId");

      setEditAbleValues({
        user_role: roleGet?.data?.user_role,
        status:"active",
        is_admin:true
      });
    }
  }, [roleGet, editId]);
  useEffect(() => {
    if (editId) {
      // setEntries(USERENTRIES.userEditEntries);
      setBtnTitle("Update");
      reset(editAbleValues);
    }
  }, [editAbleValues]);
  useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: "users/role/list",
    };

    dispatch(actions.ROLE(data));
  }, [dispatch, roleGet, roleEdit]);

  useEffect(() => {
    const tempArr = [];
    console.log(tempArr,"dfgdg")
    role?.data?.map((data) =>

      tempArr.push({
       
        


        id:  data?.id,
        user_role:  data?.user_role,
        is_admin:  data?.is_admin,
        status:  data?.status,
        updated_by:  data?.updated_by,
        createdAt:  data?.createdAt,
        updatedAt:  data?.updatedAt,
        
     
      })

    );
    setRowTableData(tempArr);
  }, [role, roleEdit, roleCreate, roleDelete]);





  const handleCancel = () => {
    reset({
      user_role: "",
    });
    setEntries(USERENTRIES.entries);
    setBtnTitle("Submit");
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
                              placeholder={keyValue.placeholder}
                              value={value}
                              onChange={onChange}
                              fontWeight="500"
                              size="md"
                            />
                          </>
                        )}
                        
                      </>
                    )}
                  />
                  {errors && errors[keyValue?.name]?.type === "required" && (
                    <Text color={errCol}>
                      {`${keyValue?.label} is Required`}
                    </Text>
                  )}
                  {errors && errors[keyValue?.name]?.type === "pattern" && (
                    <Text color={errCol}>
                      {`${keyValue?.validation_error_message}`}
                    </Text>
                  )}
                </Grid>
              ))}
            </SimpleGrid>
            <SimpleGrid
              style={{ display: "flex", justifyContent: "end" }}
              spacing={{ base: "20px", xl: "20px" }}
            >
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="20%"
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
                w="20%"
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
          </FormControl>
        </Card>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <ColumnsTable
            columnsData={columnUserRole}
            tableData={rowTableData as unknown as TableData[]}
            onEdit={(id) => setEditId(id)}
            onDelete={(id) => setDeleteId(id)}
          />
        </SimpleGrid>
       
      </Box>
    </AdminLayout>
  );
}
