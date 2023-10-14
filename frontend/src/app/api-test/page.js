import { callPosimonList, callPosimon } from "../../../components/call_api";

async function page() {
  const data = await callPosimonList();
  console.log(data);

  return (
    <div>API Test</div>
  )
}

export default page;
