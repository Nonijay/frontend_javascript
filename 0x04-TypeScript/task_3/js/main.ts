/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";


// Create a row object
const row: RowElement = {
    firstName: "Jerome",
    lastName: "Busha"
  };
  
  // Insert the row and get the newRowID
  const newRowID: RowID = CRUD.insertRow(row);
  
  // Update the row with age
  const updatedRow: RowElement = {
    ...row, // copy existing properties
    age: 29
  };
  
  // Call updateRow
  CRUD.updateRow(newRowID, updatedRow);
  
  // Call deleteRow
  CRUD.deleteRow(newRowID);