
function convertInMinutes (time){
  const [hour, minutes] = time.split(':');
  const minutesInOneHour = 60;
  return hour * minutesInOneHour + minutes;
}

function timeСonversion(dayStart, dayEnd, meetingStart, meetingDuration){
  const dayStartMinutes = convertInMinutes(dayStart);
  const dayEndMinutes = convertInMinutes(dayEnd);
  const meetingStartMinutes = convertInMinutes(meetingStart);

  return dayStartMinutes >= meetingStartMinutes && dayStartMinutes + meetingDuration <= dayEndMinutes;
}

timeСonversion('8:0', '10:0', '8:0', 120);
timeСonversion('08:00', '14:30', '14:00', 90);
timeСonversion('14:00', '17:30', '08:0', 90);
timeСonversion('8:00', '17:30', '08:00', 900);
