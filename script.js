const warehouses = [

{
    region:"ภาคเหนือ",
    warehouse:"จ.เชียงราย 1 (อ.เมือง)",
    manager:"เสกสันต์ นครเนียม",
    phone:"080-500-1014",
    area:"อ.เมือง"
},

{
    region:"ภาคเหนือ",
    warehouse:"จ.พะเยา 1 (ดอกคำใต้)",
    manager:"ประไพร โพธิ์ป้อม",
    phone:"087-311-9949",
    area:"อ.เมือง, อ.ดอกคำใต้"
},

{
    region:"ภาคเหนือ",
    warehouse:"จ.อุตรดิตถ์ 2 (อ.เมือง)",
    manager:"วรพัทธ์ พิลึก",
    phone:"093-493-9646",
    area:"อ.เมือง"
},

{
    region:"ภาคเหนือ",
    warehouse:"จ.เพชรบูรณ์ 2 (น้ำหนาว)",
    manager:"วนารัตน์ ดวงจัง",
    phone:"065-323-5424",
    area:"อ.น้ำหนาว"
},

{
    region:"ภาคเหนือ",
    warehouse:"จ.น่าน 3 (ท่าวังผา)",
    manager:"ณัฐพล อินไชย",
    phone:"096-241-6923",
    area:"อ.ท่าวังผา"
}

];

const container =
document.getElementById("warehouse-list");

warehouses.forEach(item=>{

container.innerHTML += `
<div class="card">

<h3>${item.warehouse}</h3>

<p>👤 ${item.manager}</p>

<p class="phone">📞 ${item.phone}</p>

<p>📍 ${item.area}</p>

</div>
`;

});
