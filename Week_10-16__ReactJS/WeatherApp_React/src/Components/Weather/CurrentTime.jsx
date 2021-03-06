// time zone
const CurrentTime = ({ thetimezone }) => {
  const currentTime = new Date().toLocaleString("", {
    timeZone: [thetimezone],
    hour: "2-digit",
    minute: "2-digit",
  });
  return { currentTime };
};
export default CurrentTime;
