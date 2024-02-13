// Log to console
// console.log(message + "\n");

header.innerText = "Select your printer and then work your way down the page."

let selPrinter = 0, selLinear = 0, selXstop = 0, selExtruder = 0;
let selHotend = 0, UHF = 0, selProbe = 0, selUmbilical = 0, hotGroup = "mini";
let selChain = 0, selStrain = 0, selDisplay = 0, selStatus = 0;

let section01 = 0; // printer
let section02 = 0; // linear rail
let section03 = 0; // x endstop
let section04 = 0; // extruder
let section05 = 0; // hotend
let section06 = 0; // probe
let section07 = 0; // umbilical
let section08 = 0; // cable chain
let section09 = 0; // strain relief
let section10 = 0; // display
let section11 = 0; // status LED

let selected, variables, checkList;

function countSelected() {selected = section01 + section02 + section03 + section04 + section05 
    + section06 + section07 + section08 + section09 + section10 + section11;}

function clean() {
    var element = document.getElementById("linearRails1");
    element.classList.add("hidden");
    var element = document.getElementById("linearRails2");
    element.classList.add("hidden");
    var element = document.getElementById("xstop");
    element.classList.add("hidden");
    var element = document.getElementById("probes01");
    element.classList.add("hidden");
    var element = document.getElementById("probes02");
    element.classList.add("hidden");
    var element = document.getElementById("probes03");
    element.classList.remove("hidden");
    var element = document.getElementById("probes04");
    element.classList.add("hidden");
    var element = document.getElementById("cblChain");
    element.classList.add("hidden");
    var element = document.getElementById("strain");
    element.classList.add("hidden");
}

clean();

printer1.onclick = function() {prntr(1,"printer1",1,0,1,1,0,0,0,0,1,0,1)};
printer2.onclick = function() {prntr(2,"printer2",1,0,1,1,0,0,0,0,1,0,1)};
printer3.onclick = function() {prntr(3,"printer3",0,1,0,0,1,0,0,0,1,0,1)};
printer4.onclick = function() {prntr(4,"printer4",0,0,0,0,0,1,0,1,1,1,0)};
printer5.onclick = function() {prntr(5,"printer5",0,0,0,0,0,1,0,1,1,1,0)};
printer6.onclick = function() {prntr(6,"printer6",0,0,0,0,1,0,0,1,1,1,0)};
printer7.onclick = function() {prntr(7,"printer7",0,0,0,0,0,0,1,0,1,1,1)};

function prntr(sel,printr,lr1,lr2,xstp,prb1,prb2,prb3,prb4,chn,strn,sec2,sec8) {
    deselectPrinters();
    deselectLinear();
    deselectXstop();
    deselectProbes();
    var element = document.getElementById("linearRails1");
    if (lr1) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selLinear = 0; }
    var element = document.getElementById("linearRails2");
    if (lr2) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selLinear =0; }
    var element = document.getElementById("xstop");
    if (xstp) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selXstop = 0; 
        section03 = 1; }
    var element = document.getElementById("probes01");
    if (prb1) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selProbe = 0; }
    var element = document.getElementById("probes02");
    if (prb2) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selProbe = 0; }
    var element = document.getElementById("probes03");
    if (prb3) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selProbe = 0; }
    var element = document.getElementById("probes04");
    if (prb4) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selProbe = 0; }
    var element = document.getElementById("cblChain");
    if (chn) {element.classList.remove("hidden");} else {
        element.classList.add("hidden");
        selChain = 0;
        section08 = 1; }
    var element = document.getElementById(printr);
    element.classList.add("selected");
    if (sec2) {section02 = 1;}
    if (sec8) {section08 = 1;} else {section08 = 0;}
    selPrinter = sel;
    section01 = 1;
    validate();
}

function deselectPrinters() {
    for (let i = 1; i < 8; i++) {
        test = "printer" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selPrinter = 0;
    section01 = 0;
}

linear1.onclick = function() {linRail(1,"linear1")};
linear2.onclick = function() {linRail(2,"linear2")};
linear3.onclick = function() {linRail(2,"linear3","probes02","probes04")};
linear4.onclick = function() {linRail(3,"linear4","probes04","probes02")};

function linRail(sel,lin,hide,show) {
    deselectLinear();
    var element = document.getElementById(lin);
    element.classList.add("selected");
    if (hide) {
        var element = document.getElementById(hide);
        element.classList.add("hidden");
        var element = document.getElementById(show);
        element.classList.remove("hidden");}
    selLinear = sel;
    section02 = 1;
    validate();
}

function deselectLinear() {
    for (let i = 1; i < 5; i++) {
        test = "linear" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selLinear = 0;
    section02 = 0;
}

xstop0.onclick = function() {xStop(0,"xstop1","xstop0")};
xstop1.onclick = function() {xStop(1,"xstop0","xstop1")};

function xStop(sel,hide,show) {
    var element = document.getElementById(hide);
    element.classList.remove("selected");
    var element = document.getElementById(show);
    element.classList.add("selected");
    selXstop = sel;
    section03 = 1;
    validate();
}

function deselectXstop() {
    var element = document.getElementById("xstop1");
    element.classList.remove("selected");
    var element = document.getElementById("xstop0");
    element.classList.remove("selected");
    selXstop = 0;
    section03 = 0;
}

extruder1.onclick = function() {extrds(1,"extruder1","probes03","probes02","orb15")};   // Orb1.5
extruder2.onclick = function() {extrds(2,"extruder2","probes03","probes02","orb20")};   // Orb2.0
extruder3.onclick = function() {extrds(3,"extruder3","probes03","probes02","orb20")};   // Galileo
extruder4.onclick = function() {extrds(4,"extruder4","probes02","probes03","lgxLite")}; // LGX-L
extruder5.onclick = function() {extrds(5,"extruder5","probes02","probes03","lgxLite")}; // Humming
extruder6.onclick = function() {extrds(6,"extruder6","probes02","probes03","lgxLite")}; // VzHEX
extruder7.onclick = function() {extrds(7,"extruder7","probes02","probes03","mini")};    // Mini-S
extruder8.onclick = function() {extrds(8,"extruder8","probes03","probes02","mini")};    // ProtoX
extruder9.onclick = function() {extrds(9,"extruder9","probes02","probes03","micro")};   // Micro-S

function extrds(sel,extrud,hide,show,output) {
    deselectExtruders();
    deselectHotends();
    var element = document.getElementById(extrud);
    element.classList.add("selected");
    if (selPrinter == 4 || selPrinter == 5) {
        var element = document.getElementById(hide);
        element.classList.add("hidden");
        var element = document.getElementById(show);
        element.classList.remove("hidden");
        deselectProbes();}
    selExtruder = sel;
    section04 = 1;
    hotGroup = output;
    validate();
    hideOutputExtruders();
    var element = document.getElementById(output);
    element.classList.remove("hidden");
}

function deselectExtruders() {
    for (let i = 1; i < 10; i++) {
        test = "extruder" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selExtruder = 0;
    section04 = 0;
}

function hideOutputExtruders() {
    var element = document.getElementById("orb15");
    element.classList.add("hidden");
    var element = document.getElementById("orb20");
    element.classList.add("hidden");
    var element = document.getElementById("lgxLite");
    element.classList.add("hidden");
    var element = document.getElementById("mini");
    element.classList.add("hidden");
    var element = document.getElementById("micro");
    element.classList.add("hidden");
}

hotend1.onclick = function() {hots(1,"hotend1",0,"core0")};     // Dropeffect XG
hotend2.onclick = function() {hots(2,"hotend2",0,"core1")};     // Spider Pro
hotend3.onclick = function() {hots(3,"hotend3",0,"core2")};     // Bambu X1
hotend4.onclick = function() {hots(4,"hotend4",0,"core3")};     // Mosquito
hotend5.onclick = function() {hots(5,"hotend5",1,"core3")};     // VolcoMosq
hotend6.onclick = function() {hots(6,"hotend6",0,"core4")};     // Revo Voron
hotend7.onclick = function() {hots(7,"hotend7",0,"core5")};     // Rapido
hotend8.onclick = function() {hots(8,"hotend8",1,"core5")};     // Rapido UHF
hotend9.onclick = function() {hots(9,"hotend9",0,"core7")};     // Dragon
hotend10.onclick = function() {hots(10,"hotend10",1,"core5")};  // Dragon UHF
hotend11.onclick = function() {hots(11,"hotend11",0,"core11")}; // Dragonfly BMO
hotend12.onclick = function() {hots(12,"hotend12",0,"core9")};  // Dragonfly BMS-6
hotend13.onclick = function() {hots(13,"hotend13",0,"core10")}; // Dragonfly BMS-7
hotend14.onclick = function() {hots(14,"hotend14",0,"core5")};  // T-Volcano Dragon
hotend15.onclick = function() {hots(15,"hotend15",0,"core6")};  // Dragon ACE
hotend16.onclick = function() {hots(16,"hotend16",0,"core5")};  // CHCB-V V6DM
hotend17.onclick = function() {hots(17,"hotend17",0,"core8")};  // TCHC TD6S

function hots(sel,hot,uhf,corex) {
    deselectHotends();
    var element = document.getElementById(hot);
    element.classList.add("selected");
    selHotend = sel;
    section05 = 1;
    UHF = uhf;
    microCore.innerText = coreList[hotGroup][corex];
    miniCore.innerText = coreList[hotGroup][corex];
    orb15Core.innerText = coreList[hotGroup][corex];
    orb20Core.innerText = coreList[hotGroup][corex];
    lgxLiteCore.innerText = coreList[hotGroup][corex];
    validate();
}

function deselectHotends() {
    for (let i = 1; i < 18; i++) {
        test = "hotend" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selHotend = 0;
    section05 = 0;
    UHF = 0;
}

probe0.onclick = function() {prbs("00","probe0")}; // None
probe1.onclick = function() {prbs("01","probe1")}; // ZeroClick
probe2.onclick = function() {prbs("02","probe2")}; // Differential IR
probe3.onclick = function() {prbs("03","probe3")}; // None
probe4.onclick = function() {prbs("04","probe4")}; // Omron
probe5.onclick = function() {prbs("05","probe5")}; // Klicky
probe6.onclick = function() {prbs("06","probe6")}; // BL-Touch
probe7.onclick = function() {prbs("07","probe7")}; // MicroProbe
probe8.onclick = function() {prbs("08","probe8")}; // Euclid
probe9.onclick = function() {prbs("09","probe9")}; // Beacon3D
probe10.onclick = function() {prbs(10,"probe10")}; // PINDA
probe11.onclick = function() {prbs(11,"probe11")}; // Differential IR
probe12.onclick = function() {prbs(12,"probe12")}; // None
probe13.onclick = function() {prbs(13,"probe13")}; // Omron
probe14.onclick = function() {prbs(14,"probe14")}; // Klicky
probe15.onclick = function() {prbs(15,"probe15")}; // BL-Touch
probe16.onclick = function() {prbs(16,"probe16")}; // MicroProbe
probe17.onclick = function() {prbs(17,"probe17")}; // Euclid
probe18.onclick = function() {prbs(18,"probe18")}; // Beacon3D
probe19.onclick = function() {prbs(19,"probe19")}; // PINDA
probe20.onclick = function() {prbs(20,"probe20")}; // Differential IR
probe21.onclick = function() {prbs(21,"probe21")}; // Mini Stealth DAB
probe22.onclick = function() {prbs(22,"probe22")}; // None
probe23.onclick = function() {prbs(23,"probe23")}; // Micron Compatible
probe24.onclick = function() {prbs(24,"probe24")}; // Beacon3D
probe25.onclick = function() {prbs(25,"probe25")}; // Boop beta4 Wired
probe26.onclick = function() {prbs(26,"probe26")}; // Boop beta4 PCB

function prbs(sel,prb) {
    deselectProbes();
    var element = document.getElementById(prb);
    element.classList.add("selected");
    selProbe = sel;
    section06 = 1;
    validate();
}

function deselectProbes() {
    for (let i = 0; i < 27; i++) {
        test = "probe" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selProbe = 0;
    section06 = 0;
}

umbilical1.onclick = umb1;
umbilical0.onclick = umb0;


function umb1() {
    deselectChains();
    deselectStrain();
    var element = document.getElementById("umbilical0");
    element.classList.remove("selected");
    var element = document.getElementById("umbilical1");
    element.classList.add("selected");
    var element = document.getElementById("cblChain");
    element.classList.add("hidden");
    var element = document.getElementById("strain");
    element.classList.add("hidden");
    selUmbilical = 1;
    section07 = 1;
    section08 = 1;
    section09 = 1;
    validate();
}

function umb0() {
    deselectChains();
    deselectStrain();
    var element = document.getElementById("umbilical1");
    element.classList.remove("selected");
    var element = document.getElementById("umbilical0");
    element.classList.add("selected");
    var element = document.getElementById("cblChain");
    if (selPrinter > 3 && selPrinter < 7) {
        element.classList.remove("hidden");}
    var element = document.getElementById("strain");
    element.classList.remove("hidden");
    selUmbilical = 0;
    section07 = 1;
    validate();
}

chain0.onclick = chn0;
chain1.onclick = chn1;
chain2.onclick = chn2;

function chn0() {
    deselectChains();
    deselectStrain();
    var element = document.getElementById("chain0");
    element.classList.add("selected");
    var element = document.getElementById("strain");
    element.classList.remove("hidden");
    selChain = 0;
    section08 = 1;
    validate();
}

function chn1() {
    deselectChains();
    deselectStrain();
    var element = document.getElementById("chain1");
    element.classList.add("selected");
    var element = document.getElementById("strain");
    element.classList.add("hidden");
    selChain = 1;
    section08 = 1;
    section09 = 1;
    validate();
}

function chn2() {
    deselectChains();
    deselectStrain();
    var element = document.getElementById("chain2");
    element.classList.add("selected");
    var element = document.getElementById("strain");
    element.classList.add("hidden");
    selChain = 2;
    section08 = 1;
    section09 = 1;
    validate();
}

function deselectChains() {
    var element = document.getElementById("chain0");
    element.classList.remove("selected");
    var element = document.getElementById("chain1");
    element.classList.remove("selected");
    var element = document.getElementById("chain2");
    element.classList.remove("selected");
    selChain = 0;
}

strain0.onclick = strn0;
strain1.onclick = strn1;

function strn0() {
    var element = document.getElementById("strain0");
    element.classList.add("selected");
    var element = document.getElementById("strain1");
    element.classList.remove("selected");
    selStrain = 0;
    section09 = 1;
    validate();
}

function strn1() {
    var element = document.getElementById("strain1");
    element.classList.add("selected");
    var element = document.getElementById("strain0");
    element.classList.remove("selected");
    selStrain = 1;
    section09 = 1;
    validate();
}

function deselectStrain() {
    var element = document.getElementById("strain0");
    element.classList.remove("selected");
    var element = document.getElementById("strain1");
    element.classList.remove("selected");
    selStrain = 0;
}

display0.onclick = function() {disps(0,"display0")};
display1.onclick = function() {disps(1,"display1")};
display2.onclick = function() {disps(2,"display2")};
display3.onclick = function() {disps(3,"display3")};

function disps(sel,disp) {
    deselectDisplays();
    var element = document.getElementById(disp);
    element.classList.add("selected");
    selDisplay = sel;
    section10 = 1;
    validate();
}

function deselectDisplays() {
    for (let i = 0; i < 4; i++) {
        test = "display" + i;
        var element = document.getElementById(test);
        element.classList.remove("selected");}
    selDisplay = 0;
    section10 = 0;
}

status1.onclick = stat1;
status2.onclick = stat2;

function stat1() {
    deselectStatus();
    var element = document.getElementById("status1");
    element.classList.add("selected");
    selStatus = 1;
    section11 = 1;
    validate();
}

function stat2() {
    deselectStatus();
    var element = document.getElementById("status2");
    element.classList.add("selected");
    selStatus = 2;
    section11 = 1;
    validate();
}

function deselectStatus() {
    var element = document.getElementById("status1");
    element.classList.remove("selected");
    var element = document.getElementById("status2");
    element.classList.remove("selected");
    selStatus = 0;
}

function vbls() {
    variables = "ptr " + selPrinter + ", lin " + selLinear + ", xstp " + selXstop + ", ext " + selExtruder 
    + ", hot " + selHotend + ", uhf " + UHF + ", prb " + selProbe + ", umb " + selUmbilical + ", chn " 
    + selChain + ", strn " + selStrain + ", disp " + selDisplay + ", stat " + selStatus;}
function chck() {
    checkList = "\nSec01 " + section01 + ", Sec02 " + section02 + ", Sec03 " + section03 + ", Sec04 " 
    + section04 + ", Sec05 " + section05 + ", Sec06 " + section06 + ", Sec07 " + section07 + ", Sec08 " 
    + section08 + ", Sec09 " + section09 + ", Sec10 " + section10 + ", Sec11 " + section11;}
function validate() {
    vbls();
    chck();
    countSelected();
    if (selected == 11) {checkList = "  --  Selection Complete!"}
    text.innerText = "Selected Options: " + variables + " -\n " + selected + "/11 selected" + checkList;
}

const teamFdm = {
	micro: "Visit the 'Mini Stealth - Sherpa Micro' page for extruder specific files",
    mini: "Visit the 'Mini Stealth - Sherpa Mini' page for extruder specific files",
    orb15: "Visit the 'Mini Stealth - Orbiter 1.5' page for extruder specific files",
    orb20: "Visit the 'Mini Stealth - Orbiter 2.0' page for extruder specific files",
    lgxLite: "Visit the 'Mini Stealth - LGX Lite' page for extruder specific files"}

const coreList = {
    micro: {
    core0: "[b]_MiniStealth_Core_Micro_Sherpa_Dropeffect_XG.stl",
    core1: "[b]_MiniStealth_Core_Micro_Sherpa_Spider_Pro.stl",
    core2: "[b]_MiniStealth_Core_Micro_Sherpa_BambuLab.stl",
    core3: "[b]_MiniStealth_Core_Micro_Sherpa_Mosquito.stl",
    core4: "[b]_MiniStealth_Core_Micro_Sherpa_Revo_Voron.stl",
    core5: "[b]_MiniStealth_Core_Micro_Sherpa_Rapido.stl",
    core6: "[b]_MiniStealth_Core_Micro_Sherpa_Dragon_Ace.stl",
    core7: "[b]_MiniStealth_Core_Micro_Sherpa_Dragon_ST-HF.stl",
    core8: "[b]_MiniStealth_Core_Micro_Sherpa_TCHC-TD6S.stl",
    core9: "[b]_MiniStealth_Core_Micro_Sherpa_Dragonfly_BMS-7.stl",
    core10: "[b]_MiniStealth_Core_Micro_Sherpa_Dragonfly_BMS-6.stl",
    core11: "[b]_MiniStealth_Core_Micro_Sherpa_Dragonfly.stl",
    }, mini: {
    core0: "[b]_MiniStealth_Core_Mini_Sherpa_Dropeffect_XG.stl",
    core1: "[b]_MiniStealth_Core_Mini_Sherpa_Spider_Pro.stl",
    core2: "[b]_MiniStealth_Core_Mini_Sherpa_BambuLab.stl",
    core3: "[b]_MiniStealth_Core_Mini_Sherpa_Mosquito.stl",
    core4: "[b]_MiniStealth_Core_Mini_Sherpa_Revo_Voron.stl",
    core5: "[b]_MiniStealth_Core_Mini_Sherpa_Rapido.stl",
    core6: "[b]_MiniStealth_Core_Mini_Sherpa_Dragon_Ace.stl",
    core7: "[b]_MiniStealth_Core_Mini_Sherpa_Dragon_ST-HF.stl",
    core8: "[b]_MiniStealth_Core_Mini_Sherpa_TCHC-TD6S.stl",
    core9: "[b]_MiniStealth_Core_Mini_Sherpa_Dragonfly_BMS-7.stl",
    core10: "[b]_MiniStealth_Core_Mini_Sherpa_Dragonfly_BMS-6.stl",
    core11: "[b]_MiniStealth_Core_Mini_Sherpa_Dragonfly.stl",
    }, orb15: {
    core0: "[b]_MiniStealth_Core_Orbiter_1.5_Dropeffect_XG.stl",
    core1: "[b]_MiniStealth_Core_Orbiter_1.5_Spider_Pro.stl",
    core2: "[b]_MiniStealth_Core_Orbiter_1.5_BambuLab.stl",
    core3: "[b]_MiniStealth_Core_Orbiter_1.5_Mosquito.stl",
    core4: "[b]_MiniStealth_Core_Orbiter_1.5_Revo_Voron.stl",
    core5: "[b]_MiniStealth_Core_Orbiter_1.5_Rapido.stl",
    core6: "[b]_MiniStealth_Core_Orbiter_1.5_Dragon_Ace.stl",
    core7: "[b]_MiniStealth_Core_Orbiter_1.5_Dragon_ST-HF.stl",
    core8: "[b]_MiniStealth_Core_Orbiter_1.5_TCHC-TD6S.stl",
    core9: "[b]_MiniStealth_Core_Orbiter_1.5_Dragonfly_BMS-7.stl",
    core10: "[b]_MiniStealth_Core_Orbiter_1.5_Dragonfly_BMS-6.stl",
    core11: "[b]_MiniStealth_Core_Orbiter_1.5_Dragonfly.stl",
    }, orb20: {
    core0: "[b]_MiniStealth_Core_Orbiter_2.0_Dropeffect_XG.stl",
    core1: "[b]_MiniStealth_Core_Orbiter_2.0_Spider_Pro.stl",
    core2: "[b]_MiniStealth_Core_Orbiter_2.0_BambuLab.stl",
    core3: "[b]_MiniStealth_Core_Orbiter_2.0_Mosquito.stl",
    core4: "[b]_MiniStealth_Core_Orbiter_2.0_Revo_Voron.stl",
    core5: "[b]_MiniStealth_Core_Orbiter_2.0_Rapido.stl",
    core6: "[b]_MiniStealth_Core_Orbiter_2.0_Dragon_Ace.stl",
    core7: "[b]_MiniStealth_Core_Orbiter_2.0_Dragon_ST-HF.stl",
    core8: "[b]_MiniStealth_Core_Orbiter_2.0_TCHC-TD6S.stl",
    core9: "[b]_MiniStealth_Core_Orbiter_2.0_Dragonfly_BMS-7.stl",
    core10: "[b]_MiniStealth_Core_Orbiter_2.0_Dragonfly_BMS-6.stl",
    core11: "[b]_MiniStealth_Core_Orbiter_2.0_Dragonfly.stl",
    }, lgxLite: {
    core0: "[b]_MiniStealth_Core_LGX_Lite_Dropeffect_XG.stl",
    core1: "[b]_MiniStealth_Core_LGX_Lite_Spider_Pro.stl",
    core2: "[b]_MiniStealth_Core_LGX_Lite_BambuLab.stl",
    core3: "[b]_MiniStealth_Core_LGX_Lite_Mosquito.stl",
    core4: "[b]_MiniStealth_Core_LGX_Lite_Revo_Voron.stl",
    core5: "[b]_MiniStealth_Core_LGX_Lite_Rapido.stl",
    core6: "[b]_MiniStealth_Core_LGX_Lite_Dragon_Ace.stl",
    core7: "[b]_MiniStealth_Core_LGX_Lite_Dragon_ST-HF.stl",
    core8: "[b]_MiniStealth_Core_LGX_Lite_TCHC-TD6S.stl",
    core9: "[b]_MiniStealth_Core_LGX_Lite_Dragonfly_BMS-7.stl",
    core10: "[b]_MiniStealth_Core_LGX_Lite_Dragonfly_BMS-6.stl",
    core11: "[b]_MiniStealth_Core_LGX_Lite_Dragonfly.stl",
    }
};

