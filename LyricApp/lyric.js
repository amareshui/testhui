const form=document.getElementById('form');
const search=document.getElementById('search');
const result=document.getElementById('result');
const more=document.getElementById('more');

const apiURL="https://api.lyrics.ovh";

form.addEventListener('submit',e=>{
    e.preventDefault();
    const songtext=search.value.trim();
    
    if(!songtext){
        alert("ป้อนข้อมูลไม่ถูกต้อง")
    } else{
        searchLyrics();
    }
})

async function searchLyrics(song) {
    const res = await fetch(`${apiURL}/suggest/${song}`);
    const allsong = await res.json();
    showData(allsong);
}
function showData(songs) {
    result.innerHTML=`
        <ul class="songs">
            ${songs.data.map(song=>
                `<li>
                    <spand>
                        <strong>${song.artist.name}</strong> - ${song.title} 
                    </spand>
                    <button class="btn">เนื้อเพลง</button>
                </li>`
                ).join("")}
        </ul>
    `;
}