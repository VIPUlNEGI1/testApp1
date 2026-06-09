const monthNames={JAN:'01',FEB:'02',MAR:'03',APR:'04',MAY:'05',JUN:'06',JUL:'07',AUG:'08',SEP:'09',OCT:'10',NOV:'11',DEC:'12'};
const toIsoDate=(raw)=>{if(!raw)return'';const parts=raw.trim().split('-');if(parts.length!==3)return raw;const [day,month,year]=parts;const normalized=monthNames[month.toUpperCase()]||month;return `${year}-${normalized}-${day.padStart(2,'0')}`;};
const data=[{attendancedate:'29-MAY-2026'},{attendancedate:'05-MAY-2026'}];
const map=data.reduce((acc,item)=>{acc[toIsoDate(item.attendancedate)]=item;return acc;},{});
console.log(JSON.stringify(map));
const makeDays=(date)=>{const year=date.getFullYear();const month=date.getMonth();const firstDay=new Date(year,month,1);const startDay=firstDay.getDay();const startDate=new Date(year,month,1-startDay);return Array.from({length:42},(_,i)=>{const current=new Date(startDate);current.setDate(startDate.getDate()+i);const dateString=`${current.getFullYear()}-${`${current.getMonth()+1}`.padStart(2,'0')}-${`${current.getDate()}`.padStart(2,'0')}`;return dateString;});};
console.log(makeDays(new Date(2026,4,1)).slice(0,10));
