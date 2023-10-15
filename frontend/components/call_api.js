import axios from 'axios';

// 所持ぽじもんを取得する
export async function callPosimonList() {
  const res = await axios.get("http://127.0.0.1:8000/api/get_posimon_list/1");
  const data = res.data;

  return data;
}

// ガチャ
export async function callPosimon() {
  const res = await axios.get("http://127.0.0.1:8000/api/get_posimon/1");
  const data = res.data;

  return data;
}