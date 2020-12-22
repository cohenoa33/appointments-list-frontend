import React from "react";
import Appointment from "./Appointment";
import { sortByDateAndTime } from "../services/helpers";
import { Table } from "reactstrap";

export default function Appointments({
  appointments,
  deleteAppointment,
  updateAppointment,
}) {
  appointments = sortByDateAndTime(appointments);
  console.log(appointments);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Time</th>
          <th>Doctor</th>
          <th>Doctor Specialty</th>
          <th>Patient Name</th>
          <th>need_insurance</th>
          {/* <th>insurance_status</th> */}
          <th>insurance_approval</th>
          <th>appointment_notes</th>
          <th>symptoms</th>
          <th>location</th>
          <th>insurance_notes</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <Appointment
            appointment={appointment}
            index={index}
            key={appointment.id}
            deleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
          />
        ))}
      </tbody>
    </Table>
  );
}
