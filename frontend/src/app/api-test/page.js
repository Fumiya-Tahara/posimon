import { callPosimonList, callPosimon } from "../../../components/call_api";

async function page(id) {
  const data = await callPosimonList();
  console.log(data[id]);

  return (
    <div>API Test</div>
  )
}

export default page;
