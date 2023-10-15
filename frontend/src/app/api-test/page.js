import { callPosimonList, callPosimon, callAllPosimon } from "../../../components/call_api";

async function page() {
  const data = await callAllPosimon();
  console.log(data);

  return (
    <div>API Test</div>
  )
}

export default page;
