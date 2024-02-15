import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar() {
  return <DayPicker className="text-neutral" selected={new Date()} />;
}
