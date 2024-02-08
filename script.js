// Log to console
// console.log(message + "\n");

let selPrinter = 0;
let selLinear = 0;
let selXstop = 0;
let selExtruder = 0;
let selHotend = 0;
let UHF = 0;
let selProbe = 0;
let selUmbilical = 0;
let selChain = 0;
let selStrain = 0;
let selDisplay = 0;

let variables = 0

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

printer1.onclick = voron0_1;
printer2.onclick = voron0_2;
printer3.onclick = vorpal;
printer4.onclick = voronTri;
printer5.onclick = voron2_4;
printer6.onclick = voronSwch;
printer7.onclick = p4aMicron;

function voron0_1(){
    deselectLinear();
    deselectXstop();
    prntr("printer1",1,0,1,1,0,0,0,0,1);
    selPrinter = 0;
    validate();
}

function voron0_2(){
    deselectLinear();
    deselectXstop();
    prntr("printer2",1,0,1,1,0,0,0,0,1);
    selPrinter = 1;
    validate();
}

function vorpal(){
    deselectLinear();
    deselectXstop();
    prntr("printer3",0,1,0,0,1,0,0,0,1);
    selPrinter = 2;
    validate();
}

function voronTri(){
    deselectLinear();
    deselectXstop();
    prntr("printer4",0,0,0,0,0,1,0,1,1);
    selPrinter = 3;
    validate();
}

function voron2_4(){
    deselectLinear();
    deselectXstop();
    prntr("printer5",0,0,0,0,0,1,0,1,1);
    selPrinter = 4;
    validate();
}

function voronSwch(){
    deselectLinear();
    deselectXstop();
    prntr("printer6",0,0,0,0,1,0,0,1,1);
    selPrinter = 5;
    validate();
}

function p4aMicron(){
    deselectLinear();
    deselectXstop();
    prntr("printer7",0,0,0,0,0,0,1,0,1);
    selPrinter = 6;
    validate();
}

function prntr(printr,lr1,lr2,xstp,prb1,prb2,prb3,prb4,chn,strn) {
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
        selXstop = 0; }
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
        selChain = 0; }
    deselectPrinters();
    var element = document.getElementById(printr);
    element.classList.add("selected");
}

function deselectPrinters() {
    var element = document.getElementById("printer1");
    element.classList.remove("selected");
    var element = document.getElementById("printer2");
    element.classList.remove("selected");
    var element = document.getElementById("printer3");
    element.classList.remove("selected");
    var element = document.getElementById("printer4");
    element.classList.remove("selected");
    var element = document.getElementById("printer5");
    element.classList.remove("selected");
    var element = document.getElementById("printer6");
    element.classList.remove("selected");
    var element = document.getElementById("printer7");
    element.classList.remove("selected");
}

linear1.onclick = mgn7;
linear2.onclick = mgn9a;
linear3.onclick = mgn9b;
linear4.onclick = mgn12;

function mgn7() {
    deselectLinear();
    var element = document.getElementById("linear1");
    element.classList.add("selected");
    selLinear = 1
    validate();
}

function mgn9a() {
    deselectLinear();
    var element = document.getElementById("linear2");
    element.classList.add("selected");
    selLinear = 2
    validate();
}

function mgn9b() {
    deselectLinear();
    var element = document.getElementById("linear3");
    element.classList.add("selected");
    var element = document.getElementById("probes02");
    element.classList.add("hidden");
    var element = document.getElementById("probes04");
    element.classList.remove("hidden");
    selLinear = 2
    validate();
}

function mgn12() {
    deselectLinear();
    var element = document.getElementById("linear4");
    element.classList.add("selected");
    var element = document.getElementById("probes04");
    element.classList.add("hidden");
    var element = document.getElementById("probes02");
    element.classList.remove("hidden");
    selLinear = 3
    validate();
}

function deselectLinear() {
    var element = document.getElementById("linear1");
    element.classList.remove("selected");
    var element = document.getElementById("linear2");
    element.classList.remove("selected");
    var element = document.getElementById("linear3");
    element.classList.remove("selected");
    var element = document.getElementById("linear4");
    element.classList.remove("selected");
    selLinear = 0
}

xstop0.onclick = xStopNo;
xstop1.onclick = xStopYes;

function xStopNo() {
    var element = document.getElementById("xstop1");
    element.classList.remove("selected");
    var element = document.getElementById("xstop0");
    element.classList.add("selected");
    selXstop = 0;
    validate();
}

function xStopYes() {
    var element = document.getElementById("xstop0");
    element.classList.remove("selected");
    var element = document.getElementById("xstop1");
    element.classList.add("selected");
    selXstop = 1;
    validate();
}

function deselectXstop() {
    var element = document.getElementById("xstop1");
    element.classList.remove("selected");
    var element = document.getElementById("xstop0");
    element.classList.remove("selected");
    selXstop = 0;
    validate();
}

extruder1.onclick = ext1;
extruder2.onclick = ext2;
extruder3.onclick = ext3;
extruder4.onclick = ext4;
extruder5.onclick = ext5;
extruder6.onclick = ext6;
extruder7.onclick = ext7;
extruder8.onclick = ext8;
extruder9.onclick = ext9;

function ext1() {
    deselectExtruders();
    var element = document.getElementById("extruder1");
    element.classList.add("selected");
    selExtruder = 1;
    validate();
}

function ext2() {
    deselectExtruders();
    var element = document.getElementById("extruder2");
    element.classList.add("selected");
    selExtruder = 2;
    validate();
}

function ext3() {
    deselectExtruders();
    var element = document.getElementById("extruder3");
    element.classList.add("selected");
    selExtruder = 3;
    validate();
}

function ext4() {
    deselectExtruders();
    var element = document.getElementById("extruder4");
    element.classList.add("selected");
    selExtruder = 4;
    validate();
}

function ext5() {
    deselectExtruders();
    var element = document.getElementById("extruder5");
    element.classList.add("selected");
    selExtruder = 5;
    validate();
}

function ext6() {
    deselectExtruders();
    var element = document.getElementById("extruder6");
    element.classList.add("selected");
    selExtruder = 6;
    validate();
}

function ext7() {
    deselectExtruders();
    var element = document.getElementById("extruder7");
    element.classList.add("selected");
    selExtruder = 7;
    validate();
}

function ext8() {
    deselectExtruders();
    var element = document.getElementById("extruder8");
    element.classList.add("selected");
    selExtruder = 8;
    validate();
}

function ext9() {
    deselectExtruders();
    var element = document.getElementById("extruder9");
    element.classList.add("selected");
    selExtruder = 9;
    validate();
}

function deselectExtruders() {
    var element = document.getElementById("extruder1");
    element.classList.remove("selected");
    var element = document.getElementById("extruder2");
    element.classList.remove("selected");
    var element = document.getElementById("extruder3");
    element.classList.remove("selected");
    var element = document.getElementById("extruder4");
    element.classList.remove("selected");
    var element = document.getElementById("extruder5");
    element.classList.remove("selected");
    var element = document.getElementById("extruder6");
    element.classList.remove("selected");
    var element = document.getElementById("extruder7");
    element.classList.remove("selected");
    var element = document.getElementById("extruder8");
    element.classList.remove("selected");
    var element = document.getElementById("extruder9");
    element.classList.remove("selected");
}

hotend1.onclick = hot1;
hotend2.onclick = hot2;
hotend3.onclick = hot3;
hotend4.onclick = hot4;
hotend5.onclick = hot5;
hotend6.onclick = hot6;
hotend7.onclick = hot7;
hotend8.onclick = hot8;
hotend9.onclick = hot9;
hotend10.onclick = hot10;
hotend11.onclick = hot11;
hotend12.onclick = hot12;
hotend13.onclick = hot13;
hotend14.onclick = hot14;
hotend15.onclick = hot15;
hotend16.onclick = hot16;
hotend17.onclick = hot17;

function hot1() {
    deselectHotends();
    var element = document.getElementById("hotend1");
    element.classList.add("selected");
    selHotend = 1;
    validate();
}

function hot2() {
    deselectHotends();
    var element = document.getElementById("hotend2");
    element.classList.add("selected");
    selHotend = 2;
    validate();
}

function hot3() {
    deselectHotends();
    var element = document.getElementById("hotend3");
    element.classList.add("selected");
    selHotend = 3;
    validate();
}

function hot4() {
    deselectHotends();
    var element = document.getElementById("hotend4");
    element.classList.add("selected");
    selHotend = 4;
    validate();
}

function hot5() {
    deselectHotends();
    var element = document.getElementById("hotend5");
    element.classList.add("selected");
    selHotend = 5;
    UHF = 1;
    validate();
}

function hot6() {
    deselectHotends();
    var element = document.getElementById("hotend6");
    element.classList.add("selected");
    selHotend = 6;
    validate();
}

function hot7() {
    deselectHotends();
    var element = document.getElementById("hotend7");
    element.classList.add("selected");
    selHotend = 7;
    validate();
}

function hot8() {
    deselectHotends();
    var element = document.getElementById("hotend8");
    element.classList.add("selected");
    selHotend = 8;
    UHF = 1;
    validate();
}

function hot9() {
    deselectHotends();
    var element = document.getElementById("hotend9");
    element.classList.add("selected");
    selHotend = 9;
    validate();
}

function hot10() {
    deselectHotends();
    var element = document.getElementById("hotend10");
    element.classList.add("selected");
    selHotend = 10;
    UHF = 1;
    validate();
}

function hot11() {
    deselectHotends();
    var element = document.getElementById("hotend11");
    element.classList.add("selected");
    selHotend = 11;
    validate();
}

function hot12() {
    deselectHotends();
    var element = document.getElementById("hotend12");
    element.classList.add("selected");
    selHotend = 12;
    validate();
}

function hot13() {
    deselectHotends();
    var element = document.getElementById("hotend13");
    element.classList.add("selected");
    selHotend = 13;
    validate();
}

function hot14() {
    deselectHotends();
    var element = document.getElementById("hotend14");
    element.classList.add("selected");
    selHotend = 14;
    validate();
}

function hot15() {
    deselectHotends();
    var element = document.getElementById("hotend15");
    element.classList.add("selected");
    selHotend = 15;
    validate();
}

function hot16() {
    deselectHotends();
    var element = document.getElementById("hotend16");
    element.classList.add("selected");
    selHotend = 16;
    validate();
}

function hot17() {
    deselectHotends();
    var element = document.getElementById("hotend17");
    element.classList.add("selected");
    selHotend = 17;
    validate();
}

function deselectHotends() {
    var element = document.getElementById("hotend1");
    element.classList.remove("selected");
    var element = document.getElementById("hotend2");
    element.classList.remove("selected");
    var element = document.getElementById("hotend3");
    element.classList.remove("selected");
    var element = document.getElementById("hotend4");
    element.classList.remove("selected");
    var element = document.getElementById("hotend5");
    element.classList.remove("selected");
    var element = document.getElementById("hotend6");
    element.classList.remove("selected");
    var element = document.getElementById("hotend7");
    element.classList.remove("selected");
    var element = document.getElementById("hotend8");
    element.classList.remove("selected");
    var element = document.getElementById("hotend9");
    element.classList.remove("selected");
    var element = document.getElementById("hotend10");
    element.classList.remove("selected");
    var element = document.getElementById("hotend11");
    element.classList.remove("selected");
    var element = document.getElementById("hotend12");
    element.classList.remove("selected");
    var element = document.getElementById("hotend13");
    element.classList.remove("selected");
    var element = document.getElementById("hotend14");
    element.classList.remove("selected");
    var element = document.getElementById("hotend15");
    element.classList.remove("selected");
    var element = document.getElementById("hotend16");
    element.classList.remove("selected");
    var element = document.getElementById("hotend17");
    element.classList.remove("selected");
    UHF = 0;
}

probe0.onclick = prb0;
probe1.onclick = prb1;
probe2.onclick = prb2;
probe3.onclick = prb3;
probe4.onclick = prb4;
probe5.onclick = prb5;
probe6.onclick = prb6;
probe7.onclick = prb7;
probe8.onclick = prb8;
probe9.onclick = prb9;
probe10.onclick = prb10;
probe11.onclick = prb11;
probe12.onclick = prb12;
probe13.onclick = prb13;
probe14.onclick = prb14;
probe15.onclick = prb15;
probe16.onclick = prb16;
probe17.onclick = prb17;
probe18.onclick = prb18;
probe19.onclick = prb19;
probe20.onclick = prb20;
probe21.onclick = prb21;
probe22.onclick = prb22;
probe23.onclick = prb23;
probe24.onclick = prb24;
probe25.onclick = prb25;
probe26.onclick = prb26;

function prb0() {
    deselectProbes();
    var element = document.getElementById("probe0");
    element.classList.add("selected");
    selProbe = 0;
    validate();
}

function prb1() {
    deselectProbes();
    var element = document.getElementById("probe1");
    element.classList.add("selected");
    selProbe = 1;
    validate();
}

function prb2() {
    deselectProbes();
    var element = document.getElementById("probe2");
    element.classList.add("selected");
    selProbe = 2;
    validate();
}

function prb3() {
    deselectProbes();
    var element = document.getElementById("probe3");
    element.classList.add("selected");
    selProbe = 3;
    validate();
}

function prb4() {
    deselectProbes();
    var element = document.getElementById("probe4");
    element.classList.add("selected");
    selProbe = 4;
    validate();
}

function prb5() {
    deselectProbes();
    var element = document.getElementById("probe5");
    element.classList.add("selected");
    selProbe = 5;
    validate();
}

function prb6() {
    deselectProbes();
    var element = document.getElementById("probe6");
    element.classList.add("selected");
    selProbe = 6;
    validate();
}

function prb7() {
    deselectProbes();
    var element = document.getElementById("probe7");
    element.classList.add("selected");
    selProbe = 7;
    validate();
}

function prb8() {
    deselectProbes();
    var element = document.getElementById("probe8");
    element.classList.add("selected");
    selProbe = 8;
    validate();
}

function prb9() {
    deselectProbes();
    var element = document.getElementById("probe9");
    element.classList.add("selected");
    selProbe = 9;
    validate();
}

function prb10() {
    deselectProbes();
    var element = document.getElementById("probe10");
    element.classList.add("selected");
    selProbe = 10;
    validate();
}

function prb11() {
    deselectProbes();
    var element = document.getElementById("probe11");
    element.classList.add("selected");
    selProbe = 11;
    validate();
}

function prb12() {
    deselectProbes();
    var element = document.getElementById("probe12");
    element.classList.add("selected");
    selProbe = 12;
    validate();
}

function prb13() {
    deselectProbes();
    var element = document.getElementById("probe13");
    element.classList.add("selected");
    selProbe = 13;
    validate();
}

function prb14() {
    deselectProbes();
    var element = document.getElementById("probe14");
    element.classList.add("selected");
    selProbe = 14;
    validate();
}

function prb15() {
    deselectProbes();
    var element = document.getElementById("probe15");
    element.classList.add("selected");
    selProbe = 15;
    validate();
}

function prb16() {
    deselectProbes();
    var element = document.getElementById("probe16");
    element.classList.add("selected");
    selProbe = 16;
    validate();
}

function prb17() {
    deselectProbes();
    var element = document.getElementById("probe17");
    element.classList.add("selected");
    selProbe = 17;
    validate();
}

function prb18() {
    deselectProbes();
    var element = document.getElementById("probe18");
    element.classList.add("selected");
    selProbe = 18;
    validate();
}

function prb19() {
    deselectProbes();
    var element = document.getElementById("probe19");
    element.classList.add("selected");
    selProbe = 19;
    validate();
}

function prb20() {
    deselectProbes();
    var element = document.getElementById("probe20");
    element.classList.add("selected");
    selProbe = 20;
    validate();
}

function prb21() {
    deselectProbes();
    var element = document.getElementById("probe21");
    element.classList.add("selected");
    selProbe = 21;
    validate();
}

function prb22() {
    deselectProbes();
    var element = document.getElementById("probe22");
    element.classList.add("selected");
    selProbe = 22;
    validate();
}

function prb23() {
    deselectProbes();
    var element = document.getElementById("probe23");
    element.classList.add("selected");
    selProbe = 23;
    validate();
}

function prb24() {
    deselectProbes();
    var element = document.getElementById("probe24");
    element.classList.add("selected");
    selProbe = 24;
    validate();
}

function prb25() {
    deselectProbes();
    var element = document.getElementById("probe25");
    element.classList.add("selected");
    selProbe = 25;
    validate();
}

function prb26() {
    deselectProbes();
    var element = document.getElementById("probe26");
    element.classList.add("selected");
    selProbe = 26;
    validate();
}

function deselectProbes() {
    var element = document.getElementById("probe0");
    element.classList.remove("selected");
    var element = document.getElementById("probe1");
    element.classList.remove("selected");
    var element = document.getElementById("probe2");
    element.classList.remove("selected");
    var element = document.getElementById("probe3");
    element.classList.remove("selected");
    var element = document.getElementById("probe4");
    element.classList.remove("selected");
    var element = document.getElementById("probe5");
    element.classList.remove("selected");
    var element = document.getElementById("probe6");
    element.classList.remove("selected");
    var element = document.getElementById("probe7");
    element.classList.remove("selected");
    var element = document.getElementById("probe8");
    element.classList.remove("selected");
    var element = document.getElementById("probe9");
    element.classList.remove("selected");
    var element = document.getElementById("probe10");
    element.classList.remove("selected");
    var element = document.getElementById("probe11");
    element.classList.remove("selected");
    var element = document.getElementById("probe12");
    element.classList.remove("selected");
    var element = document.getElementById("probe13");
    element.classList.remove("selected");
    var element = document.getElementById("probe14");
    element.classList.remove("selected");
    var element = document.getElementById("probe15");
    element.classList.remove("selected");
    var element = document.getElementById("probe16");
    element.classList.remove("selected");
    var element = document.getElementById("probe17");
    element.classList.remove("selected");
    var element = document.getElementById("probe18");
    element.classList.remove("selected");
    var element = document.getElementById("probe19");
    element.classList.remove("selected");
    var element = document.getElementById("probe20");
    element.classList.remove("selected");
    var element = document.getElementById("probe21");
    element.classList.remove("selected");
    var element = document.getElementById("probe22");
    element.classList.remove("selected");
    var element = document.getElementById("probe23");
    element.classList.remove("selected");
    var element = document.getElementById("probe24");
    element.classList.remove("selected");
    var element = document.getElementById("probe25");
    element.classList.remove("selected");
    var element = document.getElementById("probe26");
    element.classList.remove("selected");
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
    if (selPrinter > 2 && selPrinter < 6) {
        element.classList.remove("hidden");}
    var element = document.getElementById("strain");
    element.classList.remove("hidden");
    selUmbilical = 0;
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
    deselectStrain();
    var element = document.getElementById("strain0");
    element.classList.add("selected");
    selStrain = 0;
    validate();
}

function strn1() {
    deselectStrain();
    var element = document.getElementById("strain1");
    element.classList.add("selected");
    selStrain = 1;
    validate();
}

function deselectStrain() {
    var element = document.getElementById("strain0");
    element.classList.remove("selected");
    var element = document.getElementById("strain1");
    element.classList.remove("selected");
    selStrain = 0;
}

display0.onclick = dsp0;
display1.onclick = dsp1;
display2.onclick = dsp2;
display3.onclick = dsp3;


function dsp0() {
    deselectDisplays();
    var element = document.getElementById("display0");
    element.classList.add("selected");
    selDisplay = 0;
    validate();
}

function dsp1() {
    deselectDisplays();
    var element = document.getElementById("display1");
    element.classList.add("selected");
    selDisplay = 1;
    validate();
}

function dsp2() {
    deselectDisplays();
    var element = document.getElementById("display2");
    element.classList.add("selected");
    selDisplay = 2;
    validate();
}

function dsp3() {
    deselectDisplays();
    var element = document.getElementById("display3");
    element.classList.add("selected");
    selDisplay = 3;
    validate();
}

function deselectDisplays() {
    var element = document.getElementById("display0");
    element.classList.remove("selected");
    var element = document.getElementById("display1");
    element.classList.remove("selected");
    var element = document.getElementById("display2");
    element.classList.remove("selected");
    var element = document.getElementById("display3");
    element.classList.remove("selected");
    selDisplay = 0;
}


function validate() {
    variables = "ptr " + selPrinter + ", lin " + selLinear + ", xstp " + selXstop + ", ext " + selExtruder + ", hot " + selHotend + ", uhf " + UHF + ", prb " + selProbe + ", umb " + selUmbilical + ", chn " + selChain + ", strn " + selStrain + ", disp " + selDisplay;
    text.innerText = "Selected Options " + variables;
}

header.innerText = "Select your printer and then work your way down the page."
