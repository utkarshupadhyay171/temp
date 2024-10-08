import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  Button,
  Card,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { updateEmployeeAddress } from "../Services/user-service";
import { toast } from "react-toastify";
export default function EditPermanentAddress(props) {
    var username = Cookies.get("username");
  const [addressToBeEdited1, setAddressToBeEdited1] = useState({
    city: props.userData.emp.permanentAddress.city,
    state: props.userData.emp.permanentAddress.state,
    street: props.userData.emp.permanentAddress.street,
    pincode: props.userData.emp.permanentAddress.pincode,
  });
  const handleChangeEditPermanentAddress = (event, property) => {
    setAddressToBeEdited1({
      ...addressToBeEdited1,
      [property]: event.target.value,
    });
  };
  const handleSaveEditedPermanentAddress = (id) => {
    updateEmployeeAddress(username, id, addressToBeEdited1).then((response) => {
      console.log(response);
      props.setIsEditPermanentAddressOn(false);
      props.setIsEditPermanentAddress(true);
      toast.info("Employe Permanent Address Updated", {
        position: "bottom-center",
      });
    });
  };
  const handleEditPermanenttAddressCancelButton = () => {
    props.setIsEditPermanentAddressOn(false);
  };
  return (
    <div>
      <Card
        className="my-2"
        color="secondary"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Edit Permanent Address</CardHeader>

        <Form>
        <FormGroup floating>
            <Input
              type="text"
              id="street"
              name="street"
              onChange={(event) =>
                handleChangeEditPermanentAddress(event, "street")
              }
              value={addressToBeEdited1.street}
            />
            <Label htmlFor="street">Street</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              type="text"
              id="pincode"
              name="pincode"
              onChange={(event) =>
                handleChangeEditPermanentAddress(event, "pincode")
              }
              value={addressToBeEdited1.pincode}
            />
            <Label htmlFor="pincode">Pincode</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              type="text"
              id="city"
              name="city"
              onChange={(event) =>
                handleChangeEditPermanentAddress(event, "city")
              }
              value={addressToBeEdited1.city}
            />
            <Label htmlFor="city">City</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              type="text"
              id="state"
              name="state"
              onChange={(event) =>
                handleChangeEditPermanentAddress(event, "state")
              }
              value={addressToBeEdited1.state}
            />
            <Label htmlFor="state">State</Label>
          </FormGroup>
          <Button
            color="primary"
            onClick={(event) =>
              handleSaveEditedPermanentAddress(props.userData.emp.permanentAddress.id)
            }
          >
            Save
          </Button>
          <Button
            color="info"
            onClick={handleEditPermanenttAddressCancelButton}
          >
            Cancel
          </Button>
        </Form>
      </Card>
    </div>
  );
}
