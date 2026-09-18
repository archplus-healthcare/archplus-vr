function saveContact() {

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:ArchPlus Healthcare Pvt. Ltd.
ORG:ArchPlus Healthcare Pvt. Ltd.
TEL;TYPE=CELL:+919723891128
URL:https://www.aphcpl.in/
ADR;TYPE=WORK:;;4th Floor, C/2, Ankur Commercial Centre, Near Ankur Bus Stand, Naranpura;Ahmedabad;Gujarat;380013;India
NOTE:Medical Equipment, Healthcare Services and Diagnostic Services
END:VCARD`;

    const blob = new Blob(
        [vcard],
        {
            type: "text/vcard;charset=utf-8"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "ArchPlus-Healthcare.vcf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}


document.getElementById("year").textContent =
    new Date().getFullYear();