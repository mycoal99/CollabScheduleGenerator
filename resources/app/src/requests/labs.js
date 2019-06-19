/*
import axios from 'axios';

function getJSON(data) {
  const jsonBegin = 'UCAL.init(';
  const jsonEnd = ');});<';

  const beginIndex = data.indexOf(jsonBegin) + jsonBegin.length;
  const endIndex = data.indexOf(jsonEnd);

  const jsonString = `[${data.slice(beginIndex, endIndex)}]`;

  return JSON.parse(jsonString);
}

// Parses labNames from html data containg class events and lab data
function getLabs(data) {
  const jsonObject = getJSON(data);

  const dateStart = jsonObject[0].date_start;
  const labEvents = jsonObject[1];

  const labs = Object.keys(labEvents)
    .filter(key => dateStart === labEvents[key].start)
    .map(key => labEvents[key].name)
    .sort();
  
  return labs;
}

export default function fetchLabs() {
  const url = 'http://labschedule.collaborate.ucsb.edu/';

  //const url = 'https://www.aaiscloud.com/UCA_SantaBarbara/~api/calendar/calendarList?action=get?view=json&fields=BuildingCode,RoomNumber&filter=(Location.RoomId in ("c169abb2-4e33-4a06-a8c8-7bb92dcb35af","3dd67f3c-d656-4661-ad21-749afbbd68ee","d35b75db-028a-4274-a069-2be6baafc4e9","8e1190da-a1a2-4b19-ac0e-ba85528d974d","5a7b7919-3835-4ee3-8a76-3cd86ceeb120","c889c6c7-e37f-4793-8011-07fa6de1cf03","39f1e083-32ea-43b1-95cc-9f158965d62e","7fe39899-543f-4552-b846-b95c7f4192ba","072f7006-7417-4fed-9069-e37c4f6ae6a8","1128e303-8e56-4d30-b225-7ced362dc9fe","b0d90fb9-282a-46cf-b75b-a1dfadaae8e5","fe81c030-a27c-4fc5-928e-3f050922f867","368bc8e5-e304-41b4-806b-24af571298fd","d2ff24c6-0033-4fab-94bb-d76e7c4fa008","9ea261e2-4f56-4d26-89a9-be2c730450c4","e47668a2-007e-426f-86dd-5c48968a2df2","99412324-d216-4ec9-9f7a-be6af9069d2c"))';
  const options = {
    transformResponse: getLabs,
  };

  //return axios.get(url, options);
  console.log(url);
  return ["HSSB 1203F OA", "Music 1401 OA", "SSMS 1005", "SSMS 1007", "SSMS 1301", "SSMS 1302", "SSMS 1303", "SSMS 1304", "BSIF 1217", "PSYE 1805", "PsyE 1806", "Phelps 1513", "Phelps 1514", "Phelps 1517", "Phelps 1518", "Phelps 1521 OA", "Phelps 1525", "Phelps 1526", "Phelps 1529", "Phelps 1530"];
}
*/