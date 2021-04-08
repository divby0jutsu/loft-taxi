import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { addressSelector } from "../../reducers/rootReducer";
import { getAddresses, getRoute } from "../../actions";
import { Form } from "../Form";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";

const OrderForm = ({ useDispatchHook = useDispatch }) => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const dispatch = useDispatchHook();

  useEffect(() => {
    async function getAllAddresses() {
      await dispatch(getAddresses());
    }
    getAllAddresses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRoute({ address1, address2 }));
  };

  let { addresses } = useSelector(addressSelector);

  return (
    <Form
      data-testid="orderForm"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        margin: "20px",
      }}
    >
      <Grid container item wrap="nowrap" xs={12}>
        <Grid item container direction="column" xs={12} s={5}>
          <Autocomplete
            options={addresses}
            filterOptions={(addresses) =>
              addresses.filter((el) => el !== address2)
            }
            onChange={(e, value) => {
              setAddress1(value);
            }}
            fullWidth={true}
            renderInput={(params) => (
              <Input {...params} name="address1" placeholder="From" />
            )}
          />
          <Autocomplete
            options={addresses}
            onChange={(e, value) => {
              setAddress2(value);
            }}
            filterOptions={(addresses) =>
              addresses.filter((el) => el !== address1)
            }
            fullWidth={true}
            renderInput={(params) => (
              <Input {...params} name="address2" placeholder="To" />
            )}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="stretch">
        <PrimaryButton>Place order</PrimaryButton>
      </Grid>
    </Form>
  );
};

export default OrderForm;
