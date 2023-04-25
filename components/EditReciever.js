import React from "react";
import { TextLinkContent } from "./Styles.js";
import { deleteUser } from "./../Database.js";
import { useNavigation } from "@react-navigation/native";
//import HomePage from "./../screens/HomePage.js";
import Unsubscribe from "../screens/Unsubscribe.js";
import { Alert } from "react-native";
import ReceiverList from "../screens/ReceiverList.js";




const handleEditReceiver = customer => {
    setSelectedCustomer(customer);
    setEditing(true);
  };


const handleSaveReceiver = async () => {
    // try {
    //   const response = await fetch(`http://your-backend-endpoint.com/customers/${selectedCustomer.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(selectedCustomer),
    //   });
    //   const updatedCustomer = await response.json();
    //   const updatedCustomers = customers.map(customer => {
    //     if (customer.id === updatedCustomer.id) {
    //       return updatedCustomer;
    //     }
    //     return customer;
    //   });
    //   setCustomers(updatedCustomers);
    //   setEditing(false);
    // } catch (error) {
    //   console.error(error);
    // }

}