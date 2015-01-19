
// ** Visiting <MainModuleSource /Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1913=function(M){return(_437)(M);};

var _1909=function(M){if(--M.cbt<0){throw _1909;}
M.a=1;
return(_1910)(M);};

var _1905=function(M){if(--M.cbt<0){throw _1905;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["root/pong-world.rkt"],M.modules["root/pong-world.rkt"].getExports(),M.modules["root/pong-world.rkt"].getExternalExports(),M.modules["root/pong-world.rkt"].prefix));
return(M.p)(M);};

var _1898=function(M){if(--M.cbt<0){throw _1898;}
M.a=1;
return(_1899)(M);};

var _1894=function(M){if(--M.cbt<0){throw _1894;}
M.c.push(new RT.CallFrame(_1905,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][140][0][M.e[M.e.length-1][140][1]];
M.p=M.e[M.e.length-1][141][0][M.e[M.e.length-1][141][1]];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1909,M.p));
return((M.p).label)(M);};

var _1892=function(M){if(--M.cbt<0){throw _1892;}
M.c.push(new RT.CallFrame(_1894,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][140][0][M.e[M.e.length-1][140][1]];
M.c.push(new RT.CallFrame(_1898,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22365,575,0,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][72];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-2][109];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1890=function(M){if(--M.cbt<0){throw _1890;}
M.c.push(new RT.CallFrame(_1892,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_436_c;
M.e[M.e.length-1][131]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1888=function(M){if(--M.cbt<0){throw _1888;}
M.c.push(new RT.CallFrame(_1890,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_435,4,[M.e[M.e.length-1]],"handle-mouse");
M.e[M.e.length-1][83]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1886=function(M){if(--M.cbt<0){throw _1886;}
M.c.push(new RT.CallFrame(_1888,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_434,2,[M.e[M.e.length-1]],"handle-key-up");
M.e[M.e.length-1][81]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1884=function(M){if(--M.cbt<0){throw _1884;}
M.c.push(new RT.CallFrame(_1886,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_433,2,[M.e[M.e.length-1]],"handle-key-down");
M.e[M.e.length-1][79]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1880=function(M){if(--M.cbt<0){throw _1880;}
M.e[M.e.length-1][134]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1878=function(M){if(--M.cbt<0){throw _1878;}
M.c.push(new RT.CallFrame(_1884,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_432,1,[M.e[M.e.length-1]],"serve");
M.e[M.e.length-1][135]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1876=function(M){if(--M.cbt<0){throw _1876;}
M.c.push(new RT.CallFrame(_1878,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1880,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17693,475,15,58]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][118][0][M.e[M.e.length-5][118][1]];
M.e[M.e.length-1]=16;
M.e[M.e.length-2]=90;
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1874=function(M){if(--M.cbt<0){throw _1874;}
M.c.push(new RT.CallFrame(_1876,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_431,2,[M.e[M.e.length-1]],"draw-paddle");
M.e[M.e.length-1][127]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1872=function(M){if(--M.cbt<0){throw _1872;}
M.c.push(new RT.CallFrame(_1874,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_430,1,[M.e[M.e.length-1]],"handle-tick");
M.e[M.e.length-1][75]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1870=function(M){if(--M.cbt<0){throw _1870;}
M.c.push(new RT.CallFrame(_1872,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_429,1,[M.e[M.e.length-1]],"draw-pong-world");
M.e[M.e.length-1][77]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1868=function(M){if(--M.cbt<0){throw _1868;}
M.c.push(new RT.CallFrame(_1870,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_428,5,[M.e[M.e.length-1]],"display-msg");
M.e[M.e.length-1][115]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1864=function(M){if(--M.cbt<0){throw _1864;}
M.e[M.e.length-1][126]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1862=function(M){if(--M.cbt<0){throw _1862;}
M.c.push(new RT.CallFrame(_1868,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_427,1,[M.e[M.e.length-1]],"draw-idle-game");
M.e[M.e.length-1][116]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1860=function(M){if(--M.cbt<0){throw _1860;}
M.c.push(new RT.CallFrame(_1862,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1864,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14907,403,13,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][125];
M.e[M.e.length-1]=16;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1856=function(M){if(--M.cbt<0){throw _1856;}
M.e[M.e.length-1][124]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1854=function(M){if(--M.cbt<0){throw _1854;}
M.c.push(new RT.CallFrame(_1860,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_426,1,[M.e[M.e.length-1]],"draw-ball");
M.e[M.e.length-1][125]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1852=function(M){if(--M.cbt<0){throw _1852;}
M.c.push(new RT.CallFrame(_1854,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1856,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14794,399,21,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][123];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][2];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][4];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1850=function(M){if(--M.cbt<0){throw _1850;}
M.c.push(new RT.CallFrame(_1852,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_425,2,[M.e[M.e.length-1]],"draw-playfield-bg");
M.e[M.e.length-1][123]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1848=function(M){if(--M.cbt<0){throw _1848;}
M.c.push(new RT.CallFrame(_1850,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_424,1,[M.e[M.e.length-1]],"draw-wall");
M.e[M.e.length-1][122]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1846=function(M){if(--M.cbt<0){throw _1846;}
M.c.push(new RT.CallFrame(_1848,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_423,3,[M.e[M.e.length-1]],"draw-net");
M.e[M.e.length-1][121]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1844=function(M){if(--M.cbt<0){throw _1844;}
M.c.push(new RT.CallFrame(_1846,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_422,7,[M.e[M.e.length-1]],"vertical-dashed-line");
M.e[M.e.length-1][120]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1842=function(M){if(--M.cbt<0){throw _1842;}
M.c.push(new RT.CallFrame(_1844,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_421,3,[M.e[M.e.length-1]],"draw-bg");
M.e[M.e.length-1][117]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1840=function(M){if(--M.cbt<0){throw _1840;}
M.c.push(new RT.CallFrame(_1842,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_420,1,[M.e[M.e.length-1]],"draw-goodbye");
M.e[M.e.length-1][114]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1838=function(M){if(--M.cbt<0){throw _1838;}
M.c.push(new RT.CallFrame(_1840,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_419,4,[M.e[M.e.length-1]],"place-image-top-left");
M.e[M.e.length-1][110]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1830=function(M){if(--M.cbt<0){throw _1830;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1826=function(M){if(--M.cbt<0){throw _1826;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1824=function(M){if(--M.cbt<0){throw _1824;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1822=function(M){if(--M.cbt<0){throw _1822;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1830,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12430,324,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1820=function(M){if(--M.cbt<0){throw _1820;}
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=0;
M.v=0;
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1814=function(M){if(--M.cbt<0){throw _1814;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1810=function(M){if(--M.cbt<0){throw _1810;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1808=function(M){if(--M.cbt<0){throw _1808;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1806=function(M){if(--M.cbt<0){throw _1806;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1814,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12238,321,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1804=function(M){if(--M.cbt<0){throw _1804;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1820,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12325,323,24,166]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-10][41];
M.c.push(new RT.CallFrame(_1822,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12338,323,37,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-12][88][0][M.e[M.e.length-12][88][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-12][21];
M.c.push(new RT.CallFrame(_1824,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12355,323,54,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-14][9];
M.c.push(new RT.CallFrame(_1826,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12370,323,69,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1800=function(M){if(--M.cbt<0){throw _1800;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1804,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12132,320,24,167]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-10][41];
M.c.push(new RT.CallFrame(_1806,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12145,320,37,54]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-12][88][0][M.e[M.e.length-12][88][1]];
M.e[M.e.length-1]=10;
M.c.push(new RT.CallFrame(_1808,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12163,320,55,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-14][9];
M.c.push(new RT.CallFrame(_1810,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12178,320,70,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1798=function(M){if(--M.cbt<0){throw _1798;}
M.e[M.e.length-1][109]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1796=function(M){if(--M.cbt<0){throw _1796;}
M.c.push(new RT.CallFrame(_1838,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_418,1,[M.e[M.e.length-1]],"quitting?");
M.e[M.e.length-1][85]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1794=function(M){if(--M.cbt<0){throw _1794;}
M.c.push(new RT.CallFrame(_1796,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1798,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12004,317,22,540]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.e[M.e.length-1]="left-player-serves";
M.c.push(new RT.CallFrame(_1800,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12091,319,24,16]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][98];
M.e[M.e.length-1]=RT.makeFloat(0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1790=function(M){if(--M.cbt<0){throw _1790;}
M.e[M.e.length-1][108]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1788=function(M){if(--M.cbt<0){throw _1788;}
M.c.push(new RT.CallFrame(_1794,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_417,1,[M.e[M.e.length-1]],"serve-ball");
M.e[M.e.length-1][98]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1786=function(M){if(--M.cbt<0){throw _1786;}
M.c.push(new RT.CallFrame(_1788,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1790,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11705,308,21,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][88][0][M.e[M.e.length-3][88][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][7];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][9];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1784=function(M){if(--M.cbt<0){throw _1784;}
M.c.push(new RT.CallFrame(_1786,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_416,1,[M.e[M.e.length-1]],"stop-paddle");
M.e[M.e.length-1][107]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1782=function(M){if(--M.cbt<0){throw _1782;}
M.c.push(new RT.CallFrame(_1784,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_415,2,[M.e[M.e.length-1]],"set-paddle-pos");
M.e[M.e.length-1][106]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1780=function(M){if(--M.cbt<0){throw _1780;}
M.c.push(new RT.CallFrame(_1782,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_414,3,[M.e[M.e.length-1]],"set-paddle-moving");
M.e[M.e.length-1][105]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1778=function(M){if(--M.cbt<0){throw _1778;}
M.c.push(new RT.CallFrame(_1780,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_413,1,[M.e[M.e.length-1]],"check-paddle-block");
M.e[M.e.length-1][104]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1776=function(M){if(--M.cbt<0){throw _1776;}
M.c.push(new RT.CallFrame(_1778,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_412,3,[M.e[M.e.length-1]],"vary-speed-by-intersection");
M.e[M.e.length-1][101]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1774=function(M){if(--M.cbt<0){throw _1774;}
M.c.push(new RT.CallFrame(_1776,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_411,2,[M.e[M.e.length-1]],"vary-dy-by-intersection");
M.e[M.e.length-1][100]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1772=function(M){if(--M.cbt<0){throw _1772;}
M.c.push(new RT.CallFrame(_1774,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_410,8,[M.e[M.e.length-1]],"horizontal-bounce");
M.e[M.e.length-1][102]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1770=function(M){if(--M.cbt<0){throw _1770;}
M.c.push(new RT.CallFrame(_1772,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_409,8,[M.e[M.e.length-1]],"horizontal-bounce-y");
M.e[M.e.length-1][99]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1768=function(M){if(--M.cbt<0){throw _1768;}
M.c.push(new RT.CallFrame(_1770,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_408,2,[M.e[M.e.length-1]],"score-a-point");
M.e[M.e.length-1][97]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1766=function(M){if(--M.cbt<0){throw _1766;}
M.c.push(new RT.CallFrame(_1768,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_407,1,[M.e[M.e.length-1]],"vertical-ball-bounce");
M.e[M.e.length-1][96]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1764=function(M){if(--M.cbt<0){throw _1764;}
M.c.push(new RT.CallFrame(_1766,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_406,6,[M.e[M.e.length-1]],"vertical-bounce");
M.e[M.e.length-1][95]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1762=function(M){if(--M.cbt<0){throw _1762;}
M.c.push(new RT.CallFrame(_1764,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_405,1,[M.e[M.e.length-1]],"move-paddle");
M.e[M.e.length-1][94]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1760=function(M){if(--M.cbt<0){throw _1760;}
M.c.push(new RT.CallFrame(_1762,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_404,3,[M.e[M.e.length-1]],"move-paddle-vert");
M.e[M.e.length-1][91]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1758=function(M){if(--M.cbt<0){throw _1758;}
M.c.push(new RT.CallFrame(_1760,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_403,1,[M.e[M.e.length-1]],"move-ball");
M.e[M.e.length-1][87]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1756=function(M){if(--M.cbt<0){throw _1756;}
M.c.push(new RT.CallFrame(_1758,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_402,3,[M.e[M.e.length-1]],"move-coord");
M.e[M.e.length-1][86]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1754=function(M){if(--M.cbt<0){throw _1754;}
M.c.push(new RT.CallFrame(_1756,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_401,1,[M.e[M.e.length-1]],"main");
M.e[M.e.length-1][72]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1752=function(M){if(--M.cbt<0){throw _1752;}
M.c.push(new RT.CallFrame(_1754,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_400_c;
M.e[M.e.length-1][71]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1750=function(M){if(--M.cbt<0){throw _1750;}
M.c.push(new RT.CallFrame(_1752,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_399,2,[M.e[M.e.length-1]],"pong-world-set-right-score");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1748=function(M){if(--M.cbt<0){throw _1748;}
M.c.push(new RT.CallFrame(_1750,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_398,2,[M.e[M.e.length-1]],"pong-world-set-left-score");
M.e[M.e.length-1][69]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1746=function(M){if(--M.cbt<0){throw _1746;}
M.c.push(new RT.CallFrame(_1748,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_397,2,[M.e[M.e.length-1]],"pong-world-set-right-paddle");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1744=function(M){if(--M.cbt<0){throw _1744;}
M.c.push(new RT.CallFrame(_1746,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_396,2,[M.e[M.e.length-1]],"pong-world-set-left-paddle");
M.e[M.e.length-1][67]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1742=function(M){if(--M.cbt<0){throw _1742;}
M.c.push(new RT.CallFrame(_1744,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_395,2,[M.e[M.e.length-1]],"pong-world-set-ball");
M.e[M.e.length-1][66]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1740=function(M){if(--M.cbt<0){throw _1740;}
M.c.push(new RT.CallFrame(_1742,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_394,2,[M.e[M.e.length-1]],"pong-world-set-status");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1737=RT.si_context_expected(15);

var _1734=RT.si_context_expected(5);

var _1730=function(M){if(--M.cbt<0){throw _1730;}
M.c.push(new RT.CallFrame(_1740,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_393,3,[M.e[M.e.length-1]],"mutate-and-return");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1727=RT.si_context_expected(9);

var _1724=RT.si_context_expected(5);

var _1720=function(M){if(--M.cbt<0){throw _1720;}
M.c.push(new RT.CallFrame(_1730,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26496;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=6;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.v=sym26497;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1734,M.p));
return((M.p).label)(M);};

var _1717=RT.si_context_expected(9);

var _1714=RT.si_context_expected(5);

var _1710=function(M){if(--M.cbt<0){throw _1710;}
M.c.push(new RT.CallFrame(_1720,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26498;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=3;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.v=sym26499;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1724,M.p));
return((M.p).label)(M);};

var _1706=function(M){if(--M.cbt<0){throw _1706;}
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1704=function(M){if(--M.cbt<0){throw _1704;}
M.c.push(new RT.CallFrame(_1710,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26500;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=3;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.v=sym26501;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1714,M.p));
return((M.p).label)(M);};

var _1700=function(M){if(--M.cbt<0){throw _1700;}
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1698=function(M){if(--M.cbt<0){throw _1698;}
M.c.push(new RT.CallFrame(_1704,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1706,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1878,66,17,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1695=RT.si_context_expected(7);

var _1692=RT.si_context_expected(5);

var _1688=function(M){if(--M.cbt<0){throw _1688;}
M.c.push(new RT.CallFrame(_1698,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1700,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1803,63,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=-1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1686=function(M){if(--M.cbt<0){throw _1686;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1684=function(M){if(--M.cbt<0){throw _1684;}
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1682=function(M){if(--M.cbt<0){throw _1682;}
M.c.push(new RT.CallFrame(_1688,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26502;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.v=sym26503;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1692,M.p));
return((M.p).label)(M);};

var _1680=function(M){if(--M.cbt<0){throw _1680;}
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1678=function(M){if(--M.cbt<0){throw _1678;}
M.c.push(new RT.CallFrame(_1682,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1684,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1484,55,14,37]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][2];
M.c.push(new RT.CallFrame(_1686,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1493,55,23,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=26;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1676=function(M){if(--M.cbt<0){throw _1676;}
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1674=function(M){if(--M.cbt<0){throw _1674;}
M.c.push(new RT.CallFrame(_1678,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1680,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1441,54,13,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=26;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1672=function(M){if(--M.cbt<0){throw _1672;}
M.c.push(new RT.CallFrame(_1674,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1676,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",1309,50,15,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-1][4],16);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1670=function(M){if(--M.cbt<0){throw _1670;}
M.c.push(new RT.CallFrame(_1672,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1668=function(M){if(--M.cbt<0){throw _1668;}
M.c.push(new RT.CallFrame(_1670,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=68;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1666=function(M){if(--M.cbt<0){throw _1666;}
M.c.push(new RT.CallFrame(_1668,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=28;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1664=function(M){if(--M.cbt<0){throw _1664;}
M.c.push(new RT.CallFrame(_1666,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1662=function(M){if(--M.cbt<0){throw _1662;}
M.c.push(new RT.CallFrame(_1664,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=15;
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1660=function(M){if(--M.cbt<0){throw _1660;}
M.c.push(new RT.CallFrame(_1662,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1658=function(M){if(--M.cbt<0){throw _1658;}
M.c.push(new RT.CallFrame(_1660,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=90;
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1656=function(M){if(--M.cbt<0){throw _1656;}
M.c.push(new RT.CallFrame(_1658,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1654=function(M){if(--M.cbt<0){throw _1654;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1652=function(M){if(--M.cbt<0){throw _1652;}
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1650=function(M){if(--M.cbt<0){throw _1650;}
M.c.push(new RT.CallFrame(_1656,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=10;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1648=function(M){if(--M.cbt<0){throw _1648;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1646=function(M){if(--M.cbt<0){throw _1646;}
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1644=function(M){if(--M.cbt<0){throw _1644;}
M.c.push(new RT.CallFrame(_1650,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1652,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",668,22,20,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1654,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",675,22,27,12]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2][4],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1642=function(M){if(--M.cbt<0){throw _1642;}
M.c.push(new RT.CallFrame(_1644,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1646,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",627,21,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1648,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",634,21,27,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2][2],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1640=function(M){if(--M.cbt<0){throw _1640;}
M.c.push(new RT.CallFrame(_1642,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][4];
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1638=function(M){if(--M.cbt<0){throw _1638;}
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1636=function(M){if(--M.cbt<0){throw _1636;}
M.c.push(new RT.CallFrame(_1640,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][2];
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1634=function(M){if(--M.cbt<0){throw _1634;}
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1632=function(M){if(--M.cbt<0){throw _1632;}
M.c.push(new RT.CallFrame(_1636,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1638,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",472,15,22,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.makeFloat(660.0);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1630=function(M){if(--M.cbt<0){throw _1630;}
M.c.push(new RT.CallFrame(_1632,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1634,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",428,14,21,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.makeFloat(1245.0);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1628=function(M){if(--M.cbt<0){throw _1628;}
M.c.push(new RT.CallFrame(_1630,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.makeFloat(1.5);
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _439=function(M){if(--M.cbt<0){throw _439;}
M.mainModules.push("root/pong-world.rkt");
};

var _1609=function(M){if(--M.cbt<0){throw _1609;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1605=function(M){if(--M.cbt<0){throw _1605;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1603=function(M){if(--M.cbt<0){throw _1603;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1601=function(M){if(--M.cbt<0){throw _1601;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1609,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22138,564,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1599=function(M){if(--M.cbt<0){throw _1599;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1591=function(M){if(--M.cbt<0){throw _1591;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1587=function(M){if(--M.cbt<0){throw _1587;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1585=function(M){if(--M.cbt<0){throw _1585;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1583=function(M){if(--M.cbt<0){throw _1583;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1591,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21928,561,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1581=function(M){if(--M.cbt<0){throw _1581;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1579=function(M){if(--M.cbt<0){throw _1579;}
if(M.v===false){return(_1576)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21790,560,10,199]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][68];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1581,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21825,560,45,163]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][41];
M.c.push(new RT.CallFrame(_1583,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21838,560,58,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-8][88][0][M.e[M.e.length-8][88][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][21];
M.c.push(new RT.CallFrame(_1585,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21855,560,75,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-13];
M.c.push(new RT.CallFrame(_1587,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21862,560,82,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-10][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1573=function(M){if(--M.cbt<0){throw _1573;}
return(_1565)(M);};

var _1569=function(M){if(--M.cbt<0){throw _1569;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1567=function(M){if(--M.cbt<0){throw _1567;}
if(M.v===false){return(_1564)(M);}else{M.c.push(new RT.CallFrame(_1573,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21699,557,14,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-3],M.e[M.e.length-1][7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1559=function(M){if(--M.cbt<0){throw _1559;}
return(_1551)(M);};

var _1555=function(M){if(--M.cbt<0){throw _1555;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1553=function(M){if(--M.cbt<0){throw _1553;}
if(M.v===false){return(_1550)(M);}else{M.c.push(new RT.CallFrame(_1559,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21572,554,14,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-3],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][7],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1545=function(M){if(--M.cbt<0){throw _1545;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1543=function(M){if(--M.cbt<0){throw _1543;}
return(_1535)(M);};

var _1539=function(M){if(--M.cbt<0){throw _1539;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1537=function(M){if(--M.cbt<0){throw _1537;}
if(M.v===false){return(_1534)(M);}else{M.v=true;
return(_1535)(M);}};

var _1531=function(M){if(--M.cbt<0){throw _1531;}
return(_1527)(M);};

var _1529=function(M){if(--M.cbt<0){throw _1529;}
if(M.v===false){return(_1526)(M);}else{M.v=M.e[M.e.length-5];
M.v=true;
return(_1527)(M);}};

var _1519=function(M){if(--M.cbt<0){throw _1519;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1517=function(M){if(--M.cbt<0){throw _1517;}
return(_1509)(M);};

var _1513=function(M){if(--M.cbt<0){throw _1513;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1511=function(M){if(--M.cbt<0){throw _1511;}
if(M.v===false){return(_1508)(M);}else{M.v=true;
return(_1509)(M);}};

var _1503=function(M){if(--M.cbt<0){throw _1503;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1501=function(M){if(--M.cbt<0){throw _1501;}
if(M.v===false){return(_1498)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1495=function(M){if(--M.cbt<0){throw _1495;}
if(M.v===false){return(_1492)(M);}else{M.c.push(new RT.CallFrame(_1501,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19086,505,11,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1503,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19091,505,16,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1487=function(M){if(--M.cbt<0){throw _1487;}
if(M.v===false){return(_1484)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18996,502,8,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][65];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="quitting";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1477=function(M){if(--M.cbt<0){throw _1477;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1475=function(M){if(--M.cbt<0){throw _1475;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1471=function(M){if(--M.cbt<0){throw _1471;}
return(_1465)(M);};

var _1467=function(M){if(--M.cbt<0){throw _1467;}
if(M.v===false){return(_1464)(M);}else{M.v=true;
return(_1465)(M);}};

var _1455=function(M){if(--M.cbt<0){throw _1455;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1453=function(M){if(--M.cbt<0){throw _1453;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1449=function(M){if(--M.cbt<0){throw _1449;}
return(_1443)(M);};

var _1445=function(M){if(--M.cbt<0){throw _1445;}
if(M.v===false){return(_1442)(M);}else{M.v=true;
return(_1443)(M);}};

var _1433=function(M){if(--M.cbt<0){throw _1433;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][30];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1431=function(M){if(--M.cbt<0){throw _1431;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1427=function(M){if(--M.cbt<0){throw _1427;}
if(M.v===false){return(_1424)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18429,491,8,109]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][68];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1431,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18464,491,43,73]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][105];
M.c.push(new RT.CallFrame(_1433,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18483,491,62,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][55];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1417=function(M){if(--M.cbt<0){throw _1417;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][29];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1415=function(M){if(--M.cbt<0){throw _1415;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1411=function(M){if(--M.cbt<0){throw _1411;}
if(M.v===false){return(_1408)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18286,489,8,107]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][68];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1415,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18321,489,43,71]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][105];
M.c.push(new RT.CallFrame(_1417,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18340,489,62,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][55];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1401=function(M){if(--M.cbt<0){throw _1401;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][30];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1399=function(M){if(--M.cbt<0){throw _1399;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1395=function(M){if(--M.cbt<0){throw _1395;}
if(M.v===false){return(_1392)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18145,487,8,107]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][67];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1399,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18179,487,42,72]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][105];
M.c.push(new RT.CallFrame(_1401,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18198,487,61,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][54];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1385=function(M){if(--M.cbt<0){throw _1385;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][29];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1383=function(M){if(--M.cbt<0){throw _1383;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1379=function(M){if(--M.cbt<0){throw _1379;}
if(M.v===false){return(_1376)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18007,485,8,105]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][67];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1383,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18041,485,42,70]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][105];
M.c.push(new RT.CallFrame(_1385,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18060,485,61,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][54];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1367=function(M){if(--M.cbt<0){throw _1367;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1365=function(M){if(--M.cbt<0){throw _1365;}
M.e[M.e.length-3]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1359=function(M){if(--M.cbt<0){throw _1359;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1357=function(M){if(--M.cbt<0){throw _1357;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1365,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17628,472,4,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][90][0][M.e[M.e.length-5][90][1]]);
M.c.push(new RT.CallFrame(_1367,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17636,472,12,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][43];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1351=function(M){if(--M.cbt<0){throw _1351;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1347=function(M){if(--M.cbt<0){throw _1347;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1351,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17436,465,6,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1341=function(M){if(--M.cbt<0){throw _1341;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1339=function(M){if(--M.cbt<0){throw _1339;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_1347,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17400,464,6,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1333=function(M){if(--M.cbt<0){throw _1333;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1331=function(M){if(--M.cbt<0){throw _1331;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1339,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17348,463,6,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][94];
M.c.push(new RT.CallFrame(_1341,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17361,463,19,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][55];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1327=function(M){if(--M.cbt<0){throw _1327;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1331,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17297,462,6,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][94];
M.c.push(new RT.CallFrame(_1333,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17310,462,19,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][54];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1323=function(M){if(--M.cbt<0){throw _1323;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1327,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17267,461,6,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1315=function(M){if(--M.cbt<0){throw _1315;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1311=function(M){if(--M.cbt<0){throw _1311;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1315,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17123,457,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][57];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1305=function(M){if(--M.cbt<0){throw _1305;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1303=function(M){if(--M.cbt<0){throw _1303;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_1311,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17085,456,8,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][56];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1297=function(M){if(--M.cbt<0){throw _1297;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1295=function(M){if(--M.cbt<0){throw _1295;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1303,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17031,455,8,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][94];
M.c.push(new RT.CallFrame(_1305,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17044,455,21,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][55];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1287=function(M){if(--M.cbt<0){throw _1287;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1285=function(M){if(--M.cbt<0){throw _1285;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1283=function(M){if(--M.cbt<0){throw _1283;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1295,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16978,454,8,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][94];
M.c.push(new RT.CallFrame(_1297,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16991,454,21,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][54];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1279=function(M){if(--M.cbt<0){throw _1279;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1283,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16911,453,8,58]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][96];
M.c.push(new RT.CallFrame(_1285,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16933,453,30,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][87];
M.c.push(new RT.CallFrame(_1287,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16944,453,41,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][53];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1277=function(M){if(--M.cbt<0){throw _1277;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1273=function(M){if(--M.cbt<0){throw _1273;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1271=function(M){if(--M.cbt<0){throw _1271;}
if(M.v===false){return(_1268)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16824,450,4,331]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-2][104];
M.c.push(new RT.CallFrame(_1277,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16851,451,6,303]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][50];
M.c.push(new RT.CallFrame(_1279,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16877,452,8,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][52];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1263=function(M){if(--M.cbt<0){throw _1263;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1261=function(M){if(--M.cbt<0){throw _1261;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1263,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16661,445,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][116];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1257=function(M){if(--M.cbt<0){throw _1257;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1255=function(M){if(--M.cbt<0){throw _1255;}
if(M.v===false){return(_1252)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16560,443,7,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][115];
M.e[M.e.length-1]="You won!!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1261,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16609,444,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1247=function(M){if(--M.cbt<0){throw _1247;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1245=function(M){if(--M.cbt<0){throw _1245;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1247,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16472,441,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][116];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1241=function(M){if(--M.cbt<0){throw _1241;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1239=function(M){if(--M.cbt<0){throw _1239;}
if(M.v===false){return(_1236)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16371,439,7,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][115];
M.e[M.e.length-1]="You won!!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1245,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16420,440,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1231=function(M){if(--M.cbt<0){throw _1231;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1229=function(M){if(--M.cbt<0){throw _1229;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1231,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16284,437,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][116];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1225=function(M){if(--M.cbt<0){throw _1225;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1223=function(M){if(--M.cbt<0){throw _1223;}
if(M.v===false){return(_1220)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16175,435,7,132]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][115];
M.e[M.e.length-1]="Hit space to serve";
M.e[M.e.length-2]=36;
M.c.push(new RT.CallFrame(_1229,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16232,436,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1215=function(M){if(--M.cbt<0){throw _1215;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1213=function(M){if(--M.cbt<0){throw _1213;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1215,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16084,433,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][116];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1209=function(M){if(--M.cbt<0){throw _1209;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1207=function(M){if(--M.cbt<0){throw _1207;}
if(M.v===false){return(_1204)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15974,431,7,133]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][115];
M.e[M.e.length-1]="Hit space to serve";
M.e[M.e.length-2]=36;
M.c.push(new RT.CallFrame(_1213,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16032,432,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1199=function(M){if(--M.cbt<0){throw _1199;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1191=function(M){if(--M.cbt<0){throw _1191;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1189=function(M){if(--M.cbt<0){throw _1189;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1187=function(M){if(--M.cbt<0){throw _1187;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1199,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15884,429,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][116];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1179=function(M){if(--M.cbt<0){throw _1179;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1177=function(M){if(--M.cbt<0){throw _1177;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1175=function(M){if(--M.cbt<0){throw _1175;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1187,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15820,428,20,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][90][0][M.e[M.e.length-5][90][1]]);
M.c.push(new RT.CallFrame(_1189,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15828,428,28,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-7][34];
M.c.push(new RT.CallFrame(_1191,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15838,428,38,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1171=function(M){if(--M.cbt<0){throw _1171;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1169=function(M){if(--M.cbt<0){throw _1169;}
if(M.v===false){return(_1166)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15707,426,7,200]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][110];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-5][126];
M.c.push(new RT.CallFrame(_1175,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15755,427,20,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][89][0][M.e[M.e.length-5][89][1]]);
M.c.push(new RT.CallFrame(_1177,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15763,427,28,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-7][34];
M.c.push(new RT.CallFrame(_1179,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15773,427,38,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1163=function(M){if(--M.cbt<0){throw _1163;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1161=function(M){if(--M.cbt<0){throw _1161;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]="\n";
M.a=3;
M.v=M.primitives["string-append"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1159=function(M){if(--M.cbt<0){throw _1159;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1157=function(M){if(--M.cbt<0){throw _1157;}
M.c.push(new RT.CallFrame(_1169,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15657,425,5,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1171,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15662,425,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1151=function(M){if(--M.cbt<0){throw _1151;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.v=M.e[M.e.length-10];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1141=function(M){if(--M.cbt<0){throw _1141;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=80;
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-13][124];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1135=function(M){if(--M.cbt<0){throw _1135;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1133=function(M){if(--M.cbt<0){throw _1133;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=98;
M.v="white";
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1131=function(M){if(--M.cbt<0){throw _1131;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1141,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15286,413,10,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-13][7],60);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1129=function(M){if(--M.cbt<0){throw _1129;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1127=function(M){if(--M.cbt<0){throw _1127;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=80;
M.c.push(new RT.CallFrame(_1129,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15187,411,8,144]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-13][111][0][M.e[M.e.length-13][111][1]];
M.c.push(new RT.CallFrame(_1131,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15210,412,10,65]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.e[M.e.length-16][128][0][M.e[M.e.length-16][128][1]];
M.c.push(new RT.CallFrame(_1133,M.p));
M.v=M.e[M.e.length-16][3][0][M.e[M.e.length-16][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15216,412,16,47]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1135,M.p));
M.v=M.e[M.e.length-17][3][0][M.e[M.e.length-17][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15232,412,32,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-18][57];
M.e[M.e.length-1]=M.e[M.e.length-19];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1121=function(M){if(--M.cbt<0){throw _1121;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1119=function(M){if(--M.cbt<0){throw _1119;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=98;
M.v="white";
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1117=function(M){if(--M.cbt<0){throw _1117;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1127,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15157,410,8,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-9][7],60);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1115=function(M){if(--M.cbt<0){throw _1115;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1111=function(M){if(--M.cbt<0){throw _1111;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1115,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15063,408,6,269]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-9][111][0][M.e[M.e.length-9][111][1]];
M.c.push(new RT.CallFrame(_1117,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15084,409,8,64]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.e[M.e.length-12][128][0][M.e[M.e.length-12][128][1]];
M.c.push(new RT.CallFrame(_1119,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15090,409,14,46]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1121,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15106,409,30,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-14][56];
M.e[M.e.length-1]=M.e[M.e.length-15];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1109=function(M){if(--M.cbt<0){throw _1109;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1105=function(M){if(--M.cbt<0){throw _1105;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1109,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15012,407,4,321]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][127];
M.c.push(new RT.CallFrame(_1111,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15025,407,17,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][55];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1093=function(M){if(--M.cbt<0){throw _1093;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1091=function(M){if(--M.cbt<0){throw _1091;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1087=function(M){if(--M.cbt<0){throw _1087;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][19];
M.c.push(new RT.CallFrame(_1091,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14334,383,6,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-12][121];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.c.push(new RT.CallFrame(_1093,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14348,383,20,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-15][117];
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=M.e[M.e.length-17];
M.e[M.e.length-3]="black";
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1085=function(M){if(--M.cbt<0){throw _1085;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1081=function(M){if(--M.cbt<0){throw _1081;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=0;
M.c.push(new RT.CallFrame(_1085,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14271,380,4,100]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-9][110];
M.c.push(new RT.CallFrame(_1087,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14299,381,6,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][122];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1075=function(M){if(--M.cbt<0){throw _1075;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1073=function(M){if(--M.cbt<0){throw _1073;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1075,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14082,371,57,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1071=function(M){if(--M.cbt<0){throw _1071;}
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=M.e[M.e.length-10];
M.e[M.e.length-6]="white";
M.v=M.e[M.e.length-11];
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1065=function(M){if(--M.cbt<0){throw _1065;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1063=function(M){if(--M.cbt<0){throw _1063;}
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=M.e[M.e.length-17];
M.e[M.e.length-6]=M.e[M.e.length-18];
M.v=M.e[M.e.length-19];
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1061=function(M){if(--M.cbt<0){throw _1061;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1057=function(M){if(--M.cbt<0){throw _1057;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1061,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13936,367,6,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-12][120];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.e[M.e.length-3]=M.e[M.e.length-15];
M.c.push(new RT.CallFrame(_1063,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13964,367,34,14]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-18];
M.c.push(new RT.CallFrame(_1065,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13970,367,40,7]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, 2,M.e[M.e.length-16]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1055=function(M){if(--M.cbt<0){throw _1055;}
if(M.v===false){return(_1052)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13864,364,4,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][110];
M.c.push(new RT.CallFrame(_1057,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13893,365,6,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-9][118][0][M.e[M.e.length-9][118][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]=M.e[M.e.length-15];
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1047=function(M){if(--M.cbt<0){throw _1047;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1043=function(M){if(--M.cbt<0){throw _1043;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=0;
M.c.push(new RT.CallFrame(_1047,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13412,352,2,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-7][119][0][M.e[M.e.length-7][119][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1037=function(M){if(--M.cbt<0){throw _1037;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1035=function(M){if(--M.cbt<0){throw _1035;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1037,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13194,344,6,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-7][116]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-7].names[116]); }
M.p=M.e[M.e.length-7][116];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1029=function(M){if(--M.cbt<0){throw _1029;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=2;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1027=function(M){if(--M.cbt<0){throw _1027;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1025=function(M){if(--M.cbt<0){throw _1025;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1023=function(M){if(--M.cbt<0){throw _1023;}
M.e[M.e.length-3]=M.v;
M.v=M.e[M.e.length-9];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1019=function(M){if(--M.cbt<0){throw _1019;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=2;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1017=function(M){if(--M.cbt<0){throw _1017;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1015=function(M){if(--M.cbt<0){throw _1015;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1013=function(M){if(--M.cbt<0){throw _1013;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1023,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13033,338,6,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_1025,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13038,338,11,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1027,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13045,338,18,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1029,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13048,338,21,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-11][113][0][M.e[M.e.length-11][113][1]];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1009=function(M){if(--M.cbt<0){throw _1009;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="quitting";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1003=function(M){if(--M.cbt<0){throw _1003;}
M.e[M.e.length-2]=M.v;
M.v=28;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _997=function(M){if(--M.cbt<0){throw _997;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _993=function(M){if(--M.cbt<0){throw _993;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_997,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11655,305,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _987=function(M){if(--M.cbt<0){throw _987;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _983=function(M){if(--M.cbt<0){throw _983;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_987,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11447,298,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][45];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _977=function(M){if(--M.cbt<0){throw _977;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _969=function(M){if(--M.cbt<0){throw _969;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _967=function(M){if(--M.cbt<0){throw _967;}
M.p=M.e[M.e.length-8];
M.e[M.e.length-8]=M.v;
M.a=8;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _959=function(M){if(--M.cbt<0){throw _959;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _957=function(M){if(--M.cbt<0){throw _957;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _955=function(M){if(--M.cbt<0){throw _955;}
M.e[M.e.length-7]=M.v;
M.c.push(new RT.CallFrame(_967,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10954,282,10,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][36];
M.c.push(new RT.CallFrame(_969,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10966,282,22,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][53];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _947=function(M){if(--M.cbt<0){throw _947;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _945=function(M){if(--M.cbt<0){throw _945;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _943=function(M){if(--M.cbt<0){throw _943;}
M.e[M.e.length-6]=M.v;
M.c.push(new RT.CallFrame(_955,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10894,281,10,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_957,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10908,281,24,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][35];
M.c.push(new RT.CallFrame(_959,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10918,281,34,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _935=function(M){if(--M.cbt<0){throw _935;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _933=function(M){if(--M.cbt<0){throw _933;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _931=function(M){if(--M.cbt<0){throw _931;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_943,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10834,280,10,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][25];
M.c.push(new RT.CallFrame(_945,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10848,280,24,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][35];
M.c.push(new RT.CallFrame(_947,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10858,280,34,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _923=function(M){if(--M.cbt<0){throw _923;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _921=function(M){if(--M.cbt<0){throw _921;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _919=function(M){if(--M.cbt<0){throw _919;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_931,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10780,279,10,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][90][0][M.e[M.e.length-9][90][1]]);
M.c.push(new RT.CallFrame(_933,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10788,279,18,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][34];
M.c.push(new RT.CallFrame(_935,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10798,279,28,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _915=function(M){if(--M.cbt<0){throw _915;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_919,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10726,278,10,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][89][0][M.e[M.e.length-9][89][1]]);
M.c.push(new RT.CallFrame(_921,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10734,278,18,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][34];
M.c.push(new RT.CallFrame(_923,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10744,278,28,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _911=function(M){if(--M.cbt<0){throw _911;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_915,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10674,277,10,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][55];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _909=function(M){if(--M.cbt<0){throw _909;}
M.e[M.e.length-2]=M.v;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"/"));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _907=function(M){if(--M.cbt<0){throw _907;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _905=function(M){if(--M.cbt<0){throw _905;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _903=function(M){if(--M.cbt<0){throw _903;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["abs"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _901=function(M){if(--M.cbt<0){throw _901;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_909,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10430,270,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _899=function(M){if(--M.cbt<0){throw _899;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=3;
M.v=RT.checkedMul(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _897=function(M){if(--M.cbt<0){throw _897;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _895=function(M){if(--M.cbt<0){throw _895;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _893=function(M){if(--M.cbt<0){throw _893;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _891=function(M){if(--M.cbt<0){throw _891;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _889=function(M){if(--M.cbt<0){throw _889;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _887=function(M){if(--M.cbt<0){throw _887;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=90;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _879=function(M){if(--M.cbt<0){throw _879;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _877=function(M){if(--M.cbt<0){throw _877;}
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=M.e[M.e.length-13];
M.e[M.e.length-5]=M.e[M.e.length-14];
M.e[M.e.length-6]=M.e[M.e.length-15];
M.e[M.e.length-7]=M.e[M.e.length-16];
M.v=M.e[M.e.length-17];
M.p=M.e[M.e.length-8];
M.e[M.e.length-8]=M.v;
M.a=8;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-17,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _871=function(M){if(--M.cbt<0){throw _871;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _869=function(M){if(--M.cbt<0){throw _869;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_877,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9721,257,21,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][90][0][M.e[M.e.length-9][90][1]]);
M.c.push(new RT.CallFrame(_879,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9729,257,29,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _859=function(M){if(--M.cbt<0){throw _859;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _853=function(M){if(--M.cbt<0){throw _853;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _851=function(M){if(--M.cbt<0){throw _851;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_853,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9291,247,43,42]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][100];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _849=function(M){if(--M.cbt<0){throw _849;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_859,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9353,248,18,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][101];
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _845=function(M){if(--M.cbt<0){throw _845;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_849,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9266,247,18,68]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-8][23];
M.c.push(new RT.CallFrame(_851,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9282,247,34,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-14]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _843=function(M){if(--M.cbt<0){throw _843;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _839=function(M){if(--M.cbt<0){throw _839;}
if(M.v===false){return(_836)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9173,245,37,233]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][66];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_843,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9217,246,16,188]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][32];
M.c.push(new RT.CallFrame(_845,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9228,246,27,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-8][88][0][M.e[M.e.length-8][88][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][21];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _835=function(M){if(--M.cbt<0){throw _835;}
M.e[M.e.length-2]=M.v;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"<"))));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _833=function(M){if(--M.cbt<0){throw _833;}
return(_827)(M);};

var _831=function(M){if(--M.cbt<0){throw _831;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _829=function(M){if(--M.cbt<0){throw _829;}
if(M.v===false){return(_826)(M);}else{M.c.push(new RT.CallFrame(_833,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8975,242,50,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_835,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8980,242,55,39]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6],90,10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _823=function(M){if(--M.cbt<0){throw _823;}
if(M.v===false){return(_820)(M);}else{M.c.push(new RT.CallFrame(_829,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8943,242,18,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_831,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8948,242,23,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6],10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _811=function(M){if(--M.cbt<0){throw _811;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _805=function(M){if(--M.cbt<0){throw _805;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _803=function(M){if(--M.cbt<0){throw _803;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_805,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8566,233,43,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][100];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _801=function(M){if(--M.cbt<0){throw _801;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_811,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8627,234,18,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][101];
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _797=function(M){if(--M.cbt<0){throw _797;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_801,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8541,233,18,67]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-8][23];
M.c.push(new RT.CallFrame(_803,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8557,233,34,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-14]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _795=function(M){if(--M.cbt<0){throw _795;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _791=function(M){if(--M.cbt<0){throw _791;}
if(M.v===false){return(_788)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8449,231,37,230]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][66];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_795,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8493,232,16,185]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][32];
M.c.push(new RT.CallFrame(_797,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8504,232,27,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-8][88][0][M.e[M.e.length-8][88][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][20];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _787=function(M){if(--M.cbt<0){throw _787;}
M.e[M.e.length-2]=M.v;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"<"))));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _785=function(M){if(--M.cbt<0){throw _785;}
return(_779)(M);};

var _783=function(M){if(--M.cbt<0){throw _783;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _781=function(M){if(--M.cbt<0){throw _781;}
if(M.v===false){return(_778)(M);}else{M.c.push(new RT.CallFrame(_785,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8251,228,49,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_787,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8256,228,54,38]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-5],90,10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _775=function(M){if(--M.cbt<0){throw _775;}
if(M.v===false){return(_772)(M);}else{M.c.push(new RT.CallFrame(_781,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8220,228,18,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_783,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8225,228,23,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-5],10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _771=function(M){if(--M.cbt<0){throw _771;}
if(M.v===false){return(_768)(M);}else{M.v=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_775,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8160,226,11,10]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-5],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][20],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _763=function(M){if(--M.cbt<0){throw _763;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=1;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _761=function(M){if(--M.cbt<0){throw _761;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _757=function(M){if(--M.cbt<0){throw _757;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_761,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7936,219,8,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_763,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7939,219,11,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][57];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _753=function(M){if(--M.cbt<0){throw _753;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_757,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7898,218,8,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _749=function(M){if(--M.cbt<0){throw _749;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_753,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7858,217,8,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _745=function(M){if(--M.cbt<0){throw _745;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_749,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7819,216,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _741=function(M){if(--M.cbt<0){throw _741;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=8;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),M.e[M.e.length-2])));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _739=function(M){if(--M.cbt<0){throw _739;}
if(M.v===false){return(_736)(M);}else{M.e[M.e.length-1]="left-player-serves";
return(_737)(M);}};

var _731=function(M){if(--M.cbt<0){throw _731;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _727=function(M){if(--M.cbt<0){throw _727;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=1;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _725=function(M){if(--M.cbt<0){throw _725;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_731,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7637,212,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _721=function(M){if(--M.cbt<0){throw _721;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_725,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7593,211,8,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_727,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7596,211,11,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][56];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _717=function(M){if(--M.cbt<0){throw _717;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_721,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7553,210,8,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _713=function(M){if(--M.cbt<0){throw _713;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_717,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7514,209,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _709=function(M){if(--M.cbt<0){throw _709;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=8;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),M.e[M.e.length-2])));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _707=function(M){if(--M.cbt<0){throw _707;}
if(M.v===false){return(_704)(M);}else{M.e[M.e.length-1]="right-player-serves";
return(_705)(M);}};

var _703=function(M){if(--M.cbt<0){throw _703;}
if(M.v===false){return(_700)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7340,205,6,328]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_707,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7403,207,12,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_709,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7406,207,15,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][56];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _697=function(M){if(--M.cbt<0){throw _697;}
if(M.v===false){return(_694)(M);}else{M.c.push(new RT.CallFrame(_703,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7316,204,8,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=(M.e[M.e.length-3]==="left");
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _689=function(M){if(--M.cbt<0){throw _689;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _683=function(M){if(--M.cbt<0){throw _683;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _681=function(M){if(--M.cbt<0){throw _681;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_689,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7164,199,10,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][36];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _675=function(M){if(--M.cbt<0){throw _675;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _673=function(M){if(--M.cbt<0){throw _673;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_681,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7123,198,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][26];
M.c.push(new RT.CallFrame(_683,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7137,198,24,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][35];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _667=function(M){if(--M.cbt<0){throw _667;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _665=function(M){if(--M.cbt<0){throw _665;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_673,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7082,197,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][25];
M.c.push(new RT.CallFrame(_675,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7096,197,24,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][35];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _659=function(M){if(--M.cbt<0){throw _659;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _657=function(M){if(--M.cbt<0){throw _657;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_665,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7047,196,10,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-7][90][0][M.e[M.e.length-7][90][1]]);
M.c.push(new RT.CallFrame(_667,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7055,196,18,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][34];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _651=function(M){if(--M.cbt<0){throw _651;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _649=function(M){if(--M.cbt<0){throw _649;}
M.e[M.e.length-2]=M.v;
M.v=M.e[M.e.length-10];
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _645=function(M){if(--M.cbt<0){throw _645;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_649,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6745,186,20,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_651,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6764,186,39,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _641=function(M){if(--M.cbt<0){throw _641;}
if(M.v===false){return(_638)(M);}else{M.v=M.e[M.e.length-2];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6693,185,33,107]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_645,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6704,185,44,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-6][88][0][M.e[M.e.length-6][88][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][19];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _637=function(M){if(--M.cbt<0){throw _637;}
if(M.v===false){return(_634)(M);}else{M.c.push(new RT.CallFrame(_641,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6673,185,13,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][71];
M.e[M.e.length-1]="wall";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _629=function(M){if(--M.cbt<0){throw _629;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _627=function(M){if(--M.cbt<0){throw _627;}
M.e[M.e.length-2]=M.v;
M.v=M.e[M.e.length-10];
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _623=function(M){if(--M.cbt<0){throw _623;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_627,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6398,178,20,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_629,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6417,178,39,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _619=function(M){if(--M.cbt<0){throw _619;}
if(M.v===false){return(_616)(M);}else{M.v=M.e[M.e.length-2];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6349,177,33,104]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_623,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6360,177,44,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-6][88][0][M.e[M.e.length-6][88][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][18];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _615=function(M){if(--M.cbt<0){throw _615;}
if(M.v===false){return(_612)(M);}else{M.c.push(new RT.CallFrame(_619,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6329,177,13,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][71];
M.e[M.e.length-1]="wall";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _611=function(M){if(--M.cbt<0){throw _611;}
if(M.v===false){return(_608)(M);}else{M.c.push(new RT.CallFrame(_615,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6202,174,11,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-4],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][18],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _603=function(M){if(--M.cbt<0){throw _603;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _599=function(M){if(--M.cbt<0){throw _599;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_603,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6044,168,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][45];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _591=function(M){if(--M.cbt<0){throw _591;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _585=function(M){if(--M.cbt<0){throw _585;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _583=function(M){if(--M.cbt<0){throw _583;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_591,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5970,166,19,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][45];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _577=function(M){if(--M.cbt<0){throw _577;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _575=function(M){if(--M.cbt<0){throw _575;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_583,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5915,165,19,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_585,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5929,165,33,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][44];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _573=function(M){if(--M.cbt<0){throw _573;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _567=function(M){if(--M.cbt<0){throw _567;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _565=function(M){if(--M.cbt<0){throw _565;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_573,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5828,163,17,164]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][91];
M.c.push(new RT.CallFrame(_575,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5866,164,19,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][90][0][M.e[M.e.length-9][90][1]]);
M.c.push(new RT.CallFrame(_577,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5874,164,27,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _563=function(M){if(--M.cbt<0){throw _563;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_599,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6009,167,15,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _561=function(M){if(--M.cbt<0){throw _561;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _559=function(M){if(--M.cbt<0){throw _559;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["max"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _557=function(M){if(--M.cbt<0){throw _557;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _555=function(M){if(--M.cbt<0){throw _555;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _553=function(M){if(--M.cbt<0){throw _553;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_559,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5667,158,48,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-5][18],2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _551=function(M){if(--M.cbt<0){throw _551;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_561,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5678,158,59,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-3][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _545=function(M){if(--M.cbt<0){throw _545;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _541=function(M){if(--M.cbt<0){throw _541;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_545,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5331,152,15,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][36];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _533=function(M){if(--M.cbt<0){throw _533;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _527=function(M){if(--M.cbt<0){throw _527;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _525=function(M){if(--M.cbt<0){throw _525;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_533,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5265,150,83,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][36];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _519=function(M){if(--M.cbt<0){throw _519;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _517=function(M){if(--M.cbt<0){throw _517;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_525,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5234,150,52,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_527,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5248,150,66,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][35];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _515=function(M){if(--M.cbt<0){throw _515;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _509=function(M){if(--M.cbt<0){throw _509;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _503=function(M){if(--M.cbt<0){throw _503;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _501=function(M){if(--M.cbt<0){throw _501;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_509,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5163,149,83,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][36];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _495=function(M){if(--M.cbt<0){throw _495;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _493=function(M){if(--M.cbt<0){throw _493;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_501,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5132,149,52,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][25];
M.c.push(new RT.CallFrame(_503,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5146,149,66,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][35];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _491=function(M){if(--M.cbt<0){throw _491;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_515,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5197,150,15,86]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][86];
M.c.push(new RT.CallFrame(_517,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5209,150,27,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][90][0][M.e[M.e.length-9][90][1]]);
M.c.push(new RT.CallFrame(_519,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5217,150,35,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][34];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _489=function(M){if(--M.cbt<0){throw _489;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_541,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5300,151,15,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][35];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _487=function(M){if(--M.cbt<0){throw _487;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _485=function(M){if(--M.cbt<0){throw _485;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _479=function(M){if(--M.cbt<0){throw _479;}
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _475=function(M){if(--M.cbt<0){throw _475;}
M.e[M.e.length-6]=M.v;
M.c.push(new RT.CallFrame(_479,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4878,141,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][84][0][M.e[M.e.length-9][84][1]];
if (M.e[M.e.length-9][85]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[85]); }
M.e[M.e.length-1]=M.e[M.e.length-9][85];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _471=function(M){if(--M.cbt<0){throw _471;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_475,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4758,139,4,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][82][0][M.e[M.e.length-9][82][1]];
if (M.e[M.e.length-9][83]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[83]); }
M.e[M.e.length-1]=M.e[M.e.length-9][83];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _467=function(M){if(--M.cbt<0){throw _467;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_471,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4727,138,4,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][80][0][M.e[M.e.length-9][80][1]];
if (M.e[M.e.length-9][81]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[81]); }
M.e[M.e.length-1]=M.e[M.e.length-9][81];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _463=function(M){if(--M.cbt<0){throw _463;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_467,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4628,136,4,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][78][0][M.e[M.e.length-9][78][1]];
if (M.e[M.e.length-9][79]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[79]); }
M.e[M.e.length-1]=M.e[M.e.length-9][79];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _459=function(M){if(--M.cbt<0){throw _459;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_463,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4598,135,4,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][76][0][M.e[M.e.length-9][76][1]];
if (M.e[M.e.length-9][77]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[77]); }
M.e[M.e.length-1]=M.e[M.e.length-9][77];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _443=function(M){if(--M.cbt<0){throw _443;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _441=function(M){if(--M.cbt<0){throw _441;}
M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1907=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1904=function(M){if(--M.cbt<0){throw _1904;}
M.e.length-=(M.a-1);
return(_1905)(M);};

var _1896=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1893=function(M){if(--M.cbt<0){throw _1893;}
M.e.length-=(M.a-1);
return(_1894)(M);};

var _1891=function(M){if(--M.cbt<0){throw _1891;}
M.e.length-=(M.a-1);
return(_1892)(M);};

var _1889=function(M){if(--M.cbt<0){throw _1889;}
M.e.length-=(M.a-1);
return(_1890)(M);};

var _1887=function(M){if(--M.cbt<0){throw _1887;}
M.e.length-=(M.a-1);
return(_1888)(M);};

var _1885=function(M){if(--M.cbt<0){throw _1885;}
M.e.length-=(M.a-1);
return(_1886)(M);};

var _1883=function(M){if(--M.cbt<0){throw _1883;}
M.e.length-=(M.a-1);
return(_1884)(M);};


var _1877=function(M){if(--M.cbt<0){throw _1877;}
M.e.length-=(M.a-1);
return(_1878)(M);};

var _1875=function(M){if(--M.cbt<0){throw _1875;}
M.e.length-=(M.a-1);
return(_1876)(M);};

var _1873=function(M){if(--M.cbt<0){throw _1873;}
M.e.length-=(M.a-1);
return(_1874)(M);};

var _1871=function(M){if(--M.cbt<0){throw _1871;}
M.e.length-=(M.a-1);
return(_1872)(M);};

var _1869=function(M){if(--M.cbt<0){throw _1869;}
M.e.length-=(M.a-1);
return(_1870)(M);};

var _1867=function(M){if(--M.cbt<0){throw _1867;}
M.e.length-=(M.a-1);
return(_1868)(M);};


var _1861=function(M){if(--M.cbt<0){throw _1861;}
M.e.length-=(M.a-1);
return(_1862)(M);};

var _1859=function(M){if(--M.cbt<0){throw _1859;}
M.e.length-=(M.a-1);
return(_1860)(M);};


var _1853=function(M){if(--M.cbt<0){throw _1853;}
M.e.length-=(M.a-1);
return(_1854)(M);};

var _1851=function(M){if(--M.cbt<0){throw _1851;}
M.e.length-=(M.a-1);
return(_1852)(M);};

var _1849=function(M){if(--M.cbt<0){throw _1849;}
M.e.length-=(M.a-1);
return(_1850)(M);};

var _1847=function(M){if(--M.cbt<0){throw _1847;}
M.e.length-=(M.a-1);
return(_1848)(M);};

var _1845=function(M){if(--M.cbt<0){throw _1845;}
M.e.length-=(M.a-1);
return(_1846)(M);};

var _1843=function(M){if(--M.cbt<0){throw _1843;}
M.e.length-=(M.a-1);
return(_1844)(M);};

var _1841=function(M){if(--M.cbt<0){throw _1841;}
M.e.length-=(M.a-1);
return(_1842)(M);};

var _1839=function(M){if(--M.cbt<0){throw _1839;}
M.e.length-=(M.a-1);
return(_1840)(M);};

var _1837=function(M){if(--M.cbt<0){throw _1837;}
M.e.length-=(M.a-1);
return(_1838)(M);};













var _1795=function(M){if(--M.cbt<0){throw _1795;}
M.e.length-=(M.a-1);
return(_1796)(M);};

var _1793=function(M){if(--M.cbt<0){throw _1793;}
M.e.length-=(M.a-1);
return(_1794)(M);};


var _1787=function(M){if(--M.cbt<0){throw _1787;}
M.e.length-=(M.a-1);
return(_1788)(M);};

var _1785=function(M){if(--M.cbt<0){throw _1785;}
M.e.length-=(M.a-1);
return(_1786)(M);};

var _1783=function(M){if(--M.cbt<0){throw _1783;}
M.e.length-=(M.a-1);
return(_1784)(M);};

var _1781=function(M){if(--M.cbt<0){throw _1781;}
M.e.length-=(M.a-1);
return(_1782)(M);};

var _1779=function(M){if(--M.cbt<0){throw _1779;}
M.e.length-=(M.a-1);
return(_1780)(M);};

var _1777=function(M){if(--M.cbt<0){throw _1777;}
M.e.length-=(M.a-1);
return(_1778)(M);};

var _1775=function(M){if(--M.cbt<0){throw _1775;}
M.e.length-=(M.a-1);
return(_1776)(M);};

var _1773=function(M){if(--M.cbt<0){throw _1773;}
M.e.length-=(M.a-1);
return(_1774)(M);};

var _1771=function(M){if(--M.cbt<0){throw _1771;}
M.e.length-=(M.a-1);
return(_1772)(M);};

var _1769=function(M){if(--M.cbt<0){throw _1769;}
M.e.length-=(M.a-1);
return(_1770)(M);};

var _1767=function(M){if(--M.cbt<0){throw _1767;}
M.e.length-=(M.a-1);
return(_1768)(M);};

var _1765=function(M){if(--M.cbt<0){throw _1765;}
M.e.length-=(M.a-1);
return(_1766)(M);};

var _1763=function(M){if(--M.cbt<0){throw _1763;}
M.e.length-=(M.a-1);
return(_1764)(M);};

var _1761=function(M){if(--M.cbt<0){throw _1761;}
M.e.length-=(M.a-1);
return(_1762)(M);};

var _1759=function(M){if(--M.cbt<0){throw _1759;}
M.e.length-=(M.a-1);
return(_1760)(M);};

var _1757=function(M){if(--M.cbt<0){throw _1757;}
M.e.length-=(M.a-1);
return(_1758)(M);};

var _1755=function(M){if(--M.cbt<0){throw _1755;}
M.e.length-=(M.a-1);
return(_1756)(M);};

var _1753=function(M){if(--M.cbt<0){throw _1753;}
M.e.length-=(M.a-1);
return(_1754)(M);};

var _1751=function(M){if(--M.cbt<0){throw _1751;}
M.e.length-=(M.a-1);
return(_1752)(M);};

var _1749=function(M){if(--M.cbt<0){throw _1749;}
M.e.length-=(M.a-1);
return(_1750)(M);};

var _1747=function(M){if(--M.cbt<0){throw _1747;}
M.e.length-=(M.a-1);
return(_1748)(M);};

var _1745=function(M){if(--M.cbt<0){throw _1745;}
M.e.length-=(M.a-1);
return(_1746)(M);};

var _1743=function(M){if(--M.cbt<0){throw _1743;}
M.e.length-=(M.a-1);
return(_1744)(M);};

var _1741=function(M){if(--M.cbt<0){throw _1741;}
M.e.length-=(M.a-1);
return(_1742)(M);};

var _1739=function(M){if(--M.cbt<0){throw _1739;}
M.e.length-=(M.a-1);
return(_1740)(M);};

var _1736=function(M){if(--M.cbt<0){throw _1736;}
if((M.a-15)===0){return(_1732)(M);}else{RT.si_context_expected(15)(M);
}};

var _1735=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-15]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=M.e[M.e.length-17];
M.e[M.e.length-3]=M.e[M.e.length-18];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26504;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26500;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=4;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=5;
M.e[M.e.length-3]=sym26508;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-9]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26504;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-10]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26500;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-11]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-12]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-13]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=4;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-14]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=5;
M.e[M.e.length-3]=sym26508;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-15];
M.e[M.e.length-15]=M.v;
M.a=15;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1737,M.p));
return((M.p).label)(M);};

var _1733=function(M){if(--M.cbt<0){throw _1733;}
if((M.a-5)===0){return(_1735)(M);}else{RT.si_context_expected(5)(M);
}};

var _1729=function(M){if(--M.cbt<0){throw _1729;}
M.e.length-=(M.a-1);
return(_1730)(M);};

var _1726=function(M){if(--M.cbt<0){throw _1726;}
if((M.a-9)===0){return(_1722)(M);}else{RT.si_context_expected(9)(M);
}};

var _1725=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-9]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]=M.e[M.e.length-12];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26510;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26511;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26510;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26511;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-9];
M.e[M.e.length-9]=M.v;
M.a=9;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1727,M.p));
return((M.p).label)(M);};

var _1723=function(M){if(--M.cbt<0){throw _1723;}
if((M.a-5)===0){return(_1725)(M);}else{RT.si_context_expected(5)(M);
}};

var _1719=function(M){if(--M.cbt<0){throw _1719;}
M.e.length-=(M.a-1);
return(_1720)(M);};

var _1716=function(M){if(--M.cbt<0){throw _1716;}
if((M.a-9)===0){return(_1712)(M);}else{RT.si_context_expected(9)(M);
}};

var _1715=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-9]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]=M.e[M.e.length-12];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26510;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26511;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26510;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26511;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-9];
M.e[M.e.length-9]=M.v;
M.a=9;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1717,M.p));
return((M.p).label)(M);};

var _1713=function(M){if(--M.cbt<0){throw _1713;}
if((M.a-5)===0){return(_1715)(M);}else{RT.si_context_expected(5)(M);
}};

var _1709=function(M){if(--M.cbt<0){throw _1709;}
M.e.length-=(M.a-1);
return(_1710)(M);};


var _1703=function(M){if(--M.cbt<0){throw _1703;}
M.e.length-=(M.a-1);
return(_1704)(M);};


var _1697=function(M){if(--M.cbt<0){throw _1697;}
M.e.length-=(M.a-1);
return(_1698)(M);};

var _1694=function(M){if(--M.cbt<0){throw _1694;}
if((M.a-7)===0){return(_1690)(M);}else{RT.si_context_expected(7)(M);
}};

var _1693=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26512;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26513;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26512;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26513;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1695,M.p));
return((M.p).label)(M);};

var _1691=function(M){if(--M.cbt<0){throw _1691;}
if((M.a-5)===0){return(_1693)(M);}else{RT.si_context_expected(5)(M);
}};

var _1687=function(M){if(--M.cbt<0){throw _1687;}
M.e.length-=(M.a-1);
return(_1688)(M);};



var _1681=function(M){if(--M.cbt<0){throw _1681;}
M.e.length-=(M.a-1);
return(_1682)(M);};


var _1677=function(M){if(--M.cbt<0){throw _1677;}
M.e.length-=(M.a-1);
return(_1678)(M);};


var _1673=function(M){if(--M.cbt<0){throw _1673;}
M.e.length-=(M.a-1);
return(_1674)(M);};

var _1671=function(M){if(--M.cbt<0){throw _1671;}
M.e.length-=(M.a-1);
return(_1672)(M);};

var _1669=function(M){if(--M.cbt<0){throw _1669;}
M.e.length-=(M.a-1);
return(_1670)(M);};

var _1667=function(M){if(--M.cbt<0){throw _1667;}
M.e.length-=(M.a-1);
return(_1668)(M);};

var _1665=function(M){if(--M.cbt<0){throw _1665;}
M.e.length-=(M.a-1);
return(_1666)(M);};

var _1663=function(M){if(--M.cbt<0){throw _1663;}
M.e.length-=(M.a-1);
return(_1664)(M);};

var _1661=function(M){if(--M.cbt<0){throw _1661;}
M.e.length-=(M.a-1);
return(_1662)(M);};

var _1659=function(M){if(--M.cbt<0){throw _1659;}
M.e.length-=(M.a-1);
return(_1660)(M);};

var _1657=function(M){if(--M.cbt<0){throw _1657;}
M.e.length-=(M.a-1);
return(_1658)(M);};

var _1655=function(M){if(--M.cbt<0){throw _1655;}
M.e.length-=(M.a-1);
return(_1656)(M);};



var _1649=function(M){if(--M.cbt<0){throw _1649;}
M.e.length-=(M.a-1);
return(_1650)(M);};



var _1643=function(M){if(--M.cbt<0){throw _1643;}
M.e.length-=(M.a-1);
return(_1644)(M);};

var _1641=function(M){if(--M.cbt<0){throw _1641;}
M.e.length-=(M.a-1);
return(_1642)(M);};

var _1639=function(M){if(--M.cbt<0){throw _1639;}
M.e.length-=(M.a-1);
return(_1640)(M);};


var _1635=function(M){if(--M.cbt<0){throw _1635;}
M.e.length-=(M.a-1);
return(_1636)(M);};


var _1631=function(M){if(--M.cbt<0){throw _1631;}
M.e.length-=(M.a-1);
return(_1632)(M);};

var _1629=function(M){if(--M.cbt<0){throw _1629;}
M.e.length-=(M.a-1);
return(_1630)(M);};

var _1627=function(M){if(--M.cbt<0){throw _1627;}
M.e.length-=(M.a-1);
return(_1628)(M);};

var _1625=function(M){if(--M.cbt<0){throw _1625;}
M.e.length-=(M.a-1);
return(_1626)(M);};

var _1626=function(M){if(--M.cbt<0){throw _1626;}
M.e.push([M.params.currentNamespace.get("SHOW-DEBUG-MSGS")||M.primitives["SHOW-DEBUG-MSGS"],M.params.currentNamespace.get("screen-scale")||M.primitives["screen-scale"],M.params.currentNamespace.get("SCREEN-WIDTH")||M.primitives["SCREEN-WIDTH"],[M.modules["whalesong/lang/private/traced-app.rkt"].prefix,M.modules["whalesong/lang/private/traced-app.rkt"].getPrefixOffset("traced-app-key"),{moduleName:"whalesong/lang/private/traced-app.rkt",name:"traced-app-key"}],M.params.currentNamespace.get("SCREEN-HEIGHT")||M.primitives["SCREEN-HEIGHT"],M.params.currentNamespace.get("WIDTH")||M.primitives["WIDTH"],M.params.currentNamespace.get("HEIGHT")||M.primitives["HEIGHT"],M.params.currentNamespace.get("CENTER-HORZ")||M.primitives["CENTER-HORZ"],M.primitives["round"],M.params.currentNamespace.get("CENTER-VERT")||M.primitives["CENTER-VERT"],M.params.currentNamespace.get("MARGIN")||M.primitives["MARGIN"],M.params.currentNamespace.get("WALL-HEIGHT")||M.primitives["WALL-HEIGHT"],M.params.currentNamespace.get("PADDLE-HEIGHT")||M.primitives["PADDLE-HEIGHT"],M.params.currentNamespace.get("PADDLE-THICKNESS")||M.primitives["PADDLE-THICKNESS"],M.params.currentNamespace.get("PADDLE-SPEED")||M.primitives["PADDLE-SPEED"],M.params.currentNamespace.get("BALL-SIZE")||M.primitives["BALL-SIZE"],M.params.currentNamespace.get("INITIAL-SPEED")||M.primitives["INITIAL-SPEED"],M.params.currentNamespace.get("MAXIMUM-SPEED")||M.primitives["MAXIMUM-SPEED"],M.params.currentNamespace.get("TOP")||M.primitives["TOP"],M.params.currentNamespace.get("BOTTOM")||M.primitives["BOTTOM"],M.params.currentNamespace.get("LEFT")||M.primitives["LEFT"],M.params.currentNamespace.get("RIGHT")||M.primitives["RIGHT"],M.params.currentNamespace.get("struct:direction")||M.primitives["struct:direction"],M.params.currentNamespace.get("make-direction")||M.primitives["make-direction"],M.params.currentNamespace.get("direction?")||M.primitives["direction?"],M.params.currentNamespace.get("direction-dx")||M.primitives["direction-dx"],M.params.currentNamespace.get("direction-dy")||M.primitives["direction-dy"],M.params.currentNamespace.get("set-direction-dx!")||M.primitives["set-direction-dx!"],M.params.currentNamespace.get("set-direction-dy!")||M.primitives["set-direction-dy!"],M.params.currentNamespace.get("UP-DIR")||M.primitives["UP-DIR"],M.params.currentNamespace.get("DOWN-DIR")||M.primitives["DOWN-DIR"],M.params.currentNamespace.get("struct:ball")||M.primitives["struct:ball"],M.params.currentNamespace.get("make-ball")||M.primitives["make-ball"],M.params.currentNamespace.get("ball?")||M.primitives["ball?"],M.params.currentNamespace.get("ball-pos")||M.primitives["ball-pos"],M.params.currentNamespace.get("ball-dir")||M.primitives["ball-dir"],M.params.currentNamespace.get("ball-speed")||M.primitives["ball-speed"],M.params.currentNamespace.get("set-ball-pos!")||M.primitives["set-ball-pos!"],M.params.currentNamespace.get("set-ball-dir!")||M.primitives["set-ball-dir!"],M.params.currentNamespace.get("set-ball-speed!")||M.primitives["set-ball-speed!"],M.params.currentNamespace.get("struct:paddle")||M.primitives["struct:paddle"],M.params.currentNamespace.get("make-paddle")||M.primitives["make-paddle"],M.params.currentNamespace.get("paddle?")||M.primitives["paddle?"],M.params.currentNamespace.get("paddle-pos")||M.primitives["paddle-pos"],M.params.currentNamespace.get("paddle-dir")||M.primitives["paddle-dir"],M.params.currentNamespace.get("paddle-speed")||M.primitives["paddle-speed"],M.params.currentNamespace.get("set-paddle-pos!")||M.primitives["set-paddle-pos!"],M.params.currentNamespace.get("set-paddle-dir!")||M.primitives["set-paddle-dir!"],M.params.currentNamespace.get("set-paddle-speed!")||M.primitives["set-paddle-speed!"],M.params.currentNamespace.get("struct:pong-world")||M.primitives["struct:pong-world"],M.params.currentNamespace.get("make-pong-world")||M.primitives["make-pong-world"],M.params.currentNamespace.get("pong-world?")||M.primitives["pong-world?"],M.params.currentNamespace.get("pong-world-status")||M.primitives["pong-world-status"],M.params.currentNamespace.get("pong-world-ball")||M.primitives["pong-world-ball"],M.params.currentNamespace.get("pong-world-left-paddle")||M.primitives["pong-world-left-paddle"],M.params.currentNamespace.get("pong-world-right-paddle")||M.primitives["pong-world-right-paddle"],M.params.currentNamespace.get("pong-world-left-score")||M.primitives["pong-world-left-score"],M.params.currentNamespace.get("pong-world-right-score")||M.primitives["pong-world-right-score"],M.params.currentNamespace.get("set-pong-world-status!")||M.primitives["set-pong-world-status!"],M.params.currentNamespace.get("set-pong-world-ball!")||M.primitives["set-pong-world-ball!"],M.params.currentNamespace.get("set-pong-world-left-paddle!")||M.primitives["set-pong-world-left-paddle!"],M.params.currentNamespace.get("set-pong-world-right-paddle!")||M.primitives["set-pong-world-right-paddle!"],M.params.currentNamespace.get("set-pong-world-left-score!")||M.primitives["set-pong-world-left-score!"],M.params.currentNamespace.get("set-pong-world-right-score!")||M.primitives["set-pong-world-right-score!"],M.params.currentNamespace.get("mutate-and-return")||M.primitives["mutate-and-return"],M.params.currentNamespace.get("pong-world-set-status")||M.primitives["pong-world-set-status"],M.params.currentNamespace.get("pong-world-set-ball")||M.primitives["pong-world-set-ball"],M.params.currentNamespace.get("pong-world-set-left-paddle")||M.primitives["pong-world-set-left-paddle"],M.params.currentNamespace.get("pong-world-set-right-paddle")||M.primitives["pong-world-set-right-paddle"],M.params.currentNamespace.get("pong-world-set-left-score")||M.primitives["pong-world-set-left-score"],M.params.currentNamespace.get("pong-world-set-right-score")||M.primitives["pong-world-set-right-score"],M.params.currentNamespace.get("play-sound")||M.primitives["play-sound"],M.params.currentNamespace.get("main")||M.primitives["main"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("big-bang1.1"),{moduleName:"whalesong/world/main.rkt",name:"big-bang1.1"}],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-tick2.3"),{moduleName:"whalesong/world/main.rkt",name:"on-tick2.3"}],M.params.currentNamespace.get("handle-tick")||M.primitives["handle-tick"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("to-draw7.13"),{moduleName:"whalesong/world/main.rkt",name:"to-draw7.13"}],M.params.currentNamespace.get("draw-pong-world")||M.primitives["draw-pong-world"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-key3.5"),{moduleName:"whalesong/world/main.rkt",name:"on-key3.5"}],M.params.currentNamespace.get("handle-key-down")||M.primitives["handle-key-down"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-release4.7"),{moduleName:"whalesong/world/main.rkt",name:"on-release4.7"}],M.params.currentNamespace.get("handle-key-up")||M.primitives["handle-key-up"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-mouse5.9"),{moduleName:"whalesong/world/main.rkt",name:"on-mouse5.9"}],M.params.currentNamespace.get("handle-mouse")||M.primitives["handle-mouse"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("stop-when8.15"),{moduleName:"whalesong/world/main.rkt",name:"stop-when8.15"}],M.params.currentNamespace.get("quitting?")||M.primitives["quitting?"],M.params.currentNamespace.get("move-coord")||M.primitives["move-coord"],M.params.currentNamespace.get("move-ball")||M.primitives["move-ball"],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("make-posn"),{moduleName:"whalesong/lang/posn.rkt",name:"make-posn"}],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("posn-x"),{moduleName:"whalesong/lang/posn.rkt",name:"posn-x"}],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("posn-y"),{moduleName:"whalesong/lang/posn.rkt",name:"posn-y"}],M.params.currentNamespace.get("move-paddle-vert")||M.primitives["move-paddle-vert"],M.primitives["min"],M.primitives["max"],M.params.currentNamespace.get("move-paddle")||M.primitives["move-paddle"],M.params.currentNamespace.get("vertical-bounce")||M.primitives["vertical-bounce"],M.params.currentNamespace.get("vertical-ball-bounce")||M.primitives["vertical-ball-bounce"],M.params.currentNamespace.get("score-a-point")||M.primitives["score-a-point"],M.params.currentNamespace.get("serve-ball")||M.primitives["serve-ball"],M.params.currentNamespace.get("horizontal-bounce-y")||M.primitives["horizontal-bounce-y"],M.params.currentNamespace.get("vary-dy-by-intersection")||M.primitives["vary-dy-by-intersection"],M.params.currentNamespace.get("vary-speed-by-intersection")||M.primitives["vary-speed-by-intersection"],M.params.currentNamespace.get("horizontal-bounce")||M.primitives["horizontal-bounce"],M.primitives["abs"],M.params.currentNamespace.get("check-paddle-block")||M.primitives["check-paddle-block"],M.params.currentNamespace.get("set-paddle-moving")||M.primitives["set-paddle-moving"],M.params.currentNamespace.get("set-paddle-pos")||M.primitives["set-paddle-pos"],M.params.currentNamespace.get("stop-paddle")||M.primitives["stop-paddle"],M.params.currentNamespace.get("initial-posn")||M.primitives["initial-posn"],M.params.currentNamespace.get("initial-world")||M.primitives["initial-world"],M.params.currentNamespace.get("place-image-top-left")||M.primitives["place-image-top-left"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("place-image17.33"),{moduleName:"whalesong/image/private/main.rkt",name:"place-image17.33"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("image-width44.87"),{moduleName:"whalesong/image/private/main.rkt",name:"image-width44.87"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("image-height45.89"),{moduleName:"whalesong/image/private/main.rkt",name:"image-height45.89"}],M.params.currentNamespace.get("draw-goodbye")||M.primitives["draw-goodbye"],M.params.currentNamespace.get("display-msg")||M.primitives["display-msg"],M.params.currentNamespace.get("draw-idle-game")||M.primitives["draw-idle-game"],M.params.currentNamespace.get("draw-bg")||M.primitives["draw-bg"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("rectangle31.61"),{moduleName:"whalesong/image/private/main.rkt",name:"rectangle31.61"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("empty-scene16.31"),{moduleName:"whalesong/image/private/main.rkt",name:"empty-scene16.31"}],M.params.currentNamespace.get("vertical-dashed-line")||M.primitives["vertical-dashed-line"],M.params.currentNamespace.get("draw-net")||M.primitives["draw-net"],M.params.currentNamespace.get("draw-wall")||M.primitives["draw-wall"],M.params.currentNamespace.get("draw-playfield-bg")||M.primitives["draw-playfield-bg"],M.params.currentNamespace.get("PLAYFIELD-BG")||M.primitives["PLAYFIELD-BG"],M.params.currentNamespace.get("draw-ball")||M.primitives["draw-ball"],M.params.currentNamespace.get("BALL")||M.primitives["BALL"],M.params.currentNamespace.get("draw-paddle")||M.primitives["draw-paddle"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("text1.1"),{moduleName:"whalesong/image/private/main.rkt",name:"text1.1"}],M.primitives["number->string"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("text/font2.3"),{moduleName:"whalesong/image/private/main.rkt",name:"text/font2.3"}],M.params.currentNamespace.get("dbgmsg")||M.primitives["dbgmsg"],M.primitives["string-append"],M.primitives["random"],M.params.currentNamespace.get("PADDLE")||M.primitives["PADDLE"],M.params.currentNamespace.get("serve")||M.primitives["serve"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("key=?6.11"),{moduleName:"whalesong/world/main.rkt",name:"key=?6.11"}],M.primitives["string=?"],M.primitives["string?"],M.primitives["display"],[M.modules["collects/racket/private/modbeg.rkt"].prefix,M.modules["collects/racket/private/modbeg.rkt"].getPrefixOffset("print-values"),{moduleName:"collects/racket/private/modbeg.rkt",name:"print-values"}],[M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix,M.modules["whalesong/lang/check-expect/check-expect.rkt"].getPrefixOffset("run-tests"),{moduleName:"whalesong/lang/check-expect/check-expect.rkt",name:"run-tests"}]]);M.e[M.e.length-1].names=["SHOW-DEBUG-MSGS","screen-scale","SCREEN-WIDTH","traced-app-key","SCREEN-HEIGHT","WIDTH","HEIGHT","CENTER-HORZ","round","CENTER-VERT","MARGIN","WALL-HEIGHT","PADDLE-HEIGHT","PADDLE-THICKNESS","PADDLE-SPEED","BALL-SIZE","INITIAL-SPEED","MAXIMUM-SPEED","TOP","BOTTOM","LEFT","RIGHT","struct:direction","make-direction","direction?","direction-dx","direction-dy","set-direction-dx!","set-direction-dy!","UP-DIR","DOWN-DIR","struct:ball","make-ball","ball?","ball-pos","ball-dir","ball-speed","set-ball-pos!","set-ball-dir!","set-ball-speed!","struct:paddle","make-paddle","paddle?","paddle-pos","paddle-dir","paddle-speed","set-paddle-pos!","set-paddle-dir!","set-paddle-speed!","struct:pong-world","make-pong-world","pong-world?","pong-world-status","pong-world-ball","pong-world-left-paddle","pong-world-right-paddle","pong-world-left-score","pong-world-right-score","set-pong-world-status!","set-pong-world-ball!","set-pong-world-left-paddle!","set-pong-world-right-paddle!","set-pong-world-left-score!","set-pong-world-right-score!","mutate-and-return","pong-world-set-status","pong-world-set-ball","pong-world-set-left-paddle","pong-world-set-right-paddle","pong-world-set-left-score","pong-world-set-right-score","play-sound","main","big-bang1.1","on-tick2.3","handle-tick","to-draw7.13","draw-pong-world","on-key3.5","handle-key-down","on-release4.7","handle-key-up","on-mouse5.9","handle-mouse","stop-when8.15","quitting?","move-coord","move-ball","make-posn","posn-x","posn-y","move-paddle-vert","min","max","move-paddle","vertical-bounce","vertical-ball-bounce","score-a-point","serve-ball","horizontal-bounce-y","vary-dy-by-intersection","vary-speed-by-intersection","horizontal-bounce","abs","check-paddle-block","set-paddle-moving","set-paddle-pos","stop-paddle","initial-posn","initial-world","place-image-top-left","place-image17.33","image-width44.87","image-height45.89","draw-goodbye","display-msg","draw-idle-game","draw-bg","rectangle31.61","empty-scene16.31","vertical-dashed-line","draw-net","draw-wall","draw-playfield-bg","PLAYFIELD-BG","draw-ball","BALL","draw-paddle","text1.1","number->string","text/font2.3","dbgmsg","string-append","random","PADDLE","serve","key=?6.11","string=?","string?","display","print-values","run-tests"];
M.modules["root/pong-world.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1628,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=false;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1624=function(M){if(M.modules["whalesong/image.rkt"].isInvoked!==false){return(_1626)(M);}else{M.c.push(new RT.CallFrame(_1626,M.p));
return(M.modules["whalesong/image.rkt"].label)(M);}};

var _1622=function(M){if(--M.cbt<0){throw _1622;}
M.e.length-=(M.a-1);
return(_1623)(M);};

var _1623=function(M){if(--M.cbt<0){throw _1623;}
if((M.installedModules["whalesong/image.rkt"]!==void(0)&&M.modules["whalesong/image.rkt"]!==undefined)!==false){return(_1624)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1624);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1624)(M);}};

var _1621=function(M){if(M.modules["whalesong/world.rkt"].isInvoked!==false){return(_1623)(M);}else{M.c.push(new RT.CallFrame(_1623,M.p));
return(M.modules["whalesong/world.rkt"].label)(M);}};

var _1619=function(M){if(--M.cbt<0){throw _1619;}
M.e.length-=(M.a-1);
return(_1620)(M);};

var _1620=function(M){if(--M.cbt<0){throw _1620;}
if((M.installedModules["whalesong/world.rkt"]!==void(0)&&M.modules["whalesong/world.rkt"]!==undefined)!==false){return(_1621)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1621);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1621)(M);}};

var _1618=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_1620)(M);}else{M.c.push(new RT.CallFrame(_1620,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

var _1616=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1617=function(M){M.modules["root/pong-world.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_1618)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1618);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1618)(M);}};

var _438=function(M){if(--M.cbt<0){throw _438;}
M.e.length-=(M.a-1);
return(_439)(M);};

var _436=function(M){if(--M.cbt<0){throw _436;}

//"lambda body for #(struct:LamPositionalName dbgmsg root/pong-world.rkt 569 0 22256 91)"

M.v=true;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};











var _1576=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22000,563,10,199]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][67];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1599,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22034,563,44,164]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][41];
M.c.push(new RT.CallFrame(_1601,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22047,563,57,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-8][88][0][M.e[M.e.length-8][88][1]];
M.e[M.e.length-1]=10;
M.c.push(new RT.CallFrame(_1603,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22065,563,75,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-13];
M.c.push(new RT.CallFrame(_1605,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",22072,563,82,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-10][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1562=function(M){M.c.push(new RT.CallFrame(_1579,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21762,559,18,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-3],M.e[M.e.length-1][7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1565=function(M){if(M.v===false){return(_1562)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21729,558,11,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][135];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1564=function(M){M.v=false;
return(_1565)(M);};



var _1548=function(M){M.c.push(new RT.CallFrame(_1567,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21631,556,14,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1569,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21636,556,19,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1551=function(M){if(M.v===false){return(_1548)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21602,555,11,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][135];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1550=function(M){M.v=false;
return(_1551)(M);};



var _1532=function(M){M.c.push(new RT.CallFrame(_1553,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21505,553,14,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1555,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21510,553,19,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1535=function(M){if(M.v===false){return(_1532)(M);}else{//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][109];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1534=function(M){M.c.push(new RT.CallFrame(_1543,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21413,551,13,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1545,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21418,551,18,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1524=function(M){M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1527=function(M){if(M.v===false){return(_1524)(M);}else{M.c.push(new RT.CallFrame(_1537,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21350,550,13,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1539,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21355,550,18,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1526=function(M){M.c.push(new RT.CallFrame(_1531,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21289,548,39,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]="button-down";
M.a=2;
M.v=M.primitives["string=?"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _435=function(M){if(--M.cbt<0){throw _435;}

//"lambda body for #(struct:LamPositionalName handle-mouse root/pong-world.rkt 547 0 21206 1007)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1529,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",21260,548,10,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]="drag";
M.a=2;
M.v=M.primitives["string=?"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1506=function(M){//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][109];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _1509=function(M){if(M.v===false){return(_1506)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19285,508,12,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][135];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1508=function(M){M.c.push(new RT.CallFrame(_1517,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19218,507,15,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1519,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19223,507,20,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1498=function(M){M.c.push(new RT.CallFrame(_1511,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19150,506,15,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1513,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19155,506,20,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1492=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1484=function(M){M.c.push(new RT.CallFrame(_1495,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",19043,503,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=" ";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1462=function(M){M.c.push(new RT.CallFrame(_1487,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18965,501,5,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="escape";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _1465=function(M){if(M.v===false){return(_1462)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18797,499,8,81]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][68];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1475,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18832,499,43,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][107];
M.c.push(new RT.CallFrame(_1477,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18845,499,56,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][55];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1464=function(M){M.c.push(new RT.CallFrame(_1471,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18767,498,28,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="down";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1440=function(M){M.c.push(new RT.CallFrame(_1467,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18748,498,9,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="up";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _1443=function(M){if(M.v===false){return(_1440)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18658,497,8,79]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][67];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1453,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18692,497,42,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][107];
M.c.push(new RT.CallFrame(_1455,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18705,497,55,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][54];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1442=function(M){M.c.push(new RT.CallFrame(_1449,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18631,496,27,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="s";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _434=function(M){if(--M.cbt<0){throw _434;}

//"lambda body for #(struct:LamPositionalName handle-key-up root/pong-world.rkt 494 0 18560 791)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1445,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18613,496,9,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="w";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1424=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _1408=function(M){M.c.push(new RT.CallFrame(_1427,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18400,490,5,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="down";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1392=function(M){M.c.push(new RT.CallFrame(_1411,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18259,488,5,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="up";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1376=function(M){M.c.push(new RT.CallFrame(_1395,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",18119,486,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="s";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _433=function(M){if(--M.cbt<0){throw _433;}

//"lambda body for #(struct:LamPositionalName handle-key-down root/pong-world.rkt 482 0 17930 628)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1379,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17981,484,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][136][0][M.e[M.e.length-3][136][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="w";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _432=function(M){if(--M.cbt<0){throw _432;}

//"lambda body for #(struct:LamPositionalName serve root/pong-world.rkt 479 0 17864 64)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17888,480,2,39]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][65];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="in-play";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _431=function(M){if(--M.cbt<0){throw _431;}

//"lambda body for #(struct:LamPositionalName draw-paddle root/pong-world.rkt 467 0 17475 199)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17557,469,2,116]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][110];
if (M.e[M.e.length-5][134]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[134]); }
M.e[M.e.length-1]=M.e[M.e.length-5][134];
M.c.push(new RT.CallFrame(_1357,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17594,471,4,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][89][0][M.e[M.e.length-5][89][1]]);
M.c.push(new RT.CallFrame(_1359,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17602,471,12,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][43];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




















var _1268=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17211,459,4,256]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_1323,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",17235,460,6,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _430=function(M){if(--M.cbt<0){throw _430;}

//"lambda body for #(struct:LamPositionalName handle-tick root/pong-world.rkt 447 0 16690 779)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1271,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16724,448,6,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1273,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16729,448,11,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1252=function(M){M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _1236=function(M){M.c.push(new RT.CallFrame(_1255,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16502,442,5,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1257,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16507,442,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};





var _1220=function(M){M.c.push(new RT.CallFrame(_1239,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16314,438,5,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1241,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16319,438,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};





var _1204=function(M){M.c.push(new RT.CallFrame(_1223,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16114,434,5,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1225,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",16119,434,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _1166=function(M){M.c.push(new RT.CallFrame(_1207,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15914,430,5,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1209,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15919,430,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};






var _1156=function(M){if(--M.cbt<0){throw _1156;}
M.e.length-=(M.a-1);
return(_1157)(M);};

var _429=function(M){if(--M.cbt<0){throw _429;}

//"lambda body for #(struct:LamPositionalName draw-pong-world root/pong-world.rkt 422 0 15535 1153)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1157,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15576,423,9,66]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-2][131]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-2].names[131]); }
M.e[M.e.length-1]=M.e[M.e.length-2][131];
M.c.push(new RT.CallFrame(_1159,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15584,423,17,57]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="draw ";
M.c.push(new RT.CallFrame(_1161,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15607,423,40,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1163,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15623,423,56,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(10);
M.a=1;
M.v=M.primitives["random"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _428=function(M){if(--M.cbt<0){throw _428;}

//"lambda body for #(struct:LamPositionalName display-msg root/pong-world.rkt 416 0 15337 194)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15385,417,2,145]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-5][111][0][M.e[M.e.length-5][111][1]];
M.c.push(new RT.CallFrame(_1151,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",15398,417,15,81]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-13][130][0][M.e[M.e.length-13][130][1]];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.e[M.e.length-3]="white";
M.e[M.e.length-4]="impact";
M.e[M.e.length-5]=sym26514;
M.e[M.e.length-6]=sym26515;
M.e[M.e.length-7]=sym26516;
M.e[M.e.length-8]=false;
M.a=8;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};














var _427=function(M){if(--M.cbt<0){throw _427;}

//"lambda body for #(struct:LamPositionalName draw-idle-game root/pong-world.rkt 405 0 14931 404)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14964,406,2,370]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][127];
M.c.push(new RT.CallFrame(_1105,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14977,406,15,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _426=function(M){if(--M.cbt<0){throw _426;}

//"lambda body for #(struct:LamPositionalName draw-ball root/pong-world.rkt 401 0 14829 63)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14854,401,25,37]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][118][0][M.e[M.e.length-5][118][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};






var _425=function(M){if(--M.cbt<0){throw _425;}

//"lambda body for #(struct:LamPositionalName draw-playfield-bg root/pong-world.rkt 376 0 14185 188)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14219,377,2,153]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][110];
M.c.push(new RT.CallFrame(_1081,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14245,378,4,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][122];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _424=function(M){if(--M.cbt<0){throw _424;}

//"lambda body for #(struct:LamPositionalName draw-wall root/pong-world.rkt 373 0 14117 66)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14141,374,2,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][118][0][M.e[M.e.length-5][118][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=16;
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _423=function(M){if(--M.cbt<0){throw _423;}

//"lambda body for #(struct:LamPositionalName draw-net root/pong-world.rkt 370 0 13999 116)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14029,371,4,85]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-8][120];
M.e[M.e.length-1]=16;
M.e[M.e.length-2]=16;
M.c.push(new RT.CallFrame(_1071,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14071,371,46,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1073,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",14074,371,49,7]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-11],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _1052=function(M){M.v=M.e[M.e.length-8];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _422=function(M){if(--M.cbt<0){throw _422;}

//"lambda body for #(struct:LamPositionalName vertical-dashed-line root/pong-world.rkt 362 0 13796 201)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1055,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13850,363,6,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-5],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-6],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _421=function(M){if(--M.cbt<0){throw _421;}

//"lambda body for #(struct:LamPositionalName draw-bg root/pong-world.rkt 346 0 13220 211)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13354,349,2,76]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][110];
M.c.push(new RT.CallFrame(_1043,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13378,350,2,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-9][118][0][M.e[M.e.length-9][118][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _420=function(M){if(--M.cbt<0){throw _420;}

//"lambda body for #(struct:LamPositionalName draw-goodbye root/pong-world.rkt 341 0 13090 128)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13122,342,3,95]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
if (M.e[M.e.length-6][115]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[115]); }
M.e[M.e.length-5]=M.e[M.e.length-6][115];
M.e[M.e.length-1]="Goodbye!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1035,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13156,343,6,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};









var _419=function(M){if(--M.cbt<0){throw _419;}

//"lambda body for #(struct:LamPositionalName place-image-top-left root/pong-world.rkt 335 0 12910 178)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12960,336,3,127]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-5][111][0][M.e[M.e.length-5][111][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.c.push(new RT.CallFrame(_1013,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12986,337,6,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1015,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12991,337,11,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1017,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12998,337,18,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1019,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",13002,337,22,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-11][112][0][M.e[M.e.length-11][112][1]];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _418=function(M){if(--M.cbt<0){throw _418;}

//"lambda body for #(struct:LamPositionalName quitting? root/pong-world.rkt 329 0 12571 71)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12599,330,2,42]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1009,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",12604,330,7,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _417=function(M){if(--M.cbt<0){throw _417;}

//"lambda body for #(struct:LamPositionalName serve-ball root/pong-world.rkt 312 0 11835 113)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11869,313,2,78]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][108];
M.c.push(new RT.CallFrame(_1003,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11898,314,5,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=0;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _416=function(M){if(--M.cbt<0){throw _416;}

//"lambda body for #(struct:LamPositionalName stop-paddle root/pong-world.rkt 302 0 11582 100)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11613,303,2,68]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_993,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11631,304,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][43];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _415=function(M){if(--M.cbt<0){throw _415;}

//"lambda body for #(struct:LamPositionalName set-paddle-pos root/pong-world.rkt 294 0 11359 111)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11397,295,2,72]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.c.push(new RT.CallFrame(_983,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11423,297,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _414=function(M){if(--M.cbt<0){throw _414;}

//"lambda body for #(struct:LamPositionalName set-paddle-moving root/pong-world.rkt 286 0 11143 104)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11190,287,2,56]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_977,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",11208,288,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][43];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

















var _413=function(M){if(--M.cbt<0){throw _413;}

//"lambda body for #(struct:LamPositionalName check-paddle-block root/pong-world.rkt 274 0 10560 432)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10597,275,2,394]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-8]=M.e[M.e.length-9][102];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_911,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10633,276,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][54];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _412=function(M){if(--M.cbt<0){throw _412;}

//"lambda body for #(struct:LamPositionalName vary-speed-by-intersection root/pong-world.rkt 264 0 10065 392)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10211,266,2,245]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=68;
M.c.push(new RT.CallFrame(_893,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10306,268,7,149]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_895,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10313,268,14,141]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.c.push(new RT.CallFrame(_897,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10348,269,17,105]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_899,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10351,269,20,99]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_901,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10354,269,23,54]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_903,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10359,269,28,48]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.c.push(new RT.CallFrame(_905,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10374,269,43,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.c.push(new RT.CallFrame(_907,M.p));
M.v=M.e[M.e.length-15][3][0][M.e[M.e.length-15][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",10386,269,55,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _411=function(M){if(--M.cbt<0){throw _411;}

//"lambda body for #(struct:LamPositionalName vary-dy-by-intersection root/pong-world.rkt 260 0 9861 124)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9918,261,2,66]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_887,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9921,261,5,48]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.c.push(new RT.CallFrame(_889,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9936,261,20,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_891,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9948,261,32,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _410=function(M){if(--M.cbt<0){throw _410;}

//"lambda body for #(struct:LamPositionalName horizontal-bounce root/pong-world.rkt 254 0 9539 234)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9616,255,2,156]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-8]=M.e[M.e.length-9][99];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_869,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9665,256,21,33]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][90][0][M.e[M.e.length-9][90][1]]);
M.c.push(new RT.CallFrame(_871,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9673,256,29,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};







var _836=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _824=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9452,250,9,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][97];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="left";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _827=function(M){if(M.v===false){return(_824)(M);}else{M.c.push(new RT.CallFrame(_839,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",9151,245,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][71];
M.e[M.e.length-1]="paddle";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};



var _826=function(M){M.v=false;
return(_827)(M);};



var _820=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};








var _788=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _776=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8729,236,11,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][97];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="right";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _779=function(M){if(M.v===false){return(_776)(M);}else{M.c.push(new RT.CallFrame(_791,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8427,231,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][71];
M.e[M.e.length-1]="paddle";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};



var _778=function(M){M.v=false;
return(_779)(M);};



var _772=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _768=function(M){M.c.push(new RT.CallFrame(_823,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8882,240,11,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-5],M.e[M.e.length-1][21]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _409=function(M){if(--M.cbt<0){throw _409;}

//"lambda body for #(struct:LamPositionalName horizontal-bounce-y root/pong-world.rkt 222 0 7990 1542)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_771,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",8107,224,8,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-7],0,"<"),0)));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};







var _737=function(M){M.c.push(new RT.CallFrame(_745,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7794,215,8,16]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-8][98]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-8].names[98]); }
M.p=M.e[M.e.length-8][98];
M.e[M.e.length-1]=RT.makeFloat(0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _736=function(M){M.e[M.e.length-1]="right-player-won";
return(_737)(M);};









var _705=function(M){M.c.push(new RT.CallFrame(_713,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7488,208,8,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-8][98]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-8].names[98]); }
M.p=M.e[M.e.length-8][98];
M.e[M.e.length-1]=RT.makeFloat(-0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _704=function(M){M.e[M.e.length-1]="left-player-won";
return(_705)(M);};



var _700=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7675,213,6,298]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_739,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7708,214,12,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_741,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7711,214,15,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][57];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _694=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _408=function(M){if(--M.cbt<0){throw _408;}

//"lambda body for #(struct:LamPositionalName score-a-point root/pong-world.rkt 201 0 7191 795)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_697,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7232,202,6,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][71];
M.e[M.e.length-1]="missed";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _407=function(M){if(--M.cbt<0){throw _407;}

//"lambda body for #(struct:LamPositionalName vertical-ball-bounce root/pong-world.rkt 193 0 6942 241)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6980,194,2,202]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][95];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_657,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7012,195,10,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-7][89][0][M.e[M.e.length-7][89][1]]);
M.c.push(new RT.CallFrame(_659,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",7020,195,18,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][34];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _638=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _634=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _616=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _612=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _608=function(M){M.c.push(new RT.CallFrame(_637,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6545,182,11,12]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-4],M.e[M.e.length-1][19]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _406=function(M){if(--M.cbt<0){throw _406;}

//"lambda body for #(struct:LamPositionalName vertical-bounce root/pong-world.rkt 170 0 6069 754)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_611,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",6150,172,8,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-6],0,"<"),0)));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};












var _405=function(M){if(--M.cbt<0){throw _405;}

//"lambda body for #(struct:LamPositionalName move-paddle root/pong-world.rkt 160 0 5709 358)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5740,161,2,326]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_563,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5753,161,15,240]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6][88][0][M.e[M.e.length-6][88][1]];
M.c.push(new RT.CallFrame(_565,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5782,162,17,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-6][89][0][M.e[M.e.length-6][89][1]]);
M.c.push(new RT.CallFrame(_567,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5790,162,25,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][43];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};







var _404=function(M){if(--M.cbt<0){throw _404;}

//"lambda body for #(struct:LamPositionalName move-paddle-vert root/pong-world.rkt 156 0 5513 193)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5621,158,2,84]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_551,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5626,158,7,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_553,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5631,158,12,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_555,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5638,158,19,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_557,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5651,158,32,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, M.e[M.e.length-10],M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};
















var _403=function(M){if(--M.cbt<0){throw _403;}

//"lambda body for #(struct:LamPositionalName move-ball root/pong-world.rkt 147 0 5030 320)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5057,148,2,292]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_489,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5068,148,13,216]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6][88][0][M.e[M.e.length-6][88][1]];
M.c.push(new RT.CallFrame(_491,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5095,149,15,86]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][86];
M.c.push(new RT.CallFrame(_493,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5107,149,27,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][89][0][M.e[M.e.length-9][89][1]]);
M.c.push(new RT.CallFrame(_495,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5115,149,35,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][34];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _402=function(M){if(--M.cbt<0){throw _402;}

//"lambda body for #(struct:LamPositionalName move-coord root/pong-world.rkt 143 0 4903 125)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4994,145,2,33]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_485,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5001,145,9,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.c.push(new RT.CallFrame(_487,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",5012,145,20,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, M.e[M.e.length-6],M.e[M.e.length-7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};







var _401=function(M){if(--M.cbt<0){throw _401;}

//"lambda body for #(struct:LamPositionalName main root/pong-world.rkt 132 0 4529 372)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4552,133,2,348]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.e[M.e.length-8][73][0][M.e[M.e.length-8][73][1]];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_459,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4572,134,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][74][0][M.e[M.e.length-9][74][1]];
if (M.e[M.e.length-9][75]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[75]); }
M.e[M.e.length-1]=M.e[M.e.length-9][75];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _400=function(M){if(--M.cbt<0){throw _400;}

//"lambda body for #(struct:LamPositionalName play-sound root/pong-world.rkt 119 0 4295 31)"

M.v=true;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _399=function(M){if(--M.cbt<0){throw _399;}

//"lambda body for #(struct:LamPositionalName pong-world-set-right-score root/pong-world.rkt 115 0 4110 124)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4168,116,3,65]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][63];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _398=function(M){if(--M.cbt<0){throw _398;}

//"lambda body for #(struct:LamPositionalName pong-world-set-left-score root/pong-world.rkt 113 0 3989 120)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",4045,114,3,63]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][62];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _397=function(M){if(--M.cbt<0){throw _397;}

//"lambda body for #(struct:LamPositionalName pong-world-set-right-paddle root/pong-world.rkt 111 0 3860 128)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3920,112,3,67]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][61];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _396=function(M){if(--M.cbt<0){throw _396;}

//"lambda body for #(struct:LamPositionalName pong-world-set-left-paddle root/pong-world.rkt 109 0 3735 124)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3793,110,3,65]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][60];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _395=function(M){if(--M.cbt<0){throw _395;}

//"lambda body for #(struct:LamPositionalName pong-world-set-ball root/pong-world.rkt 107 0 3637 96)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3681,108,3,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][59];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _394=function(M){if(--M.cbt<0){throw _394;}

//"lambda body for #(struct:LamPositionalName pong-world-set-status root/pong-world.rkt 105 0 3531 104)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3579,106,3,55]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][64];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][58];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _440=function(M){if(--M.cbt<0){throw _440;}
M.e.length-=(M.a-1);
return(_441)(M);};

var _393=function(M){if(--M.cbt<0){throw _393;}

//"lambda body for #(struct:LamPositionalName mutate-and-return root/pong-world.rkt 96 0 3140 122)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_441,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3207,98,4,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_443,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>",3221,98,18,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.makePair(M.e[M.e.length-5],RT.makePair(M.e[M.e.length-6],RT.NULL));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _437=function(M){M.c.push(new RT.CallFrame(_439,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["root/pong-world.rkt"]=function(){return new RT.ModuleRecord("pong-world",_1617);}
return(_1616)(M);};

var _1910=function(M){if(--M.cbt<0){throw _1910;}
if(M.a===0){return(_1907)(M);}else{M.e.push(M.v);
return(_1907)(M);}};

var _1899=function(M){if(--M.cbt<0){throw _1899;}
if(M.a===0){return(_1896)(M);}else{M.e.push(M.v);
return(_1896)(M);}};

var _1732=function(M){M.e.splice(M.e.length-19,5);
M.e[M.e.length-15][49]=M.v;
M.e[M.e.length-15][50]=M.e[M.e.length-1];
M.e[M.e.length-15][51]=M.e[M.e.length-2];
M.e[M.e.length-15][52]=M.e[M.e.length-3];
M.e[M.e.length-15][53]=M.e[M.e.length-4];
M.e[M.e.length-15][54]=M.e[M.e.length-5];
M.e[M.e.length-15][55]=M.e[M.e.length-6];
M.e[M.e.length-15][56]=M.e[M.e.length-7];
M.e[M.e.length-15][57]=M.e[M.e.length-8];
M.e[M.e.length-15][58]=M.e[M.e.length-9];
M.e[M.e.length-15][59]=M.e[M.e.length-10];
M.e[M.e.length-15][60]=M.e[M.e.length-11];
M.e[M.e.length-15][61]=M.e[M.e.length-12];
M.e[M.e.length-15][62]=M.e[M.e.length-13];
M.e[M.e.length-15][63]=M.e[M.e.length-14];
M.e.length-=14;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1722=function(M){M.e.splice(M.e.length-13,5);
M.e[M.e.length-9][40]=M.v;
M.e[M.e.length-9][41]=M.e[M.e.length-1];
M.e[M.e.length-9][42]=M.e[M.e.length-2];
M.e[M.e.length-9][43]=M.e[M.e.length-3];
M.e[M.e.length-9][44]=M.e[M.e.length-4];
M.e[M.e.length-9][45]=M.e[M.e.length-5];
M.e[M.e.length-9][46]=M.e[M.e.length-6];
M.e[M.e.length-9][47]=M.e[M.e.length-7];
M.e[M.e.length-9][48]=M.e[M.e.length-8];
M.e.length-=8;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1712=function(M){M.e.splice(M.e.length-13,5);
M.e[M.e.length-9][31]=M.v;
M.e[M.e.length-9][32]=M.e[M.e.length-1];
M.e[M.e.length-9][33]=M.e[M.e.length-2];
M.e[M.e.length-9][34]=M.e[M.e.length-3];
M.e[M.e.length-9][35]=M.e[M.e.length-4];
M.e[M.e.length-9][36]=M.e[M.e.length-5];
M.e[M.e.length-9][37]=M.e[M.e.length-6];
M.e[M.e.length-9][38]=M.e[M.e.length-7];
M.e[M.e.length-9][39]=M.e[M.e.length-8];
M.e.length-=8;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1690=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][22]=M.v;
M.e[M.e.length-7][23]=M.e[M.e.length-1];
M.e[M.e.length-7][24]=M.e[M.e.length-2];
M.e[M.e.length-7][25]=M.e[M.e.length-3];
M.e[M.e.length-7][26]=M.e[M.e.length-4];
M.e[M.e.length-7][27]=M.e[M.e.length-5];
M.e[M.e.length-7][28]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_441.mvr=_440;
_1157.mvr=_1156;
_1620.mvr=_1619;
_1623.mvr=_1622;
_1626.mvr=_1625;
_1628.mvr=_1627;
_1630.mvr=_1629;
_1632.mvr=_1631;
_1636.mvr=_1635;
_1640.mvr=_1639;
_1642.mvr=_1641;
_1644.mvr=_1643;
_1650.mvr=_1649;
_1656.mvr=_1655;
_1658.mvr=_1657;
_1660.mvr=_1659;
_1662.mvr=_1661;
_1664.mvr=_1663;
_1666.mvr=_1665;
_1668.mvr=_1667;
_1670.mvr=_1669;
_1672.mvr=_1671;
_1674.mvr=_1673;
_1678.mvr=_1677;
_1682.mvr=_1681;
_1692.mvr=_1691;
_1695.mvr=_1694;
_1688.mvr=_1687;
_1698.mvr=_1697;
_1704.mvr=_1703;
_1714.mvr=_1713;
_1717.mvr=_1716;
_1710.mvr=_1709;
_1724.mvr=_1723;
_1727.mvr=_1726;
_1720.mvr=_1719;
_1734.mvr=_1733;
_1737.mvr=_1736;
_1730.mvr=_1729;
_1740.mvr=_1739;
_1742.mvr=_1741;
_1744.mvr=_1743;
_1746.mvr=_1745;
_1748.mvr=_1747;
_1750.mvr=_1749;
_1752.mvr=_1751;
_1754.mvr=_1753;
_1756.mvr=_1755;
_1758.mvr=_1757;
_1760.mvr=_1759;
_1762.mvr=_1761;
_1764.mvr=_1763;
_1766.mvr=_1765;
_1768.mvr=_1767;
_1770.mvr=_1769;
_1772.mvr=_1771;
_1774.mvr=_1773;
_1776.mvr=_1775;
_1778.mvr=_1777;
_1780.mvr=_1779;
_1782.mvr=_1781;
_1784.mvr=_1783;
_1786.mvr=_1785;
_1788.mvr=_1787;
_1794.mvr=_1793;
_1796.mvr=_1795;
_1838.mvr=_1837;
_1840.mvr=_1839;
_1842.mvr=_1841;
_1844.mvr=_1843;
_1846.mvr=_1845;
_1848.mvr=_1847;
_1850.mvr=_1849;
_1852.mvr=_1851;
_1854.mvr=_1853;
_1860.mvr=_1859;
_1862.mvr=_1861;
_1868.mvr=_1867;
_1870.mvr=_1869;
_1872.mvr=_1871;
_1874.mvr=_1873;
_1876.mvr=_1875;
_1878.mvr=_1877;
_1884.mvr=_1883;
_1886.mvr=_1885;
_1888.mvr=_1887;
_1890.mvr=_1889;
_1892.mvr=_1891;
_1898.mvr=_1899;
_1894.mvr=_1893;
_1909.mvr=_1910;
_1905.mvr=_1904;
_439.mvr=_438;
var sym26504=RT.makeSymbol("status");
var sym26497=RT.makeSymbol("make-pong-world");
var sym26511=RT.makeSymbol("speed");
var sym26499=RT.makeSymbol("make-paddle");
var sym26498=RT.makeSymbol("paddle");
var sym26513=RT.makeSymbol("dy");
var sym26508=RT.makeSymbol("right-score");
var sym26507=RT.makeSymbol("left-score");
var sym26506=RT.makeSymbol("right-paddle");
var sym26505=RT.makeSymbol("left-paddle");
var sym26514=RT.makeSymbol("system");
var sym26510=RT.makeSymbol("dir");
var sym26496=RT.makeSymbol("pong-world");
var sym26515=RT.makeSymbol("normal");
var sym26509=RT.makeSymbol("pos");
var sym26516=RT.makeSymbol("light");
var sym26503=RT.makeSymbol("make-direction");
var sym26502=RT.makeSymbol("direction");
var sym26501=RT.makeSymbol("make-ball");
var sym26500=RT.makeSymbol("ball");
var sym26512=RT.makeSymbol("dx");var _400_c=new RT.Closure(_400,1,void(0),"play-sound");
var _436_c=new RT.Closure(_436,1,void(0),"dbgmsg");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1913(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<MainModuleSource /Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<MainModuleSource /Users/crused/Dropbox/pong-world-racket/whalesong/pong-world.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/whalesong.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1939=function(M){if(--M.cbt<0){throw _1939;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/whalesong.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exn:fail:contract:arity?", M.primitives["exn:fail:contract:arity?"]);ns.set("exn:fail:contract?", M.primitives["exn:fail:contract?"]);ns.set("exn:fail?", M.primitives["exn:fail?"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/whalesong.rkt"],M.modules["whalesong/lang/whalesong.rkt"].getExports(),M.modules["whalesong/lang/whalesong.rkt"].getExternalExports(),M.modules["whalesong/lang/whalesong.rkt"].prefix));
return(M.p)(M);};

var _1937=function(M){if(M.modules["whalesong/lang/posn.rkt"].isInvoked!==false){return(_1939)(M);}else{M.c.push(new RT.CallFrame(_1939,M.p));
return(M.modules["whalesong/lang/posn.rkt"].label)(M);}};

var _1935=function(M){if(--M.cbt<0){throw _1935;}
M.e.length-=(M.a-1);
return(_1936)(M);};

var _1936=function(M){if(--M.cbt<0){throw _1936;}
if((M.installedModules["whalesong/lang/posn.rkt"]!==void(0)&&M.modules["whalesong/lang/posn.rkt"]!==undefined)!==false){return(_1937)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/posn.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1937);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1937)(M);}};

var _1934=function(M){if(M.modules["whalesong/lang/bool.rkt"].isInvoked!==false){return(_1936)(M);}else{M.c.push(new RT.CallFrame(_1936,M.p));
return(M.modules["whalesong/lang/bool.rkt"].label)(M);}};

var _1932=function(M){if(--M.cbt<0){throw _1932;}
M.e.length-=(M.a-1);
return(_1933)(M);};

var _1933=function(M){if(--M.cbt<0){throw _1933;}
if((M.installedModules["whalesong/lang/bool.rkt"]!==void(0)&&M.modules["whalesong/lang/bool.rkt"]!==undefined)!==false){return(_1934)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/bool.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1934);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1934)(M);}};

var _1931=function(M){if(M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked!==false){return(_1933)(M);}else{M.c.push(new RT.CallFrame(_1933,M.p));
return(M.modules["whalesong/lang/check-expect/check-expect.rkt"].label)(M);}};

var _1929=function(M){if(--M.cbt<0){throw _1929;}
M.e.length-=(M.a-1);
return(_1930)(M);};

var _1930=function(M){if(--M.cbt<0){throw _1930;}
if((M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]!==void(0)&&M.modules["whalesong/lang/check-expect/check-expect.rkt"]!==undefined)!==false){return(_1931)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/check-expect/check-expect.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1931);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1931)(M);}};

var _1928=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_1930)(M);}else{M.c.push(new RT.CallFrame(_1930,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _1926=function(M){if(--M.cbt<0){throw _1926;}
M.e.length-=(M.a-1);
return(_1927)(M);};

var _1927=function(M){if(--M.cbt<0){throw _1927;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_1928)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1928);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1928)(M);}};

var _1925=function(M){if(M.modules["whalesong/lang/private/shared.rkt"].isInvoked!==false){return(_1927)(M);}else{M.c.push(new RT.CallFrame(_1927,M.p));
return(M.modules["whalesong/lang/private/shared.rkt"].label)(M);}};

var _1923=function(M){if(--M.cbt<0){throw _1923;}
M.e.length-=(M.a-1);
return(_1924)(M);};

var _1924=function(M){if(--M.cbt<0){throw _1924;}
if((M.installedModules["whalesong/lang/private/shared.rkt"]!==void(0)&&M.modules["whalesong/lang/private/shared.rkt"]!==undefined)!==false){return(_1925)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/shared.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1925);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1925)(M);}};

var _1922=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_1924)(M);}else{M.c.push(new RT.CallFrame(_1924,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _1920=function(M){if(--M.cbt<0){throw _1920;}
M.e.length-=(M.a-1);
return(_1921)(M);};

var _1921=function(M){if(--M.cbt<0){throw _1921;}
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_1922)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1922);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1922)(M);}};

var _1919=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_1921)(M);}else{M.c.push(new RT.CallFrame(_1921,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _1917=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1918=function(M){M.modules["whalesong/lang/whalesong.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_1919)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1919);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1919)(M);}};

var _1915=function(M){if(--M.cbt<0){throw _1915;}
M.e.length-=(M.a-1);
return(_1916)(M);};

var _1914=function(M){M.c.push(new RT.CallFrame(_1916,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/whalesong.rkt"]=function(){return new RT.ModuleRecord("whalesong",_1918);}
return(_1917)(M);};

var _1940=function(M){return(_1914)(M);};

var _1916=function(M){if(--M.cbt<0){throw _1916;}
};

var _1938=function(M){if(--M.cbt<0){throw _1938;}
M.e.length-=(M.a-1);
return(_1939)(M);};

_1921.mvr=_1920;
_1924.mvr=_1923;
_1927.mvr=_1926;
_1930.mvr=_1929;
_1933.mvr=_1932;
_1936.mvr=_1935;
_1939.mvr=_1938;
_1916.mvr=_1915;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1940(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/whalesong.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/whalesong.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/bool.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1967=function(M){if(--M.cbt<0){throw _1967;}
M.e.length-=(M.a-1);
return(_1968)(M);};

var _1965=function(M){if(--M.cbt<0){throw _1965;}
M.e.length-=(M.a-1);
return(_1966)(M);};

var _1963=function(M){if(--M.cbt<0){throw _1963;}
M.e.length-=(M.a-1);
return(_1964)(M);};

var _1961=function(M){if(--M.cbt<0){throw _1961;}
M.e.length-=(M.a-1);
return(_1962)(M);};

var _1959=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1960=function(M){M.modules["whalesong/lang/bool.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("true")||M.primitives["true"],M.params.currentNamespace.get("false")||M.primitives["false"],M.params.currentNamespace.get("false?")||M.primitives["false?"],M.params.currentNamespace.get("boolean=?")||M.primitives["boolean=?"],M.primitives["boolean?"],M.primitives["raise-type-error"],M.params.currentNamespace.get("symbol=?")||M.primitives["symbol=?"],M.primitives["symbol?"]]);M.e[M.e.length-1].names=["true","false","false?","boolean=?","boolean?","raise-type-error","symbol=?","symbol?"];
M.modules["whalesong/lang/bool.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1962,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=true;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1945=function(M){if(--M.cbt<0){throw _1945;}
M.e.length-=(M.a-1);
return(_1946)(M);};

var _1958=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1954)(M);};

var _1957=function(M){M.e[M.e.length-3]=0;
return(_1958)(M);};

var _1954=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1953=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30113;
M.e[M.e.length-2]="symbol";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_1957)(M);}else{M.e[M.e.length-3]=1;
return(_1958)(M);}};

var _1956=function(M){if(M.v===false){return(_1953)(M);}else{M.v=RT.VOID;
return(_1954)(M);}};

var _1955=function(M){M.v=false;
return(_1956)(M);};

var _1943=function(M){if(--M.cbt<0){throw _1943;}

//"lambda body for #(struct:LamPositionalName symbol=? whalesong/lang/bool.rkt 17 0 312 143)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_1955)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
return(_1956)(M);}};

var _1952=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1948)(M);};

var _1951=function(M){M.e[M.e.length-3]=0;
return(_1952)(M);};

var _1948=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1947=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30114;
M.e[M.e.length-2]="boolean";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_1951)(M);}else{M.e[M.e.length-3]=1;
return(_1952)(M);}};

var _1950=function(M){if(M.v===false){return(_1947)(M);}else{M.v=RT.VOID;
return(_1948)(M);}};

var _1949=function(M){M.v=false;
return(_1950)(M);};

var _1942=function(M){if(--M.cbt<0){throw _1942;}

//"lambda body for #(struct:LamPositionalName boolean=? whalesong/lang/bool.rkt 12 0 161 149)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_1949)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
return(_1950)(M);}};

var _1941=function(M){if(--M.cbt<0){throw _1941;}

//"lambda body for #(struct:LamPositionalName false? whalesong/lang/bool.rkt 10 0 129 30)"

M.v=(M.e[M.e.length-1]===false);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1944=function(M){M.c.push(new RT.CallFrame(_1946,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/bool.rkt"]=function(){return new RT.ModuleRecord("bool",_1960);}
return(_1959)(M);};

var _1971=function(M){return(_1944)(M);};

var _1970=function(M){if(--M.cbt<0){throw _1970;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);extNs.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);ns.set("false", prefix[selfMod.getPrefixOffset("false")]);extNs.set("false", prefix[selfMod.getPrefixOffset("false")]);ns.set("false?", prefix[selfMod.getPrefixOffset("false?")]);extNs.set("false?", prefix[selfMod.getPrefixOffset("false?")]);ns.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);extNs.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);ns.set("true", prefix[selfMod.getPrefixOffset("true")]);extNs.set("true", prefix[selfMod.getPrefixOffset("true")]);}(M.modules["whalesong/lang/bool.rkt"],M.modules["whalesong/lang/bool.rkt"].getExports(),M.modules["whalesong/lang/bool.rkt"].getExternalExports(),M.modules["whalesong/lang/bool.rkt"].prefix));
return(M.p)(M);};

var _1968=function(M){if(--M.cbt<0){throw _1968;}
M.c.push(new RT.CallFrame(_1970,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_1943,2,[M.e[M.e.length-1]],"symbol=?");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1966=function(M){if(--M.cbt<0){throw _1966;}
M.c.push(new RT.CallFrame(_1968,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_1942,2,[M.e[M.e.length-1]],"boolean=?");
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1964=function(M){if(--M.cbt<0){throw _1964;}
M.c.push(new RT.CallFrame(_1966,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_1941_c;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1962=function(M){if(--M.cbt<0){throw _1962;}
M.c.push(new RT.CallFrame(_1964,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=false;
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1946=function(M){if(--M.cbt<0){throw _1946;}
};

var _1969=function(M){if(--M.cbt<0){throw _1969;}
M.e.length-=(M.a-1);
return(_1970)(M);};

_1962.mvr=_1961;
_1964.mvr=_1963;
_1966.mvr=_1965;
_1968.mvr=_1967;
_1970.mvr=_1969;
_1946.mvr=_1945;
var sym30113=RT.makeSymbol("symbol=?");
var sym30114=RT.makeSymbol("boolean=?");var _1941_c=new RT.Closure(_1941,1,void(0),"false?");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1971(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/bool.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/bool.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/traced-app.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1981=function(M){return(_1972)(M);};

var _1980=function(M){if(--M.cbt<0){throw _1980;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);extNs.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);ns.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);extNs.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);}(M.modules["whalesong/lang/private/traced-app.rkt"],M.modules["whalesong/lang/private/traced-app.rkt"].getExports(),M.modules["whalesong/lang/private/traced-app.rkt"].getExternalExports(),M.modules["whalesong/lang/private/traced-app.rkt"].prefix));
return(M.p)(M);};

var _1978=function(M){if(--M.cbt<0){throw _1978;}
M.c.push(new RT.CallFrame(_1980,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(sym30156);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1974=function(M){if(--M.cbt<0){throw _1974;}
};

var _1979=function(M){if(--M.cbt<0){throw _1979;}
M.e.length-=(M.a-1);
return(_1980)(M);};

var _1977=function(M){if(--M.cbt<0){throw _1977;}
M.e.length-=(M.a-1);
return(_1978)(M);};

var _1975=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1976=function(M){M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("traced-app-key")||M.primitives["traced-app-key"],M.params.currentNamespace.get("traced-callee-key")||M.primitives["traced-callee-key"]]);M.e[M.e.length-1].names=["traced-app-key","traced-callee-key"];
M.modules["whalesong/lang/private/traced-app.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1978,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(sym30157);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1973=function(M){if(--M.cbt<0){throw _1973;}
M.e.length-=(M.a-1);
return(_1974)(M);};

var _1972=function(M){M.c.push(new RT.CallFrame(_1974,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/traced-app.rkt"]=function(){return new RT.ModuleRecord("traced-app",_1976);}
return(_1975)(M);};

_1978.mvr=_1977;
_1980.mvr=_1979;
_1974.mvr=_1973;
var sym30156=RT.makeSymbol("traced-callee-key");
var sym30157=RT.makeSymbol("traced-app-key");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1981(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/traced-app.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/traced-app.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/posn.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2002=function(M){return(_1983)(M);};

var _2001=function(M){if(--M.cbt<0){throw _2001;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);extNs.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);ns.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);extNs.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);ns.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);extNs.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);ns.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);extNs.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);ns.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);extNs.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);ns.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);extNs.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);ns.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);extNs.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);}(M.modules["whalesong/lang/posn.rkt"],M.modules["whalesong/lang/posn.rkt"].getExports(),M.modules["whalesong/lang/posn.rkt"].getExternalExports(),M.modules["whalesong/lang/posn.rkt"].prefix));
return(M.p)(M);};

var _1998=RT.si_context_expected(7);

var _1995=RT.si_context_expected(5);

var _1991=function(M){if(--M.cbt<0){throw _1991;}
M.c.push(new RT.CallFrame(_2001,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_1982,2,[M.e[M.e.length-1]],"make-posn");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1985=function(M){if(--M.cbt<0){throw _1985;}
};

var _2000=function(M){if(--M.cbt<0){throw _2000;}
M.e.length-=(M.a-1);
return(_2001)(M);};

var _1997=function(M){if(--M.cbt<0){throw _1997;}
if((M.a-7)===0){return(_1993)(M);}else{RT.si_context_expected(7)(M);
}};

var _1996=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym30194;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym30195;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym30194;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym30195;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1998,M.p));
return((M.p).label)(M);};

var _1994=function(M){if(--M.cbt<0){throw _1994;}
if((M.a-5)===0){return(_1996)(M);}else{RT.si_context_expected(5)(M);
}};

var _1990=function(M){if(--M.cbt<0){throw _1990;}
M.e.length-=(M.a-1);
return(_1991)(M);};

var _1988=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1989=function(M){M.modules["whalesong/lang/posn.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("struct:posn")||M.primitives["struct:posn"],M.params.currentNamespace.get("posn1.1")||M.primitives["posn1.1"],M.params.currentNamespace.get("posn?")||M.primitives["posn?"],M.params.currentNamespace.get("posn-x")||M.primitives["posn-x"],M.params.currentNamespace.get("posn-y")||M.primitives["posn-y"],M.params.currentNamespace.get("set-posn-x!")||M.primitives["set-posn-x!"],M.params.currentNamespace.get("set-posn-y!")||M.primitives["set-posn-y!"],M.params.currentNamespace.get("make-posn")||M.primitives["make-posn"]]);M.e[M.e.length-1].names=["struct:posn","posn1.1","posn?","posn-x","posn-y","set-posn-x!","set-posn-y!","make-posn"];
M.modules["whalesong/lang/posn.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1991,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym30196;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym30196;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1995,M.p));
return((M.p).label)(M);};

var _1984=function(M){if(--M.cbt<0){throw _1984;}
M.e.length-=(M.a-1);
return(_1985)(M);};

var _1982=function(M){if(--M.cbt<0){throw _1982;}

//"lambda body for #(struct:LamPositionalName make-posn whalesong/lang/posn.rkt 11 0 312 35)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][1];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1983=function(M){M.c.push(new RT.CallFrame(_1985,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/posn.rkt"]=function(){return new RT.ModuleRecord("posn",_1989);}
return(_1988)(M);};

var _1993=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_1995.mvr=_1994;
_1998.mvr=_1997;
_1991.mvr=_1990;
_2001.mvr=_2000;
_1985.mvr=_1984;
var sym30194=RT.makeSymbol("x");
var sym30196=RT.makeSymbol("posn");
var sym30195=RT.makeSymbol("y");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2002(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/posn.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/posn.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/shared.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2011=function(M){if(--M.cbt<0){throw _2011;}
M.e.length-=(M.a-1);
return(_2012)(M);};

var _2009=function(M){if(--M.cbt<0){throw _2009;}
M.e.length-=(M.a-1);
return(_2010)(M);};

var _2010=function(M){if(--M.cbt<0){throw _2010;}
M.e.push([M.params.currentNamespace.get("undefined")||M.primitives["undefined"],M.primitives["unique-undefined-value"]]);M.e[M.e.length-1].names=["undefined","unique-undefined-value"];
M.modules["whalesong/lang/private/shared.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2012,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=M.primitives["unique-undefined-value"];
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2008=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_2010)(M);}else{M.c.push(new RT.CallFrame(_2010,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _2006=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2007=function(M){M.modules["whalesong/lang/private/shared.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_2008)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2008);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2008)(M);}};

var _2004=function(M){if(--M.cbt<0){throw _2004;}
M.e.length-=(M.a-1);
return(_2005)(M);};

var _2003=function(M){M.c.push(new RT.CallFrame(_2005,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/shared.rkt"]=function(){return new RT.ModuleRecord("shared",_2007);}
return(_2006)(M);};

var _2013=function(M){return(_2003)(M);};

var _2012=function(M){if(--M.cbt<0){throw _2012;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/shared.rkt"],M.modules["whalesong/lang/private/shared.rkt"].getExports(),M.modules["whalesong/lang/private/shared.rkt"].getExternalExports(),M.modules["whalesong/lang/private/shared.rkt"].prefix));
return(M.p)(M);};

var _2005=function(M){if(--M.cbt<0){throw _2005;}
};

_2010.mvr=_2009;
_2012.mvr=_2011;
_2005.mvr=_2004;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2013(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/shared.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/shared.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/check-expect/check-expect.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2078=function(M){if(--M.cbt<0){throw _2078;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2073=function(M){if(--M.cbt<0){throw _2073;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2075)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=RT.checkedAdd1(M, M.e[M.e.length-7]);
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2078,M.p));
return((M.p).label)(M);}};

var _2070=function(M){if(--M.cbt<0){throw _2070;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2073,M.p));
return((M.p).label)(M);};

var _2068=function(M){if(--M.cbt<0){throw _2068;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
return(_2045)(M);};

var _2066=function(M){if(--M.cbt<0){throw _2066;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2068,M.p));
return((M.p).label)(M);};

var _2064=function(M){if(--M.cbt<0){throw _2064;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a failed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2066,M.p));
return((M.p).label)(M);};

var _2062=function(M){if(--M.cbt<0){throw _2062;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2064,M.p));
return((M.p).label)(M);};

var _2060=function(M){if(--M.cbt<0){throw _2060;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a passed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2062,M.p));
return((M.p).label)(M);};

var _2058=function(M){if(--M.cbt<0){throw _2058;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2060,M.p));
return((M.p).label)(M);};

var _2056=function(M){if(--M.cbt<0){throw _2056;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
return(_2050)(M);};

var _2049=function(M){if(--M.cbt<0){throw _2049;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===1);
if(M.v===false){return(_2051)(M);}else{M.e[M.e.length-2]="The test passed!";
return(_2050)(M);}};

var _2047=function(M){if(--M.cbt<0){throw _2047;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2044)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2049,M.p));
return((M.p).label)(M);}};

var _2043=function(M){if(--M.cbt<0){throw _2043;}
if(M.v===false){return(_2040)(M);}else{M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2047,M.p));
return((M.p).label)(M);}};

var _2033=function(M){if(--M.cbt<0){throw _2033;}
M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2028=function(M){if(--M.cbt<0){throw _2028;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2030)(M);}else{M.v=true;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2025=function(M){if(--M.cbt<0){throw _2025;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2028,M.p));
return((M.p).label)(M);};

var _2119=function(M){if(--M.cbt<0){throw _2119;}
if((M.a-4)===0){return(_2115)(M);}else{RT.si_context_expected(4)(M);
}};

var _2118=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym30452;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2120,M.p));
return((M.p).label)(M);};

var _2116=function(M){if(--M.cbt<0){throw _2116;}
if((M.a-5)===0){return(_2118)(M);}else{RT.si_context_expected(5)(M);
}};

var _2112=function(M){if(--M.cbt<0){throw _2112;}
M.e.length-=(M.a-1);
return(_2113)(M);};

var _2110=function(M){if(--M.cbt<0){throw _2110;}
M.e.length-=(M.a-1);
return(_2111)(M);};

var _2108=function(M){if(--M.cbt<0){throw _2108;}
M.e.length-=(M.a-1);
return(_2109)(M);};

var _2106=function(M){if(--M.cbt<0){throw _2106;}
M.e.length-=(M.a-1);
return(_2107)(M);};

var _2104=function(M){if(--M.cbt<0){throw _2104;}
M.e.length-=(M.a-1);
return(_2105)(M);};

var _2102=function(M){if(--M.cbt<0){throw _2102;}
M.e.length-=(M.a-1);
return(_2103)(M);};

var _2100=function(M){if(--M.cbt<0){throw _2100;}
M.e.length-=(M.a-1);
return(_2101)(M);};

var _2098=function(M){if(--M.cbt<0){throw _2098;}
M.e.length-=(M.a-1);
return(_2099)(M);};

var _2096=function(M){if(--M.cbt<0){throw _2096;}
M.e.length-=(M.a-1);
return(_2097)(M);};

var _2094=function(M){if(--M.cbt<0){throw _2094;}
M.e.length-=(M.a-1);
return(_2095)(M);};

var _2095=function(M){if(--M.cbt<0){throw _2095;}
M.e.push([M.params.currentNamespace.get("*tests*")||M.primitives["*tests*"],M.params.currentNamespace.get("check-expect*")||M.primitives["check-expect*"],M.primitives["equal?"],M.primitives["printf"],M.params.currentNamespace.get("display-location")||M.primitives["display-location"],M.params.currentNamespace.get("accumulate-test!")||M.primitives["accumulate-test!"],M.params.currentNamespace.get("test-suffixed")||M.primitives["test-suffixed"],M.primitives["format"],M.params.currentNamespace.get("capitalize")||M.primitives["capitalize"],M.primitives["string-length"],M.primitives["string-append"],M.primitives["string"],M.primitives["char-upcase"],M.primitives["string-ref"],M.primitives["substring"],M.params.currentNamespace.get("run-tests")||M.primitives["run-tests"],M.primitives["length"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("empty?"),{moduleName:"whalesong/lang/list.rkt",name:"empty?"}],M.primitives["display"],M.primitives["newline"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("first"),{moduleName:"whalesong/lang/list.rkt",name:"first"}],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("rest"),{moduleName:"whalesong/lang/list.rkt",name:"rest"}],M.primitives["reverse"],M.params.currentNamespace.get("struct:unexpected-no-error")||M.primitives["struct:unexpected-no-error"],M.params.currentNamespace.get("make-unexpected-no-error")||M.primitives["make-unexpected-no-error"],M.params.currentNamespace.get("unexpected-no-error?")||M.primitives["unexpected-no-error?"],M.params.currentNamespace.get("unexpected-no-error-result")||M.primitives["unexpected-no-error-result"],false]);M.e[M.e.length-1].names=["*tests*","check-expect*","equal?","printf","display-location","accumulate-test!","test-suffixed","format","capitalize","string-length","string-append","string","char-upcase","string-ref","substring","run-tests","length","empty?","display","newline","first","rest","reverse","struct:unexpected-no-error","make-unexpected-no-error","unexpected-no-error?","unexpected-no-error-result",false];
M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2097,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.NULL;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2093=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2095)(M);}else{M.c.push(new RT.CallFrame(_2095,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2091=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2092=function(M){M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2093)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2093);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2093)(M);}};

var _2022=function(M){if(--M.cbt<0){throw _2022;}
M.e.length-=(M.a-1);
return(_2023)(M);};

var _2085=function(M){M.v=RT.VOID;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2020=function(M){if(--M.cbt<0){throw _2020;}

//"lambda body for #(struct:LamPositionalName run-tests whalesong/lang/check-expect/check-expect.rkt 193 0 6362 1414)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2088,M.p));
return((M.p).label)(M);};



var _2075=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2082,M.p));
return((M.p).label)(M);};









var _2045=function(M){M.e[M.e.length-1][0]=RT.NULL;
M.v=RT.VOID;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2053=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="All ~a tests passed!";
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-6][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-6][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2056,M.p));
return((M.p).label)(M);};

var _2051=function(M){M.v=(M.e[M.e.length-1]===2);
if(M.v===false){return(_2053)(M);}else{M.e[M.e.length-2]="Both tests passed!";
return(_2050)(M);}};


var _2044=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="Ran ~a.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][6];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2058,M.p));
return((M.p).label)(M);};


var _2040=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][20][0][M.e[M.e.length-3][20][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2070,M.p));
return((M.p).label)(M);};


var _2019=function(M){if(--M.cbt<0){throw _2019;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/check-expect/check-expect.rkt 197 4 6480 1294)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.p=M.e[M.e.length-2][17][0][M.e[M.e.length-2][17][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2043,M.p));
return((M.p).label)(M);};

var _2038=function(M){M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2018=function(M){if(--M.cbt<0){throw _2018;}

//"lambda body for #(struct:LamPositionalName capitalize whalesong/lang/check-expect/check-expect.rkt 184 0 6148 189)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["string-length"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2038)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=0;
M.v=M.primitives["string-ref"]._i(M);
M.e.length-=2;
M.e[M.e.length-1]=M.v;
M.v=M.primitives["char-upcase"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.a=1;
M.v=M.primitives["string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.a=2;
M.v=M.primitives["substring"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["string-append"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2036=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a tests";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2034=function(M){M.v=(M.e[M.e.length-2]===1);
if(M.v===false){return(_2036)(M);}else{M.v="one test";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2017=function(M){if(--M.cbt<0){throw _2017;}

//"lambda body for #(struct:LamPositionalName test-suffixed whalesong/lang/check-expect/check-expect.rkt 176 0 5996 115)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-2]===0);
if(M.v===false){return(_2034)(M);}else{M.v="zero tests";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2016=function(M){if(--M.cbt<0){throw _2016;}

//"lambda body for #(struct:LamPositionalName accumulate-test! whalesong/lang/check-expect/check-expect.rkt 171 0 5881 73)"

M.e.push(M.p.closedVals[0]);
M.e[M.e.length-1][0]=RT.makePair(M.e[M.e.length-2],M.e[M.e.length-1][0]);
M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2015=function(M){if(--M.cbt<0){throw _2015;}

//"lambda body for #(struct:LamPositionalName display-location whalesong/lang/check-expect/check-expect.rkt 98 0 3161 171)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]="  at: ~s, line ~s, column ~s\n";
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-source"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-line"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-column"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.a=4;
M.v=M.primitives["printf"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2032=function(M){if(--M.cbt<0){throw _2032;}
M.e.length-=(M.a-1);
return(_2033)(M);};

var _2030=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="check-expect: actual value ~s differs from ~s, the expected value\n";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["printf"]._i(M);
M.e.length-=3;
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][4];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2033,M.p));
return((M.p).label)(M);};



var _2014=function(M){if(--M.cbt<0){throw _2014;}

//"lambda body for #(struct:LamPositionalName check-expect* whalesong/lang/check-expect/check-expect.rkt 79 0 2489 669)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2025,M.p));
return((M.p).label)(M);};

var _2021=function(M){M.c.push(new RT.CallFrame(_2023,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]=function(){return new RT.ModuleRecord("check-expect",_2092);}
return(_2091)(M);};

var _2115=function(M){M.e.splice(M.e.length-8,5);
M.e[M.e.length-4][23]=M.v;
M.e[M.e.length-4][24]=M.e[M.e.length-1];
M.e[M.e.length-4][25]=M.e[M.e.length-2];
M.e[M.e.length-4][26]=M.e[M.e.length-3];
M.e.length-=3;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2050=function(M){M.e.pop();
M.a=1;
M.v=M.primitives["display"]._i(M);
M.e.pop();
M.a=0;
M.v=M.primitives["newline"]._i(M);
return(_2045)(M);};

var _2122=function(M){return(_2021)(M);};

var _2120=RT.si_context_expected(4);

var _2117=RT.si_context_expected(5);

var _2113=function(M){if(--M.cbt<0){throw _2113;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);extNs.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);}(M.modules["whalesong/lang/check-expect/check-expect.rkt"],M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExternalExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix));
return(M.p)(M);};

var _2111=function(M){if(--M.cbt<0){throw _2111;}
M.c.push(new RT.CallFrame(_2113,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym30453;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.NULL);
M.e[M.e.length-10]=false;
M.v=sym30453;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2117,M.p));
return((M.p).label)(M);};

var _2109=function(M){if(--M.cbt<0){throw _2109;}
M.c.push(new RT.CallFrame(_2111,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2020,0,[M.e[M.e.length-1]],"run-tests");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2107=function(M){if(--M.cbt<0){throw _2107;}
M.c.push(new RT.CallFrame(_2109,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2019,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2105=function(M){if(--M.cbt<0){throw _2105;}
M.c.push(new RT.CallFrame(_2107,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2018,1,[M.e[M.e.length-1]],"capitalize");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2103=function(M){if(--M.cbt<0){throw _2103;}
M.c.push(new RT.CallFrame(_2105,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2017,1,[M.e[M.e.length-1]],"test-suffixed");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2101=function(M){if(--M.cbt<0){throw _2101;}
M.c.push(new RT.CallFrame(_2103,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2016,1,[M.e[M.e.length-1]],"accumulate-test!");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2099=function(M){if(--M.cbt<0){throw _2099;}
M.c.push(new RT.CallFrame(_2101,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2015,1,[M.e[M.e.length-1]],"display-location");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2097=function(M){if(--M.cbt<0){throw _2097;}
M.c.push(new RT.CallFrame(_2099,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2014,4,[M.e[M.e.length-1]],"check-expect*");
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2023=function(M){if(--M.cbt<0){throw _2023;}
};

var _2088=function(M){if(--M.cbt<0){throw _2088;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2085)(M);}else{M.e.push("Running tests...\n");
M.a=1;
M.v=M.primitives["printf"]._i(M);
M.e.pop();
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][27];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=0;
M.e.push(void(0));
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2082=function(M){if(--M.cbt<0){throw _2082;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

_2033.mvr=_2032;
_2095.mvr=_2094;
_2097.mvr=_2096;
_2099.mvr=_2098;
_2101.mvr=_2100;
_2103.mvr=_2102;
_2105.mvr=_2104;
_2107.mvr=_2106;
_2109.mvr=_2108;
_2111.mvr=_2110;
_2117.mvr=_2116;
_2120.mvr=_2119;
_2113.mvr=_2112;
_2023.mvr=_2022;
var sym30453=RT.makeSymbol("unexpected-no-error");
var sym30452=RT.makeSymbol("result");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2122(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/base.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2152=function(M){return(_2123)(M);};

var _2125=function(M){if(--M.cbt<0){throw _2125;}
};

var _2150=function(M){if(--M.cbt<0){throw _2150;}
M.e.length-=(M.a-1);
return(_2151)(M);};

var _2151=function(M){if(--M.cbt<0){throw _2151;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/base.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exn:fail:contract:arity?", M.primitives["exn:fail:contract:arity?"]);ns.set("exn:fail:contract?", M.primitives["exn:fail:contract?"]);ns.set("exn:fail?", M.primitives["exn:fail?"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/base.rkt"],M.modules["whalesong/lang/base.rkt"].getExports(),M.modules["whalesong/lang/base.rkt"].getExternalExports(),M.modules["whalesong/lang/base.rkt"].prefix));
return(M.p)(M);};

var _2149=function(M){if(M.modules["collects/racket/private/modbeg.rkt"].isInvoked!==false){return(_2151)(M);}else{M.c.push(new RT.CallFrame(_2151,M.p));
return(M.modules["collects/racket/private/modbeg.rkt"].label)(M);}};

var _2147=function(M){if(--M.cbt<0){throw _2147;}
M.e.length-=(M.a-1);
return(_2148)(M);};

var _2148=function(M){if(--M.cbt<0){throw _2148;}
if((M.installedModules["collects/racket/private/modbeg.rkt"]!==void(0)&&M.modules["collects/racket/private/modbeg.rkt"]!==undefined)!==false){return(_2149)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/racket/private/modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2149);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2149)(M);}};

var _2146=function(M){if(M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked!==false){return(_2148)(M);}else{M.c.push(new RT.CallFrame(_2148,M.p));
return(M.modules["whalesong/lang/private/qq-and-or.rkt"].label)(M);}};

var _2144=function(M){if(--M.cbt<0){throw _2144;}
M.e.length-=(M.a-1);
return(_2145)(M);};

var _2145=function(M){if(--M.cbt<0){throw _2145;}
if((M.installedModules["whalesong/lang/private/qq-and-or.rkt"]!==void(0)&&M.modules["whalesong/lang/private/qq-and-or.rkt"]!==undefined)!==false){return(_2146)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/qq-and-or.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2146);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2146)(M);}};

var _2143=function(M){if(M.modules["whalesong/lang/list.rkt"].isInvoked!==false){return(_2145)(M);}else{M.c.push(new RT.CallFrame(_2145,M.p));
return(M.modules["whalesong/lang/list.rkt"].label)(M);}};

var _2141=function(M){if(--M.cbt<0){throw _2141;}
M.e.length-=(M.a-1);
return(_2142)(M);};

var _2142=function(M){if(--M.cbt<0){throw _2142;}
if((M.installedModules["whalesong/lang/list.rkt"]!==void(0)&&M.modules["whalesong/lang/list.rkt"]!==undefined)!==false){return(_2143)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2143);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2143)(M);}};

var _2140=function(M){if(M.modules["whalesong/lang/private/with-handlers.rkt"].isInvoked!==false){return(_2142)(M);}else{M.c.push(new RT.CallFrame(_2142,M.p));
return(M.modules["whalesong/lang/private/with-handlers.rkt"].label)(M);}};

var _2138=function(M){if(--M.cbt<0){throw _2138;}
M.e.length-=(M.a-1);
return(_2139)(M);};

var _2139=function(M){if(--M.cbt<0){throw _2139;}
if((M.installedModules["whalesong/lang/private/with-handlers.rkt"]!==void(0)&&M.modules["whalesong/lang/private/with-handlers.rkt"]!==undefined)!==false){return(_2140)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/with-handlers.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2140);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2140)(M);}};

var _2137=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_2139)(M);}else{M.c.push(new RT.CallFrame(_2139,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _2135=function(M){if(--M.cbt<0){throw _2135;}
M.e.length-=(M.a-1);
return(_2136)(M);};

var _2136=function(M){if(--M.cbt<0){throw _2136;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_2137)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2137);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2137)(M);}};

var _2134=function(M){if(M.modules["whalesong/lang/private/hash.rkt"].isInvoked!==false){return(_2136)(M);}else{M.c.push(new RT.CallFrame(_2136,M.p));
return(M.modules["whalesong/lang/private/hash.rkt"].label)(M);}};

var _2132=function(M){if(--M.cbt<0){throw _2132;}
M.e.length-=(M.a-1);
return(_2133)(M);};

var _2133=function(M){if(--M.cbt<0){throw _2133;}
if((M.installedModules["whalesong/lang/private/hash.rkt"]!==void(0)&&M.modules["whalesong/lang/private/hash.rkt"]!==undefined)!==false){return(_2134)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/hash.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2134);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2134)(M);}};

var _2131=function(M){if(M.modules["whalesong/lang/private/map.rkt"].isInvoked!==false){return(_2133)(M);}else{M.c.push(new RT.CallFrame(_2133,M.p));
return(M.modules["whalesong/lang/private/map.rkt"].label)(M);}};

var _2129=function(M){if(--M.cbt<0){throw _2129;}
M.e.length-=(M.a-1);
return(_2130)(M);};

var _2130=function(M){if(--M.cbt<0){throw _2130;}
if((M.installedModules["whalesong/lang/private/map.rkt"]!==void(0)&&M.modules["whalesong/lang/private/map.rkt"]!==undefined)!==false){return(_2131)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/map.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2131);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2131)(M);}};

var _2128=function(M){if(M.modules["whalesong/lang/private/list.rkt"].isInvoked!==false){return(_2130)(M);}else{M.c.push(new RT.CallFrame(_2130,M.p));
return(M.modules["whalesong/lang/private/list.rkt"].label)(M);}};

var _2126=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2127=function(M){M.modules["whalesong/lang/base.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/list.rkt"]!==void(0)&&M.modules["whalesong/lang/private/list.rkt"]!==undefined)!==false){return(_2128)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2128);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2128)(M);}};

var _2124=function(M){if(--M.cbt<0){throw _2124;}
M.e.length-=(M.a-1);
return(_2125)(M);};

var _2123=function(M){M.c.push(new RT.CallFrame(_2125,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/base.rkt"]=function(){return new RT.ModuleRecord("base",_2127);}
return(_2126)(M);};

_2130.mvr=_2129;
_2133.mvr=_2132;
_2136.mvr=_2135;
_2139.mvr=_2138;
_2142.mvr=_2141;
_2145.mvr=_2144;
_2148.mvr=_2147;
_2151.mvr=_2150;
_2125.mvr=_2124;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2152(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/base.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/base.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/map.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2376=function(M){if(--M.cbt<0){throw _2376;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2366)(M);};

var _2374=function(M){if(--M.cbt<0){throw _2374;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2376,M.p));
return((M.p).label)(M);};

var _2356=function(M){if(--M.cbt<0){throw _2356;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2358)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2329=function(M){if(--M.cbt<0){throw _2329;}
if(M.v===false){return(_2326)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2169_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2169)(M);}};

var _2314=function(M){if(--M.cbt<0){throw _2314;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2304)(M);};

var _2312=function(M){if(--M.cbt<0){throw _2312;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2314,M.p));
return((M.p).label)(M);};

var _2297=function(M){if(--M.cbt<0){throw _2297;}
if(M.v===false){return(_2294)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2167_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2167)(M);}};

var _2267=function(M){if(--M.cbt<0){throw _2267;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2257)(M);};

var _2265=function(M){if(--M.cbt<0){throw _2265;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2267,M.p));
return((M.p).label)(M);};

var _2238=function(M){if(--M.cbt<0){throw _2238;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2232=function(M){if(--M.cbt<0){throw _2232;}
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2226=function(M){if(--M.cbt<0){throw _2226;}
M.e[M.e.length-2]=M.v;
return(_2224)(M);};

var _2223=function(M){if(--M.cbt<0){throw _2223;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2157_c;
M.a=3;
M.c.push(new RT.CallFrame(_2226,M.p));
return(_2157)(M);};

var _2214=function(M){if(--M.cbt<0){throw _2214;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2204)(M);};

var _2212=function(M){if(--M.cbt<0){throw _2212;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2214,M.p));
return((M.p).label)(M);};

var _2200=function(M){if(--M.cbt<0){throw _2200;}
M.e[M.e.length-2]=M.v;
return(_2198)(M);};

var _2197=function(M){if(--M.cbt<0){throw _2197;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2155_c;
M.a=2;
M.c.push(new RT.CallFrame(_2200,M.p));
return(_2155)(M);};

var _2410=function(M){if(--M.cbt<0){throw _2410;}
M.e.length-=(M.a-1);
return(_2411)(M);};

var _2408=function(M){if(--M.cbt<0){throw _2408;}
M.e.length-=(M.a-1);
return(_2409)(M);};

var _2406=function(M){if(--M.cbt<0){throw _2406;}
M.e.length-=(M.a-1);
return(_2407)(M);};

var _2404=function(M){if(--M.cbt<0){throw _2404;}
M.e.length-=(M.a-1);
return(_2405)(M);};

var _2402=function(M){if(--M.cbt<0){throw _2402;}
M.e.length-=(M.a-1);
return(_2403)(M);};

var _2400=function(M){if(--M.cbt<0){throw _2400;}
M.e.length-=(M.a-1);
return(_2401)(M);};

var _2398=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2399=function(M){M.modules["whalesong/lang/private/map.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("map2")||M.primitives["map2"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["map"],M.primitives["length"],M.params.currentNamespace.get("for-each2")||M.primitives["for-each2"],M.primitives["void"],M.primitives["for-each"],M.params.currentNamespace.get("andmap2")||M.primitives["andmap2"],M.primitives["andmap"],M.params.currentNamespace.get("ormap2")||M.primitives["ormap2"],M.primitives["ormap"],false,false]);M.e[M.e.length-1].names=["map2","procedure?","procedure-arity-includes?","map","length","for-each2","void","for-each","andmap2","andmap","ormap2","ormap",false,false];
M.modules["whalesong/lang/private/map.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2401,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2154,2,[M.e[M.e.length-4]],".../private/map.rkt:12:11");
M.e[M.e.length-2]=new RT.Closure(_2156,3,[M.e[M.e.length-4]],".../private/map.rkt:21:11");
M.e[M.e.length-3]=new RT.Closure(_2158,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:33:11");
M.v=new RT.Closure(_2153,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"map");
M.e.length-=3;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2178=function(M){if(--M.cbt<0){throw _2178;}
M.e.length-=(M.a-1);
return(_2179)(M);};

var _2391=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_2175_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2175)(M);};


var _2384=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2389,M.p));
return((M.p).label)(M);};

var _2175=function(M){if(--M.cbt<0){throw _2175;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 116 20 3959 236)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2384)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2377=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2175_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2175)(M);};

var _2363=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2366=function(M){if(M.v===false){return(_2363)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2377)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};



var _2371=function(M){M.v=false;
return(_2366)(M);};

var _2369=function(M){M.v=false;
return(_2366)(M);};

var _2367=function(M){M.v=false;
return(_2366)(M);};

var _2365=function(M){M.v=false;
return(_2366)(M);};

var _2358=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2173_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2173)(M);};


var _2351=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2356,M.p));
return((M.p).label)(M);};

var _2173=function(M){if(--M.cbt<0){throw _2173;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 103 20 3466 162)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2351)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2344=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_2173_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2173)(M);};

var _2338=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2341=function(M){if(M.v===false){return(_2338)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2344)(M);}else{M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2342=function(M){M.v=false;
return(_2341)(M);};

var _2340=function(M){M.v=false;
return(_2341)(M);};

var _2176=function(M){if(--M.cbt<0){throw _2176;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:122:11 whalesong/lang/private/map.rkt 122 11 4242 33)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["ormap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2174=function(M){if(--M.cbt<0){throw _2174;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:108:11 whalesong/lang/private/map.rkt 108 11 3671 559)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2365)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2367)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2369)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2371)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2374,M.p));
return((M.p).label)(M);}}}}};

var _2336=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2172)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2176)(M);}};

var _2335=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2336)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2174)(M);}};

var _2171=function(M){if(--M.cbt<0){throw _2171;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2335)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2172)(M);}};

var _2326=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2322=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2329,M.p));
return((M.p).label)(M);};

var _2169=function(M){if(--M.cbt<0){throw _2169;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 85 20 2864 238)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2322)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2315=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2169_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2169)(M);};

var _2301=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2304=function(M){if(M.v===false){return(_2301)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2315)(M);}else{M.v=true;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};



var _2309=function(M){M.v=false;
return(_2304)(M);};

var _2307=function(M){M.v=false;
return(_2304)(M);};

var _2305=function(M){M.v=false;
return(_2304)(M);};

var _2303=function(M){M.v=false;
return(_2304)(M);};

var _2294=function(M){M.v=false;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2290=function(M){M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2297,M.p));
return((M.p).label)(M);};

var _2167=function(M){if(--M.cbt<0){throw _2167;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 72 20 2369 163)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2290)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2283=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_2167_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2167)(M);};

var _2277=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2280=function(M){if(M.v===false){return(_2277)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2283)(M);}else{M.v=true;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2281=function(M){M.v=false;
return(_2280)(M);};

var _2279=function(M){M.v=false;
return(_2280)(M);};

var _2170=function(M){if(--M.cbt<0){throw _2170;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:91:11 whalesong/lang/private/map.rkt 91 11 3150 34)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["andmap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2168=function(M){if(--M.cbt<0){throw _2168;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:77:11 whalesong/lang/private/map.rkt 77 11 2576 562)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2303)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2305)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2307)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2309)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2312,M.p));
return((M.p).label)(M);}}}}};

var _2275=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2166)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2170)(M);}};

var _2274=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2275)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2168)(M);}};

var _2165=function(M){if(--M.cbt<0){throw _2165;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2274)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2166)(M);}};

var _2254=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2257=function(M){if(M.v===false){return(_2254)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};



var _2262=function(M){M.v=false;
return(_2257)(M);};

var _2260=function(M){M.v=false;
return(_2257)(M);};

var _2258=function(M){M.v=false;
return(_2257)(M);};

var _2256=function(M){M.v=false;
return(_2257)(M);};

var _2244=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2247=function(M){if(M.v===false){return(_2244)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2248=function(M){M.v=false;
return(_2247)(M);};

var _2246=function(M){M.v=false;
return(_2247)(M);};

var _2164=function(M){if(--M.cbt<0){throw _2164;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:60:11 whalesong/lang/private/map.rkt 60 11 2047 36)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["for-each"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2163=function(M){if(--M.cbt<0){throw _2163;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:48:11 whalesong/lang/private/map.rkt 48 11 1563 472)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2256)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2258)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2260)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2262)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2265,M.p));
return((M.p).label)(M);}}}}};

var _2242=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2162)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2164)(M);}};

var _2241=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2242)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2163)(M);}};

var _2161=function(M){if(--M.cbt<0){throw _2161;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2241)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2162)(M);}};

var _2237=function(M){if(--M.cbt<0){throw _2237;}
M.e.length-=(M.a-1);
return(_2238)(M);};

var _2235=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2238,M.p));
return((M.p).label)(M);};

var _2160=function(M){if(--M.cbt<0){throw _2160;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 54 16 1793 205)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2235)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2231=function(M){if(--M.cbt<0){throw _2231;}
M.e.length-=(M.a-1);
return(_2232)(M);};

var _2229=function(M){M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2232,M.p));
return((M.p).label)(M);};

var _2159=function(M){if(--M.cbt<0){throw _2159;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 43 16 1376 142)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2229)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2224=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _2220=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2223,M.p));
return((M.p).label)(M);};

var _2157=function(M){if(--M.cbt<0){throw _2157;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 27 16 872 201)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2220)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2201=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2204=function(M){if(M.v===false){return(_2201)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2157_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2157)(M);}};



var _2209=function(M){M.v=false;
return(_2204)(M);};

var _2207=function(M){M.v=false;
return(_2204)(M);};

var _2205=function(M){M.v=false;
return(_2204)(M);};

var _2203=function(M){M.v=false;
return(_2204)(M);};

var _2198=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _2194=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2197,M.p));
return((M.p).label)(M);};

var _2155=function(M){if(--M.cbt<0){throw _2155;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 16 16 463 139)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2194)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2183=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2186=function(M){if(M.v===false){return(_2183)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_2155_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2155)(M);}};

var _2187=function(M){M.v=false;
return(_2186)(M);};

var _2185=function(M){M.v=false;
return(_2186)(M);};

var _2158=function(M){if(--M.cbt<0){throw _2158;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:33:11 whalesong/lang/private/map.rkt 33 11 1117 31)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2156=function(M){if(--M.cbt<0){throw _2156;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:21:11 whalesong/lang/private/map.rkt 21 11 642 463)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2203)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2205)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2207)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2209)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2212,M.p));
return((M.p).label)(M);}}}}};

var _2181=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2154)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2158)(M);}};

var _2180=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2181)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2156)(M);}};

var _2153=function(M){if(--M.cbt<0){throw _2153;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2180)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2154)(M);}};

var _2177=function(M){M.c.push(new RT.CallFrame(_2179,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/map.rkt"]=function(){return new RT.ModuleRecord("map",_2399);}
return(_2398)(M);};

var _2172=function(M){if(--M.cbt<0){throw _2172;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:97:11 whalesong/lang/private/map.rkt 97 11 3265 394)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2340)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2342)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_2341)(M);}}};

var _2166=function(M){if(--M.cbt<0){throw _2166;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:66:11 whalesong/lang/private/map.rkt 66 11 2168 396)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2279)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2281)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_2280)(M);}}};

var _2162=function(M){if(--M.cbt<0){throw _2162;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:39:11 whalesong/lang/private/map.rkt 39 11 1232 319)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2246)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2248)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_2247)(M);}}};

var _2154=function(M){if(--M.cbt<0){throw _2154;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:12:11 whalesong/lang/private/map.rkt 12 11 319 311)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2185)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2187)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_2186)(M);}}};

var _2412=function(M){return(_2177)(M);};

var _2411=function(M){if(--M.cbt<0){throw _2411;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("andmap2", prefix[selfMod.getPrefixOffset("andmap2")]);extNs.set("andmap", prefix[selfMod.getPrefixOffset("andmap2")]);ns.set("for-each2", prefix[selfMod.getPrefixOffset("for-each2")]);extNs.set("for-each", prefix[selfMod.getPrefixOffset("for-each2")]);ns.set("map2", prefix[selfMod.getPrefixOffset("map2")]);extNs.set("map", prefix[selfMod.getPrefixOffset("map2")]);ns.set("ormap2", prefix[selfMod.getPrefixOffset("ormap2")]);extNs.set("ormap", prefix[selfMod.getPrefixOffset("ormap2")]);}(M.modules["whalesong/lang/private/map.rkt"],M.modules["whalesong/lang/private/map.rkt"].getExports(),M.modules["whalesong/lang/private/map.rkt"].getExternalExports(),M.modules["whalesong/lang/private/map.rkt"].prefix));
return(M.p)(M);};

var _2409=function(M){if(--M.cbt<0){throw _2409;}
M.c.push(new RT.CallFrame(_2411,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2172,2,[M.e[M.e.length-4]],".../private/map.rkt:97:11");
M.e[M.e.length-2]=new RT.Closure(_2174,3,[M.e[M.e.length-4]],".../private/map.rkt:108:11");
M.e[M.e.length-3]=new RT.Closure(_2176,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:122:11");
M.v=new RT.Closure(_2171,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"ormap");
M.e.length-=3;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2407=function(M){if(--M.cbt<0){throw _2407;}
M.c.push(new RT.CallFrame(_2409,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2166,2,[M.e[M.e.length-4]],".../private/map.rkt:66:11");
M.e[M.e.length-2]=new RT.Closure(_2168,3,[M.e[M.e.length-4]],".../private/map.rkt:77:11");
M.e[M.e.length-3]=new RT.Closure(_2170,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:91:11");
M.v=new RT.Closure(_2165,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"andmap");
M.e.length-=3;
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2405=function(M){if(--M.cbt<0){throw _2405;}
M.c.push(new RT.CallFrame(_2407,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2162,2,[M.e[M.e.length-4]],".../private/map.rkt:39:11");
M.e[M.e.length-2]=new RT.Closure(_2163,3,[M.e[M.e.length-4]],".../private/map.rkt:48:11");
M.e[M.e.length-3]=new RT.Closure(_2164,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:60:11");
M.v=new RT.Closure(_2161,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"for-each");
M.e.length-=3;
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2403=function(M){if(--M.cbt<0){throw _2403;}
M.c.push(new RT.CallFrame(_2405,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2160,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2401=function(M){if(--M.cbt<0){throw _2401;}
M.c.push(new RT.CallFrame(_2403,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2159,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2179=function(M){if(--M.cbt<0){throw _2179;}
};

var _2389=function(M){if(--M.cbt<0){throw _2389;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2391)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

_2232.mvr=_2231;
_2238.mvr=_2237;
_2401.mvr=_2400;
_2403.mvr=_2402;
_2405.mvr=_2404;
_2407.mvr=_2406;
_2409.mvr=_2408;
_2411.mvr=_2410;
_2179.mvr=_2178;
var _2169_c=new RT.Closure(_2169,3,void(0),"loop");
var _2173_c=new RT.Closure(_2173,2,void(0),"loop");
var _2175_c=new RT.Closure(_2175,3,void(0),"loop");
var _2155_c=new RT.Closure(_2155,2,void(0),"loop");
var _2157_c=new RT.Closure(_2157,3,void(0),"loop");
var _2167_c=new RT.Closure(_2167,2,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2412(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/map.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/map.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/hash.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2414=function(M){if(--M.cbt<0){throw _2414;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 10 2 288 163)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2429)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2423=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2414_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2414)(M);};

var _2422=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30717;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2423)(M);};

var _2425=function(M){if(M.v===false){return(_2422)(M);}else{M.v=RT.VOID;
return(_2423)(M);}};

var _2424=function(M){M.v=false;
return(_2425)(M);};

var _2421=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2424)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2425)(M);}};

var _2420=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30717;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2421)(M);};

var _2413=function(M){if(--M.cbt<0){throw _2413;}

//"lambda body for #(struct:LamPositionalName hash-map whalesong/lang/private/hash.rkt 5 0 64 388)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_2420)(M);}else{M.v=RT.VOID;
return(_2421)(M);}};

var _2417=function(M){M.c.push(new RT.CallFrame(_2419,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/hash.rkt"]=function(){return new RT.ModuleRecord("hash",_2455);}
return(_2454)(M);};

var _2462=function(M){return(_2417)(M);};

var _2461=function(M){if(--M.cbt<0){throw _2461;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);extNs.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);ns.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);extNs.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);}(M.modules["whalesong/lang/private/hash.rkt"],M.modules["whalesong/lang/private/hash.rkt"].getExports(),M.modules["whalesong/lang/private/hash.rkt"].getExternalExports(),M.modules["whalesong/lang/private/hash.rkt"].prefix));
return(M.p)(M);};

var _2459=function(M){if(--M.cbt<0){throw _2459;}
M.c.push(new RT.CallFrame(_2461,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2416,2,[M.e[M.e.length-1]],"hash-for-each");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2457=function(M){if(--M.cbt<0){throw _2457;}
M.c.push(new RT.CallFrame(_2459,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2415,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2419=function(M){if(--M.cbt<0){throw _2419;}
};

var _2443=function(M){if(--M.cbt<0){throw _2443;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2441=function(M){if(--M.cbt<0){throw _2441;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2443,M.p));
return((M.p).label)(M);};

var _2437=function(M){if(--M.cbt<0){throw _2437;}
M.e[M.e.length-2]=M.v;
return(_2435)(M);};

var _2434=function(M){if(--M.cbt<0){throw _2434;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2414_c;
M.a=3;
M.c.push(new RT.CallFrame(_2437,M.p));
return(_2414)(M);};

var _2432=function(M){if(--M.cbt<0){throw _2432;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2434,M.p));
return((M.p).label)(M);};

var _2460=function(M){if(--M.cbt<0){throw _2460;}
M.e.length-=(M.a-1);
return(_2461)(M);};

var _2458=function(M){if(--M.cbt<0){throw _2458;}
M.e.length-=(M.a-1);
return(_2459)(M);};

var _2456=function(M){if(--M.cbt<0){throw _2456;}
M.e.length-=(M.a-1);
return(_2457)(M);};

var _2454=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2455=function(M){M.modules["whalesong/lang/private/hash.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("hash-map")||M.primitives["hash-map"],M.primitives["raise-type-error"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["hash-keys"],M.params.currentNamespace.get("hash-for-each")||M.primitives["hash-for-each"],M.primitives["void"],false]);M.e[M.e.length-1].names=["hash-map","raise-type-error","procedure?","procedure-arity-includes?","hash-keys","hash-for-each","void",false];
M.modules["whalesong/lang/private/hash.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2457,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2413,2,[M.e[M.e.length-1]],"hash-map");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2418=function(M){if(--M.cbt<0){throw _2418;}
M.e.length-=(M.a-1);
return(_2419)(M);};

var _2449=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2448=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30718;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2449)(M);};

var _2451=function(M){if(M.v===false){return(_2448)(M);}else{M.v=RT.VOID;
return(_2449)(M);}};

var _2450=function(M){M.v=false;
return(_2451)(M);};

var _2447=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2450)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2451)(M);}};

var _2446=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30718;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2447)(M);};

var _2416=function(M){if(--M.cbt<0){throw _2416;}

//"lambda body for #(struct:LamPositionalName hash-for-each whalesong/lang/private/hash.rkt 17 0 455 413)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_2446)(M);}else{M.v=RT.VOID;
return(_2447)(M);}};

var _2442=function(M){if(--M.cbt<0){throw _2442;}
M.e.length-=(M.a-1);
return(_2443)(M);};


var _2438=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2441,M.p));
return((M.p).label)(M);};

var _2415=function(M){if(--M.cbt<0){throw _2415;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 22 2 694 173)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2438)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2435=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _2429=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2432,M.p));
return((M.p).label)(M);};

_2443.mvr=_2442;
_2457.mvr=_2456;
_2459.mvr=_2458;
_2461.mvr=_2460;
_2419.mvr=_2418;
var sym30718=RT.makeSymbol("hash-for-each");
var sym30717=RT.makeSymbol("hash-map");var _2414_c=new RT.Closure(_2414,3,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2462(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/hash.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/hash.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3123=function(M){return(_2536)(M);};

var _3122=function(M){if(--M.cbt<0){throw _3122;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);extNs.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);ns.set("append*", prefix[selfMod.getPrefixOffset("append*")]);extNs.set("append*", prefix[selfMod.getPrefixOffset("append*")]);ns.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);extNs.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);ns.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);extNs.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);ns.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);extNs.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);ns.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);extNs.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);ns.set("count", prefix[selfMod.getPrefixOffset("count")]);extNs.set("count", prefix[selfMod.getPrefixOffset("count")]);ns.set("drop", prefix[selfMod.getPrefixOffset("drop")]);extNs.set("drop", prefix[selfMod.getPrefixOffset("drop")]);ns.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);extNs.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);ns.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);extNs.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);ns.set("empty", prefix[selfMod.getPrefixOffset("empty")]);extNs.set("empty", prefix[selfMod.getPrefixOffset("empty")]);ns.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);extNs.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);ns.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);extNs.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);ns.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);extNs.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);ns.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);extNs.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);ns.set("first", prefix[selfMod.getPrefixOffset("first")]);extNs.set("first", prefix[selfMod.getPrefixOffset("first")]);ns.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);extNs.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);ns.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);extNs.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);ns.set("last", prefix[selfMod.getPrefixOffset("last")]);extNs.set("last", prefix[selfMod.getPrefixOffset("last")]);ns.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);extNs.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);ns.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);extNs.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);ns.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);extNs.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);ns.set("partition", prefix[selfMod.getPrefixOffset("partition")]);extNs.set("partition", prefix[selfMod.getPrefixOffset("partition")]);ns.set("rest", prefix[selfMod.getPrefixOffset("rest")]);extNs.set("rest", prefix[selfMod.getPrefixOffset("rest")]);ns.set("second", prefix[selfMod.getPrefixOffset("second")]);extNs.set("second", prefix[selfMod.getPrefixOffset("second")]);ns.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);extNs.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);ns.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);extNs.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);ns.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);extNs.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);ns.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);extNs.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);ns.set("take", prefix[selfMod.getPrefixOffset("take")]);extNs.set("take", prefix[selfMod.getPrefixOffset("take")]);ns.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);extNs.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);ns.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);extNs.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);ns.set("third", prefix[selfMod.getPrefixOffset("third")]);extNs.set("third", prefix[selfMod.getPrefixOffset("third")]);}(M.modules["whalesong/lang/list.rkt"],M.modules["whalesong/lang/list.rkt"].getExports(),M.modules["whalesong/lang/list.rkt"].getExternalExports(),M.modules["whalesong/lang/list.rkt"].prefix));
return(M.p)(M);};

var _3120=function(M){if(--M.cbt<0){throw _3120;}
M.c.push(new RT.CallFrame(_3122,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2535,2,[M.e[M.e.length-1]],"argmax");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3118=function(M){if(--M.cbt<0){throw _3118;}
M.c.push(new RT.CallFrame(_3120,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2534,2,[M.e[M.e.length-1]],"argmin");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3116=function(M){if(--M.cbt<0){throw _3116;}
M.c.push(new RT.CallFrame(_3118,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2533,4,[M.e[M.e.length-1]],"mk-min");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3114=function(M){if(--M.cbt<0){throw _3114;}
M.c.push(new RT.CallFrame(_3116,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2532,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3112=function(M){if(--M.cbt<0){throw _3112;}
M.c.push(new RT.CallFrame(_3114,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2531,2,[M.e[M.e.length-1]],"filter-not");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3110=function(M){if(--M.cbt<0){throw _3110;}
M.c.push(new RT.CallFrame(_3112,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2530,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][69]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3108=function(M){if(--M.cbt<0){throw _3108;}
M.c.push(new RT.CallFrame(_3110,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2527,2,[M.e[M.e.length-4]],"...ng/lang/list.rkt:318:15");
M.e[M.e.length-2]=new RT.Closure(_2528,3,[M.e[M.e.length-4]],"...ng/lang/list.rkt:319:15");
M.e[M.e.length-3]=new RT.Closure(_2529,(RT.makeArityAtLeast(2)),[M.e[M.e.length-4]],"...ng/lang/list.rkt:320:15");
M.v=new RT.Closure(_2526,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(2)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append-map");
M.e.length-=3;
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3106=function(M){if(--M.cbt<0){throw _3106;}
M.c.push(new RT.CallFrame(_3108,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2525,2,[M.e[M.e.length-1]],"partition");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3104=function(M){if(--M.cbt<0){throw _3104;}
M.c.push(new RT.CallFrame(_3106,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2524,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3102=function(M){if(--M.cbt<0){throw _3102;}
M.c.push(new RT.CallFrame(_3104,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2520,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"count");
M.e[M.e.length-1][44]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3100=function(M){if(--M.cbt<0){throw _3100;}
M.c.push(new RT.CallFrame(_3102,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2519,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][67]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3098=function(M){if(--M.cbt<0){throw _3098;}
M.c.push(new RT.CallFrame(_3100,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2515,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"filter-map");
M.e[M.e.length-1][36]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3096=function(M){if(--M.cbt<0){throw _3096;}
M.c.push(new RT.CallFrame(_3098,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2514,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][66]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3094=function(M){if(--M.cbt<0){throw _3094;}
M.c.push(new RT.CallFrame(_3096,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2513,2,[M.e[M.e.length-1]],"add-between");
M.e[M.e.length-1][34]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3092=function(M){if(--M.cbt<0){throw _3092;}
M.c.push(new RT.CallFrame(_3094,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2512,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3090=function(M){if(--M.cbt<0){throw _3090;}
M.c.push(new RT.CallFrame(_3092,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2510_c;
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3088=function(M){if(--M.cbt<0){throw _3088;}
M.c.push(new RT.CallFrame(_3090,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2505,1,[M.e[M.e.length-6]],"...ng/lang/list.rkt:162:15");
M.e[M.e.length-2]=new RT.Closure(_2506,2,[M.e[M.e.length-6]],"...ng/lang/list.rkt:163:15");
M.e[M.e.length-3]=new RT.Closure(_2507,3,[M.e[M.e.length-6]],"...ng/lang/list.rkt:164:15");
M.e[M.e.length-4]=new RT.Closure(_2508,4,[M.e[M.e.length-6]],"...ng/lang/list.rkt:165:15");
M.e[M.e.length-5]=new RT.Closure(_2509,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...ng/lang/list.rkt:166:15");
M.v=new RT.Closure(_2504,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.makePair(4,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))))),[M.e[M.e.length-5],M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append*");
M.e.length-=5;
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3086=function(M){if(--M.cbt<0){throw _3086;}
M.c.push(new RT.CallFrame(_3088,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2503,2,[M.e[M.e.length-1]],"split-at-right");
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3084=function(M){if(--M.cbt<0){throw _3084;}
M.c.push(new RT.CallFrame(_3086,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2502,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3082=function(M){if(--M.cbt<0){throw _3082;}
M.c.push(new RT.CallFrame(_3084,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2500,2,[M.e[M.e.length-1]],"drop-right");
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3080=function(M){if(--M.cbt<0){throw _3080;}
M.c.push(new RT.CallFrame(_3082,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2498,2,[M.e[M.e.length-1]],"take-right");
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3078=function(M){if(--M.cbt<0){throw _3078;}
M.c.push(new RT.CallFrame(_3080,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2497,2,[M.e[M.e.length-1]],"drop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3076=function(M){if(--M.cbt<0){throw _3076;}
M.c.push(new RT.CallFrame(_3078,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2496,2,[M.e[M.e.length-1]],"split-at");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3074=function(M){if(--M.cbt<0){throw _3074;}
M.c.push(new RT.CallFrame(_3076,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2495,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3072=function(M){if(--M.cbt<0){throw _3072;}
M.c.push(new RT.CallFrame(_3074,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2494,2,[M.e[M.e.length-1]],"take");
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3070=function(M){if(--M.cbt<0){throw _3070;}
M.c.push(new RT.CallFrame(_3072,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2493,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3068=function(M){if(--M.cbt<0){throw _3068;}
M.c.push(new RT.CallFrame(_3070,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2492,3,[M.e[M.e.length-1]],"too-large");
M.e[M.e.length-1][22]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3066=function(M){if(--M.cbt<0){throw _3066;}
M.c.push(new RT.CallFrame(_3068,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2491,2,[M.e[M.e.length-1]],"drop*");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3064=function(M){if(--M.cbt<0){throw _3064;}
M.c.push(new RT.CallFrame(_3066,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2490,2,[M.e[M.e.length-1]],"make-list");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3062=function(M){if(--M.cbt<0){throw _3062;}
M.c.push(new RT.CallFrame(_3064,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2489,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3060=function(M){if(--M.cbt<0){throw _3060;}
M.c.push(new RT.CallFrame(_3062,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.NULL;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3058=function(M){if(--M.cbt<0){throw _3058;}
M.c.push(new RT.CallFrame(_3060,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2488_c;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3056=function(M){if(--M.cbt<0){throw _3056;}
M.c.push(new RT.CallFrame(_3058,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2487_c;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3054=function(M){if(--M.cbt<0){throw _3054;}
M.c.push(new RT.CallFrame(_3056,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2486,1,[M.e[M.e.length-1]],"rest");
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3052=function(M){if(--M.cbt<0){throw _3052;}
M.c.push(new RT.CallFrame(_3054,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2484,1,[M.e[M.e.length-1]],"last");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3050=function(M){if(--M.cbt<0){throw _3050;}
M.c.push(new RT.CallFrame(_3052,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2482,1,[M.e[M.e.length-1]],"last-pair");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3048=function(M){if(--M.cbt<0){throw _3048;}
M.c.push(new RT.CallFrame(_3050,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2481,1,[M.e[M.e.length-1]],"tenth");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3046=function(M){if(--M.cbt<0){throw _3046;}
M.c.push(new RT.CallFrame(_3048,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2480,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3044=function(M){if(--M.cbt<0){throw _3044;}
M.c.push(new RT.CallFrame(_3046,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2479,1,[M.e[M.e.length-1]],"ninth");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3042=function(M){if(--M.cbt<0){throw _3042;}
M.c.push(new RT.CallFrame(_3044,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2478,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3040=function(M){if(--M.cbt<0){throw _3040;}
M.c.push(new RT.CallFrame(_3042,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2477,1,[M.e[M.e.length-1]],"eighth");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3038=function(M){if(--M.cbt<0){throw _3038;}
M.c.push(new RT.CallFrame(_3040,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2476,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3036=function(M){if(--M.cbt<0){throw _3036;}
M.c.push(new RT.CallFrame(_3038,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2475,1,[M.e[M.e.length-1]],"seventh");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3034=function(M){if(--M.cbt<0){throw _3034;}
M.c.push(new RT.CallFrame(_3036,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2474,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3032=function(M){if(--M.cbt<0){throw _3032;}
M.c.push(new RT.CallFrame(_3034,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2473,1,[M.e[M.e.length-1]],"sixth");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3030=function(M){if(--M.cbt<0){throw _3030;}
M.c.push(new RT.CallFrame(_3032,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2472,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3028=function(M){if(--M.cbt<0){throw _3028;}
M.c.push(new RT.CallFrame(_3030,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2471,1,[M.e[M.e.length-1]],"fifth");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3026=function(M){if(--M.cbt<0){throw _3026;}
M.c.push(new RT.CallFrame(_3028,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2470,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3024=function(M){if(--M.cbt<0){throw _3024;}
M.c.push(new RT.CallFrame(_3026,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2469,1,[M.e[M.e.length-1]],"fourth");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3022=function(M){if(--M.cbt<0){throw _3022;}
M.c.push(new RT.CallFrame(_3024,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2468,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3020=function(M){if(--M.cbt<0){throw _3020;}
M.c.push(new RT.CallFrame(_3022,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2467,1,[M.e[M.e.length-1]],"third");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3018=function(M){if(--M.cbt<0){throw _3018;}
M.c.push(new RT.CallFrame(_3020,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2466,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3016=function(M){if(--M.cbt<0){throw _3016;}
M.c.push(new RT.CallFrame(_3018,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2465,1,[M.e[M.e.length-1]],"second");
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3014=function(M){if(--M.cbt<0){throw _3014;}
M.c.push(new RT.CallFrame(_3016,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2464,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2538=function(M){if(--M.cbt<0){throw _2538;}
};

var _3001=function(M){if(--M.cbt<0){throw _3001;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_3003)(M);}else{M.v=RT.VOID;
return(_3004)(M);}};

var _2987=function(M){if(--M.cbt<0){throw _2987;}
if(M.v===false){return(_2984)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-14]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2980=function(M){if(--M.cbt<0){throw _2980;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_2982)(M);}else{M.v=RT.VOID;
return(_2983)(M);}};

var _2966=function(M){if(--M.cbt<0){throw _2966;}
if(M.v===false){return(_2963)(M);}else{M.v=M.e[M.e.length-7];
return(_2964)(M);}};

var _2958=function(M){if(--M.cbt<0){throw _2958;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2954=function(M){if(--M.cbt<0){throw _2954;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2950=function(M){if(--M.cbt<0){throw _2950;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2933=function(M){if(--M.cbt<0){throw _2933;}
if(M.v===false){return(_2930)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-10]);
M.v=M.e[M.e.length-11];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2920=function(M){if(--M.cbt<0){throw _2920;}
if(M.v===false){return(_2917)(M);}else{M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-6]);
return(_2918)(M);}};

var _2914=function(M){if(--M.cbt<0){throw _2914;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2905=function(M){if(--M.cbt<0){throw _2905;}
if(M.v===false){return(_2900)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][67];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2898=function(M){if(--M.cbt<0){throw _2898;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_2522,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:282:18");
M.a=1;
if(M.a===0){return(_2902)(M);}else{M.e.push(M.v);
return(_2902)(M);}};

var _2894=function(M){if(--M.cbt<0){throw _2894;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2888)(M);};

var _2892=function(M){if(--M.cbt<0){throw _2892;}
return(_2890)(M);};

var _2886=function(M){if(--M.cbt<0){throw _2886;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2880)(M);};

var _2884=function(M){if(--M.cbt<0){throw _2884;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2882)(M);};

var _2876=function(M){if(--M.cbt<0){throw _2876;}
if(M.v===false){return(_2871)(M);}else{M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
return(_2872)(M);}};

var _2874=function(M){if(--M.cbt<0){throw _2874;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2876,M.p));
return((M.p).label)(M);};

var _2870=function(M){if(--M.cbt<0){throw _2870;}
M.e[M.e.length-3]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2874,M.p));
return((M.p).label)(M);};

var _2863=function(M){if(--M.cbt<0){throw _2863;}
M.e[M.e.length-2]=M.v;
return(_2861)(M);};

var _2857=function(M){if(--M.cbt<0){throw _2857;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2859)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_2518_c;
M.a=2;
M.c.push(new RT.CallFrame(_2863,M.p));
return(_2518)(M);}};

var _2853=function(M){if(--M.cbt<0){throw _2853;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2844=function(M){if(--M.cbt<0){throw _2844;}
if(M.v===false){return(_2839)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2837=function(M){if(--M.cbt<0){throw _2837;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_2517,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:256:18");
M.a=1;
if(M.a===0){return(_2841)(M);}else{M.e.push(M.v);
return(_2841)(M);}};

var _2833=function(M){if(--M.cbt<0){throw _2833;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2827)(M);};

var _2831=function(M){if(--M.cbt<0){throw _2831;}
return(_2829)(M);};

var _2825=function(M){if(--M.cbt<0){throw _2825;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2819)(M);};

var _2823=function(M){if(--M.cbt<0){throw _2823;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2821)(M);};

var _2815=function(M){if(--M.cbt<0){throw _2815;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2813=function(M){if(--M.cbt<0){throw _2813;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2811=function(M){if(--M.cbt<0){throw _2811;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2813,M.p));
return((M.p).label)(M);};

var _2806=function(M){if(--M.cbt<0){throw _2806;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2808)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-7][66];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-9]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2811,M.p));
return((M.p).label)(M);}};

var _2804=function(M){if(--M.cbt<0){throw _2804;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2806,M.p));
return((M.p).label)(M);};

var _2800=function(M){if(--M.cbt<0){throw _2800;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2792=function(M){if(--M.cbt<0){throw _2792;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["list*"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2785=function(M){if(--M.cbt<0){throw _2785;}
M.e[M.e.length-2]=M.v;
return(_2783)(M);};

var _2758=function(M){if(--M.cbt<0){throw _2758;}
M.e[M.e.length-3]=M.v;
return(_2754)(M);};

var _2753=function(M){if(--M.cbt<0){throw _2753;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2755)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2754)(M);}};

var _2743=function(M){if(--M.cbt<0){throw _2743;}
M.e[M.e.length-2]=M.v;
return(_2741)(M);};

var _2735=function(M){if(--M.cbt<0){throw _2735;}
M.e[M.e.length-3]=M.v;
return(_2731)(M);};

var _2730=function(M){if(--M.cbt<0){throw _2730;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2732)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2731)(M);}};

var _2718=function(M){if(--M.cbt<0){throw _2718;}
M.e[M.e.length-3]=M.v;
return(_2714)(M);};

var _2713=function(M){if(--M.cbt<0){throw _2713;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2715)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2714)(M);}};

var _2704=function(M){if(--M.cbt<0){throw _2704;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2706)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2680=function(M){if(--M.cbt<0){throw _2680;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3121=function(M){if(--M.cbt<0){throw _3121;}
M.e.length-=(M.a-1);
return(_3122)(M);};

var _3119=function(M){if(--M.cbt<0){throw _3119;}
M.e.length-=(M.a-1);
return(_3120)(M);};

var _3117=function(M){if(--M.cbt<0){throw _3117;}
M.e.length-=(M.a-1);
return(_3118)(M);};

var _3115=function(M){if(--M.cbt<0){throw _3115;}
M.e.length-=(M.a-1);
return(_3116)(M);};

var _3113=function(M){if(--M.cbt<0){throw _3113;}
M.e.length-=(M.a-1);
return(_3114)(M);};

var _3111=function(M){if(--M.cbt<0){throw _3111;}
M.e.length-=(M.a-1);
return(_3112)(M);};

var _3109=function(M){if(--M.cbt<0){throw _3109;}
M.e.length-=(M.a-1);
return(_3110)(M);};

var _3107=function(M){if(--M.cbt<0){throw _3107;}
M.e.length-=(M.a-1);
return(_3108)(M);};

var _3105=function(M){if(--M.cbt<0){throw _3105;}
M.e.length-=(M.a-1);
return(_3106)(M);};

var _3103=function(M){if(--M.cbt<0){throw _3103;}
M.e.length-=(M.a-1);
return(_3104)(M);};

var _3101=function(M){if(--M.cbt<0){throw _3101;}
M.e.length-=(M.a-1);
return(_3102)(M);};

var _3099=function(M){if(--M.cbt<0){throw _3099;}
M.e.length-=(M.a-1);
return(_3100)(M);};

var _3097=function(M){if(--M.cbt<0){throw _3097;}
M.e.length-=(M.a-1);
return(_3098)(M);};

var _3095=function(M){if(--M.cbt<0){throw _3095;}
M.e.length-=(M.a-1);
return(_3096)(M);};

var _3093=function(M){if(--M.cbt<0){throw _3093;}
M.e.length-=(M.a-1);
return(_3094)(M);};

var _3091=function(M){if(--M.cbt<0){throw _3091;}
M.e.length-=(M.a-1);
return(_3092)(M);};

var _3089=function(M){if(--M.cbt<0){throw _3089;}
M.e.length-=(M.a-1);
return(_3090)(M);};

var _3087=function(M){if(--M.cbt<0){throw _3087;}
M.e.length-=(M.a-1);
return(_3088)(M);};

var _3085=function(M){if(--M.cbt<0){throw _3085;}
M.e.length-=(M.a-1);
return(_3086)(M);};

var _3083=function(M){if(--M.cbt<0){throw _3083;}
M.e.length-=(M.a-1);
return(_3084)(M);};

var _3081=function(M){if(--M.cbt<0){throw _3081;}
M.e.length-=(M.a-1);
return(_3082)(M);};

var _3079=function(M){if(--M.cbt<0){throw _3079;}
M.e.length-=(M.a-1);
return(_3080)(M);};

var _3077=function(M){if(--M.cbt<0){throw _3077;}
M.e.length-=(M.a-1);
return(_3078)(M);};

var _3075=function(M){if(--M.cbt<0){throw _3075;}
M.e.length-=(M.a-1);
return(_3076)(M);};

var _3073=function(M){if(--M.cbt<0){throw _3073;}
M.e.length-=(M.a-1);
return(_3074)(M);};

var _3071=function(M){if(--M.cbt<0){throw _3071;}
M.e.length-=(M.a-1);
return(_3072)(M);};

var _3069=function(M){if(--M.cbt<0){throw _3069;}
M.e.length-=(M.a-1);
return(_3070)(M);};

var _3067=function(M){if(--M.cbt<0){throw _3067;}
M.e.length-=(M.a-1);
return(_3068)(M);};

var _3065=function(M){if(--M.cbt<0){throw _3065;}
M.e.length-=(M.a-1);
return(_3066)(M);};

var _3063=function(M){if(--M.cbt<0){throw _3063;}
M.e.length-=(M.a-1);
return(_3064)(M);};

var _3061=function(M){if(--M.cbt<0){throw _3061;}
M.e.length-=(M.a-1);
return(_3062)(M);};

var _3059=function(M){if(--M.cbt<0){throw _3059;}
M.e.length-=(M.a-1);
return(_3060)(M);};

var _3057=function(M){if(--M.cbt<0){throw _3057;}
M.e.length-=(M.a-1);
return(_3058)(M);};

var _3055=function(M){if(--M.cbt<0){throw _3055;}
M.e.length-=(M.a-1);
return(_3056)(M);};

var _3053=function(M){if(--M.cbt<0){throw _3053;}
M.e.length-=(M.a-1);
return(_3054)(M);};

var _3051=function(M){if(--M.cbt<0){throw _3051;}
M.e.length-=(M.a-1);
return(_3052)(M);};

var _3049=function(M){if(--M.cbt<0){throw _3049;}
M.e.length-=(M.a-1);
return(_3050)(M);};

var _3047=function(M){if(--M.cbt<0){throw _3047;}
M.e.length-=(M.a-1);
return(_3048)(M);};

var _3045=function(M){if(--M.cbt<0){throw _3045;}
M.e.length-=(M.a-1);
return(_3046)(M);};

var _3043=function(M){if(--M.cbt<0){throw _3043;}
M.e.length-=(M.a-1);
return(_3044)(M);};

var _3041=function(M){if(--M.cbt<0){throw _3041;}
M.e.length-=(M.a-1);
return(_3042)(M);};

var _3039=function(M){if(--M.cbt<0){throw _3039;}
M.e.length-=(M.a-1);
return(_3040)(M);};

var _3037=function(M){if(--M.cbt<0){throw _3037;}
M.e.length-=(M.a-1);
return(_3038)(M);};

var _3035=function(M){if(--M.cbt<0){throw _3035;}
M.e.length-=(M.a-1);
return(_3036)(M);};

var _3033=function(M){if(--M.cbt<0){throw _3033;}
M.e.length-=(M.a-1);
return(_3034)(M);};

var _3031=function(M){if(--M.cbt<0){throw _3031;}
M.e.length-=(M.a-1);
return(_3032)(M);};

var _3029=function(M){if(--M.cbt<0){throw _3029;}
M.e.length-=(M.a-1);
return(_3030)(M);};

var _3027=function(M){if(--M.cbt<0){throw _3027;}
M.e.length-=(M.a-1);
return(_3028)(M);};

var _3025=function(M){if(--M.cbt<0){throw _3025;}
M.e.length-=(M.a-1);
return(_3026)(M);};

var _3023=function(M){if(--M.cbt<0){throw _3023;}
M.e.length-=(M.a-1);
return(_3024)(M);};

var _3021=function(M){if(--M.cbt<0){throw _3021;}
M.e.length-=(M.a-1);
return(_3022)(M);};

var _3019=function(M){if(--M.cbt<0){throw _3019;}
M.e.length-=(M.a-1);
return(_3020)(M);};

var _3017=function(M){if(--M.cbt<0){throw _3017;}
M.e.length-=(M.a-1);
return(_3018)(M);};

var _3015=function(M){if(--M.cbt<0){throw _3015;}
M.e.length-=(M.a-1);
return(_3016)(M);};

var _3013=function(M){if(--M.cbt<0){throw _3013;}
M.e.length-=(M.a-1);
return(_3014)(M);};

var _3011=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3012=function(M){M.modules["whalesong/lang/list.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("first")||M.primitives["first"],M.primitives["raise-type-error"],M.params.currentNamespace.get("second")||M.primitives["second"],M.primitives["format"],M.params.currentNamespace.get("third")||M.primitives["third"],M.params.currentNamespace.get("fourth")||M.primitives["fourth"],M.params.currentNamespace.get("fifth")||M.primitives["fifth"],M.params.currentNamespace.get("sixth")||M.primitives["sixth"],M.params.currentNamespace.get("seventh")||M.primitives["seventh"],M.params.currentNamespace.get("eighth")||M.primitives["eighth"],M.params.currentNamespace.get("ninth")||M.primitives["ninth"],M.params.currentNamespace.get("tenth")||M.primitives["tenth"],M.params.currentNamespace.get("last-pair")||M.primitives["last-pair"],M.params.currentNamespace.get("last")||M.primitives["last"],M.params.currentNamespace.get("rest")||M.primitives["rest"],M.params.currentNamespace.get("cons?")||M.primitives["cons?"],M.params.currentNamespace.get("empty?")||M.primitives["empty?"],M.params.currentNamespace.get("empty")||M.primitives["empty"],M.params.currentNamespace.get("make-list")||M.primitives["make-list"],M.primitives["exact-nonnegative-integer?"],M.primitives["zero?"],M.params.currentNamespace.get("drop*")||M.primitives["drop*"],M.params.currentNamespace.get("too-large")||M.primitives["too-large"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("take")||M.primitives["take"],M.params.currentNamespace.get("split-at")||M.primitives["split-at"],M.primitives["reverse"],M.params.currentNamespace.get("drop")||M.primitives["drop"],M.params.currentNamespace.get("take-right")||M.primitives["take-right"],M.params.currentNamespace.get("drop-right")||M.primitives["drop-right"],M.params.currentNamespace.get("split-at-right")||M.primitives["split-at-right"],M.params.currentNamespace.get("append*")||M.primitives["append*"],M.primitives["append"],M.params.currentNamespace.get("flatten")||M.primitives["flatten"],M.params.currentNamespace.get("add-between")||M.primitives["add-between"],M.primitives["list*"],M.params.currentNamespace.get("filter-map")||M.primitives["filter-map"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["length"],M.primitives["andmap"],M.primitives["ormap"],M.primitives["map"],M.primitives["error"],M.params.currentNamespace.get("count")||M.primitives["count"],M.params.currentNamespace.get("partition")||M.primitives["partition"],M.params.currentNamespace.get("append-map")||M.primitives["append-map"],M.params.currentNamespace.get("filter-not")||M.primitives["filter-not"],M.params.currentNamespace.get("mk-min")||M.primitives["mk-min"],M.primitives["real?"],M.params.currentNamespace.get("argmin")||M.primitives["argmin"],M.params.currentNamespace.get("argmax")||M.primitives["argmax"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["first","raise-type-error","second","format","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","last-pair","last","rest","cons?","empty?","empty","make-list","exact-nonnegative-integer?","zero?","drop*","too-large","raise-mismatch-error","take","split-at","reverse","drop","take-right","drop-right","split-at-right","append*","append","flatten","add-between","list*","filter-map","procedure?","procedure-arity-includes?","length","andmap","ormap","map","error","count","partition","append-map","filter-not","mk-min","real?","argmin","argmax",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3014,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2463,1,[M.e[M.e.length-1]],"first");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2537=function(M){if(--M.cbt<0){throw _2537;}
M.e.length-=(M.a-1);
return(_2538)(M);};

var _2535=function(M){if(--M.cbt<0){throw _2535;}

//"lambda body for #(struct:LamPositionalName argmax whalesong/lang/list.rkt 367 0 13235 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives[">"];
M.e[M.e.length-2]=sym30770;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2534=function(M){if(--M.cbt<0){throw _2534;}

//"lambda body for #(struct:LamPositionalName argmin whalesong/lang/list.rkt 366 0 13188 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives["<"];
M.e[M.e.length-2]=sym30771;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3004=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-12]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-12]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3003=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-11];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3004)(M);};


var _2997=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3001,M.p));
return((M.p).label)(M);};

var _2996=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2997)(M);};

var _2999=function(M){if(M.v===false){return(_2996)(M);}else{M.v=RT.VOID;
return(_2997)(M);}};

var _2998=function(M){M.v=false;
return(_2999)(M);};

var _2993=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_2998)(M);}else{M.v=RT.isPair(M.e[M.e.length-5]);
return(_2999)(M);}};

var _2992=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2993)(M);};

var _2995=function(M){if(M.v===false){return(_2992)(M);}else{M.v=RT.VOID;
return(_2993)(M);}};

var _2994=function(M){M.v=false;
return(_2995)(M);};

var _2533=function(M){if(--M.cbt<0){throw _2533;}

//"lambda body for #(struct:LamPositionalName mk-min whalesong/lang/list.rkt 341 0 12292 894)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2994)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2995)(M);}};

var _2984=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.v=RT.checkedCdr(M, M.e[M.e.length-14]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2983=function(M){M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2987,M.p));
return((M.p).label)(M);};

var _2982=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2983)(M);};


var _2977=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2980,M.p));
return((M.p).label)(M);};

var _2532=function(M){if(--M.cbt<0){throw _2532;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 351 4 12715 469)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_2977)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2974=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2973=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30772;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2974)(M);};

var _2970=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2973)(M);}else{M.v=RT.VOID;
return(_2974)(M);}};

var _2969=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30772;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2970)(M);};

var _2972=function(M){if(M.v===false){return(_2969)(M);}else{M.v=RT.VOID;
return(_2970)(M);}};

var _2971=function(M){M.v=false;
return(_2972)(M);};

var _2531=function(M){if(--M.cbt<0){throw _2531;}

//"lambda body for #(struct:LamPositionalName filter-not whalesong/lang/list.rkt 324 0 11634 500)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2971)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2972)(M);}};

var _2964=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2963=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2964)(M);};


var _2961=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2966,M.p));
return((M.p).label)(M);};

var _2530=function(M){if(--M.cbt<0){throw _2530;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 332 2 11989 144)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2961)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};




var _2529=function(M){if(--M.cbt<0){throw _2529;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:320:15 whalesong/lang/list.rkt 320 15 11488 46)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-10];
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2958,M.p));
return((M.p).label)(M);};

var _2528=function(M){if(--M.cbt<0){throw _2528;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:319:15 whalesong/lang/list.rkt 319 15 11432 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2954,M.p));
return((M.p).label)(M);};

var _2947=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2527)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2529)(M);}};

var _2946=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2947)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2528)(M);}};

var _2526=function(M){if(--M.cbt<0){throw _2526;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2946)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2527)(M);}};

var _2943=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][68];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=RT.NULL;
M.e[M.e.length-4]=RT.NULL;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2942=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30773;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2943)(M);};

var _2939=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2942)(M);}else{M.v=RT.VOID;
return(_2943)(M);}};

var _2938=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30773;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2939)(M);};

var _2941=function(M){if(M.v===false){return(_2938)(M);}else{M.v=RT.VOID;
return(_2939)(M);}};

var _2940=function(M){M.v=false;
return(_2941)(M);};

var _2525=function(M){if(--M.cbt<0){throw _2525;}

//"lambda body for #(struct:LamPositionalName partition whalesong/lang/list.rkt 307 0 10913 435)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2940)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2941)(M);}};

var _2930=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.v=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2924=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2933,M.p));
return((M.p).label)(M);};

var _2524=function(M){if(--M.cbt<0){throw _2524;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 311 2 11151 196)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2924)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2918=function(M){M.p=_2523_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2523)(M);};

var _2917=function(M){M.e[M.e.length-3]=M.e[M.e.length-6];
return(_2918)(M);};


var _2915=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-4]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2920,M.p));
return((M.p).label)(M);};


var _2911=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2523=function(M){if(--M.cbt<0){throw _2523;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 289 4 10141 90)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2915)(M);}else{M.v=M.e[M.e.length-3];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2900=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym30774;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2903=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2905,M.p));
return((M.p).label)(M);};

var _2902=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2903)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2903)(M);}};

var _2522=function(M){if(--M.cbt<0){throw _2522;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:282:18 whalesong/lang/list.rkt 282 18 9859 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2914,M.p));
return((M.p).label)(M);};


var _2895=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=0;
M.p=_2523_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2523)(M);};


var _2521=function(M){if(--M.cbt<0){throw _2521;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:279:12 whalesong/lang/list.rkt 279 12 9744 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2911)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2888=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2895)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2898,M.p));
return((M.p).label)(M);}};

var _2887=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30774;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_2521_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2894,M.p));
return((M.p).label)(M);};

var _2890=function(M){if(M.v===false){return(_2887)(M);}else{M.v=RT.VOID;
return(_2888)(M);}};


var _2889=function(M){M.v=false;
return(_2890)(M);};


var _2880=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2889)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2892,M.p));
return((M.p).label)(M);}};

var _2879=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30774;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2886,M.p));
return((M.p).label)(M);};

var _2882=function(M){if(M.v===false){return(_2879)(M);}else{M.v=RT.VOID;
return(_2880)(M);}};


var _2881=function(M){M.v=false;
return(_2882)(M);};

var _2520=function(M){if(--M.cbt<0){throw _2520;}

//"lambda body for #(struct:LamPositionalName count whalesong/lang/list.rkt 272 0 9446 787)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2881)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2884,M.p));
return((M.p).label)(M);}};

var _2872=function(M){M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2871=function(M){M.v=M.e[M.e.length-9];
return(_2872)(M);};




var _2867=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][67];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2870,M.p));
return((M.p).label)(M);};

var _2519=function(M){if(--M.cbt<0){throw _2519;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 283 8 9903 176)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2867)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2861=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2859=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_2518_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2518)(M);};


var _2854=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2857,M.p));
return((M.p).label)(M);};


var _2850=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2518=function(M){if(--M.cbt<0){throw _2518;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 265 4 9222 140)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2854)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2839=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym30775;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2842=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2844,M.p));
return((M.p).label)(M);};

var _2841=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2842)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2842)(M);}};

var _2517=function(M){if(--M.cbt<0){throw _2517;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:256:18 whalesong/lang/list.rkt 256 18 8870 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2853,M.p));
return((M.p).label)(M);};


var _2834=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_2518_c;
M.a=2;
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return(_2518)(M);};


var _2516=function(M){if(--M.cbt<0){throw _2516;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:253:12 whalesong/lang/list.rkt 253 12 8755 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2850)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2827=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2834)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2837,M.p));
return((M.p).label)(M);}};

var _2826=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30775;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_2516_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2833,M.p));
return((M.p).label)(M);};

var _2829=function(M){if(M.v===false){return(_2826)(M);}else{M.v=RT.VOID;
return(_2827)(M);}};


var _2828=function(M){M.v=false;
return(_2829)(M);};


var _2819=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2828)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2831,M.p));
return((M.p).label)(M);}};

var _2818=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30775;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2825,M.p));
return((M.p).label)(M);};

var _2821=function(M){if(M.v===false){return(_2818)(M);}else{M.v=RT.VOID;
return(_2819)(M);}};


var _2820=function(M){M.v=false;
return(_2821)(M);};

var _2515=function(M){if(--M.cbt<0){throw _2515;}

//"lambda body for #(struct:LamPositionalName filter-map whalesong/lang/list.rkt 246 0 8442 922)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2820)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2823,M.p));
return((M.p).label)(M);}};




var _2808=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2815,M.p));
return((M.p).label)(M);};



var _2801=function(M){M.e.push(void(0));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2804,M.p));
return((M.p).label)(M);};

var _2514=function(M){if(--M.cbt<0){throw _2514;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 257 8 8914 241)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2801)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2797=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2800,M.p));
return((M.p).label)(M);};

var _2795=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2797)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2793=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30776;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2513=function(M){if(--M.cbt<0){throw _2513;}

//"lambda body for #(struct:LamPositionalName add-between whalesong/lang/list.rkt 176 0 5304 349)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2793)(M);}else{M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2795)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};


var _2789=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2792,M.p));
return((M.p).label)(M);};

var _2512=function(M){if(--M.cbt<0){throw _2512;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 181 20 5502 147)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2789)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2783=function(M){M.p=_2511_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2511)(M);};


var _2781=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2779=function(M){M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2781)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.p=_2511_c;
M.a=2;
M.c.push(new RT.CallFrame(_2785,M.p));
return(_2511)(M);}};

var _2511=function(M){if(--M.cbt<0){throw _2511;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 169 2 5055 168)"

M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_2779)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2510=function(M){if(--M.cbt<0){throw _2510;}

//"lambda body for #(struct:LamPositionalName flatten whalesong/lang/list.rkt 168 0 5025 199)"

M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=RT.NULL;
M.p=_2511_c;
M.a=2;
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return(_2511)(M);};

var _2509=function(M){if(--M.cbt<0){throw _2509;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:166:15 whalesong/lang/list.rkt 166 15 4983 38)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["apply"];
M.e[M.e.length-2]=M.primitives["append"];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2508=function(M){if(--M.cbt<0){throw _2508;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:165:15 whalesong/lang/list.rkt 165 15 4925 42)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2764=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 5]).racketArity,M.a)){return(_2505)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 5];
return(_2509)(M);}};

var _2507=function(M){if(--M.cbt<0){throw _2507;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:164:15 whalesong/lang/list.rkt 164 15 4873 36)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2763=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_2764)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_2508)(M);}};

var _2506=function(M){if(--M.cbt<0){throw _2506;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:163:15 whalesong/lang/list.rkt 163 15 4827 30)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2762=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2763)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2507)(M);}};

var _2761=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2762)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2506)(M);}};

var _2504=function(M){if(--M.cbt<0){throw _2504;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2761)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2505)(M);}};


var _2755=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][22];
M.e[M.e.length-1]=sym30777;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2758,M.p));
return((M.p).label)(M);};


var _2751=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][21];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2753,M.p));
return((M.p).label)(M);};

var _2750=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30777;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2751)(M);};

var _2503=function(M){if(--M.cbt<0){throw _2503;}

//"lambda body for #(struct:LamPositionalName split-at-right whalesong/lang/list.rkt 150 0 4278 453)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2750)(M);}else{M.v=RT.VOID;
return(_2751)(M);}};

var _2744=function(M){M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-4];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2502=function(M){if(--M.cbt<0){throw _2502;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 153 2 4424 306)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2744)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2741=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2739=function(M){M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2501=function(M){while(true){if(--M.cbt<0){throw _2501;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 143 2 4028 247)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2739)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2501_c;
M.a=2;
M.c.push(new RT.CallFrame(_2743,M.p));
}}};


var _2732=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym30778;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2735,M.p));
return((M.p).label)(M);};


var _2728=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2730,M.p));
return((M.p).label)(M);};

var _2727=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30778;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2728)(M);};

var _2500=function(M){if(--M.cbt<0){throw _2500;}

//"lambda body for #(struct:LamPositionalName drop-right whalesong/lang/list.rkt 140 0 3890 386)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2727)(M);}else{M.v=RT.VOID;
return(_2728)(M);}};

var _2722=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2499=function(M){if(--M.cbt<0){throw _2499;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 133 2 3657 230)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2722)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2499_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2499)(M);}};


var _2715=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym30779;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2718,M.p));
return((M.p).label)(M);};


var _2711=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2713,M.p));
return((M.p).label)(M);};

var _2710=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30779;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2711)(M);};

var _2498=function(M){if(--M.cbt<0){throw _2498;}

//"lambda body for #(struct:LamPositionalName take-right whalesong/lang/list.rkt 130 0 3512 376)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2710)(M);}else{M.v=RT.VOID;
return(_2711)(M);}};

var _2706=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][22];
M.e[M.e.length-1]=sym30780;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2702=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][21];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2704,M.p));
return((M.p).label)(M);};

var _2701=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30780;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2702)(M);};

var _2497=function(M){if(--M.cbt<0){throw _2497;}

//"lambda body for #(struct:LamPositionalName drop whalesong/lang/list.rkt 122 0 3176 253)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2701)(M);}else{M.v=RT.VOID;
return(_2702)(M);}};

var _2698=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2697=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30781;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2698)(M);};

var _2496=function(M){if(--M.cbt<0){throw _2496;}

//"lambda body for #(struct:LamPositionalName split-at whalesong/lang/list.rkt 114 0 2812 362)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2697)(M);}else{M.v=RT.VOID;
return(_2698)(M);}};

var _2691=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym30781;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2687=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2691)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=RT.checkedSub1(M, M.e[M.e.length-10]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-13];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2495=function(M){if(--M.cbt<0){throw _2495;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 117 2 2958 215)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2687)(M);}else{M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2684=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][62];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2683=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30782;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2684)(M);};

var _2494=function(M){if(--M.cbt<0){throw _2494;}

//"lambda body for #(struct:LamPositionalName take whalesong/lang/list.rkt 106 0 2498 312)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2683)(M);}else{M.v=RT.VOID;
return(_2684)(M);}};


var _2677=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym30782;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2675=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2677)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][62];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2680,M.p));
return((M.p).label)(M);}};

var _2493=function(M){if(--M.cbt<0){throw _2493;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 109 2 2636 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2675)(M);}else{M.v=RT.NULL;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2674=function(M){M.a=3;
M.v=M.primitives["format"]._i(M);
M.e.length-=3;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2673=function(M){M.e[M.e.length-3]=" (not a proper list)";
return(_2674)(M);};

var _2492=function(M){if(--M.cbt<0){throw _2492;}

//"lambda body for #(struct:LamPositionalName too-large whalesong/lang/list.rkt 99 0 2322 174)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="index ~e too large for list~a: ";
M.e[M.e.length-2]=M.e[M.e.length-10];
M.v=RT.isList(M.e[M.e.length-9]);
if(M.v===false){return(_2673)(M);}else{M.e[M.e.length-3]="";
return(_2674)(M);}};

var _2669=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2667=function(M){M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2669)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][21];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2491=function(M){if(--M.cbt<0){throw _2491;}

//"lambda body for #(struct:LamPositionalName drop* whalesong/lang/list.rkt 97 0 2175 146)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2667)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2664=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2663=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30783;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2664)(M);};

var _2490=function(M){if(--M.cbt<0){throw _2490;}

//"lambda body for #(struct:LamPositionalName make-list whalesong/lang/list.rkt 90 0 1943 208)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2663)(M);}else{M.v=RT.VOID;
return(_2664)(M);}};

var _2659=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedSub1(M, M.e[M.e.length-6]);
M.v=RT.makePair(M.e[M.e.length-5],M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2489=function(M){if(--M.cbt<0){throw _2489;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 93 2 2076 74)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2659)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2488=function(M){if(--M.cbt<0){throw _2488;}

//"lambda body for #(struct:LamPositionalName empty? whalesong/lang/list.rkt 87 15 1899 22)"

M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2487=function(M){if(--M.cbt<0){throw _2487;}

//"lambda body for #(struct:LamPositionalName cons? whalesong/lang/list.rkt 86 14 1860 22)"

M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2655=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30784;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2658=function(M){if(M.v===false){return(_2655)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2657=function(M){M.v=false;
return(_2658)(M);};

var _2486=function(M){if(--M.cbt<0){throw _2486;}

//"lambda body for #(struct:LamPositionalName rest whalesong/lang/list.rkt 81 0 1734 110)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2657)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2658)(M);}};

var _2650=function(M){M.v=RT.checkedCar(M, M.e[M.e.length-1]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2485=function(M){if(--M.cbt<0){throw _2485;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 75 4 1590 92)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2650)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2485_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2485)(M);}};

var _2643=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30785;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2646=function(M){if(M.v===false){return(_2643)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2485_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2485)(M);}};

var _2645=function(M){M.v=false;
return(_2646)(M);};

var _2484=function(M){if(--M.cbt<0){throw _2484;}

//"lambda body for #(struct:LamPositionalName last whalesong/lang/list.rkt 73 0 1537 195)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2645)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2646)(M);}};

var _2638=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2483=function(M){if(--M.cbt<0){throw _2483;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 67 4 1404 86)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2638)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2483_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2483)(M);}};

var _2633=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30786;
M.e[M.e.length-2]="pair";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2482=function(M){if(--M.cbt<0){throw _2482;}

//"lambda body for #(struct:LamPositionalName last-pair whalesong/lang/list.rkt 65 0 1362 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2633)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2483_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2483)(M);}};

var _2629=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30787;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2481=function(M){if(--M.cbt<0){throw _2481;}

//"lambda body for #(struct:LamPositionalName tenth whalesong/lang/list.rkt 63 0 1333 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2629)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=10;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2625=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2623=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30787;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=10;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2480=function(M){if(--M.cbt<0){throw _2480;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2623)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2625)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2619=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30788;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2479=function(M){if(--M.cbt<0){throw _2479;}

//"lambda body for #(struct:LamPositionalName ninth whalesong/lang/list.rkt 62 0 1306 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2619)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=9;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2615=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2613=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30788;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=9;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2478=function(M){if(--M.cbt<0){throw _2478;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2613)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2615)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2609=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30789;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2477=function(M){if(--M.cbt<0){throw _2477;}

//"lambda body for #(struct:LamPositionalName eighth whalesong/lang/list.rkt 61 0 1279 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2609)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=8;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2605=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2603=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30789;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=8;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2476=function(M){if(--M.cbt<0){throw _2476;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2603)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2605)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2599=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30790;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2475=function(M){if(--M.cbt<0){throw _2475;}

//"lambda body for #(struct:LamPositionalName seventh whalesong/lang/list.rkt 60 0 1252 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2599)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=7;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2595=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2593=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30790;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=7;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2474=function(M){if(--M.cbt<0){throw _2474;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2593)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2595)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2589=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30791;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2473=function(M){if(--M.cbt<0){throw _2473;}

//"lambda body for #(struct:LamPositionalName sixth whalesong/lang/list.rkt 59 0 1225 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2589)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=6;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2585=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2583=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30791;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=6;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2472=function(M){if(--M.cbt<0){throw _2472;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2583)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2585)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2579=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30792;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2471=function(M){if(--M.cbt<0){throw _2471;}

//"lambda body for #(struct:LamPositionalName fifth whalesong/lang/list.rkt 58 0 1198 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2579)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=5;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2575=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2573=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30792;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=5;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2470=function(M){if(--M.cbt<0){throw _2470;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2573)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2575)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2569=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30793;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2469=function(M){if(--M.cbt<0){throw _2469;}

//"lambda body for #(struct:LamPositionalName fourth whalesong/lang/list.rkt 57 0 1171 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2569)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=4;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2565=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2563=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30793;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=4;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2468=function(M){if(--M.cbt<0){throw _2468;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2563)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2565)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2559=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30794;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2467=function(M){if(--M.cbt<0){throw _2467;}

//"lambda body for #(struct:LamPositionalName third whalesong/lang/list.rkt 56 0 1144 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2559)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=3;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2555=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2553=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30794;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=3;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2466=function(M){if(--M.cbt<0){throw _2466;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2553)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2555)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2549=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30795;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2465=function(M){if(--M.cbt<0){throw _2465;}

//"lambda body for #(struct:LamPositionalName second whalesong/lang/list.rkt 55 0 1117 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2549)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=2;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2545=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2543=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30795;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=2;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2464=function(M){if(--M.cbt<0){throw _2464;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2543)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2545)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2539=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30796;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2542=function(M){if(M.v===false){return(_2539)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2541=function(M){M.v=false;
return(_2542)(M);};

var _2463=function(M){if(--M.cbt<0){throw _2463;}

//"lambda body for #(struct:LamPositionalName first whalesong/lang/list.rkt 39 0 613 112)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2541)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2542)(M);}};

var _2536=function(M){M.c.push(new RT.CallFrame(_2538,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/list.rkt"]=function(){return new RT.ModuleRecord("list",_3012);}
return(_3011)(M);};

var _2527=function(M){if(--M.cbt<0){throw _2527;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:318:15 whalesong/lang/list.rkt 318 15 11384 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2950,M.p));
return((M.p).label)(M);};

var _2505=function(M){if(--M.cbt<0){throw _2505;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:162:15 whalesong/lang/list.rkt 162 15 4764 24)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2754=function(M){M.e.pop();
M.v=RT.NULL;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2731=function(M){M.e.pop();
M.p=_2501_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2501)(M);};

var _2714=function(M){M.e.pop();
M.p=_2499_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2499)(M);};

_3014.mvr=_3013;
_3016.mvr=_3015;
_3018.mvr=_3017;
_3020.mvr=_3019;
_3022.mvr=_3021;
_3024.mvr=_3023;
_3026.mvr=_3025;
_3028.mvr=_3027;
_3030.mvr=_3029;
_3032.mvr=_3031;
_3034.mvr=_3033;
_3036.mvr=_3035;
_3038.mvr=_3037;
_3040.mvr=_3039;
_3042.mvr=_3041;
_3044.mvr=_3043;
_3046.mvr=_3045;
_3048.mvr=_3047;
_3050.mvr=_3049;
_3052.mvr=_3051;
_3054.mvr=_3053;
_3056.mvr=_3055;
_3058.mvr=_3057;
_3060.mvr=_3059;
_3062.mvr=_3061;
_3064.mvr=_3063;
_3066.mvr=_3065;
_3068.mvr=_3067;
_3070.mvr=_3069;
_3072.mvr=_3071;
_3074.mvr=_3073;
_3076.mvr=_3075;
_3078.mvr=_3077;
_3080.mvr=_3079;
_3082.mvr=_3081;
_3084.mvr=_3083;
_3086.mvr=_3085;
_3088.mvr=_3087;
_3090.mvr=_3089;
_3092.mvr=_3091;
_3094.mvr=_3093;
_3096.mvr=_3095;
_3098.mvr=_3097;
_3100.mvr=_3099;
_3102.mvr=_3101;
_3104.mvr=_3103;
_3106.mvr=_3105;
_3108.mvr=_3107;
_3110.mvr=_3109;
_3112.mvr=_3111;
_3114.mvr=_3113;
_3116.mvr=_3115;
_3118.mvr=_3117;
_3120.mvr=_3119;
_3122.mvr=_3121;
_2538.mvr=_2537;
var sym30789=RT.makeSymbol("eighth");
var sym30788=RT.makeSymbol("ninth");
var sym30787=RT.makeSymbol("tenth");
var sym30786=RT.makeSymbol("last-pair");
var sym30784=RT.makeSymbol("rest");
var sym30783=RT.makeSymbol("make-list");
var sym30782=RT.makeSymbol("take");
var sym30780=RT.makeSymbol("drop");
var sym30781=RT.makeSymbol("split-at");
var sym30779=RT.makeSymbol("take-right");
var sym30778=RT.makeSymbol("drop-right");
var sym30777=RT.makeSymbol("split-at-right");
var sym30796=RT.makeSymbol("first");
var sym30776=RT.makeSymbol("add-between");
var sym30775=RT.makeSymbol("filter-map");
var sym30773=RT.makeSymbol("partition");
var sym30772=RT.makeSymbol("filter-not");
var sym30774=RT.makeSymbol("count");
var sym30771=RT.makeSymbol("argmin");
var sym30770=RT.makeSymbol("argmax");
var sym30785=RT.makeSymbol("last");
var sym30795=RT.makeSymbol("second");
var sym30794=RT.makeSymbol("third");
var sym30793=RT.makeSymbol("fourth");
var sym30792=RT.makeSymbol("fifth");
var sym30791=RT.makeSymbol("sixth");
var sym30790=RT.makeSymbol("seventh");var _2483_c=new RT.Closure(_2483,2,void(0),"loop");
var _2523_c=new RT.Closure(_2523,3,void(0),"loop");
var _2516_c=new RT.Closure(_2516,1,void(0),"...ng/lang/list.rkt:253:12");
var _2501_c=new RT.Closure(_2501,2,void(0),"loop");
var _2485_c=new RT.Closure(_2485,2,void(0),"loop");
var _2511_c=new RT.Closure(_2511,2,void(0),"loop");
var _2510_c=new RT.Closure(_2510,1,void(0),"flatten");
var _2518_c=new RT.Closure(_2518,2,void(0),"loop");
var _2499_c=new RT.Closure(_2499,2,void(0),"loop");
var _2521_c=new RT.Closure(_2521,1,void(0),"...ng/lang/list.rkt:279:12");
var _2488_c=new RT.Closure(_2488,1,void(0),"empty?");
var _2487_c=new RT.Closure(_2487,1,void(0),"cons?");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3123(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3407=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][48];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3397=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3402,M.p));
return((M.p).label)(M);};


var _3395=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym30874;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3390=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3415)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3383=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3388,M.p));
return((M.p).label)(M);};


var _3381=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym30874;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3376=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3421)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3147=function(M){if(--M.cbt<0){throw _3147;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 183 13 5746 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3376)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3379,M.p));
return((M.p).label)(M);}};

var _3146=function(M){if(--M.cbt<0){throw _3146;}

//"lambda body for #(struct:LamPositionalName assq whalesong/lang/private/list.rkt 179 11 5636 54)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][47];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3370=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym30875;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3364=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym30875;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3356=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][47];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3346=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3351,M.p));
return((M.p).label)(M);};


var _3344=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym30875;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3339=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3364)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3332=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3337,M.p));
return((M.p).label)(M);};


var _3330=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym30875;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3325=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3370)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3145=function(M){if(--M.cbt<0){throw _3145;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 180 13 5663 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3325)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3328,M.p));
return((M.p).label)(M);}};

var _3144=function(M){if(--M.cbt<0){throw _3144;}

//"lambda body for #(struct:LamPositionalName bad-item whalesong/lang/private/list.rkt 142 0 4192 200)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]="non-pair found in list: ";
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=" in ";
M.e[M.e.length-5]=M.e[M.e.length-9];
M.p=M.primitives["raise-mismatch-error"];
RT.raiseArityMismatchError(M,M.p,5);
return(_3145)(M);};

var _3143=function(M){if(--M.cbt<0){throw _3143;}

//"lambda body for #(struct:LamPositionalName bad-list whalesong/lang/private/list.rkt 138 0 4055 136)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3320=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][46];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3319=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30876;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3320)(M);};

var _3322=function(M){if(M.v===false){return(_3319)(M);}else{M.v=RT.VOID;
return(_3320)(M);}};

var _3321=function(M){M.v=false;
return(_3322)(M);};

var _3142=function(M){if(--M.cbt<0){throw _3142;}

//"lambda body for #(struct:LamPositionalName findf whalesong/lang/private/list.rkt 123 0 3608 445)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3321)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3322)(M);}};

var _3313=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][46];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3310=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30876;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3308=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3310)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3316,M.p));
return((M.p).label)(M);}};

var _3141=function(M){if(--M.cbt<0){throw _3141;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 126 2 3751 301)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3308)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3303=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3302=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30877;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3303)(M);};

var _3305=function(M){if(M.v===false){return(_3302)(M);}else{M.v=RT.VOID;
return(_3303)(M);}};

var _3304=function(M){M.v=false;
return(_3305)(M);};

var _3140=function(M){if(--M.cbt<0){throw _3140;}

//"lambda body for #(struct:LamPositionalName memf whalesong/lang/private/list.rkt 111 0 3225 381)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3304)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3305)(M);}};

var _3296=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3294=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30877;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3292=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3294)(M);}else{M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3299,M.p));
return((M.p).label)(M);}};

var _3139=function(M){if(--M.cbt<0){throw _3139;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 114 2 3366 239)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3292)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3138=function(M){if(--M.cbt<0){throw _3138;}

//"lambda body for #(struct:LamPositionalName remv* whalesong/lang/private/list.rkt 108 0 3172 51)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym30878;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3137=function(M){if(--M.cbt<0){throw _3137;}

//"lambda body for #(struct:LamPositionalName remq* whalesong/lang/private/list.rkt 105 0 3120 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym30879;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3283=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym30880;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3282=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30880;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3283)(M);};

var _3285=function(M){if(M.v===false){return(_3282)(M);}else{M.v=RT.VOID;
return(_3283)(M);}};

var _3284=function(M){M.v=false;
return(_3285)(M);};

var _3136=function(M){if(--M.cbt<0){throw _3136;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:99:4 whalesong/lang/private/list.rkt 99 4 2905 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3284)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3285)(M);}};

var _3278=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3135)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3136)(M);}};

var _3134=function(M){if(--M.cbt<0){throw _3134;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3278)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3135)(M);}};

var _3268=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-5]=M.v;
M.p=_3133_c;
M.a=5;
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return(_3133)(M);};


var _3265=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _3263=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3271,M.p));
return((M.p).label)(M);};

var _3133=function(M){if(--M.cbt<0){throw _3133;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 90 13 2602 216)"

M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_3263)(M);}else{M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_3132_c;
M.a=3;
M.c.push(new RT.CallFrame(_3267,M.p));
return(_3132)(M);}};

var _3257=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.p=_3133_c;
M.a=5;
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return(_3133)(M);};

var _3132=function(M){if(--M.cbt<0){throw _3132;}

//"lambda body for #(struct:LamPositionalName rloop whalesong/lang/private/list.rkt 86 2 2502 320)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3257)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3253=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3132_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_3132)(M);};

var _3252=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3253)(M);};

var _3251=function(M){M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3252)(M);}else{M.v=RT.VOID;
return(_3253)(M);}};

var _3250=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3251)(M);};

var _3131=function(M){if(--M.cbt<0){throw _3131;}

//"lambda body for #(struct:LamPositionalName do-remove* whalesong/lang/private/list.rkt 81 0 2350 473)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3250)(M);}else{M.v=RT.VOID;
return(_3251)(M);}};

var _3130=function(M){if(--M.cbt<0){throw _3130;}

//"lambda body for #(struct:LamPositionalName remv whalesong/lang/private/list.rkt 78 0 2288 60)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym30881;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3129=function(M){if(--M.cbt<0){throw _3129;}

//"lambda body for #(struct:LamPositionalName remq whalesong/lang/private/list.rkt 75 0 2227 59)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym30882;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3241=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym30883;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3240=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30883;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3241)(M);};

var _3243=function(M){if(M.v===false){return(_3240)(M);}else{M.v=RT.VOID;
return(_3241)(M);}};

var _3242=function(M){M.v=false;
return(_3243)(M);};

var _3128=function(M){if(--M.cbt<0){throw _3128;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:69:4 whalesong/lang/private/list.rkt 69 4 2003 220)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3242)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3243)(M);}};

var _3236=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3127)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3128)(M);}};

var _3126=function(M){if(--M.cbt<0){throw _3126;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3236)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3127)(M);}};

var _3233=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _3229=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3125_c;
M.a=3;
M.c.push(new RT.CallFrame(_3235,M.p));
return(_3125)(M);};


var _3227=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3232,M.p));
return((M.p).label)(M);};

var _3125=function(M){if(--M.cbt<0){throw _3125;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 61 2 1755 156)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3227)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3223=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3125_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_3125)(M);};

var _3222=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3223)(M);};

var _3124=function(M){if(--M.cbt<0){throw _3124;}

//"lambda body for #(struct:LamPositionalName do-remove whalesong/lang/private/list.rkt 58 0 1649 263)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3222)(M);}else{M.v=RT.VOID;
return(_3223)(M);}};

var _3219=function(M){M.c.push(new RT.CallFrame(_3221,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/list.rkt"]=function(){return new RT.ModuleRecord("list",_3974);}
return(_3973)(M);};

var _4071=function(M){M.e.splice(M.e.length-2,1);
M.e.splice(M.e.length-2,1);
M.e[M.e.length-2][42]=M.v;
M.e[M.e.length-2][43]=M.e[M.e.length-1];
M.e.pop();
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3215=function(M){if(--M.cbt<0){throw _3215;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3963)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3210=function(M){if(--M.cbt<0){throw _3210;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3947)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3928=function(M){if(--M.cbt<0){throw _3928;}
if(M.a===0){return(_3925)(M);}else{M.e.push(M.v);
return(_3925)(M);}};

var _3921=function(M){if(--M.cbt<0){throw _3921;}
if(M.a===0){return(_3918)(M);}else{M.e.push(M.v);
return(_3918)(M);}};

var _3914=function(M){if(--M.cbt<0){throw _3914;}
if(M.a===0){return(_3911)(M);}else{M.e.push(M.v);
return(_3911)(M);}};

var _3205=function(M){if(--M.cbt<0){throw _3205;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3913,M.p));
return((M.p).label)(M);};

var _3904=function(M){if(--M.cbt<0){throw _3904;}
if(M.a===0){return(_3901)(M);}else{M.e.push(M.v);
return(_3901)(M);}};

var _3200=function(M){if(--M.cbt<0){throw _3200;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3889,M.p));
return((M.p).label)(M);};

var _3190=function(M){if(--M.cbt<0){throw _3190;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3831,M.p));
return((M.p).label)(M);};

var _3809=function(M){if(--M.cbt<0){throw _3809;}
if(M.a===0){return(_3806)(M);}else{M.e.push(M.v);
return(_3806)(M);}};

var _3802=function(M){if(--M.cbt<0){throw _3802;}
if(M.a===0){return(_3799)(M);}else{M.e.push(M.v);
return(_3799)(M);}};

var _3781=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3776=function(M){if(--M.cbt<0){throw _3776;}
if(M.a===0){return(_3773)(M);}else{M.e.push(M.v);
return(_3773)(M);}};

var _3763=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3167=function(M){if(--M.cbt<0){throw _3167;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:252:4 whalesong/lang/private/list.rkt 252 4 8466 168)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym30884;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3686,M.p));
return((M.p).label)(M);};

var _3162=function(M){if(--M.cbt<0){throw _3162;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:239:4 whalesong/lang/private/list.rkt 239 4 8019 146)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym30885;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3658,M.p));
return((M.p).label)(M);};

var _3152=function(M){if(--M.cbt<0){throw _3152;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:186:13 whalesong/lang/private/list.rkt 186 13 5830 38)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][49];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3135=function(M){if(--M.cbt<0){throw _3135;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:98:4 whalesong/lang/private/list.rkt 98 4 2860 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym30880;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3127=function(M){if(--M.cbt<0){throw _3127;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:68:4 whalesong/lang/private/list.rkt 68 4 1948 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym30883;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4075=function(M){return(_3219)(M);};

var _4073=RT.si_context_expected(2);

var _4069=function(M){if(--M.cbt<0){throw _4069;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("assf", prefix[selfMod.getPrefixOffset("assf")]);extNs.set("assf", prefix[selfMod.getPrefixOffset("assf")]);ns.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);extNs.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);ns.set("assq", prefix[selfMod.getPrefixOffset("assq")]);extNs.set("assq", prefix[selfMod.getPrefixOffset("assq")]);ns.set("assv", prefix[selfMod.getPrefixOffset("assv")]);extNs.set("assv", prefix[selfMod.getPrefixOffset("assv")]);ns.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);extNs.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);ns.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);extNs.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);ns.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);extNs.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);ns.set("compose", prefix[selfMod.getPrefixOffset("compose")]);extNs.set("compose", prefix[selfMod.getPrefixOffset("compose")]);ns.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);extNs.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);ns.set("filter", prefix[selfMod.getPrefixOffset("filter")]);extNs.set("filter", prefix[selfMod.getPrefixOffset("filter")]);ns.set("findf", prefix[selfMod.getPrefixOffset("findf")]);extNs.set("findf", prefix[selfMod.getPrefixOffset("findf")]);ns.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);extNs.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);ns.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);extNs.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);ns.set("memf", prefix[selfMod.getPrefixOffset("memf")]);extNs.set("memf", prefix[selfMod.getPrefixOffset("memf")]);ns.set("remove", prefix[selfMod.getPrefixOffset("remove")]);extNs.set("remove", prefix[selfMod.getPrefixOffset("remove")]);ns.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);extNs.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);ns.set("remq", prefix[selfMod.getPrefixOffset("remq")]);extNs.set("remq", prefix[selfMod.getPrefixOffset("remq")]);ns.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);extNs.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);ns.set("remv", prefix[selfMod.getPrefixOffset("remv")]);extNs.set("remv", prefix[selfMod.getPrefixOffset("remv")]);ns.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);extNs.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);}(M.modules["whalesong/lang/private/list.rkt"],M.modules["whalesong/lang/private/list.rkt"].getExports(),M.modules["whalesong/lang/private/list.rkt"].getExternalExports(),M.modules["whalesong/lang/private/list.rkt"].prefix));
return(M.p)(M);};

var _4067=function(M){if(--M.cbt<0){throw _4067;}
M.c.push(new RT.CallFrame(_4069,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3210,1,[M.e[M.e.length-6]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_3211,2,[M.e[M.e.length-6]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_3212_c;
M.e[M.e.length-4]=new RT.Closure(_3213,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_3209,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose1");
M.e.length-=4;
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3215,1,[M.e[M.e.length-7]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_3216,2,[M.e[M.e.length-7]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_3217_c;
M.e[M.e.length-4]=new RT.Closure(_3218,(RT.makeArityAtLeast(1)),[M.e[M.e.length-7]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_3214,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose");
M.e.length-=4;
M.e.push(void(0),void(0));
M.p=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4073,M.p));
return((M.p).label)(M);};

var _4065=function(M){if(--M.cbt<0){throw _4065;}
M.c.push(new RT.CallFrame(_4067,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3208,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4063=function(M){if(--M.cbt<0){throw _4063;}
M.c.push(new RT.CallFrame(_4065,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3197,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4061=function(M){if(--M.cbt<0){throw _4061;}
M.c.push(new RT.CallFrame(_4063,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3193,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4059=function(M){if(--M.cbt<0){throw _4059;}
M.c.push(new RT.CallFrame(_4061,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3187,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4057=function(M){if(--M.cbt<0){throw _4057;}
M.c.push(new RT.CallFrame(_4059,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3186,2,[M.e[M.e.length-1]],"pipeline*");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4055=function(M){if(--M.cbt<0){throw _4055;}
M.c.push(new RT.CallFrame(_4057,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3181,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4053=function(M){if(--M.cbt<0){throw _4053;}
M.c.push(new RT.CallFrame(_4055,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3178,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4051=function(M){if(--M.cbt<0){throw _4051;}
M.c.push(new RT.CallFrame(_4053,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3177,2,[M.e[M.e.length-1]],"build-list");
M.e[M.e.length-1][40]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4049=function(M){if(--M.cbt<0){throw _4049;}
M.c.push(new RT.CallFrame(_4051,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3176,3,[M.e[M.e.length-1]],"recr");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4047=function(M){if(--M.cbt<0){throw _4047;}
M.c.push(new RT.CallFrame(_4049,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3175,2,[M.e[M.e.length-1]],"build-string");
M.e[M.e.length-1][37]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4045=function(M){if(--M.cbt<0){throw _4045;}
M.c.push(new RT.CallFrame(_4047,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3174,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4043=function(M){if(--M.cbt<0){throw _4043;}
M.c.push(new RT.CallFrame(_4045,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3173,2,[M.e[M.e.length-1]],"build-vector");
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4041=function(M){if(--M.cbt<0){throw _4041;}
M.c.push(new RT.CallFrame(_4043,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3172,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4039=function(M){if(--M.cbt<0){throw _4039;}
M.c.push(new RT.CallFrame(_4041,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3171,2,[M.e[M.e.length-1]],"filter");
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4037=function(M){if(--M.cbt<0){throw _4037;}
M.c.push(new RT.CallFrame(_4039,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3170,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4035=function(M){if(--M.cbt<0){throw _4035;}
M.c.push(new RT.CallFrame(_4037,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3167,3,[M.e[M.e.length-3]],"...private/list.rkt:252:4");
M.e[M.e.length-2]=new RT.Closure(_3169,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:258:4");
M.v=new RT.Closure(_3166,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldr");
M.e.length-=2;
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4033=function(M){if(--M.cbt<0){throw _4033;}
M.c.push(new RT.CallFrame(_4035,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3165,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4031=function(M){if(--M.cbt<0){throw _4031;}
M.c.push(new RT.CallFrame(_4033,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3162,3,[M.e[M.e.length-3]],"...private/list.rkt:239:4");
M.e[M.e.length-2]=new RT.Closure(_3164,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:243:4");
M.v=new RT.Closure(_3161,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldl");
M.e.length-=2;
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4029=function(M){if(--M.cbt<0){throw _4029;}
M.c.push(new RT.CallFrame(_4031,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3160,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4027=function(M){if(--M.cbt<0){throw _4027;}
M.c.push(new RT.CallFrame(_4029,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3159,5,[M.e[M.e.length-1]],"check-fold");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4025=function(M){if(--M.cbt<0){throw _4025;}
M.c.push(new RT.CallFrame(_4027,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3158,7,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4023=function(M){if(--M.cbt<0){throw _4023;}
M.c.push(new RT.CallFrame(_4025,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_3156_c;
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4021=function(M){if(--M.cbt<0){throw _4021;}
M.c.push(new RT.CallFrame(_4023,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3155,2,[M.e[M.e.length-1]],"assf");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4019=function(M){if(--M.cbt<0){throw _4019;}
M.c.push(new RT.CallFrame(_4021,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3154,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4017=function(M){if(--M.cbt<0){throw _4017;}
M.c.push(new RT.CallFrame(_4019,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3152,2,[M.e[M.e.length-3]],"...private/list.rkt:186:13");
M.e[M.e.length-2]=new RT.Closure(_3153,3,[M.e[M.e.length-3]],"...private/list.rkt:187:13");
M.v=new RT.Closure(_3151,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"assoc");
M.e.length-=2;
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4015=function(M){if(--M.cbt<0){throw _4015;}
M.c.push(new RT.CallFrame(_4017,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3150,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4013=function(M){if(--M.cbt<0){throw _4013;}
M.c.push(new RT.CallFrame(_4015,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3149,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][49]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4011=function(M){if(--M.cbt<0){throw _4011;}
M.c.push(new RT.CallFrame(_4013,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3148,2,[M.e[M.e.length-1]],"assv");
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4009=function(M){if(--M.cbt<0){throw _4009;}
M.c.push(new RT.CallFrame(_4011,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3147,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4007=function(M){if(--M.cbt<0){throw _4007;}
M.c.push(new RT.CallFrame(_4009,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3146,2,[M.e[M.e.length-1]],"assq");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4005=function(M){if(--M.cbt<0){throw _4005;}
M.c.push(new RT.CallFrame(_4007,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3145,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4003=function(M){if(--M.cbt<0){throw _4003;}
M.c.push(new RT.CallFrame(_4005,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3144,3,[M.e[M.e.length-1]],"bad-item");
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4001=function(M){if(--M.cbt<0){throw _4001;}
M.c.push(new RT.CallFrame(_4003,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3143,2,[M.e[M.e.length-1]],"bad-list");
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3999=function(M){if(--M.cbt<0){throw _3999;}
M.c.push(new RT.CallFrame(_4001,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3142,2,[M.e[M.e.length-1]],"findf");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3997=function(M){if(--M.cbt<0){throw _3997;}
M.c.push(new RT.CallFrame(_3999,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3141,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3995=function(M){if(--M.cbt<0){throw _3995;}
M.c.push(new RT.CallFrame(_3997,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3140,2,[M.e[M.e.length-1]],"memf");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3993=function(M){if(--M.cbt<0){throw _3993;}
M.c.push(new RT.CallFrame(_3995,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3139,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3991=function(M){if(--M.cbt<0){throw _3991;}
M.c.push(new RT.CallFrame(_3993,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3138,2,[M.e[M.e.length-1]],"remv*");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3989=function(M){if(--M.cbt<0){throw _3989;}
M.c.push(new RT.CallFrame(_3991,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3137,2,[M.e[M.e.length-1]],"remq*");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3987=function(M){if(--M.cbt<0){throw _3987;}
M.c.push(new RT.CallFrame(_3989,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3135,2,[M.e[M.e.length-3]],"...private/list.rkt:98:4");
M.e[M.e.length-2]=new RT.Closure(_3136,3,[M.e[M.e.length-3]],"...private/list.rkt:99:4");
M.v=new RT.Closure(_3134,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove*");
M.e.length-=2;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3985=function(M){if(--M.cbt<0){throw _3985;}
M.c.push(new RT.CallFrame(_3987,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3131,4,[M.e[M.e.length-1]],"do-remove*");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3983=function(M){if(--M.cbt<0){throw _3983;}
M.c.push(new RT.CallFrame(_3985,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3130,2,[M.e[M.e.length-1]],"remv");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3981=function(M){if(--M.cbt<0){throw _3981;}
M.c.push(new RT.CallFrame(_3983,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3129,2,[M.e[M.e.length-1]],"remq");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3979=function(M){if(--M.cbt<0){throw _3979;}
M.c.push(new RT.CallFrame(_3981,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3127,2,[M.e[M.e.length-3]],"...private/list.rkt:68:4");
M.e[M.e.length-2]=new RT.Closure(_3128,3,[M.e[M.e.length-3]],"...private/list.rkt:69:4");
M.v=new RT.Closure(_3126,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove");
M.e.length-=2;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3221=function(M){if(--M.cbt<0){throw _3221;}
};

var _3940=function(M){if(--M.cbt<0){throw _3940;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3934=function(M){if(--M.cbt<0){throw _3934;}
return(_3932)(M);};

var _3927=function(M){if(--M.cbt<0){throw _3927;}
M.a=1;
return(_3928)(M);};

var _3920=function(M){if(--M.cbt<0){throw _3920;}
M.a=1;
return(_3921)(M);};

var _3913=function(M){if(--M.cbt<0){throw _3913;}
M.a=1;
return(_3914)(M);};

var _3903=function(M){if(--M.cbt<0){throw _3903;}
M.a=1;
return(_3904)(M);};

var _3897=function(M){if(--M.cbt<0){throw _3897;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3893=function(M){if(--M.cbt<0){throw _3893;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3889=function(M){if(--M.cbt<0){throw _3889;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3882=function(M){if(--M.cbt<0){throw _3882;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3867=function(M){if(--M.cbt<0){throw _3867;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3196_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_3196)(M);};

var _3856=function(M){if(--M.cbt<0){throw _3856;}
M.e[M.e.length-1]=M.v;
return(_3854)(M);};

var _3851=function(M){if(--M.cbt<0){throw _3851;}
return(_3849)(M);};

var _3845=function(M){if(--M.cbt<0){throw _3845;}
return(_3843)(M);};

var _3839=function(M){if(--M.cbt<0){throw _3839;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3835=function(M){if(--M.cbt<0){throw _3835;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3831=function(M){if(--M.cbt<0){throw _3831;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3824=function(M){if(--M.cbt<0){throw _3824;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3808=function(M){if(--M.cbt<0){throw _3808;}
M.a=1;
return(_3809)(M);};

var _3801=function(M){if(--M.cbt<0){throw _3801;}
M.a=1;
return(_3802)(M);};

var _3795=function(M){if(--M.cbt<0){throw _3795;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3791=function(M){if(--M.cbt<0){throw _3791;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3775=function(M){if(--M.cbt<0){throw _3775;}
M.a=1;
return(_3776)(M);};

var _3769=function(M){if(--M.cbt<0){throw _3769;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3752=function(M){if(--M.cbt<0){throw _3752;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3750=function(M){if(--M.cbt<0){throw _3750;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][58];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.v=RT.checkedSub1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3752,M.p));
return((M.p).label)(M);};

var _3735=function(M){if(--M.cbt<0){throw _3735;}
M.e[M.e.length-3]=M.v;
M.v=M.primitives["string-set!"]._i(M);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][57];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3720=function(M){if(--M.cbt<0){throw _3720;}
M.e[M.e.length-3]=M.v;
M.v=RT.checkedVectorSet(M, M.e[M.e.length-1],M.e[M.e.length-2],M.e[M.e.length-3]);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][56];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3706=function(M){if(--M.cbt<0){throw _3706;}
if(M.v===false){return(_3703)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3704)(M);}};

var _3698=function(M){if(--M.cbt<0){throw _3698;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3694=function(M){if(--M.cbt<0){throw _3694;}
return(_3692)(M);};

var _3686=function(M){if(--M.cbt<0){throw _3686;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3168_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3168)(M);};

var _3680=function(M){if(--M.cbt<0){throw _3680;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3678=function(M){if(--M.cbt<0){throw _3678;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3680,M.p));
return((M.p).label)(M);};

var _3676=function(M){if(--M.cbt<0){throw _3676;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3678,M.p));
return((M.p).label)(M);};

var _3670=function(M){if(--M.cbt<0){throw _3670;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3665=function(M){if(--M.cbt<0){throw _3665;}
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3163_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_3163)(M);};

var _3658=function(M){if(--M.cbt<0){throw _3658;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3163_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3163)(M);};

var _3652=function(M){if(--M.cbt<0){throw _3652;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3650=function(M){if(--M.cbt<0){throw _3650;}
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3652,M.p));
return((M.p).label)(M);};

var _3648=function(M){if(--M.cbt<0){throw _3648;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3650,M.p));
return((M.p).label)(M);};

var _3644=function(M){if(--M.cbt<0){throw _3644;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-7];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=10;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3642=function(M){if(--M.cbt<0){throw _3642;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3639)(M);}else{M.v=RT.VOID;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3638=function(M){if(--M.cbt<0){throw _3638;}
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3642,M.p));
return((M.p).label)(M);};

var _3635=function(M){if(--M.cbt<0){throw _3635;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][52];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e[M.e.length-6]=M.e[M.e.length-14];
M.e[M.e.length-7]=3;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3638,M.p));
return((M.p).label)(M);};

var _3629=function(M){if(--M.cbt<0){throw _3629;}
return(_3627)(M);};

var _3625=function(M){if(--M.cbt<0){throw _3625;}
return(_3623)(M);};

var _3619=function(M){if(--M.cbt<0){throw _3619;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_3616)(M);}else{M.v=RT.VOID;
return(_3617)(M);}};

var _3615=function(M){if(--M.cbt<0){throw _3615;}
return(_3613)(M);};

var _3609=function(M){if(--M.cbt<0){throw _3609;}
M.e[M.e.length-2]=M.v;
return(_3607)(M);};

var _3606=function(M){if(--M.cbt<0){throw _3606;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3157_c;
M.a=3;
M.c.push(new RT.CallFrame(_3609,M.p));
return(_3157)(M);};

var _3574=function(M){if(--M.cbt<0){throw _3574;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3576)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3571=function(M){if(--M.cbt<0){throw _3571;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3574,M.p));
return((M.p).label)(M);};

var _3569=function(M){if(--M.cbt<0){throw _3569;}
M.e.pop();
if(M.v===false){return(_3563)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3566=function(M){if(--M.cbt<0){throw _3566;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3569,M.p));
return((M.p).label)(M);};

var _3559=function(M){if(--M.cbt<0){throw _3559;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3561)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][22][0][M.e[M.e.length-6][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3566,M.p));
return((M.p).label)(M);}};

var _3554=function(M){if(--M.cbt<0){throw _3554;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3556)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3559,M.p));
return((M.p).label)(M);}};

var _3552=function(M){if(--M.cbt<0){throw _3552;}
M.e.pop();
if(M.v===false){return(_3546)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3549=function(M){if(--M.cbt<0){throw _3549;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3552,M.p));
return((M.p).label)(M);};

var _3542=function(M){if(--M.cbt<0){throw _3542;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3544)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][22][0][M.e[M.e.length-4][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3549,M.p));
return((M.p).label)(M);}};

var _3509=function(M){if(--M.cbt<0){throw _3509;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3511)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3506=function(M){if(--M.cbt<0){throw _3506;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3509,M.p));
return((M.p).label)(M);};

var _3504=function(M){if(--M.cbt<0){throw _3504;}
if(M.v===false){return(_3499)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3502=function(M){if(--M.cbt<0){throw _3502;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3504,M.p));
return((M.p).label)(M);};

var _3495=function(M){if(--M.cbt<0){throw _3495;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3497)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3502,M.p));
return((M.p).label)(M);}};

var _3490=function(M){if(--M.cbt<0){throw _3490;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3492)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3495,M.p));
return((M.p).label)(M);}};

var _3488=function(M){if(--M.cbt<0){throw _3488;}
if(M.v===false){return(_3483)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3486=function(M){if(--M.cbt<0){throw _3486;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3488,M.p));
return((M.p).label)(M);};

var _3479=function(M){if(--M.cbt<0){throw _3479;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3481)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3486,M.p));
return((M.p).label)(M);}};

var _3456=function(M){if(--M.cbt<0){throw _3456;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3458)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3453=function(M){if(--M.cbt<0){throw _3453;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3456,M.p));
return((M.p).label)(M);};

var _3451=function(M){if(--M.cbt<0){throw _3451;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3448)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3444=function(M){if(--M.cbt<0){throw _3444;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3446)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3451,M.p));
return((M.p).label)(M);}};

var _3439=function(M){if(--M.cbt<0){throw _3439;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3441)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3444,M.p));
return((M.p).label)(M);}};

var _3437=function(M){if(--M.cbt<0){throw _3437;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3434)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3430=function(M){if(--M.cbt<0){throw _3430;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3432)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3437,M.p));
return((M.p).label)(M);}};

var _3405=function(M){if(--M.cbt<0){throw _3405;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3407)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym30874;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3402=function(M){if(--M.cbt<0){throw _3402;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3405,M.p));
return((M.p).label)(M);};

var _3400=function(M){if(--M.cbt<0){throw _3400;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3397)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3393=function(M){if(--M.cbt<0){throw _3393;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3395)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3400,M.p));
return((M.p).label)(M);}};

var _3388=function(M){if(--M.cbt<0){throw _3388;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3390)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3393,M.p));
return((M.p).label)(M);}};

var _3386=function(M){if(--M.cbt<0){throw _3386;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3383)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3379=function(M){if(--M.cbt<0){throw _3379;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3381)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3386,M.p));
return((M.p).label)(M);}};

var _3354=function(M){if(--M.cbt<0){throw _3354;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3356)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym30875;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3351=function(M){if(--M.cbt<0){throw _3351;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3354,M.p));
return((M.p).label)(M);};

var _3349=function(M){if(--M.cbt<0){throw _3349;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_3346)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3342=function(M){if(--M.cbt<0){throw _3342;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3344)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3349,M.p));
return((M.p).label)(M);}};

var _3337=function(M){if(--M.cbt<0){throw _3337;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3339)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3342,M.p));
return((M.p).label)(M);}};

var _3335=function(M){if(--M.cbt<0){throw _3335;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_3332)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3328=function(M){if(--M.cbt<0){throw _3328;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3330)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3335,M.p));
return((M.p).label)(M);}};

var _3316=function(M){if(--M.cbt<0){throw _3316;}
if(M.v===false){return(_3313)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3299=function(M){if(--M.cbt<0){throw _3299;}
if(M.v===false){return(_3296)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3271=function(M){if(--M.cbt<0){throw _3271;}
if(M.v===false){return(_3268)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_3132_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_3132)(M);}};

var _3267=function(M){if(--M.cbt<0){throw _3267;}
M.e[M.e.length-2]=M.v;
return(_3265)(M);};

var _3235=function(M){if(--M.cbt<0){throw _3235;}
M.e[M.e.length-2]=M.v;
return(_3233)(M);};

var _3232=function(M){if(--M.cbt<0){throw _3232;}
if(M.v===false){return(_3229)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4072=function(M){if(--M.cbt<0){throw _4072;}
if((M.a-2)===0){return(_4071)(M);}else{RT.si_context_expected(2)(M);
}};

var _4068=function(M){if(--M.cbt<0){throw _4068;}
M.e.length-=(M.a-1);
return(_4069)(M);};

var _4066=function(M){if(--M.cbt<0){throw _4066;}
M.e.length-=(M.a-1);
return(_4067)(M);};

var _4064=function(M){if(--M.cbt<0){throw _4064;}
M.e.length-=(M.a-1);
return(_4065)(M);};

var _4062=function(M){if(--M.cbt<0){throw _4062;}
M.e.length-=(M.a-1);
return(_4063)(M);};

var _4060=function(M){if(--M.cbt<0){throw _4060;}
M.e.length-=(M.a-1);
return(_4061)(M);};

var _4058=function(M){if(--M.cbt<0){throw _4058;}
M.e.length-=(M.a-1);
return(_4059)(M);};

var _4056=function(M){if(--M.cbt<0){throw _4056;}
M.e.length-=(M.a-1);
return(_4057)(M);};

var _4054=function(M){if(--M.cbt<0){throw _4054;}
M.e.length-=(M.a-1);
return(_4055)(M);};

var _4052=function(M){if(--M.cbt<0){throw _4052;}
M.e.length-=(M.a-1);
return(_4053)(M);};

var _4050=function(M){if(--M.cbt<0){throw _4050;}
M.e.length-=(M.a-1);
return(_4051)(M);};

var _4048=function(M){if(--M.cbt<0){throw _4048;}
M.e.length-=(M.a-1);
return(_4049)(M);};

var _4046=function(M){if(--M.cbt<0){throw _4046;}
M.e.length-=(M.a-1);
return(_4047)(M);};

var _4044=function(M){if(--M.cbt<0){throw _4044;}
M.e.length-=(M.a-1);
return(_4045)(M);};

var _4042=function(M){if(--M.cbt<0){throw _4042;}
M.e.length-=(M.a-1);
return(_4043)(M);};

var _4040=function(M){if(--M.cbt<0){throw _4040;}
M.e.length-=(M.a-1);
return(_4041)(M);};

var _4038=function(M){if(--M.cbt<0){throw _4038;}
M.e.length-=(M.a-1);
return(_4039)(M);};

var _4036=function(M){if(--M.cbt<0){throw _4036;}
M.e.length-=(M.a-1);
return(_4037)(M);};

var _4034=function(M){if(--M.cbt<0){throw _4034;}
M.e.length-=(M.a-1);
return(_4035)(M);};

var _4032=function(M){if(--M.cbt<0){throw _4032;}
M.e.length-=(M.a-1);
return(_4033)(M);};

var _4030=function(M){if(--M.cbt<0){throw _4030;}
M.e.length-=(M.a-1);
return(_4031)(M);};

var _4028=function(M){if(--M.cbt<0){throw _4028;}
M.e.length-=(M.a-1);
return(_4029)(M);};

var _4026=function(M){if(--M.cbt<0){throw _4026;}
M.e.length-=(M.a-1);
return(_4027)(M);};

var _4024=function(M){if(--M.cbt<0){throw _4024;}
M.e.length-=(M.a-1);
return(_4025)(M);};

var _4022=function(M){if(--M.cbt<0){throw _4022;}
M.e.length-=(M.a-1);
return(_4023)(M);};

var _4020=function(M){if(--M.cbt<0){throw _4020;}
M.e.length-=(M.a-1);
return(_4021)(M);};

var _4018=function(M){if(--M.cbt<0){throw _4018;}
M.e.length-=(M.a-1);
return(_4019)(M);};

var _4016=function(M){if(--M.cbt<0){throw _4016;}
M.e.length-=(M.a-1);
return(_4017)(M);};

var _4014=function(M){if(--M.cbt<0){throw _4014;}
M.e.length-=(M.a-1);
return(_4015)(M);};

var _4012=function(M){if(--M.cbt<0){throw _4012;}
M.e.length-=(M.a-1);
return(_4013)(M);};

var _4010=function(M){if(--M.cbt<0){throw _4010;}
M.e.length-=(M.a-1);
return(_4011)(M);};

var _4008=function(M){if(--M.cbt<0){throw _4008;}
M.e.length-=(M.a-1);
return(_4009)(M);};

var _4006=function(M){if(--M.cbt<0){throw _4006;}
M.e.length-=(M.a-1);
return(_4007)(M);};

var _4004=function(M){if(--M.cbt<0){throw _4004;}
M.e.length-=(M.a-1);
return(_4005)(M);};

var _4002=function(M){if(--M.cbt<0){throw _4002;}
M.e.length-=(M.a-1);
return(_4003)(M);};

var _4000=function(M){if(--M.cbt<0){throw _4000;}
M.e.length-=(M.a-1);
return(_4001)(M);};

var _3998=function(M){if(--M.cbt<0){throw _3998;}
M.e.length-=(M.a-1);
return(_3999)(M);};

var _3996=function(M){if(--M.cbt<0){throw _3996;}
M.e.length-=(M.a-1);
return(_3997)(M);};

var _3994=function(M){if(--M.cbt<0){throw _3994;}
M.e.length-=(M.a-1);
return(_3995)(M);};

var _3992=function(M){if(--M.cbt<0){throw _3992;}
M.e.length-=(M.a-1);
return(_3993)(M);};

var _3990=function(M){if(--M.cbt<0){throw _3990;}
M.e.length-=(M.a-1);
return(_3991)(M);};

var _3988=function(M){if(--M.cbt<0){throw _3988;}
M.e.length-=(M.a-1);
return(_3989)(M);};

var _3986=function(M){if(--M.cbt<0){throw _3986;}
M.e.length-=(M.a-1);
return(_3987)(M);};

var _3984=function(M){if(--M.cbt<0){throw _3984;}
M.e.length-=(M.a-1);
return(_3985)(M);};

var _3982=function(M){if(--M.cbt<0){throw _3982;}
M.e.length-=(M.a-1);
return(_3983)(M);};

var _3980=function(M){if(--M.cbt<0){throw _3980;}
M.e.length-=(M.a-1);
return(_3981)(M);};

var _3978=function(M){if(--M.cbt<0){throw _3978;}
M.e.length-=(M.a-1);
return(_3979)(M);};

var _3976=function(M){if(--M.cbt<0){throw _3976;}
M.e.length-=(M.a-1);
return(_3977)(M);};

var _3977=function(M){if(--M.cbt<0){throw _3977;}
M.e.push([M.params.currentNamespace.get("do-remove")||M.primitives["do-remove"],M.primitives["raise-type-error"],M.params.currentNamespace.get("remove")||M.primitives["remove"],M.primitives["equal?"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.params.currentNamespace.get("remq")||M.primitives["remq"],M.params.currentNamespace.get("remv")||M.primitives["remv"],M.primitives["eqv?"],M.params.currentNamespace.get("do-remove*")||M.primitives["do-remove*"],M.params.currentNamespace.get("remove*")||M.primitives["remove*"],M.params.currentNamespace.get("remq*")||M.primitives["remq*"],M.params.currentNamespace.get("remv*")||M.primitives["remv*"],M.params.currentNamespace.get("memf")||M.primitives["memf"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("findf")||M.primitives["findf"],M.params.currentNamespace.get("bad-list")||M.primitives["bad-list"],M.params.currentNamespace.get("bad-item")||M.primitives["bad-item"],M.params.currentNamespace.get("assq")||M.primitives["assq"],M.params.currentNamespace.get("assv")||M.primitives["assv"],M.params.currentNamespace.get("assoc")||M.primitives["assoc"],M.params.currentNamespace.get("assf")||M.primitives["assf"],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-car1.1"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-car1.1"}],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-cdr2.3"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-cdr2.3"}],M.params.currentNamespace.get("mapadd")||M.primitives["mapadd"],M.params.currentNamespace.get("check-fold")||M.primitives["check-fold"],M.primitives["length"],M.primitives["format"],M.params.currentNamespace.get("foldl")||M.primitives["foldl"],M.primitives["map"],M.params.currentNamespace.get("foldr")||M.primitives["foldr"],M.params.currentNamespace.get("filter")||M.primitives["filter"],M.primitives["reverse"],M.params.currentNamespace.get("build-vector")||M.primitives["build-vector"],M.primitives["exact-nonnegative-integer?"],M.primitives["make-vector"],M.primitives["vector-set!"],M.params.currentNamespace.get("build-string")||M.primitives["build-string"],M.primitives["make-string"],M.primitives["string-set!"],M.params.currentNamespace.get("build-list")||M.primitives["build-list"],M.primitives["zero?"],M.params.currentNamespace.get("compose1")||M.primitives["compose1"],M.params.currentNamespace.get("compose")||M.primitives["compose"],M.primitives["procedure-arity"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["do-remove","raise-type-error","remove","equal?","procedure?","procedure-arity-includes?","remq","remv","eqv?","do-remove*","remove*","remq*","remv*","memf","raise-mismatch-error","findf","bad-list","bad-item","assq","assv","assoc","assf","unsafe-car1.1","unsafe-cdr2.3","mapadd","check-fold","length","format","foldl","map","foldr","filter","reverse","build-vector","exact-nonnegative-integer?","make-vector","vector-set!","build-string","make-string","string-set!","build-list","zero?","compose1","compose","procedure-arity",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/private/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3979,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3124,4,[M.e[M.e.length-1]],"do-remove");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3975=function(M){if(M.modules["whalesong/lang/unsafe/ops.rkt"].isInvoked!==false){return(_3977)(M);}else{M.c.push(new RT.CallFrame(_3977,M.p));
return(M.modules["whalesong/lang/unsafe/ops.rkt"].label)(M);}};

var _3973=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3974=function(M){M.modules["whalesong/lang/private/list.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/unsafe/ops.rkt"]!==void(0)&&M.modules["whalesong/lang/unsafe/ops.rkt"]!==undefined)!==false){return(_3975)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/unsafe/ops.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_3975);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_3975)(M);}};

var _3220=function(M){if(--M.cbt<0){throw _3220;}
M.e.length-=(M.a-1);
return(_3221)(M);};

var _3968=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][64];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3967=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30888;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3968)(M);};

var _3966=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3967)(M);}else{M.v=RT.VOID;
return(_3968)(M);}};

var _3965=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30888;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3966)(M);};

var _3963=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30888;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3218=function(M){if(--M.cbt<0){throw _3218;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3217=function(M){if(--M.cbt<0){throw _3217;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3961=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_3215)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_3218)(M);}};

var _3216=function(M){if(--M.cbt<0){throw _3216;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3965)(M);}else{M.v=RT.VOID;
return(_3966)(M);}};

var _3960=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3961)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3217)(M);}};

var _3959=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3960)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3216)(M);}};

var _3214=function(M){if(--M.cbt<0){throw _3214;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3959)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3215)(M);}};

var _3954=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][62];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3953=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30889;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=4;
return(_3954)(M);};

var _3952=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3953)(M);}else{M.v=RT.VOID;
return(_3954)(M);}};

var _3951=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30889;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3952)(M);};

var _3950=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3951)(M);}else{M.v=RT.VOID;
return(_3952)(M);}};

var _3949=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30889;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3950)(M);};

var _3947=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym30889;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3213=function(M){if(--M.cbt<0){throw _3213;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3212=function(M){if(--M.cbt<0){throw _3212;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3945=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_3210)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_3213)(M);}};

var _3211=function(M){if(--M.cbt<0){throw _3211;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3949)(M);}else{M.v=RT.VOID;
return(_3950)(M);}};

var _3944=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3945)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3212)(M);}};

var _3943=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3944)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3211)(M);}};

var _3209=function(M){if(--M.cbt<0){throw _3209;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3943)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3210)(M);}};


var _3935=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][64];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][61];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3940,M.p));
return((M.p).label)(M);};

var _3933=function(M){if(--M.cbt<0){throw _3933;}
M.e.length-=(M.a-1);
return(_3932)(M);};

var _3932=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3935)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3931=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym30888;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3934,M.p));
return((M.p).label)(M);};

var _3208=function(M){if(--M.cbt<0){throw _3208;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3931)(M);}else{M.v=RT.VOID;
return(_3932)(M);}};

var _3925=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3918=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+4),4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3911=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3908=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3205)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3207)(M);}};

var _3907=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3908)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3206)(M);}};

var _3901=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _3886=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3200)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3202)(M);}};

var _3885=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3886)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3201)(M);}};


var _3204=function(M){if(--M.cbt<0){throw _3204;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3907)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3205)(M);}};

var _3207=function(M){if(--M.cbt<0){throw _3207;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3927,M.p));
return((M.p).label)(M);};

var _3206=function(M){if(--M.cbt<0){throw _3206;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3920,M.p));
return((M.p).label)(M);};

var _3879=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3203=function(M){if(--M.cbt<0){throw _3203;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3903,M.p));
return((M.p).label)(M);};

var _3878=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3205,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_3206,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_3207,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_3204,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3879)(M);};

var _3199=function(M){if(--M.cbt<0){throw _3199;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3885)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3200)(M);}};

var _3202=function(M){if(--M.cbt<0){throw _3202;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3897,M.p));
return((M.p).label)(M);};

var _3201=function(M){if(--M.cbt<0){throw _3201;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3893,M.p));
return((M.p).label)(M);};

var _3875=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3198=function(M){if(--M.cbt<0){throw _3198;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3882,M.p));
return((M.p).label)(M);};

var _3874=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3200,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_3201,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_3202,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_3199,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3875)(M);};

var _3871=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3878)(M);}else{M.e[M.e.length-1]=new RT.Closure(_3203,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3879)(M);}};

var _3197=function(M){if(--M.cbt<0){throw _3197;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 415 8 15566 144)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3871)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3874)(M);}else{M.e[M.e.length-1]=new RT.Closure(_3198,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3875)(M);}}};


var _3862=function(M){M.e.push(void(0),void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3867,M.p));
return((M.p).label)(M);};

var _3196=function(M){if(--M.cbt<0){throw _3196;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 356 8 12717 138)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3862)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3195=function(M){if(--M.cbt<0){throw _3195;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:355:6 whalesong/lang/private/list.rkt 355 6 12697 159)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_3196_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_3196)(M);};

var _3854=function(M){M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3194=function(M){if(--M.cbt<0){throw _3194;}

//"lambda body for #(struct:LamPositionalName pipeline1 whalesong/lang/private/list.rkt 349 4 12469 388)"

M.v=new RT.Closure(_3195,1,[M.e[M.e.length-2],M.e[M.e.length-1]],"...private/list.rkt:355:6");
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3850=function(M){if(--M.cbt<0){throw _3850;}
M.e.length-=(M.a-1);
return(_3849)(M);};

var _3849=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3848=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym30889;
M.e[M.e.length-3]="procedure (arity 1)";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3851,M.p));
return((M.p).label)(M);};

var _3846=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][62];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_3194_c;
M.a=2;
M.c.push(new RT.CallFrame(_3856,M.p));
return(_3194)(M);};

var _3844=function(M){if(--M.cbt<0){throw _3844;}
M.e.length-=(M.a-1);
return(_3843)(M);};

var _3843=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3846)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3848)(M);}else{M.v=RT.VOID;
return(_3849)(M);}}};

var _3842=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym30889;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3845,M.p));
return((M.p).label)(M);};

var _3193=function(M){if(--M.cbt<0){throw _3193;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3842)(M);}else{M.v=RT.VOID;
return(_3843)(M);}};




var _3828=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3190)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3192)(M);}};

var _3827=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3828)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3191)(M);}};


var _3189=function(M){if(--M.cbt<0){throw _3189;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3827)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3190)(M);}};

var _3192=function(M){if(--M.cbt<0){throw _3192;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3839,M.p));
return((M.p).label)(M);};

var _3191=function(M){if(--M.cbt<0){throw _3191;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3835,M.p));
return((M.p).label)(M);};

var _3821=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3188=function(M){if(--M.cbt<0){throw _3188;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3824,M.p));
return((M.p).label)(M);};

var _3820=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3190,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_3191,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_3192,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_3189,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3821)(M);};

var _3187=function(M){if(--M.cbt<0){throw _3187;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 413 8 15468 43)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3820)(M);}else{M.e[M.e.length-1]=new RT.Closure(_3188,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3821)(M);}};

var _3812=function(M){M.e.push(void(0));
M.e.push(void(0));
M.e[M.e.length-1]=RT.makePair(M.e[M.e.length-4],M.e[M.e.length-5]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3186=function(M){if(--M.cbt<0){throw _3186;}

//"lambda body for #(struct:LamPositionalName pipeline* whalesong/lang/private/list.rkt 360 4 12862 1546)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3812)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][59];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3806=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3799=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3185=function(M){if(--M.cbt<0){throw _3185;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:388:34 whalesong/lang/private/list.rkt 388 34 14329 35)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3808,M.p));
return((M.p).label)(M);};

var _3184=function(M){if(--M.cbt<0){throw _3184;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:387:34 whalesong/lang/private/list.rkt 387 34 14265 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3801,M.p));
return((M.p).label)(M);};

var _3786=function(M){M.e[M.e.length-2]=new RT.Closure(_3185,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:388:34");
return(_3781)(M);};

var _3183=function(M){if(--M.cbt<0){throw _3183;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:385:34 whalesong/lang/private/list.rkt 385 34 14134 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3795,M.p));
return((M.p).label)(M);};

var _3182=function(M){if(--M.cbt<0){throw _3182;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:384:34 whalesong/lang/private/list.rkt 384 34 14075 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3791,M.p));
return((M.p).label)(M);};

var _3784=function(M){M.e[M.e.length-2]=new RT.Closure(_3183,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:385:34");
return(_3781)(M);};

var _3782=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3786)(M);}else{M.e[M.e.length-2]=new RT.Closure(_3184,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:387:34");
return(_3781)(M);}};

var _3779=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][60];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3782)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3784)(M);}else{M.e[M.e.length-2]=new RT.Closure(_3182,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:384:34");
return(_3781)(M);}}};

var _3181=function(M){if(--M.cbt<0){throw _3181;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 378 12 13773 632)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3779)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3773=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3180=function(M){if(--M.cbt<0){throw _3180;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:372:28 whalesong/lang/private/list.rkt 372 28 13436 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3775,M.p));
return((M.p).label)(M);};

var _3179=function(M){if(--M.cbt<0){throw _3179;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:371:28 whalesong/lang/private/list.rkt 371 28 13383 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3769,M.p));
return((M.p).label)(M);};

var _3764=function(M){M.e[M.e.length-2]=new RT.Closure(_3180,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:372:28");
return(_3763)(M);};

var _3761=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][59];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3764)(M);}else{M.e[M.e.length-2]=new RT.Closure(_3179,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:371:28");
return(_3763)(M);}};

var _3178=function(M){if(--M.cbt<0){throw _3178;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 366 10 13169 335)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3761)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3756=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3755=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30890;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3756)(M);};

var _3758=function(M){if(M.v===false){return(_3755)(M);}else{M.v=RT.VOID;
return(_3756)(M);}};

var _3757=function(M){M.v=false;
return(_3758)(M);};

var _3754=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3757)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3758)(M);}};

var _3753=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30890;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3754)(M);};

var _3177=function(M){if(--M.cbt<0){throw _3177;}

//"lambda body for #(struct:LamPositionalName build-list whalesong/lang/private/list.rkt 305 0 10431 412)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3753)(M);}else{M.v=RT.VOID;
return(_3754)(M);}};



var _3747=function(M){M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3750,M.p));
return((M.p).label)(M);};

var _3176=function(M){if(--M.cbt<0){throw _3176;}

//"lambda body for #(struct:LamPositionalName recr whalesong/lang/private/list.rkt 311 2 10711 131)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-4]);
if(M.v===false){return(_3747)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3741=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3740=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30891;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3741)(M);};

var _3743=function(M){if(M.v===false){return(_3740)(M);}else{M.v=RT.VOID;
return(_3741)(M);}};

var _3742=function(M){M.v=false;
return(_3743)(M);};

var _3739=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3742)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3743)(M);}};

var _3738=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30891;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3739)(M);};

var _3175=function(M){if(--M.cbt<0){throw _3175;}

//"lambda body for #(struct:LamPositionalName build-string whalesong/lang/private/list.rkt 293 0 9995 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3738)(M);}else{M.v=RT.VOID;
return(_3739)(M);}};


var _3732=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3735,M.p));
return((M.p).label)(M);};

var _3174=function(M){if(--M.cbt<0){throw _3174;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 300 4 10314 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_3732)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3726=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-vector"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3725=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30892;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3726)(M);};

var _3728=function(M){if(M.v===false){return(_3725)(M);}else{M.v=RT.VOID;
return(_3726)(M);}};

var _3727=function(M){M.v=false;
return(_3728)(M);};

var _3724=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3727)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3728)(M);}};

var _3723=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30892;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3724)(M);};

var _3173=function(M){if(--M.cbt<0){throw _3173;}

//"lambda body for #(struct:LamPositionalName build-vector whalesong/lang/private/list.rkt 281 0 9559 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3723)(M);}else{M.v=RT.VOID;
return(_3724)(M);}};


var _3717=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3720,M.p));
return((M.p).label)(M);};

var _3172=function(M){if(--M.cbt<0){throw _3172;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 288 4 9878 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_3717)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3714=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3713=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30893;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3714)(M);};

var _3710=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3713)(M);}else{M.v=RT.VOID;
return(_3714)(M);}};

var _3709=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30893;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3710)(M);};

var _3712=function(M){if(M.v===false){return(_3709)(M);}else{M.v=RT.VOID;
return(_3710)(M);}};

var _3711=function(M){M.v=false;
return(_3712)(M);};

var _3171=function(M){if(--M.cbt<0){throw _3171;}

//"lambda body for #(struct:LamPositionalName filter whalesong/lang/private/list.rkt 265 0 8885 481)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3711)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3712)(M);}};

var _3704=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3703=function(M){M.v=M.e[M.e.length-7];
return(_3704)(M);};


var _3701=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3706,M.p));
return((M.p).label)(M);};

var _3170=function(M){if(--M.cbt<0){throw _3170;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 273 2 9217 148)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3701)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3697=function(M){if(--M.cbt<0){throw _3697;}
M.e.length-=(M.a-1);
return(_3698)(M);};

var _3692=function(M){M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3690=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3168_c;
M.a=3;
M.c.push(new RT.CallFrame(_3694,M.p));
return(_3168)(M);};

var _3168=function(M){if(--M.cbt<0){throw _3168;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 254 5 8522 111)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3690)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3685=function(M){if(--M.cbt<0){throw _3685;}
M.e.length-=(M.a-1);
return(_3686)(M);};

var _3169=function(M){if(--M.cbt<0){throw _3169;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:258:4 whalesong/lang/private/list.rkt 258 4 8639 242)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym30884;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3698,M.p));
return((M.p).label)(M);};

var _3683=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3167)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3169)(M);}};

var _3166=function(M){if(--M.cbt<0){throw _3166;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3683)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3167)(M);}};




var _3673=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3165=function(M){if(--M.cbt<0){throw _3165;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 260 5 8698 182)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3673)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][54];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3676,M.p));
return((M.p).label)(M);}};

var _3669=function(M){if(--M.cbt<0){throw _3669;}
M.e.length-=(M.a-1);
return(_3670)(M);};


var _3662=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3665,M.p));
return((M.p).label)(M);};

var _3163=function(M){if(--M.cbt<0){throw _3163;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 241 5 8075 89)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3662)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3657=function(M){if(--M.cbt<0){throw _3657;}
M.e.length-=(M.a-1);
return(_3658)(M);};

var _3164=function(M){if(--M.cbt<0){throw _3164;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:243:4 whalesong/lang/private/list.rkt 243 4 8170 259)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym30885;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3670,M.p));
return((M.p).label)(M);};

var _3655=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3162)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3164)(M);}};

var _3161=function(M){if(--M.cbt<0){throw _3161;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3655)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3162)(M);}};




var _3645=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3160=function(M){if(--M.cbt<0){throw _3160;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 245 5 8229 199)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3645)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3648,M.p));
return((M.p).label)(M);}};


var _3639=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0),void(0));
M.e[M.e.length-1]="given procedure does not accept ~a arguments: ";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3644,M.p));
return((M.p).label)(M);};


var _3637=function(M){if(--M.cbt<0){throw _3637;}
M.e.length-=(M.a-1);
return(_3638)(M);};


var _3632=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="given procedure does not accept 2 arguments: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3630=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3635,M.p));
return((M.p).label)(M);};

var _3628=function(M){if(--M.cbt<0){throw _3628;}
M.e.length-=(M.a-1);
return(_3627)(M);};

var _3627=function(M){M.v=(M.e[M.e.length-6]===RT.NULL);
if(M.v===false){return(_3630)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3632)(M);}else{M.v=RT.VOID;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _3626=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=2;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3629,M.p));
return((M.p).label)(M);};

var _3624=function(M){if(--M.cbt<0){throw _3624;}
M.e.length-=(M.a-1);
return(_3623)(M);};

var _3623=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_3626)(M);}else{M.v=RT.VOID;
return(_3627)(M);}};

var _3622=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3625,M.p));
return((M.p).label)(M);};

var _3159=function(M){if(--M.cbt<0){throw _3159;}

//"lambda body for #(struct:LamPositionalName check-fold whalesong/lang/private/list.rkt 213 0 6824 1160)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3622)(M);}else{M.v=RT.VOID;
return(_3623)(M);}};

var _3617=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-6]=M.v;
M.v=RT.checkedAdd1(M, M.e[M.e.length-15]);
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-15,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3616=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]="given list does not have the same size as the first list: ";
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=3;
return(_3617)(M);};


var _3614=function(M){if(--M.cbt<0){throw _3614;}
M.e.length-=(M.a-1);
return(_3613)(M);};

var _3613=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e[M.e.length-1]=M.primitives["length"];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3619,M.p));
return((M.p).label)(M);};

var _3612=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=M.e[M.e.length-16];
M.e[M.e.length-5]=M.e[M.e.length-12];
M.e[M.e.length-6]=M.e[M.e.length-13];
M.e[M.e.length-7]=M.e[M.e.length-14];
M.e[M.e.length-8]=M.e[M.e.length-15];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3615,M.p));
return((M.p).label)(M);};

var _3610=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=RT.isList(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3612)(M);}else{M.v=RT.VOID;
return(_3613)(M);}};

var _3158=function(M){if(--M.cbt<0){throw _3158;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 222 8 7238 446)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_3610)(M);}else{M.v=RT.VOID;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3607=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _3603=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3606,M.p));
return((M.p).label)(M);};

var _3157=function(M){if(--M.cbt<0){throw _3157;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 207 2 6721 99)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3603)(M);}else{M.v=RT.makePair(M.e[M.e.length-2],RT.NULL);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3156=function(M){if(--M.cbt<0){throw _3156;}

//"lambda body for #(struct:LamPositionalName mapadd whalesong/lang/private/list.rkt 206 0 6693 128)"

M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_3157_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_3157)(M);};

var _3595=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][51];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3594=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3595)(M);};

var _3597=function(M){if(M.v===false){return(_3594)(M);}else{M.v=RT.VOID;
return(_3595)(M);}};

var _3596=function(M){M.v=false;
return(_3597)(M);};

var _3155=function(M){if(--M.cbt<0){throw _3155;}

//"lambda body for #(struct:LamPositionalName assf whalesong/lang/private/list.rkt 193 11 6170 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3596)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3597)(M);}};

var _3590=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3584=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3576=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][51];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3563=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3571,M.p));
return((M.p).label)(M);};



var _3561=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3556=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3584)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3546=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3554,M.p));
return((M.p).label)(M);};



var _3544=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym30886;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3539=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3590)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3154=function(M){if(--M.cbt<0){throw _3154;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 196 13 6336 44)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3539)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3542,M.p));
return((M.p).label)(M);}};

var _3534=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][50];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3533=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3534)(M);};

var _3536=function(M){if(M.v===false){return(_3533)(M);}else{M.v=RT.VOID;
return(_3534)(M);}};

var _3535=function(M){M.v=false;
return(_3536)(M);};

var _3153=function(M){if(--M.cbt<0){throw _3153;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:187:13 whalesong/lang/private/list.rkt 187 13 5882 258)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3535)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3536)(M);}};

var _3529=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3152)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3153)(M);}};

var _3151=function(M){if(--M.cbt<0){throw _3151;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3529)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3152)(M);}};

var _3525=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3519=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3511=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][50];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-16,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3499=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3506,M.p));
return((M.p).label)(M);};



var _3497=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3492=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3519)(M);}else{M.v=false;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3483=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3490,M.p));
return((M.p).label)(M);};



var _3481=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3476=function(M){M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_3525)(M);}else{M.v=false;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3150=function(M){if(--M.cbt<0){throw _3150;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 191 14 6106 33)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3476)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3479,M.p));
return((M.p).label)(M);}};

var _3472=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3466=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3458=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][49];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _3448=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3453,M.p));
return((M.p).label)(M);};


var _3446=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3441=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3466)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3434=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3439,M.p));
return((M.p).label)(M);};


var _3432=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym30887;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3427=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3472)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3149=function(M){if(--M.cbt<0){throw _3149;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 186 20 5837 30)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3427)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3430,M.p));
return((M.p).label)(M);}};

var _3148=function(M){if(--M.cbt<0){throw _3148;}

//"lambda body for #(struct:LamPositionalName assv whalesong/lang/private/list.rkt 182 11 5719 55)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3421=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym30874;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3415=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym30874;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

_3615.mvr=_3614;
_3625.mvr=_3624;
_3629.mvr=_3628;
_3638.mvr=_3637;
_3658.mvr=_3657;
_3670.mvr=_3669;
_3686.mvr=_3685;
_3698.mvr=_3697;
_3775.mvr=_3776;
_3801.mvr=_3802;
_3808.mvr=_3809;
_3845.mvr=_3844;
_3851.mvr=_3850;
_3903.mvr=_3904;
_3913.mvr=_3914;
_3920.mvr=_3921;
_3927.mvr=_3928;
_3934.mvr=_3933;
_3977.mvr=_3976;
_3979.mvr=_3978;
_3981.mvr=_3980;
_3983.mvr=_3982;
_3985.mvr=_3984;
_3987.mvr=_3986;
_3989.mvr=_3988;
_3991.mvr=_3990;
_3993.mvr=_3992;
_3995.mvr=_3994;
_3997.mvr=_3996;
_3999.mvr=_3998;
_4001.mvr=_4000;
_4003.mvr=_4002;
_4005.mvr=_4004;
_4007.mvr=_4006;
_4009.mvr=_4008;
_4011.mvr=_4010;
_4013.mvr=_4012;
_4015.mvr=_4014;
_4017.mvr=_4016;
_4019.mvr=_4018;
_4021.mvr=_4020;
_4023.mvr=_4022;
_4025.mvr=_4024;
_4027.mvr=_4026;
_4029.mvr=_4028;
_4031.mvr=_4030;
_4033.mvr=_4032;
_4035.mvr=_4034;
_4037.mvr=_4036;
_4039.mvr=_4038;
_4041.mvr=_4040;
_4043.mvr=_4042;
_4045.mvr=_4044;
_4047.mvr=_4046;
_4049.mvr=_4048;
_4051.mvr=_4050;
_4053.mvr=_4052;
_4055.mvr=_4054;
_4057.mvr=_4056;
_4059.mvr=_4058;
_4061.mvr=_4060;
_4063.mvr=_4062;
_4065.mvr=_4064;
_4067.mvr=_4066;
_4073.mvr=_4072;
_4069.mvr=_4068;
_3221.mvr=_3220;
var sym30876=RT.makeSymbol("findf");
var sym30878=RT.makeSymbol("remv*");
var sym30880=RT.makeSymbol("remove*");
var sym30877=RT.makeSymbol("memf");
var sym30879=RT.makeSymbol("remq*");
var sym30885=RT.makeSymbol("foldl");
var sym30884=RT.makeSymbol("foldr");
var sym30886=RT.makeSymbol("assf");
var sym30887=RT.makeSymbol("assoc");
var sym30889=RT.makeSymbol("compose1");
var sym30888=RT.makeSymbol("compose");
var sym30892=RT.makeSymbol("build-vector");
var sym30891=RT.makeSymbol("build-string");
var sym30890=RT.makeSymbol("build-list");
var sym30893=RT.makeSymbol("filter");
var sym30883=RT.makeSymbol("remove");
var sym30882=RT.makeSymbol("remq");
var sym30881=RT.makeSymbol("remv");
var sym30874=RT.makeSymbol("assv");
var sym30875=RT.makeSymbol("assq");var _3168_c=new RT.Closure(_3168,3,void(0),"loop");
var _3194_c=new RT.Closure(_3194,2,void(0),"pipeline1");
var _3133_c=new RT.Closure(_3133,5,void(0),"loop");
var _3132_c=new RT.Closure(_3132,3,void(0),"rloop");
var _3156_c=new RT.Closure(_3156,3,void(0),"mapadd");
var _3163_c=new RT.Closure(_3163,3,void(0),"loop");
var _3125_c=new RT.Closure(_3125,3,void(0),"loop");
var _3196_c=new RT.Closure(_3196,3,void(0),"loop");
var _3212_c=new RT.Closure(_3212,0,void(0),"...private/list.rkt:403:12");
var _3157_c=new RT.Closure(_3157,3,void(0),"loop");
var _3217_c=new RT.Closure(_3217,0,void(0),"...private/list.rkt:403:12");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4075(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/crused/whalesong/whalesong/lang/unsafe/ops.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/lang/unsafe/ops.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/lang/unsafe/ops.rkt",
        function(M) {
            
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/lang/unsafe/ops.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0)];modrec.prefix.names=["unsafe-car1.1","unsafe-cdr2.3"];modrec.prefix.internalNames=["unsafe-car","unsafe-cdr"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){
EXPORTS['unsafe-car'] =
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-car',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].first;
        });


EXPORTS['unsafe-cdr'] = 
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-cdr',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].rest;
        });
})(M, exports);
             ns.set("unsafe-car1.1",exports["unsafe-car"]);
extNs.set("unsafe-car",exports["unsafe-car"]);
modrec.prefix[0]=exports["unsafe-car"];
ns.set("unsafe-cdr2.3",exports["unsafe-cdr"]);
extNs.set("unsafe-cdr",exports["unsafe-cdr"]);
modrec.prefix[1]=exports["unsafe-cdr"];

             modrec.privateExports = exports;
             return M.c.pop().label(M);
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/with-handlers.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4095=function(M){M.e.push(void(0));
M.e[M.e.length-1]=(RT.testArgument(M,"caarpair",RT.isCaarPair,M.e[M.e.length-4],0,"caar")).first.first;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4100,M.p));
return((M.p).label)(M);};

var _4082=function(M){if(--M.cbt<0){throw _4082;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/with-handlers.rkt 43 2 1236 135)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_4095)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-2]);
M.a=1;
M.v=M.primitives["raise"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4081=function(M){if(--M.cbt<0){throw _4081;}

//"lambda body for #(struct:LamPositionalName call-handled-body whalesong/lang/private/with-handlers.rkt 19 0 505 696)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["call-with-continuation-prompt"];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-5][11];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][2];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4080=function(M){if(--M.cbt<0){throw _4080;}

//"lambda body for #(struct:LamPositionalName ...ith-handlers.rkt:21:3 whalesong/lang/private/with-handlers.rkt 21 3 592 556)"

M.e.push(M.p.closedVals[0]);
M.v=M.primitives["exception-handler-key"];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][10];
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.p=M.e[M.e.length-2];
M.a=0;
RT.checkClosureAndArity(M);
M.e.length-=2;
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4079=function(M){if(--M.cbt<0){throw _4079;}

//"lambda body for #(struct:LamPositionalName ...ith-handlers.rkt:30:7 whalesong/lang/private/with-handlers.rkt 30 7 978 148)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["abort-current-continuation"];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][2];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4087=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym30995;
M.e[M.e.length-2]="exception handler used out of context";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4078=function(M){if(--M.cbt<0){throw _4078;}

//"lambda body for #(struct:LamPositionalName check-with-handlers-in-context whalesong/lang/private/with-handlers.rkt 10 0 239 202)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["continuation-prompt-available?"]._i(M);
M.e.pop();
if(M.v===false){return(_4087)(M);}else{M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4084=function(M){M.c.push(new RT.CallFrame(_4086,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/with-handlers.rkt"]=function(){return new RT.ModuleRecord("with-handlers",_4108);}
return(_4107)(M);};

var _4123=function(M){return(_4084)(M);};

var _4122=function(M){if(--M.cbt<0){throw _4122;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/with-handlers.rkt"],M.modules["whalesong/lang/private/with-handlers.rkt"].getExports(),M.modules["whalesong/lang/private/with-handlers.rkt"].getExternalExports(),M.modules["whalesong/lang/private/with-handlers.rkt"].prefix));
return(M.p)(M);};

var _4120=function(M){if(--M.cbt<0){throw _4120;}
M.c.push(new RT.CallFrame(_4122,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4083,2,[M.e[M.e.length-1]],"select-handler");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4118=function(M){if(--M.cbt<0){throw _4118;}
M.c.push(new RT.CallFrame(_4120,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4082,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4116=function(M){if(--M.cbt<0){throw _4116;}
M.c.push(new RT.CallFrame(_4118,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4081,2,[M.e[M.e.length-1]],"call-handled-body");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4114=function(M){if(--M.cbt<0){throw _4114;}
M.c.push(new RT.CallFrame(_4116,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4080,1,[M.e[M.e.length-1]],"...ith-handlers.rkt:21:3");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4112=function(M){if(--M.cbt<0){throw _4112;}
M.c.push(new RT.CallFrame(_4114,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4079,1,[M.e[M.e.length-1]],"...ith-handlers.rkt:30:7");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4110=function(M){if(--M.cbt<0){throw _4110;}
M.c.push(new RT.CallFrame(_4112,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.a=0;
M.v=M.primitives["make-continuation-prompt-tag"]._i(M);
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4086=function(M){if(--M.cbt<0){throw _4086;}
};

var _4100=function(M){if(--M.cbt<0){throw _4100;}
if(M.v===false){return(_4097)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["cdar"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _4121=function(M){if(--M.cbt<0){throw _4121;}
M.e.length-=(M.a-1);
return(_4122)(M);};

var _4119=function(M){if(--M.cbt<0){throw _4119;}
M.e.length-=(M.a-1);
return(_4120)(M);};

var _4117=function(M){if(--M.cbt<0){throw _4117;}
M.e.length-=(M.a-1);
return(_4118)(M);};

var _4115=function(M){if(--M.cbt<0){throw _4115;}
M.e.length-=(M.a-1);
return(_4116)(M);};

var _4113=function(M){if(--M.cbt<0){throw _4113;}
M.e.length-=(M.a-1);
return(_4114)(M);};

var _4111=function(M){if(--M.cbt<0){throw _4111;}
M.e.length-=(M.a-1);
return(_4112)(M);};

var _4109=function(M){if(--M.cbt<0){throw _4109;}
M.e.length-=(M.a-1);
return(_4110)(M);};

var _4107=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4108=function(M){M.modules["whalesong/lang/private/with-handlers.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("check-with-handlers-in-context")||M.primitives["check-with-handlers-in-context"],M.primitives["error"],M.params.currentNamespace.get("handler-prompt-key")||M.primitives["handler-prompt-key"],M.primitives["make-continuation-prompt-tag"],M.params.currentNamespace.get("call-handled-body")||M.primitives["call-handled-body"],M.primitives["exception-handler-key"],M.params.currentNamespace.get("select-handler")||M.primitives["select-handler"],M.primitives["raise"],M.primitives["caar"],M.primitives["cdar"],false,false,false]);M.e[M.e.length-1].names=["check-with-handlers-in-context","error","handler-prompt-key","make-continuation-prompt-tag","call-handled-body","exception-handler-key","select-handler","raise","caar","cdar",false,false,false];
M.modules["whalesong/lang/private/with-handlers.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4110,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4078,1,[M.e[M.e.length-1]],"check-with-handlers-in-context");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4085=function(M){if(--M.cbt<0){throw _4085;}
M.e.length-=(M.a-1);
return(_4086)(M);};

var _4083=function(M){if(--M.cbt<0){throw _4083;}

//"lambda body for #(struct:LamPositionalName select-handler whalesong/lang/private/with-handlers.rkt 42 0 1205 167)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4097=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


_4110.mvr=_4109;
_4112.mvr=_4111;
_4114.mvr=_4113;
_4116.mvr=_4115;
_4118.mvr=_4117;
_4120.mvr=_4119;
_4122.mvr=_4121;
_4086.mvr=_4085;
var sym30995=RT.makeSymbol("with-handlers");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4123(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/with-handlers.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/with-handlers.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/qq-and-or.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4132=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4133=function(M){M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("qq-append")||M.primitives["qq-append"]]);M.e[M.e.length-1].names=["qq-append"];
M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4135,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_4124_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4126=function(M){if(--M.cbt<0){throw _4126;}
M.e.length-=(M.a-1);
return(_4127)(M);};

var _4128=function(M){M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym30998;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-4];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4124=function(M){if(--M.cbt<0){throw _4124;}

//"lambda body for #(struct:LamPositionalName qq-append whalesong/lang/private/qq-and-or.rkt 149 4 10310 107)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_4128)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["append"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _4125=function(M){M.c.push(new RT.CallFrame(_4127,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/qq-and-or.rkt"]=function(){return new RT.ModuleRecord("qq-and-or",_4133);}
return(_4132)(M);};

var _4136=function(M){return(_4125)(M);};

var _4135=function(M){if(--M.cbt<0){throw _4135;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/qq-and-or.rkt"],M.modules["whalesong/lang/private/qq-and-or.rkt"].getExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].getExternalExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix));
return(M.p)(M);};

var _4127=function(M){if(--M.cbt<0){throw _4127;}
};

var _4134=function(M){if(--M.cbt<0){throw _4134;}
M.e.length-=(M.a-1);
return(_4135)(M);};

_4135.mvr=_4134;
_4127.mvr=_4126;
var sym30998=RT.makeSymbol("unquote-splicing");var _4124_c=new RT.Closure(_4124,2,void(0),"qq-append");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4136(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Applications/Racket v6.1/collects/racket/private/modbeg.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4152=function(M){return(_4138)(M);};

var _4151=function(M){if(--M.cbt<0){throw _4151;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/racket/private/modbeg.rkt"],M.modules["collects/racket/private/modbeg.rkt"].getExports(),M.modules["collects/racket/private/modbeg.rkt"].getExternalExports(),M.modules["collects/racket/private/modbeg.rkt"].prefix));
return(M.p)(M);};

var _4140=function(M){if(--M.cbt<0){throw _4140;}
};

var _4142=function(M){if(--M.cbt<0){throw _4142;}
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4150=function(M){if(--M.cbt<0){throw _4150;}
M.e.length-=(M.a-1);
return(_4151)(M);};

var _4148=function(M){if(--M.cbt<0){throw _4148;}
M.e.length-=(M.a-1);
return(_4149)(M);};

var _4149=function(M){if(--M.cbt<0){throw _4149;}
M.e.push([M.params.currentNamespace.get("print-values")||M.primitives["print-values"]]);M.e[M.e.length-1].names=["print-values"];
M.modules["collects/racket/private/modbeg.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4151,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_4137_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4147=function(M){if(M.modules["collects/syntax/wrap-modbeg.rkt"].isInvoked!==false){return(_4149)(M);}else{M.c.push(new RT.CallFrame(_4149,M.p));
return(M.modules["collects/syntax/wrap-modbeg.rkt"].label)(M);}};

var _4145=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4146=function(M){M.modules["collects/racket/private/modbeg.rkt"].isInvoked=true;
if((M.installedModules["collects/syntax/wrap-modbeg.rkt"]!==void(0)&&M.modules["collects/syntax/wrap-modbeg.rkt"]!==undefined)!==false){return(_4147)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/syntax/wrap-modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4147);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4147)(M);}};

var _4139=function(M){if(--M.cbt<0){throw _4139;}
M.e.length-=(M.a-1);
return(_4140)(M);};

var _4141=function(M){if(--M.cbt<0){throw _4141;}
M.e.length-=(M.a-1);
return(_4142)(M);};

var _4137=function(M){if(--M.cbt<0){throw _4137;}

//"lambda body for #(struct:LamPositionalName print-values collects/racket/private/modbeg.rkt 11 4 246 72)"

M.unspliceRestFromStack(0,M.a);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["for-each"];
M.a=0;
M.v=M.primitives["current-print"]._i(M);
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4142,M.p));
return((M.p).label)(M);};

var _4138=function(M){M.c.push(new RT.CallFrame(_4140,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/racket/private/modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_4146);}
return(_4145)(M);};

_4142.mvr=_4141;
_4149.mvr=_4148;
_4151.mvr=_4150;
_4140.mvr=_4139;
var _4137_c=new RT.Closure(_4137,(RT.makeArityAtLeast(0)),void(0),"print-values");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4152(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Applications/Racket v6.1/collects/racket/private/modbeg.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Applications/Racket v6.1/collects/racket/private/modbeg.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Applications/Racket v6.1/collects/syntax/wrap-modbeg.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4156=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4157=function(M){M.modules["collects/syntax/wrap-modbeg.rkt"].isInvoked=true;
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["collects/syntax/wrap-modbeg.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/syntax/wrap-modbeg.rkt"],M.modules["collects/syntax/wrap-modbeg.rkt"].getExports(),M.modules["collects/syntax/wrap-modbeg.rkt"].getExternalExports(),M.modules["collects/syntax/wrap-modbeg.rkt"].prefix));
return(M.p)(M);};

var _4154=function(M){if(--M.cbt<0){throw _4154;}
M.e.length-=(M.a-1);
return(_4155)(M);};

var _4153=function(M){M.c.push(new RT.CallFrame(_4155,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/syntax/wrap-modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_4157);}
return(_4156)(M);};

var _4158=function(M){return(_4153)(M);};

var _4155=function(M){if(--M.cbt<0){throw _4155;}
};

_4155.mvr=_4154;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4158(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Applications/Racket v6.1/collects/syntax/wrap-modbeg.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Applications/Racket v6.1/collects/syntax/wrap-modbeg.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/call-ec.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4168=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4167=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_4168)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_4168)(M);}};

var _4160=function(M){if(--M.cbt<0){throw _4160;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:14:3 whalesong/lang/private/call-ec.rkt 14 3 308 334)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1],M.p.closedVals[2]);
M.e.push(M.e[M.e.length-2]);
M.v=new RT.Closure(_4161,(RT.makeArityAtLeast(0)),[M.e[M.e.length-4],M.e[M.e.length-2]],"...vate/call-ec.rkt:15:11");
M.a=1;
if(M.a===0){return(_4171)(M);}else{M.e.push(M.v);
return(_4171)(M);}};

var _4159=function(M){if(--M.cbt<0){throw _4159;}

//"lambda body for #(struct:LamPositionalName call-with-escape-continuation whalesong/lang/private/call-ec.rkt 11 0 175 474)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(sym31036);
M.a=1;
M.v=M.primitives["make-continuation-prompt-tag"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["call-with-continuation-prompt"];
M.v=new RT.Closure(_4160,0,[M.e[M.e.length-4],M.e[M.e.length-5],M.e[M.e.length-3]],"...vate/call-ec.rkt:14:3");
M.a=1;
if(M.a===0){return(_4167)(M);}else{M.e.push(M.v);
return(_4167)(M);}};

var _4163=function(M){M.c.push(new RT.CallFrame(_4165,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/call-ec.rkt"]=function(){return new RT.ModuleRecord("call-ec",_4184);}
return(_4183)(M);};

var _4189=function(M){return(_4163)(M);};

var _4188=function(M){if(--M.cbt<0){throw _4188;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);extNs.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);ns.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);extNs.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);}(M.modules["whalesong/lang/private/call-ec.rkt"],M.modules["whalesong/lang/private/call-ec.rkt"].getExports(),M.modules["whalesong/lang/private/call-ec.rkt"].getExternalExports(),M.modules["whalesong/lang/private/call-ec.rkt"].prefix));
return(M.p)(M);};

var _4186=function(M){if(--M.cbt<0){throw _4186;}
M.c.push(new RT.CallFrame(_4188,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][0];
M.e[M.e.length-2]=sym31037;
M.v=M.primitives["procedure-rename"]._i(M);
M.e.length-=2;
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4165=function(M){if(--M.cbt<0){throw _4165;}
};

var _4187=function(M){if(--M.cbt<0){throw _4187;}
M.e.length-=(M.a-1);
return(_4188)(M);};

var _4185=function(M){if(--M.cbt<0){throw _4185;}
M.e.length-=(M.a-1);
return(_4186)(M);};

var _4183=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4184=function(M){M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("call-with-escape-continuation")||M.primitives["call-with-escape-continuation"],M.primitives["make-continuation-prompt-tag"],M.primitives["error"],M.params.currentNamespace.get("call/ec")||M.primitives["call/ec"],M.primitives["procedure-rename"]]);M.e[M.e.length-1].names=["call-with-escape-continuation","make-continuation-prompt-tag","error","call/ec","procedure-rename"];
M.modules["whalesong/lang/private/call-ec.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4186,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4159,1,[M.e[M.e.length-1]],"call-with-escape-continuation");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4164=function(M){if(--M.cbt<0){throw _4164;}
M.e.length-=(M.a-1);
return(_4165)(M);};

var _4178=function(M){M.v=M.v;
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4177=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_4178)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_4178)(M);}};

var _4162=function(M){if(--M.cbt<0){throw _4162;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:19:43 whalesong/lang/private/call-ec.rkt 19 43 562 76)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4176=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["abort-current-continuation"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=new RT.Closure(_4162,0,[M.e[M.e.length-5]],"...vate/call-ec.rkt:19:43");
M.a=1;
if(M.a===0){return(_4177)(M);}else{M.e.push(M.v);
return(_4177)(M);}};

var _4175=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym31038;
M.e[M.e.length-2]="escape continuation used out of context";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=2;
return(_4176)(M);};

var _4172=function(M){M.v=M.v;
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4171=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-2];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_4172)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_4172)(M);}};

var _4161=function(M){if(--M.cbt<0){throw _4161;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:15:11 whalesong/lang/private/call-ec.rkt 15 11 330 310)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["continuation-prompt-available?"]._i(M);
M.e.pop();
if(M.v===false){return(_4175)(M);}else{M.v=RT.VOID;
return(_4176)(M);}};

_4186.mvr=_4185;
_4188.mvr=_4187;
_4165.mvr=_4164;
var sym31037=RT.makeSymbol("call/ec");
var sym31038=RT.makeSymbol("call-with-escape-continuation");
var sym31036=RT.makeSymbol("escape");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4189(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/call-ec.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/lang/private/call-ec.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/world.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4191=function(M){if(--M.cbt<0){throw _4191;}
M.e.length-=(M.a-1);
return(_4192)(M);};

var _4190=function(M){M.c.push(new RT.CallFrame(_4192,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/world.rkt"]=function(){return new RT.ModuleRecord("world",_4194);}
return(_4193)(M);};

var _4201=function(M){return(_4190)(M);};

var _4192=function(M){if(--M.cbt<0){throw _4192;}
};

var _4199=function(M){if(--M.cbt<0){throw _4199;}
M.e.length-=(M.a-1);
return(_4200)(M);};

var _4200=function(M){if(--M.cbt<0){throw _4200;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/world.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?6.11"));ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse5.9"));ns.set("on-release", M.modules["whalesong/world/main.rkt"].getExports().get("on-release4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when8.15"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw7.13"));}(M.modules["whalesong/world.rkt"],M.modules["whalesong/world.rkt"].getExports(),M.modules["whalesong/world.rkt"].getExternalExports(),M.modules["whalesong/world.rkt"].prefix));
return(M.p)(M);};

var _4198=function(M){if(M.modules["whalesong/world/main.rkt"].isInvoked!==false){return(_4200)(M);}else{M.c.push(new RT.CallFrame(_4200,M.p));
return(M.modules["whalesong/world/main.rkt"].label)(M);}};

var _4196=function(M){if(--M.cbt<0){throw _4196;}
M.e.length-=(M.a-1);
return(_4197)(M);};

var _4197=function(M){if(--M.cbt<0){throw _4197;}
if((M.installedModules["whalesong/world/main.rkt"]!==void(0)&&M.modules["whalesong/world/main.rkt"]!==undefined)!==false){return(_4198)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4198);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4198)(M);}};

var _4195=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4197)(M);}else{M.c.push(new RT.CallFrame(_4197,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4193=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4194=function(M){M.modules["whalesong/world.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4195)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4195);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4195)(M);}};

_4197.mvr=_4196;
_4200.mvr=_4199;
_4192.mvr=_4191;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4201(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/world.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/world.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/crused/whalesong/whalesong/world/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/world/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/world/main.rkt",
        function(M) {
            
        var afterName31203 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/world/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["big-bang1.1","key=?6.11","on-key3.5","on-mouse5.9","on-release4.7","on-tick2.3","stop-when8.15","to-draw7.13"];modrec.prefix.internalNames=["big-bang","key=?","on-key","on-mouse","on-release","on-tick","stop-when","to-draw"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){/*global $,plt*/
var rawJsworld = {};

// Stuff here is copy-and-pasted from Chris King's JSWorld.
//
// dyoo: as I remember, most of this code had been revised from
// Chris's original code by Ethan Cechetti, who rewrote it to
// continuation passing style during summer 2010.

(function() {

    'use strict';

    /* Type signature notation
     * CPS(a b ... -> c) is used to denote
     *    a b ... (c -> void) -> void
     */

    var Jsworld = rawJsworld;

    var currentFocusedNode = false;

    var doNothing = function() {};





    // forEachK: CPS( array CPS(array -> void) (error -> void) -> void )
    // Iterates through an array and applies f to each element using CPS
    // If an error is thrown, it catches the error and calls f_error on it
    var forEachK = function(a, f, f_error, k) {
        var forEachHelp = function(i) {
            if( i >= a.length ) {
                if (k) {
                    return k();
                } else {
                    return;
                }
            }
            try {
                return f(a[i], function() { return forEachHelp(i+1); });
            } catch (e) {
                return Jsworld.shutdown({errorShutdown: e});
            }
        };
        return forEachHelp(0);
    };







    //
    // WORLD STUFFS
    //

    function InitialWorld() {}

    var world = new InitialWorld();
    var worldListeners = [];
    var eventDetachers = [];
    var runningBigBangs = [];

    var changingWorld = false;



    function clear_running_state() {
        var i;
        world = new InitialWorld();
        worldListeners = [];

        for (i = 0; i < eventDetachers.length; i++) {
                eventDetachers[i]();
        }
        eventDetachers = [];
        changingWorld = false;
    }



    // Close all world computations.
    Jsworld.shutdown = function(options) {
        while(runningBigBangs.length > 0) {
            var currentRecord = runningBigBangs.pop();
            if (currentRecord) { currentRecord.pause(); }
            if (options.cleanShutdown) {
                currentRecord.success(world);
            }
            if (options.errorShutdown) {
                currentRecord.fail(options.errorShutdown);
            }
        }
        clear_running_state();
    };



    function add_world_listener(listener) {
        worldListeners.push(listener);
    }


    function remove_world_listener(listener) {
        var i, index = -1;
        for (i = 0; i < worldListeners.length; i++) {
            if (worldListeners[i] === listener) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            worldListeners.splice(index, 1);
        }
    }


    // If we're in the middle of a change_world, delay.
    var DELAY_BEFORE_RETRY = 10;


    // change_world: CPS( CPS(world -> world) -> void )
    // Adjust the world, and notify all listeners.
    var change_world = function(updater, k) {

        // Check to see if we're in the middle of changing
        // the world already.  If so, put on the queue
        // and exit quickly.
        if (changingWorld) {
            setTimeout(
                function() {
                    change_world(updater, k);
                },
                DELAY_BEFORE_RETRY);
            return;
        }


        changingWorld = true;
        var originalWorld = world;

        var changeWorldHelp;
        changeWorldHelp = function() {
            forEachK(worldListeners,
                     function(listener, k2) {
                         listener(world, originalWorld, k2);
                     },
                     function(e) {
                         changingWorld = false;
                         world = originalWorld;
                         throw e; 
                     },
                     function() {
                         changingWorld = false;
                         k();
                     });
        };

        try {
            updater(world, function(newWorld) {
                world = newWorld;
                changeWorldHelp();
            });
        } catch(e) {
            changingWorld = false;
            world = originalWorld;
            return Jsworld.shutdown({errorShutdown: e});
        }
    };
    Jsworld.change_world = change_world;



    var map = function(a1, f) {
        var b = new Array(a1.length), i;
        for (i = 0; i < a1.length; i++) {
                b[i] = f(a1[i]);
        }
        return b;
    };

    var concat_map = function(a, f) {
        var b = [], i;
        for (i = 0; i < a.length; i++) {
                b = b.concat(f(a[i]));
        }
        return b;
    };


    function member(a, x) {
        var i;
        for (i = 0; i < a.length; i++) {
            if (a[i] === x) {
                return true;
            }
        }
        return false;
    }


    //
    // DOM UPDATING STUFFS
    //

    // tree(N): { node: N, children: [tree(N)] }
    // relation(N): { relation: 'parent', parent: N, child: N } | { relation: 'neighbor', left: N, right: N }
    // relations(N): [relation(N)]
    // nodes(N): [N]
    // css(N): [css_node(N)]
    // css_node(N): { node: N, attribs: attribs } | { className: string, attribs: attribs }
    // attrib: { attrib: string, values: [string] }
    // attribs: [attrib]

    // treeable(nodes(N), relations(N)) = bool
    /*function treeable(nodes, relations) {
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // there does not exist a neighbor relation between x and z!=y or z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation === 'neighbor')
    if (relations[j].left === x && relations[j].right !== y ||
    relations[j].left !== x && relations[j].right === y)
    return false;
    }
 
    // for all parent relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'parent') {
    var x = relations[i].parent, y = relations[i].child;
 
    // there does not exist a parent relation between z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    if (relations[j].parent !== x && relations[j].child === y)
    return false;
    }
 
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // all parent relations between z and x or y share the same z
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    for (var k = 0; k < relations.length; k++)
    if (relations[k].relation == 'parent')
    if (relations[j].child === x && relations[k].child === y &&
    relations[j].parent !== relations[k].parent)
    return false;
    }
 
    return true;
    }*/


    // node_to_tree: dom -> dom-tree
    // Given a native dom node, produces the appropriate tree.
    function node_to_tree(domNode) {
        var result = [domNode], c;
        for (c = domNode.firstChild; c !== null; c = c.nextSibling) {
            result.push(node_to_tree(c));
        }
        return result;
    }
    Jsworld.node_to_tree = node_to_tree;



    // nodes(tree(N)) = nodes(N)
    function nodes(tree) {
        var ret, i;
        if (tree.node.jsworldOpaque === true) {
            return [tree.node];
        }

        ret = [tree.node];
        for (i = 0; i < tree.children.length; i++) {
            ret = ret.concat(nodes(tree.children[i]));
        }
        return ret;
    }


    // relations(tree(N)) = relations(N)
    function relations(tree) {
        var ret = [];
        var i;
        for (i = 0; i < tree.children.length; i++) {
            ret.push({ relation: 'parent',
                       parent: tree.node,
                       child: tree.children[i].node });
        }

        for (i = 0; i < tree.children.length - 1; i++) {
            ret.push({ relation: 'neighbor',
                       left: tree.children[i].node,
                       right: tree.children[i + 1].node });
        }

        if (! tree.node.jsworldOpaque) {
            for (i = 0; i < tree.children.length; i++) {
                ret = ret.concat(relations(tree.children[i]));
            }
        }

        return ret;
    }





    // Preorder traversal.
    var preorder = function(node, f) {
        f(node, function() {
            var child = node.firstChild;
            var nextSibling;
            while (child) {
                nextSibling = child.nextSibling;
                preorder(child, f);
                child = nextSibling;
            }
        });
    };


    // nodeEq: node node -> boolean
    // Returns true if the two nodes should be the same.
    var nodeEq = function(node1, node2) {
        return (node1 && node2 && node1 === node2);
    };


    // isMemq: X (arrayof X) -> boolean
    // Produces true if any of the elements of L are nodeEq to x.
    var isMemq = function(x, L) {
        var i;
        for (i = 0 ; i < L.length; i++) {
            if (nodeEq(x, L[i])) {
                return true;
            }
        }
        return false;
    };



    // If any node cares about the world, send it in.
    function refresh_node_values(nodes) {
        var i;
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].onWorldChange) {
                nodes[i].onWorldChange(world);
            }
        }
    }



    // update_dom(nodes(Node), relations(Node)) = void
    function update_dom(toplevelNode, nodes, relations) {
        var i, parent, child;
        // TODO: rewrite this to move stuff all in one go... possible? necessary?

        // move all children to their proper parents
        for (i = 0; i < relations.length; i++) {
            if (relations[i].relation === 'parent') {
                parent = relations[i].parent;
                child = relations[i].child;
                if (child.parentNode !== parent) {
                    parent.appendChild(child);
                }
            }
        }

        // arrange siblings in proper order
        // truly terrible... BUBBLE SORT
        var unsorted = true;
        while (unsorted) {
            unsorted = false;
            for (i = 0; i < relations.length; i++) {
                if (relations[i].relation === 'neighbor') {
                    var left = relations[i].left, right = relations[i].right;

                    if (! nodeEq(left.nextSibling, right)) {
                        left.parentNode.insertBefore(left, right);
                        unsorted = true;
                    }
                }
            }
        }

        // Finally, remove nodes that shouldn't be attached anymore.
        var nodesPlus = nodes.concat([toplevelNode]);
        preorder(toplevelNode, function(aNode, continueTraversalDown) {
            if (aNode.jsworldOpaque) {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                }
            } else {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                } else {
                    continueTraversalDown();
                }
            }
        });

        refresh_node_values(nodes);
    }



    // camelCase: string -> string
    function camelCase(name) {
        return name.replace(/\-(.)/g, function(m, l){return l.toUpperCase();});
    }


    function set_css_attribs(node, attribs) {
        var j;
        for (j = 0; j < attribs.length; j++){
            node.style[camelCase(attribs[j].attrib)] = attribs[j].values.join(" ");
        }
    }


    // isMatchingCssSelector: node css -> boolean
    // Returns true if the CSS selector matches.
    function isMatchingCssSelector(node, css) {
        if (css.id.match(/^\./)) {
            // Check to see if we match the class
            return (node.className && member(node.className.split(/\s+/),
                                             css.id.substring(1)));
        } else {
            return (node.id && node.id === css.id);
        }
    }


    var clearCss = function(node) {
        // FIXME: we should not be clearing the css
//      if ('style' in node)
//          node.style.cssText = "";
    };



    function update_css(nodes, css) {
        // clear CSS
        var i, j;
        for (i = 0; i < nodes.length; i++) {
            if ( !nodes[i].jsworldOpaque ) {
                    clearCss(nodes[i]);
            }
        }

        // set CSS
        for (i = 0; i < css.length; i++) {
            if (css[i].id) {
                for (j = 0; j < nodes.length; j++) {
                    if (isMatchingCssSelector(nodes[j], css[i])) {
                        set_css_attribs(nodes[j], css[i].attribs);
                    }
                }
            } else {
                set_css_attribs(css[i].node, css[i].attribs);
            }
        }
    }



    var sexp2tree;
    var sexp2css;
    var maintainingSelection;



    function do_redraw(world, oldWorld, toplevelNode, redraw_func, redraw_css_func, k) {
        if (oldWorld instanceof InitialWorld) {
            // Simple path
            redraw_func(world,
                function(drawn) {
                        var t = sexp2tree(drawn);
                        var ns = nodes(t);
                        // HACK: css before dom, due to excanvas hack.
                        redraw_css_func(world,
                                function(css) {
                                        update_css(ns, sexp2css(css));
                                        update_dom(toplevelNode, ns, relations(t));
                                        k();
                                });
                });
        } else {
            maintainingSelection(
                function(k2) {
                    redraw_func(
                        world,
                        function(newRedraw) {

                            redraw_css_func(
                                world,
                                function(newRedrawCss) {
                                    var t = sexp2tree(newRedraw);
                                    var ns = nodes(t);
                                    // Try to save the current selection and preserve it across
                                    // dom updates.

                                    // Kludge: update the CSS styles first.
                                    // This is a workaround an issue with excanvas: any style change
                                    // clears the content of the canvas, so we do this first before
                                    // attaching the dom element.
                                    update_css(ns, sexp2css(newRedrawCss));
                                    update_dom(toplevelNode, ns, relations(t));

                                    k2();
                                });
                        });
                }, k);
        }
    }



    var FocusedSelection;

    function hasCurrentFocusedSelection() {
        return currentFocusedNode !== undefined;
    }

    function getCurrentFocusedSelection() {
        return new FocusedSelection();
    }


    // maintainingSelection: (-> void) -> void
    // Calls the thunk f while trying to maintain the current focused selection.
    maintainingSelection = function(f, k) {
        var currentFocusedSelection;
        if (hasCurrentFocusedSelection()) {
            currentFocusedSelection = getCurrentFocusedSelection();
            f(function() {
                currentFocusedSelection.restore();
                k();
            });
        } else {
            f(function() { k(); });
        }
    };



    FocusedSelection = function() {
        this.focused = currentFocusedNode;
        this.selectionStart = currentFocusedNode.selectionStart;
        this.selectionEnd = currentFocusedNode.selectionEnd;
    };

    // Try to restore the focus.
    FocusedSelection.prototype.restore = function() {
        // FIXME: if we're scrolling through, what's visible
        // isn't restored yet.
        if (this.focused.parentNode) {
            this.focused.selectionStart = this.selectionStart;
            this.focused.selectionEnd = this.selectionEnd;
            this.focused.focus();
        } else if (this.focused.id) {
            var matching = document.getElementById(this.focused.id);
            if (matching) {
                matching.selectionStart = this.selectionStart;
                matching.selectionEnd = this.selectionEnd;
                matching.focus();
            }
        }
    };





    //////////////////////////////////////////////////////////////////////

    var bigBang, StopWhenHandler;

    function BigBangRecord(top, world, handlerCreators, handlers, attribs,
                           success, fail) {
        this.top = top;
        this.world = world;
        this.handlers = handlers;
        this.handlerCreators = handlerCreators;
        this.attribs = attribs;
        this.success = success;
        this.fail = fail;
    }

    BigBangRecord.prototype.restart = function() {
        bigBang(this.top, this.world, this.handlerCreators, this.attribs);
    };

    BigBangRecord.prototype.pause = function() {
        var i;
        for(i = 0 ; i < this.handlers.length; i++) {
            if (! (this.handlers[i] instanceof StopWhenHandler)) {
                this.handlers[i].onUnregister(this.top);
            }
        }
    };
    //////////////////////////////////////////////////////////////////////


    var copy_attribs;


    // Notes: bigBang maintains a stack of activation records; it should be possible
    // to call bigBang re-entrantly.
    // top: dom
    // init_world: any
    // handlerCreators: (Arrayof (-> handler))
    // k: any -> void
    bigBang = function(top, init_world, handlerCreators, attribs, succ, fail) {
        var i;
        // clear_running_state();

        // Construct a fresh set of the handlers.
        var handlers = map(handlerCreators, function(x) { return x();} );
        if (runningBigBangs.length > 0) {
            runningBigBangs[runningBigBangs.length - 1].pause();
        }

        // Create an activation record for this big-bang.
        var activationRecord =
            new BigBangRecord(top, init_world, handlerCreators, handlers, attribs, 
                              succ, fail);
        runningBigBangs.push(activationRecord);
        function keepRecordUpToDate(w, oldW, k2) {
            activationRecord.world = w;
            k2();
        }
        add_world_listener(keepRecordUpToDate);



        // Monitor for termination and register the other handlers.
        var stopWhen = new StopWhenHandler(function(w, k2) { k2(false); },
                                           function(w, k2) { k2(w); });
        for(i = 0 ; i < handlers.length; i++) {
            if (handlers[i] instanceof StopWhenHandler) {
                stopWhen = handlers[i];
            } else {
                handlers[i].onRegister(top);
            }
        }
        var watchForTermination = function(w, oldW, k2) {
            stopWhen.test(w,
                          function(stop) {
                              if (stop) {
                                  Jsworld.shutdown({cleanShutdown: true});
                              }
                              else { k2(); }
                          });
        };
        add_world_listener(watchForTermination);


        // Finally, begin the big-bang.
        copy_attribs(top, attribs);
        change_world(function(w, k2) { k2(init_world); }, doNothing);
    };
    Jsworld.bigBang = bigBang;





    // on_tick: number CPS(world -> world) -> handler
    var on_tick = function(delay, tick) {
        return function() {
            var scheduleTick, ticker;
            scheduleTick = function(t) {
                ticker.watchId = setTimeout(
                    function() {
                        ticker.watchId = undefined;
                        var startTime = (new Date()).valueOf();
                        change_world(tick,
                                     function() {
                                         var endTime = (new Date()).valueOf();
                                         scheduleTick(Math.max(delay - (endTime - startTime),
                                                               0));
                                     });
                    },
                    t);
            };

            ticker = {
                watchId: -1,
                onRegister: function (top) {
                    scheduleTick(delay);
                },

                onUnregister: function (top) {
                    if (ticker.watchId) {
                        clearTimeout(ticker.watchId);
                    }
                }
            };
            return ticker;
        };
    };
    Jsworld.on_tick = on_tick;

    var preventDefault, stopPropagation;
    var attachEvent, detachEvent;


    function on_key(press) {
        return function() {
            var wrappedPress = function(e) {
                preventDefault(e);
                stopPropagation(e);
                change_world(function(w, k) { press(w, e, k); }, doNothing);
            };
            return {
                onRegister: function(top) {
                    //http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribue
                    jQuery(top).attr('tabindex', 1);
                    jQuery(top).focus();
                    attachEvent(top, 'keydown', wrappedPress);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'keydown', wrappedPress);
                }
            };
        };
    }
    Jsworld.on_key = on_key;

    function on_release(release) {
        return function() {
            var wrappedRelease = function(e) {
                preventDefault(e);
                stopPropagation(e);
                change_world(function(w, k) { release(w, e, k); }, doNothing);
            };
            return {
                onRegister: function(top) {
                    //http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribue
                    jQuery(top).attr('tabindex', 1);
                    jQuery(top).focus();
                    attachEvent(top, 'keyup', wrappedRelease);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'keyup', wrappedRelease);
                }
            };
        };
    }
    Jsworld.on_release = on_release;


    // http://www.quirksmode.org/js/events_mouse.html
    // http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
    function on_mouse(mouse) {
        return function() {
            var isButtonDown = false;
            var makeWrapped = function(type) {
                return function(e) {
                    preventDefault(e);
                    stopPropagation(e);
                    var x = e.pageX, y = e.pageY;
                    var currentElement = e.target;
                    do {
                        x -= currentElement.offsetLeft;
                        y -= currentElement.offsetTop;
                        currentElement = currentElement.offsetParent;
                    } while(currentElement);

                    if (type === 'button-down') {
                        isButtonDown = true;
                    } else if (type === 'button-up') {
                        isButtonDown = false;
                    }
                    if (type === 'move' && isButtonDown) {
                        change_world(function(w, k) {
                            mouse(w, x, y, 'drag', k);
                        }, doNothing);
                    } else {
                        change_world(function(w, k) {
                            mouse(w, x, y, type, k);
                        }, doNothing);
                    }
                };
            };
            var wrappedDown = makeWrapped('button-down');
            var wrappedUp = makeWrapped('button-up');
            // How do we do drag?
            var wrappedMove = makeWrapped('move');
            var wrappedEnter = makeWrapped('enter');
            var wrappedLeave = makeWrapped('leave');
            return {
                onRegister: function(top) {
                    attachEvent(top, 'mousedown', wrappedDown);
                    attachEvent(top, 'mouseup', wrappedUp);
                    attachEvent(top, 'mousemove', wrappedMove);
                    attachEvent(top, 'mouseenter', wrappedEnter);
                    attachEvent(top, 'mouseleave', wrappedLeave);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'mousedown', wrappedDown);
                    detachEvent(top, 'mouseup', wrappedUp);
                    detachEvent(top, 'mousemove', wrappedMove);
                    detachEvent(top, 'mouseenter', wrappedEnter);
                    detachEvent(top, 'mouseleave', wrappedLeave);
                }
            };
        };
    }
    Jsworld.on_mouse = on_mouse;





    var checkDomSexp;


    //  on_draw: CPS(world -> (sexpof node)) CPS(world -> (sexpof css-style)) -> handler
    function on_draw(redraw, redraw_css) {
        var wrappedRedraw = function(w, k) {
            redraw(w, function(newDomTree) {
                checkDomSexp(newDomTree, newDomTree);
                k(newDomTree);
            });
        };

        return function() {
            var drawer = {
                _top: null,
                _listener: function(w, oldW, k2) {
                    do_redraw(w, oldW, drawer._top, wrappedRedraw, redraw_css, k2);
                },
                onRegister: function (top) {
                    drawer._top = top;
                    add_world_listener(drawer._listener);
                },

                onUnregister: function (top) {
                    remove_world_listener(drawer._listener);
                }
            };
            return drawer;
        };
    }
    Jsworld.on_draw = on_draw;



    StopWhenHandler = function(test, receiver) {
        this.test = test;
        this.receiver = receiver;
    };
    // stop_when: CPS(world -> boolean) CPS(world -> boolean) -> handler
    function stop_when(test, receiver) {
        return function() {
            if (receiver === undefined) {
                receiver = function(w, k) { k(w); };
            }
            return new StopWhenHandler(test, receiver);
        };
    }
    Jsworld.stop_when = stop_when;



    function on_world_change(f) {
        var listener = function(world, oldW, k) { f(world, k); };
        return function() {
            return {
                onRegister: function (top) {
                    add_world_listener(listener); },
                onUnregister: function (top) {
                    remove_world_listener(listener); }
            };
        };
    }
    Jsworld.on_world_change = on_world_change;





    // Compatibility for attaching events to nodes.
    attachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.addEventListener(eventName, fn, false);
        } else {
            // IE
            node.attachEvent('on' + eventName, fn, false);
        }
    };

    detachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.removeEventListener(eventName, fn, false);
        } else {
            // IE
            node.detachEvent('on' + eventName, fn, false);
        }
    };

    //
    // DOM CREATION STUFFS
    //

    // add_ev: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed.
    function add_ev(node, event, f) {
        var eventHandler = function(e) { change_world(function(w, k) { f(w, e, k); },
                                                       doNothing); };
        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
    }

    // add_ev_after: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed, but only
    // after the fired event has finished.
    function add_ev_after(node, event, f) {
        var eventHandler = function(e) {
                setTimeout(function() { change_world(function(w, k) { f(w, e, k); },
                                                     doNothing); },
                           0);
        };

        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
    }


    function addFocusTracking(node) {
        attachEvent(node, "focus", function(e) {
            currentFocusedNode = node; });
        attachEvent(node, "blur", function(e) {
            currentFocusedNode = undefined;
        });
        return node;
    }





    //
    // WORLD STUFFS
    //


    sexp2tree = function(sexp) {
        if(sexp.length === undefined) { return { node: sexp, children: [] }; }
        else { return { node: sexp[0], children: map(sexp.slice(1), sexp2tree) }; }
    };

    function sexp2attrib(sexp) {
        return { attrib: sexp[0], values: sexp.slice(1) };
    }

    function sexp2css_node(sexp) {
        var attribs = map(sexp.slice(1), sexp2attrib);
        if (typeof sexp[0] === 'string'){
            return [{ id: sexp[0], attribs: attribs }];
        } else if (sexp[0].length !== undefined){
            return map(sexp[0], function (id) { return { id: id, attribs: attribs }; });
        } else {
            return [{ node: sexp[0], attribs: attribs }];
        }
    }

    sexp2css = function(sexp) {
        return concat_map(sexp, sexp2css_node);
    };



    function isTextNode(n) {
        return (n.nodeType === 3);
    }


    function isElementNode(n) {
        return (n.nodeType === 1);
    }

    var JsworldDomError;

    var throwDomError = function(thing, topThing) {
        throw new JsworldDomError(
            plt.baselib.format.format(
                "Expected a non-empty array, received ~s within ~s",
                [thing, topThing]),
            thing);
    };

    // checkDomSexp: X X -> boolean
    // Checks to see if thing is a DOM-sexp.  If not,
    // throws an object that explains why not.
    checkDomSexp = function(thing, topThing) {
        var i;
        if (! thing instanceof Array) {
            throwDomError(thing, topThing);
        }
        if (thing.length === 0) {
            throwDomError(thing, topThing);
        }


        // Check that the first element is a Text or an element.
        if (isTextNode(thing[0])) {
            if (thing.length > 1) {
                throw new JsworldDomError(plt.baselib.format.format("Text node ~s can not have children",
                                                         [thing]),
                                          thing);
            }
        } else if (isElementNode(thing[0])) {
            for (i = 1; i < thing.length; i++) {
                checkDomSexp(thing[i], thing);
            }
        } else {
            if (window.console && window.console.log) { window.console.log(thing[0]); }

            throw new JsworldDomError(
                plt.baselib.format.format(
                    "expected a Text or an Element, received ~s within ~s",
                    [thing, topThing]),
                thing[0]);
        }
    };

    JsworldDomError = function(msg, elt) {
        this.msg = msg;
        this.elt = elt;
    };
    JsworldDomError.prototype.toString = function() {
        return "JsworldDomError: " + this.msg;
    };





    //
    // DOM CREATION STUFFS
    //


    copy_attribs = function(node, attribs) {
        var a;
        if (attribs) {
            for (a in attribs) {
                if (hasOwnProperty.call(attribs, a)) {
                    if (typeof attribs[a] === 'function') {
                        add_ev(node, a, attribs[a]);
                    } else {
                        node[a] = attribs[a];
                    }
                }
            }
        }
        return node;
    };


    //
    // NODE TYPES
    //

    function p(attribs) {
        return addFocusTracking(copy_attribs(document.createElement('p'), attribs));
    }
    Jsworld.p = p;

    function div(attribs) {
        return addFocusTracking(copy_attribs(document.createElement('div'), attribs));
    }
    Jsworld.div = div;

    // Used To Be: (world event -> world) (hashof X Y) -> domElement
    // Now: CPS(world event -> world) (hashof X Y) -> domElement
    function button(f, attribs) {
        var n = document.createElement('button');
        n.onclick = function(e) {return false;};
        add_ev(n, 'click', f);
        return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.button = button;




    preventDefault = function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    };

    stopPropagation = function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };


    var stopClickPropagation = function(node) {
        attachEvent(node, "click",
                    function(e) {
                        stopPropagation(e);
                    });
        return node;
    };


    var text_input, checkbox_input;

    // input: string CPS(world -> world) 
    function input(aType, updateF, attribs) {
        aType = aType.toLowerCase();
        var dispatchTable = { text : text_input,
                              password: text_input,
                              checkbox: checkbox_input
                              //button: button_input,
                              //radio: radio_input 
        };

        if (dispatchTable[aType]) {
            return (dispatchTable[aType])(aType, updateF, attribs);
        }
        else {
            throw new Error("js-input: does not currently support type " + aType);
        }
    }
    Jsworld.input = input;




    text_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;

        var lastVal = n.value;
        var onEvent = function() {
            if (! n.parentNode) { return; }
            setTimeout(
                function() {
                    if (lastVal !== n.value) {
                        lastVal = n.value;
                        change_world(function (w, k) {
                            updateF(w, n.value, k);
                        }, doNothing);
                    }
                },
                0);
        };

        attachEvent(n, "keydown", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "keydown", onEvent); });

        attachEvent(n, "change", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "change", onEvent); });

        return stopClickPropagation(
            addFocusTracking(copy_attribs(n, attribs)));
    };


    checkbox_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;
        var onCheck = function(w, e, k) {
            updateF(w, n.checked, k);
        };
        // This established the widget->world direction
        add_ev_after(n, 'change', onCheck);

        attachEvent(n, 'click', function(e) {
            stopPropagation(e);
        });

        return copy_attribs(n, attribs);
    };


    // var button_input = function(type, updateF, attribs) {
    //     var n = document.createElement('button');
    //     add_ev(n, 'click', function(w, e, k) { updateF(w, n.value, k); });
    //     return addFocusTracking(copy_attribs(n, attribs));
    // };




    function text(s, attribs) {
        var result = document.createElement("div");
        result.appendChild(document.createTextNode(String(s)));
        result.jsworldOpaque = true;
        return result;
    }
    Jsworld.text = text;

    var option;

    function select(attribs, opts, f){
        var n = document.createElement('select'), i;
        for(i = 0; i < opts.length; i++) {
            n.add(option({value: opts[i]}), null);
        }
        n.jsworldOpaque = true;
        add_ev(n, 'change', f);
        var result = addFocusTracking(copy_attribs(n, attribs));
        return result;
    }
    Jsworld.select = select;

    option = function(attribs){
        var node = document.createElement("option");
        node.text = attribs.value;
        node.value = attribs.value;
        return node;
    };



    function textarea(attribs){
        return addFocusTracking(copy_attribs(document.createElement('textarea'), attribs));
    }
    Jsworld.textarea = textarea;

    function h1(attribs){
        return addFocusTracking(copy_attribs(document.createElement('h1'), attribs));
    }
    Jsworld.h1 = h1;

    function canvas(attribs){
        return addFocusTracking(copy_attribs(document.createElement('canvas'), attribs));
    }
    Jsworld.canvas = canvas;


    function img(src, attribs) {
        var n = document.createElement('img');
        n.src = src;
        return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.img = img;



    function raw_node(node, attribs) {
        return addFocusTracking(copy_attribs(node, attribs));
    }
    Jsworld.raw_node = raw_node;



}());

var imageLibrary = MACHINE.modules['whalesong/image/private/main.rkt'].privateExports;
var isImage = imageLibrary.isImage;




var PAUSE = plt.runtime.PAUSE;
var EMPTY = plt.baselib.lists.EMPTY;
var isString = plt.baselib.strings.isString;
var isBoolean = function(x) { return x === true || x === false; }
var isSymbol = plt.baselib.symbols.isSymbol;
var makePair = plt.baselib.lists.makePair;
var makeList = plt.baselib.lists.makeList;
var makeRational = plt.baselib.numbers.makeRational;



var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;





//////////////////////////////////////////////////////////////////////

var bigBang = function(MACHINE, initW, handlers) {
    var outerToplevelNode = jQuery('<span/>').css('padding', '0px').get(0);
    MACHINE.params.currentOutputPort.writeDomNode(MACHINE, outerToplevelNode);
    var toplevelNode = jQuery('<span/>').css('padding', '0px').appendTo(outerToplevelNode).get(0);

    var configs = [];
    var isOutputConfigSeen = false;

    for (var i = 0 ; i < handlers.length; i++) {
        if (isWorldConfigOption(handlers[i])) {
            configs.push(handlers[i].toRawHandler(MACHINE, toplevelNode));
        }
        else {
            configs.push(handlers[i]);
        }
        if (isOutputConfig(handlers[i])) { isOutputConfigSeen = true; }
    }
    
    // If we haven't seen an onDraw function, use the default one.
    if (! isOutputConfigSeen) { 
        configs.push(new DefaultDrawingOutput().toRawHandler(MACHINE, toplevelNode));
    }


    PAUSE(function(restart) {
	var bigBangController = rawJsworld.bigBang(
	    toplevelNode,
	    initW,
	    configs,
	    {},
	    function(finalWorldValue) {
		restart(function(MACHINE) {
		    finalizeClosureCall(
			MACHINE, 
			finalWorldValue);
		});

	    },
            function(err) {
                restart(function(MACHINE) {
                    plt.baselib.exceptions.raise(MACHINE, err);
                });
            });

    });
};





//////////////////////////////////////////////////////////////////////

// Every world configuration function (on-tick, stop-when, ...)
// produces a WorldConfigOption instance.
var WorldConfigOption = function(name) {
    this.name = name;	    
};

WorldConfigOption.prototype.configure = function(config) {
    throw new Error('unimplemented WorldConfigOption');
};


WorldConfigOption.prototype.toDomNode = function(params) {  
    var span = document.createElement('span');
    span.appendChild(document.createTextNode("(" + this.name + " ...)"));
    return span;
};

WorldConfigOption.prototype.toWrittenString = function(cache) {
    return "(" + this.name + " ...)";
};

WorldConfigOption.prototype.toDisplayedString = function(cache) {
    return "(" + this.name + " ...)";
};

var isWorldConfigOption = plt.baselib.makeClassPredicate(WorldConfigOption);

//////////////////////////////////////////////////////////////////////




// adaptWorldFunction: Racket-function -> World-CPS
// Takes a racket function and converts it to the CPS-style function
// that our world implementation expects.
var adaptWorldFunction = function(worldFunction) {
    return function() {
        // Consumes any number of arguments.
        var success = arguments[arguments.length - 1];
        plt.baselib.functions.internalCallDuringPause.apply(
            null,
            [MACHINE,
             worldFunction,
             function(v) {
                 success(v);
             },
             function(err) {
                return rawJsworld.shutdown({errorShutdown: err});
             }].concat([].slice.call(arguments, 0, arguments.length - 1)));
    };
};






//////////////////////////////////////////////////////////////////////

// OnTick: racket-function javascript-float -> handler
var OnTick = function(handler, aDelay) {
    WorldConfigOption.call(this, 'on-tick');
    this.handler = handler;
    this.delay = aDelay;
};

OnTick.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnTick.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_tick(this.delay, worldFunction);
};


//////////////////////////////////////////////////////////////////////
var OnKey = function(handler) {
    WorldConfigOption.call(this, 'on-key');
    this.handler = handler;
}

OnKey.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnKey.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_key(
        function(w, e, success) {
            worldFunction(w, getKeyCodeName(e), success);
        });
};

var OnRelease = function(handler) {
    WorldConfigOption.call(this, 'on-release');
    this.handler = handler;
}

OnRelease.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnRelease.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_release(
        function(w, e, success) {
            worldFunction(w, getKeyCodeName(e), success);
        });
};


var getKeyCodeName = function(e) {
    var code = e.charCode || e.keyCode;
    var keyname;
    switch(code) {
    case 16: keyname = "shift"; break;
    case 17: keyname = "control"; break;
    case 19: keyname = "pause"; break;
    case 27: keyname = "escape"; break;
    case 33: keyname = "prior"; break;
    case 34: keyname = "next"; break;
    case 35: keyname = "end"; break;
    case 36: keyname = "home"; break;
    case 37: keyname = "left"; break;
    case 38: keyname = "up"; break;
    case 39: keyname = "right"; break;
    case 40: keyname = "down"; break;
    case 42: keyname = "print"; break;
    case 45: keyname = "insert"; break;
    case 46: keyname = String.fromCharCode(127); break;
    case 106: keyname = "*"; break;
    case 107: keyname = "+"; break;
    case 109: keyname = "-"; break;
    case 110: keyname = "."; break;
    case 111: keyname = "/"; break;
    case 144: keyname = "numlock"; break;
    case 145: keyname = "scroll"; break;
    case 186: keyname = ";"; break;
    case 187: keyname = "="; break;
    case 188: keyname = ","; break;
    case 189: keyname = "-"; break;
    case 190: keyname = "."; break;
    case 191: keyname = "/"; break;
    case 192: keyname = "`"; break;
    case 219: keyname = "["; break;
    case 220: keyname = "\\"; break;
    case 221: keyname = "]"; break;
    case 222: keyname = "'"; break;
    default: 
        if (code >= 96 && code <= 105) {
	    keyname = (code - 96).toString();
        } else if (code >= 112 && code <= 123) {
	    keyname = "f" + (code - 111);
	} else {
	    keyname = String.fromCharCode(code).toLowerCase();
	}
	break;
    }
    return keyname;
}
//////////////////////////////////////////////////////////////////////





var OnMouse = function(handler) {
    WorldConfigOption.call(this, 'on-mouse');
    this.handler = handler;
}

OnMouse.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnMouse.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_mouse(
        function(w, x, y, type, success) {
            worldFunction(w, x, y, type, success);
        });
};








var OutputConfig = function() {}
OutputConfig.prototype = plt.baselib.heir(WorldConfigOption.prototype);
var isOutputConfig = plt.baselib.makeClassPredicate(OutputConfig);





// // ToDraw

var ToDraw = function(handler) {
    WorldConfigOption.call(this, 'to-draw');
    this.handler = handler;
};

ToDraw.prototype = plt.baselib.heir(OutputConfig.prototype);
 
ToDraw.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var reusableCanvas;
    var reusableCanvasNode;
    var adaptedWorldFunction = adaptWorldFunction(this.handler);

    var worldFunction = function(world, success) {

        adaptedWorldFunction(
            world,
            function(v) {
                // fixme: once jsworld supports fail continuations, use them
                // to check the status of the scene object and make sure it's an
                // image.

                
                if (isImage(v) ) {
		    var width = v.getWidth();
		    var height = v.getHeight();

		    if (! reusableCanvas) {
			reusableCanvas = imageLibrary.makeCanvas(width, height);
			// Note: the canvas object may itself manage objects,
			// as in the case of an excanvas.  In that case, we must make
			// sure jsworld doesn't try to disrupt its contents!
			reusableCanvas.jsworldOpaque = true;
			reusableCanvasNode = rawJsworld.node_to_tree(reusableCanvas);
		    }
		    if (reusableCanvas.width !== width) { 
                        reusableCanvas.width = width; 
                    }
		    if (reusableCanvas.height !== height) { 
                        reusableCanvas.height = height;
                    }
		    var ctx = reusableCanvas.getContext("2d");
		    v.render(ctx, 0, 0);
		    success([toplevelNode, reusableCanvasNode]);
		} else {
		    success([toplevelNode, rawJsworld.node_to_tree(plt.baselib.format.toDomNode(v, MACHINE.params['print-mode']))]);
		}
            });
    };

    var cssFunction = function(w, k) { 
        if (reusableCanvas) {
 	    k([[reusableCanvas, 
                ["padding", "0px"],
 		["width", reusableCanvas.width + "px"],
 		["height", reusableCanvas.height + "px"]]]);
        } else {
            k([]); 
        }
    }

    return rawJsworld.on_draw(worldFunction, cssFunction);
};







var DefaultDrawingOutput = function() {
    WorldConfigOption.call(this, 'to-draw');
};

DefaultDrawingOutput.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
DefaultDrawingOutput.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = function(world, success) {
        success([toplevelNode,
                 rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world,
                                                                      MACHINE.params['print-mode']))]);
        //k(rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world)));
    };
    var cssFunction = function(w, success) { success([]); }
    return rawJsworld.on_draw(worldFunction, cssFunction);
};




//////////////////////////////////////////////////////////////////////



var StopWhen = function(handler) {
    WorldConfigOption.call(this, 'stop-when');
    this.handler = handler;
};

StopWhen.prototype = plt.baselib.heir(WorldConfigOption.prototype);

StopWhen.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.stop_when(worldFunction);
};

var PAUSE = plt.runtime.PAUSE;
var makeClosure = plt.baselib.functions.makeClosure;
var makeRational = plt.baselib.numbers.makeRational;
var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;


var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;
var checkString = plt.baselib.check.checkString;

var checkProcedure = plt.baselib.check.checkProcedure;

// More specific function checkers, based on arity.
var checkProcedure1 = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 1)); },
    'procedure that consumes a world argument');


var checkProcedureWithKey = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 2)); },
    'procedure that consumes a world argument and a key');

var checkProcedureWithMouse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 4)); },
    'procedure that consumes a world argument, an x and y coordinate, and a mouse event');



var checkHandler = plt.baselib.check.makeCheckArgumentType(
    isWorldConfigOption,
    "world configuration handler");




// The default tick delay is 28 times a second.
var DEFAULT_TICK_DELAY = 1/28;



EXPORTS['big-bang'] = 
    makeClosure(
        'big-bang',
        plt.baselib.arity.makeArityAtLeast(1),
        function(MACHINE) {
            var initialWorldValue = MACHINE.e[MACHINE.e.length - 1];
	    var handlers = [];
	    for (var i = 1; i < MACHINE.a; i++) {
		handlers.push(checkHandler(MACHINE, 'big-bang', i));
	    }
	    bigBang(MACHINE, initialWorldValue, handlers);
        });



EXPORTS['on-tick'] = 
    makePrimitiveProcedure(
        'on-tick',
        plt.baselib.lists.makeList(1, 2),
        function(MACHINE) {
	    if (MACHINE.a === 1) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		return new OnTick(f, Math.floor(DEFAULT_TICK_DELAY * 1000));
	    } else if (MACHINE.a === 2) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		var delay = checkNonNegativeReal(MACHINE, "on-tick", 1);
		return new OnTick(f, Math.floor(jsnums.toFixnum(delay) * 1000));
	    }
        });



EXPORTS['to-draw'] =
    makePrimitiveProcedure(
        'to-draw',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new ToDraw(f);
        });




EXPORTS['stop-when'] =
    makePrimitiveProcedure(
        'stop-when',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new StopWhen(f);
        });


EXPORTS['on-key'] =
    makePrimitiveProcedure(
        'on-key',
        1,
        function(MACHINE) {
            var f = checkProcedureWithKey(MACHINE, "on-key", 0);
            return new OnKey(f);
        });

EXPORTS['on-release'] =
    makePrimitiveProcedure(
        'on-release',
        1,
        function(MACHINE) {
            var f = checkProcedureWithKey(MACHINE, "on-key", 0);
            return new OnRelease(f);
        });

EXPORTS['on-mouse'] =
    makePrimitiveProcedure(
        'on-mouse',
        1,
        function(MACHINE) {
            var f = checkProcedureWithMouse(MACHINE, "on-key", 0);
            return new OnMouse(f);
        });



EXPORTS['key=?'] =
    makePrimitiveProcedure(
        'on-key',
        2,
        function(MACHINE) {
            var k1 = checkString(MACHINE, "key=?", 0);
            var k2 = checkString(MACHINE, "key=?", 1);
            return k1.toString().toLowerCase() === k2.toString().toLowerCase();
        });

})(M, exports);
             ns.set("big-bang1.1",exports["big-bang"]);
extNs.set("big-bang",exports["big-bang"]);
modrec.prefix[0]=exports["big-bang"];
ns.set("key=?6.11",exports["key=?"]);
extNs.set("key=?",exports["key=?"]);
modrec.prefix[1]=exports["key=?"];
ns.set("on-key3.5",exports["on-key"]);
extNs.set("on-key",exports["on-key"]);
modrec.prefix[2]=exports["on-key"];
ns.set("on-mouse5.9",exports["on-mouse"]);
extNs.set("on-mouse",exports["on-mouse"]);
modrec.prefix[3]=exports["on-mouse"];
ns.set("on-release4.7",exports["on-release"]);
extNs.set("on-release",exports["on-release"]);
modrec.prefix[4]=exports["on-release"];
ns.set("on-tick2.3",exports["on-tick"]);
extNs.set("on-tick",exports["on-tick"]);
modrec.prefix[5]=exports["on-tick"];
ns.set("stop-when8.15",exports["stop-when"]);
extNs.set("stop-when",exports["stop-when"]);
modrec.prefix[6]=exports["stop-when"];
ns.set("to-draw7.13",exports["to-draw"]);
extNs.set("to-draw",exports["to-draw"]);
modrec.prefix[7]=exports["to-draw"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName31203,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName31203();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/image.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4220=function(M){if(--M.cbt<0){throw _4220;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image.rkt"],M.modules["whalesong/image.rkt"].getExports(),M.modules["whalesong/image.rkt"].getExternalExports(),M.modules["whalesong/image.rkt"].prefix));
return(M.p)(M);};

var _4218=function(M){if(M.modules["whalesong/image/main.rkt"].isInvoked!==false){return(_4220)(M);}else{M.c.push(new RT.CallFrame(_4220,M.p));
return(M.modules["whalesong/image/main.rkt"].label)(M);}};

var _4216=function(M){if(--M.cbt<0){throw _4216;}
M.e.length-=(M.a-1);
return(_4217)(M);};

var _4217=function(M){if(--M.cbt<0){throw _4217;}
if((M.installedModules["whalesong/image/main.rkt"]!==void(0)&&M.modules["whalesong/image/main.rkt"]!==undefined)!==false){return(_4218)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4218);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4218)(M);}};

var _4215=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4217)(M);}else{M.c.push(new RT.CallFrame(_4217,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4213=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4214=function(M){M.modules["whalesong/image.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4215)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4215);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4215)(M);}};

var _4211=function(M){if(--M.cbt<0){throw _4211;}
M.e.length-=(M.a-1);
return(_4212)(M);};

var _4210=function(M){M.c.push(new RT.CallFrame(_4212,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image.rkt"]=function(){return new RT.ModuleRecord("image",_4214);}
return(_4213)(M);};

var _4221=function(M){return(_4210)(M);};

var _4212=function(M){if(--M.cbt<0){throw _4212;}
};

var _4219=function(M){if(--M.cbt<0){throw _4219;}
M.e.length-=(M.a-1);
return(_4220)(M);};

_4217.mvr=_4216;
_4220.mvr=_4219;
_4212.mvr=_4211;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4221(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/image.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/image.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/image/main.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4236=function(M){return(_4222)(M);};

var _4224=function(M){if(--M.cbt<0){throw _4224;}
};

var _4234=function(M){if(--M.cbt<0){throw _4234;}
M.e.length-=(M.a-1);
return(_4235)(M);};

var _4235=function(M){if(--M.cbt<0){throw _4235;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image/main.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image/main.rkt"],M.modules["whalesong/image/main.rkt"].getExports(),M.modules["whalesong/image/main.rkt"].getExternalExports(),M.modules["whalesong/image/main.rkt"].prefix));
return(M.p)(M);};

var _4233=function(M){if(M.modules["whalesong/image/private/color.rkt"].isInvoked!==false){return(_4235)(M);}else{M.c.push(new RT.CallFrame(_4235,M.p));
return(M.modules["whalesong/image/private/color.rkt"].label)(M);}};

var _4231=function(M){if(--M.cbt<0){throw _4231;}
M.e.length-=(M.a-1);
return(_4232)(M);};

var _4232=function(M){if(--M.cbt<0){throw _4232;}
if((M.installedModules["whalesong/image/private/color.rkt"]!==void(0)&&M.modules["whalesong/image/private/color.rkt"]!==undefined)!==false){return(_4233)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/color.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4233);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4233)(M);}};

var _4230=function(M){if(M.modules["whalesong/image/private/main.rkt"].isInvoked!==false){return(_4232)(M);}else{M.c.push(new RT.CallFrame(_4232,M.p));
return(M.modules["whalesong/image/private/main.rkt"].label)(M);}};

var _4228=function(M){if(--M.cbt<0){throw _4228;}
M.e.length-=(M.a-1);
return(_4229)(M);};

var _4229=function(M){if(--M.cbt<0){throw _4229;}
if((M.installedModules["whalesong/image/private/main.rkt"]!==void(0)&&M.modules["whalesong/image/private/main.rkt"]!==undefined)!==false){return(_4230)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4230);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4230)(M);}};

var _4227=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4229)(M);}else{M.c.push(new RT.CallFrame(_4229,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4225=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4226=function(M){M.modules["whalesong/image/main.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4227)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4227);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4227)(M);}};

var _4223=function(M){if(--M.cbt<0){throw _4223;}
M.e.length-=(M.a-1);
return(_4224)(M);};

var _4222=function(M){M.c.push(new RT.CallFrame(_4224,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/main.rkt"]=function(){return new RT.ModuleRecord("main",_4226);}
return(_4225)(M);};

_4229.mvr=_4228;
_4232.mvr=_4231;
_4235.mvr=_4234;
_4224.mvr=_4223;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4236(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/image/main.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/image/main.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/image/private/color.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4316=function(M){if(--M.cbt<0){throw _4316;}
if((M.a-7)===0){return(_4312)(M);}else{RT.si_context_expected(7)(M);
}};

var _4315=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym31699;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym31700;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym31701;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym31702;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4317,M.p));
return((M.p).label)(M);};

var _4313=function(M){if(--M.cbt<0){throw _4313;}
if((M.a-5)===0){return(_4315)(M);}else{RT.si_context_expected(5)(M);
}};

var _4309=function(M){if(--M.cbt<0){throw _4309;}
M.e.length-=(M.a-1);
return(_4310)(M);};

var _4307=function(M){if(--M.cbt<0){throw _4307;}
M.e.length-=(M.a-1);
return(_4308)(M);};

var _4308=function(M){if(--M.cbt<0){throw _4308;}
M.e.push([M.params.currentNamespace.get("struct:color")||M.primitives["struct:color"],M.params.currentNamespace.get("make-color")||M.primitives["make-color"],M.params.currentNamespace.get("color?")||M.primitives["color?"],M.params.currentNamespace.get("color-red")||M.primitives["color-red"],M.params.currentNamespace.get("color-green")||M.primitives["color-green"],M.params.currentNamespace.get("color-blue")||M.primitives["color-blue"],M.params.currentNamespace.get("color-alpha")||M.primitives["color-alpha"],M.params.currentNamespace.get("-color")||M.primitives["-color"]]);M.e[M.e.length-1].names=["struct:color","make-color","color?","color-red","color-green","color-blue","color-alpha","-color"];
M.modules["whalesong/image/private/color.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4310,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym31703;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=4;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.NULL))));
M.e[M.e.length-10]=false;
M.v=sym31703;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4314,M.p));
return((M.p).label)(M);};

var _4306=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4308)(M);}else{M.c.push(new RT.CallFrame(_4308,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4304=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4305=function(M){M.modules["whalesong/image/private/color.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4306)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4306);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4306)(M);}};

var _4296=function(M){if(--M.cbt<0){throw _4296;}
M.e.length-=(M.a-1);
return(_4297)(M);};

var _4294=function(M){if(--M.cbt<0){throw _4294;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:14:4 whalesong/image/private/color.rkt 14 4 329 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4298=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_4293)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_4294)(M);}};

var _4292=function(M){if(--M.cbt<0){throw _4292;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_4298)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_4293)(M);}};

var _4295=function(M){M.c.push(new RT.CallFrame(_4297,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/private/color.rkt"]=function(){return new RT.ModuleRecord("color",_4305);}
return(_4304)(M);};

var _4312=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4293=function(M){if(--M.cbt<0){throw _4293;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:12:4 whalesong/image/private/color.rkt 12 4 292 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=255;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4321=function(M){return(_4295)(M);};

var _4320=function(M){if(--M.cbt<0){throw _4320;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);extNs.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);ns.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);extNs.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);ns.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);extNs.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);ns.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);extNs.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);ns.set("color?", prefix[selfMod.getPrefixOffset("color?")]);extNs.set("color?", prefix[selfMod.getPrefixOffset("color?")]);ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("make-color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);extNs.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);}(M.modules["whalesong/image/private/color.rkt"],M.modules["whalesong/image/private/color.rkt"].getExports(),M.modules["whalesong/image/private/color.rkt"].getExternalExports(),M.modules["whalesong/image/private/color.rkt"].prefix));
return(M.p)(M);};

var _4317=RT.si_context_expected(7);

var _4314=RT.si_context_expected(5);

var _4310=function(M){if(--M.cbt<0){throw _4310;}
M.c.push(new RT.CallFrame(_4320,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_4293,3,[M.e[M.e.length-3]],"...rivate/color.rkt:12:4");
M.e[M.e.length-2]=new RT.Closure(_4294,4,[M.e[M.e.length-3]],"...rivate/color.rkt:14:4");
M.v=new RT.Closure(_4292,RT.makePair(3,RT.makePair(4,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"-color");
M.e.length-=2;
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4297=function(M){if(--M.cbt<0){throw _4297;}
};

var _4319=function(M){if(--M.cbt<0){throw _4319;}
M.e.length-=(M.a-1);
return(_4320)(M);};

_4308.mvr=_4307;
_4314.mvr=_4313;
_4317.mvr=_4316;
_4310.mvr=_4309;
_4320.mvr=_4319;
_4297.mvr=_4296;
var sym31699=RT.makeSymbol("red");
var sym31703=RT.makeSymbol("color");
var sym31702=RT.makeSymbol("alpha");
var sym31701=RT.makeSymbol("blue");
var sym31700=RT.makeSymbol("green");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4321(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/crused/whalesong/whalesong/image/private/color.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/crused/whalesong/whalesong/image/private/color.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/crused/whalesong/whalesong/image/private/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/image/private/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/image/private/main.rkt",
        function(M) {
            
        var afterName31643 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/image/private/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["above14.27","above/align15.29","add-line27.53","angle?51.101","beside12.23","beside/align13.25","bitmap/url3.5","circle29.57","color-list->bitmap43.85","color-list->image42.83","crop25.49","ellipse33.65","empty-scene16.31","flip-horizontal22.43","flip-vertical23.45","frame24.47","image->color-list41.81","image-baseline46.91","image-color?47.93","image-height45.89","image-url4.7","image-width44.87","image?54.107","isosceles-triangle36.71","line26.51","mode?48.95","name->color55.109","open-image-url5.9","overlay6.11","overlay/align8.15","overlay/xy7.13","place-image17.33","place-image/align18.35","radial-star38.75","rectangle31.61","regular-polygon32.63","rhombus40.79","right-triangle35.69","rotate19.37","scale20.39","scale/xy21.41","scene+line28.55","side-count?52.103","square30.59","star37.73","star-polygon39.77","step-count?53.105","text1.1","text/font2.3","triangle34.67","underlay9.17","underlay/align11.21","underlay/xy10.19","x-place?49.97","y-place?50.99"];modrec.prefix.internalNames=["above","above/align","add-line","angle?","beside","beside/align","bitmap/url","circle","color-list->bitmap","color-list->image","crop","ellipse","empty-scene","flip-horizontal","flip-vertical","frame","image->color-list","image-baseline","image-color?","image-height","image-url","image-width","image?","isosceles-triangle","line","mode?","name->color","open-image-url","overlay","overlay/align","overlay/xy","place-image","place-image/align","radial-star","rectangle","regular-polygon","rhombus","right-triangle","rotate","scale","scale/xy","scene+line","side-count?","square","star","star-polygon","step-count?","text","text/font","triangle","underlay","underlay/align","underlay/xy","x-place?","y-place?"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){// This might want to live in the Racket world rather than in
// JavaScript land...


var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };



// Color database
var ColorDb = function() {
    this.colors = {};
};


ColorDb.prototype.put = function(name, color) {
    this.colors[name] = color;
};

ColorDb.prototype.get = function(name) {
    return this.colors[name.toString().toUpperCase()];
};


// FIXME: update toString to handle the primitive field values.

var colorDb = new ColorDb();
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("ORANGERED", makeColor(255, 69, 0));
colorDb.put("TOMATO", makeColor(255, 99, 71));
colorDb.put("DARKRED", makeColor(139, 0, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("FIREBRICK", makeColor(178, 34, 34));
colorDb.put("CRIMSON", makeColor(220, 20, 60));
colorDb.put("DEEPPINK", makeColor(255, 20, 147));
colorDb.put("MAROON", makeColor(176, 48, 96));
colorDb.put("INDIAN RED", makeColor(205, 92, 92));
colorDb.put("INDIANRED", makeColor(205, 92, 92));
colorDb.put("MEDIUM VIOLET RED", makeColor(199, 21, 133));
colorDb.put("MEDIUMVIOLETRED", makeColor(199, 21, 133));
colorDb.put("VIOLET RED", makeColor(208, 32, 144));
colorDb.put("VIOLETRED", makeColor(208, 32, 144));
colorDb.put("LIGHTCORAL", makeColor(240, 128, 128));
colorDb.put("HOTPINK", makeColor(255, 105, 180));
colorDb.put("PALEVIOLETRED", makeColor(219, 112, 147));
colorDb.put("LIGHTPINK", makeColor(255, 182, 193));
colorDb.put("ROSYBROWN", makeColor(188, 143, 143));
colorDb.put("PINK", makeColor(255, 192, 203));
colorDb.put("ORCHID", makeColor(218, 112, 214));
colorDb.put("LAVENDERBLUSH", makeColor(255, 240, 245));
colorDb.put("SNOW", makeColor(255, 250, 250));
colorDb.put("CHOCOLATE", makeColor(210, 105, 30));
colorDb.put("SADDLEBROWN", makeColor(139, 69, 19));
colorDb.put("BROWN", makeColor(132, 60, 36));
colorDb.put("DARKORANGE", makeColor(255, 140, 0));
colorDb.put("CORAL", makeColor(255, 127, 80));
colorDb.put("SIENNA", makeColor(160, 82, 45));
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("SALMON", makeColor(250, 128, 114));
colorDb.put("PERU", makeColor(205, 133, 63));
colorDb.put("DARKGOLDENROD", makeColor(184, 134, 11));
colorDb.put("GOLDENROD", makeColor(218, 165, 32));
colorDb.put("SANDYBROWN", makeColor(244, 164, 96));
colorDb.put("LIGHTSALMON", makeColor(255, 160, 122));
colorDb.put("DARKSALMON", makeColor(233, 150, 122));
colorDb.put("GOLD", makeColor(255, 215, 0));
colorDb.put("YELLOW", makeColor(255, 255, 0));
colorDb.put("OLIVE", makeColor(128, 128, 0));
colorDb.put("BURLYWOOD", makeColor(222, 184, 135));
colorDb.put("TAN", makeColor(210, 180, 140));
colorDb.put("NAVAJOWHITE", makeColor(255, 222, 173));
colorDb.put("PEACHPUFF", makeColor(255, 218, 185));
colorDb.put("KHAKI", makeColor(240, 230, 140));
colorDb.put("DARKKHAKI", makeColor(189, 183, 107));
colorDb.put("MOCCASIN", makeColor(255, 228, 181));
colorDb.put("WHEAT", makeColor(245, 222, 179));
colorDb.put("BISQUE", makeColor(255, 228, 196));
colorDb.put("PALEGOLDENROD", makeColor(238, 232, 170));
colorDb.put("BLANCHEDALMOND", makeColor(255, 235, 205));
colorDb.put("MEDIUM GOLDENROD", makeColor(234, 234, 173));
colorDb.put("MEDIUMGOLDENROD", makeColor(234, 234, 173));
colorDb.put("PAPAYAWHIP", makeColor(255, 239, 213));
colorDb.put("MISTYROSE", makeColor(255, 228, 225));
colorDb.put("LEMONCHIFFON", makeColor(255, 250, 205));
colorDb.put("ANTIQUEWHITE", makeColor(250, 235, 215));
colorDb.put("CORNSILK", makeColor(255, 248, 220));
colorDb.put("LIGHTGOLDENRODYELLOW", makeColor(250, 250, 210));
colorDb.put("OLDLACE", makeColor(253, 245, 230));
colorDb.put("LINEN", makeColor(250, 240, 230));
colorDb.put("LIGHTYELLOW", makeColor(255, 255, 224));
colorDb.put("SEASHELL", makeColor(255, 245, 238));
colorDb.put("BEIGE", makeColor(245, 245, 220));
colorDb.put("FLORALWHITE", makeColor(255, 250, 240));
colorDb.put("IVORY", makeColor(255, 255, 240));
colorDb.put("GREEN", makeColor(0, 255, 0));
colorDb.put("LAWNGREEN", makeColor(124, 252, 0));
colorDb.put("CHARTREUSE", makeColor(127, 255, 0));
colorDb.put("GREEN YELLOW", makeColor(173, 255, 47));
colorDb.put("GREENYELLOW", makeColor(173, 255, 47));
colorDb.put("YELLOW GREEN", makeColor(154, 205, 50));
colorDb.put("YELLOWGREEN", makeColor(154, 205, 50));
colorDb.put("MEDIUM FOREST GREEN", makeColor(107, 142, 35));
colorDb.put("OLIVEDRAB", makeColor(107, 142, 35));
colorDb.put("MEDIUMFORESTGREEN", makeColor(107, 142, 35));
colorDb.put("DARK OLIVE GREEN", makeColor(85, 107, 47));
colorDb.put("DARKOLIVEGREEN", makeColor(85, 107, 47));
colorDb.put("DARKSEAGREEN", makeColor(143, 188, 139));
colorDb.put("LIME", makeColor(0, 255, 0));
colorDb.put("DARK GREEN", makeColor(0, 100, 0));
colorDb.put("DARKGREEN", makeColor(0, 100, 0));
colorDb.put("LIME GREEN", makeColor(50, 205, 50));
colorDb.put("LIMEGREEN", makeColor(50, 205, 50));
colorDb.put("FOREST GREEN", makeColor(34, 139, 34));
colorDb.put("FORESTGREEN", makeColor(34, 139, 34));
colorDb.put("SPRING GREEN", makeColor(0, 255, 127));
colorDb.put("SPRINGGREEN", makeColor(0, 255, 127));
colorDb.put("MEDIUM SPRING GREEN", makeColor(0, 250, 154));
colorDb.put("MEDIUMSPRINGGREEN", makeColor(0, 250, 154));
colorDb.put("SEA GREEN", makeColor(46, 139, 87));
colorDb.put("SEAGREEN", makeColor(46, 139, 87));
colorDb.put("MEDIUM SEA GREEN", makeColor(60, 179, 113));
colorDb.put("MEDIUMSEAGREEN", makeColor(60, 179, 113));
colorDb.put("AQUAMARINE", makeColor(112, 216, 144));
colorDb.put("LIGHTGREEN", makeColor(144, 238, 144));
colorDb.put("PALE GREEN", makeColor(152, 251, 152));
colorDb.put("PALEGREEN", makeColor(152, 251, 152));
colorDb.put("MEDIUM AQUAMARINE", makeColor(102, 205, 170));
colorDb.put("MEDIUMAQUAMARINE", makeColor(102, 205, 170));
colorDb.put("TURQUOISE", makeColor(64, 224, 208));
colorDb.put("LIGHTSEAGREEN", makeColor(32, 178, 170));
colorDb.put("MEDIUM TURQUOISE", makeColor(72, 209, 204));
colorDb.put("MEDIUMTURQUOISE", makeColor(72, 209, 204));
colorDb.put("HONEYDEW", makeColor(240, 255, 240));
colorDb.put("MINTCREAM", makeColor(245, 255, 250));
colorDb.put("ROYALBLUE", makeColor(65, 105, 225));
colorDb.put("DODGERBLUE", makeColor(30, 144, 255));
colorDb.put("DEEPSKYBLUE", makeColor(0, 191, 255));
colorDb.put("CORNFLOWERBLUE", makeColor(100, 149, 237));
colorDb.put("STEEL BLUE", makeColor(70, 130, 180));
colorDb.put("STEELBLUE", makeColor(70, 130, 180));
colorDb.put("LIGHTSKYBLUE", makeColor(135, 206, 250));
colorDb.put("DARK TURQUOISE", makeColor(0, 206, 209));
colorDb.put("DARKTURQUOISE", makeColor(0, 206, 209));
colorDb.put("CYAN", makeColor(0, 255, 255));
colorDb.put("AQUA", makeColor(0, 255, 255));
colorDb.put("DARKCYAN", makeColor(0, 139, 139));
colorDb.put("TEAL", makeColor(0, 128, 128));
colorDb.put("SKY BLUE", makeColor(135, 206, 235));
colorDb.put("SKYBLUE", makeColor(135, 206, 235));
colorDb.put("CADET BLUE", makeColor(96, 160, 160));
colorDb.put("CADETBLUE", makeColor(95, 158, 160));
colorDb.put("DARK SLATE GRAY", makeColor(47, 79, 79));
colorDb.put("DARKSLATEGRAY", makeColor(47, 79, 79));
colorDb.put("LIGHTSLATEGRAY", makeColor(119, 136, 153));
colorDb.put("SLATEGRAY", makeColor(112, 128, 144));
colorDb.put("LIGHT STEEL BLUE", makeColor(176, 196, 222));
colorDb.put("LIGHTSTEELBLUE", makeColor(176, 196, 222));
colorDb.put("LIGHT BLUE", makeColor(173, 216, 230));
colorDb.put("LIGHTBLUE", makeColor(173, 216, 230));
colorDb.put("POWDERBLUE", makeColor(176, 224, 230));
colorDb.put("PALETURQUOISE", makeColor(175, 238, 238));
colorDb.put("LIGHTCYAN", makeColor(224, 255, 255));
colorDb.put("ALICEBLUE", makeColor(240, 248, 255));
colorDb.put("AZURE", makeColor(240, 255, 255));
colorDb.put("MEDIUM BLUE", makeColor(0, 0, 205));
colorDb.put("MEDIUMBLUE", makeColor(0, 0, 205));
colorDb.put("DARKBLUE", makeColor(0, 0, 139));
colorDb.put("MIDNIGHT BLUE", makeColor(25, 25, 112));
colorDb.put("MIDNIGHTBLUE", makeColor(25, 25, 112));
colorDb.put("NAVY", makeColor(36, 36, 140));
colorDb.put("BLUE", makeColor(0, 0, 255));
colorDb.put("INDIGO", makeColor(75, 0, 130));
colorDb.put("BLUE VIOLET", makeColor(138, 43, 226));
colorDb.put("BLUEVIOLET", makeColor(138, 43, 226));
colorDb.put("MEDIUM SLATE BLUE", makeColor(123, 104, 238));
colorDb.put("MEDIUMSLATEBLUE", makeColor(123, 104, 238));
colorDb.put("SLATE BLUE", makeColor(106, 90, 205));
colorDb.put("SLATEBLUE", makeColor(106, 90, 205));
colorDb.put("PURPLE", makeColor(160, 32, 240));
colorDb.put("DARK SLATE BLUE", makeColor(72, 61, 139));
colorDb.put("DARKSLATEBLUE", makeColor(72, 61, 139));
colorDb.put("DARKVIOLET", makeColor(148, 0, 211));
colorDb.put("DARK ORCHID", makeColor(153, 50, 204));
colorDb.put("DARKORCHID", makeColor(153, 50, 204));
colorDb.put("MEDIUMPURPLE", makeColor(147, 112, 219));
colorDb.put("CORNFLOWER BLUE", makeColor(68, 64, 108));
colorDb.put("MEDIUM ORCHID", makeColor(186, 85, 211));
colorDb.put("MEDIUMORCHID", makeColor(186, 85, 211));
colorDb.put("MAGENTA", makeColor(255, 0, 255));
colorDb.put("FUCHSIA", makeColor(255, 0, 255));
colorDb.put("DARKMAGENTA", makeColor(139, 0, 139));
colorDb.put("VIOLET", makeColor(238, 130, 238));
colorDb.put("PLUM", makeColor(221, 160, 221));
colorDb.put("LAVENDER", makeColor(230, 230, 250));
colorDb.put("THISTLE", makeColor(216, 191, 216));
colorDb.put("GHOSTWHITE", makeColor(248, 248, 255));
colorDb.put("WHITE", makeColor(255, 255, 255));
colorDb.put("WHITESMOKE", makeColor(245, 245, 245));
colorDb.put("GAINSBORO", makeColor(220, 220, 220));
colorDb.put("LIGHT GRAY", makeColor(211, 211, 211));
colorDb.put("LIGHTGRAY", makeColor(211, 211, 211));
colorDb.put("SILVER", makeColor(192, 192, 192));
colorDb.put("GRAY", makeColor(190, 190, 190));
colorDb.put("DARK GRAY", makeColor(169, 169, 169));
colorDb.put("DARKGRAY", makeColor(169, 169, 169));
colorDb.put("DIM GRAY", makeColor(105, 105, 105));
colorDb.put("DIMGRAY", makeColor(105, 105, 105));
colorDb.put("BLACK", makeColor(0, 0, 0));



EXPORTS['_colorDb'] = colorDb;

// Basic implementation of the image library.
//
// This should mimic the implementation of 2htdp/image.


//////////////////////////////////////////////////////////////////////
var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };
var isColor = colorStruct.predicate;
var colorRed = function(c) { return colorStruct.accessor(c, 0); };
var colorGreen = function(c) { return colorStruct.accessor(c, 1); };
var colorBlue = function(c) { return colorStruct.accessor(c, 2); };
var colorAlpha = function(c) { return colorStruct.accessor(c, 3); };
//////////////////////////////////////////////////////////////////////

var heir = plt.baselib.heir;
var clone = plt.baselib.clone;




var isAngle = function(x) {
    return plt.baselib.numbers.isReal(x) &&
        jsnums.greaterThanOrEqual(x, 0) &&
        jsnums.lessThan(x, 360);
};




// Produces true if the value is a color or a color string.
// On the Racket side of things, this is exposed as image-color?.
var isColorOrColorString = function(thing) {
    return (isColor(thing) ||
	    ((plt.baselib.strings.isString(thing) ||
              plt.baselib.symbols.isSymbol(thing)) &&
	     typeof(colorDb.get(thing)) != 'undefined'));
}






var colorString = function(aColor) {
    return ("rgb(" + 
	    colorRed(aColor) + "," +
	    colorGreen(aColor) + ", " + 
	    colorBlue(aColor) + ")");
};






var isSideCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 3);
};

var isStepCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 1);
};


var isPointsCount = function(x) {
    return plt.baselib.numbers.isNatural(x) && jsnums.greaterThanOrEqual(x, 2); 
};





// Produces true if thing is an image-like object.
var isImage = function(thing) {
    if (typeof(thing.getHeight) !== 'function')
        return false;
    if (typeof(thing.getWidth) !== 'function')
        return false;
    if (typeof(thing.getBaseline) !== 'function')
        return false;
    if (typeof(thing.updatePinhole) !== 'function')
        return false;
    if (typeof(thing.render) !== 'function')
        return false;
    return true;
};



// Base class for all images.
var BaseImage = function(pinholeX, pinholeY) {
    this.pinholeX = pinholeX;
    this.pinholeY = pinholeY;
};



BaseImage.prototype.updatePinhole = function(x, y) {
    var aCopy = clone(this);
    aCopy.pinholeX = x;
    aCopy.pinholeY = y;
    return aCopy;
};

BaseImage.prototype.getHeight = function(){
    return this.height;
};

BaseImage.prototype.getWidth = function(){
    return this.width;
};

BaseImage.prototype.getBaseline = function(){
    return this.height;
};


// render: context fixnum fixnum: -> void
// Render the image, where the upper-left corner of the image is drawn at
// (x, y).
// NOTE: the rendering should be oblivous to the pinhole.
BaseImage.prototype.render = function(ctx, x, y) {
    throw new Error('BaseImage.render unimplemented!');
};


// makeCanvas: number number -> canvas
// Constructs a canvas object of a particular width and height.
var makeCanvas = function(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    jQuery(canvas).css('width', canvas.width + "px");
    jQuery(canvas).css('height', canvas.height + "px");
    jQuery(canvas).css('padding', '0px');

    // KLUDGE: IE compatibility uses /js/excanvas.js, and dynamic
    // elements must be marked this way.
    if (window.G_vmlCanvasManager) {
	canvas = window.G_vmlCanvasManager.initElement(canvas);
    }
    return canvas;
};



var withIeHack = function(canvas, f) {
    // 	canvas.style.display = 'none';
    // 	document.body.appendChild(canvas);
    // 	try {
    var result = f(canvas);
    // 	} catch(e) {
    // 	    document.body.removeChild(canvas);
    // 	    canvas.style.display = '';
    // 	    throw e;
    // 	}
    // 	document.body.removeChild(canvas);
    // 	canvas.style.display = '';
    return result;
};



// Images are expected to define a render() method, which is used
// here to draw to the canvas.
BaseImage.prototype.toDomNode = function(params) {
    var that = this;
    var width = that.getWidth();
    var height = that.getHeight();
    var canvas = makeCanvas(width, height);
    var ctx;

    // // Try best effort to render to screen at this point.
    // try {
    //     ctx = canvas.getContext("2d");
    //     that.render(ctx, 0, 0);
    // } catch (e) {
    // }
    // KLUDGE: on IE, the canvas rendering functions depend on a
    // context where the canvas is attached to the DOM tree.
    // We initialize an afterAttach hook; the client's responsible
    // for calling this after the dom node is attached to the
    // document.
    var onAfterAttach = function(event) {
        // jQuery(canvas).unbind('afterAttach', onAfterAttach);
	var ctx = this.getContext("2d");
	that.render(ctx, 0, 0);
    };
    jQuery(canvas).bind('afterAttach', onAfterAttach);

    // Canvases lose their drawn content on cloning.  data may help us to preserve it.
    jQuery(canvas).data('toRender', onAfterAttach);

    return canvas;
};




BaseImage.prototype.toWrittenString = function(cache) { return "<image>"; }
BaseImage.prototype.toDisplayedString = function(cache) { return "<image>"; }

BaseImage.prototype.equals = function(other, aUnionFind) {
    return (this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




// isScene: any -> boolean
// Produces true when x is a scene.
var isScene = function(x) {
    return ((x != undefined) && (x != null) && (x instanceof SceneImage));
};


//////////////////////////////////////////////////////////////////////
// SceneImage: primitive-number primitive-number (listof image) -> Scene
var SceneImage = function(width, height, children, withBorder) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.children = children; // arrayof [image, number, number]
    this.withBorder = withBorder;
}
SceneImage.prototype = heir(BaseImage.prototype);


// add: image primitive-number primitive-number -> Scene
SceneImage.prototype.add = function(anImage, x, y) {
    return new SceneImage(this.width, 
			  this.height,
			  this.children.concat([[anImage, 
						 x - anImage.pinholeX, 
						 y - anImage.pinholeY]]),
			  this.withBorder);
};

// render: 2d-context primitive-number primitive-number -> void
SceneImage.prototype.render = function(ctx, x, y) {
    var i;
    var childImage, childX, childY;
    // Clear the scene.
    ctx.clearRect(x, y, this.width, this.height);
    // Then ask every object to render itself.
    for(i = 0; i < this.children.length; i++) {
	childImage = this.children[i][0];
	childX = this.children[i][1];
	childY = this.children[i][2];
	ctx.save();
	childImage.render(ctx, childX + x, childY + y);
	ctx.restore();


    }
    // Finally, draw the black border if withBorder is true
    if (this.withBorder) {
	ctx.strokeStyle = 'black';
	ctx.strokeRect(x, y, this.width, this.height);
    }
};

SceneImage.prototype.equals = function(other, aUnionFind) {
    if (!(other instanceof SceneImage)) {
	return false;
    } 

    if (this.pinholeX != other.pinholeX ||
	this.pinholeY != other.pinholeY ||
	this.width != other.width ||
	this.height != other.height ||
	this.children.length != other.children.length) {
	return false;
    }

    for (var i = 0; i < this.children.length; i++) {
	var rec1 = this.children[i];
	var rec2 = other.children[i];
	if (rec1[1] !== rec2[1] ||
	    rec1[2] !== rec2[2] ||
	    !plt.baselib.equality.equals(rec1[0], 
			                 rec2[0],
			                 aUnionFind)) {
	    return false;
 	}
    }
    return true;
};


//////////////////////////////////////////////////////////////////////
// FileImage: string node -> Image
var FileImage = function(src, rawImage) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    this.isLoaded = false;

    // animationHack: see installHackToSupportAnimatedGifs() for details.
    this.animationHackImg = undefined;

    if (rawImage && rawImage.complete) { 
	this.img = rawImage;
	this.isLoaded = true;
	this.pinholeX = self.img.width / 2;
	this.pinholeY = self.img.height / 2;
    } else {
	// fixme: we may want to do something blocking here for
	// onload, since we don't know at this time what the file size
	// should be, nor will drawImage do the right thing until the
	// file is loaded.
	this.img = new Image();
	this.img.onload = function() {
	    self.isLoaded = true;
	    self.pinholeX = self.img.width / 2;
	    self.pinholeY = self.img.height / 2;
	};
	this.img.onerror = function(e) {
	    self.img.onerror = "";
	    self.img.src = "http://www.wescheme.org/images/broken.png";
	}
	this.img.src = src;
    }
}
FileImage.prototype = heir(BaseImage.prototype);


var imageCache = {};
FileImage.makeInstance = function(path, rawImage) {
    if (! (path in imageCache)) {
	imageCache[path] = new FileImage(path, rawImage);
    } 
    return imageCache[path];
};

FileImage.installInstance = function(path, rawImage) {
    imageCache[path] = new FileImage(path, rawImage);
};

FileImage.installBrokenImage = function(path) {
    imageCache[path] = new TextImage("Unable to load " + path, 10, colorDb.get("red"),
				     "normal", "Optimer","","",false);
};



FileImage.prototype.render = function(ctx, x, y) {
    this.installHackToSupportAnimatedGifs();
    ctx.drawImage(this.animationHackImg, x, y);
};


// The following is a hack that we use to allow animated gifs to show
// as animating on the canvas.
FileImage.prototype.installHackToSupportAnimatedGifs = function() {
    if (this.animationHackImg) { return; }
    this.animationHackImg = this.img.cloneNode(true);
    document.body.appendChild(this.animationHackImg);
    this.animationHackImg.width = 0;
    this.animationHackImg.height = 0;
};


FileImage.prototype.getWidth = function() {
    return this.img.width;
};


FileImage.prototype.getHeight = function() {
    return this.img.height;
};

// Override toDomNode: we don't need a full-fledged canvas here.
FileImage.prototype.toDomNode = function(params) {
    return this.img.cloneNode(true);
};

FileImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof FileImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};

//////////////////////////////////////////////////////////////////////
// VideoImage: String Node -> Video
var VideoImage = function(src, rawVideo) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    if (rawVideo) { 
	this.video			= rawVideo;
	this.width			= self.video.videoWidth;
	this.height			= self.video.videoHeight;
	this.pinholeX		= self.width / 2;
	this.pinholeY		= self.height / 2;
	this.video.volume	= 1;
	this.video.poster	= "http://www.wescheme.org/images/broken.png";
	this.video.autoplay	= true;
	this.video.autobuffer=true;
	this.video.loop		= true;
	this.video.play();
    } else {
	// fixme: we may want to do something blocking here for
	// onload, since we don't know at this time what the file size
	// should be, nor will drawImage do the right thing until the
	// file is loaded.
	this.video = document.createElement('video');
	this.video.src = src;
	this.video.addEventListener('canplay', function() {
	    this.width			= self.video.videoWidth;
	    this.height			= self.video.videoHeight;
	    this.pinholeX		= self.width / 2;
	    this.pinholeY		= self.height / 2;
	    this.video.poster	= "http://www.wescheme.org/images/broken.png";
	    this.video.autoplay	= true;
	    this.video.autobuffer=true;
	    this.video.loop		= true;
	    this.video.play();
	});
	this.video.addEventListener('error', function(e) {
	    self.video.onerror = "";
	    self.video.poster = "http://www.wescheme.org/images/broken.png";
	});
    }
}
VideoImage.prototype = heir(BaseImage.prototype);


var videos = {};
VideoImage.makeInstance = function(path, rawVideo) {
    if (! (path in VideoImage)) {
	videos[path] = new VideoImage(path, rawVideo);
    } 
    return videos[path];
};

VideoImage.prototype.render = function(ctx, x, y) {
    ctx.drawImage(this.video, x, y);
};

VideoImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof VideoImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};


//////////////////////////////////////////////////////////////////////
// OverlayImage: image image placeX placeY -> image
// Creates an image that overlays img1 on top of the
// other image. 
var OverlayImage = function(img1, img2, placeX, placeY) {
    // calculate centers using width/height, so we are scene/image agnostic
    var c1x = img1.getWidth()/2;
    var c1y = img1.getHeight()/2;
    var c2x = img2.getWidth()/2;
    var c2y = img2.getHeight()/2;

    // calculate absolute offset of 2nd image's *CENTER*
    // convert relative X,Y to center offsets, 
    // if placeX and placeY are UL corner offsets, convert to center offsets
    if	(placeX == "left"  )	var xOffset = img2.getWidth()-(c1x+c2x);
    else if (placeX == "right" )	var xOffset = img1.getWidth()-(c1x+c2x);
    else if (placeX == "beside")	var xOffset = c1x+c2x;
    else if (placeX == "middle")	var xOffset = 0;
    else if (placeX == "center")	var xOffset = 0;
    else				var xOffset = placeX - (c1x-c2x);

    if	(placeY == "bottom")	var yOffset = img1.getHeight()-(c1y+c2y);
    else if (placeY == "top")	var yOffset = img2.getHeight()-(c1y+c2y); 
    else if (placeY == "above" )	var yOffset = c1y+c2y;
    else if (placeY == "middle")	var yOffset = 0;
    else if	(placeY == "center")	var yOffset = 0;
    else if (placeY == "baseline")	var yOffset= img1.getBaseline()-img2.getBaseline();
    else				var yOffset = placeY - (c1y-c2y);

    // Correct offsets when dealing with Scenes instead of images,
    // by adding the center values
    if(isScene(img1)){xOffset =+c1x; yOffset =+c1y;}
    if(isScene(img2)){xOffset =+c2x; yOffset =+c2y;}
    
    // The *center* of the 2nd image, once overlaid, changes by the original difference in centers, 
    // plus the size of the offsets. Calculate this delta for X and Y.
    var deltaX	= c1x - c2x + xOffset; 
    var deltaY	= c1y - c2y + yOffset;

    // Each edge of the new, combined image may be grown or shrunk, depending on deltaX or deltaY
    var left	= Math.min(0, deltaX);
    var top		= Math.min(0, deltaY);
    var right	= Math.max(deltaX + img2.getWidth(),  img1.getWidth());
    var bottom	= Math.max(deltaY + img2.getHeight(), img1.getHeight());
    
    // Calculate the new width, height and center based on edge lengths
    this.width = right - left;
    this.height = bottom - top;
    BaseImage.call(this, 
		   Math.floor((right-left) / 2),
		   Math.floor((bottom-top) / 2));

    // store the overlaid images, and the offsets for each
    this.img1 = img1;
    this.img2 = img2;
    this.img1Dx = -left;
    this.img1Dy = -top;
    this.img2Dx = deltaX - left;	
    this.img2Dy = deltaY - top;
};


OverlayImage.prototype = heir(BaseImage.prototype);


OverlayImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img2.render(ctx, x + this.img2Dx, y + this.img2Dy);
    this.img1.render(ctx, x + this.img1Dx, y + this.img1Dy);
    ctx.restore();
};

OverlayImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof OverlayImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.img1Dx == other.img1Dx &&
	     this.img1Dy == other.img1Dy &&
	     this.img2Dx == other.img2Dx &&
	     this.img2Dy == other.img2Dy &&
	     plt.baselib.equality.equals(this.img1, other.img1, aUnionFind) &&
	     plt.baselib.equality.equals(this.img2, other.img2, aUnionFind) );
};


//////////////////////////////////////////////////////////////////////
// rotate: angle image -> image
// Rotates image by angle degrees in a counter-clockwise direction.
// based on http://stackoverflow.com/questions/3276467/adjusting-div-width-and-height-after-rotated
var RotateImage = function(angle, img) {
    var sin   = Math.sin(angle * Math.PI / 180),
        cos = Math.cos(angle * Math.PI / 180);
    var width = img.getWidth();
    var height = img.getHeight();

    // (w,0) rotation
    var x1 = (cos * width),
        y1 = (sin * width);
    
    // (0,h) rotation
    var x2 = (-sin * height),
        y2 = ( cos * height);
    
    // (w,h) rotation
    var x3 = (cos * width - sin * height),
        y3 = (sin * width + cos * height);
    
    var minX = Math.min(0, x1, x2, x3),
        maxX = Math.max(0, x1, x2, x3),
        minY = Math.min(0, y1, y2, y3),
        maxY = Math.max(0, y1, y2, y3);
    
    var rotatedWidth  = maxX - minX,
        rotatedHeight = maxY - minY;
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor(rotatedWidth / 2),
		   Math.floor(rotatedHeight / 2));
    this.img	= img;
    this.width	= Math.floor(rotatedWidth);
    this.height = Math.floor(rotatedHeight);
    this.angle	= angle;
    this.translateX = Math.floor(-minX);
    this.translateY = Math.floor(-minY);
};

RotateImage.prototype = heir(BaseImage.prototype);


// translate the canvas using the calculated values, then draw at the rotated (x,y) offset.
RotateImage.prototype.render = function(ctx, x, y) {
    // calculate the new x and y offsets, by rotating the radius formed by the hypoteneuse
    var sin	= Math.sin(this.angle * Math.PI / 180),
    cos	= Math.cos(this.angle * Math.PI / 180),
    r	= Math.sqrt(x*x + y*y);
    ctx.save();
    ctx.translate(x + this.translateX, y + this.translateY);
    ctx.rotate(this.angle * Math.PI / 180);
    this.img.render(ctx, 0, 0);
    ctx.restore();
};


RotateImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof RotateImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.angle == other.angle &&
	     this.translateX == other.translateX &&
	     this.translateY == other.translateY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// ScaleImage: factor factor image -> image
// Scale an image
var ScaleImage = function(xFactor, yFactor, img) {
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor((img.getWidth() * xFactor) / 2),
		   Math.floor((img.getHeight() * yFactor) / 2));
    
    this.img	= img;
    this.width	= Math.floor(img.getWidth() * xFactor);
    this.height = Math.floor(img.getHeight() * yFactor);
    this.xFactor = xFactor;
    this.yFactor = yFactor;
};

ScaleImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
ScaleImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.scale(this.xFactor, this.yFactor);
    this.img.render(ctx, x / this.xFactor, y / this.yFactor);
    ctx.restore();
};


ScaleImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof ScaleImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.xFactor == other.xFactor &&
	     this.yFactor == other.yFactor &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// CropImage: startX startY width height image -> image
// Crop an image
var CropImage = function(x, y, width, height, img) {
    
    BaseImage.call(this, 
		   Math.floor(width / 2),
		   Math.floor(height / 2));
    
    this.x		= x;
    this.y		= y;
    this.width	= width;
    this.height = height;
    this.img	= img;
};

CropImage.prototype = heir(BaseImage.prototype);


CropImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.translate(-this.x, -this.y);
    this.img.render(ctx, x, y);
    ctx.restore();
};

CropImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof CropImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.x == other.x &&
	     this.y == other.y &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FrameImage: factor factor image -> image
// Stick a frame around the image
var FrameImage = function(img) {
    
    BaseImage.call(this, 
		   Math.floor(img.getWidth()/ 2),
		   Math.floor(img.getHeight()/ 2));
    
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
};

FrameImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
FrameImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img.render(ctx, x, y);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, this.width, this.height);
    ctx.closePath();
    ctx.restore();
};

FrameImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FrameImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FlipImage: image string -> image
// Flip an image either horizontally or vertically
var FlipImage = function(img, direction) {
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
    this.direction = direction;
    BaseImage.call(this, 
		   img.pinholeX,
		   img.pinholeY);
};

FlipImage.prototype = heir(BaseImage.prototype);


FlipImage.prototype.render = function(ctx, x, y) {
    // when flipping an image of dimension M and offset by N across an axis, 
    // we need to translate the canvas by M+2N in the opposite direction
    ctx.save();
    if(this.direction == "horizontal"){
	ctx.scale(-1, 1);
	ctx.translate(-(this.width+2*x), 0);
	this.img.render(ctx, x, y);
    }
    if (this.direction == "vertical"){
	ctx.scale(1, -1);
	ctx.translate(0, -(this.height+2*y));
	this.img.render(ctx, x, y);
    }
    ctx.restore();
};


FlipImage.prototype.getWidth = function() {
    return this.width;
};

FlipImage.prototype.getHeight = function() {
    return this.height;
};

FlipImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FlipImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.direction == other.direction &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};





//////////////////////////////////////////////////////////////////////
// RectangleImage: Number Number Mode Color -> Image
var RectangleImage = function(width, height, style, color) {
    BaseImage.call(this, width/2, height/2);
    this.width = width;
    this.height = height;
    this.style = style;
    this.color = color;
};
RectangleImage.prototype = heir(BaseImage.prototype);


RectangleImage.prototype.render = function(ctx, x, y) {
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = colorString(this.color);
	ctx.strokeRect(x, y, this.width, this.height);
	ctx.closePath();
	ctx.restore();
    } else {
	ctx.save();
	ctx.beginPath();

	ctx.fillStyle = colorString(this.color);
	ctx.fillRect(x, y, this.width, this.height);

	ctx.closePath();
	ctx.restore();
    }
};

RectangleImage.prototype.getWidth = function() {
    return this.width;
};


RectangleImage.prototype.getHeight = function() {
    return this.height;
};

RectangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RectangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
// RhombusImage: Number Number Mode Color -> Image
var RhombusImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = half of height
    this.height = Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side * 2;
    BaseImage.call(this, this.width/2, this.height/2);
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
};
RhombusImage.prototype = heir(BaseImage.prototype);


RhombusImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    ctx.moveTo(x+this.getWidth()/2, y);
    ctx.lineTo(x+this.getWidth(), y+this.getHeight()/2);
    ctx.lineTo(x+this.getWidth()/2, y+this.getHeight());
    ctx.lineTo(x, y+this.getHeight()/2);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RhombusImage.prototype.getWidth = function() {
    return this.width;
};


RhombusImage.prototype.getHeight = function() {
    return this.height;
};

RhombusImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RhombusImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////


var ImageDataImage = function(imageData) {
    BaseImage.call(this, 0, 0);
    this.imageData = imageData;
    this.width = imageData.width;
    this.height = imageData.height;
};

ImageDataImage.prototype = heir(BaseImage.prototype);

ImageDataImage.prototype.render = function(ctx, x, y) {
    ctx.putImageData(this.imageData, x, y);
};

ImageDataImage.prototype.getWidth = function() {
    return this.width;
};


ImageDataImage.prototype.getHeight = function() {
    return this.height;
};

ImageDataImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof ImageDataImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




//////////////////////////////////////////////////////////////////////
// PolygonImage: Number Count Step Mode Color -> Image
//
// See http://www.algebra.com/algebra/homework/Polygons/Inscribed-and-circumscribed-polygons.lesson
// the polygon is inscribed in a circle, whose radius is length/2sin(pi/count)
// another circle is inscribed in the polygon, whose radius is length/2tan(pi/count)
// rotate a 3/4 quarter turn plus half the angle length to keep bottom base level
var PolygonImage = function(length, count, step, style, color) {
    this.aVertices = [];
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;
    
    this.outerRadius = Math.floor(length/(2*Math.sin(Math.PI/count)));
    this.innerRadius = Math.floor(length/(2*Math.tan(Math.PI/count)));
    var adjust = (3*Math.PI/2)+Math.PI/count;
    
    // rotate around outer circle, storing x,y pairs as vertices
    // keep track of mins and maxs
    var radians = 0;
    for(var i = 0; i < count; i++) {
	// rotate to the next vertex (skipping by this.step)
	radians = radians + (step*2*Math.PI/count);
	
	var v = {	x: this.outerRadius*Math.cos(radians-adjust),
			y: this.outerRadius*Math.sin(radians-adjust) };
	if(v.x < xMin) xMin = v.x;
	if(v.x > xMax) xMax = v.y;
	if(v.y < yMin) yMin = v.x;
	if(v.y > yMax) yMax = v.y;
	this.aVertices.push(v);		
    }
    // HACK: try to work around handling of non-integer coordinates in CANVAS
    // by ensuring that the boundaries of the canvas are outside of the vertices
    for(var i=0; i<this.aVertices.length; i++){
	if(this.aVertices[i].x < xMin) xMin = this.aVertices[i].x-1;
	if(this.aVertices[i].x > xMax) xMax = this.aVertices[i].x+1;
	if(this.aVertices[i].y < yMin) yMin = this.aVertices[i].y-1;
	if(this.aVertices[i].y > yMax) yMax = this.aVertices[i].y+1;
    }
    
    this.width	= Math.floor(xMax-xMin);
    this.height	= Math.floor(yMax-yMin);
    this.length	= length;
    this.count	= count;
    this.step	= step;
    this.style	= style;
    this.color	= color;
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
};
PolygonImage.prototype = heir(BaseImage.prototype);


// shift all vertices by an offset to put the center of the polygon at the 
// center of the canvas. Even-sided polygons highest points are in line with
// the innerRadius. Odd-sides polygons highest vertex is on the outerRadius
PolygonImage.prototype.render = function(ctx, x, y) {
    var xOffset = x+Math.round(this.width/2);
    var yOffset = y+((this.count % 2)? this.outerRadius : this.innerRadius);
    
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    for(var i=1; i<this.aVertices.length; i++){
	ctx.lineTo(xOffset+this.aVertices[i].x, yOffset+this.aVertices[i].y);
    }
    ctx.lineTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

PolygonImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof PolygonImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.length == other.length &&
	    this.step == other.step &&
	    this.count == other.count &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


var maybeQuote = function(s) {
    if (/ /.test(s)) {
	return "\"" + s + "\"";
    }
    return s;
}

//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
var TextImage = function(msg, size, color, face, family, style, weight, underline) {	
    var metrics;
    this.msg	= msg;
    this.size	= size;
    this.color	= color;
    this.face	= face;
    this.family = family;
    this.style	= (style == "slant")? "oblique" : style;  // Racket's "slant" -> CSS's "oblique"
    this.weight	= (weight== "light")? "lighter" : weight; // Racket's "light" -> CSS's "lighter"
    this.underline	= underline;
    // example: "bold italic 20px 'Times', sans-serif". 
    // Default weight is "normal", face is "Optimer"
    var canvas	= makeCanvas(0, 0);
    var ctx		= canvas.getContext("2d");
    
    this.font = (this.weight + " " +
		 this.style + " " +
		 this.size + "px " +
		 maybeQuote(this.face) + " " +
		 maybeQuote(this.family));
    try {
	ctx.font	= this.font;
    } catch (e) {
	this.fallbackOnFont();
	ctx.font	= this.font;
    }
    
    // Defensive: on IE, this can break.
    try {
	metrics	= ctx.measureText(msg);
	this.width	= metrics.width;
	this.height	= Number(this.size); 
    } catch(e) {
	this.fallbackOnFont();
    }
    BaseImage.call(this, Math.round(this.width/2), 0);// weird pinhole settings needed for "baseline" alignment
}


TextImage.prototype = heir(BaseImage.prototype);

TextImage.prototype.fallbackOnFont = function() {
    // Defensive: if the browser doesn't support certain features, we
    // reduce to a smaller feature set and try again.
    this.font	= this.size + "px " + maybeQuote(this.family);    
    var canvas	= makeCanvas(0, 0);
    var ctx	= canvas.getContext("2d");
    ctx.font	= this.font;
    var metrics	= ctx.measureText(this.msg);
    this.width	= metrics.width;
    // KLUDGE: I don't know how to get at the height.
    this.height	= Number(this.size);//ctx.measureText("m").width + 20;
};


TextImage.prototype.render = function(ctx, x, y) {
    ctx.save();

    ctx.textAlign	= 'left';
    ctx.textBaseline= 'top';
    ctx.fillStyle	= colorString(this.color);
    ctx.font		= this.font;
    try { 
	ctx.fillText(this.msg, x, y); 
    } catch (e) {
	this.fallbackOnFont();
	ctx.font		= this.font;	
	ctx.fillText(this.msg, x, y); 
    }
    if(this.underline){
	ctx.beginPath();
	ctx.moveTo(x, y+this.size);
	// we use this.size, as it is more accurate for underlining than this.height
	ctx.lineTo(x+this.width, y+this.size);
	ctx.closePath();
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    ctx.restore();
};


TextImage.prototype.getBaseline = function() {
    return this.size;
};

TextImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TextImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.msg	== other.msg &&
	    this.size	== other.size &&
	    this.face	== other.face &&
	    this.family == other.family &&
	    this.style	== other.style &&
	    this.weight == other.weight &&
	    this.underline == other.underline &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind) &&
	    this.font == other.font);
};


//////////////////////////////////////////////////////////////////////
// StarImage: fixnum fixnum fixnum color -> image
var StarImage = function(points, outer, inner, style, color) {
    BaseImage.call(this,
		   Math.max(outer, inner),
		   Math.max(outer, inner));
    this.points	= points;
    this.outer	= outer;
    this.inner	= inner;
    this.style	= style;
    this.color	= color;
    this.radius	= Math.max(this.inner, this.outer);
    this.width	= this.radius*2;
    this.height	= this.radius*2;
};

StarImage.prototype = heir(BaseImage.prototype);

var oneDegreeAsRadian = Math.PI / 180;

// render: context fixnum fixnum -> void
// Draws a star on the given context.
// Most of this code here adapted from the Canvas tutorial at:
// http://developer.apple.com/safari/articles/makinggraphicswithcanvas.html
StarImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    for( var pt = 0; pt < (this.points * 2) + 1; pt++ ) {
	var rads = ( ( 360 / (2 * this.points) ) * pt ) * oneDegreeAsRadian - 0.5;
	var radius = ( pt % 2 == 1 ) ? this.outer : this.inner;
	ctx.lineTo(x + this.radius + ( Math.sin( rads ) * radius ), 
		   y + this.radius + ( Math.cos( rads ) * radius ) );
    }
    ctx.closePath();
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    } else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

StarImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof StarImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.points == other.points &&
	    this.outer == other.outer &&
	    this.inner == other.inner &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};



/////////////////////////////////////////////////////////////////////
//TriangleImage: Number Number Mode Color -> Image
var TriangleImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = height of altitude
    this.height = Math.floor(Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side);
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
}
TriangleImage.prototype = heir(BaseImage.prototype);


TriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    if(this.angle < 180){
	ctx.moveTo(x+width/2, y);
	ctx.lineTo(x, y+height);
	ctx.lineTo(x+width, y+height);		
    } else {
	ctx.moveTo(x+width/2, y+height);
	ctx.lineTo(x, y);
	ctx.lineTo(x+width, y);				
    }
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

TriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

/////////////////////////////////////////////////////////////////////
//RightTriangleImage: Number Number Mode Color -> Image
var RightTriangleImage = function(side1, side2, style, color) {
    this.width = side1;
    this.height = side2;
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side1 = side1;
    this.side2 = side2;
    this.style = style;
    this.color = color;
}
RightTriangleImage.prototype = heir(BaseImage.prototype);


RightTriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y+this.side2);
    ctx.lineTo(x+this.side1, y+this.side2);
    ctx.lineTo(x, y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RightTriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RightTriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side1 == other.side1 &&
	    this.side2 == other.side2 &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

//////////////////////////////////////////////////////////////////////
//Ellipse : Number Number Mode Color -> Image
var EllipseImage = function(width, height, style, color) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.style = style;
    this.color = color;
};

EllipseImage.prototype = heir(BaseImage.prototype);


EllipseImage.prototype.render = function(ctx, aX, aY) {
    ctx.save();
    ctx.beginPath();

    // Most of this code is taken from:
    // http://webreflection.blogspot.com/2009/01/ellipse-and-circle-for-canvas-2d.html
    var hB = (this.width / 2) * .5522848,
    vB = (this.height / 2) * .5522848,
    eX = aX + this.width,
    eY = aY + this.height,
    mX = aX + this.width / 2,
    mY = aY + this.height / 2;
    ctx.moveTo(aX, mY);
    ctx.bezierCurveTo(aX, mY - vB, mX - hB, aY, mX, aY);
    ctx.bezierCurveTo(mX + hB, aY, eX, mY - vB, eX, mY);
    ctx.bezierCurveTo(eX, mY + vB, mX + hB, eY, mX, eY);
    ctx.bezierCurveTo(mX - hB, eY, aX, mY + vB, aX, mY);
    ctx.closePath();
    if (this.style.toString().toLowerCase() == "outline") {
 	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
 	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }


    ctx.restore();
};

EllipseImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof EllipseImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
//Line: Number Number Color Boolean -> Image
var LineImage = function(x, y, color, normalPinhole) {
    if (x >= 0) {
	if (y >= 0) {
	    BaseImage.call(this, 0, 0);
	} else {
	    BaseImage.call(this, 0, -y);
	}
    } else {
	if (y >= 0) {
	    BaseImage.call(this, -x, 0);
	} else {
	    BaseImage.call(this, -x, -y);
	}
    }
    
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = Math.abs(x) + 1;
    this.height = Math.abs(y) + 1;
    
    // put the pinhle in the center of the image
    if(normalPinhole){
 	this.pinholeX = this.width/2;
 	this.pinholeY = this.height/2;
    }
}

LineImage.prototype = heir(BaseImage.prototype);


LineImage.prototype.render = function(ctx, xstart, ystart) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = colorString(this.color);
    if (this.x >= 0) {
	if (this.y >= 0) {
	    ctx.moveTo(xstart, ystart);
	    ctx.lineTo((xstart + this.x),
		       (ystart + this.y));
	} else {
	    ctx.moveTo(xstart, ystart + (-this.y));
	    ctx.lineTo(xstart + this.x, ystart);
	}
    } else {
	if (this.y >= 0) {
	    ctx.moveTo(xstart + (-this.x), ystart);
	    ctx.lineTo(xstart,
		       (ystart + this.y));		
	} else {
	    ctx.moveTo(xstart + (-this.x), ystart + (-this.y));
	    ctx.lineTo(xstart, ystart);
	}
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
};


LineImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof LineImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.x == other.x &&
	    this.y == other.y &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};








var imageToColorList = function(img) {
    var width = img.getWidth(),
    height = img.getHeight(),
    canvas = makeCanvas(width, height),
    ctx = canvas.getContext("2d"),
    imageData,
    data,
    i,
    r, g, b, a;
    img.render(ctx, 0, 0);
    imageData = ctx.getImageData(0, 0, width, height);
    data = imageData.data;
    var colors = [];
    for (i = 0 ; i < data.length; i += 4) {
	r = data[i];
	g = data[i+1];
	b = data[i+2];
	a = data[i+3];
	colors.push(makeColor(r, g, b, a));
    }
    return plt.baselib.lists.arrayToList(colors);
}


var colorListToImage = function(listOfColors,
                                width,
                                height,
                                pinholeX,
                                pinholeY) {
    var canvas = makeCanvas(jsnums.toFixnum(width),
			    jsnums.toFixnum(height)),
    ctx = canvas.getContext("2d"),
    imageData = ctx.createImageData(jsnums.toFixnum(width),
				    jsnums.toFixnum(height)),
    data = imageData.data,
    aColor, i = 0;
    while (listOfColors !== plt.baselib.lists.EMPTY) {
	aColor = listOfColors.first;
	data[i] = jsnums.toFixnum(colorRed(aColor));
	data[i+1] = jsnums.toFixnum(colorGreen(aColor));
	data[i+2] = jsnums.toFixnum(colorBlue(aColor));
	data[i+3] = jsnums.toFixnum(colorAlpha(aColor));

	i += 4;
	listOfColors = listOfColors.rest;
    };

    return makeImageDataImage(imageData);
};













var makeSceneImage = function(width, height, children, withBorder) {
    return new SceneImage(width, height, children, withBorder);
};
var makeCircleImage = function(radius, style, color) {
    return new EllipseImage(2*radius, 2*radius, style, color);
};
var makeStarImage = function(points, outer, inner, style, color) {
    return new StarImage(points, outer, inner, style, color);
};
var makeRectangleImage = function(width, height, style, color) {
    return new RectangleImage(width, height, style, color);
};
var makeRhombusImage = function(side, angle, style, color) {
    return new RhombusImage(side, angle, style, color);
};
var makePolygonImage = function(length, count, step, style, color) {
    return new PolygonImage(length, count, step, style, color);
};
var makeSquareImage = function(length, style, color) {
    return new RectangleImage(length, length, style, color);
};
var makeRightTriangleImage = function(side1, side2, style, color) {
    return new RightTriangleImage(side1, side2, style, color);
};
var makeTriangleImage = function(side, angle, style, color) {
    return new TriangleImage(side, angle, style, color);
};
var makeEllipseImage = function(width, height, style, color) {
    return new EllipseImage(width, height, style, color);
};
var makeLineImage = function(x, y, color, normalPinhole) {
    return new LineImage(x, y, color, normalPinhole);
};
var makeOverlayImage = function(img1, img2, X, Y) {
    return new OverlayImage(img1, img2, X, Y);
};
var makeRotateImage = function(angle, img) {
    return new RotateImage(angle, img);
};
var makeScaleImage = function(xFactor, yFactor, img) {
    return new ScaleImage(xFactor, yFactor, img);
};
var makeCropImage = function(x, y, width, height, img) {
    return new CropImage(x, y, width, height, img);
};
var makeFrameImage = function(img) {
    return new FrameImage(img);
};
var makeFlipImage = function(img, direction) {
    return new FlipImage(img, direction);
};
var makeTextImage = function(msg, size, color, face, family, style, weight, underline) {
    return new TextImage(msg, size, color, face, family, style, weight, underline);
};
var makeImageDataImage = function(imageData) {
    return new ImageDataImage(imageData);
};
var makeFileImage = function(path, rawImage) {
    return FileImage.makeInstance(path, rawImage);
};
var makeVideoImage = function(path, rawVideo) {
    return VideoImage.makeInstance(path, rawVideo);
};


var isSceneImage = function(x) { return x instanceof SceneImage; };
var isCircleImage = function(x) { return x instanceof EllipseImage && 
                                  x.width === x.height; };
var isStarImage	= function(x) { return x instanceof StarImage; };
var isRectangleImage=function(x) { return x instanceof RectangleImage; };
var isPolygonImage = function(x) { return x instanceof PolygonImage; };
var isRhombusImage = function(x) { return x instanceof RhombusImage; };
var isSquareImage	= function(x) { return x instanceof SquareImage; };
var isTriangleImage= function(x) { return x instanceof TriangleImage; };
var isRightTriangleImage = function(x) { return x instanceof RightTriangleImage; };
var isEllipseImage = function(x) { return x instanceof EllipseImage; };
var isLineImage	= function(x) { return x instanceof LineImage; };
var isOverlayImage = function(x) { return x instanceof OverlayImage; };
var isRotateImage	= function(x) { return x instanceof RotateImage; };
var isScaleImage	= function(x) { return x instanceof ScaleImage; };
var isCropImage	= function(x) { return x instanceof CropImage; };
var isFrameImage	= function(x) { return x instanceof FrameImage; };
var isFlipImage	= function(x) { return x instanceof FlipImage; };
var isTextImage	= function(x) { return x instanceof TextImage; };
var isFileImage	= function(x) { return x instanceof FileImage; };
var isFileVideo	= function(x) { return x instanceof FileVideo; };




///////////////////////////////////////////////////////////////
// Exports

// These functions are available for direct access without the typechecks
// of the Racket-exposed functions.


EXPORTS.makeCanvas = makeCanvas;



EXPORTS.BaseImage = BaseImage;
EXPORTS.SceneImage = SceneImage;
EXPORTS.FileImage = FileImage;
EXPORTS.VideoImage = VideoImage;
EXPORTS.OverlayImage = OverlayImage;
EXPORTS.RotateImage = RotateImage;
EXPORTS.ScaleImage = ScaleImage;
EXPORTS.CropImage = CropImage;
EXPORTS.FrameImage = FrameImage;
EXPORTS.FlipImage = FlipImage;
EXPORTS.RectangleImage = RectangleImage;
EXPORTS.RhombusImage = RhombusImage;
EXPORTS.ImageDataImage = ImageDataImage;
EXPORTS.PolygonImage = PolygonImage;
EXPORTS.TextImage = TextImage;
EXPORTS.StarImage = StarImage;
EXPORTS.TriangleImage = TriangleImage;
EXPORTS.RightTriangleImage = RightTriangleImage;
EXPORTS.EllipseImage = EllipseImage;
EXPORTS.LineImage = LineImage;
EXPORTS.StarImage = StarImage;



EXPORTS.colorDb = colorDb;

EXPORTS.makeSceneImage = makeSceneImage;
EXPORTS.makeCircleImage = makeCircleImage;
EXPORTS.makeStarImage = makeStarImage;
EXPORTS.makeRectangleImage = makeRectangleImage;
EXPORTS.makeRhombusImage = makeRhombusImage;
EXPORTS.makePolygonImage = makePolygonImage;
EXPORTS.makeSquareImage = makeSquareImage;
EXPORTS.makeRightTriangleImage = makeRightTriangleImage;
EXPORTS.makeTriangleImage = makeTriangleImage;
EXPORTS.makeEllipseImage = makeEllipseImage;
EXPORTS.makeLineImage = makeLineImage;
EXPORTS.makeOverlayImage = makeOverlayImage;
EXPORTS.makeRotateImage = makeRotateImage;
EXPORTS.makeScaleImage = makeScaleImage;
EXPORTS.makeCropImage = makeCropImage;
EXPORTS.makeFrameImage = makeFrameImage;
EXPORTS.makeFlipImage = makeFlipImage;
EXPORTS.makeTextImage = makeTextImage;
EXPORTS.makeImageDataImage = makeImageDataImage;
EXPORTS.makeFileImage = makeFileImage;
EXPORTS.makeVideoImage = makeVideoImage;

EXPORTS.imageToColorList = imageToColorList;
EXPORTS.colorListToImage = colorListToImage;


EXPORTS.isImage = isImage;
EXPORTS.isScene = isScene;
EXPORTS.isColorOrColorString = isColorOrColorString;
EXPORTS.isAngle = isAngle;
EXPORTS.isSideCount = isSideCount;
EXPORTS.isStepCount = isStepCount;
EXPORTS.isPointsCount = isPointsCount;


EXPORTS.isSceneImage = isSceneImage;
EXPORTS.isCircleImage = isCircleImage;
EXPORTS.isStarImage = isStarImage;
EXPORTS.isRectangleImage = isRectangleImage;
EXPORTS.isPolygonImage = isPolygonImage;
EXPORTS.isRhombusImage = isRhombusImage;
EXPORTS.isSquareImage = isSquareImage;
EXPORTS.isTriangleImage = isTriangleImage;
EXPORTS.isRightTriangleImage = isRightTriangleImage;
EXPORTS.isEllipseImage = isEllipseImage;
EXPORTS.isLineImage = isLineImage;
EXPORTS.isOverlayImage = isOverlayImage;
EXPORTS.isRotateImage = isRotateImage;
EXPORTS.isScaleImage = isScaleImage;
EXPORTS.isCropImage = isCropImage;
EXPORTS.isFrameImage = isFrameImage;
EXPORTS.isFlipImage = isFlipImage;
EXPORTS.isTextImage = isTextImage;
EXPORTS.isFileImage = isFileImage;
EXPORTS.isFileVideo = isFileVideo;



EXPORTS.makeColor = makeColor;
EXPORTS.isColor = isColor;
EXPORTS.colorRed = colorRed;
EXPORTS.colorGreen = colorGreen;
EXPORTS.colorBlue = colorBlue;
EXPORTS.colorAlpha = colorAlpha;


var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;
var makeClosure = plt.baselib.functions.makeClosure;
var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;
var PAUSE = plt.runtime.PAUSE;

var checkSymbolOrString = plt.baselib.check.checkSymbolOrString;

var isString = plt.baselib.strings.isString;
var isSymbol = plt.baselib.symbols.isSymbol;


var isFontFamily = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "default" ||
	     x.toString().toLowerCase() == "decorative" ||
	     x.toString().toLowerCase() == "roman" ||
	     x.toString().toLowerCase() == "script" ||
	     x.toString().toLowerCase() == "swiss" ||
	     x.toString().toLowerCase() == "modern" ||
	     x.toString().toLowerCase() == "symbol" ||
	     x.toString().toLowerCase() == "system"))
	|| (x === false);		// false is also acceptable
};
var isFontStyle = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "italic" ||
	     x.toString().toLowerCase() == "slant"))
	|| (x === false);		// false is also acceptable
};
var isFontWeight = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "bold" ||
	     x.toString().toLowerCase() == "light"))
	|| (x === false);		// false is also acceptable
};
var isMode = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};

var isPlaceX = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "left"  ||
	     x.toString().toLowerCase() == "right" ||
	     x.toString().toLowerCase() == "center" ||
	     x.toString().toLowerCase() == "middle"));
};

var isPlaceY = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "top"	  ||
	     x.toString().toLowerCase() == "bottom"   ||
	     x.toString().toLowerCase() == "baseline" ||
	     x.toString().toLowerCase() == "center"   ||
	     x.toString().toLowerCase() == "middle"));
};

var isStyle = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};






var checkString = plt.baselib.check.checkString;
var checkStringOrFalse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.strings.isString(x) || x === false; },
    "string or false");

var checkByte = plt.baselib.check.checkByte;
var checkReal = plt.baselib.check.checkReal;
var checkBoolean = plt.baselib.check.checkBoolean;

var checkNatural = plt.baselib.check.checkNatural;

var checkPositiveInteger = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.numbers.isInteger(x) &&
		  plt.baselib.numbers.greaterThan(x, 0);},
    "positive integer");

var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;


var _checkColor = plt.baselib.check.makeCheckArgumentType(
    isColorOrColorString,
    'color');

var checkColor = function(MACHINE, functionName, position) {
    var aColor = _checkColor(MACHINE, functionName, position);
    if (colorDb.get(aColor)) {
	aColor = colorDb.get(aColor);
    }
    return aColor;
};

var checkImage = plt.baselib.check.makeCheckArgumentType(
    isImage,
    'image');

var checkImageOrScene = plt.baselib.check.makeCheckArgumentType(
    function(x) { return isImage(x) || isScene(x); },
    'image or scene');

var checkFontFamily = plt.baselib.check.makeCheckArgumentType(
    isFontFamily,
    'font family');

var checkFontStyle = plt.baselib.check.makeCheckArgumentType(
    isFontStyle,
    'font style');

var checkFontWeight = plt.baselib.check.makeCheckArgumentType(
    isFontWeight,
    'font weight');

var checkPlaceX = plt.baselib.check.makeCheckArgumentType(
    isPlaceX,
    'x-place');

var checkPlaceY = plt.baselib.check.makeCheckArgumentType(
    isPlaceY,
    'y-place');


var checkAngle = plt.baselib.check.makeCheckArgumentType(
    isAngle,
    "finite real number between 0 and 360");


var checkMode = plt.baselib.check.makeCheckArgumentType(
    isMode,
    'solid or outline');


var checkSideCount = plt.baselib.check.makeCheckArgumentType(
    isSideCount,
    "positive integer greater than or equal to 3");


var checkStepCount = plt.baselib.check.makeCheckArgumentType(
    isStepCount,
    "positive integer greater than or equal to 1");


var checkPointsCount = plt.baselib.check.makeCheckArgumentType(
    isPointsCount,
    "positive integer greater than or equal to 2");


var checkListofColor = plt.baselib.check.makeCheckListofArgumentType(
    isColor,
    'color');





//////////////////////////////////////////////////////////////////////


EXPORTS['image-color?'] =
    makePrimitiveProcedure(
        'image-color?',
        1,
        function(MACHINE) {
            var elt = MACHINE.e[MACHINE.e.length - 1];
            return (isColorOrColorString(elt));
        });



EXPORTS['mode?'] = 
    makePrimitiveProcedure(
        'mode?',
        1,
        function(MACHINE) {
            return isMode(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['x-place?'] = 
    makePrimitiveProcedure(
        'x-place?',
        1,
        function(MACHINE) {
            return isPlaceX(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['y-place?'] = 
    makePrimitiveProcedure(
        'y-place?',
        1,
        function(MACHINE) {
            return isPlaceY(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['angle?'] = 
    makePrimitiveProcedure(
        'angle?',
        1,
        function(MACHINE) {
            return isAngle(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['side-count?'] = 
    makePrimitiveProcedure(
        'side-count?',
        1,
        function(MACHINE) {
            return isSideCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['step-count?'] = 
    makePrimitiveProcedure(
        'step-count?',
            1,
        function(MACHINE) {
            return isStepCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['image?'] = 
    makePrimitiveProcedure(
        'image?',
            1,
        function(MACHINE) {
            return isImage(MACHINE.e[MACHINE.e.length - 1]);
        });



EXPORTS['text'] =
    makePrimitiveProcedure(
        'text',
        3,
        function(MACHINE) {
	    var aString = checkString(MACHINE,'text', 0);
	    // Unlike 2htdp, we'll allow this to be a positive integer
	    var aSize = checkPositiveInteger(MACHINE, 'text', 1); 
	    var aColor = checkColor(MACHINE, 'text', 2);
	    return makeTextImage(aString.toString(), 
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 "normal",
                                 "Optimer",
                                 "",
                                 "",
                                 false);
        });


EXPORTS['text/font'] = 
    makePrimitiveProcedure(
        'text/font',
        8,
        function(MACHINE) {
            var aString = checkString(MACHINE, "text/font", 0);
	    var aSize = checkByte(MACHINE, "text/font", 1);
	    var aColor = checkColor(MACHINE, "text/font", 2);
	    var aFace = checkStringOrFalse(MACHINE, "text/font", 3);
	    var aFamily = checkFontFamily(MACHINE, "text/font", 4);
	    var aStyle = checkFontStyle(MACHINE, "text/font", 5);
	    var aWeight = checkFontWeight(MACHINE, "text/font", 6);
	    var aUnderline = checkBoolean(MACHINE, "text/font", 7);
	    return makeTextImage(aString.toString(),
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 aFace.toString(),
                                 aFamily.toString(),
                                 aStyle.toString(),
				 aWeight.toString(),
                                 aUnderline);
        });


EXPORTS['bitmap/url'] = 
    makeClosure(
        'bitmap/url',
        1,
        function(MACHINE) {
            var url = checkString(MACHINE, 'bitmap/url', 0);
            PAUSE(
                function(restart) {
                    var rawImage = new Image();
                    rawImage.onload = function() {
                        restart(function(MACHINE) {
                            finalizeClosureCall(
                                MACHINE, 
                                makeFileImage(url.toString(),
                                              rawImage));
                        });
                    };
                    rawImage.onerror = function(e) {
                        restart(function(MACHINE) {
                            plt.baselib.exceptions.raiseFailure(
                                MACHINE, 
                                plt.baselib.format.format(
                                    "unable to load ~a: ~a",
                                    [url,
                                     e.message]));
                        });
                    }
                    rawImage.src = url.toString();
                }
            );
        });

EXPORTS['open-image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'open-image-url');

EXPORTS['image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'image-url');




EXPORTS['overlay'] = 
    makePrimitiveProcedure(
        'overlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay", 0);
	    var img2 = checkImage(MACHINE, "overlay", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "overlay", i));
	    }
            
	    var img = makeOverlayImage(img1, img2, "middle", "middle");
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "middle", "middle");
	    }
	    return img;
        });



EXPORTS['overlay/xy'] = 
    makePrimitiveProcedure(
        'overlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "overlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "overlay/xy", 2);
	    var img2 = checkImage(MACHINE, "overlay/xy", 3);
	    return makeOverlayImage(img1.updatePinhole(0, 0),
				    img2.updatePinhole(0, 0),
				    jsnums.toFixnum(deltaX),
				    jsnums.toFixnum(deltaY));
        });



 EXPORTS['overlay/align'] = 
     makePrimitiveProcedure(
         'overlay/align',
         plt.baselib.arity.makeArityAtLeast(4),
         function(MACHINE) {
	     var placeX = checkPlaceX(MACHINE, "overlay/align", 0);
	     var placeY = checkPlaceY(MACHINE, "overlay/align", 1);
	     var img1 = checkImage(MACHINE, "overlay/align", 2);
	     var img2 = checkImage(MACHINE, "overlay/align", 3);
             var restImages = [];
	     for (var i = 4; i < MACHINE.a; i++) {
                 restImages.push(checkImage(MACHINE, "overlay/align", i));
             }
	     var img = makeOverlayImage(img1,
					img2,
					placeX.toString(),
					placeY.toString());
	     for (var i = 0; i < restImages.length; i++)
		 img = makeOverlayImage(img,
					restImages[i], 
					placeX.toString(), 
					placeY.toString());
	     return img;
         });





EXPORTS['underlay'] = 
    makePrimitiveProcedure(
        'underlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay", 0);
	    var img2 = checkImage(MACHINE, "underlay", 1);
	    var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "underlay", i));
	    }

	    var img = makeOverlayImage(img2, img1, 0, 0);
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], img, 0, 0);
	    }
	    return img;
        });


EXPORTS['underlay/xy'] = 
    makePrimitiveProcedure(
        'underlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "underlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "underlay/xy", 2);
	    var img2 = checkImage(MACHINE, "underlay/xy", 3);
	    return makeOverlayImage(img2.updatePinhole(0, 0), 
				    img1.updatePinhole(0, 0),
				    -(jsnums.toFixnum(deltaX)),
				    -(jsnums.toFixnum(deltaY)));
        });

EXPORTS['underlay/align'] = 
    makePrimitiveProcedure(
        'underlay/align',
        plt.baselib.arity.makeArityAtLeast(4),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "underlay/align", 0);
	    var placeY = checkPlaceY(MACHINE, "underlay/align", 1);
	    var img1 = checkImage(MACHINE, "underlay/align", 2);
	    var img2 = checkImage(MACHINE, "underlay/align", 3);
            var restImages = [];
            for (var i = 4; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "underlay/align", i));
            }
	    
	    var img = makeOverlayImage(img2,
				       img1,
				       placeX.toString(),
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], 
				       img,
				       placeX.toString(), 
				       placeY.toString());
            }
	    return img;
        });



EXPORTS['beside'] = 
    makePrimitiveProcedure(
        'beside',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "beside", 0);
	    var img2 = checkImage(MACHINE, "beside", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       "middle");
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "beside", "middle");
            }

            return img;
	});


EXPORTS['beside/align'] = 
    makePrimitiveProcedure(
        'beside/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeY = checkPlaceY(MACHINE, "beside/align", 0);
	    var img1 = checkImage(MACHINE, "beside/align", 1);
	    var img2 = checkImage(MACHINE, "beside/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside/align", i));
            }

	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img,
				       restImages[i], 
				       "beside",
				       placeY.toString());
            }
	    
	    return img;

        });

EXPORTS['above'] = 
    makePrimitiveProcedure(
        'above',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "above", 0);
	    var img2 = checkImage(MACHINE, "above", 1);
	    var restImages = [];
            for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "above", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "middle",
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       "middle",
				       "above");
            return img;
	    
        });

EXPORTS['above/align'] = 
    makePrimitiveProcedure(
        'above/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "above/align", 0);
	    var img1 = checkImage(MACHINE, "above/align", 1);
	    var img2 = checkImage(MACHINE, "above/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
	        restImages.push(checkImage(MACHINE, "above/align", i));
            }

	    
	    var img = makeOverlayImage(img1,
				       img2,
				       placeX.toString(),
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       placeX.toString(),
				       "above");
	    
	    return img;
        });




EXPORTS['empty-scene'] =
    makePrimitiveProcedure(
        'empty-scene',
	2,
	function(MACHINE) {
	    var width = checkNonNegativeReal(MACHINE, 'empty-scene', 0);
	    var height = checkNonNegativeReal(MACHINE, 'empty-scene', 1);
	    return makeSceneImage(jsnums.toFixnum(width), 
                                  jsnums.toFixnum(height),
                                  [],
                                  true);
	});



EXPORTS['place-image'] = 
    makePrimitiveProcedure(
        'place-image',
        4,
        function(MACHINE) {
	    var picture = checkImage(MACHINE, "place-image", 0);
	    var x = checkReal(MACHINE, "place-image", 1);
	    var y = checkReal(MACHINE, "place-image", 2);
            var background = checkImageOrScene(MACHINE, "place-image", 3);
	    if (isScene(background)) {
		return background.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
	    }

        });



EXPORTS['place-image/align'] = 
    makePrimitiveProcedure(
        'place-image/align',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "place-image/align", 0);
	    var x = checkReal(MACHINE, "place-image/align", 1);
	    var y = checkReal(MACHINE, "place-image/align", 2);
	    var placeX = checkPlaceX(MACHINE, "place-image/align", 3);
	    var placeY = checkPlaceY(MACHINE, "place-image/align", 4);
	    var background = checkImageOrScene(MACHINE, "place-image/align", 5);
	    
	    // calculate x and y based on placeX and placeY
	    if (placeX == "left") x = x + img.pinholeX;
	    else if (placeX == "right") x = x - img.pinholeX;
	    if (placeY == "top") y = y + img.pinholeY;
	    else if (placeY == "bottom") y = y - img.pinholeY;

	    if (isScene(background)) {
		return background.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
            }
        });







EXPORTS['rotate'] = 
    makePrimitiveProcedure(
        'rotate',
        2,
        function(MACHINE) {
	    var angle = checkAngle(MACHINE, "rotate", 0);
	    var img = checkImage(MACHINE, "rotate", 1);
	    return makeRotateImage(jsnums.toFixnum(-angle), img);
        });



EXPORTS['scale'] = 
    makePrimitiveProcedure(
        'scale',
        2,
        function(MACHINE) {
	    var factor = checkReal(MACHINE, "scale", 0);
	    var img = checkImage(MACHINE, "image", 1);
	    
	    return makeScaleImage(jsnums.toFixnum(factor),
				  jsnums.toFixnum(factor),
				  img);
        });


EXPORTS['scale/xy'] = 
    makePrimitiveProcedure(
        'scale/xy',
        3,
        function(MACHINE) {
	    var xFactor = checkReal(MACHINE, "scale/xy", 0);
	    var yFactor = checkReal(MACHINE, "scale/xy", 1);
	    var img = checkImage(MACHINE, "scale/xy", 2);
	    return makeScaleImage(jsnums.toFixnum(xFactor), 
				  jsnums.toFixnum(yFactor),
				  img);
	    
        });


EXPORTS['flip-horizontal'] = 
    makePrimitiveProcedure(
        'flip-horizontal',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-horizontal", 0);
	    return makeFlipImage(img, "horizontal");
        });


EXPORTS['flip-vertical'] = 
    makePrimitiveProcedure(
        'flip-vertical',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-vertical", 0);
	    return makeFlipImage(img, "vertical");
        });


EXPORTS['frame'] = 
    makePrimitiveProcedure(
        'frame',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "frame", 0);
	    return makeFrameImage(img);            
        });


EXPORTS['crop'] = 
    makePrimitiveProcedure(
        'crop',
        5,
        function(MACHINE) {
            var x = checkReal(MACHINE, "crop", 0);
	    var y = checkReal(MACHINE, "crop", 1);
	    var width = checkNonNegativeReal(MACHINE, "crop", 2);
	    var height = checkNonNegativeReal(MACHINE, "crop", 3);
	    var img = checkImage(MACHINE, "crop", 4);
	    return makeCropImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 jsnums.toFixnum(width),
				 jsnums.toFixnum(height),
				 img);
        });



EXPORTS['line'] = 
    makePrimitiveProcedure(
        'line',
        3,
        function(MACHINE) {
	    var x = checkReal(MACHINE, 'line', 0);
	    var y = checkReal(MACHINE, 'line', 1);
	    var c = checkColor(MACHINE, 'line', 2);
	    return makeLineImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 c,
				 true);
        });




EXPORTS['add-line'] = 
    makePrimitiveProcedure(
        'add-line',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "add-line", 0);
	    var x1 = checkReal(MACHINE, "add-line", 1);
	    var y1 = checkReal(MACHINE, "add-line", 2);
	    var x2 = checkReal(MACHINE, "add-line", 3);
	    var y2 = checkReal(MACHINE, "add-line", 4);
	    var c = checkColor(MACHINE, "add-line", 5);
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     true);
	    return makeOverlayImage(line, img, x1, y1);
        });



EXPORTS['scene+line'] = 
    makePrimitiveProcedure(
        'scene+line',
        6,
        function(MACHINE) {
            var img = checkImage(MACHINE, "scene+line", 0);
	    var x1 = checkReal(MACHINE, "scene+line", 1);
	    var y1 = checkReal(MACHINE, "scene+line", 2);
	    var x2 = checkReal(MACHINE, "scene+line", 3);
	    var y2 = checkReal(MACHINE,	"scene+line", 4);
	    var c = checkColor(MACHINE, "scene+line", 5);
	    // make a scene containing the image
	    var newScene = makeSceneImage(jsnums.toFixnum(img.getWidth()), 
					  jsnums.toFixnum(img.getHeight()), 
					  [],
					  true);
	    newScene = newScene.add(img.updatePinhole(0, 0), 0, 0);
	    // make an image containing the line
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     false);
	    // add the line to scene, offset by the original amount
	    return newScene.add(line, jsnums.toFixnum(x1), jsnums.toFixnum(y1));
        });


EXPORTS['circle'] = 
    makePrimitiveProcedure(
        'circle',
        3,
        function(MACHINE) {
            var aRadius = checkNonNegativeReal(MACHINE, "circle", 0);
	    var aMode = checkMode(MACHINE, "circle", 1);
	    var aColor = checkColor(MACHINE, "circle", 2);
	    return makeCircleImage(jsnums.toFixnum(aRadius), aMode.toString(), aColor);
        });


EXPORTS['square'] = 
    makePrimitiveProcedure(
        'square',
        3,
        function(MACHINE) {
	    var l = checkNonNegativeReal(MACHINE, "square", 0);
	    var s = checkMode(MACHINE, "square", 1);
	    var c = checkColor(MACHINE, "square", 2);
	    return makeSquareImage(jsnums.toFixnum(l), s.toString(), c);
        });


EXPORTS['rectangle'] = 
    makePrimitiveProcedure(
        'rectangle',
        4,
        function(MACHINE) {
	    var w = checkNonNegativeReal(MACHINE, "rectangle", 0);
	    var h = checkNonNegativeReal(MACHINE, "rectangle", 1);
	    var s = checkMode(MACHINE, "rectangle", 2);
	    var c = checkColor(MACHINE, "rectangle", 3);
	    return makeRectangleImage(jsnums.toFixnum(w),
				      jsnums.toFixnum(h),
				      s.toString(), 
                                      c);
        });


EXPORTS['regular-polygon'] = 
    makePrimitiveProcedure(
        'regular-polygon',
        4,
        function(MACHINE) {
	    var length = checkNonNegativeReal(MACHINE, "regular-polygon", 0);
	    var count = checkSideCount(MACHINE, "regular-polygon", 1);
	    var s = checkMode(MACHINE, "regular-polygon", 2);
	    var c = checkColor(MACHINE, "regular-polygon", 3);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(1), 
				    s.toString(), 
				    c);            
        });


EXPORTS['ellipse'] = 
    makePrimitiveProcedure(
        'ellipse',
        4,
        function(MACHINE) {
            var w = checkNonNegativeReal(MACHINE, "ellipse", 0);
	    var h = checkNonNegativeReal(MACHINE, "ellipse", 1);
	    var s = checkMode(MACHINE, "ellipse", 2);
	    var c = checkColor(MACHINE, MACHINE, 3);
	    return makeEllipseImage(jsnums.toFixnum(w),
				    jsnums.toFixnum(h),
				    s.toString(),
				    c);
        });



EXPORTS['triangle'] = 
    makePrimitiveProcedure(
        'triangle',
        3,
        function(MACHINE) {
	    var s = checkNonNegativeReal(MACHINE, "triangle", 0);
	    var m = checkMode(MACHINE, "triangle", 1);
	    var c = checkColor(MACHINE, "triangle", 2);
	    return makeTriangleImage(jsnums.toFixnum(s), 
				     60, 
				     m.toString(),
				     c);
        });


EXPORTS['right-triangle'] = 
    makePrimitiveProcedure(
        'right-triangle',
        4,
        function(MACHINE) {
	    var side1 = checkNonNegativeReal(MACHINE, "right-triangle", 0);
	    var side2 = checkNonNegativeReal(MACHINE, "right-triangle", 1);
	    var s = checkMode(MACHINE, "right-triangle", 2);
	    var c = checkColor(MACHINE, "right-triangle", 3);
	    return makeRightTriangleImage(jsnums.toFixnum(side1), 
                                          jsnums.toFixnum(side2),
                                          s.toString(),
                                          c);
        });


EXPORTS['isosceles-triangle'] = 
    makePrimitiveProcedure(
        'isosceles-triangle',
        4,
        function(MACHINE) {
	    var side = checkNonNegativeReal(MACHINE, "isosceles-triangle", 0);
	    var angle = checkAngle(MACHINE, "isosceles-triangle", 1);
	    var s = checkMode(MACHINE, "isosceles-triangle", 2);
	    var c = checkColor(MACHINE, "isosceles-triangle", 3);
	    return makeTriangleImage(jsnums.toFixnum(side), 
                                     jsnums.toFixnum(angle), 
                                     s.toString(),
                                     c);
        });


EXPORTS['star'] = 
    makePrimitiveProcedure(
        'star',
        plt.baselib.lists.makeList(3, 5),
        function(MACHINE) {
            if (MACHINE.a === 3) {
                var sideLength = checkNonNegativeReal(MACHINE, "star", 0);
		var mode = checkMode(MACHINE, "star", 1);
		var color = checkColor(MACHINE, "star", 2);
		return makePolygonImage(jsnums.toFixnum(sideLength), 
					jsnums.toFixnum(5), 
					jsnums.toFixnum(2), 
					mode.toString(), 
					color);
            } else if (MACHINE.a === 5) {
		var n = checkSideCount(MACHINE, "star", 0);
		var outer = checkNonNegativeReal(MACHINE, "star", 1);
		var inner = checkNonNegativeReal(MACHINE, "star", 2);
		var m = checkMode(MACHINE, "star", 3);
		var c = checkColor(MACHINE, "star", 4);
		return makeStarImage(jsnums.toFixnum(n),
				     jsnums.toFixnum(outer),
				     jsnums.toFixnum(inner),
				     m.toString(),
				     c);
            }
        });

EXPORTS['radial-star'] = 
    makePrimitiveProcedure(
        'radial-star',
        5,
        function(MACHINE) {
            var aPoints = checkPointsCount(MACHINE, 'radial-star', 0);
	    var anOuter = checkNonNegativeReal(MACHINE, 'radial-star', 1);
	    var anInner = checkNonNegativeReal(MACHINE, 'radial-star', 2);
	    var aStyle = checkMode(MACHINE, "radial-star", 3);
	    var aColor = checkColor(MACHINE, "radial-star", 4);
	    return makeStarImage(jsnums.toFixnum(aPoints),
				 jsnums.toFixnum(anOuter),
				 jsnums.toFixnum(anInner),
				 aStyle.toString(),
				 aColor);
        });



EXPORTS['star-polygon'] = 
    makePrimitiveProcedure(
        'star-polygon',
        5,
        function(MACHINE) {
            var length = checkNonNegativeReal(MACHINE, "star-polygon", 0);
	    var count = checkNonNegativeReal(MACHINE, "star-polygon", 1);
	    var step = checkStepCount(MACHINE, "star-polygon", 2);
	    var s = checkMode(MACHINE, "star-polygon", 3);
	    var c = checkColor(MACHINE, "star-polygon", 4);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(step), 
				    s.toString(), 
				    c);
        });


EXPORTS['rhombus'] = 
    makePrimitiveProcedure(
        'rhombus',
        4,
        function(MACHINE) {
            var l = checkNonNegativeReal(MACHINE, "rhombus", 0);
	    var a = checkNonNegativeReal(MACHINE, "rhombus", 1);
	    var s = checkMode(MACHINE, "rhombus", 2);
	    var c = checkColor(MACHINE, "rhombus", 3);
	    return makeRhombusImage(jsnums.toFixnum(l),
                                    jsnums.toFixnum(a),
                                    s.toString(),
                                    c);
	    
        });


EXPORTS['image->color-list'] = 
    makePrimitiveProcedure(
        'image->color-list',
        1,
        function(MACHINE) {
            var img = checkImage(MACHINE, 'image->color-list', 0);
            return imageToColorList(img);
        });



EXPORTS['color-list->image'] = 
    makePrimitiveProcedure(
        'color-list->image',
        5,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
	    var pinholeX = checkNatural(MACHINE, 'color-list->image', 3);
	    var pinholeY = checkNatural(MACHINE, 'color-list->image', 4);

            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    pinholeX,
                                    pinholeY);
        });

EXPORTS['color-list->bitmap'] = 
    makePrimitiveProcedure(
        'color-list->image',
        3,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    0,
                                    0);
        });


EXPORTS['image-width'] = 
    makePrimitiveProcedure(
        'image-width',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-width', 0);
	    return img.getWidth();
        });

EXPORTS['image-height'] = 
    makePrimitiveProcedure(
        'image-height',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-height', 0);
	    return img.getHeight();
        });

EXPORTS['image-baseline'] = 
    makePrimitiveProcedure(
        'image-baseline',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-baseline', 0);
	    return img.getBaseline();
        });


EXPORTS['name->color'] = 
    makePrimitiveProcedure(
        'name->color',
        1,
        function(MACHINE) {
            var name = checkSymbolOrString(MACHINE, 'name->color', 0);
            var result = colorDb.get('' + name) || false;
            return result;
        });})(M, exports);
             ns.set("above14.27",exports["above"]);
extNs.set("above",exports["above"]);
modrec.prefix[0]=exports["above"];
ns.set("above/align15.29",exports["above/align"]);
extNs.set("above/align",exports["above/align"]);
modrec.prefix[1]=exports["above/align"];
ns.set("add-line27.53",exports["add-line"]);
extNs.set("add-line",exports["add-line"]);
modrec.prefix[2]=exports["add-line"];
ns.set("angle?51.101",exports["angle?"]);
extNs.set("angle?",exports["angle?"]);
modrec.prefix[3]=exports["angle?"];
ns.set("beside12.23",exports["beside"]);
extNs.set("beside",exports["beside"]);
modrec.prefix[4]=exports["beside"];
ns.set("beside/align13.25",exports["beside/align"]);
extNs.set("beside/align",exports["beside/align"]);
modrec.prefix[5]=exports["beside/align"];
ns.set("bitmap/url3.5",exports["bitmap/url"]);
extNs.set("bitmap/url",exports["bitmap/url"]);
modrec.prefix[6]=exports["bitmap/url"];
ns.set("circle29.57",exports["circle"]);
extNs.set("circle",exports["circle"]);
modrec.prefix[7]=exports["circle"];
ns.set("color-list->bitmap43.85",exports["color-list->bitmap"]);
extNs.set("color-list->bitmap",exports["color-list->bitmap"]);
modrec.prefix[8]=exports["color-list->bitmap"];
ns.set("color-list->image42.83",exports["color-list->image"]);
extNs.set("color-list->image",exports["color-list->image"]);
modrec.prefix[9]=exports["color-list->image"];
ns.set("crop25.49",exports["crop"]);
extNs.set("crop",exports["crop"]);
modrec.prefix[10]=exports["crop"];
ns.set("ellipse33.65",exports["ellipse"]);
extNs.set("ellipse",exports["ellipse"]);
modrec.prefix[11]=exports["ellipse"];
ns.set("empty-scene16.31",exports["empty-scene"]);
extNs.set("empty-scene",exports["empty-scene"]);
modrec.prefix[12]=exports["empty-scene"];
ns.set("flip-horizontal22.43",exports["flip-horizontal"]);
extNs.set("flip-horizontal",exports["flip-horizontal"]);
modrec.prefix[13]=exports["flip-horizontal"];
ns.set("flip-vertical23.45",exports["flip-vertical"]);
extNs.set("flip-vertical",exports["flip-vertical"]);
modrec.prefix[14]=exports["flip-vertical"];
ns.set("frame24.47",exports["frame"]);
extNs.set("frame",exports["frame"]);
modrec.prefix[15]=exports["frame"];
ns.set("image->color-list41.81",exports["image->color-list"]);
extNs.set("image->color-list",exports["image->color-list"]);
modrec.prefix[16]=exports["image->color-list"];
ns.set("image-baseline46.91",exports["image-baseline"]);
extNs.set("image-baseline",exports["image-baseline"]);
modrec.prefix[17]=exports["image-baseline"];
ns.set("image-color?47.93",exports["image-color?"]);
extNs.set("image-color?",exports["image-color?"]);
modrec.prefix[18]=exports["image-color?"];
ns.set("image-height45.89",exports["image-height"]);
extNs.set("image-height",exports["image-height"]);
modrec.prefix[19]=exports["image-height"];
ns.set("image-url4.7",exports["image-url"]);
extNs.set("image-url",exports["image-url"]);
modrec.prefix[20]=exports["image-url"];
ns.set("image-width44.87",exports["image-width"]);
extNs.set("image-width",exports["image-width"]);
modrec.prefix[21]=exports["image-width"];
ns.set("image?54.107",exports["image?"]);
extNs.set("image?",exports["image?"]);
modrec.prefix[22]=exports["image?"];
ns.set("isosceles-triangle36.71",exports["isosceles-triangle"]);
extNs.set("isosceles-triangle",exports["isosceles-triangle"]);
modrec.prefix[23]=exports["isosceles-triangle"];
ns.set("line26.51",exports["line"]);
extNs.set("line",exports["line"]);
modrec.prefix[24]=exports["line"];
ns.set("mode?48.95",exports["mode?"]);
extNs.set("mode?",exports["mode?"]);
modrec.prefix[25]=exports["mode?"];
ns.set("name->color55.109",exports["name->color"]);
extNs.set("name->color",exports["name->color"]);
modrec.prefix[26]=exports["name->color"];
ns.set("open-image-url5.9",exports["open-image-url"]);
extNs.set("open-image-url",exports["open-image-url"]);
modrec.prefix[27]=exports["open-image-url"];
ns.set("overlay6.11",exports["overlay"]);
extNs.set("overlay",exports["overlay"]);
modrec.prefix[28]=exports["overlay"];
ns.set("overlay/align8.15",exports["overlay/align"]);
extNs.set("overlay/align",exports["overlay/align"]);
modrec.prefix[29]=exports["overlay/align"];
ns.set("overlay/xy7.13",exports["overlay/xy"]);
extNs.set("overlay/xy",exports["overlay/xy"]);
modrec.prefix[30]=exports["overlay/xy"];
ns.set("place-image17.33",exports["place-image"]);
extNs.set("place-image",exports["place-image"]);
modrec.prefix[31]=exports["place-image"];
ns.set("place-image/align18.35",exports["place-image/align"]);
extNs.set("place-image/align",exports["place-image/align"]);
modrec.prefix[32]=exports["place-image/align"];
ns.set("radial-star38.75",exports["radial-star"]);
extNs.set("radial-star",exports["radial-star"]);
modrec.prefix[33]=exports["radial-star"];
ns.set("rectangle31.61",exports["rectangle"]);
extNs.set("rectangle",exports["rectangle"]);
modrec.prefix[34]=exports["rectangle"];
ns.set("regular-polygon32.63",exports["regular-polygon"]);
extNs.set("regular-polygon",exports["regular-polygon"]);
modrec.prefix[35]=exports["regular-polygon"];
ns.set("rhombus40.79",exports["rhombus"]);
extNs.set("rhombus",exports["rhombus"]);
modrec.prefix[36]=exports["rhombus"];
ns.set("right-triangle35.69",exports["right-triangle"]);
extNs.set("right-triangle",exports["right-triangle"]);
modrec.prefix[37]=exports["right-triangle"];
ns.set("rotate19.37",exports["rotate"]);
extNs.set("rotate",exports["rotate"]);
modrec.prefix[38]=exports["rotate"];
ns.set("scale20.39",exports["scale"]);
extNs.set("scale",exports["scale"]);
modrec.prefix[39]=exports["scale"];
ns.set("scale/xy21.41",exports["scale/xy"]);
extNs.set("scale/xy",exports["scale/xy"]);
modrec.prefix[40]=exports["scale/xy"];
ns.set("scene+line28.55",exports["scene+line"]);
extNs.set("scene+line",exports["scene+line"]);
modrec.prefix[41]=exports["scene+line"];
ns.set("side-count?52.103",exports["side-count?"]);
extNs.set("side-count?",exports["side-count?"]);
modrec.prefix[42]=exports["side-count?"];
ns.set("square30.59",exports["square"]);
extNs.set("square",exports["square"]);
modrec.prefix[43]=exports["square"];
ns.set("star37.73",exports["star"]);
extNs.set("star",exports["star"]);
modrec.prefix[44]=exports["star"];
ns.set("star-polygon39.77",exports["star-polygon"]);
extNs.set("star-polygon",exports["star-polygon"]);
modrec.prefix[45]=exports["star-polygon"];
ns.set("step-count?53.105",exports["step-count?"]);
extNs.set("step-count?",exports["step-count?"]);
modrec.prefix[46]=exports["step-count?"];
ns.set("text1.1",exports["text"]);
extNs.set("text",exports["text"]);
modrec.prefix[47]=exports["text"];
ns.set("text/font2.3",exports["text/font"]);
extNs.set("text/font",exports["text/font"]);
modrec.prefix[48]=exports["text/font"];
ns.set("triangle34.67",exports["triangle"]);
extNs.set("triangle",exports["triangle"]);
modrec.prefix[49]=exports["triangle"];
ns.set("underlay9.17",exports["underlay"]);
extNs.set("underlay",exports["underlay"]);
modrec.prefix[50]=exports["underlay"];
ns.set("underlay/align11.21",exports["underlay/align"]);
extNs.set("underlay/align",exports["underlay/align"]);
modrec.prefix[51]=exports["underlay/align"];
ns.set("underlay/xy10.19",exports["underlay/xy"]);
extNs.set("underlay/xy",exports["underlay/xy"]);
modrec.prefix[52]=exports["underlay/xy"];
ns.set("x-place?49.97",exports["x-place?"]);
extNs.set("x-place?",exports["x-place?"]);
modrec.prefix[53]=exports["x-place?"];
ns.set("y-place?50.99",exports["y-place?"]);
extNs.set("y-place?",exports["y-place?"]);
modrec.prefix[54]=exports["y-place?"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image/private/color.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName31643,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName31643();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));