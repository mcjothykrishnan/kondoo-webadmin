import React, { useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import Card from "components/card/Card";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import AdminLayout from "layouts/admin";
import { TableData } from "views/admin/default/variables/columnsData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions/index";
export default function NftMarketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const dispatch = useDispatch();
  const defaultValues = {
  };
  const [rowTableData, setRowTableData] = useState([]);
  const { userGet, user } = useSelector((state) => state?.user);

  console.log(user, "uservalue");
  console.log(userGet, "userGet");
  useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: "users/list?skip=0&take=50",
    };
    console.log(data, "checkDataValue");

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
        updatedAt: data?.updatedAt,
      })
    );
    setRowTableData(tempArr);
  }, [user]);
  return (
    <AdminLayout>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Card px="0px" mb="20px">
          <TableTopCreators
            tableData={rowTableData as unknown as TableData[]}
            columnsData={tableColumnsTopCreators}
          />
        </Card>
      </Box>
    </AdminLayout>
  );
}
