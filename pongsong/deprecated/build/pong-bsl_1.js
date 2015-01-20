
// ** Visiting <MainModuleSource /Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1976=function(M){return(_434)(M);};

var _1972=function(M){if(--M.cbt<0){throw _1972;}
M.a=1;
return(_1973)(M);};

var _1968=function(M){if(--M.cbt<0){throw _1968;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["root/pong-bsl.rkt"],M.modules["root/pong-bsl.rkt"].getExports(),M.modules["root/pong-bsl.rkt"].getExternalExports(),M.modules["root/pong-bsl.rkt"].prefix));
return(M.p)(M);};

var _1961=function(M){if(--M.cbt<0){throw _1961;}
M.a=1;
return(_1962)(M);};

var _1957=function(M){if(--M.cbt<0){throw _1957;}
M.c.push(new RT.CallFrame(_1968,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][137][0][M.e[M.e.length-1][137][1]];
M.p=M.e[M.e.length-1][138][0][M.e[M.e.length-1][138][1]];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1972,M.p));
return((M.p).label)(M);};

var _1955=function(M){if(--M.cbt<0){throw _1955;}
M.c.push(new RT.CallFrame(_1957,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][137][0][M.e[M.e.length-1][137][1]];
M.c.push(new RT.CallFrame(_1961,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",22045,587,0,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][65];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-2][106];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1953=function(M){if(--M.cbt<0){throw _1953;}
M.c.push(new RT.CallFrame(_1955,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_433_c;
M.e[M.e.length-1][128]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1951=function(M){if(--M.cbt<0){throw _1951;}
M.c.push(new RT.CallFrame(_1953,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_432,4,[M.e[M.e.length-1]],"handle-mouse");
M.e[M.e.length-1][76]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1949=function(M){if(--M.cbt<0){throw _1949;}
M.c.push(new RT.CallFrame(_1951,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_431,2,[M.e[M.e.length-1]],"handle-key-up");
M.e[M.e.length-1][74]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1947=function(M){if(--M.cbt<0){throw _1947;}
M.c.push(new RT.CallFrame(_1949,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_430,2,[M.e[M.e.length-1]],"handle-key-down");
M.e[M.e.length-1][72]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1943=function(M){if(--M.cbt<0){throw _1943;}
M.e[M.e.length-1][131]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1941=function(M){if(--M.cbt<0){throw _1941;}
M.c.push(new RT.CallFrame(_1947,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_429,1,[M.e[M.e.length-1]],"serve");
M.e[M.e.length-1][132]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1939=function(M){if(--M.cbt<0){throw _1939;}
M.c.push(new RT.CallFrame(_1941,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1943,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17460,487,15,58]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][115][0][M.e[M.e.length-5][115][1]];
M.e[M.e.length-1]=16;
M.e[M.e.length-2]=90;
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1937=function(M){if(--M.cbt<0){throw _1937;}
M.c.push(new RT.CallFrame(_1939,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_428,2,[M.e[M.e.length-1]],"draw-paddle");
M.e[M.e.length-1][124]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1935=function(M){if(--M.cbt<0){throw _1935;}
M.c.push(new RT.CallFrame(_1937,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_427,1,[M.e[M.e.length-1]],"handle-tick");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1933=function(M){if(--M.cbt<0){throw _1933;}
M.c.push(new RT.CallFrame(_1935,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_426,1,[M.e[M.e.length-1]],"draw-pong-world");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1931=function(M){if(--M.cbt<0){throw _1931;}
M.c.push(new RT.CallFrame(_1933,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_425,5,[M.e[M.e.length-1]],"display-msg");
M.e[M.e.length-1][112]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1927=function(M){if(--M.cbt<0){throw _1927;}
M.e[M.e.length-1][123]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1925=function(M){if(--M.cbt<0){throw _1925;}
M.c.push(new RT.CallFrame(_1931,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_424,1,[M.e[M.e.length-1]],"draw-idle-game");
M.e[M.e.length-1][113]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1923=function(M){if(--M.cbt<0){throw _1923;}
M.c.push(new RT.CallFrame(_1925,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1927,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14664,414,13,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][122];
M.e[M.e.length-1]=16;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1919=function(M){if(--M.cbt<0){throw _1919;}
M.e[M.e.length-1][121]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1917=function(M){if(--M.cbt<0){throw _1917;}
M.c.push(new RT.CallFrame(_1923,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_423,1,[M.e[M.e.length-1]],"draw-ball");
M.e[M.e.length-1][122]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1915=function(M){if(--M.cbt<0){throw _1915;}
M.c.push(new RT.CallFrame(_1917,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1919,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14551,410,21,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][120];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][2];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][4];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1913=function(M){if(--M.cbt<0){throw _1913;}
M.c.push(new RT.CallFrame(_1915,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_422,2,[M.e[M.e.length-1]],"draw-playfield-bg");
M.e[M.e.length-1][120]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1911=function(M){if(--M.cbt<0){throw _1911;}
M.c.push(new RT.CallFrame(_1913,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_421,1,[M.e[M.e.length-1]],"draw-wall");
M.e[M.e.length-1][119]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1909=function(M){if(--M.cbt<0){throw _1909;}
M.c.push(new RT.CallFrame(_1911,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_420,3,[M.e[M.e.length-1]],"draw-net");
M.e[M.e.length-1][118]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1907=function(M){if(--M.cbt<0){throw _1907;}
M.c.push(new RT.CallFrame(_1909,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_419,7,[M.e[M.e.length-1]],"vertical-dashed-line");
M.e[M.e.length-1][117]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1905=function(M){if(--M.cbt<0){throw _1905;}
M.c.push(new RT.CallFrame(_1907,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_418,3,[M.e[M.e.length-1]],"draw-bg");
M.e[M.e.length-1][114]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1903=function(M){if(--M.cbt<0){throw _1903;}
M.c.push(new RT.CallFrame(_1905,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_417,1,[M.e[M.e.length-1]],"draw-goodbye");
M.e[M.e.length-1][111]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1901=function(M){if(--M.cbt<0){throw _1901;}
M.c.push(new RT.CallFrame(_1903,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_416,4,[M.e[M.e.length-1]],"place-image-top-left");
M.e[M.e.length-1][107]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1893=function(M){if(--M.cbt<0){throw _1893;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1889=function(M){if(--M.cbt<0){throw _1889;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1887=function(M){if(--M.cbt<0){throw _1887;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1885=function(M){if(--M.cbt<0){throw _1885;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1893,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12187,335,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1883=function(M){if(--M.cbt<0){throw _1883;}
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=0;
M.v=0;
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1877=function(M){if(--M.cbt<0){throw _1877;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1873=function(M){if(--M.cbt<0){throw _1873;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1871=function(M){if(--M.cbt<0){throw _1871;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1869=function(M){if(--M.cbt<0){throw _1869;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1877,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11995,332,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1867=function(M){if(--M.cbt<0){throw _1867;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1883,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12082,334,24,166]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-10][41];
M.c.push(new RT.CallFrame(_1885,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12095,334,37,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-12][81][0][M.e[M.e.length-12][81][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-12][21];
M.c.push(new RT.CallFrame(_1887,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12112,334,54,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-14][9];
M.c.push(new RT.CallFrame(_1889,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12127,334,69,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1863=function(M){if(--M.cbt<0){throw _1863;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1867,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11889,331,24,167]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-10][41];
M.c.push(new RT.CallFrame(_1869,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11902,331,37,54]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-12][81][0][M.e[M.e.length-12][81][1]];
M.e[M.e.length-1]=10;
M.c.push(new RT.CallFrame(_1871,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11920,331,55,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-14][9];
M.c.push(new RT.CallFrame(_1873,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11935,331,70,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1861=function(M){if(--M.cbt<0){throw _1861;}
M.e[M.e.length-1][106]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1859=function(M){if(--M.cbt<0){throw _1859;}
M.c.push(new RT.CallFrame(_1901,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_415,1,[M.e[M.e.length-1]],"quitting?");
M.e[M.e.length-1][78]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1857=function(M){if(--M.cbt<0){throw _1857;}
M.c.push(new RT.CallFrame(_1859,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1861,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11761,328,22,540]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.e[M.e.length-1]="left-player-serves";
M.c.push(new RT.CallFrame(_1863,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11848,330,24,16]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][93];
M.e[M.e.length-1]=RT.makeFloat(0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1853=function(M){if(--M.cbt<0){throw _1853;}
M.e[M.e.length-1][105]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1851=function(M){if(--M.cbt<0){throw _1851;}
M.c.push(new RT.CallFrame(_1857,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_414,1,[M.e[M.e.length-1]],"serve-ball");
M.e[M.e.length-1][93]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1849=function(M){if(--M.cbt<0){throw _1849;}
M.c.push(new RT.CallFrame(_1851,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1853,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11462,319,21,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][81][0][M.e[M.e.length-3][81][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][7];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][9];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1847=function(M){if(--M.cbt<0){throw _1847;}
M.c.push(new RT.CallFrame(_1849,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_413,2,[M.e[M.e.length-1]],"set-right-paddle");
M.e[M.e.length-1][104]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1845=function(M){if(--M.cbt<0){throw _1845;}
M.c.push(new RT.CallFrame(_1847,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_412,2,[M.e[M.e.length-1]],"set-left-paddle");
M.e[M.e.length-1][103]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1843=function(M){if(--M.cbt<0){throw _1843;}
M.c.push(new RT.CallFrame(_1845,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_411,1,[M.e[M.e.length-1]],"stop-paddle");
M.e[M.e.length-1][102]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1841=function(M){if(--M.cbt<0){throw _1841;}
M.c.push(new RT.CallFrame(_1843,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_410,2,[M.e[M.e.length-1]],"set-paddle-pos");
M.e[M.e.length-1][101]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1839=function(M){if(--M.cbt<0){throw _1839;}
M.c.push(new RT.CallFrame(_1841,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_409,3,[M.e[M.e.length-1]],"set-paddle-moving");
M.e[M.e.length-1][100]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1837=function(M){if(--M.cbt<0){throw _1837;}
M.c.push(new RT.CallFrame(_1839,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_408,1,[M.e[M.e.length-1]],"check-paddle-block");
M.e[M.e.length-1][99]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1835=function(M){if(--M.cbt<0){throw _1835;}
M.c.push(new RT.CallFrame(_1837,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_407,3,[M.e[M.e.length-1]],"vary-speed-by-intersection");
M.e[M.e.length-1][96]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1833=function(M){if(--M.cbt<0){throw _1833;}
M.c.push(new RT.CallFrame(_1835,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_406,2,[M.e[M.e.length-1]],"vary-dy-by-intersection");
M.e[M.e.length-1][95]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1831=function(M){if(--M.cbt<0){throw _1831;}
M.c.push(new RT.CallFrame(_1833,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_405,8,[M.e[M.e.length-1]],"horizontal-bounce");
M.e[M.e.length-1][97]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1829=function(M){if(--M.cbt<0){throw _1829;}
M.c.push(new RT.CallFrame(_1831,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_404,8,[M.e[M.e.length-1]],"horizontal-bounce-y");
M.e[M.e.length-1][94]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1827=function(M){if(--M.cbt<0){throw _1827;}
M.c.push(new RT.CallFrame(_1829,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_403,2,[M.e[M.e.length-1]],"score-a-point");
M.e[M.e.length-1][92]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1825=function(M){if(--M.cbt<0){throw _1825;}
M.c.push(new RT.CallFrame(_1827,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_402,2,[M.e[M.e.length-1]],"pong-world-set-status");
M.e[M.e.length-1][91]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1823=function(M){if(--M.cbt<0){throw _1823;}
M.c.push(new RT.CallFrame(_1825,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_401,2,[M.e[M.e.length-1]],"pong-world-set-ball");
M.e[M.e.length-1][90]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1821=function(M){if(--M.cbt<0){throw _1821;}
M.c.push(new RT.CallFrame(_1823,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_400,1,[M.e[M.e.length-1]],"vertical-ball-bounce");
M.e[M.e.length-1][89]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1819=function(M){if(--M.cbt<0){throw _1819;}
M.c.push(new RT.CallFrame(_1821,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_399,6,[M.e[M.e.length-1]],"vertical-bounce");
M.e[M.e.length-1][88]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1817=function(M){if(--M.cbt<0){throw _1817;}
M.c.push(new RT.CallFrame(_1819,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_398,1,[M.e[M.e.length-1]],"move-paddle");
M.e[M.e.length-1][87]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1815=function(M){if(--M.cbt<0){throw _1815;}
M.c.push(new RT.CallFrame(_1817,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_397,3,[M.e[M.e.length-1]],"move-paddle-vert");
M.e[M.e.length-1][84]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1813=function(M){if(--M.cbt<0){throw _1813;}
M.c.push(new RT.CallFrame(_1815,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_396,1,[M.e[M.e.length-1]],"move-ball");
M.e[M.e.length-1][80]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1811=function(M){if(--M.cbt<0){throw _1811;}
M.c.push(new RT.CallFrame(_1813,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_395,3,[M.e[M.e.length-1]],"move-coord");
M.e[M.e.length-1][79]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1809=function(M){if(--M.cbt<0){throw _1809;}
M.c.push(new RT.CallFrame(_1811,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_394,1,[M.e[M.e.length-1]],"main");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1806=RT.si_context_expected(15);

var _1803=RT.si_context_expected(5);

var _1799=function(M){if(--M.cbt<0){throw _1799;}
M.c.push(new RT.CallFrame(_1809,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_393_c;
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1796=RT.si_context_expected(9);

var _1793=RT.si_context_expected(5);

var _1789=function(M){if(--M.cbt<0){throw _1789;}
M.c.push(new RT.CallFrame(_1799,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26496;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=6;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym26496;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1803,M.p));
return((M.p).label)(M);};

var _1786=RT.si_context_expected(9);

var _1783=RT.si_context_expected(5);

var _1779=function(M){if(--M.cbt<0){throw _1779;}
M.c.push(new RT.CallFrame(_1789,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26497;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=3;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym26497;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1793,M.p));
return((M.p).label)(M);};

var _1775=function(M){if(--M.cbt<0){throw _1775;}
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1773=function(M){if(--M.cbt<0){throw _1773;}
M.c.push(new RT.CallFrame(_1779,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26498;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=3;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym26498;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1783,M.p));
return((M.p).label)(M);};

var _1769=function(M){if(--M.cbt<0){throw _1769;}
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1767=function(M){if(--M.cbt<0){throw _1767;}
M.c.push(new RT.CallFrame(_1773,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1775,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1990,69,17,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1764=RT.si_context_expected(7);

var _1761=RT.si_context_expected(5);

var _1757=function(M){if(--M.cbt<0){throw _1757;}
M.c.push(new RT.CallFrame(_1767,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1769,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1915,66,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=-1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1755=function(M){if(--M.cbt<0){throw _1755;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1753=function(M){if(--M.cbt<0){throw _1753;}
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1751=function(M){if(--M.cbt<0){throw _1751;}
M.c.push(new RT.CallFrame(_1757,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym26499;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym26499;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1761,M.p));
return((M.p).label)(M);};

var _1749=function(M){if(--M.cbt<0){throw _1749;}
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1747=function(M){if(--M.cbt<0){throw _1747;}
M.c.push(new RT.CallFrame(_1751,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1753,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1634,58,14,37]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][2];
M.c.push(new RT.CallFrame(_1755,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1643,58,23,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=26;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1745=function(M){if(--M.cbt<0){throw _1745;}
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1743=function(M){if(--M.cbt<0){throw _1743;}
M.c.push(new RT.CallFrame(_1747,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1749,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1591,57,13,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=26;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1741=function(M){if(--M.cbt<0){throw _1741;}
M.c.push(new RT.CallFrame(_1743,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1745,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",1459,53,15,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-1][4],16);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1739=function(M){if(--M.cbt<0){throw _1739;}
M.c.push(new RT.CallFrame(_1741,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1737=function(M){if(--M.cbt<0){throw _1737;}
M.c.push(new RT.CallFrame(_1739,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=68;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1735=function(M){if(--M.cbt<0){throw _1735;}
M.c.push(new RT.CallFrame(_1737,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=28;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1733=function(M){if(--M.cbt<0){throw _1733;}
M.c.push(new RT.CallFrame(_1735,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1731=function(M){if(--M.cbt<0){throw _1731;}
M.c.push(new RT.CallFrame(_1733,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=15;
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1729=function(M){if(--M.cbt<0){throw _1729;}
M.c.push(new RT.CallFrame(_1731,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1727=function(M){if(--M.cbt<0){throw _1727;}
M.c.push(new RT.CallFrame(_1729,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=90;
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1725=function(M){if(--M.cbt<0){throw _1725;}
M.c.push(new RT.CallFrame(_1727,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=16;
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1723=function(M){if(--M.cbt<0){throw _1723;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1721=function(M){if(--M.cbt<0){throw _1721;}
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1719=function(M){if(--M.cbt<0){throw _1719;}
M.c.push(new RT.CallFrame(_1725,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=10;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1717=function(M){if(--M.cbt<0){throw _1717;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1715=function(M){if(--M.cbt<0){throw _1715;}
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1713=function(M){if(--M.cbt<0){throw _1713;}
M.c.push(new RT.CallFrame(_1719,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1721,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",818,25,20,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1723,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",825,25,27,12]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2][4],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1711=function(M){if(--M.cbt<0){throw _1711;}
M.c.push(new RT.CallFrame(_1713,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1715,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",777,24,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1717,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",784,24,27,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2][2],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1709=function(M){if(--M.cbt<0){throw _1709;}
M.c.push(new RT.CallFrame(_1711,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][4];
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1707=function(M){if(--M.cbt<0){throw _1707;}
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1705=function(M){if(--M.cbt<0){throw _1705;}
M.c.push(new RT.CallFrame(_1709,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][2];
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1703=function(M){if(--M.cbt<0){throw _1703;}
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1701=function(M){if(--M.cbt<0){throw _1701;}
M.c.push(new RT.CallFrame(_1705,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1707,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",622,18,22,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.makeFloat(660.0);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1699=function(M){if(--M.cbt<0){throw _1699;}
M.c.push(new RT.CallFrame(_1701,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.c.push(new RT.CallFrame(_1703,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",578,17,21,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.makeFloat(1245.0);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1697=function(M){if(--M.cbt<0){throw _1697;}
M.c.push(new RT.CallFrame(_1699,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.makeFloat(1.5);
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _436=function(M){if(--M.cbt<0){throw _436;}
M.mainModules.push("root/pong-bsl.rkt");
};

var _1678=function(M){if(--M.cbt<0){throw _1678;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1674=function(M){if(--M.cbt<0){throw _1674;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1672=function(M){if(--M.cbt<0){throw _1672;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1670=function(M){if(--M.cbt<0){throw _1670;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1678,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21817,576,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1668=function(M){if(--M.cbt<0){throw _1668;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1660=function(M){if(--M.cbt<0){throw _1660;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1656=function(M){if(--M.cbt<0){throw _1656;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1654=function(M){if(--M.cbt<0){throw _1654;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1652=function(M){if(--M.cbt<0){throw _1652;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1660,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21618,573,37,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][23];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=1;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1650=function(M){if(--M.cbt<0){throw _1650;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1648=function(M){if(--M.cbt<0){throw _1648;}
if(M.v===false){return(_1645)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21491,572,10,188]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][104];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1650,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21515,572,34,163]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][41];
M.c.push(new RT.CallFrame(_1652,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21528,572,47,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-8][81][0][M.e[M.e.length-8][81][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][21];
M.c.push(new RT.CallFrame(_1654,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21545,572,64,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-13];
M.c.push(new RT.CallFrame(_1656,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21552,572,71,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-10][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1642=function(M){if(--M.cbt<0){throw _1642;}
return(_1634)(M);};

var _1638=function(M){if(--M.cbt<0){throw _1638;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1636=function(M){if(--M.cbt<0){throw _1636;}
if(M.v===false){return(_1633)(M);}else{M.c.push(new RT.CallFrame(_1642,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21400,569,14,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-3],M.e[M.e.length-1][7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1628=function(M){if(--M.cbt<0){throw _1628;}
return(_1620)(M);};

var _1624=function(M){if(--M.cbt<0){throw _1624;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1622=function(M){if(--M.cbt<0){throw _1622;}
if(M.v===false){return(_1619)(M);}else{M.c.push(new RT.CallFrame(_1628,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21273,566,14,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-3],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][7],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1614=function(M){if(--M.cbt<0){throw _1614;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1612=function(M){if(--M.cbt<0){throw _1612;}
return(_1604)(M);};

var _1608=function(M){if(--M.cbt<0){throw _1608;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1606=function(M){if(--M.cbt<0){throw _1606;}
if(M.v===false){return(_1603)(M);}else{M.v=true;
return(_1604)(M);}};

var _1600=function(M){if(--M.cbt<0){throw _1600;}
return(_1596)(M);};

var _1598=function(M){if(--M.cbt<0){throw _1598;}
if(M.v===false){return(_1595)(M);}else{M.v=M.e[M.e.length-5];
M.v=true;
return(_1596)(M);}};

var _1588=function(M){if(--M.cbt<0){throw _1588;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1586=function(M){if(--M.cbt<0){throw _1586;}
return(_1578)(M);};

var _1582=function(M){if(--M.cbt<0){throw _1582;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1580=function(M){if(--M.cbt<0){throw _1580;}
if(M.v===false){return(_1577)(M);}else{M.v=true;
return(_1578)(M);}};

var _1572=function(M){if(--M.cbt<0){throw _1572;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1570=function(M){if(--M.cbt<0){throw _1570;}
if(M.v===false){return(_1567)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1564=function(M){if(--M.cbt<0){throw _1564;}
if(M.v===false){return(_1561)(M);}else{M.c.push(new RT.CallFrame(_1570,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18787,517,11,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1572,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18792,517,16,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1556=function(M){if(--M.cbt<0){throw _1556;}
if(M.v===false){return(_1553)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18697,514,8,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][91];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="quitting";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1546=function(M){if(--M.cbt<0){throw _1546;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1544=function(M){if(--M.cbt<0){throw _1544;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1540=function(M){if(--M.cbt<0){throw _1540;}
return(_1534)(M);};

var _1536=function(M){if(--M.cbt<0){throw _1536;}
if(M.v===false){return(_1533)(M);}else{M.v=true;
return(_1534)(M);}};

var _1524=function(M){if(--M.cbt<0){throw _1524;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1522=function(M){if(--M.cbt<0){throw _1522;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1518=function(M){if(--M.cbt<0){throw _1518;}
return(_1512)(M);};

var _1514=function(M){if(--M.cbt<0){throw _1514;}
if(M.v===false){return(_1511)(M);}else{M.v=true;
return(_1512)(M);}};

var _1502=function(M){if(--M.cbt<0){throw _1502;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][30];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1500=function(M){if(--M.cbt<0){throw _1500;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1496=function(M){if(--M.cbt<0){throw _1496;}
if(M.v===false){return(_1493)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18163,503,8,98]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][104];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1500,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18187,503,32,73]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][100];
M.c.push(new RT.CallFrame(_1502,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18206,503,51,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][55];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1486=function(M){if(--M.cbt<0){throw _1486;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][29];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1484=function(M){if(--M.cbt<0){throw _1484;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1480=function(M){if(--M.cbt<0){throw _1480;}
if(M.v===false){return(_1477)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18031,501,8,96]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][104];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1484,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18055,501,32,71]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][100];
M.c.push(new RT.CallFrame(_1486,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18074,501,51,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][55];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1470=function(M){if(--M.cbt<0){throw _1470;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][30];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1468=function(M){if(--M.cbt<0){throw _1468;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1464=function(M){if(--M.cbt<0){throw _1464;}
if(M.v===false){return(_1461)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17901,499,8,96]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][103];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1468,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17924,499,31,72]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][100];
M.c.push(new RT.CallFrame(_1470,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17943,499,50,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][54];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1454=function(M){if(--M.cbt<0){throw _1454;}
M.e[M.e.length-1]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][29];
M.v=15;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1452=function(M){if(--M.cbt<0){throw _1452;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1448=function(M){if(--M.cbt<0){throw _1448;}
if(M.v===false){return(_1445)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17774,497,8,94]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][103];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1452,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17797,497,31,70]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][100];
M.c.push(new RT.CallFrame(_1454,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17816,497,50,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][54];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1436=function(M){if(--M.cbt<0){throw _1436;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1434=function(M){if(--M.cbt<0){throw _1434;}
M.e[M.e.length-3]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1428=function(M){if(--M.cbt<0){throw _1428;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1426=function(M){if(--M.cbt<0){throw _1426;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1434,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17395,484,4,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][83][0][M.e[M.e.length-5][83][1]]);
M.c.push(new RT.CallFrame(_1436,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17403,484,12,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][43];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1420=function(M){if(--M.cbt<0){throw _1420;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1416=function(M){if(--M.cbt<0){throw _1416;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1420,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17203,477,6,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1410=function(M){if(--M.cbt<0){throw _1410;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1408=function(M){if(--M.cbt<0){throw _1408;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_1416,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17167,476,6,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1402=function(M){if(--M.cbt<0){throw _1402;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1400=function(M){if(--M.cbt<0){throw _1400;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1408,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17115,475,6,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][87];
M.c.push(new RT.CallFrame(_1410,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17128,475,19,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][55];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1396=function(M){if(--M.cbt<0){throw _1396;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1400,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17064,474,6,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][87];
M.c.push(new RT.CallFrame(_1402,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17077,474,19,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][54];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1392=function(M){if(--M.cbt<0){throw _1392;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1396,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17034,473,6,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1384=function(M){if(--M.cbt<0){throw _1384;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1380=function(M){if(--M.cbt<0){throw _1380;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1384,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16890,469,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][57];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1374=function(M){if(--M.cbt<0){throw _1374;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1372=function(M){if(--M.cbt<0){throw _1372;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_1380,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16852,468,8,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][56];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1366=function(M){if(--M.cbt<0){throw _1366;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1364=function(M){if(--M.cbt<0){throw _1364;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1372,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16798,467,8,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][87];
M.c.push(new RT.CallFrame(_1374,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16811,467,21,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][55];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1356=function(M){if(--M.cbt<0){throw _1356;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1354=function(M){if(--M.cbt<0){throw _1354;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1352=function(M){if(--M.cbt<0){throw _1352;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1364,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16745,466,8,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][87];
M.c.push(new RT.CallFrame(_1366,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16758,466,21,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][54];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1348=function(M){if(--M.cbt<0){throw _1348;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1352,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16678,465,8,58]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-9][89];
M.c.push(new RT.CallFrame(_1354,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16700,465,30,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][80];
M.c.push(new RT.CallFrame(_1356,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16711,465,41,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][53];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1346=function(M){if(--M.cbt<0){throw _1346;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1342=function(M){if(--M.cbt<0){throw _1342;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1340=function(M){if(--M.cbt<0){throw _1340;}
if(M.v===false){return(_1337)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16591,462,4,331]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-2][99];
M.c.push(new RT.CallFrame(_1346,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16618,463,6,303]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][50];
M.c.push(new RT.CallFrame(_1348,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16644,464,8,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][52];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1332=function(M){if(--M.cbt<0){throw _1332;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1330=function(M){if(--M.cbt<0){throw _1330;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1332,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16415,456,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][113];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1326=function(M){if(--M.cbt<0){throw _1326;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1324=function(M){if(--M.cbt<0){throw _1324;}
if(M.v===false){return(_1321)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16314,454,7,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][112];
M.e[M.e.length-1]="You won!!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1330,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16363,455,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1316=function(M){if(--M.cbt<0){throw _1316;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1314=function(M){if(--M.cbt<0){throw _1314;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1316,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16226,452,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][113];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1310=function(M){if(--M.cbt<0){throw _1310;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-won";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1308=function(M){if(--M.cbt<0){throw _1308;}
if(M.v===false){return(_1305)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16125,450,7,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][112];
M.e[M.e.length-1]="You won!!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1314,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16174,451,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1300=function(M){if(--M.cbt<0){throw _1300;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1298=function(M){if(--M.cbt<0){throw _1298;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1300,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16038,448,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][113];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1294=function(M){if(--M.cbt<0){throw _1294;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="right-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1292=function(M){if(--M.cbt<0){throw _1292;}
if(M.v===false){return(_1289)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15929,446,7,132]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][112];
M.e[M.e.length-1]="Hit space to serve";
M.e[M.e.length-2]=36;
M.c.push(new RT.CallFrame(_1298,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15986,447,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1284=function(M){if(--M.cbt<0){throw _1284;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1282=function(M){if(--M.cbt<0){throw _1282;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1284,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15838,444,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][113];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1278=function(M){if(--M.cbt<0){throw _1278;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="left-player-serves";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1276=function(M){if(--M.cbt<0){throw _1276;}
if(M.v===false){return(_1273)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15728,442,7,133]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][112];
M.e[M.e.length-1]="Hit space to serve";
M.e[M.e.length-2]=36;
M.c.push(new RT.CallFrame(_1282,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15786,443,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1268=function(M){if(--M.cbt<0){throw _1268;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1260=function(M){if(--M.cbt<0){throw _1260;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1258=function(M){if(--M.cbt<0){throw _1258;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1256=function(M){if(--M.cbt<0){throw _1256;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_1268,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15638,440,20,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][113];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1248=function(M){if(--M.cbt<0){throw _1248;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1246=function(M){if(--M.cbt<0){throw _1246;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1244=function(M){if(--M.cbt<0){throw _1244;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1256,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15574,439,20,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][83][0][M.e[M.e.length-5][83][1]]);
M.c.push(new RT.CallFrame(_1258,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15582,439,28,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-7][34];
M.c.push(new RT.CallFrame(_1260,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15592,439,38,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1240=function(M){if(--M.cbt<0){throw _1240;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="in-play";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1238=function(M){if(--M.cbt<0){throw _1238;}
if(M.v===false){return(_1235)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15461,437,7,200]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][107];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-5][123];
M.c.push(new RT.CallFrame(_1244,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15509,438,20,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][82][0][M.e[M.e.length-5][82][1]]);
M.c.push(new RT.CallFrame(_1246,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15517,438,28,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-7][34];
M.c.push(new RT.CallFrame(_1248,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15527,438,38,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1232=function(M){if(--M.cbt<0){throw _1232;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1230=function(M){if(--M.cbt<0){throw _1230;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]="\n";
M.a=3;
M.v=M.primitives["string-append"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1228=function(M){if(--M.cbt<0){throw _1228;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1226=function(M){if(--M.cbt<0){throw _1226;}
if(M.v===false){return(_1223)(M);}else{M.c.push(new RT.CallFrame(_1238,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15411,436,5,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1240,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15416,436,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1218=function(M){if(--M.cbt<0){throw _1218;}
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

var _1208=function(M){if(--M.cbt<0){throw _1208;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=80;
//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-13][121];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1202=function(M){if(--M.cbt<0){throw _1202;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1200=function(M){if(--M.cbt<0){throw _1200;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=98;
M.v="white";
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1198=function(M){if(--M.cbt<0){throw _1198;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1208,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15043,424,10,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-13][7],60);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1196=function(M){if(--M.cbt<0){throw _1196;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1194=function(M){if(--M.cbt<0){throw _1194;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=80;
M.c.push(new RT.CallFrame(_1196,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14944,422,8,144]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-13][108][0][M.e[M.e.length-13][108][1]];
M.c.push(new RT.CallFrame(_1198,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14967,423,10,65]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.e[M.e.length-16][125][0][M.e[M.e.length-16][125][1]];
M.c.push(new RT.CallFrame(_1200,M.p));
M.v=M.e[M.e.length-16][3][0][M.e[M.e.length-16][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14973,423,16,47]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1202,M.p));
M.v=M.e[M.e.length-17][3][0][M.e[M.e.length-17][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14989,423,32,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-18][57];
M.e[M.e.length-1]=M.e[M.e.length-19];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1188=function(M){if(--M.cbt<0){throw _1188;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["number->string"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1186=function(M){if(--M.cbt<0){throw _1186;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=98;
M.v="white";
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1184=function(M){if(--M.cbt<0){throw _1184;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1194,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14914,421,8,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-9][7],60);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1182=function(M){if(--M.cbt<0){throw _1182;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1178=function(M){if(--M.cbt<0){throw _1178;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1182,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14820,419,6,269]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-9][108][0][M.e[M.e.length-9][108][1]];
M.c.push(new RT.CallFrame(_1184,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14841,420,8,64]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.e[M.e.length-12][125][0][M.e[M.e.length-12][125][1]];
M.c.push(new RT.CallFrame(_1186,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14847,420,14,46]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1188,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14863,420,30,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-14][56];
M.e[M.e.length-1]=M.e[M.e.length-15];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1176=function(M){if(--M.cbt<0){throw _1176;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1172=function(M){if(--M.cbt<0){throw _1172;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1176,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14769,418,4,321]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][124];
M.c.push(new RT.CallFrame(_1178,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14782,418,17,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][55];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1160=function(M){if(--M.cbt<0){throw _1160;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1158=function(M){if(--M.cbt<0){throw _1158;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1154=function(M){if(--M.cbt<0){throw _1154;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][19];
M.c.push(new RT.CallFrame(_1158,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14091,394,6,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-12][118];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.c.push(new RT.CallFrame(_1160,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14105,394,20,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-15][114];
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=M.e[M.e.length-17];
M.e[M.e.length-3]="black";
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1152=function(M){if(--M.cbt<0){throw _1152;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1148=function(M){if(--M.cbt<0){throw _1148;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=0;
M.c.push(new RT.CallFrame(_1152,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14028,391,4,100]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-9][107];
M.c.push(new RT.CallFrame(_1154,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14056,392,6,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][119];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1142=function(M){if(--M.cbt<0){throw _1142;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1140=function(M){if(--M.cbt<0){throw _1140;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1142,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13839,382,57,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1138=function(M){if(--M.cbt<0){throw _1138;}
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

var _1132=function(M){if(--M.cbt<0){throw _1132;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1130=function(M){if(--M.cbt<0){throw _1130;}
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=M.e[M.e.length-17];
M.e[M.e.length-6]=M.e[M.e.length-18];
M.v=M.e[M.e.length-19];
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1128=function(M){if(--M.cbt<0){throw _1128;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1124=function(M){if(--M.cbt<0){throw _1124;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1128,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13693,378,6,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-12][117];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.e[M.e.length-3]=M.e[M.e.length-15];
M.c.push(new RT.CallFrame(_1130,M.p));
M.v=M.e[M.e.length-12][3][0][M.e[M.e.length-12][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13721,378,34,14]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-18];
M.c.push(new RT.CallFrame(_1132,M.p));
M.v=M.e[M.e.length-14][3][0][M.e[M.e.length-14][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13727,378,40,7]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, 2,M.e[M.e.length-16]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1122=function(M){if(--M.cbt<0){throw _1122;}
if(M.v===false){return(_1119)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13621,375,4,124]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][107];
M.c.push(new RT.CallFrame(_1124,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13650,376,6,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-9][115][0][M.e[M.e.length-9][115][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]=M.e[M.e.length-15];
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1114=function(M){if(--M.cbt<0){throw _1114;}
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1110=function(M){if(--M.cbt<0){throw _1110;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=0;
M.c.push(new RT.CallFrame(_1114,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13169,363,2,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-7][116][0][M.e[M.e.length-7][116][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1104=function(M){if(--M.cbt<0){throw _1104;}
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1102=function(M){if(--M.cbt<0){throw _1102;}
M.e[M.e.length-3]=M.v;
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-6][9];
M.c.push(new RT.CallFrame(_1104,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12951,355,6,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-7][113]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-7].names[113]); }
M.p=M.e[M.e.length-7][113];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1096=function(M){if(--M.cbt<0){throw _1096;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=2;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1094=function(M){if(--M.cbt<0){throw _1094;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1092=function(M){if(--M.cbt<0){throw _1092;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1090=function(M){if(--M.cbt<0){throw _1090;}
M.e[M.e.length-3]=M.v;
M.v=M.e[M.e.length-9];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1086=function(M){if(--M.cbt<0){throw _1086;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=2;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1084=function(M){if(--M.cbt<0){throw _1084;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1082=function(M){if(--M.cbt<0){throw _1082;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1080=function(M){if(--M.cbt<0){throw _1080;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1090,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12790,349,6,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_1092,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12795,349,11,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1094,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12802,349,18,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1096,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12805,349,21,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-11][110][0][M.e[M.e.length-11][110][1]];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1076=function(M){if(--M.cbt<0){throw _1076;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]="quitting";
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1070=function(M){if(--M.cbt<0){throw _1070;}
M.e[M.e.length-2]=M.v;
M.v=28;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1064=function(M){if(--M.cbt<0){throw _1064;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1060=function(M){if(--M.cbt<0){throw _1060;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1064,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11407,317,4,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1056=function(M){if(--M.cbt<0){throw _1056;}
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1060,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11373,316,4,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1052=function(M){if(--M.cbt<0){throw _1052;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1056,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11319,314,4,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1048=function(M){if(--M.cbt<0){throw _1048;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1052,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11291,313,4,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1042=function(M){if(--M.cbt<0){throw _1042;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1038=function(M){if(--M.cbt<0){throw _1038;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_1042,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11158,308,4,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1034=function(M){if(--M.cbt<0){throw _1034;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_1038,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11124,307,4,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1030=function(M){if(--M.cbt<0){throw _1030;}
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1034,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11087,306,4,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1026=function(M){if(--M.cbt<0){throw _1026;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1030,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11042,304,4,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1020=function(M){if(--M.cbt<0){throw _1020;}
M.e[M.e.length-2]=M.v;
M.v=0;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1016=function(M){if(--M.cbt<0){throw _1016;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_1020,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10916,298,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1010=function(M){if(--M.cbt<0){throw _1010;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1006=function(M){if(--M.cbt<0){throw _1006;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_1010,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10708,291,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][45];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1000=function(M){if(--M.cbt<0){throw _1000;}
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

var _992=function(M){if(--M.cbt<0){throw _992;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _990=function(M){if(--M.cbt<0){throw _990;}
M.p=M.e[M.e.length-8];
M.e[M.e.length-8]=M.v;
M.a=8;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _982=function(M){if(--M.cbt<0){throw _982;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _980=function(M){if(--M.cbt<0){throw _980;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _978=function(M){if(--M.cbt<0){throw _978;}
M.e[M.e.length-7]=M.v;
M.c.push(new RT.CallFrame(_990,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10215,275,10,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][36];
M.c.push(new RT.CallFrame(_992,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10227,275,22,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][53];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _970=function(M){if(--M.cbt<0){throw _970;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _968=function(M){if(--M.cbt<0){throw _968;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _966=function(M){if(--M.cbt<0){throw _966;}
M.e[M.e.length-6]=M.v;
M.c.push(new RT.CallFrame(_978,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10155,274,10,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_980,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10169,274,24,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][35];
M.c.push(new RT.CallFrame(_982,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10179,274,34,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _958=function(M){if(--M.cbt<0){throw _958;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _956=function(M){if(--M.cbt<0){throw _956;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _954=function(M){if(--M.cbt<0){throw _954;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_966,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10095,273,10,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][25];
M.c.push(new RT.CallFrame(_968,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10109,273,24,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][35];
M.c.push(new RT.CallFrame(_970,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10119,273,34,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _946=function(M){if(--M.cbt<0){throw _946;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _944=function(M){if(--M.cbt<0){throw _944;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _942=function(M){if(--M.cbt<0){throw _942;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_954,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10041,272,10,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][83][0][M.e[M.e.length-9][83][1]]);
M.c.push(new RT.CallFrame(_956,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10049,272,18,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][34];
M.c.push(new RT.CallFrame(_958,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10059,272,28,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _938=function(M){if(--M.cbt<0){throw _938;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_942,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9987,271,10,43]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][82][0][M.e[M.e.length-9][82][1]]);
M.c.push(new RT.CallFrame(_944,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9995,271,18,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-11][34];
M.c.push(new RT.CallFrame(_946,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10005,271,28,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-12][53];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _934=function(M){if(--M.cbt<0){throw _934;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_938,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9935,270,10,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][55];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _932=function(M){if(--M.cbt<0){throw _932;}
M.e[M.e.length-2]=M.v;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"/"));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _930=function(M){if(--M.cbt<0){throw _930;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _928=function(M){if(--M.cbt<0){throw _928;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _926=function(M){if(--M.cbt<0){throw _926;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["abs"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _924=function(M){if(--M.cbt<0){throw _924;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_932,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9691,263,20,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _922=function(M){if(--M.cbt<0){throw _922;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=3;
M.v=RT.checkedMul(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _920=function(M){if(--M.cbt<0){throw _920;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _918=function(M){if(--M.cbt<0){throw _918;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _916=function(M){if(--M.cbt<0){throw _916;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _914=function(M){if(--M.cbt<0){throw _914;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _912=function(M){if(--M.cbt<0){throw _912;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _910=function(M){if(--M.cbt<0){throw _910;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=90;
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"/"), M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _902=function(M){if(--M.cbt<0){throw _902;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _900=function(M){if(--M.cbt<0){throw _900;}
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

var _894=function(M){if(--M.cbt<0){throw _894;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _892=function(M){if(--M.cbt<0){throw _892;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_900,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8982,250,21,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][83][0][M.e[M.e.length-9][83][1]]);
M.c.push(new RT.CallFrame(_902,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8990,250,29,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _882=function(M){if(--M.cbt<0){throw _882;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _876=function(M){if(--M.cbt<0){throw _876;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _874=function(M){if(--M.cbt<0){throw _874;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_876,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8552,240,43,42]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][95];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _872=function(M){if(--M.cbt<0){throw _872;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_882,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8614,241,18,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][96];
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _868=function(M){if(--M.cbt<0){throw _868;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_872,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8527,240,18,68]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-8][23];
M.c.push(new RT.CallFrame(_874,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8543,240,34,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-14]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _866=function(M){if(--M.cbt<0){throw _866;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _862=function(M){if(--M.cbt<0){throw _862;}
if(M.v===false){return(_859)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8434,238,37,233]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][90];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_866,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8478,239,16,188]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][32];
M.c.push(new RT.CallFrame(_868,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8489,239,27,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-8][81][0][M.e[M.e.length-8][81][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][21];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _858=function(M){if(--M.cbt<0){throw _858;}
M.e[M.e.length-2]=M.v;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"<"))));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _856=function(M){if(--M.cbt<0){throw _856;}
return(_850)(M);};

var _854=function(M){if(--M.cbt<0){throw _854;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _852=function(M){if(--M.cbt<0){throw _852;}
if(M.v===false){return(_849)(M);}else{M.c.push(new RT.CallFrame(_856,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8236,235,50,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_858,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8241,235,55,39]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-6],90,10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _846=function(M){if(--M.cbt<0){throw _846;}
if(M.v===false){return(_843)(M);}else{M.c.push(new RT.CallFrame(_852,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8204,235,18,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_854,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8209,235,23,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6],10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _834=function(M){if(--M.cbt<0){throw _834;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _828=function(M){if(--M.cbt<0){throw _828;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _826=function(M){if(--M.cbt<0){throw _826;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_828,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7827,226,43,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][95];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _824=function(M){if(--M.cbt<0){throw _824;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_834,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7888,227,18,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][96];
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _820=function(M){if(--M.cbt<0){throw _820;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_824,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7802,226,18,67]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-8][23];
M.c.push(new RT.CallFrame(_826,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7818,226,34,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-14]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _818=function(M){if(--M.cbt<0){throw _818;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _814=function(M){if(--M.cbt<0){throw _814;}
if(M.v===false){return(_811)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7710,224,37,230]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][90];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_818,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7754,225,16,185]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][32];
M.c.push(new RT.CallFrame(_820,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7765,225,27,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-8][81][0][M.e[M.e.length-8][81][1]];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][20];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _810=function(M){if(--M.cbt<0){throw _810;}
M.e[M.e.length-2]=M.v;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-2],1,"<"))));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _808=function(M){if(--M.cbt<0){throw _808;}
return(_802)(M);};

var _806=function(M){if(--M.cbt<0){throw _806;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _804=function(M){if(--M.cbt<0){throw _804;}
if(M.v===false){return(_801)(M);}else{M.c.push(new RT.CallFrame(_808,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7512,221,49,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_810,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7517,221,54,38]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-5],90,10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _798=function(M){if(--M.cbt<0){throw _798;}
if(M.v===false){return(_795)(M);}else{M.c.push(new RT.CallFrame(_804,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7481,221,18,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_806,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7486,221,23,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-5],10);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _794=function(M){if(--M.cbt<0){throw _794;}
if(M.v===false){return(_791)(M);}else{M.v=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_798,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7421,219,11,10]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-5],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][20],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _786=function(M){if(--M.cbt<0){throw _786;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=1;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _784=function(M){if(--M.cbt<0){throw _784;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _780=function(M){if(--M.cbt<0){throw _780;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_784,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7197,212,8,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_786,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7200,212,11,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][57];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _776=function(M){if(--M.cbt<0){throw _776;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_780,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7159,211,8,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _772=function(M){if(--M.cbt<0){throw _772;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_776,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7119,210,8,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _768=function(M){if(--M.cbt<0){throw _768;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_772,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7080,209,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _764=function(M){if(--M.cbt<0){throw _764;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=8;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),M.e[M.e.length-2])));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _762=function(M){if(--M.cbt<0){throw _762;}
if(M.v===false){return(_759)(M);}else{M.e[M.e.length-1]="left-player-serves";
return(_760)(M);}};

var _754=function(M){if(--M.cbt<0){throw _754;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _750=function(M){if(--M.cbt<0){throw _750;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=1;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _748=function(M){if(--M.cbt<0){throw _748;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_754,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6898,205,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _744=function(M){if(--M.cbt<0){throw _744;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_748,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6854,204,8,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_750,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6857,204,11,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][56];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _740=function(M){if(--M.cbt<0){throw _740;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_744,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6814,203,8,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _736=function(M){if(--M.cbt<0){throw _736;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_740,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6775,202,8,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _732=function(M){if(--M.cbt<0){throw _732;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=8;
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1],0,"<"),M.e[M.e.length-2])));
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _730=function(M){if(--M.cbt<0){throw _730;}
if(M.v===false){return(_727)(M);}else{M.e[M.e.length-1]="right-player-serves";
return(_728)(M);}};

var _726=function(M){if(--M.cbt<0){throw _726;}
if(M.v===false){return(_723)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6601,198,6,328]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_730,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6664,200,12,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_732,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6667,200,15,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][56];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _720=function(M){if(--M.cbt<0){throw _720;}
if(M.v===false){return(_717)(M);}else{M.c.push(new RT.CallFrame(_726,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6577,197,8,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=(M.e[M.e.length-3]==="left");
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _712=function(M){if(--M.cbt<0){throw _712;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _708=function(M){if(--M.cbt<0){throw _708;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_712,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6418,192,5,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _704=function(M){if(--M.cbt<0){throw _704;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_708,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6383,191,5,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _700=function(M){if(--M.cbt<0){throw _700;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_704,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6346,190,5,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _696=function(M){if(--M.cbt<0){throw _696;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_700,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6310,189,5,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _690=function(M){if(--M.cbt<0){throw _690;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _686=function(M){if(--M.cbt<0){throw _686;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_690,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6166,183,5,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][57];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _682=function(M){if(--M.cbt<0){throw _682;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_686,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6131,182,5,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][56];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _678=function(M){if(--M.cbt<0){throw _678;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_682,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6094,181,5,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][55];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _674=function(M){if(--M.cbt<0){throw _674;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_678,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6058,180,5,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][54];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _668=function(M){if(--M.cbt<0){throw _668;}
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _662=function(M){if(--M.cbt<0){throw _662;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _660=function(M){if(--M.cbt<0){throw _660;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_668,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5925,174,10,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][36];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _654=function(M){if(--M.cbt<0){throw _654;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _652=function(M){if(--M.cbt<0){throw _652;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_660,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5884,173,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][26];
M.c.push(new RT.CallFrame(_662,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5898,173,24,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][35];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _646=function(M){if(--M.cbt<0){throw _646;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _644=function(M){if(--M.cbt<0){throw _644;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_652,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5843,172,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-8][25];
M.c.push(new RT.CallFrame(_654,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5857,172,24,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][35];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _638=function(M){if(--M.cbt<0){throw _638;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _636=function(M){if(--M.cbt<0){throw _636;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_644,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5808,171,10,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-7][83][0][M.e[M.e.length-7][83][1]]);
M.c.push(new RT.CallFrame(_646,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5816,171,18,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][34];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _630=function(M){if(--M.cbt<0){throw _630;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _628=function(M){if(--M.cbt<0){throw _628;}
M.e[M.e.length-2]=M.v;
M.v=M.e[M.e.length-10];
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _624=function(M){if(--M.cbt<0){throw _624;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_628,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5506,161,20,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_630,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5525,161,39,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _620=function(M){if(--M.cbt<0){throw _620;}
if(M.v===false){return(_617)(M);}else{M.v=M.e[M.e.length-2];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5454,160,33,107]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_624,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5465,160,44,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-6][81][0][M.e[M.e.length-6][81][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][19];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _616=function(M){if(--M.cbt<0){throw _616;}
if(M.v===false){return(_613)(M);}else{M.c.push(new RT.CallFrame(_620,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5434,160,13,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][64];
M.e[M.e.length-1]="wall";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _608=function(M){if(--M.cbt<0){throw _608;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _606=function(M){if(--M.cbt<0){throw _606;}
M.e[M.e.length-2]=M.v;
M.v=M.e[M.e.length-10];
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _602=function(M){if(--M.cbt<0){throw _602;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_606,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5159,153,20,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_608,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5178,153,39,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, 0,M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _598=function(M){if(--M.cbt<0){throw _598;}
if(M.v===false){return(_595)(M);}else{M.v=M.e[M.e.length-2];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5110,152,33,104]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_602,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5121,152,44,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-6][81][0][M.e[M.e.length-6][81][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][18];
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _594=function(M){if(--M.cbt<0){throw _594;}
if(M.v===false){return(_591)(M);}else{M.c.push(new RT.CallFrame(_598,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5090,152,13,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][64];
M.e[M.e.length-1]="wall";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _590=function(M){if(--M.cbt<0){throw _590;}
if(M.v===false){return(_587)(M);}else{M.c.push(new RT.CallFrame(_594,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4963,149,11,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-4],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-1][18],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _582=function(M){if(--M.cbt<0){throw _582;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _578=function(M){if(--M.cbt<0){throw _578;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_582,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4805,143,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][45];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _570=function(M){if(--M.cbt<0){throw _570;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _564=function(M){if(--M.cbt<0){throw _564;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _562=function(M){if(--M.cbt<0){throw _562;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_570,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4731,141,19,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][45];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _556=function(M){if(--M.cbt<0){throw _556;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _554=function(M){if(--M.cbt<0){throw _554;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_562,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4676,140,19,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_564,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4690,140,33,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][44];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _552=function(M){if(--M.cbt<0){throw _552;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _546=function(M){if(--M.cbt<0){throw _546;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _544=function(M){if(--M.cbt<0){throw _544;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_552,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4589,138,17,164]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][84];
M.c.push(new RT.CallFrame(_554,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4627,139,19,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][83][0][M.e[M.e.length-9][83][1]]);
M.c.push(new RT.CallFrame(_556,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4635,139,27,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _542=function(M){if(--M.cbt<0){throw _542;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_578,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4770,142,15,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _540=function(M){if(--M.cbt<0){throw _540;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["min"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _538=function(M){if(--M.cbt<0){throw _538;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["max"]._i(M);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _536=function(M){if(--M.cbt<0){throw _536;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _534=function(M){if(--M.cbt<0){throw _534;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _532=function(M){if(--M.cbt<0){throw _532;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_538,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4428,133,48,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedAdd(M, M.e[M.e.length-5][18],2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _530=function(M){if(--M.cbt<0){throw _530;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_540,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4439,133,59,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-3][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _524=function(M){if(--M.cbt<0){throw _524;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _520=function(M){if(--M.cbt<0){throw _520;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_524,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4092,127,15,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][36];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _512=function(M){if(--M.cbt<0){throw _512;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _506=function(M){if(--M.cbt<0){throw _506;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _504=function(M){if(--M.cbt<0){throw _504;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_512,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4026,125,83,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][36];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _498=function(M){if(--M.cbt<0){throw _498;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _496=function(M){if(--M.cbt<0){throw _496;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_504,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3995,125,52,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][26];
M.c.push(new RT.CallFrame(_506,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4009,125,66,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][35];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _494=function(M){if(--M.cbt<0){throw _494;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _488=function(M){if(--M.cbt<0){throw _488;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _482=function(M){if(--M.cbt<0){throw _482;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _480=function(M){if(--M.cbt<0){throw _480;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_488,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3924,124,83,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][36];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _474=function(M){if(--M.cbt<0){throw _474;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _472=function(M){if(--M.cbt<0){throw _472;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_480,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3893,124,52,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-10][25];
M.c.push(new RT.CallFrame(_482,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3907,124,66,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][35];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _470=function(M){if(--M.cbt<0){throw _470;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_494,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3958,125,15,86]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][79];
M.c.push(new RT.CallFrame(_496,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3970,125,27,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][83][0][M.e[M.e.length-9][83][1]]);
M.c.push(new RT.CallFrame(_498,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3978,125,35,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][34];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _468=function(M){if(--M.cbt<0){throw _468;}
M.e[M.e.length-1]=M.v;
M.c.push(new RT.CallFrame(_520,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4061,126,15,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][35];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _466=function(M){if(--M.cbt<0){throw _466;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedAdd(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _464=function(M){if(--M.cbt<0){throw _464;}
M.e[M.e.length-1]=M.v;
M.v=M.primitives["round"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _458=function(M){if(--M.cbt<0){throw _458;}
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _454=function(M){if(--M.cbt<0){throw _454;}
M.e[M.e.length-6]=M.v;
M.c.push(new RT.CallFrame(_458,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3639,116,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][77][0][M.e[M.e.length-9][77][1]];
if (M.e[M.e.length-9][78]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[78]); }
M.e[M.e.length-1]=M.e[M.e.length-9][78];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _450=function(M){if(--M.cbt<0){throw _450;}
M.e[M.e.length-5]=M.v;
M.c.push(new RT.CallFrame(_454,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3519,114,4,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][75][0][M.e[M.e.length-9][75][1]];
if (M.e[M.e.length-9][76]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[76]); }
M.e[M.e.length-1]=M.e[M.e.length-9][76];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _446=function(M){if(--M.cbt<0){throw _446;}
M.e[M.e.length-4]=M.v;
M.c.push(new RT.CallFrame(_450,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3488,113,4,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][73][0][M.e[M.e.length-9][73][1]];
if (M.e[M.e.length-9][74]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[74]); }
M.e[M.e.length-1]=M.e[M.e.length-9][74];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _442=function(M){if(--M.cbt<0){throw _442;}
M.e[M.e.length-3]=M.v;
M.c.push(new RT.CallFrame(_446,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3389,111,4,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][71][0][M.e[M.e.length-9][71][1]];
if (M.e[M.e.length-9][72]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[72]); }
M.e[M.e.length-1]=M.e[M.e.length-9][72];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _438=function(M){if(--M.cbt<0){throw _438;}
M.e[M.e.length-2]=M.v;
M.c.push(new RT.CallFrame(_442,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3359,110,4,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][69][0][M.e[M.e.length-9][69][1]];
if (M.e[M.e.length-9][70]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[70]); }
M.e[M.e.length-1]=M.e[M.e.length-9][70];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1970=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1967=function(M){if(--M.cbt<0){throw _1967;}
M.e.length-=(M.a-1);
return(_1968)(M);};

var _1959=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1956=function(M){if(--M.cbt<0){throw _1956;}
M.e.length-=(M.a-1);
return(_1957)(M);};

var _1954=function(M){if(--M.cbt<0){throw _1954;}
M.e.length-=(M.a-1);
return(_1955)(M);};

var _1952=function(M){if(--M.cbt<0){throw _1952;}
M.e.length-=(M.a-1);
return(_1953)(M);};

var _1950=function(M){if(--M.cbt<0){throw _1950;}
M.e.length-=(M.a-1);
return(_1951)(M);};

var _1948=function(M){if(--M.cbt<0){throw _1948;}
M.e.length-=(M.a-1);
return(_1949)(M);};

var _1946=function(M){if(--M.cbt<0){throw _1946;}
M.e.length-=(M.a-1);
return(_1947)(M);};


var _1940=function(M){if(--M.cbt<0){throw _1940;}
M.e.length-=(M.a-1);
return(_1941)(M);};

var _1938=function(M){if(--M.cbt<0){throw _1938;}
M.e.length-=(M.a-1);
return(_1939)(M);};

var _1936=function(M){if(--M.cbt<0){throw _1936;}
M.e.length-=(M.a-1);
return(_1937)(M);};

var _1934=function(M){if(--M.cbt<0){throw _1934;}
M.e.length-=(M.a-1);
return(_1935)(M);};

var _1932=function(M){if(--M.cbt<0){throw _1932;}
M.e.length-=(M.a-1);
return(_1933)(M);};

var _1930=function(M){if(--M.cbt<0){throw _1930;}
M.e.length-=(M.a-1);
return(_1931)(M);};


var _1924=function(M){if(--M.cbt<0){throw _1924;}
M.e.length-=(M.a-1);
return(_1925)(M);};

var _1922=function(M){if(--M.cbt<0){throw _1922;}
M.e.length-=(M.a-1);
return(_1923)(M);};


var _1916=function(M){if(--M.cbt<0){throw _1916;}
M.e.length-=(M.a-1);
return(_1917)(M);};

var _1914=function(M){if(--M.cbt<0){throw _1914;}
M.e.length-=(M.a-1);
return(_1915)(M);};

var _1912=function(M){if(--M.cbt<0){throw _1912;}
M.e.length-=(M.a-1);
return(_1913)(M);};

var _1910=function(M){if(--M.cbt<0){throw _1910;}
M.e.length-=(M.a-1);
return(_1911)(M);};

var _1908=function(M){if(--M.cbt<0){throw _1908;}
M.e.length-=(M.a-1);
return(_1909)(M);};

var _1906=function(M){if(--M.cbt<0){throw _1906;}
M.e.length-=(M.a-1);
return(_1907)(M);};

var _1904=function(M){if(--M.cbt<0){throw _1904;}
M.e.length-=(M.a-1);
return(_1905)(M);};

var _1902=function(M){if(--M.cbt<0){throw _1902;}
M.e.length-=(M.a-1);
return(_1903)(M);};

var _1900=function(M){if(--M.cbt<0){throw _1900;}
M.e.length-=(M.a-1);
return(_1901)(M);};













var _1858=function(M){if(--M.cbt<0){throw _1858;}
M.e.length-=(M.a-1);
return(_1859)(M);};

var _1856=function(M){if(--M.cbt<0){throw _1856;}
M.e.length-=(M.a-1);
return(_1857)(M);};


var _1850=function(M){if(--M.cbt<0){throw _1850;}
M.e.length-=(M.a-1);
return(_1851)(M);};

var _1848=function(M){if(--M.cbt<0){throw _1848;}
M.e.length-=(M.a-1);
return(_1849)(M);};

var _1846=function(M){if(--M.cbt<0){throw _1846;}
M.e.length-=(M.a-1);
return(_1847)(M);};

var _1844=function(M){if(--M.cbt<0){throw _1844;}
M.e.length-=(M.a-1);
return(_1845)(M);};

var _1842=function(M){if(--M.cbt<0){throw _1842;}
M.e.length-=(M.a-1);
return(_1843)(M);};

var _1840=function(M){if(--M.cbt<0){throw _1840;}
M.e.length-=(M.a-1);
return(_1841)(M);};

var _1838=function(M){if(--M.cbt<0){throw _1838;}
M.e.length-=(M.a-1);
return(_1839)(M);};

var _1836=function(M){if(--M.cbt<0){throw _1836;}
M.e.length-=(M.a-1);
return(_1837)(M);};

var _1834=function(M){if(--M.cbt<0){throw _1834;}
M.e.length-=(M.a-1);
return(_1835)(M);};

var _1832=function(M){if(--M.cbt<0){throw _1832;}
M.e.length-=(M.a-1);
return(_1833)(M);};

var _1830=function(M){if(--M.cbt<0){throw _1830;}
M.e.length-=(M.a-1);
return(_1831)(M);};

var _1828=function(M){if(--M.cbt<0){throw _1828;}
M.e.length-=(M.a-1);
return(_1829)(M);};

var _1826=function(M){if(--M.cbt<0){throw _1826;}
M.e.length-=(M.a-1);
return(_1827)(M);};

var _1824=function(M){if(--M.cbt<0){throw _1824;}
M.e.length-=(M.a-1);
return(_1825)(M);};

var _1822=function(M){if(--M.cbt<0){throw _1822;}
M.e.length-=(M.a-1);
return(_1823)(M);};

var _1820=function(M){if(--M.cbt<0){throw _1820;}
M.e.length-=(M.a-1);
return(_1821)(M);};

var _1818=function(M){if(--M.cbt<0){throw _1818;}
M.e.length-=(M.a-1);
return(_1819)(M);};

var _1816=function(M){if(--M.cbt<0){throw _1816;}
M.e.length-=(M.a-1);
return(_1817)(M);};

var _1814=function(M){if(--M.cbt<0){throw _1814;}
M.e.length-=(M.a-1);
return(_1815)(M);};

var _1812=function(M){if(--M.cbt<0){throw _1812;}
M.e.length-=(M.a-1);
return(_1813)(M);};

var _1810=function(M){if(--M.cbt<0){throw _1810;}
M.e.length-=(M.a-1);
return(_1811)(M);};

var _1808=function(M){if(--M.cbt<0){throw _1808;}
M.e.length-=(M.a-1);
return(_1809)(M);};

var _1805=function(M){if(--M.cbt<0){throw _1805;}
if((M.a-15)===0){return(_1801)(M);}else{RT.si_context_expected(15)(M);
}};

var _1804=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym26500;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26498;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26501;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym26502;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=4;
M.e[M.e.length-3]=sym26503;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-22];
M.e[M.e.length-2]=5;
M.e[M.e.length-3]=sym26504;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-9]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26500;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-10]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26498;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-11]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26501;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-12]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym26502;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-13]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=4;
M.e[M.e.length-3]=sym26503;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-14]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-23];
M.e[M.e.length-2]=5;
M.e[M.e.length-3]=sym26504;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-15];
M.e[M.e.length-15]=M.v;
M.a=15;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1806,M.p));
return((M.p).label)(M);};

var _1802=function(M){if(--M.cbt<0){throw _1802;}
if((M.a-5)===0){return(_1804)(M);}else{RT.si_context_expected(5)(M);
}};

var _1798=function(M){if(--M.cbt<0){throw _1798;}
M.e.length-=(M.a-1);
return(_1799)(M);};

var _1795=function(M){if(--M.cbt<0){throw _1795;}
if((M.a-9)===0){return(_1791)(M);}else{RT.si_context_expected(9)(M);
}};

var _1794=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-9];
M.e[M.e.length-9]=M.v;
M.a=9;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1796,M.p));
return((M.p).label)(M);};

var _1792=function(M){if(--M.cbt<0){throw _1792;}
if((M.a-5)===0){return(_1794)(M);}else{RT.si_context_expected(5)(M);
}};

var _1788=function(M){if(--M.cbt<0){throw _1788;}
M.e.length-=(M.a-1);
return(_1789)(M);};

var _1785=function(M){if(--M.cbt<0){throw _1785;}
if((M.a-9)===0){return(_1781)(M);}else{RT.si_context_expected(9)(M);
}};

var _1784=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26505;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-7]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26506;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-8]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym26507;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-9];
M.e[M.e.length-9]=M.v;
M.a=9;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1786,M.p));
return((M.p).label)(M);};

var _1782=function(M){if(--M.cbt<0){throw _1782;}
if((M.a-5)===0){return(_1784)(M);}else{RT.si_context_expected(5)(M);
}};

var _1778=function(M){if(--M.cbt<0){throw _1778;}
M.e.length-=(M.a-1);
return(_1779)(M);};


var _1772=function(M){if(--M.cbt<0){throw _1772;}
M.e.length-=(M.a-1);
return(_1773)(M);};


var _1766=function(M){if(--M.cbt<0){throw _1766;}
M.e.length-=(M.a-1);
return(_1767)(M);};

var _1763=function(M){if(--M.cbt<0){throw _1763;}
if((M.a-7)===0){return(_1759)(M);}else{RT.si_context_expected(7)(M);
}};

var _1762=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym26508;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym26508;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym26509;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1764,M.p));
return((M.p).label)(M);};

var _1760=function(M){if(--M.cbt<0){throw _1760;}
if((M.a-5)===0){return(_1762)(M);}else{RT.si_context_expected(5)(M);
}};

var _1756=function(M){if(--M.cbt<0){throw _1756;}
M.e.length-=(M.a-1);
return(_1757)(M);};



var _1750=function(M){if(--M.cbt<0){throw _1750;}
M.e.length-=(M.a-1);
return(_1751)(M);};


var _1746=function(M){if(--M.cbt<0){throw _1746;}
M.e.length-=(M.a-1);
return(_1747)(M);};


var _1742=function(M){if(--M.cbt<0){throw _1742;}
M.e.length-=(M.a-1);
return(_1743)(M);};

var _1740=function(M){if(--M.cbt<0){throw _1740;}
M.e.length-=(M.a-1);
return(_1741)(M);};

var _1738=function(M){if(--M.cbt<0){throw _1738;}
M.e.length-=(M.a-1);
return(_1739)(M);};

var _1736=function(M){if(--M.cbt<0){throw _1736;}
M.e.length-=(M.a-1);
return(_1737)(M);};

var _1734=function(M){if(--M.cbt<0){throw _1734;}
M.e.length-=(M.a-1);
return(_1735)(M);};

var _1732=function(M){if(--M.cbt<0){throw _1732;}
M.e.length-=(M.a-1);
return(_1733)(M);};

var _1730=function(M){if(--M.cbt<0){throw _1730;}
M.e.length-=(M.a-1);
return(_1731)(M);};

var _1728=function(M){if(--M.cbt<0){throw _1728;}
M.e.length-=(M.a-1);
return(_1729)(M);};

var _1726=function(M){if(--M.cbt<0){throw _1726;}
M.e.length-=(M.a-1);
return(_1727)(M);};

var _1724=function(M){if(--M.cbt<0){throw _1724;}
M.e.length-=(M.a-1);
return(_1725)(M);};



var _1718=function(M){if(--M.cbt<0){throw _1718;}
M.e.length-=(M.a-1);
return(_1719)(M);};



var _1712=function(M){if(--M.cbt<0){throw _1712;}
M.e.length-=(M.a-1);
return(_1713)(M);};

var _1710=function(M){if(--M.cbt<0){throw _1710;}
M.e.length-=(M.a-1);
return(_1711)(M);};

var _1708=function(M){if(--M.cbt<0){throw _1708;}
M.e.length-=(M.a-1);
return(_1709)(M);};


var _1704=function(M){if(--M.cbt<0){throw _1704;}
M.e.length-=(M.a-1);
return(_1705)(M);};


var _1700=function(M){if(--M.cbt<0){throw _1700;}
M.e.length-=(M.a-1);
return(_1701)(M);};

var _1698=function(M){if(--M.cbt<0){throw _1698;}
M.e.length-=(M.a-1);
return(_1699)(M);};

var _1696=function(M){if(--M.cbt<0){throw _1696;}
M.e.length-=(M.a-1);
return(_1697)(M);};

var _1694=function(M){if(--M.cbt<0){throw _1694;}
M.e.length-=(M.a-1);
return(_1695)(M);};

var _1695=function(M){if(--M.cbt<0){throw _1695;}
M.e.push([M.params.currentNamespace.get("SHOW-DEBUG-MSGS")||M.primitives["SHOW-DEBUG-MSGS"],M.params.currentNamespace.get("screen-scale")||M.primitives["screen-scale"],M.params.currentNamespace.get("SCREEN-WIDTH")||M.primitives["SCREEN-WIDTH"],[M.modules["whalesong/lang/private/traced-app.rkt"].prefix,M.modules["whalesong/lang/private/traced-app.rkt"].getPrefixOffset("traced-app-key"),{moduleName:"whalesong/lang/private/traced-app.rkt",name:"traced-app-key"}],M.params.currentNamespace.get("SCREEN-HEIGHT")||M.primitives["SCREEN-HEIGHT"],M.params.currentNamespace.get("WIDTH")||M.primitives["WIDTH"],M.params.currentNamespace.get("HEIGHT")||M.primitives["HEIGHT"],M.params.currentNamespace.get("CENTER-HORZ")||M.primitives["CENTER-HORZ"],M.primitives["round"],M.params.currentNamespace.get("CENTER-VERT")||M.primitives["CENTER-VERT"],M.params.currentNamespace.get("MARGIN")||M.primitives["MARGIN"],M.params.currentNamespace.get("WALL-HEIGHT")||M.primitives["WALL-HEIGHT"],M.params.currentNamespace.get("PADDLE-HEIGHT")||M.primitives["PADDLE-HEIGHT"],M.params.currentNamespace.get("PADDLE-THICKNESS")||M.primitives["PADDLE-THICKNESS"],M.params.currentNamespace.get("PADDLE-SPEED")||M.primitives["PADDLE-SPEED"],M.params.currentNamespace.get("BALL-SIZE")||M.primitives["BALL-SIZE"],M.params.currentNamespace.get("INITIAL-SPEED")||M.primitives["INITIAL-SPEED"],M.params.currentNamespace.get("MAXIMUM-SPEED")||M.primitives["MAXIMUM-SPEED"],M.params.currentNamespace.get("TOP")||M.primitives["TOP"],M.params.currentNamespace.get("BOTTOM")||M.primitives["BOTTOM"],M.params.currentNamespace.get("LEFT")||M.primitives["LEFT"],M.params.currentNamespace.get("RIGHT")||M.primitives["RIGHT"],M.params.currentNamespace.get("struct:direction")||M.primitives["struct:direction"],M.params.currentNamespace.get("make-direction")||M.primitives["make-direction"],M.params.currentNamespace.get("direction?")||M.primitives["direction?"],M.params.currentNamespace.get("direction-dx")||M.primitives["direction-dx"],M.params.currentNamespace.get("direction-dy")||M.primitives["direction-dy"],M.params.currentNamespace.get("set-direction-dx!")||M.primitives["set-direction-dx!"],M.params.currentNamespace.get("set-direction-dy!")||M.primitives["set-direction-dy!"],M.params.currentNamespace.get("UP-DIR")||M.primitives["UP-DIR"],M.params.currentNamespace.get("DOWN-DIR")||M.primitives["DOWN-DIR"],M.params.currentNamespace.get("struct:ball")||M.primitives["struct:ball"],M.params.currentNamespace.get("make-ball")||M.primitives["make-ball"],M.params.currentNamespace.get("ball?")||M.primitives["ball?"],M.params.currentNamespace.get("ball-pos")||M.primitives["ball-pos"],M.params.currentNamespace.get("ball-dir")||M.primitives["ball-dir"],M.params.currentNamespace.get("ball-speed")||M.primitives["ball-speed"],M.params.currentNamespace.get("set-ball-pos!")||M.primitives["set-ball-pos!"],M.params.currentNamespace.get("set-ball-dir!")||M.primitives["set-ball-dir!"],M.params.currentNamespace.get("set-ball-speed!")||M.primitives["set-ball-speed!"],M.params.currentNamespace.get("struct:paddle")||M.primitives["struct:paddle"],M.params.currentNamespace.get("make-paddle")||M.primitives["make-paddle"],M.params.currentNamespace.get("paddle?")||M.primitives["paddle?"],M.params.currentNamespace.get("paddle-pos")||M.primitives["paddle-pos"],M.params.currentNamespace.get("paddle-dir")||M.primitives["paddle-dir"],M.params.currentNamespace.get("paddle-speed")||M.primitives["paddle-speed"],M.params.currentNamespace.get("set-paddle-pos!")||M.primitives["set-paddle-pos!"],M.params.currentNamespace.get("set-paddle-dir!")||M.primitives["set-paddle-dir!"],M.params.currentNamespace.get("set-paddle-speed!")||M.primitives["set-paddle-speed!"],M.params.currentNamespace.get("struct:pong-world")||M.primitives["struct:pong-world"],M.params.currentNamespace.get("make-pong-world")||M.primitives["make-pong-world"],M.params.currentNamespace.get("pong-world?")||M.primitives["pong-world?"],M.params.currentNamespace.get("pong-world-status")||M.primitives["pong-world-status"],M.params.currentNamespace.get("pong-world-ball")||M.primitives["pong-world-ball"],M.params.currentNamespace.get("pong-world-left-paddle")||M.primitives["pong-world-left-paddle"],M.params.currentNamespace.get("pong-world-right-paddle")||M.primitives["pong-world-right-paddle"],M.params.currentNamespace.get("pong-world-left-score")||M.primitives["pong-world-left-score"],M.params.currentNamespace.get("pong-world-right-score")||M.primitives["pong-world-right-score"],M.params.currentNamespace.get("set-pong-world-status!")||M.primitives["set-pong-world-status!"],M.params.currentNamespace.get("set-pong-world-ball!")||M.primitives["set-pong-world-ball!"],M.params.currentNamespace.get("set-pong-world-left-paddle!")||M.primitives["set-pong-world-left-paddle!"],M.params.currentNamespace.get("set-pong-world-right-paddle!")||M.primitives["set-pong-world-right-paddle!"],M.params.currentNamespace.get("set-pong-world-left-score!")||M.primitives["set-pong-world-left-score!"],M.params.currentNamespace.get("set-pong-world-right-score!")||M.primitives["set-pong-world-right-score!"],M.params.currentNamespace.get("play-sound")||M.primitives["play-sound"],M.params.currentNamespace.get("main")||M.primitives["main"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("big-bang1.1"),{moduleName:"whalesong/world/main.rkt",name:"big-bang1.1"}],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-tick2.3"),{moduleName:"whalesong/world/main.rkt",name:"on-tick2.3"}],M.params.currentNamespace.get("handle-tick")||M.primitives["handle-tick"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("to-draw7.13"),{moduleName:"whalesong/world/main.rkt",name:"to-draw7.13"}],M.params.currentNamespace.get("draw-pong-world")||M.primitives["draw-pong-world"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-key3.5"),{moduleName:"whalesong/world/main.rkt",name:"on-key3.5"}],M.params.currentNamespace.get("handle-key-down")||M.primitives["handle-key-down"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-release4.7"),{moduleName:"whalesong/world/main.rkt",name:"on-release4.7"}],M.params.currentNamespace.get("handle-key-up")||M.primitives["handle-key-up"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("on-mouse5.9"),{moduleName:"whalesong/world/main.rkt",name:"on-mouse5.9"}],M.params.currentNamespace.get("handle-mouse")||M.primitives["handle-mouse"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("stop-when8.15"),{moduleName:"whalesong/world/main.rkt",name:"stop-when8.15"}],M.params.currentNamespace.get("quitting?")||M.primitives["quitting?"],M.params.currentNamespace.get("move-coord")||M.primitives["move-coord"],M.params.currentNamespace.get("move-ball")||M.primitives["move-ball"],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("make-posn"),{moduleName:"whalesong/lang/posn.rkt",name:"make-posn"}],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("posn-x"),{moduleName:"whalesong/lang/posn.rkt",name:"posn-x"}],[M.modules["whalesong/lang/posn.rkt"].prefix,M.modules["whalesong/lang/posn.rkt"].getPrefixOffset("posn-y"),{moduleName:"whalesong/lang/posn.rkt",name:"posn-y"}],M.params.currentNamespace.get("move-paddle-vert")||M.primitives["move-paddle-vert"],M.primitives["min"],M.primitives["max"],M.params.currentNamespace.get("move-paddle")||M.primitives["move-paddle"],M.params.currentNamespace.get("vertical-bounce")||M.primitives["vertical-bounce"],M.params.currentNamespace.get("vertical-ball-bounce")||M.primitives["vertical-ball-bounce"],M.params.currentNamespace.get("pong-world-set-ball")||M.primitives["pong-world-set-ball"],M.params.currentNamespace.get("pong-world-set-status")||M.primitives["pong-world-set-status"],M.params.currentNamespace.get("score-a-point")||M.primitives["score-a-point"],M.params.currentNamespace.get("serve-ball")||M.primitives["serve-ball"],M.params.currentNamespace.get("horizontal-bounce-y")||M.primitives["horizontal-bounce-y"],M.params.currentNamespace.get("vary-dy-by-intersection")||M.primitives["vary-dy-by-intersection"],M.params.currentNamespace.get("vary-speed-by-intersection")||M.primitives["vary-speed-by-intersection"],M.params.currentNamespace.get("horizontal-bounce")||M.primitives["horizontal-bounce"],M.primitives["abs"],M.params.currentNamespace.get("check-paddle-block")||M.primitives["check-paddle-block"],M.params.currentNamespace.get("set-paddle-moving")||M.primitives["set-paddle-moving"],M.params.currentNamespace.get("set-paddle-pos")||M.primitives["set-paddle-pos"],M.params.currentNamespace.get("stop-paddle")||M.primitives["stop-paddle"],M.params.currentNamespace.get("set-left-paddle")||M.primitives["set-left-paddle"],M.params.currentNamespace.get("set-right-paddle")||M.primitives["set-right-paddle"],M.params.currentNamespace.get("initial-posn")||M.primitives["initial-posn"],M.params.currentNamespace.get("initial-world")||M.primitives["initial-world"],M.params.currentNamespace.get("place-image-top-left")||M.primitives["place-image-top-left"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("place-image17.33"),{moduleName:"whalesong/image/private/main.rkt",name:"place-image17.33"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("image-width44.87"),{moduleName:"whalesong/image/private/main.rkt",name:"image-width44.87"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("image-height45.89"),{moduleName:"whalesong/image/private/main.rkt",name:"image-height45.89"}],M.params.currentNamespace.get("draw-goodbye")||M.primitives["draw-goodbye"],M.params.currentNamespace.get("display-msg")||M.primitives["display-msg"],M.params.currentNamespace.get("draw-idle-game")||M.primitives["draw-idle-game"],M.params.currentNamespace.get("draw-bg")||M.primitives["draw-bg"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("rectangle31.61"),{moduleName:"whalesong/image/private/main.rkt",name:"rectangle31.61"}],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("empty-scene16.31"),{moduleName:"whalesong/image/private/main.rkt",name:"empty-scene16.31"}],M.params.currentNamespace.get("vertical-dashed-line")||M.primitives["vertical-dashed-line"],M.params.currentNamespace.get("draw-net")||M.primitives["draw-net"],M.params.currentNamespace.get("draw-wall")||M.primitives["draw-wall"],M.params.currentNamespace.get("draw-playfield-bg")||M.primitives["draw-playfield-bg"],M.params.currentNamespace.get("PLAYFIELD-BG")||M.primitives["PLAYFIELD-BG"],M.params.currentNamespace.get("draw-ball")||M.primitives["draw-ball"],M.params.currentNamespace.get("BALL")||M.primitives["BALL"],M.params.currentNamespace.get("draw-paddle")||M.primitives["draw-paddle"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("text1.1"),{moduleName:"whalesong/image/private/main.rkt",name:"text1.1"}],M.primitives["number->string"],[M.modules["whalesong/image/private/main.rkt"].prefix,M.modules["whalesong/image/private/main.rkt"].getPrefixOffset("text/font2.3"),{moduleName:"whalesong/image/private/main.rkt",name:"text/font2.3"}],M.params.currentNamespace.get("dbgmsg")||M.primitives["dbgmsg"],M.primitives["string-append"],M.primitives["random"],M.params.currentNamespace.get("PADDLE")||M.primitives["PADDLE"],M.params.currentNamespace.get("serve")||M.primitives["serve"],[M.modules["whalesong/world/main.rkt"].prefix,M.modules["whalesong/world/main.rkt"].getPrefixOffset("key=?6.11"),{moduleName:"whalesong/world/main.rkt",name:"key=?6.11"}],M.primitives["string=?"],M.primitives["string?"],M.primitives["display"],[M.modules["collects/racket/private/modbeg.rkt"].prefix,M.modules["collects/racket/private/modbeg.rkt"].getPrefixOffset("print-values"),{moduleName:"collects/racket/private/modbeg.rkt",name:"print-values"}],[M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix,M.modules["whalesong/lang/check-expect/check-expect.rkt"].getPrefixOffset("run-tests"),{moduleName:"whalesong/lang/check-expect/check-expect.rkt",name:"run-tests"}]]);M.e[M.e.length-1].names=["SHOW-DEBUG-MSGS","screen-scale","SCREEN-WIDTH","traced-app-key","SCREEN-HEIGHT","WIDTH","HEIGHT","CENTER-HORZ","round","CENTER-VERT","MARGIN","WALL-HEIGHT","PADDLE-HEIGHT","PADDLE-THICKNESS","PADDLE-SPEED","BALL-SIZE","INITIAL-SPEED","MAXIMUM-SPEED","TOP","BOTTOM","LEFT","RIGHT","struct:direction","make-direction","direction?","direction-dx","direction-dy","set-direction-dx!","set-direction-dy!","UP-DIR","DOWN-DIR","struct:ball","make-ball","ball?","ball-pos","ball-dir","ball-speed","set-ball-pos!","set-ball-dir!","set-ball-speed!","struct:paddle","make-paddle","paddle?","paddle-pos","paddle-dir","paddle-speed","set-paddle-pos!","set-paddle-dir!","set-paddle-speed!","struct:pong-world","make-pong-world","pong-world?","pong-world-status","pong-world-ball","pong-world-left-paddle","pong-world-right-paddle","pong-world-left-score","pong-world-right-score","set-pong-world-status!","set-pong-world-ball!","set-pong-world-left-paddle!","set-pong-world-right-paddle!","set-pong-world-left-score!","set-pong-world-right-score!","play-sound","main","big-bang1.1","on-tick2.3","handle-tick","to-draw7.13","draw-pong-world","on-key3.5","handle-key-down","on-release4.7","handle-key-up","on-mouse5.9","handle-mouse","stop-when8.15","quitting?","move-coord","move-ball","make-posn","posn-x","posn-y","move-paddle-vert","min","max","move-paddle","vertical-bounce","vertical-ball-bounce","pong-world-set-ball","pong-world-set-status","score-a-point","serve-ball","horizontal-bounce-y","vary-dy-by-intersection","vary-speed-by-intersection","horizontal-bounce","abs","check-paddle-block","set-paddle-moving","set-paddle-pos","stop-paddle","set-left-paddle","set-right-paddle","initial-posn","initial-world","place-image-top-left","place-image17.33","image-width44.87","image-height45.89","draw-goodbye","display-msg","draw-idle-game","draw-bg","rectangle31.61","empty-scene16.31","vertical-dashed-line","draw-net","draw-wall","draw-playfield-bg","PLAYFIELD-BG","draw-ball","BALL","draw-paddle","text1.1","number->string","text/font2.3","dbgmsg","string-append","random","PADDLE","serve","key=?6.11","string=?","string?","display","print-values","run-tests"];
M.modules["root/pong-bsl.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1697,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=false;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1693=function(M){if(M.modules["whalesong/image.rkt"].isInvoked!==false){return(_1695)(M);}else{M.c.push(new RT.CallFrame(_1695,M.p));
return(M.modules["whalesong/image.rkt"].label)(M);}};

var _1691=function(M){if(--M.cbt<0){throw _1691;}
M.e.length-=(M.a-1);
return(_1692)(M);};

var _1692=function(M){if(--M.cbt<0){throw _1692;}
if((M.installedModules["whalesong/image.rkt"]!==void(0)&&M.modules["whalesong/image.rkt"]!==undefined)!==false){return(_1693)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1693);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1693)(M);}};

var _1690=function(M){if(M.modules["whalesong/world.rkt"].isInvoked!==false){return(_1692)(M);}else{M.c.push(new RT.CallFrame(_1692,M.p));
return(M.modules["whalesong/world.rkt"].label)(M);}};

var _1688=function(M){if(--M.cbt<0){throw _1688;}
M.e.length-=(M.a-1);
return(_1689)(M);};

var _1689=function(M){if(--M.cbt<0){throw _1689;}
if((M.installedModules["whalesong/world.rkt"]!==void(0)&&M.modules["whalesong/world.rkt"]!==undefined)!==false){return(_1690)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1690);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1690)(M);}};

var _1687=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_1689)(M);}else{M.c.push(new RT.CallFrame(_1689,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

var _1685=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1686=function(M){M.modules["root/pong-bsl.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_1687)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1687);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1687)(M);}};

var _435=function(M){if(--M.cbt<0){throw _435;}
M.e.length-=(M.a-1);
return(_436)(M);};

var _433=function(M){if(--M.cbt<0){throw _433;}

//"lambda body for #(struct:LamPositionalName dbgmsg root/pong-bsl.rkt 581 0 21935 92)"

M.v=true;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};











var _1645=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21690,575,10,188]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][103];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1668,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21713,575,33,164]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][41];
M.c.push(new RT.CallFrame(_1670,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21726,575,46,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-8][81][0][M.e[M.e.length-8][81][1]];
M.e[M.e.length-1]=10;
M.c.push(new RT.CallFrame(_1672,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21744,575,64,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-13];
M.c.push(new RT.CallFrame(_1674,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21751,575,71,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-10][19],90,2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1631=function(M){M.c.push(new RT.CallFrame(_1648,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21463,571,18,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-3],M.e[M.e.length-1][7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1634=function(M){if(M.v===false){return(_1631)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21430,570,11,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][132];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1633=function(M){M.v=false;
return(_1634)(M);};



var _1617=function(M){M.c.push(new RT.CallFrame(_1636,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21332,568,14,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1638,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21337,568,19,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _1620=function(M){if(M.v===false){return(_1617)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21303,567,11,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][132];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1619=function(M){M.v=false;
return(_1620)(M);};



var _1601=function(M){M.c.push(new RT.CallFrame(_1622,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21206,565,14,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1624,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21211,565,19,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1604=function(M){if(M.v===false){return(_1601)(M);}else{//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][106];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1603=function(M){M.c.push(new RT.CallFrame(_1612,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21114,563,13,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1614,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21119,563,18,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1593=function(M){M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1596=function(M){if(M.v===false){return(_1593)(M);}else{M.c.push(new RT.CallFrame(_1606,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21051,562,13,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1608,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",21056,562,18,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1595=function(M){M.c.push(new RT.CallFrame(_1600,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",20990,560,39,35]);
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


var _432=function(M){if(--M.cbt<0){throw _432;}

//"lambda body for #(struct:LamPositionalName handle-mouse root/pong-bsl.rkt 559 0 20907 985)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1598,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",20961,560,10,28]);
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

var _1575=function(M){//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][106];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _1578=function(M){if(M.v===false){return(_1575)(M);}else{M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18986,520,12,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][132];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1577=function(M){M.c.push(new RT.CallFrame(_1586,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18919,519,15,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1588,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18924,519,20,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1567=function(M){M.c.push(new RT.CallFrame(_1580,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18851,518,15,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1582,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18856,518,20,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1561=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1553=function(M){M.c.push(new RT.CallFrame(_1564,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18744,515,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=" ";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1531=function(M){M.c.push(new RT.CallFrame(_1556,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18666,513,5,22]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="escape";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _1534=function(M){if(M.v===false){return(_1531)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18509,511,8,70]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][104];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1544,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18533,511,32,45]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][102];
M.c.push(new RT.CallFrame(_1546,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18546,511,45,31]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][55];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1533=function(M){M.c.push(new RT.CallFrame(_1540,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18479,510,28,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="down";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1509=function(M){M.c.push(new RT.CallFrame(_1536,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18460,510,9,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="up";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _1512=function(M){if(M.v===false){return(_1509)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18381,509,8,68]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][103];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.c.push(new RT.CallFrame(_1522,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18404,509,31,44]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][102];
M.c.push(new RT.CallFrame(_1524,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18417,509,44,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][54];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};

var _1511=function(M){M.c.push(new RT.CallFrame(_1518,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18354,508,27,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="s";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _431=function(M){if(--M.cbt<0){throw _431;}

//"lambda body for #(struct:LamPositionalName handle-key-up root/pong-bsl.rkt 506 0 18283 769)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1514,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18336,508,9,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="w";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1493=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _1477=function(M){M.c.push(new RT.CallFrame(_1496,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18134,502,5,20]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="down";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1461=function(M){M.c.push(new RT.CallFrame(_1480,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",18004,500,5,18]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="up";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _1445=function(M){M.c.push(new RT.CallFrame(_1464,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17875,498,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="s";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _430=function(M){if(--M.cbt<0){throw _430;}

//"lambda body for #(struct:LamPositionalName handle-key-down root/pong-bsl.rkt 494 0 17697 584)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1448,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17748,496,5,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-3][133][0][M.e[M.e.length-3][133][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="w";
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _429=function(M){if(--M.cbt<0){throw _429;}

//"lambda body for #(struct:LamPositionalName serve root/pong-bsl.rkt 491 0 17631 64)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17655,492,2,39]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][91];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="in-play";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _428=function(M){if(--M.cbt<0){throw _428;}

//"lambda body for #(struct:LamPositionalName draw-paddle root/pong-bsl.rkt 479 0 17242 199)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17324,481,2,116]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][107];
if (M.e[M.e.length-5][131]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[131]); }
M.e[M.e.length-1]=M.e[M.e.length-5][131];
M.c.push(new RT.CallFrame(_1426,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17361,483,4,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-5][82][0][M.e[M.e.length-5][82][1]]);
M.c.push(new RT.CallFrame(_1428,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17369,483,12,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][43];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




















var _1337=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16978,471,4,256]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_1392,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",17002,472,6,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _427=function(M){if(--M.cbt<0){throw _427;}

//"lambda body for #(struct:LamPositionalName handle-tick root/pong-bsl.rkt 459 0 16457 779)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1340,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16491,460,6,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1342,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16496,460,11,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1321=function(M){M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _1305=function(M){M.c.push(new RT.CallFrame(_1324,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16256,453,5,50]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1326,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16261,453,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};





var _1289=function(M){M.c.push(new RT.CallFrame(_1308,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16068,449,5,49]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1310,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",16073,449,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};





var _1273=function(M){M.c.push(new RT.CallFrame(_1292,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15868,445,5,53]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1294,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15873,445,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _1235=function(M){M.c.push(new RT.CallFrame(_1276,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15668,441,5,52]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1278,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15673,441,10,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _1223=function(M){//"Constant toplevel ref: ?"

M.v=M.e[M.e.length-1][121];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _426=function(M){if(--M.cbt<0){throw _426;}

//"lambda body for #(struct:LamPositionalName draw-pong-world root/pong-bsl.rkt 433 0 15292 1163)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1226,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15330,434,6,66]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-2][128]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-2].names[128]); }
M.e[M.e.length-1]=M.e[M.e.length-2][128];
M.c.push(new RT.CallFrame(_1228,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15338,434,14,57]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="draw ";
M.c.push(new RT.CallFrame(_1230,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15361,434,37,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1232,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15377,434,53,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(10);
M.a=1;
M.v=M.primitives["random"]._i(M);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _425=function(M){if(--M.cbt<0){throw _425;}

//"lambda body for #(struct:LamPositionalName display-msg root/pong-bsl.rkt 427 0 15094 194)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15142,428,2,145]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-5][108][0][M.e[M.e.length-5][108][1]];
M.c.push(new RT.CallFrame(_1218,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",15155,428,15,81]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-13][127][0][M.e[M.e.length-13][127][1]];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=M.e[M.e.length-15];
M.e[M.e.length-3]="white";
M.e[M.e.length-4]="impact";
M.e[M.e.length-5]=sym26510;
M.e[M.e.length-6]=sym26511;
M.e[M.e.length-7]=sym26512;
M.e[M.e.length-8]=false;
M.a=8;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};














var _424=function(M){if(--M.cbt<0){throw _424;}

//"lambda body for #(struct:LamPositionalName draw-idle-game root/pong-bsl.rkt 416 0 14688 404)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14721,417,2,370]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][124];
M.c.push(new RT.CallFrame(_1172,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14734,417,15,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _423=function(M){if(--M.cbt<0){throw _423;}

//"lambda body for #(struct:LamPositionalName draw-ball root/pong-bsl.rkt 412 0 14586 63)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14611,412,25,37]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][115][0][M.e[M.e.length-5][115][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};






var _422=function(M){if(--M.cbt<0){throw _422;}

//"lambda body for #(struct:LamPositionalName draw-playfield-bg root/pong-bsl.rkt 387 0 13942 188)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13976,388,2,153]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][107];
M.c.push(new RT.CallFrame(_1148,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",14002,389,4,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][119];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _421=function(M){if(--M.cbt<0){throw _421;}

//"lambda body for #(struct:LamPositionalName draw-wall root/pong-bsl.rkt 384 0 13874 66)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13898,385,2,41]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-5][115][0][M.e[M.e.length-5][115][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=16;
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]="white";
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _420=function(M){if(--M.cbt<0){throw _420;}

//"lambda body for #(struct:LamPositionalName draw-net root/pong-bsl.rkt 381 0 13756 116)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13786,382,4,85]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-8][117];
M.e[M.e.length-1]=16;
M.e[M.e.length-2]=16;
M.c.push(new RT.CallFrame(_1138,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13828,382,46,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1140,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13831,382,49,7]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=plt.baselib.numbers.divide(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-11],0,"/"), 2);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _1119=function(M){M.v=M.e[M.e.length-8];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _419=function(M){if(--M.cbt<0){throw _419;}

//"lambda body for #(struct:LamPositionalName vertical-dashed-line root/pong-bsl.rkt 373 0 13553 201)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_1122,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13607,374,6,9]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-5],0,"<"),RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-6],1,"<"))));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _418=function(M){if(--M.cbt<0){throw _418;}

//"lambda body for #(struct:LamPositionalName draw-bg root/pong-bsl.rkt 357 0 12977 211)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13111,360,2,76]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][107];
M.c.push(new RT.CallFrame(_1110,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",13135,361,2,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.e[M.e.length-9][115][0][M.e[M.e.length-9][115][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="solid";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.a=4;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _417=function(M){if(--M.cbt<0){throw _417;}

//"lambda body for #(struct:LamPositionalName draw-goodbye root/pong-bsl.rkt 352 0 12847 128)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12879,353,3,95]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0));
if (M.e[M.e.length-6][112]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[112]); }
M.e[M.e.length-5]=M.e[M.e.length-6][112];
M.e[M.e.length-1]="Goodbye!!";
M.e[M.e.length-2]=48;
M.c.push(new RT.CallFrame(_1102,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12913,354,6,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedSub(M, M.e[M.e.length-6][7],200);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};









var _416=function(M){if(--M.cbt<0){throw _416;}

//"lambda body for #(struct:LamPositionalName place-image-top-left root/pong-bsl.rkt 346 0 12667 178)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12717,347,3,127]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.e[M.e.length-5][108][0][M.e[M.e.length-5][108][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.c.push(new RT.CallFrame(_1080,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12743,348,6,40]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_1082,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12748,348,11,34]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_1084,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12755,348,18,26]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1086,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12759,348,22,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-11][109][0][M.e[M.e.length-11][109][1]];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _415=function(M){if(--M.cbt<0){throw _415;}

//"lambda body for #(struct:LamPositionalName quitting? root/pong-bsl.rkt 340 0 12328 71)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12356,341,2,42]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_1076,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",12361,341,7,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _414=function(M){if(--M.cbt<0){throw _414;}

//"lambda body for #(struct:LamPositionalName serve-ball root/pong-bsl.rkt 323 0 11592 113)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11626,324,2,78]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][105];
M.c.push(new RT.CallFrame(_1070,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11655,325,5,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][23];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=0;
M.a=2;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};






var _413=function(M){if(--M.cbt<0){throw _413;}

//"lambda body for #(struct:LamPositionalName set-right-paddle root/pong-bsl.rkt 310 0 11192 247)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11240,311,2,198]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_1048,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11261,312,4,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};






var _412=function(M){if(--M.cbt<0){throw _412;}

//"lambda body for #(struct:LamPositionalName set-left-paddle root/pong-bsl.rkt 301 0 10945 245)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10991,302,2,198]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_1026,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",11012,303,4,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _411=function(M){if(--M.cbt<0){throw _411;}

//"lambda body for #(struct:LamPositionalName stop-paddle root/pong-bsl.rkt 295 0 10843 100)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10874,296,2,68]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_1016,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10892,297,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][43];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _410=function(M){if(--M.cbt<0){throw _410;}

//"lambda body for #(struct:LamPositionalName set-paddle-pos root/pong-bsl.rkt 287 0 10620 111)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10658,288,2,72]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.c.push(new RT.CallFrame(_1006,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10684,290,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][44];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _409=function(M){if(--M.cbt<0){throw _409;}

//"lambda body for #(struct:LamPositionalName set-paddle-moving root/pong-bsl.rkt 279 0 10404 104)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10451,280,2,56]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_1000,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",10469,281,4,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][43];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

















var _408=function(M){if(--M.cbt<0){throw _408;}

//"lambda body for #(struct:LamPositionalName check-paddle-block root/pong-bsl.rkt 267 0 9821 432)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9858,268,2,394]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-8]=M.e[M.e.length-9][97];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_934,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9894,269,10,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][54];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _407=function(M){if(--M.cbt<0){throw _407;}

//"lambda body for #(struct:LamPositionalName vary-speed-by-intersection root/pong-bsl.rkt 257 0 9326 392)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9472,259,2,245]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=68;
M.c.push(new RT.CallFrame(_916,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9567,261,7,149]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_918,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9574,261,14,141]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.c.push(new RT.CallFrame(_920,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9609,262,17,105]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_922,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9612,262,20,99]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_924,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9615,262,23,54]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_926,M.p));
M.v=M.e[M.e.length-11][3][0][M.e[M.e.length-11][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9620,262,28,48]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-16];
M.c.push(new RT.CallFrame(_928,M.p));
M.v=M.e[M.e.length-13][3][0][M.e[M.e.length-13][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9635,262,43,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-17];
M.c.push(new RT.CallFrame(_930,M.p));
M.v=M.e[M.e.length-15][3][0][M.e[M.e.length-15][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9647,262,55,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _406=function(M){if(--M.cbt<0){throw _406;}

//"lambda body for #(struct:LamPositionalName vary-dy-by-intersection root/pong-bsl.rkt 253 0 9122 124)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9179,254,2,66]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_910,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9182,254,5,48]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.c.push(new RT.CallFrame(_912,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9197,254,20,32]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_914,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",9209,254,32,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=45;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _405=function(M){if(--M.cbt<0){throw _405;}

//"lambda body for #(struct:LamPositionalName horizontal-bounce root/pong-bsl.rkt 247 0 8800 234)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8877,248,2,156]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-8]=M.e[M.e.length-9][94];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.c.push(new RT.CallFrame(_892,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8926,249,21,33]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][83][0][M.e[M.e.length-9][83][1]]);
M.c.push(new RT.CallFrame(_894,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8934,249,29,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][43];
M.e[M.e.length-1]=M.e[M.e.length-13];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};







var _859=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _847=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8713,243,9,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][92];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="left";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _850=function(M){if(M.v===false){return(_847)(M);}else{M.c.push(new RT.CallFrame(_862,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8412,238,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][64];
M.e[M.e.length-1]="paddle";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};



var _849=function(M){M.v=false;
return(_850)(M);};



var _843=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};








var _811=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _799=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7990,229,11,29]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][92];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]="right";
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _802=function(M){if(M.v===false){return(_799)(M);}else{M.c.push(new RT.CallFrame(_814,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7688,224,15,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][64];
M.e[M.e.length-1]="paddle";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);}};



var _801=function(M){M.v=false;
return(_802)(M);};



var _795=function(M){M.v=M.e[M.e.length-2];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _791=function(M){M.c.push(new RT.CallFrame(_846,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",8143,233,11,11]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-5],M.e[M.e.length-1][21]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _404=function(M){if(--M.cbt<0){throw _404;}

//"lambda body for #(struct:LamPositionalName horizontal-bounce-y root/pong-bsl.rkt 215 0 7251 1542)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_794,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7368,217,8,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-7],0,"<"),0)));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};







var _760=function(M){M.c.push(new RT.CallFrame(_768,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",7055,208,8,16]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-8][93]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-8].names[93]); }
M.p=M.e[M.e.length-8][93];
M.e[M.e.length-1]=RT.makeFloat(0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _759=function(M){M.e[M.e.length-1]="right-player-won";
return(_760)(M);};









var _728=function(M){M.c.push(new RT.CallFrame(_736,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6749,201,8,17]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
if (M.e[M.e.length-8][93]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-8].names[93]); }
M.p=M.e[M.e.length-8][93];
M.e[M.e.length-1]=RT.makeFloat(-0.5);
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _727=function(M){M.e[M.e.length-1]="left-player-won";
return(_728)(M);};



var _723=function(M){M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6936,206,6,298]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_762,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6969,207,12,36]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_764,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6972,207,15,30]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][57];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};


var _717=function(M){M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _403=function(M){if(--M.cbt<0){throw _403;}

//"lambda body for #(struct:LamPositionalName score-a-point root/pong-bsl.rkt 194 0 6452 795)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_720,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6493,195,6,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-2][64];
M.e[M.e.length-1]="missed";
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};






var _402=function(M){if(--M.cbt<0){throw _402;}

//"lambda body for #(struct:LamPositionalName pong-world-set-status root/pong-bsl.rkt 185 0 6200 250)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6247,186,2,202]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_696,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6281,188,5,23]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][53];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};






var _401=function(M){if(--M.cbt<0){throw _401;}

//"lambda body for #(struct:LamPositionalName pong-world-set-ball root/pong-bsl.rkt 176 0 5952 246)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5995,177,2,202]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][50];
M.c.push(new RT.CallFrame(_674,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",6017,178,5,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};










var _400=function(M){if(--M.cbt<0){throw _400;}

//"lambda body for #(struct:LamPositionalName vertical-ball-bounce root/pong-bsl.rkt 168 0 5703 241)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5741,169,2,202]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][88];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.c.push(new RT.CallFrame(_636,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5773,170,10,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-7][82][0][M.e[M.e.length-7][82][1]]);
M.c.push(new RT.CallFrame(_638,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5781,170,18,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][34];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};




var _617=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _613=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};





var _595=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _591=function(M){M.v=M.e[M.e.length-2];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _587=function(M){M.c.push(new RT.CallFrame(_616,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",5306,157,11,12]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-4],M.e[M.e.length-1][19]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _399=function(M){if(--M.cbt<0){throw _399;}

//"lambda body for #(struct:LamPositionalName vertical-bounce root/pong-bsl.rkt 145 0 4830 754)"

M.e.push(M.p.closedVals[0]);
M.c.push(new RT.CallFrame(_590,M.p));
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4911,147,8,8]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=((plt.baselib.numbers.lessThan(RT.testArgument(M,"number",RT.isNumber,M.e[M.e.length-6],0,"<"),0)));
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};












var _398=function(M){if(--M.cbt<0){throw _398;}

//"lambda body for #(struct:LamPositionalName move-paddle root/pong-bsl.rkt 135 0 4470 358)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4501,136,2,326]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][41];
M.c.push(new RT.CallFrame(_542,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4514,136,15,240]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6][81][0][M.e[M.e.length-6][81][1]];
M.c.push(new RT.CallFrame(_544,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4543,137,17,28]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-6][82][0][M.e[M.e.length-6][82][1]]);
M.c.push(new RT.CallFrame(_546,M.p));
M.v=M.e[M.e.length-7][3][0][M.e[M.e.length-7][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4551,137,25,19]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][43];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};







var _397=function(M){if(--M.cbt<0){throw _397;}

//"lambda body for #(struct:LamPositionalName move-paddle-vert root/pong-bsl.rkt 131 0 4274 193)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4382,133,2,84]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_530,M.p));
M.v=M.e[M.e.length-3][3][0][M.e[M.e.length-3][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4387,133,7,51]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.c.push(new RT.CallFrame(_532,M.p));
M.v=M.e[M.e.length-5][3][0][M.e[M.e.length-5][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4392,133,12,35]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_534,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4399,133,19,27]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_536,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",4412,133,32,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, M.e[M.e.length-10],M.e[M.e.length-11]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};
















var _396=function(M){if(--M.cbt<0){throw _396;}

//"lambda body for #(struct:LamPositionalName move-ball root/pong-bsl.rkt 122 0 3791 320)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3818,123,2,292]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][32];
M.c.push(new RT.CallFrame(_468,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3829,123,13,216]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6][81][0][M.e[M.e.length-6][81][1]];
M.c.push(new RT.CallFrame(_470,M.p));
M.v=M.e[M.e.length-6][3][0][M.e[M.e.length-6][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3856,124,15,86]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][79];
M.c.push(new RT.CallFrame(_472,M.p));
M.v=M.e[M.e.length-9][3][0][M.e[M.e.length-9][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3868,124,27,24]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(M.e[M.e.length-9][82][0][M.e[M.e.length-9][82][1]]);
M.c.push(new RT.CallFrame(_474,M.p));
M.v=M.e[M.e.length-10][3][0][M.e[M.e.length-10][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3876,124,35,15]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][34];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};



var _395=function(M){if(--M.cbt<0){throw _395;}

//"lambda body for #(struct:LamPositionalName move-coord root/pong-bsl.rkt 118 0 3664 125)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3755,120,2,33]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.c.push(new RT.CallFrame(_464,M.p));
M.v=M.e[M.e.length-2][3][0][M.e[M.e.length-2][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3762,120,9,25]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.c.push(new RT.CallFrame(_466,M.p));
M.v=M.e[M.e.length-4][3][0][M.e[M.e.length-4][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3773,120,20,13]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.v=RT.checkedMul(M, M.e[M.e.length-6],M.e[M.e.length-7]);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};







var _394=function(M){if(--M.cbt<0){throw _394;}

//"lambda body for #(struct:LamPositionalName main root/pong-bsl.rkt 107 0 3290 372)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-1][3][0][M.e[M.e.length-1][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3313,108,2,348]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.e[M.e.length-8][66][0][M.e[M.e.length-8][66][1]];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.c.push(new RT.CallFrame(_438,M.p));
M.v=M.e[M.e.length-8][3][0][M.e[M.e.length-8][3][1]];
M.c[M.c.length-1].pendingContinuationMarkKey=M.v;
M.v=RT.makeVector(["#<path:/Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>",3333,109,4,21]);
M.installContinuationMarkEntry(M.c[M.c.length-1].pendingContinuationMarkKey,M.v);
M.e.push(void(0));
M.p=M.e[M.e.length-9][67][0][M.e[M.e.length-9][67][1]];
if (M.e[M.e.length-9][68]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-9].names[68]); }
M.e[M.e.length-1]=M.e[M.e.length-9][68];
M.a=1;
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _393=function(M){if(--M.cbt<0){throw _393;}

//"lambda body for #(struct:LamPositionalName play-sound root/pong-bsl.rkt 94 0 3058 31)"

M.v=true;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _434=function(M){M.c.push(new RT.CallFrame(_436,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["root/pong-bsl.rkt"]=function(){return new RT.ModuleRecord("pong-bsl",_1686);}
return(_1685)(M);};

var _1973=function(M){if(--M.cbt<0){throw _1973;}
if(M.a===0){return(_1970)(M);}else{M.e.push(M.v);
return(_1970)(M);}};

var _1962=function(M){if(--M.cbt<0){throw _1962;}
if(M.a===0){return(_1959)(M);}else{M.e.push(M.v);
return(_1959)(M);}};

var _1801=function(M){M.e.splice(M.e.length-19,5);
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

var _1791=function(M){M.e.splice(M.e.length-13,5);
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

var _1781=function(M){M.e.splice(M.e.length-13,5);
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

var _1759=function(M){M.e.splice(M.e.length-11,5);
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

_1689.mvr=_1688;
_1692.mvr=_1691;
_1695.mvr=_1694;
_1697.mvr=_1696;
_1699.mvr=_1698;
_1701.mvr=_1700;
_1705.mvr=_1704;
_1709.mvr=_1708;
_1711.mvr=_1710;
_1713.mvr=_1712;
_1719.mvr=_1718;
_1725.mvr=_1724;
_1727.mvr=_1726;
_1729.mvr=_1728;
_1731.mvr=_1730;
_1733.mvr=_1732;
_1735.mvr=_1734;
_1737.mvr=_1736;
_1739.mvr=_1738;
_1741.mvr=_1740;
_1743.mvr=_1742;
_1747.mvr=_1746;
_1751.mvr=_1750;
_1761.mvr=_1760;
_1764.mvr=_1763;
_1757.mvr=_1756;
_1767.mvr=_1766;
_1773.mvr=_1772;
_1783.mvr=_1782;
_1786.mvr=_1785;
_1779.mvr=_1778;
_1793.mvr=_1792;
_1796.mvr=_1795;
_1789.mvr=_1788;
_1803.mvr=_1802;
_1806.mvr=_1805;
_1799.mvr=_1798;
_1809.mvr=_1808;
_1811.mvr=_1810;
_1813.mvr=_1812;
_1815.mvr=_1814;
_1817.mvr=_1816;
_1819.mvr=_1818;
_1821.mvr=_1820;
_1823.mvr=_1822;
_1825.mvr=_1824;
_1827.mvr=_1826;
_1829.mvr=_1828;
_1831.mvr=_1830;
_1833.mvr=_1832;
_1835.mvr=_1834;
_1837.mvr=_1836;
_1839.mvr=_1838;
_1841.mvr=_1840;
_1843.mvr=_1842;
_1845.mvr=_1844;
_1847.mvr=_1846;
_1849.mvr=_1848;
_1851.mvr=_1850;
_1857.mvr=_1856;
_1859.mvr=_1858;
_1901.mvr=_1900;
_1903.mvr=_1902;
_1905.mvr=_1904;
_1907.mvr=_1906;
_1909.mvr=_1908;
_1911.mvr=_1910;
_1913.mvr=_1912;
_1915.mvr=_1914;
_1917.mvr=_1916;
_1923.mvr=_1922;
_1925.mvr=_1924;
_1931.mvr=_1930;
_1933.mvr=_1932;
_1935.mvr=_1934;
_1937.mvr=_1936;
_1939.mvr=_1938;
_1941.mvr=_1940;
_1947.mvr=_1946;
_1949.mvr=_1948;
_1951.mvr=_1950;
_1953.mvr=_1952;
_1955.mvr=_1954;
_1961.mvr=_1962;
_1957.mvr=_1956;
_1972.mvr=_1973;
_1968.mvr=_1967;
_436.mvr=_435;
var sym26510=RT.makeSymbol("system");
var sym26498=RT.makeSymbol("ball");
var sym26497=RT.makeSymbol("paddle");
var sym26499=RT.makeSymbol("direction");
var sym26504=RT.makeSymbol("right-score");
var sym26503=RT.makeSymbol("left-score");
var sym26502=RT.makeSymbol("right-paddle");
var sym26501=RT.makeSymbol("left-paddle");
var sym26496=RT.makeSymbol("pong-world");
var sym26500=RT.makeSymbol("status");
var sym26507=RT.makeSymbol("speed");
var sym26506=RT.makeSymbol("dir");
var sym26508=RT.makeSymbol("dx");
var sym26509=RT.makeSymbol("dy");
var sym26505=RT.makeSymbol("pos");
var sym26511=RT.makeSymbol("normal");
var sym26512=RT.makeSymbol("light");var _393_c=new RT.Closure(_393,1,void(0),"play-sound");
var _433_c=new RT.Closure(_433,1,void(0),"dbgmsg");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1976(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<MainModuleSource /Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<MainModuleSource /Users/crused/Dropbox/pong-world-racket/pongsong/deprecated/pong-bsl.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/world.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1988=function(M){return(_1977)(M);};

var _1979=function(M){if(--M.cbt<0){throw _1979;}
};

var _1986=function(M){if(--M.cbt<0){throw _1986;}
M.e.length-=(M.a-1);
return(_1987)(M);};

var _1987=function(M){if(--M.cbt<0){throw _1987;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/world.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?6.11"));ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse5.9"));ns.set("on-release", M.modules["whalesong/world/main.rkt"].getExports().get("on-release4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when8.15"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw7.13"));}(M.modules["whalesong/world.rkt"],M.modules["whalesong/world.rkt"].getExports(),M.modules["whalesong/world.rkt"].getExternalExports(),M.modules["whalesong/world.rkt"].prefix));
return(M.p)(M);};

var _1985=function(M){if(M.modules["whalesong/world/main.rkt"].isInvoked!==false){return(_1987)(M);}else{M.c.push(new RT.CallFrame(_1987,M.p));
return(M.modules["whalesong/world/main.rkt"].label)(M);}};

var _1983=function(M){if(--M.cbt<0){throw _1983;}
M.e.length-=(M.a-1);
return(_1984)(M);};

var _1984=function(M){if(--M.cbt<0){throw _1984;}
if((M.installedModules["whalesong/world/main.rkt"]!==void(0)&&M.modules["whalesong/world/main.rkt"]!==undefined)!==false){return(_1985)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1985);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1985)(M);}};

var _1982=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_1984)(M);}else{M.c.push(new RT.CallFrame(_1984,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _1980=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1981=function(M){M.modules["whalesong/world.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_1982)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1982);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1982)(M);}};

var _1978=function(M){if(--M.cbt<0){throw _1978;}
M.e.length-=(M.a-1);
return(_1979)(M);};

var _1977=function(M){M.c.push(new RT.CallFrame(_1979,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/world.rkt"]=function(){return new RT.ModuleRecord("world",_1981);}
return(_1980)(M);};

_1984.mvr=_1983;
_1987.mvr=_1986;
_1979.mvr=_1978;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1988(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/base.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2026=function(M){return(_1997)(M);};

var _1999=function(M){if(--M.cbt<0){throw _1999;}
};

var _2024=function(M){if(--M.cbt<0){throw _2024;}
M.e.length-=(M.a-1);
return(_2025)(M);};

var _2025=function(M){if(--M.cbt<0){throw _2025;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/base.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exn:fail:contract:arity?", M.primitives["exn:fail:contract:arity?"]);ns.set("exn:fail:contract?", M.primitives["exn:fail:contract?"]);ns.set("exn:fail?", M.primitives["exn:fail?"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/base.rkt"],M.modules["whalesong/lang/base.rkt"].getExports(),M.modules["whalesong/lang/base.rkt"].getExternalExports(),M.modules["whalesong/lang/base.rkt"].prefix));
return(M.p)(M);};

var _2023=function(M){if(M.modules["collects/racket/private/modbeg.rkt"].isInvoked!==false){return(_2025)(M);}else{M.c.push(new RT.CallFrame(_2025,M.p));
return(M.modules["collects/racket/private/modbeg.rkt"].label)(M);}};

var _2021=function(M){if(--M.cbt<0){throw _2021;}
M.e.length-=(M.a-1);
return(_2022)(M);};

var _2022=function(M){if(--M.cbt<0){throw _2022;}
if((M.installedModules["collects/racket/private/modbeg.rkt"]!==void(0)&&M.modules["collects/racket/private/modbeg.rkt"]!==undefined)!==false){return(_2023)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/racket/private/modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2023);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2023)(M);}};

var _2020=function(M){if(M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked!==false){return(_2022)(M);}else{M.c.push(new RT.CallFrame(_2022,M.p));
return(M.modules["whalesong/lang/private/qq-and-or.rkt"].label)(M);}};

var _2018=function(M){if(--M.cbt<0){throw _2018;}
M.e.length-=(M.a-1);
return(_2019)(M);};

var _2019=function(M){if(--M.cbt<0){throw _2019;}
if((M.installedModules["whalesong/lang/private/qq-and-or.rkt"]!==void(0)&&M.modules["whalesong/lang/private/qq-and-or.rkt"]!==undefined)!==false){return(_2020)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/qq-and-or.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2020);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2020)(M);}};

var _2017=function(M){if(M.modules["whalesong/lang/list.rkt"].isInvoked!==false){return(_2019)(M);}else{M.c.push(new RT.CallFrame(_2019,M.p));
return(M.modules["whalesong/lang/list.rkt"].label)(M);}};

var _2015=function(M){if(--M.cbt<0){throw _2015;}
M.e.length-=(M.a-1);
return(_2016)(M);};

var _2016=function(M){if(--M.cbt<0){throw _2016;}
if((M.installedModules["whalesong/lang/list.rkt"]!==void(0)&&M.modules["whalesong/lang/list.rkt"]!==undefined)!==false){return(_2017)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2017);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2017)(M);}};

var _2014=function(M){if(M.modules["whalesong/lang/private/with-handlers.rkt"].isInvoked!==false){return(_2016)(M);}else{M.c.push(new RT.CallFrame(_2016,M.p));
return(M.modules["whalesong/lang/private/with-handlers.rkt"].label)(M);}};

var _2012=function(M){if(--M.cbt<0){throw _2012;}
M.e.length-=(M.a-1);
return(_2013)(M);};

var _2013=function(M){if(--M.cbt<0){throw _2013;}
if((M.installedModules["whalesong/lang/private/with-handlers.rkt"]!==void(0)&&M.modules["whalesong/lang/private/with-handlers.rkt"]!==undefined)!==false){return(_2014)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/with-handlers.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2014);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2014)(M);}};

var _2011=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_2013)(M);}else{M.c.push(new RT.CallFrame(_2013,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _2009=function(M){if(--M.cbt<0){throw _2009;}
M.e.length-=(M.a-1);
return(_2010)(M);};

var _2010=function(M){if(--M.cbt<0){throw _2010;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_2011)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2011);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2011)(M);}};

var _2008=function(M){if(M.modules["whalesong/lang/private/hash.rkt"].isInvoked!==false){return(_2010)(M);}else{M.c.push(new RT.CallFrame(_2010,M.p));
return(M.modules["whalesong/lang/private/hash.rkt"].label)(M);}};

var _2006=function(M){if(--M.cbt<0){throw _2006;}
M.e.length-=(M.a-1);
return(_2007)(M);};

var _2007=function(M){if(--M.cbt<0){throw _2007;}
if((M.installedModules["whalesong/lang/private/hash.rkt"]!==void(0)&&M.modules["whalesong/lang/private/hash.rkt"]!==undefined)!==false){return(_2008)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/hash.rkt";
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

var _2005=function(M){if(M.modules["whalesong/lang/private/map.rkt"].isInvoked!==false){return(_2007)(M);}else{M.c.push(new RT.CallFrame(_2007,M.p));
return(M.modules["whalesong/lang/private/map.rkt"].label)(M);}};

var _2003=function(M){if(--M.cbt<0){throw _2003;}
M.e.length-=(M.a-1);
return(_2004)(M);};

var _2004=function(M){if(--M.cbt<0){throw _2004;}
if((M.installedModules["whalesong/lang/private/map.rkt"]!==void(0)&&M.modules["whalesong/lang/private/map.rkt"]!==undefined)!==false){return(_2005)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/map.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2005);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2005)(M);}};

var _2002=function(M){if(M.modules["whalesong/lang/private/list.rkt"].isInvoked!==false){return(_2004)(M);}else{M.c.push(new RT.CallFrame(_2004,M.p));
return(M.modules["whalesong/lang/private/list.rkt"].label)(M);}};

var _2000=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2001=function(M){M.modules["whalesong/lang/base.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/list.rkt"]!==void(0)&&M.modules["whalesong/lang/private/list.rkt"]!==undefined)!==false){return(_2002)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2002);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2002)(M);}};

var _1998=function(M){if(--M.cbt<0){throw _1998;}
M.e.length-=(M.a-1);
return(_1999)(M);};

var _1997=function(M){M.c.push(new RT.CallFrame(_1999,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/base.rkt"]=function(){return new RT.ModuleRecord("base",_2001);}
return(_2000)(M);};

_2004.mvr=_2003;
_2007.mvr=_2006;
_2010.mvr=_2009;
_2013.mvr=_2012;
_2016.mvr=_2015;
_2019.mvr=_2018;
_2022.mvr=_2021;
_2025.mvr=_2024;
_1999.mvr=_1998;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2026(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2687=function(M){return(_2100)(M);};

var _2686=function(M){if(--M.cbt<0){throw _2686;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);extNs.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);ns.set("append*", prefix[selfMod.getPrefixOffset("append*")]);extNs.set("append*", prefix[selfMod.getPrefixOffset("append*")]);ns.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);extNs.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);ns.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);extNs.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);ns.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);extNs.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);ns.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);extNs.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);ns.set("count", prefix[selfMod.getPrefixOffset("count")]);extNs.set("count", prefix[selfMod.getPrefixOffset("count")]);ns.set("drop", prefix[selfMod.getPrefixOffset("drop")]);extNs.set("drop", prefix[selfMod.getPrefixOffset("drop")]);ns.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);extNs.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);ns.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);extNs.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);ns.set("empty", prefix[selfMod.getPrefixOffset("empty")]);extNs.set("empty", prefix[selfMod.getPrefixOffset("empty")]);ns.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);extNs.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);ns.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);extNs.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);ns.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);extNs.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);ns.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);extNs.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);ns.set("first", prefix[selfMod.getPrefixOffset("first")]);extNs.set("first", prefix[selfMod.getPrefixOffset("first")]);ns.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);extNs.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);ns.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);extNs.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);ns.set("last", prefix[selfMod.getPrefixOffset("last")]);extNs.set("last", prefix[selfMod.getPrefixOffset("last")]);ns.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);extNs.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);ns.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);extNs.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);ns.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);extNs.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);ns.set("partition", prefix[selfMod.getPrefixOffset("partition")]);extNs.set("partition", prefix[selfMod.getPrefixOffset("partition")]);ns.set("rest", prefix[selfMod.getPrefixOffset("rest")]);extNs.set("rest", prefix[selfMod.getPrefixOffset("rest")]);ns.set("second", prefix[selfMod.getPrefixOffset("second")]);extNs.set("second", prefix[selfMod.getPrefixOffset("second")]);ns.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);extNs.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);ns.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);extNs.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);ns.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);extNs.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);ns.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);extNs.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);ns.set("take", prefix[selfMod.getPrefixOffset("take")]);extNs.set("take", prefix[selfMod.getPrefixOffset("take")]);ns.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);extNs.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);ns.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);extNs.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);ns.set("third", prefix[selfMod.getPrefixOffset("third")]);extNs.set("third", prefix[selfMod.getPrefixOffset("third")]);}(M.modules["whalesong/lang/list.rkt"],M.modules["whalesong/lang/list.rkt"].getExports(),M.modules["whalesong/lang/list.rkt"].getExternalExports(),M.modules["whalesong/lang/list.rkt"].prefix));
return(M.p)(M);};

var _2684=function(M){if(--M.cbt<0){throw _2684;}
M.c.push(new RT.CallFrame(_2686,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2099,2,[M.e[M.e.length-1]],"argmax");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2682=function(M){if(--M.cbt<0){throw _2682;}
M.c.push(new RT.CallFrame(_2684,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2098,2,[M.e[M.e.length-1]],"argmin");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2680=function(M){if(--M.cbt<0){throw _2680;}
M.c.push(new RT.CallFrame(_2682,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2097,4,[M.e[M.e.length-1]],"mk-min");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2678=function(M){if(--M.cbt<0){throw _2678;}
M.c.push(new RT.CallFrame(_2680,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2096,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2676=function(M){if(--M.cbt<0){throw _2676;}
M.c.push(new RT.CallFrame(_2678,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2095,2,[M.e[M.e.length-1]],"filter-not");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2674=function(M){if(--M.cbt<0){throw _2674;}
M.c.push(new RT.CallFrame(_2676,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2094,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][69]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2672=function(M){if(--M.cbt<0){throw _2672;}
M.c.push(new RT.CallFrame(_2674,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2091,2,[M.e[M.e.length-4]],"...ng/lang/list.rkt:318:15");
M.e[M.e.length-2]=new RT.Closure(_2092,3,[M.e[M.e.length-4]],"...ng/lang/list.rkt:319:15");
M.e[M.e.length-3]=new RT.Closure(_2093,(RT.makeArityAtLeast(2)),[M.e[M.e.length-4]],"...ng/lang/list.rkt:320:15");
M.v=new RT.Closure(_2090,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(2)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append-map");
M.e.length-=3;
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2670=function(M){if(--M.cbt<0){throw _2670;}
M.c.push(new RT.CallFrame(_2672,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2089,2,[M.e[M.e.length-1]],"partition");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2668=function(M){if(--M.cbt<0){throw _2668;}
M.c.push(new RT.CallFrame(_2670,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2088,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2666=function(M){if(--M.cbt<0){throw _2666;}
M.c.push(new RT.CallFrame(_2668,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2084,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"count");
M.e[M.e.length-1][44]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2664=function(M){if(--M.cbt<0){throw _2664;}
M.c.push(new RT.CallFrame(_2666,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2083,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][67]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2662=function(M){if(--M.cbt<0){throw _2662;}
M.c.push(new RT.CallFrame(_2664,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2079,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"filter-map");
M.e[M.e.length-1][36]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2660=function(M){if(--M.cbt<0){throw _2660;}
M.c.push(new RT.CallFrame(_2662,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2078,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][66]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2658=function(M){if(--M.cbt<0){throw _2658;}
M.c.push(new RT.CallFrame(_2660,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2077,2,[M.e[M.e.length-1]],"add-between");
M.e[M.e.length-1][34]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2656=function(M){if(--M.cbt<0){throw _2656;}
M.c.push(new RT.CallFrame(_2658,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2076,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2654=function(M){if(--M.cbt<0){throw _2654;}
M.c.push(new RT.CallFrame(_2656,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2074_c;
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2652=function(M){if(--M.cbt<0){throw _2652;}
M.c.push(new RT.CallFrame(_2654,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2069,1,[M.e[M.e.length-6]],"...ng/lang/list.rkt:162:15");
M.e[M.e.length-2]=new RT.Closure(_2070,2,[M.e[M.e.length-6]],"...ng/lang/list.rkt:163:15");
M.e[M.e.length-3]=new RT.Closure(_2071,3,[M.e[M.e.length-6]],"...ng/lang/list.rkt:164:15");
M.e[M.e.length-4]=new RT.Closure(_2072,4,[M.e[M.e.length-6]],"...ng/lang/list.rkt:165:15");
M.e[M.e.length-5]=new RT.Closure(_2073,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...ng/lang/list.rkt:166:15");
M.v=new RT.Closure(_2068,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.makePair(4,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))))),[M.e[M.e.length-5],M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append*");
M.e.length-=5;
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2650=function(M){if(--M.cbt<0){throw _2650;}
M.c.push(new RT.CallFrame(_2652,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2067,2,[M.e[M.e.length-1]],"split-at-right");
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2648=function(M){if(--M.cbt<0){throw _2648;}
M.c.push(new RT.CallFrame(_2650,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2066,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2646=function(M){if(--M.cbt<0){throw _2646;}
M.c.push(new RT.CallFrame(_2648,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2064,2,[M.e[M.e.length-1]],"drop-right");
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2644=function(M){if(--M.cbt<0){throw _2644;}
M.c.push(new RT.CallFrame(_2646,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2062,2,[M.e[M.e.length-1]],"take-right");
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2642=function(M){if(--M.cbt<0){throw _2642;}
M.c.push(new RT.CallFrame(_2644,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2061,2,[M.e[M.e.length-1]],"drop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2640=function(M){if(--M.cbt<0){throw _2640;}
M.c.push(new RT.CallFrame(_2642,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2060,2,[M.e[M.e.length-1]],"split-at");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2638=function(M){if(--M.cbt<0){throw _2638;}
M.c.push(new RT.CallFrame(_2640,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2059,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2636=function(M){if(--M.cbt<0){throw _2636;}
M.c.push(new RT.CallFrame(_2638,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2058,2,[M.e[M.e.length-1]],"take");
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2634=function(M){if(--M.cbt<0){throw _2634;}
M.c.push(new RT.CallFrame(_2636,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2057,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2632=function(M){if(--M.cbt<0){throw _2632;}
M.c.push(new RT.CallFrame(_2634,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2056,3,[M.e[M.e.length-1]],"too-large");
M.e[M.e.length-1][22]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2630=function(M){if(--M.cbt<0){throw _2630;}
M.c.push(new RT.CallFrame(_2632,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2055,2,[M.e[M.e.length-1]],"drop*");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2628=function(M){if(--M.cbt<0){throw _2628;}
M.c.push(new RT.CallFrame(_2630,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2054,2,[M.e[M.e.length-1]],"make-list");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2626=function(M){if(--M.cbt<0){throw _2626;}
M.c.push(new RT.CallFrame(_2628,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2053,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2624=function(M){if(--M.cbt<0){throw _2624;}
M.c.push(new RT.CallFrame(_2626,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.NULL;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2622=function(M){if(--M.cbt<0){throw _2622;}
M.c.push(new RT.CallFrame(_2624,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2052_c;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2620=function(M){if(--M.cbt<0){throw _2620;}
M.c.push(new RT.CallFrame(_2622,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2051_c;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2618=function(M){if(--M.cbt<0){throw _2618;}
M.c.push(new RT.CallFrame(_2620,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2050,1,[M.e[M.e.length-1]],"rest");
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2616=function(M){if(--M.cbt<0){throw _2616;}
M.c.push(new RT.CallFrame(_2618,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2048,1,[M.e[M.e.length-1]],"last");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2614=function(M){if(--M.cbt<0){throw _2614;}
M.c.push(new RT.CallFrame(_2616,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2046,1,[M.e[M.e.length-1]],"last-pair");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2612=function(M){if(--M.cbt<0){throw _2612;}
M.c.push(new RT.CallFrame(_2614,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2045,1,[M.e[M.e.length-1]],"tenth");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2610=function(M){if(--M.cbt<0){throw _2610;}
M.c.push(new RT.CallFrame(_2612,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2044,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2608=function(M){if(--M.cbt<0){throw _2608;}
M.c.push(new RT.CallFrame(_2610,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2043,1,[M.e[M.e.length-1]],"ninth");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2606=function(M){if(--M.cbt<0){throw _2606;}
M.c.push(new RT.CallFrame(_2608,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2042,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2604=function(M){if(--M.cbt<0){throw _2604;}
M.c.push(new RT.CallFrame(_2606,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2041,1,[M.e[M.e.length-1]],"eighth");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2602=function(M){if(--M.cbt<0){throw _2602;}
M.c.push(new RT.CallFrame(_2604,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2040,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2600=function(M){if(--M.cbt<0){throw _2600;}
M.c.push(new RT.CallFrame(_2602,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2039,1,[M.e[M.e.length-1]],"seventh");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2598=function(M){if(--M.cbt<0){throw _2598;}
M.c.push(new RT.CallFrame(_2600,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2038,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2596=function(M){if(--M.cbt<0){throw _2596;}
M.c.push(new RT.CallFrame(_2598,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2037,1,[M.e[M.e.length-1]],"sixth");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2594=function(M){if(--M.cbt<0){throw _2594;}
M.c.push(new RT.CallFrame(_2596,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2036,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2592=function(M){if(--M.cbt<0){throw _2592;}
M.c.push(new RT.CallFrame(_2594,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2035,1,[M.e[M.e.length-1]],"fifth");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2590=function(M){if(--M.cbt<0){throw _2590;}
M.c.push(new RT.CallFrame(_2592,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2034,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2588=function(M){if(--M.cbt<0){throw _2588;}
M.c.push(new RT.CallFrame(_2590,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2033,1,[M.e[M.e.length-1]],"fourth");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2586=function(M){if(--M.cbt<0){throw _2586;}
M.c.push(new RT.CallFrame(_2588,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2032,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2584=function(M){if(--M.cbt<0){throw _2584;}
M.c.push(new RT.CallFrame(_2586,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2031,1,[M.e[M.e.length-1]],"third");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2582=function(M){if(--M.cbt<0){throw _2582;}
M.c.push(new RT.CallFrame(_2584,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2030,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2580=function(M){if(--M.cbt<0){throw _2580;}
M.c.push(new RT.CallFrame(_2582,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2029,1,[M.e[M.e.length-1]],"second");
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2578=function(M){if(--M.cbt<0){throw _2578;}
M.c.push(new RT.CallFrame(_2580,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2028,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2102=function(M){if(--M.cbt<0){throw _2102;}
};

var _2565=function(M){if(--M.cbt<0){throw _2565;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_2567)(M);}else{M.v=RT.VOID;
return(_2568)(M);}};

var _2551=function(M){if(--M.cbt<0){throw _2551;}
if(M.v===false){return(_2548)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
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

var _2544=function(M){if(--M.cbt<0){throw _2544;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_2546)(M);}else{M.v=RT.VOID;
return(_2547)(M);}};

var _2530=function(M){if(--M.cbt<0){throw _2530;}
if(M.v===false){return(_2527)(M);}else{M.v=M.e[M.e.length-7];
return(_2528)(M);}};

var _2522=function(M){if(--M.cbt<0){throw _2522;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2518=function(M){if(--M.cbt<0){throw _2518;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2514=function(M){if(--M.cbt<0){throw _2514;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2497=function(M){if(--M.cbt<0){throw _2497;}
if(M.v===false){return(_2494)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
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

var _2484=function(M){if(--M.cbt<0){throw _2484;}
if(M.v===false){return(_2481)(M);}else{M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-6]);
return(_2482)(M);}};

var _2478=function(M){if(--M.cbt<0){throw _2478;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2469=function(M){if(--M.cbt<0){throw _2469;}
if(M.v===false){return(_2464)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
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

var _2462=function(M){if(--M.cbt<0){throw _2462;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_2086,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:282:18");
M.a=1;
if(M.a===0){return(_2466)(M);}else{M.e.push(M.v);
return(_2466)(M);}};

var _2458=function(M){if(--M.cbt<0){throw _2458;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2452)(M);};

var _2456=function(M){if(--M.cbt<0){throw _2456;}
return(_2454)(M);};

var _2450=function(M){if(--M.cbt<0){throw _2450;}
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
return(_2444)(M);};

var _2448=function(M){if(--M.cbt<0){throw _2448;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2446)(M);};

var _2440=function(M){if(--M.cbt<0){throw _2440;}
if(M.v===false){return(_2435)(M);}else{M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
return(_2436)(M);}};

var _2438=function(M){if(--M.cbt<0){throw _2438;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2440,M.p));
return((M.p).label)(M);};

var _2434=function(M){if(--M.cbt<0){throw _2434;}
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
M.c.push(new RT.CallFrame(_2438,M.p));
return((M.p).label)(M);};

var _2427=function(M){if(--M.cbt<0){throw _2427;}
M.e[M.e.length-2]=M.v;
return(_2425)(M);};

var _2421=function(M){if(--M.cbt<0){throw _2421;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2423)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_2082_c;
M.a=2;
M.c.push(new RT.CallFrame(_2427,M.p));
return(_2082)(M);}};

var _2417=function(M){if(--M.cbt<0){throw _2417;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2408=function(M){if(--M.cbt<0){throw _2408;}
if(M.v===false){return(_2403)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2401=function(M){if(--M.cbt<0){throw _2401;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_2081,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:256:18");
M.a=1;
if(M.a===0){return(_2405)(M);}else{M.e.push(M.v);
return(_2405)(M);}};

var _2397=function(M){if(--M.cbt<0){throw _2397;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2391)(M);};

var _2395=function(M){if(--M.cbt<0){throw _2395;}
return(_2393)(M);};

var _2389=function(M){if(--M.cbt<0){throw _2389;}
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
return(_2383)(M);};

var _2387=function(M){if(--M.cbt<0){throw _2387;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2385)(M);};

var _2379=function(M){if(--M.cbt<0){throw _2379;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2377=function(M){if(--M.cbt<0){throw _2377;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2375=function(M){if(--M.cbt<0){throw _2375;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2377,M.p));
return((M.p).label)(M);};

var _2370=function(M){if(--M.cbt<0){throw _2370;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2372)(M);}else{M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_2375,M.p));
return((M.p).label)(M);}};

var _2368=function(M){if(--M.cbt<0){throw _2368;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2370,M.p));
return((M.p).label)(M);};

var _2364=function(M){if(--M.cbt<0){throw _2364;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2356=function(M){if(--M.cbt<0){throw _2356;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["list*"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2349=function(M){if(--M.cbt<0){throw _2349;}
M.e[M.e.length-2]=M.v;
return(_2347)(M);};

var _2322=function(M){if(--M.cbt<0){throw _2322;}
M.e[M.e.length-3]=M.v;
return(_2318)(M);};

var _2317=function(M){if(--M.cbt<0){throw _2317;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2319)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2318)(M);}};

var _2307=function(M){if(--M.cbt<0){throw _2307;}
M.e[M.e.length-2]=M.v;
return(_2305)(M);};

var _2299=function(M){if(--M.cbt<0){throw _2299;}
M.e[M.e.length-3]=M.v;
return(_2295)(M);};

var _2294=function(M){if(--M.cbt<0){throw _2294;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2296)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2295)(M);}};

var _2282=function(M){if(--M.cbt<0){throw _2282;}
M.e[M.e.length-3]=M.v;
return(_2278)(M);};

var _2277=function(M){if(--M.cbt<0){throw _2277;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2279)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2278)(M);}};

var _2268=function(M){if(--M.cbt<0){throw _2268;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2270)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2244=function(M){if(--M.cbt<0){throw _2244;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2685=function(M){if(--M.cbt<0){throw _2685;}
M.e.length-=(M.a-1);
return(_2686)(M);};

var _2683=function(M){if(--M.cbt<0){throw _2683;}
M.e.length-=(M.a-1);
return(_2684)(M);};

var _2681=function(M){if(--M.cbt<0){throw _2681;}
M.e.length-=(M.a-1);
return(_2682)(M);};

var _2679=function(M){if(--M.cbt<0){throw _2679;}
M.e.length-=(M.a-1);
return(_2680)(M);};

var _2677=function(M){if(--M.cbt<0){throw _2677;}
M.e.length-=(M.a-1);
return(_2678)(M);};

var _2675=function(M){if(--M.cbt<0){throw _2675;}
M.e.length-=(M.a-1);
return(_2676)(M);};

var _2673=function(M){if(--M.cbt<0){throw _2673;}
M.e.length-=(M.a-1);
return(_2674)(M);};

var _2671=function(M){if(--M.cbt<0){throw _2671;}
M.e.length-=(M.a-1);
return(_2672)(M);};

var _2669=function(M){if(--M.cbt<0){throw _2669;}
M.e.length-=(M.a-1);
return(_2670)(M);};

var _2667=function(M){if(--M.cbt<0){throw _2667;}
M.e.length-=(M.a-1);
return(_2668)(M);};

var _2665=function(M){if(--M.cbt<0){throw _2665;}
M.e.length-=(M.a-1);
return(_2666)(M);};

var _2663=function(M){if(--M.cbt<0){throw _2663;}
M.e.length-=(M.a-1);
return(_2664)(M);};

var _2661=function(M){if(--M.cbt<0){throw _2661;}
M.e.length-=(M.a-1);
return(_2662)(M);};

var _2659=function(M){if(--M.cbt<0){throw _2659;}
M.e.length-=(M.a-1);
return(_2660)(M);};

var _2657=function(M){if(--M.cbt<0){throw _2657;}
M.e.length-=(M.a-1);
return(_2658)(M);};

var _2655=function(M){if(--M.cbt<0){throw _2655;}
M.e.length-=(M.a-1);
return(_2656)(M);};

var _2653=function(M){if(--M.cbt<0){throw _2653;}
M.e.length-=(M.a-1);
return(_2654)(M);};

var _2651=function(M){if(--M.cbt<0){throw _2651;}
M.e.length-=(M.a-1);
return(_2652)(M);};

var _2649=function(M){if(--M.cbt<0){throw _2649;}
M.e.length-=(M.a-1);
return(_2650)(M);};

var _2647=function(M){if(--M.cbt<0){throw _2647;}
M.e.length-=(M.a-1);
return(_2648)(M);};

var _2645=function(M){if(--M.cbt<0){throw _2645;}
M.e.length-=(M.a-1);
return(_2646)(M);};

var _2643=function(M){if(--M.cbt<0){throw _2643;}
M.e.length-=(M.a-1);
return(_2644)(M);};

var _2641=function(M){if(--M.cbt<0){throw _2641;}
M.e.length-=(M.a-1);
return(_2642)(M);};

var _2639=function(M){if(--M.cbt<0){throw _2639;}
M.e.length-=(M.a-1);
return(_2640)(M);};

var _2637=function(M){if(--M.cbt<0){throw _2637;}
M.e.length-=(M.a-1);
return(_2638)(M);};

var _2635=function(M){if(--M.cbt<0){throw _2635;}
M.e.length-=(M.a-1);
return(_2636)(M);};

var _2633=function(M){if(--M.cbt<0){throw _2633;}
M.e.length-=(M.a-1);
return(_2634)(M);};

var _2631=function(M){if(--M.cbt<0){throw _2631;}
M.e.length-=(M.a-1);
return(_2632)(M);};

var _2629=function(M){if(--M.cbt<0){throw _2629;}
M.e.length-=(M.a-1);
return(_2630)(M);};

var _2627=function(M){if(--M.cbt<0){throw _2627;}
M.e.length-=(M.a-1);
return(_2628)(M);};

var _2625=function(M){if(--M.cbt<0){throw _2625;}
M.e.length-=(M.a-1);
return(_2626)(M);};

var _2623=function(M){if(--M.cbt<0){throw _2623;}
M.e.length-=(M.a-1);
return(_2624)(M);};

var _2621=function(M){if(--M.cbt<0){throw _2621;}
M.e.length-=(M.a-1);
return(_2622)(M);};

var _2619=function(M){if(--M.cbt<0){throw _2619;}
M.e.length-=(M.a-1);
return(_2620)(M);};

var _2617=function(M){if(--M.cbt<0){throw _2617;}
M.e.length-=(M.a-1);
return(_2618)(M);};

var _2615=function(M){if(--M.cbt<0){throw _2615;}
M.e.length-=(M.a-1);
return(_2616)(M);};

var _2613=function(M){if(--M.cbt<0){throw _2613;}
M.e.length-=(M.a-1);
return(_2614)(M);};

var _2611=function(M){if(--M.cbt<0){throw _2611;}
M.e.length-=(M.a-1);
return(_2612)(M);};

var _2609=function(M){if(--M.cbt<0){throw _2609;}
M.e.length-=(M.a-1);
return(_2610)(M);};

var _2607=function(M){if(--M.cbt<0){throw _2607;}
M.e.length-=(M.a-1);
return(_2608)(M);};

var _2605=function(M){if(--M.cbt<0){throw _2605;}
M.e.length-=(M.a-1);
return(_2606)(M);};

var _2603=function(M){if(--M.cbt<0){throw _2603;}
M.e.length-=(M.a-1);
return(_2604)(M);};

var _2601=function(M){if(--M.cbt<0){throw _2601;}
M.e.length-=(M.a-1);
return(_2602)(M);};

var _2599=function(M){if(--M.cbt<0){throw _2599;}
M.e.length-=(M.a-1);
return(_2600)(M);};

var _2597=function(M){if(--M.cbt<0){throw _2597;}
M.e.length-=(M.a-1);
return(_2598)(M);};

var _2595=function(M){if(--M.cbt<0){throw _2595;}
M.e.length-=(M.a-1);
return(_2596)(M);};

var _2593=function(M){if(--M.cbt<0){throw _2593;}
M.e.length-=(M.a-1);
return(_2594)(M);};

var _2591=function(M){if(--M.cbt<0){throw _2591;}
M.e.length-=(M.a-1);
return(_2592)(M);};

var _2589=function(M){if(--M.cbt<0){throw _2589;}
M.e.length-=(M.a-1);
return(_2590)(M);};

var _2587=function(M){if(--M.cbt<0){throw _2587;}
M.e.length-=(M.a-1);
return(_2588)(M);};

var _2585=function(M){if(--M.cbt<0){throw _2585;}
M.e.length-=(M.a-1);
return(_2586)(M);};

var _2583=function(M){if(--M.cbt<0){throw _2583;}
M.e.length-=(M.a-1);
return(_2584)(M);};

var _2581=function(M){if(--M.cbt<0){throw _2581;}
M.e.length-=(M.a-1);
return(_2582)(M);};

var _2579=function(M){if(--M.cbt<0){throw _2579;}
M.e.length-=(M.a-1);
return(_2580)(M);};

var _2577=function(M){if(--M.cbt<0){throw _2577;}
M.e.length-=(M.a-1);
return(_2578)(M);};

var _2575=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2576=function(M){M.modules["whalesong/lang/list.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("first")||M.primitives["first"],M.primitives["raise-type-error"],M.params.currentNamespace.get("second")||M.primitives["second"],M.primitives["format"],M.params.currentNamespace.get("third")||M.primitives["third"],M.params.currentNamespace.get("fourth")||M.primitives["fourth"],M.params.currentNamespace.get("fifth")||M.primitives["fifth"],M.params.currentNamespace.get("sixth")||M.primitives["sixth"],M.params.currentNamespace.get("seventh")||M.primitives["seventh"],M.params.currentNamespace.get("eighth")||M.primitives["eighth"],M.params.currentNamespace.get("ninth")||M.primitives["ninth"],M.params.currentNamespace.get("tenth")||M.primitives["tenth"],M.params.currentNamespace.get("last-pair")||M.primitives["last-pair"],M.params.currentNamespace.get("last")||M.primitives["last"],M.params.currentNamespace.get("rest")||M.primitives["rest"],M.params.currentNamespace.get("cons?")||M.primitives["cons?"],M.params.currentNamespace.get("empty?")||M.primitives["empty?"],M.params.currentNamespace.get("empty")||M.primitives["empty"],M.params.currentNamespace.get("make-list")||M.primitives["make-list"],M.primitives["exact-nonnegative-integer?"],M.primitives["zero?"],M.params.currentNamespace.get("drop*")||M.primitives["drop*"],M.params.currentNamespace.get("too-large")||M.primitives["too-large"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("take")||M.primitives["take"],M.params.currentNamespace.get("split-at")||M.primitives["split-at"],M.primitives["reverse"],M.params.currentNamespace.get("drop")||M.primitives["drop"],M.params.currentNamespace.get("take-right")||M.primitives["take-right"],M.params.currentNamespace.get("drop-right")||M.primitives["drop-right"],M.params.currentNamespace.get("split-at-right")||M.primitives["split-at-right"],M.params.currentNamespace.get("append*")||M.primitives["append*"],M.primitives["append"],M.params.currentNamespace.get("flatten")||M.primitives["flatten"],M.params.currentNamespace.get("add-between")||M.primitives["add-between"],M.primitives["list*"],M.params.currentNamespace.get("filter-map")||M.primitives["filter-map"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["length"],M.primitives["andmap"],M.primitives["ormap"],M.primitives["map"],M.primitives["error"],M.params.currentNamespace.get("count")||M.primitives["count"],M.params.currentNamespace.get("partition")||M.primitives["partition"],M.params.currentNamespace.get("append-map")||M.primitives["append-map"],M.params.currentNamespace.get("filter-not")||M.primitives["filter-not"],M.params.currentNamespace.get("mk-min")||M.primitives["mk-min"],M.primitives["real?"],M.params.currentNamespace.get("argmin")||M.primitives["argmin"],M.params.currentNamespace.get("argmax")||M.primitives["argmax"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["first","raise-type-error","second","format","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","last-pair","last","rest","cons?","empty?","empty","make-list","exact-nonnegative-integer?","zero?","drop*","too-large","raise-mismatch-error","take","split-at","reverse","drop","take-right","drop-right","split-at-right","append*","append","flatten","add-between","list*","filter-map","procedure?","procedure-arity-includes?","length","andmap","ormap","map","error","count","partition","append-map","filter-not","mk-min","real?","argmin","argmax",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2578,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2027,1,[M.e[M.e.length-1]],"first");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2101=function(M){if(--M.cbt<0){throw _2101;}
M.e.length-=(M.a-1);
return(_2102)(M);};

var _2099=function(M){if(--M.cbt<0){throw _2099;}

//"lambda body for #(struct:LamPositionalName argmax whalesong/lang/list.rkt 367 0 13235 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives[">"];
M.e[M.e.length-2]=sym29537;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2098=function(M){if(--M.cbt<0){throw _2098;}

//"lambda body for #(struct:LamPositionalName argmin whalesong/lang/list.rkt 366 0 13188 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives["<"];
M.e[M.e.length-2]=sym29538;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2568=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
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

var _2567=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-11];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2568)(M);};


var _2561=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2565,M.p));
return((M.p).label)(M);};

var _2560=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2561)(M);};

var _2563=function(M){if(M.v===false){return(_2560)(M);}else{M.v=RT.VOID;
return(_2561)(M);}};

var _2562=function(M){M.v=false;
return(_2563)(M);};

var _2557=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_2562)(M);}else{M.v=RT.isPair(M.e[M.e.length-5]);
return(_2563)(M);}};

var _2556=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2557)(M);};

var _2559=function(M){if(M.v===false){return(_2556)(M);}else{M.v=RT.VOID;
return(_2557)(M);}};

var _2558=function(M){M.v=false;
return(_2559)(M);};

var _2097=function(M){if(--M.cbt<0){throw _2097;}

//"lambda body for #(struct:LamPositionalName mk-min whalesong/lang/list.rkt 341 0 12292 894)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2558)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2559)(M);}};

var _2548=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
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


var _2547=function(M){M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2551,M.p));
return((M.p).label)(M);};

var _2546=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2547)(M);};


var _2541=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2544,M.p));
return((M.p).label)(M);};

var _2096=function(M){if(--M.cbt<0){throw _2096;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 351 4 12715 469)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_2541)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2538=function(M){M.e.push(void(0),void(0),void(0));
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

var _2537=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29539;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2538)(M);};

var _2534=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2537)(M);}else{M.v=RT.VOID;
return(_2538)(M);}};

var _2533=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29539;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2534)(M);};

var _2536=function(M){if(M.v===false){return(_2533)(M);}else{M.v=RT.VOID;
return(_2534)(M);}};

var _2535=function(M){M.v=false;
return(_2536)(M);};

var _2095=function(M){if(--M.cbt<0){throw _2095;}

//"lambda body for #(struct:LamPositionalName filter-not whalesong/lang/list.rkt 324 0 11634 500)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2535)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2536)(M);}};

var _2528=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2527=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2528)(M);};


var _2525=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_2530,M.p));
return((M.p).label)(M);};

var _2094=function(M){if(--M.cbt<0){throw _2094;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 332 2 11989 144)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2525)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};




var _2093=function(M){if(--M.cbt<0){throw _2093;}

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
M.c.push(new RT.CallFrame(_2522,M.p));
return((M.p).label)(M);};

var _2092=function(M){if(--M.cbt<0){throw _2092;}

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
M.c.push(new RT.CallFrame(_2518,M.p));
return((M.p).label)(M);};

var _2511=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2091)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2093)(M);}};

var _2510=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2511)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2092)(M);}};

var _2090=function(M){if(--M.cbt<0){throw _2090;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2510)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2091)(M);}};

var _2507=function(M){M.e.push(void(0),void(0),void(0),void(0));
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

var _2506=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29540;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2507)(M);};

var _2503=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2506)(M);}else{M.v=RT.VOID;
return(_2507)(M);}};

var _2502=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29540;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2503)(M);};

var _2505=function(M){if(M.v===false){return(_2502)(M);}else{M.v=RT.VOID;
return(_2503)(M);}};

var _2504=function(M){M.v=false;
return(_2505)(M);};

var _2089=function(M){if(--M.cbt<0){throw _2089;}

//"lambda body for #(struct:LamPositionalName partition whalesong/lang/list.rkt 307 0 10913 435)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2504)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2505)(M);}};

var _2494=function(M){M.e.push(void(0),void(0),void(0),void(0));
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


var _2488=function(M){M.e.push(void(0));
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
M.c.push(new RT.CallFrame(_2497,M.p));
return((M.p).label)(M);};

var _2088=function(M){if(--M.cbt<0){throw _2088;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 311 2 11151 196)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2488)(M);}else{M.v=M.e[M.e.length-3];
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

var _2482=function(M){M.p=_2087_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2087)(M);};

var _2481=function(M){M.e[M.e.length-3]=M.e[M.e.length-6];
return(_2482)(M);};


var _2479=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_2484,M.p));
return((M.p).label)(M);};


var _2475=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2087=function(M){if(--M.cbt<0){throw _2087;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 289 4 10141 90)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2479)(M);}else{M.v=M.e[M.e.length-3];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2464=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym29541;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2467=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2469,M.p));
return((M.p).label)(M);};

var _2466=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2467)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2467)(M);}};

var _2086=function(M){if(--M.cbt<0){throw _2086;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:282:18 whalesong/lang/list.rkt 282 18 9859 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2478,M.p));
return((M.p).label)(M);};


var _2459=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=0;
M.p=_2087_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2087)(M);};


var _2085=function(M){if(--M.cbt<0){throw _2085;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:279:12 whalesong/lang/list.rkt 279 12 9744 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2475)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2452=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2459)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2462,M.p));
return((M.p).label)(M);}};

var _2451=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29541;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_2085_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2458,M.p));
return((M.p).label)(M);};

var _2454=function(M){if(M.v===false){return(_2451)(M);}else{M.v=RT.VOID;
return(_2452)(M);}};


var _2453=function(M){M.v=false;
return(_2454)(M);};


var _2444=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2453)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2456,M.p));
return((M.p).label)(M);}};

var _2443=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29541;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2450,M.p));
return((M.p).label)(M);};

var _2446=function(M){if(M.v===false){return(_2443)(M);}else{M.v=RT.VOID;
return(_2444)(M);}};


var _2445=function(M){M.v=false;
return(_2446)(M);};

var _2084=function(M){if(--M.cbt<0){throw _2084;}

//"lambda body for #(struct:LamPositionalName count whalesong/lang/list.rkt 272 0 9446 787)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2445)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2448,M.p));
return((M.p).label)(M);}};

var _2436=function(M){M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2435=function(M){M.v=M.e[M.e.length-9];
return(_2436)(M);};




var _2431=function(M){M.e.push(void(0),void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_2434,M.p));
return((M.p).label)(M);};

var _2083=function(M){if(--M.cbt<0){throw _2083;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 283 8 9903 176)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2431)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2425=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2423=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_2082_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2082)(M);};


var _2418=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2421,M.p));
return((M.p).label)(M);};


var _2414=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2082=function(M){if(--M.cbt<0){throw _2082;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 265 4 9222 140)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2418)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2403=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym29542;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2406=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2408,M.p));
return((M.p).label)(M);};

var _2405=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2406)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2406)(M);}};

var _2081=function(M){if(--M.cbt<0){throw _2081;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:256:18 whalesong/lang/list.rkt 256 18 8870 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2417,M.p));
return((M.p).label)(M);};


var _2398=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_2082_c;
M.a=2;
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return(_2082)(M);};


var _2080=function(M){if(--M.cbt<0){throw _2080;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:253:12 whalesong/lang/list.rkt 253 12 8755 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2414)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2391=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2398)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2401,M.p));
return((M.p).label)(M);}};

var _2390=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29542;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_2080_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2397,M.p));
return((M.p).label)(M);};

var _2393=function(M){if(M.v===false){return(_2390)(M);}else{M.v=RT.VOID;
return(_2391)(M);}};


var _2392=function(M){M.v=false;
return(_2393)(M);};


var _2383=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2392)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2395,M.p));
return((M.p).label)(M);}};

var _2382=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29542;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2389,M.p));
return((M.p).label)(M);};

var _2385=function(M){if(M.v===false){return(_2382)(M);}else{M.v=RT.VOID;
return(_2383)(M);}};


var _2384=function(M){M.v=false;
return(_2385)(M);};

var _2079=function(M){if(--M.cbt<0){throw _2079;}

//"lambda body for #(struct:LamPositionalName filter-map whalesong/lang/list.rkt 246 0 8442 922)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2384)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2387,M.p));
return((M.p).label)(M);}};




var _2372=function(M){M.v=M.e[M.e.length-1];
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
M.c.push(new RT.CallFrame(_2379,M.p));
return((M.p).label)(M);};



var _2365=function(M){M.e.push(void(0));
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
M.c.push(new RT.CallFrame(_2368,M.p));
return((M.p).label)(M);};

var _2078=function(M){if(--M.cbt<0){throw _2078;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 257 8 8914 241)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2365)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2361=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_2364,M.p));
return((M.p).label)(M);};

var _2359=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2361)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2357=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29543;
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

var _2077=function(M){if(--M.cbt<0){throw _2077;}

//"lambda body for #(struct:LamPositionalName add-between whalesong/lang/list.rkt 176 0 5304 349)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2357)(M);}else{M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2359)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};


var _2353=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_2356,M.p));
return((M.p).label)(M);};

var _2076=function(M){if(--M.cbt<0){throw _2076;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 181 20 5502 147)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2353)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2347=function(M){M.p=_2075_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2075)(M);};


var _2345=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2343=function(M){M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2345)(M);}else{M.e.push(void(0),void(0));
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
M.p=_2075_c;
M.a=2;
M.c.push(new RT.CallFrame(_2349,M.p));
return(_2075)(M);}};

var _2075=function(M){if(--M.cbt<0){throw _2075;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 169 2 5055 168)"

M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_2343)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2074=function(M){if(--M.cbt<0){throw _2074;}

//"lambda body for #(struct:LamPositionalName flatten whalesong/lang/list.rkt 168 0 5025 199)"

M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=RT.NULL;
M.p=_2075_c;
M.a=2;
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return(_2075)(M);};

var _2073=function(M){if(--M.cbt<0){throw _2073;}

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

var _2072=function(M){if(--M.cbt<0){throw _2072;}

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

var _2328=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 5]).racketArity,M.a)){return(_2069)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 5];
return(_2073)(M);}};

var _2071=function(M){if(--M.cbt<0){throw _2071;}

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

var _2327=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_2328)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_2072)(M);}};

var _2070=function(M){if(--M.cbt<0){throw _2070;}

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

var _2326=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2327)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2071)(M);}};

var _2325=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2326)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2070)(M);}};

var _2068=function(M){if(--M.cbt<0){throw _2068;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2325)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2069)(M);}};


var _2319=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][22];
M.e[M.e.length-1]=sym29544;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2322,M.p));
return((M.p).label)(M);};


var _2315=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_2317,M.p));
return((M.p).label)(M);};

var _2314=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29544;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2315)(M);};

var _2067=function(M){if(--M.cbt<0){throw _2067;}

//"lambda body for #(struct:LamPositionalName split-at-right whalesong/lang/list.rkt 150 0 4278 453)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2314)(M);}else{M.v=RT.VOID;
return(_2315)(M);}};

var _2308=function(M){M.v=M.e[M.e.length-3];
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

var _2066=function(M){if(--M.cbt<0){throw _2066;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 153 2 4424 306)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2308)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2305=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2303=function(M){M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2065=function(M){while(true){if(--M.cbt<0){throw _2065;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 143 2 4028 247)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2303)(M);}else{M.e.push(void(0),void(0));
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
M.p=_2065_c;
M.a=2;
M.c.push(new RT.CallFrame(_2307,M.p));
}}};


var _2296=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym29545;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2299,M.p));
return((M.p).label)(M);};


var _2292=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2294,M.p));
return((M.p).label)(M);};

var _2291=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29545;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2292)(M);};

var _2064=function(M){if(--M.cbt<0){throw _2064;}

//"lambda body for #(struct:LamPositionalName drop-right whalesong/lang/list.rkt 140 0 3890 386)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2291)(M);}else{M.v=RT.VOID;
return(_2292)(M);}};

var _2286=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2063=function(M){if(--M.cbt<0){throw _2063;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 133 2 3657 230)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2286)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2063_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2063)(M);}};


var _2279=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym29546;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2282,M.p));
return((M.p).label)(M);};


var _2275=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2277,M.p));
return((M.p).label)(M);};

var _2274=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29546;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2275)(M);};

var _2062=function(M){if(--M.cbt<0){throw _2062;}

//"lambda body for #(struct:LamPositionalName take-right whalesong/lang/list.rkt 130 0 3512 376)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2274)(M);}else{M.v=RT.VOID;
return(_2275)(M);}};

var _2270=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][22];
M.e[M.e.length-1]=sym29547;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2266=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][21];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2268,M.p));
return((M.p).label)(M);};

var _2265=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29547;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2266)(M);};

var _2061=function(M){if(--M.cbt<0){throw _2061;}

//"lambda body for #(struct:LamPositionalName drop whalesong/lang/list.rkt 122 0 3176 253)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2265)(M);}else{M.v=RT.VOID;
return(_2266)(M);}};

var _2262=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
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

var _2261=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29548;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2262)(M);};

var _2060=function(M){if(--M.cbt<0){throw _2060;}

//"lambda body for #(struct:LamPositionalName split-at whalesong/lang/list.rkt 114 0 2812 362)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2261)(M);}else{M.v=RT.VOID;
return(_2262)(M);}};

var _2255=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym29548;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2251=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2255)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0));
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

var _2059=function(M){if(--M.cbt<0){throw _2059;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 117 2 2958 215)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2251)(M);}else{M.v=M.e[M.e.length-5];
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

var _2248=function(M){M.e.push(void(0),void(0),void(0),void(0));
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

var _2247=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29549;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2248)(M);};

var _2058=function(M){if(--M.cbt<0){throw _2058;}

//"lambda body for #(struct:LamPositionalName take whalesong/lang/list.rkt 106 0 2498 312)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2247)(M);}else{M.v=RT.VOID;
return(_2248)(M);}};


var _2241=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym29549;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2239=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2241)(M);}else{M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_2244,M.p));
return((M.p).label)(M);}};

var _2057=function(M){if(--M.cbt<0){throw _2057;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 109 2 2636 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2239)(M);}else{M.v=RT.NULL;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2238=function(M){M.a=3;
M.v=M.primitives["format"]._i(M);
M.e.length-=3;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2237=function(M){M.e[M.e.length-3]=" (not a proper list)";
return(_2238)(M);};

var _2056=function(M){if(--M.cbt<0){throw _2056;}

//"lambda body for #(struct:LamPositionalName too-large whalesong/lang/list.rkt 99 0 2322 174)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="index ~e too large for list~a: ";
M.e[M.e.length-2]=M.e[M.e.length-10];
M.v=RT.isList(M.e[M.e.length-9]);
if(M.v===false){return(_2237)(M);}else{M.e[M.e.length-3]="";
return(_2238)(M);}};

var _2233=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2231=function(M){M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2233)(M);}else{M.e.push(void(0),void(0));
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

var _2055=function(M){if(--M.cbt<0){throw _2055;}

//"lambda body for #(struct:LamPositionalName drop* whalesong/lang/list.rkt 97 0 2175 146)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2231)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2228=function(M){M.e.push(void(0),void(0),void(0));
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

var _2227=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29550;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2228)(M);};

var _2054=function(M){if(--M.cbt<0){throw _2054;}

//"lambda body for #(struct:LamPositionalName make-list whalesong/lang/list.rkt 90 0 1943 208)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2227)(M);}else{M.v=RT.VOID;
return(_2228)(M);}};

var _2223=function(M){M.e.push(void(0),void(0),void(0));
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

var _2053=function(M){if(--M.cbt<0){throw _2053;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 93 2 2076 74)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2223)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2052=function(M){if(--M.cbt<0){throw _2052;}

//"lambda body for #(struct:LamPositionalName empty? whalesong/lang/list.rkt 87 15 1899 22)"

M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2051=function(M){if(--M.cbt<0){throw _2051;}

//"lambda body for #(struct:LamPositionalName cons? whalesong/lang/list.rkt 86 14 1860 22)"

M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2219=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29551;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2222=function(M){if(M.v===false){return(_2219)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2221=function(M){M.v=false;
return(_2222)(M);};

var _2050=function(M){if(--M.cbt<0){throw _2050;}

//"lambda body for #(struct:LamPositionalName rest whalesong/lang/list.rkt 81 0 1734 110)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2221)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2222)(M);}};

var _2214=function(M){M.v=RT.checkedCar(M, M.e[M.e.length-1]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2049=function(M){if(--M.cbt<0){throw _2049;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 75 4 1590 92)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2214)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2049_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2049)(M);}};

var _2207=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29552;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2210=function(M){if(M.v===false){return(_2207)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2049_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2049)(M);}};

var _2209=function(M){M.v=false;
return(_2210)(M);};

var _2048=function(M){if(--M.cbt<0){throw _2048;}

//"lambda body for #(struct:LamPositionalName last whalesong/lang/list.rkt 73 0 1537 195)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2209)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2210)(M);}};

var _2202=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2047=function(M){if(--M.cbt<0){throw _2047;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 67 4 1404 86)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2202)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2047_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2047)(M);}};

var _2197=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29553;
M.e[M.e.length-2]="pair";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2046=function(M){if(--M.cbt<0){throw _2046;}

//"lambda body for #(struct:LamPositionalName last-pair whalesong/lang/list.rkt 65 0 1362 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2197)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_2047_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_2047)(M);}};

var _2193=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29554;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2045=function(M){if(--M.cbt<0){throw _2045;}

//"lambda body for #(struct:LamPositionalName tenth whalesong/lang/list.rkt 63 0 1333 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2193)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2189=function(M){M.e.push(void(0),void(0),void(0));
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

var _2187=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29554;
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

var _2044=function(M){if(--M.cbt<0){throw _2044;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2187)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2189)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2183=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29555;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2043=function(M){if(--M.cbt<0){throw _2043;}

//"lambda body for #(struct:LamPositionalName ninth whalesong/lang/list.rkt 62 0 1306 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2183)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2179=function(M){M.e.push(void(0),void(0),void(0));
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

var _2177=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29555;
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

var _2042=function(M){if(--M.cbt<0){throw _2042;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2177)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2179)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2173=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29556;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2041=function(M){if(--M.cbt<0){throw _2041;}

//"lambda body for #(struct:LamPositionalName eighth whalesong/lang/list.rkt 61 0 1279 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2173)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2169=function(M){M.e.push(void(0),void(0),void(0));
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

var _2167=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29556;
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

var _2040=function(M){if(--M.cbt<0){throw _2040;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2167)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2169)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2163=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29557;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2039=function(M){if(--M.cbt<0){throw _2039;}

//"lambda body for #(struct:LamPositionalName seventh whalesong/lang/list.rkt 60 0 1252 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2163)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2159=function(M){M.e.push(void(0),void(0),void(0));
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

var _2157=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29557;
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

var _2038=function(M){if(--M.cbt<0){throw _2038;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2157)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2159)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2153=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29558;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2037=function(M){if(--M.cbt<0){throw _2037;}

//"lambda body for #(struct:LamPositionalName sixth whalesong/lang/list.rkt 59 0 1225 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2153)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2149=function(M){M.e.push(void(0),void(0),void(0));
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

var _2147=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29558;
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

var _2036=function(M){if(--M.cbt<0){throw _2036;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2147)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2149)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2143=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29559;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2035=function(M){if(--M.cbt<0){throw _2035;}

//"lambda body for #(struct:LamPositionalName fifth whalesong/lang/list.rkt 58 0 1198 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2143)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2139=function(M){M.e.push(void(0),void(0),void(0));
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

var _2137=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29559;
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

var _2034=function(M){if(--M.cbt<0){throw _2034;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2137)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2139)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2133=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29560;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2033=function(M){if(--M.cbt<0){throw _2033;}

//"lambda body for #(struct:LamPositionalName fourth whalesong/lang/list.rkt 57 0 1171 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2133)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2129=function(M){M.e.push(void(0),void(0),void(0));
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

var _2127=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29560;
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

var _2032=function(M){if(--M.cbt<0){throw _2032;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2127)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2129)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2123=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29561;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2031=function(M){if(--M.cbt<0){throw _2031;}

//"lambda body for #(struct:LamPositionalName third whalesong/lang/list.rkt 56 0 1144 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2123)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2119=function(M){M.e.push(void(0),void(0),void(0));
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

var _2117=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29561;
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

var _2030=function(M){if(--M.cbt<0){throw _2030;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2117)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2119)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2113=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29562;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2029=function(M){if(--M.cbt<0){throw _2029;}

//"lambda body for #(struct:LamPositionalName second whalesong/lang/list.rkt 55 0 1117 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2113)(M);}else{M.e.push(void(0),void(0),void(0));
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

var _2109=function(M){M.e.push(void(0),void(0),void(0));
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

var _2107=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29562;
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

var _2028=function(M){if(--M.cbt<0){throw _2028;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2107)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2109)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2103=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29563;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2106=function(M){if(M.v===false){return(_2103)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2105=function(M){M.v=false;
return(_2106)(M);};

var _2027=function(M){if(--M.cbt<0){throw _2027;}

//"lambda body for #(struct:LamPositionalName first whalesong/lang/list.rkt 39 0 613 112)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2105)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2106)(M);}};

var _2100=function(M){M.c.push(new RT.CallFrame(_2102,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/list.rkt"]=function(){return new RT.ModuleRecord("list",_2576);}
return(_2575)(M);};

var _2091=function(M){if(--M.cbt<0){throw _2091;}

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
M.c.push(new RT.CallFrame(_2514,M.p));
return((M.p).label)(M);};

var _2069=function(M){if(--M.cbt<0){throw _2069;}

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

var _2318=function(M){M.e.pop();
M.v=RT.NULL;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2295=function(M){M.e.pop();
M.p=_2065_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2065)(M);};

var _2278=function(M){M.e.pop();
M.p=_2063_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_2063)(M);};

_2578.mvr=_2577;
_2580.mvr=_2579;
_2582.mvr=_2581;
_2584.mvr=_2583;
_2586.mvr=_2585;
_2588.mvr=_2587;
_2590.mvr=_2589;
_2592.mvr=_2591;
_2594.mvr=_2593;
_2596.mvr=_2595;
_2598.mvr=_2597;
_2600.mvr=_2599;
_2602.mvr=_2601;
_2604.mvr=_2603;
_2606.mvr=_2605;
_2608.mvr=_2607;
_2610.mvr=_2609;
_2612.mvr=_2611;
_2614.mvr=_2613;
_2616.mvr=_2615;
_2618.mvr=_2617;
_2620.mvr=_2619;
_2622.mvr=_2621;
_2624.mvr=_2623;
_2626.mvr=_2625;
_2628.mvr=_2627;
_2630.mvr=_2629;
_2632.mvr=_2631;
_2634.mvr=_2633;
_2636.mvr=_2635;
_2638.mvr=_2637;
_2640.mvr=_2639;
_2642.mvr=_2641;
_2644.mvr=_2643;
_2646.mvr=_2645;
_2648.mvr=_2647;
_2650.mvr=_2649;
_2652.mvr=_2651;
_2654.mvr=_2653;
_2656.mvr=_2655;
_2658.mvr=_2657;
_2660.mvr=_2659;
_2662.mvr=_2661;
_2664.mvr=_2663;
_2666.mvr=_2665;
_2668.mvr=_2667;
_2670.mvr=_2669;
_2672.mvr=_2671;
_2674.mvr=_2673;
_2676.mvr=_2675;
_2678.mvr=_2677;
_2680.mvr=_2679;
_2682.mvr=_2681;
_2684.mvr=_2683;
_2686.mvr=_2685;
_2102.mvr=_2101;
var sym29556=RT.makeSymbol("eighth");
var sym29555=RT.makeSymbol("ninth");
var sym29554=RT.makeSymbol("tenth");
var sym29553=RT.makeSymbol("last-pair");
var sym29551=RT.makeSymbol("rest");
var sym29550=RT.makeSymbol("make-list");
var sym29549=RT.makeSymbol("take");
var sym29547=RT.makeSymbol("drop");
var sym29548=RT.makeSymbol("split-at");
var sym29546=RT.makeSymbol("take-right");
var sym29545=RT.makeSymbol("drop-right");
var sym29544=RT.makeSymbol("split-at-right");
var sym29563=RT.makeSymbol("first");
var sym29543=RT.makeSymbol("add-between");
var sym29542=RT.makeSymbol("filter-map");
var sym29540=RT.makeSymbol("partition");
var sym29539=RT.makeSymbol("filter-not");
var sym29541=RT.makeSymbol("count");
var sym29538=RT.makeSymbol("argmin");
var sym29537=RT.makeSymbol("argmax");
var sym29552=RT.makeSymbol("last");
var sym29562=RT.makeSymbol("second");
var sym29561=RT.makeSymbol("third");
var sym29560=RT.makeSymbol("fourth");
var sym29559=RT.makeSymbol("fifth");
var sym29558=RT.makeSymbol("sixth");
var sym29557=RT.makeSymbol("seventh");var _2080_c=new RT.Closure(_2080,1,void(0),"...ng/lang/list.rkt:253:12");
var _2065_c=new RT.Closure(_2065,2,void(0),"loop");
var _2049_c=new RT.Closure(_2049,2,void(0),"loop");
var _2075_c=new RT.Closure(_2075,2,void(0),"loop");
var _2074_c=new RT.Closure(_2074,1,void(0),"flatten");
var _2082_c=new RT.Closure(_2082,2,void(0),"loop");
var _2063_c=new RT.Closure(_2063,2,void(0),"loop");
var _2085_c=new RT.Closure(_2085,1,void(0),"...ng/lang/list.rkt:279:12");
var _2052_c=new RT.Closure(_2052,1,void(0),"empty?");
var _2051_c=new RT.Closure(_2051,1,void(0),"cons?");
var _2047_c=new RT.Closure(_2047,2,void(0),"loop");
var _2087_c=new RT.Closure(_2087,3,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2687(M); }))(plt.runtime.currentMachine,
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
var _2710=function(M){if(--M.cbt<0){throw _2710;}

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

var _2934=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym29641;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2928=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym29641;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2920=function(M){M.e.push(void(0),void(0),void(0),void(0));
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



var _2910=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2915,M.p));
return((M.p).label)(M);};


var _2908=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym29641;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2903=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_2928)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2896=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2901,M.p));
return((M.p).label)(M);};


var _2894=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym29641;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2889=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2934)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2709=function(M){if(--M.cbt<0){throw _2709;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 180 13 5663 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2889)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2892,M.p));
return((M.p).label)(M);}};

var _2708=function(M){if(--M.cbt<0){throw _2708;}

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
return(_2709)(M);};

var _2707=function(M){if(--M.cbt<0){throw _2707;}

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

var _2884=function(M){M.e.push(void(0),void(0),void(0));
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

var _2883=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29642;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2884)(M);};

var _2886=function(M){if(M.v===false){return(_2883)(M);}else{M.v=RT.VOID;
return(_2884)(M);}};

var _2885=function(M){M.v=false;
return(_2886)(M);};

var _2706=function(M){if(--M.cbt<0){throw _2706;}

//"lambda body for #(struct:LamPositionalName findf whalesong/lang/private/list.rkt 123 0 3608 445)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2885)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2886)(M);}};

var _2877=function(M){M.e.push(void(0),void(0),void(0));
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


var _2874=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29642;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2872=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2874)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2880,M.p));
return((M.p).label)(M);}};

var _2705=function(M){if(--M.cbt<0){throw _2705;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 126 2 3751 301)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2872)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2867=function(M){M.e.push(void(0),void(0),void(0));
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

var _2866=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29643;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2867)(M);};

var _2869=function(M){if(M.v===false){return(_2866)(M);}else{M.v=RT.VOID;
return(_2867)(M);}};

var _2868=function(M){M.v=false;
return(_2869)(M);};

var _2704=function(M){if(--M.cbt<0){throw _2704;}

//"lambda body for #(struct:LamPositionalName memf whalesong/lang/private/list.rkt 111 0 3225 381)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2868)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2869)(M);}};

var _2860=function(M){M.e.push(void(0),void(0),void(0));
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


var _2858=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29643;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2856=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2858)(M);}else{M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2863,M.p));
return((M.p).label)(M);}};

var _2703=function(M){if(--M.cbt<0){throw _2703;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 114 2 3366 239)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2856)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2702=function(M){if(--M.cbt<0){throw _2702;}

//"lambda body for #(struct:LamPositionalName remv* whalesong/lang/private/list.rkt 108 0 3172 51)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym29644;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2701=function(M){if(--M.cbt<0){throw _2701;}

//"lambda body for #(struct:LamPositionalName remq* whalesong/lang/private/list.rkt 105 0 3120 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym29645;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2847=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym29646;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2846=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29646;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2847)(M);};

var _2849=function(M){if(M.v===false){return(_2846)(M);}else{M.v=RT.VOID;
return(_2847)(M);}};

var _2848=function(M){M.v=false;
return(_2849)(M);};

var _2700=function(M){if(--M.cbt<0){throw _2700;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:99:4 whalesong/lang/private/list.rkt 99 4 2905 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2848)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2849)(M);}};

var _2842=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2699)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2700)(M);}};

var _2698=function(M){if(--M.cbt<0){throw _2698;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2842)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2699)(M);}};

var _2832=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-5]=M.v;
M.p=_2697_c;
M.a=5;
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return(_2697)(M);};


var _2829=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2827=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2835,M.p));
return((M.p).label)(M);};

var _2697=function(M){if(--M.cbt<0){throw _2697;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 90 13 2602 216)"

M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_2827)(M);}else{M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_2696_c;
M.a=3;
M.c.push(new RT.CallFrame(_2831,M.p));
return(_2696)(M);}};

var _2821=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.p=_2697_c;
M.a=5;
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return(_2697)(M);};

var _2696=function(M){if(--M.cbt<0){throw _2696;}

//"lambda body for #(struct:LamPositionalName rloop whalesong/lang/private/list.rkt 86 2 2502 320)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2821)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2817=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2696_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_2696)(M);};

var _2816=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2817)(M);};

var _2815=function(M){M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2816)(M);}else{M.v=RT.VOID;
return(_2817)(M);}};

var _2814=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2815)(M);};

var _2695=function(M){if(--M.cbt<0){throw _2695;}

//"lambda body for #(struct:LamPositionalName do-remove* whalesong/lang/private/list.rkt 81 0 2350 473)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2814)(M);}else{M.v=RT.VOID;
return(_2815)(M);}};

var _2694=function(M){if(--M.cbt<0){throw _2694;}

//"lambda body for #(struct:LamPositionalName remv whalesong/lang/private/list.rkt 78 0 2288 60)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym29647;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2693=function(M){if(--M.cbt<0){throw _2693;}

//"lambda body for #(struct:LamPositionalName remq whalesong/lang/private/list.rkt 75 0 2227 59)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym29648;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2805=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym29649;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2804=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29649;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2805)(M);};

var _2807=function(M){if(M.v===false){return(_2804)(M);}else{M.v=RT.VOID;
return(_2805)(M);}};

var _2806=function(M){M.v=false;
return(_2807)(M);};

var _2692=function(M){if(--M.cbt<0){throw _2692;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:69:4 whalesong/lang/private/list.rkt 69 4 2003 220)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2806)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2807)(M);}};

var _2800=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2691)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2692)(M);}};

var _2690=function(M){if(--M.cbt<0){throw _2690;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2800)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2691)(M);}};

var _2797=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2793=function(M){M.e.push(void(0),void(0));
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
M.p=_2689_c;
M.a=3;
M.c.push(new RT.CallFrame(_2799,M.p));
return(_2689)(M);};


var _2791=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2796,M.p));
return((M.p).label)(M);};

var _2689=function(M){if(--M.cbt<0){throw _2689;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 61 2 1755 156)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2791)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2787=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2689_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_2689)(M);};

var _2786=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2787)(M);};

var _2688=function(M){if(--M.cbt<0){throw _2688;}

//"lambda body for #(struct:LamPositionalName do-remove whalesong/lang/private/list.rkt 58 0 1649 263)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_2786)(M);}else{M.v=RT.VOID;
return(_2787)(M);}};

var _2783=function(M){M.c.push(new RT.CallFrame(_2785,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/list.rkt"]=function(){return new RT.ModuleRecord("list",_3538);}
return(_3537)(M);};

var _3635=function(M){M.e.splice(M.e.length-2,1);
M.e.splice(M.e.length-2,1);
M.e[M.e.length-2][42]=M.v;
M.e[M.e.length-2][43]=M.e[M.e.length-1];
M.e.pop();
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2779=function(M){if(--M.cbt<0){throw _2779;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3527)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2774=function(M){if(--M.cbt<0){throw _2774;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3511)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3492=function(M){if(--M.cbt<0){throw _3492;}
if(M.a===0){return(_3489)(M);}else{M.e.push(M.v);
return(_3489)(M);}};

var _3485=function(M){if(--M.cbt<0){throw _3485;}
if(M.a===0){return(_3482)(M);}else{M.e.push(M.v);
return(_3482)(M);}};

var _3478=function(M){if(--M.cbt<0){throw _3478;}
if(M.a===0){return(_3475)(M);}else{M.e.push(M.v);
return(_3475)(M);}};

var _2769=function(M){if(--M.cbt<0){throw _2769;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3477,M.p));
return((M.p).label)(M);};

var _3468=function(M){if(--M.cbt<0){throw _3468;}
if(M.a===0){return(_3465)(M);}else{M.e.push(M.v);
return(_3465)(M);}};

var _2764=function(M){if(--M.cbt<0){throw _2764;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3453,M.p));
return((M.p).label)(M);};

var _2754=function(M){if(--M.cbt<0){throw _2754;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3395,M.p));
return((M.p).label)(M);};

var _3373=function(M){if(--M.cbt<0){throw _3373;}
if(M.a===0){return(_3370)(M);}else{M.e.push(M.v);
return(_3370)(M);}};

var _3366=function(M){if(--M.cbt<0){throw _3366;}
if(M.a===0){return(_3363)(M);}else{M.e.push(M.v);
return(_3363)(M);}};

var _3345=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3340=function(M){if(--M.cbt<0){throw _3340;}
if(M.a===0){return(_3337)(M);}else{M.e.push(M.v);
return(_3337)(M);}};

var _3327=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2731=function(M){if(--M.cbt<0){throw _2731;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:252:4 whalesong/lang/private/list.rkt 252 4 8466 168)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym29650;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3250,M.p));
return((M.p).label)(M);};

var _2726=function(M){if(--M.cbt<0){throw _2726;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:239:4 whalesong/lang/private/list.rkt 239 4 8019 146)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym29651;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3222,M.p));
return((M.p).label)(M);};

var _2716=function(M){if(--M.cbt<0){throw _2716;}

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

var _2699=function(M){if(--M.cbt<0){throw _2699;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:98:4 whalesong/lang/private/list.rkt 98 4 2860 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym29646;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2691=function(M){if(--M.cbt<0){throw _2691;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:68:4 whalesong/lang/private/list.rkt 68 4 1948 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym29649;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3639=function(M){return(_2783)(M);};

var _3637=RT.si_context_expected(2);

var _3633=function(M){if(--M.cbt<0){throw _3633;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("assf", prefix[selfMod.getPrefixOffset("assf")]);extNs.set("assf", prefix[selfMod.getPrefixOffset("assf")]);ns.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);extNs.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);ns.set("assq", prefix[selfMod.getPrefixOffset("assq")]);extNs.set("assq", prefix[selfMod.getPrefixOffset("assq")]);ns.set("assv", prefix[selfMod.getPrefixOffset("assv")]);extNs.set("assv", prefix[selfMod.getPrefixOffset("assv")]);ns.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);extNs.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);ns.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);extNs.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);ns.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);extNs.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);ns.set("compose", prefix[selfMod.getPrefixOffset("compose")]);extNs.set("compose", prefix[selfMod.getPrefixOffset("compose")]);ns.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);extNs.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);ns.set("filter", prefix[selfMod.getPrefixOffset("filter")]);extNs.set("filter", prefix[selfMod.getPrefixOffset("filter")]);ns.set("findf", prefix[selfMod.getPrefixOffset("findf")]);extNs.set("findf", prefix[selfMod.getPrefixOffset("findf")]);ns.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);extNs.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);ns.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);extNs.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);ns.set("memf", prefix[selfMod.getPrefixOffset("memf")]);extNs.set("memf", prefix[selfMod.getPrefixOffset("memf")]);ns.set("remove", prefix[selfMod.getPrefixOffset("remove")]);extNs.set("remove", prefix[selfMod.getPrefixOffset("remove")]);ns.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);extNs.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);ns.set("remq", prefix[selfMod.getPrefixOffset("remq")]);extNs.set("remq", prefix[selfMod.getPrefixOffset("remq")]);ns.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);extNs.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);ns.set("remv", prefix[selfMod.getPrefixOffset("remv")]);extNs.set("remv", prefix[selfMod.getPrefixOffset("remv")]);ns.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);extNs.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);}(M.modules["whalesong/lang/private/list.rkt"],M.modules["whalesong/lang/private/list.rkt"].getExports(),M.modules["whalesong/lang/private/list.rkt"].getExternalExports(),M.modules["whalesong/lang/private/list.rkt"].prefix));
return(M.p)(M);};

var _3631=function(M){if(--M.cbt<0){throw _3631;}
M.c.push(new RT.CallFrame(_3633,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2774,1,[M.e[M.e.length-6]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_2775,2,[M.e[M.e.length-6]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_2776_c;
M.e[M.e.length-4]=new RT.Closure(_2777,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_2773,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose1");
M.e.length-=4;
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2779,1,[M.e[M.e.length-7]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_2780,2,[M.e[M.e.length-7]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_2781_c;
M.e[M.e.length-4]=new RT.Closure(_2782,(RT.makeArityAtLeast(1)),[M.e[M.e.length-7]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_2778,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose");
M.e.length-=4;
M.e.push(void(0),void(0));
M.p=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3637,M.p));
return((M.p).label)(M);};

var _3629=function(M){if(--M.cbt<0){throw _3629;}
M.c.push(new RT.CallFrame(_3631,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2772,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3627=function(M){if(--M.cbt<0){throw _3627;}
M.c.push(new RT.CallFrame(_3629,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2761,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3625=function(M){if(--M.cbt<0){throw _3625;}
M.c.push(new RT.CallFrame(_3627,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2757,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3623=function(M){if(--M.cbt<0){throw _3623;}
M.c.push(new RT.CallFrame(_3625,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2751,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3621=function(M){if(--M.cbt<0){throw _3621;}
M.c.push(new RT.CallFrame(_3623,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2750,2,[M.e[M.e.length-1]],"pipeline*");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3619=function(M){if(--M.cbt<0){throw _3619;}
M.c.push(new RT.CallFrame(_3621,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2745,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3617=function(M){if(--M.cbt<0){throw _3617;}
M.c.push(new RT.CallFrame(_3619,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2742,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3615=function(M){if(--M.cbt<0){throw _3615;}
M.c.push(new RT.CallFrame(_3617,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2741,2,[M.e[M.e.length-1]],"build-list");
M.e[M.e.length-1][40]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3613=function(M){if(--M.cbt<0){throw _3613;}
M.c.push(new RT.CallFrame(_3615,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2740,3,[M.e[M.e.length-1]],"recr");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3611=function(M){if(--M.cbt<0){throw _3611;}
M.c.push(new RT.CallFrame(_3613,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2739,2,[M.e[M.e.length-1]],"build-string");
M.e[M.e.length-1][37]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3609=function(M){if(--M.cbt<0){throw _3609;}
M.c.push(new RT.CallFrame(_3611,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2738,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3607=function(M){if(--M.cbt<0){throw _3607;}
M.c.push(new RT.CallFrame(_3609,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2737,2,[M.e[M.e.length-1]],"build-vector");
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3605=function(M){if(--M.cbt<0){throw _3605;}
M.c.push(new RT.CallFrame(_3607,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2736,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3603=function(M){if(--M.cbt<0){throw _3603;}
M.c.push(new RT.CallFrame(_3605,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2735,2,[M.e[M.e.length-1]],"filter");
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3601=function(M){if(--M.cbt<0){throw _3601;}
M.c.push(new RT.CallFrame(_3603,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2734,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3599=function(M){if(--M.cbt<0){throw _3599;}
M.c.push(new RT.CallFrame(_3601,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2731,3,[M.e[M.e.length-3]],"...private/list.rkt:252:4");
M.e[M.e.length-2]=new RT.Closure(_2733,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:258:4");
M.v=new RT.Closure(_2730,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldr");
M.e.length-=2;
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3597=function(M){if(--M.cbt<0){throw _3597;}
M.c.push(new RT.CallFrame(_3599,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2729,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3595=function(M){if(--M.cbt<0){throw _3595;}
M.c.push(new RT.CallFrame(_3597,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2726,3,[M.e[M.e.length-3]],"...private/list.rkt:239:4");
M.e[M.e.length-2]=new RT.Closure(_2728,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:243:4");
M.v=new RT.Closure(_2725,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldl");
M.e.length-=2;
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3593=function(M){if(--M.cbt<0){throw _3593;}
M.c.push(new RT.CallFrame(_3595,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2724,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3591=function(M){if(--M.cbt<0){throw _3591;}
M.c.push(new RT.CallFrame(_3593,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2723,5,[M.e[M.e.length-1]],"check-fold");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3589=function(M){if(--M.cbt<0){throw _3589;}
M.c.push(new RT.CallFrame(_3591,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2722,7,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3587=function(M){if(--M.cbt<0){throw _3587;}
M.c.push(new RT.CallFrame(_3589,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_2720_c;
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3585=function(M){if(--M.cbt<0){throw _3585;}
M.c.push(new RT.CallFrame(_3587,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2719,2,[M.e[M.e.length-1]],"assf");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3583=function(M){if(--M.cbt<0){throw _3583;}
M.c.push(new RT.CallFrame(_3585,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2718,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3581=function(M){if(--M.cbt<0){throw _3581;}
M.c.push(new RT.CallFrame(_3583,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2716,2,[M.e[M.e.length-3]],"...private/list.rkt:186:13");
M.e[M.e.length-2]=new RT.Closure(_2717,3,[M.e[M.e.length-3]],"...private/list.rkt:187:13");
M.v=new RT.Closure(_2715,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"assoc");
M.e.length-=2;
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3579=function(M){if(--M.cbt<0){throw _3579;}
M.c.push(new RT.CallFrame(_3581,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2714,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3577=function(M){if(--M.cbt<0){throw _3577;}
M.c.push(new RT.CallFrame(_3579,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2713,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][49]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3575=function(M){if(--M.cbt<0){throw _3575;}
M.c.push(new RT.CallFrame(_3577,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2712,2,[M.e[M.e.length-1]],"assv");
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3573=function(M){if(--M.cbt<0){throw _3573;}
M.c.push(new RT.CallFrame(_3575,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2711,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3571=function(M){if(--M.cbt<0){throw _3571;}
M.c.push(new RT.CallFrame(_3573,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2710,2,[M.e[M.e.length-1]],"assq");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3569=function(M){if(--M.cbt<0){throw _3569;}
M.c.push(new RT.CallFrame(_3571,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2709,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3567=function(M){if(--M.cbt<0){throw _3567;}
M.c.push(new RT.CallFrame(_3569,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2708,3,[M.e[M.e.length-1]],"bad-item");
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3565=function(M){if(--M.cbt<0){throw _3565;}
M.c.push(new RT.CallFrame(_3567,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2707,2,[M.e[M.e.length-1]],"bad-list");
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3563=function(M){if(--M.cbt<0){throw _3563;}
M.c.push(new RT.CallFrame(_3565,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2706,2,[M.e[M.e.length-1]],"findf");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3561=function(M){if(--M.cbt<0){throw _3561;}
M.c.push(new RT.CallFrame(_3563,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2705,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3559=function(M){if(--M.cbt<0){throw _3559;}
M.c.push(new RT.CallFrame(_3561,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2704,2,[M.e[M.e.length-1]],"memf");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3557=function(M){if(--M.cbt<0){throw _3557;}
M.c.push(new RT.CallFrame(_3559,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2703,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3555=function(M){if(--M.cbt<0){throw _3555;}
M.c.push(new RT.CallFrame(_3557,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2702,2,[M.e[M.e.length-1]],"remv*");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3553=function(M){if(--M.cbt<0){throw _3553;}
M.c.push(new RT.CallFrame(_3555,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2701,2,[M.e[M.e.length-1]],"remq*");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3551=function(M){if(--M.cbt<0){throw _3551;}
M.c.push(new RT.CallFrame(_3553,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2699,2,[M.e[M.e.length-3]],"...private/list.rkt:98:4");
M.e[M.e.length-2]=new RT.Closure(_2700,3,[M.e[M.e.length-3]],"...private/list.rkt:99:4");
M.v=new RT.Closure(_2698,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove*");
M.e.length-=2;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3549=function(M){if(--M.cbt<0){throw _3549;}
M.c.push(new RT.CallFrame(_3551,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2695,4,[M.e[M.e.length-1]],"do-remove*");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3547=function(M){if(--M.cbt<0){throw _3547;}
M.c.push(new RT.CallFrame(_3549,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2694,2,[M.e[M.e.length-1]],"remv");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3545=function(M){if(--M.cbt<0){throw _3545;}
M.c.push(new RT.CallFrame(_3547,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2693,2,[M.e[M.e.length-1]],"remq");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3543=function(M){if(--M.cbt<0){throw _3543;}
M.c.push(new RT.CallFrame(_3545,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2691,2,[M.e[M.e.length-3]],"...private/list.rkt:68:4");
M.e[M.e.length-2]=new RT.Closure(_2692,3,[M.e[M.e.length-3]],"...private/list.rkt:69:4");
M.v=new RT.Closure(_2690,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove");
M.e.length-=2;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2785=function(M){if(--M.cbt<0){throw _2785;}
};

var _3504=function(M){if(--M.cbt<0){throw _3504;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3498=function(M){if(--M.cbt<0){throw _3498;}
return(_3496)(M);};

var _3491=function(M){if(--M.cbt<0){throw _3491;}
M.a=1;
return(_3492)(M);};

var _3484=function(M){if(--M.cbt<0){throw _3484;}
M.a=1;
return(_3485)(M);};

var _3477=function(M){if(--M.cbt<0){throw _3477;}
M.a=1;
return(_3478)(M);};

var _3467=function(M){if(--M.cbt<0){throw _3467;}
M.a=1;
return(_3468)(M);};

var _3461=function(M){if(--M.cbt<0){throw _3461;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3457=function(M){if(--M.cbt<0){throw _3457;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3453=function(M){if(--M.cbt<0){throw _3453;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3446=function(M){if(--M.cbt<0){throw _3446;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3431=function(M){if(--M.cbt<0){throw _3431;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2760_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2760)(M);};

var _3420=function(M){if(--M.cbt<0){throw _3420;}
M.e[M.e.length-1]=M.v;
return(_3418)(M);};

var _3415=function(M){if(--M.cbt<0){throw _3415;}
return(_3413)(M);};

var _3409=function(M){if(--M.cbt<0){throw _3409;}
return(_3407)(M);};

var _3403=function(M){if(--M.cbt<0){throw _3403;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3399=function(M){if(--M.cbt<0){throw _3399;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3395=function(M){if(--M.cbt<0){throw _3395;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3388=function(M){if(--M.cbt<0){throw _3388;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3372=function(M){if(--M.cbt<0){throw _3372;}
M.a=1;
return(_3373)(M);};

var _3365=function(M){if(--M.cbt<0){throw _3365;}
M.a=1;
return(_3366)(M);};

var _3359=function(M){if(--M.cbt<0){throw _3359;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3355=function(M){if(--M.cbt<0){throw _3355;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3339=function(M){if(--M.cbt<0){throw _3339;}
M.a=1;
return(_3340)(M);};

var _3333=function(M){if(--M.cbt<0){throw _3333;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3316=function(M){if(--M.cbt<0){throw _3316;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3314=function(M){if(--M.cbt<0){throw _3314;}
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
M.c.push(new RT.CallFrame(_3316,M.p));
return((M.p).label)(M);};

var _3299=function(M){if(--M.cbt<0){throw _3299;}
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

var _3284=function(M){if(--M.cbt<0){throw _3284;}
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

var _3270=function(M){if(--M.cbt<0){throw _3270;}
if(M.v===false){return(_3267)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3268)(M);}};

var _3262=function(M){if(--M.cbt<0){throw _3262;}
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

var _3258=function(M){if(--M.cbt<0){throw _3258;}
return(_3256)(M);};

var _3250=function(M){if(--M.cbt<0){throw _3250;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2732_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2732)(M);};

var _3244=function(M){if(--M.cbt<0){throw _3244;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3242=function(M){if(--M.cbt<0){throw _3242;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3244,M.p));
return((M.p).label)(M);};

var _3240=function(M){if(--M.cbt<0){throw _3240;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3242,M.p));
return((M.p).label)(M);};

var _3234=function(M){if(--M.cbt<0){throw _3234;}
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

var _3229=function(M){if(--M.cbt<0){throw _3229;}
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2727_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2727)(M);};

var _3222=function(M){if(--M.cbt<0){throw _3222;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_2727_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_2727)(M);};

var _3216=function(M){if(--M.cbt<0){throw _3216;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3214=function(M){if(--M.cbt<0){throw _3214;}
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3216,M.p));
return((M.p).label)(M);};

var _3212=function(M){if(--M.cbt<0){throw _3212;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3214,M.p));
return((M.p).label)(M);};

var _3208=function(M){if(--M.cbt<0){throw _3208;}
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

var _3206=function(M){if(--M.cbt<0){throw _3206;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3203)(M);}else{M.v=RT.VOID;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3202=function(M){if(--M.cbt<0){throw _3202;}
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3206,M.p));
return((M.p).label)(M);};

var _3199=function(M){if(--M.cbt<0){throw _3199;}
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
M.c.push(new RT.CallFrame(_3202,M.p));
return((M.p).label)(M);};

var _3193=function(M){if(--M.cbt<0){throw _3193;}
return(_3191)(M);};

var _3189=function(M){if(--M.cbt<0){throw _3189;}
return(_3187)(M);};

var _3183=function(M){if(--M.cbt<0){throw _3183;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_3180)(M);}else{M.v=RT.VOID;
return(_3181)(M);}};

var _3179=function(M){if(--M.cbt<0){throw _3179;}
return(_3177)(M);};

var _3173=function(M){if(--M.cbt<0){throw _3173;}
M.e[M.e.length-2]=M.v;
return(_3171)(M);};

var _3170=function(M){if(--M.cbt<0){throw _3170;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2721_c;
M.a=3;
M.c.push(new RT.CallFrame(_3173,M.p));
return(_2721)(M);};

var _3138=function(M){if(--M.cbt<0){throw _3138;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3140)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3135=function(M){if(--M.cbt<0){throw _3135;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3138,M.p));
return((M.p).label)(M);};

var _3133=function(M){if(--M.cbt<0){throw _3133;}
M.e.pop();
if(M.v===false){return(_3127)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3130=function(M){if(--M.cbt<0){throw _3130;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3133,M.p));
return((M.p).label)(M);};

var _3123=function(M){if(--M.cbt<0){throw _3123;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3125)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][22][0][M.e[M.e.length-6][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3130,M.p));
return((M.p).label)(M);}};

var _3118=function(M){if(--M.cbt<0){throw _3118;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3120)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3123,M.p));
return((M.p).label)(M);}};

var _3116=function(M){if(--M.cbt<0){throw _3116;}
M.e.pop();
if(M.v===false){return(_3110)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3113=function(M){if(--M.cbt<0){throw _3113;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3116,M.p));
return((M.p).label)(M);};

var _3106=function(M){if(--M.cbt<0){throw _3106;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3108)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][22][0][M.e[M.e.length-4][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3113,M.p));
return((M.p).label)(M);}};

var _3073=function(M){if(--M.cbt<0){throw _3073;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3075)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3070=function(M){if(--M.cbt<0){throw _3070;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3073,M.p));
return((M.p).label)(M);};

var _3068=function(M){if(--M.cbt<0){throw _3068;}
if(M.v===false){return(_3063)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3066=function(M){if(--M.cbt<0){throw _3066;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3068,M.p));
return((M.p).label)(M);};

var _3059=function(M){if(--M.cbt<0){throw _3059;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3061)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3066,M.p));
return((M.p).label)(M);}};

var _3054=function(M){if(--M.cbt<0){throw _3054;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3056)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3059,M.p));
return((M.p).label)(M);}};

var _3052=function(M){if(--M.cbt<0){throw _3052;}
if(M.v===false){return(_3047)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3050=function(M){if(--M.cbt<0){throw _3050;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3052,M.p));
return((M.p).label)(M);};

var _3043=function(M){if(--M.cbt<0){throw _3043;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3045)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3050,M.p));
return((M.p).label)(M);}};

var _3020=function(M){if(--M.cbt<0){throw _3020;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_3022)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3017=function(M){if(--M.cbt<0){throw _3017;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3020,M.p));
return((M.p).label)(M);};

var _3015=function(M){if(--M.cbt<0){throw _3015;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3012)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3008=function(M){if(--M.cbt<0){throw _3008;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3010)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3015,M.p));
return((M.p).label)(M);}};

var _3003=function(M){if(--M.cbt<0){throw _3003;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_3005)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3008,M.p));
return((M.p).label)(M);}};

var _3001=function(M){if(--M.cbt<0){throw _3001;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2998)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2994=function(M){if(--M.cbt<0){throw _2994;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2996)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3001,M.p));
return((M.p).label)(M);}};

var _2969=function(M){if(--M.cbt<0){throw _2969;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_2971)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym29654;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2966=function(M){if(--M.cbt<0){throw _2966;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2969,M.p));
return((M.p).label)(M);};

var _2964=function(M){if(--M.cbt<0){throw _2964;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2961)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2957=function(M){if(--M.cbt<0){throw _2957;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2959)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2964,M.p));
return((M.p).label)(M);}};

var _2952=function(M){if(--M.cbt<0){throw _2952;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2954)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2957,M.p));
return((M.p).label)(M);}};

var _2950=function(M){if(--M.cbt<0){throw _2950;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2947)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2943=function(M){if(--M.cbt<0){throw _2943;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2945)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2950,M.p));
return((M.p).label)(M);}};

var _2918=function(M){if(--M.cbt<0){throw _2918;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_2920)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym29641;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2915=function(M){if(--M.cbt<0){throw _2915;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2918,M.p));
return((M.p).label)(M);};

var _2913=function(M){if(--M.cbt<0){throw _2913;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2910)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2906=function(M){if(--M.cbt<0){throw _2906;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2908)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2913,M.p));
return((M.p).label)(M);}};

var _2901=function(M){if(--M.cbt<0){throw _2901;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2903)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2906,M.p));
return((M.p).label)(M);}};

var _2899=function(M){if(--M.cbt<0){throw _2899;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2896)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2892=function(M){if(--M.cbt<0){throw _2892;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2894)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2899,M.p));
return((M.p).label)(M);}};

var _2880=function(M){if(--M.cbt<0){throw _2880;}
if(M.v===false){return(_2877)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2863=function(M){if(--M.cbt<0){throw _2863;}
if(M.v===false){return(_2860)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2835=function(M){if(--M.cbt<0){throw _2835;}
if(M.v===false){return(_2832)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_2696_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_2696)(M);}};

var _2831=function(M){if(--M.cbt<0){throw _2831;}
M.e[M.e.length-2]=M.v;
return(_2829)(M);};

var _2799=function(M){if(--M.cbt<0){throw _2799;}
M.e[M.e.length-2]=M.v;
return(_2797)(M);};

var _2796=function(M){if(--M.cbt<0){throw _2796;}
if(M.v===false){return(_2793)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3636=function(M){if(--M.cbt<0){throw _3636;}
if((M.a-2)===0){return(_3635)(M);}else{RT.si_context_expected(2)(M);
}};

var _3632=function(M){if(--M.cbt<0){throw _3632;}
M.e.length-=(M.a-1);
return(_3633)(M);};

var _3630=function(M){if(--M.cbt<0){throw _3630;}
M.e.length-=(M.a-1);
return(_3631)(M);};

var _3628=function(M){if(--M.cbt<0){throw _3628;}
M.e.length-=(M.a-1);
return(_3629)(M);};

var _3626=function(M){if(--M.cbt<0){throw _3626;}
M.e.length-=(M.a-1);
return(_3627)(M);};

var _3624=function(M){if(--M.cbt<0){throw _3624;}
M.e.length-=(M.a-1);
return(_3625)(M);};

var _3622=function(M){if(--M.cbt<0){throw _3622;}
M.e.length-=(M.a-1);
return(_3623)(M);};

var _3620=function(M){if(--M.cbt<0){throw _3620;}
M.e.length-=(M.a-1);
return(_3621)(M);};

var _3618=function(M){if(--M.cbt<0){throw _3618;}
M.e.length-=(M.a-1);
return(_3619)(M);};

var _3616=function(M){if(--M.cbt<0){throw _3616;}
M.e.length-=(M.a-1);
return(_3617)(M);};

var _3614=function(M){if(--M.cbt<0){throw _3614;}
M.e.length-=(M.a-1);
return(_3615)(M);};

var _3612=function(M){if(--M.cbt<0){throw _3612;}
M.e.length-=(M.a-1);
return(_3613)(M);};

var _3610=function(M){if(--M.cbt<0){throw _3610;}
M.e.length-=(M.a-1);
return(_3611)(M);};

var _3608=function(M){if(--M.cbt<0){throw _3608;}
M.e.length-=(M.a-1);
return(_3609)(M);};

var _3606=function(M){if(--M.cbt<0){throw _3606;}
M.e.length-=(M.a-1);
return(_3607)(M);};

var _3604=function(M){if(--M.cbt<0){throw _3604;}
M.e.length-=(M.a-1);
return(_3605)(M);};

var _3602=function(M){if(--M.cbt<0){throw _3602;}
M.e.length-=(M.a-1);
return(_3603)(M);};

var _3600=function(M){if(--M.cbt<0){throw _3600;}
M.e.length-=(M.a-1);
return(_3601)(M);};

var _3598=function(M){if(--M.cbt<0){throw _3598;}
M.e.length-=(M.a-1);
return(_3599)(M);};

var _3596=function(M){if(--M.cbt<0){throw _3596;}
M.e.length-=(M.a-1);
return(_3597)(M);};

var _3594=function(M){if(--M.cbt<0){throw _3594;}
M.e.length-=(M.a-1);
return(_3595)(M);};

var _3592=function(M){if(--M.cbt<0){throw _3592;}
M.e.length-=(M.a-1);
return(_3593)(M);};

var _3590=function(M){if(--M.cbt<0){throw _3590;}
M.e.length-=(M.a-1);
return(_3591)(M);};

var _3588=function(M){if(--M.cbt<0){throw _3588;}
M.e.length-=(M.a-1);
return(_3589)(M);};

var _3586=function(M){if(--M.cbt<0){throw _3586;}
M.e.length-=(M.a-1);
return(_3587)(M);};

var _3584=function(M){if(--M.cbt<0){throw _3584;}
M.e.length-=(M.a-1);
return(_3585)(M);};

var _3582=function(M){if(--M.cbt<0){throw _3582;}
M.e.length-=(M.a-1);
return(_3583)(M);};

var _3580=function(M){if(--M.cbt<0){throw _3580;}
M.e.length-=(M.a-1);
return(_3581)(M);};

var _3578=function(M){if(--M.cbt<0){throw _3578;}
M.e.length-=(M.a-1);
return(_3579)(M);};

var _3576=function(M){if(--M.cbt<0){throw _3576;}
M.e.length-=(M.a-1);
return(_3577)(M);};

var _3574=function(M){if(--M.cbt<0){throw _3574;}
M.e.length-=(M.a-1);
return(_3575)(M);};

var _3572=function(M){if(--M.cbt<0){throw _3572;}
M.e.length-=(M.a-1);
return(_3573)(M);};

var _3570=function(M){if(--M.cbt<0){throw _3570;}
M.e.length-=(M.a-1);
return(_3571)(M);};

var _3568=function(M){if(--M.cbt<0){throw _3568;}
M.e.length-=(M.a-1);
return(_3569)(M);};

var _3566=function(M){if(--M.cbt<0){throw _3566;}
M.e.length-=(M.a-1);
return(_3567)(M);};

var _3564=function(M){if(--M.cbt<0){throw _3564;}
M.e.length-=(M.a-1);
return(_3565)(M);};

var _3562=function(M){if(--M.cbt<0){throw _3562;}
M.e.length-=(M.a-1);
return(_3563)(M);};

var _3560=function(M){if(--M.cbt<0){throw _3560;}
M.e.length-=(M.a-1);
return(_3561)(M);};

var _3558=function(M){if(--M.cbt<0){throw _3558;}
M.e.length-=(M.a-1);
return(_3559)(M);};

var _3556=function(M){if(--M.cbt<0){throw _3556;}
M.e.length-=(M.a-1);
return(_3557)(M);};

var _3554=function(M){if(--M.cbt<0){throw _3554;}
M.e.length-=(M.a-1);
return(_3555)(M);};

var _3552=function(M){if(--M.cbt<0){throw _3552;}
M.e.length-=(M.a-1);
return(_3553)(M);};

var _3550=function(M){if(--M.cbt<0){throw _3550;}
M.e.length-=(M.a-1);
return(_3551)(M);};

var _3548=function(M){if(--M.cbt<0){throw _3548;}
M.e.length-=(M.a-1);
return(_3549)(M);};

var _3546=function(M){if(--M.cbt<0){throw _3546;}
M.e.length-=(M.a-1);
return(_3547)(M);};

var _3544=function(M){if(--M.cbt<0){throw _3544;}
M.e.length-=(M.a-1);
return(_3545)(M);};

var _3542=function(M){if(--M.cbt<0){throw _3542;}
M.e.length-=(M.a-1);
return(_3543)(M);};

var _3540=function(M){if(--M.cbt<0){throw _3540;}
M.e.length-=(M.a-1);
return(_3541)(M);};

var _3541=function(M){if(--M.cbt<0){throw _3541;}
M.e.push([M.params.currentNamespace.get("do-remove")||M.primitives["do-remove"],M.primitives["raise-type-error"],M.params.currentNamespace.get("remove")||M.primitives["remove"],M.primitives["equal?"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.params.currentNamespace.get("remq")||M.primitives["remq"],M.params.currentNamespace.get("remv")||M.primitives["remv"],M.primitives["eqv?"],M.params.currentNamespace.get("do-remove*")||M.primitives["do-remove*"],M.params.currentNamespace.get("remove*")||M.primitives["remove*"],M.params.currentNamespace.get("remq*")||M.primitives["remq*"],M.params.currentNamespace.get("remv*")||M.primitives["remv*"],M.params.currentNamespace.get("memf")||M.primitives["memf"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("findf")||M.primitives["findf"],M.params.currentNamespace.get("bad-list")||M.primitives["bad-list"],M.params.currentNamespace.get("bad-item")||M.primitives["bad-item"],M.params.currentNamespace.get("assq")||M.primitives["assq"],M.params.currentNamespace.get("assv")||M.primitives["assv"],M.params.currentNamespace.get("assoc")||M.primitives["assoc"],M.params.currentNamespace.get("assf")||M.primitives["assf"],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-car1.1"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-car1.1"}],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-cdr2.3"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-cdr2.3"}],M.params.currentNamespace.get("mapadd")||M.primitives["mapadd"],M.params.currentNamespace.get("check-fold")||M.primitives["check-fold"],M.primitives["length"],M.primitives["format"],M.params.currentNamespace.get("foldl")||M.primitives["foldl"],M.primitives["map"],M.params.currentNamespace.get("foldr")||M.primitives["foldr"],M.params.currentNamespace.get("filter")||M.primitives["filter"],M.primitives["reverse"],M.params.currentNamespace.get("build-vector")||M.primitives["build-vector"],M.primitives["exact-nonnegative-integer?"],M.primitives["make-vector"],M.primitives["vector-set!"],M.params.currentNamespace.get("build-string")||M.primitives["build-string"],M.primitives["make-string"],M.primitives["string-set!"],M.params.currentNamespace.get("build-list")||M.primitives["build-list"],M.primitives["zero?"],M.params.currentNamespace.get("compose1")||M.primitives["compose1"],M.params.currentNamespace.get("compose")||M.primitives["compose"],M.primitives["procedure-arity"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["do-remove","raise-type-error","remove","equal?","procedure?","procedure-arity-includes?","remq","remv","eqv?","do-remove*","remove*","remq*","remv*","memf","raise-mismatch-error","findf","bad-list","bad-item","assq","assv","assoc","assf","unsafe-car1.1","unsafe-cdr2.3","mapadd","check-fold","length","format","foldl","map","foldr","filter","reverse","build-vector","exact-nonnegative-integer?","make-vector","vector-set!","build-string","make-string","string-set!","build-list","zero?","compose1","compose","procedure-arity",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/private/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3543,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_2688,4,[M.e[M.e.length-1]],"do-remove");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3539=function(M){if(M.modules["whalesong/lang/unsafe/ops.rkt"].isInvoked!==false){return(_3541)(M);}else{M.c.push(new RT.CallFrame(_3541,M.p));
return(M.modules["whalesong/lang/unsafe/ops.rkt"].label)(M);}};

var _3537=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3538=function(M){M.modules["whalesong/lang/private/list.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/unsafe/ops.rkt"]!==void(0)&&M.modules["whalesong/lang/unsafe/ops.rkt"]!==undefined)!==false){return(_3539)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/unsafe/ops.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_3539);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_3539)(M);}};

var _2784=function(M){if(--M.cbt<0){throw _2784;}
M.e.length-=(M.a-1);
return(_2785)(M);};

var _3532=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][64];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3531=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29655;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3532)(M);};

var _3530=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3531)(M);}else{M.v=RT.VOID;
return(_3532)(M);}};

var _3529=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29655;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3530)(M);};

var _3527=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29655;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2782=function(M){if(--M.cbt<0){throw _2782;}

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

var _2781=function(M){if(--M.cbt<0){throw _2781;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3525=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_2779)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_2782)(M);}};

var _2780=function(M){if(--M.cbt<0){throw _2780;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3529)(M);}else{M.v=RT.VOID;
return(_3530)(M);}};

var _3524=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3525)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2781)(M);}};

var _3523=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3524)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2780)(M);}};

var _2778=function(M){if(--M.cbt<0){throw _2778;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3523)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2779)(M);}};

var _3518=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][62];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3517=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29656;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=4;
return(_3518)(M);};

var _3516=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3517)(M);}else{M.v=RT.VOID;
return(_3518)(M);}};

var _3515=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29656;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3516)(M);};

var _3514=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3515)(M);}else{M.v=RT.VOID;
return(_3516)(M);}};

var _3513=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29656;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_3514)(M);};

var _3511=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym29656;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2777=function(M){if(--M.cbt<0){throw _2777;}

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

var _2776=function(M){if(--M.cbt<0){throw _2776;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3509=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_2774)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_2777)(M);}};

var _2775=function(M){if(--M.cbt<0){throw _2775;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3513)(M);}else{M.v=RT.VOID;
return(_3514)(M);}};

var _3508=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3509)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2776)(M);}};

var _3507=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3508)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2775)(M);}};

var _2773=function(M){if(--M.cbt<0){throw _2773;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3507)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2774)(M);}};


var _3499=function(M){M.v=M.e[M.e.length-6];
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
M.c.push(new RT.CallFrame(_3504,M.p));
return((M.p).label)(M);};

var _3497=function(M){if(--M.cbt<0){throw _3497;}
M.e.length-=(M.a-1);
return(_3496)(M);};

var _3496=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3499)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
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

var _3495=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym29655;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3498,M.p));
return((M.p).label)(M);};

var _2772=function(M){if(--M.cbt<0){throw _2772;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3495)(M);}else{M.v=RT.VOID;
return(_3496)(M);}};

var _3489=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3482=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+4),4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3475=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3472=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2769)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2771)(M);}};

var _3471=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3472)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2770)(M);}};

var _3465=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _3450=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2764)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2766)(M);}};

var _3449=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3450)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2765)(M);}};


var _2768=function(M){if(--M.cbt<0){throw _2768;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3471)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2769)(M);}};

var _2771=function(M){if(--M.cbt<0){throw _2771;}

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
M.c.push(new RT.CallFrame(_3491,M.p));
return((M.p).label)(M);};

var _2770=function(M){if(--M.cbt<0){throw _2770;}

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
M.c.push(new RT.CallFrame(_3484,M.p));
return((M.p).label)(M);};

var _3443=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2767=function(M){if(--M.cbt<0){throw _2767;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3467,M.p));
return((M.p).label)(M);};

var _3442=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2769,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_2770,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_2771,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_2768,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3443)(M);};

var _2763=function(M){if(--M.cbt<0){throw _2763;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3449)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2764)(M);}};

var _2766=function(M){if(--M.cbt<0){throw _2766;}

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
M.c.push(new RT.CallFrame(_3461,M.p));
return((M.p).label)(M);};

var _2765=function(M){if(--M.cbt<0){throw _2765;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3457,M.p));
return((M.p).label)(M);};

var _3439=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2762=function(M){if(--M.cbt<0){throw _2762;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3446,M.p));
return((M.p).label)(M);};

var _3438=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2764,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_2765,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_2766,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_2763,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3439)(M);};

var _3435=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3442)(M);}else{M.e[M.e.length-1]=new RT.Closure(_2767,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3443)(M);}};

var _2761=function(M){if(--M.cbt<0){throw _2761;}

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
if(M.v===false){return(_3435)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3438)(M);}else{M.e[M.e.length-1]=new RT.Closure(_2762,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3439)(M);}}};


var _3426=function(M){M.e.push(void(0),void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3431,M.p));
return((M.p).label)(M);};

var _2760=function(M){if(--M.cbt<0){throw _2760;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 356 8 12717 138)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3426)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2759=function(M){if(--M.cbt<0){throw _2759;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:355:6 whalesong/lang/private/list.rkt 355 6 12697 159)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_2760_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2760)(M);};

var _3418=function(M){M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2758=function(M){if(--M.cbt<0){throw _2758;}

//"lambda body for #(struct:LamPositionalName pipeline1 whalesong/lang/private/list.rkt 349 4 12469 388)"

M.v=new RT.Closure(_2759,1,[M.e[M.e.length-2],M.e[M.e.length-1]],"...private/list.rkt:355:6");
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3414=function(M){if(--M.cbt<0){throw _3414;}
M.e.length-=(M.a-1);
return(_3413)(M);};

var _3413=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
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

var _3412=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym29656;
M.e[M.e.length-3]="procedure (arity 1)";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3415,M.p));
return((M.p).label)(M);};

var _3410=function(M){M.v=M.e[M.e.length-6];
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
M.p=_2758_c;
M.a=2;
M.c.push(new RT.CallFrame(_3420,M.p));
return(_2758)(M);};

var _3408=function(M){if(--M.cbt<0){throw _3408;}
M.e.length-=(M.a-1);
return(_3407)(M);};

var _3407=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3410)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3412)(M);}else{M.v=RT.VOID;
return(_3413)(M);}}};

var _3406=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym29656;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3409,M.p));
return((M.p).label)(M);};

var _2757=function(M){if(--M.cbt<0){throw _2757;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3406)(M);}else{M.v=RT.VOID;
return(_3407)(M);}};




var _3392=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2754)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_2756)(M);}};

var _3391=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3392)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2755)(M);}};


var _2753=function(M){if(--M.cbt<0){throw _2753;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3391)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2754)(M);}};

var _2756=function(M){if(--M.cbt<0){throw _2756;}

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
M.c.push(new RT.CallFrame(_3403,M.p));
return((M.p).label)(M);};

var _2755=function(M){if(--M.cbt<0){throw _2755;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3399,M.p));
return((M.p).label)(M);};

var _3385=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2752=function(M){if(--M.cbt<0){throw _2752;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3388,M.p));
return((M.p).label)(M);};

var _3384=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2754,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_2755,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_2756,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_2753,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_3385)(M);};

var _2751=function(M){if(--M.cbt<0){throw _2751;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 413 8 15468 43)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_3384)(M);}else{M.e[M.e.length-1]=new RT.Closure(_2752,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_3385)(M);}};

var _3376=function(M){M.e.push(void(0));
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

var _2750=function(M){if(--M.cbt<0){throw _2750;}

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
if(M.v===false){return(_3376)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][59];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3370=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3363=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _2749=function(M){if(--M.cbt<0){throw _2749;}

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
M.c.push(new RT.CallFrame(_3372,M.p));
return((M.p).label)(M);};

var _2748=function(M){if(--M.cbt<0){throw _2748;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:387:34 whalesong/lang/private/list.rkt 387 34 14265 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3365,M.p));
return((M.p).label)(M);};

var _3350=function(M){M.e[M.e.length-2]=new RT.Closure(_2749,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:388:34");
return(_3345)(M);};

var _2747=function(M){if(--M.cbt<0){throw _2747;}

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
M.c.push(new RT.CallFrame(_3359,M.p));
return((M.p).label)(M);};

var _2746=function(M){if(--M.cbt<0){throw _2746;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:384:34 whalesong/lang/private/list.rkt 384 34 14075 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3355,M.p));
return((M.p).label)(M);};

var _3348=function(M){M.e[M.e.length-2]=new RT.Closure(_2747,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:385:34");
return(_3345)(M);};

var _3346=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3350)(M);}else{M.e[M.e.length-2]=new RT.Closure(_2748,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:387:34");
return(_3345)(M);}};

var _3343=function(M){M.e.push(void(0),void(0));
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
if(M.v===false){return(_3346)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3348)(M);}else{M.e[M.e.length-2]=new RT.Closure(_2746,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:384:34");
return(_3345)(M);}}};

var _2745=function(M){if(--M.cbt<0){throw _2745;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 378 12 13773 632)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3343)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3337=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2744=function(M){if(--M.cbt<0){throw _2744;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:372:28 whalesong/lang/private/list.rkt 372 28 13436 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3339,M.p));
return((M.p).label)(M);};

var _2743=function(M){if(--M.cbt<0){throw _2743;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:371:28 whalesong/lang/private/list.rkt 371 28 13383 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3333,M.p));
return((M.p).label)(M);};

var _3328=function(M){M.e[M.e.length-2]=new RT.Closure(_2744,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:372:28");
return(_3327)(M);};

var _3325=function(M){M.e.push(void(0),void(0));
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
if(M.v===false){return(_3328)(M);}else{M.e[M.e.length-2]=new RT.Closure(_2743,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:371:28");
return(_3327)(M);}};

var _2742=function(M){if(--M.cbt<0){throw _2742;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 366 10 13169 335)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3325)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3320=function(M){M.e.push(void(0),void(0),void(0));
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

var _3319=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29657;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3320)(M);};

var _3322=function(M){if(M.v===false){return(_3319)(M);}else{M.v=RT.VOID;
return(_3320)(M);}};

var _3321=function(M){M.v=false;
return(_3322)(M);};

var _3318=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3321)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3322)(M);}};

var _3317=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29657;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3318)(M);};

var _2741=function(M){if(--M.cbt<0){throw _2741;}

//"lambda body for #(struct:LamPositionalName build-list whalesong/lang/private/list.rkt 305 0 10431 412)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3317)(M);}else{M.v=RT.VOID;
return(_3318)(M);}};



var _3311=function(M){M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3314,M.p));
return((M.p).label)(M);};

var _2740=function(M){if(--M.cbt<0){throw _2740;}

//"lambda body for #(struct:LamPositionalName recr whalesong/lang/private/list.rkt 311 2 10711 131)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-4]);
if(M.v===false){return(_3311)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3305=function(M){M.e.push(void(0));
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

var _3304=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29658;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3305)(M);};

var _3307=function(M){if(M.v===false){return(_3304)(M);}else{M.v=RT.VOID;
return(_3305)(M);}};

var _3306=function(M){M.v=false;
return(_3307)(M);};

var _3303=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3306)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3307)(M);}};

var _3302=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29658;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3303)(M);};

var _2739=function(M){if(--M.cbt<0){throw _2739;}

//"lambda body for #(struct:LamPositionalName build-string whalesong/lang/private/list.rkt 293 0 9995 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3302)(M);}else{M.v=RT.VOID;
return(_3303)(M);}};


var _3296=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3299,M.p));
return((M.p).label)(M);};

var _2738=function(M){if(--M.cbt<0){throw _2738;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 300 4 10314 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_3296)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3290=function(M){M.e.push(void(0));
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

var _3289=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29659;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3290)(M);};

var _3292=function(M){if(M.v===false){return(_3289)(M);}else{M.v=RT.VOID;
return(_3290)(M);}};

var _3291=function(M){M.v=false;
return(_3292)(M);};

var _3288=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3291)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3292)(M);}};

var _3287=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29659;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3288)(M);};

var _2737=function(M){if(--M.cbt<0){throw _2737;}

//"lambda body for #(struct:LamPositionalName build-vector whalesong/lang/private/list.rkt 281 0 9559 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_3287)(M);}else{M.v=RT.VOID;
return(_3288)(M);}};


var _3281=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3284,M.p));
return((M.p).label)(M);};

var _2736=function(M){if(--M.cbt<0){throw _2736;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 288 4 9878 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_3281)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3278=function(M){M.e.push(void(0),void(0),void(0));
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

var _3277=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29660;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3278)(M);};

var _3274=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3277)(M);}else{M.v=RT.VOID;
return(_3278)(M);}};

var _3273=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29660;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3274)(M);};

var _3276=function(M){if(M.v===false){return(_3273)(M);}else{M.v=RT.VOID;
return(_3274)(M);}};

var _3275=function(M){M.v=false;
return(_3276)(M);};

var _2735=function(M){if(--M.cbt<0){throw _2735;}

//"lambda body for #(struct:LamPositionalName filter whalesong/lang/private/list.rkt 265 0 8885 481)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3275)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3276)(M);}};

var _3268=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3267=function(M){M.v=M.e[M.e.length-7];
return(_3268)(M);};


var _3265=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_3270,M.p));
return((M.p).label)(M);};

var _2734=function(M){if(--M.cbt<0){throw _2734;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 273 2 9217 148)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3265)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3261=function(M){if(--M.cbt<0){throw _3261;}
M.e.length-=(M.a-1);
return(_3262)(M);};

var _3256=function(M){M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3254=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2732_c;
M.a=3;
M.c.push(new RT.CallFrame(_3258,M.p));
return(_2732)(M);};

var _2732=function(M){if(--M.cbt<0){throw _2732;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 254 5 8522 111)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3254)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3249=function(M){if(--M.cbt<0){throw _3249;}
M.e.length-=(M.a-1);
return(_3250)(M);};

var _2733=function(M){if(--M.cbt<0){throw _2733;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:258:4 whalesong/lang/private/list.rkt 258 4 8639 242)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym29650;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3262,M.p));
return((M.p).label)(M);};

var _3247=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2731)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2733)(M);}};

var _2730=function(M){if(--M.cbt<0){throw _2730;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3247)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2731)(M);}};




var _3237=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2729=function(M){if(--M.cbt<0){throw _2729;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 260 5 8698 182)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3237)(M);}else{M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_3240,M.p));
return((M.p).label)(M);}};

var _3233=function(M){if(--M.cbt<0){throw _3233;}
M.e.length-=(M.a-1);
return(_3234)(M);};


var _3226=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3229,M.p));
return((M.p).label)(M);};

var _2727=function(M){if(--M.cbt<0){throw _2727;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 241 5 8075 89)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3226)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3221=function(M){if(--M.cbt<0){throw _3221;}
M.e.length-=(M.a-1);
return(_3222)(M);};

var _2728=function(M){if(--M.cbt<0){throw _2728;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:243:4 whalesong/lang/private/list.rkt 243 4 8170 259)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym29651;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3234,M.p));
return((M.p).label)(M);};

var _3219=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2726)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2728)(M);}};

var _2725=function(M){if(--M.cbt<0){throw _2725;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3219)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2726)(M);}};




var _3209=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2724=function(M){if(--M.cbt<0){throw _2724;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 245 5 8229 199)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3209)(M);}else{M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_3212,M.p));
return((M.p).label)(M);}};


var _3203=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0),void(0));
M.e[M.e.length-1]="given procedure does not accept ~a arguments: ";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3208,M.p));
return((M.p).label)(M);};


var _3201=function(M){if(--M.cbt<0){throw _3201;}
M.e.length-=(M.a-1);
return(_3202)(M);};


var _3196=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="given procedure does not accept 2 arguments: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3194=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3199,M.p));
return((M.p).label)(M);};

var _3192=function(M){if(--M.cbt<0){throw _3192;}
M.e.length-=(M.a-1);
return(_3191)(M);};

var _3191=function(M){M.v=(M.e[M.e.length-6]===RT.NULL);
if(M.v===false){return(_3194)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3196)(M);}else{M.v=RT.VOID;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _3190=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_3193,M.p));
return((M.p).label)(M);};

var _3188=function(M){if(--M.cbt<0){throw _3188;}
M.e.length-=(M.a-1);
return(_3187)(M);};

var _3187=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_3190)(M);}else{M.v=RT.VOID;
return(_3191)(M);}};

var _3186=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_3189,M.p));
return((M.p).label)(M);};

var _2723=function(M){if(--M.cbt<0){throw _2723;}

//"lambda body for #(struct:LamPositionalName check-fold whalesong/lang/private/list.rkt 213 0 6824 1160)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3186)(M);}else{M.v=RT.VOID;
return(_3187)(M);}};

var _3181=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
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

var _3180=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]="given list does not have the same size as the first list: ";
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=3;
return(_3181)(M);};


var _3178=function(M){if(--M.cbt<0){throw _3178;}
M.e.length-=(M.a-1);
return(_3177)(M);};

var _3177=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_3183,M.p));
return((M.p).label)(M);};

var _3176=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_3179,M.p));
return((M.p).label)(M);};

var _3174=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=RT.isList(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_3176)(M);}else{M.v=RT.VOID;
return(_3177)(M);}};

var _2722=function(M){if(--M.cbt<0){throw _2722;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 222 8 7238 446)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_3174)(M);}else{M.v=RT.VOID;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3171=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _3167=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3170,M.p));
return((M.p).label)(M);};

var _2721=function(M){if(--M.cbt<0){throw _2721;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 207 2 6721 99)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3167)(M);}else{M.v=RT.makePair(M.e[M.e.length-2],RT.NULL);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2720=function(M){if(--M.cbt<0){throw _2720;}

//"lambda body for #(struct:LamPositionalName mapadd whalesong/lang/private/list.rkt 206 0 6693 128)"

M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_2721_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2721)(M);};

var _3159=function(M){M.e.push(void(0),void(0),void(0),void(0));
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

var _3158=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3159)(M);};

var _3161=function(M){if(M.v===false){return(_3158)(M);}else{M.v=RT.VOID;
return(_3159)(M);}};

var _3160=function(M){M.v=false;
return(_3161)(M);};

var _2719=function(M){if(--M.cbt<0){throw _2719;}

//"lambda body for #(struct:LamPositionalName assf whalesong/lang/private/list.rkt 193 11 6170 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3160)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3161)(M);}};

var _3154=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3148=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3140=function(M){M.e.push(void(0),void(0),void(0),void(0));
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



var _3127=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3135,M.p));
return((M.p).label)(M);};



var _3125=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3120=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3148)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3110=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3118,M.p));
return((M.p).label)(M);};



var _3108=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym29652;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3103=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3154)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2718=function(M){if(--M.cbt<0){throw _2718;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 196 13 6336 44)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_3103)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3106,M.p));
return((M.p).label)(M);}};

var _3098=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
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

var _3097=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_3098)(M);};

var _3100=function(M){if(M.v===false){return(_3097)(M);}else{M.v=RT.VOID;
return(_3098)(M);}};

var _3099=function(M){M.v=false;
return(_3100)(M);};

var _2717=function(M){if(--M.cbt<0){throw _2717;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:187:13 whalesong/lang/private/list.rkt 187 13 5882 258)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3099)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_3100)(M);}};

var _3093=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2716)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2717)(M);}};

var _2715=function(M){if(--M.cbt<0){throw _2715;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3093)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2716)(M);}};

var _3089=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3083=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3075=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
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



var _3063=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3070,M.p));
return((M.p).label)(M);};



var _3061=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3056=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3083)(M);}else{M.v=false;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _3047=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3054,M.p));
return((M.p).label)(M);};



var _3045=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3040=function(M){M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_3089)(M);}else{M.v=false;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2714=function(M){if(--M.cbt<0){throw _2714;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 191 14 6106 33)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_3040)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3043,M.p));
return((M.p).label)(M);}};

var _3036=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3030=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3022=function(M){M.e.push(void(0),void(0),void(0),void(0));
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



var _3012=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3017,M.p));
return((M.p).label)(M);};


var _3010=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _3005=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_3030)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2998=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3003,M.p));
return((M.p).label)(M);};


var _2996=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym29653;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2991=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_3036)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2713=function(M){if(--M.cbt<0){throw _2713;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 186 20 5837 30)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2991)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2994,M.p));
return((M.p).label)(M);}};

var _2712=function(M){if(--M.cbt<0){throw _2712;}

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

var _2985=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym29654;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2979=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym29654;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2971=function(M){M.e.push(void(0),void(0),void(0),void(0));
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



var _2961=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2966,M.p));
return((M.p).label)(M);};


var _2959=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym29654;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2954=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_2979)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2947=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2952,M.p));
return((M.p).label)(M);};


var _2945=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym29654;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2940=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2985)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2711=function(M){if(--M.cbt<0){throw _2711;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 183 13 5746 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2940)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2943,M.p));
return((M.p).label)(M);}};

_3179.mvr=_3178;
_3189.mvr=_3188;
_3193.mvr=_3192;
_3202.mvr=_3201;
_3222.mvr=_3221;
_3234.mvr=_3233;
_3250.mvr=_3249;
_3262.mvr=_3261;
_3339.mvr=_3340;
_3365.mvr=_3366;
_3372.mvr=_3373;
_3409.mvr=_3408;
_3415.mvr=_3414;
_3467.mvr=_3468;
_3477.mvr=_3478;
_3484.mvr=_3485;
_3491.mvr=_3492;
_3498.mvr=_3497;
_3541.mvr=_3540;
_3543.mvr=_3542;
_3545.mvr=_3544;
_3547.mvr=_3546;
_3549.mvr=_3548;
_3551.mvr=_3550;
_3553.mvr=_3552;
_3555.mvr=_3554;
_3557.mvr=_3556;
_3559.mvr=_3558;
_3561.mvr=_3560;
_3563.mvr=_3562;
_3565.mvr=_3564;
_3567.mvr=_3566;
_3569.mvr=_3568;
_3571.mvr=_3570;
_3573.mvr=_3572;
_3575.mvr=_3574;
_3577.mvr=_3576;
_3579.mvr=_3578;
_3581.mvr=_3580;
_3583.mvr=_3582;
_3585.mvr=_3584;
_3587.mvr=_3586;
_3589.mvr=_3588;
_3591.mvr=_3590;
_3593.mvr=_3592;
_3595.mvr=_3594;
_3597.mvr=_3596;
_3599.mvr=_3598;
_3601.mvr=_3600;
_3603.mvr=_3602;
_3605.mvr=_3604;
_3607.mvr=_3606;
_3609.mvr=_3608;
_3611.mvr=_3610;
_3613.mvr=_3612;
_3615.mvr=_3614;
_3617.mvr=_3616;
_3619.mvr=_3618;
_3621.mvr=_3620;
_3623.mvr=_3622;
_3625.mvr=_3624;
_3627.mvr=_3626;
_3629.mvr=_3628;
_3631.mvr=_3630;
_3637.mvr=_3636;
_3633.mvr=_3632;
_2785.mvr=_2784;
var sym29642=RT.makeSymbol("findf");
var sym29645=RT.makeSymbol("remq*");
var sym29646=RT.makeSymbol("remove*");
var sym29643=RT.makeSymbol("memf");
var sym29654=RT.makeSymbol("assv");
var sym29651=RT.makeSymbol("foldl");
var sym29650=RT.makeSymbol("foldr");
var sym29652=RT.makeSymbol("assf");
var sym29653=RT.makeSymbol("assoc");
var sym29656=RT.makeSymbol("compose1");
var sym29655=RT.makeSymbol("compose");
var sym29659=RT.makeSymbol("build-vector");
var sym29658=RT.makeSymbol("build-string");
var sym29657=RT.makeSymbol("build-list");
var sym29660=RT.makeSymbol("filter");
var sym29649=RT.makeSymbol("remove");
var sym29648=RT.makeSymbol("remq");
var sym29647=RT.makeSymbol("remv");
var sym29644=RT.makeSymbol("remv*");
var sym29641=RT.makeSymbol("assq");var _2697_c=new RT.Closure(_2697,5,void(0),"loop");
var _2696_c=new RT.Closure(_2696,3,void(0),"rloop");
var _2720_c=new RT.Closure(_2720,3,void(0),"mapadd");
var _2727_c=new RT.Closure(_2727,3,void(0),"loop");
var _2689_c=new RT.Closure(_2689,3,void(0),"loop");
var _2760_c=new RT.Closure(_2760,3,void(0),"loop");
var _2776_c=new RT.Closure(_2776,0,void(0),"...private/list.rkt:403:12");
var _2721_c=new RT.Closure(_2721,3,void(0),"loop");
var _2781_c=new RT.Closure(_2781,0,void(0),"...private/list.rkt:403:12");
var _2732_c=new RT.Closure(_2732,3,void(0),"loop");
var _2758_c=new RT.Closure(_2758,2,void(0),"pipeline1");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3639(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/map.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3830=function(M){if(M.v===false){return(_3827)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3833)(M);}else{M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _3831=function(M){M.v=false;
return(_3830)(M);};

var _3829=function(M){M.v=false;
return(_3830)(M);};

var _3665=function(M){if(--M.cbt<0){throw _3665;}

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

var _3663=function(M){if(--M.cbt<0){throw _3663;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:108:11 whalesong/lang/private/map.rkt 108 11 3671 559)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3854)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3856)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3858)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3860)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3863,M.p));
return((M.p).label)(M);}}}}};

var _3825=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3661)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3665)(M);}};

var _3824=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3825)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3663)(M);}};

var _3660=function(M){if(--M.cbt<0){throw _3660;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3824)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3661)(M);}};

var _3815=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _3811=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_3818,M.p));
return((M.p).label)(M);};

var _3658=function(M){if(--M.cbt<0){throw _3658;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 85 20 2864 238)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_3811)(M);}else{M.e.push(void(0),void(0));
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

var _3804=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3658_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3658)(M);};

var _3790=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3793=function(M){if(M.v===false){return(_3790)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3804)(M);}else{M.v=true;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};



var _3798=function(M){M.v=false;
return(_3793)(M);};

var _3796=function(M){M.v=false;
return(_3793)(M);};

var _3794=function(M){M.v=false;
return(_3793)(M);};

var _3792=function(M){M.v=false;
return(_3793)(M);};

var _3783=function(M){M.v=false;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _3779=function(M){M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3786,M.p));
return((M.p).label)(M);};

var _3656=function(M){if(--M.cbt<0){throw _3656;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 72 20 2369 163)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_3779)(M);}else{M.e.push(M.e[M.e.length-1]);
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

var _3772=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_3656_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_3656)(M);};

var _3766=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3769=function(M){if(M.v===false){return(_3766)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3772)(M);}else{M.v=true;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _3770=function(M){M.v=false;
return(_3769)(M);};

var _3768=function(M){M.v=false;
return(_3769)(M);};

var _3659=function(M){if(--M.cbt<0){throw _3659;}

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

var _3657=function(M){if(--M.cbt<0){throw _3657;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:77:11 whalesong/lang/private/map.rkt 77 11 2576 562)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3792)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3794)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3796)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3798)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3801,M.p));
return((M.p).label)(M);}}}}};

var _3764=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3655)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3659)(M);}};

var _3763=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3764)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3657)(M);}};

var _3654=function(M){if(--M.cbt<0){throw _3654;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3763)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3655)(M);}};

var _3743=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3746=function(M){if(M.v===false){return(_3743)(M);}else{M.e.push(void(0),void(0),void(0));
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



var _3751=function(M){M.v=false;
return(_3746)(M);};

var _3749=function(M){M.v=false;
return(_3746)(M);};

var _3747=function(M){M.v=false;
return(_3746)(M);};

var _3745=function(M){M.v=false;
return(_3746)(M);};

var _3733=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3736=function(M){if(M.v===false){return(_3733)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _3737=function(M){M.v=false;
return(_3736)(M);};

var _3735=function(M){M.v=false;
return(_3736)(M);};

var _3653=function(M){if(--M.cbt<0){throw _3653;}

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

var _3652=function(M){if(--M.cbt<0){throw _3652;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:48:11 whalesong/lang/private/map.rkt 48 11 1563 472)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3745)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3747)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3749)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3751)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3754,M.p));
return((M.p).label)(M);}}}}};

var _3731=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3651)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3653)(M);}};

var _3730=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3731)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3652)(M);}};

var _3650=function(M){if(--M.cbt<0){throw _3650;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3730)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3651)(M);}};

var _3726=function(M){if(--M.cbt<0){throw _3726;}
M.e.length-=(M.a-1);
return(_3727)(M);};

var _3724=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3727,M.p));
return((M.p).label)(M);};

var _3649=function(M){if(--M.cbt<0){throw _3649;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 54 16 1793 205)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3724)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3720=function(M){if(--M.cbt<0){throw _3720;}
M.e.length-=(M.a-1);
return(_3721)(M);};

var _3718=function(M){M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3721,M.p));
return((M.p).label)(M);};

var _3648=function(M){if(--M.cbt<0){throw _3648;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 43 16 1376 142)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3718)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3713=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _3709=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3712,M.p));
return((M.p).label)(M);};

var _3646=function(M){if(--M.cbt<0){throw _3646;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 27 16 872 201)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_3709)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3690=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3693=function(M){if(M.v===false){return(_3690)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3646_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3646)(M);}};



var _3698=function(M){M.v=false;
return(_3693)(M);};

var _3696=function(M){M.v=false;
return(_3693)(M);};

var _3694=function(M){M.v=false;
return(_3693)(M);};

var _3692=function(M){M.v=false;
return(_3693)(M);};

var _3687=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _3683=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3686,M.p));
return((M.p).label)(M);};

var _3644=function(M){if(--M.cbt<0){throw _3644;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 16 16 463 139)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_3683)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3672=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3675=function(M){if(M.v===false){return(_3672)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_3644_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_3644)(M);}};

var _3676=function(M){M.v=false;
return(_3675)(M);};

var _3674=function(M){M.v=false;
return(_3675)(M);};

var _3647=function(M){if(--M.cbt<0){throw _3647;}

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

var _3645=function(M){if(--M.cbt<0){throw _3645;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:21:11 whalesong/lang/private/map.rkt 21 11 642 463)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3692)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3694)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_3696)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_3698)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3701,M.p));
return((M.p).label)(M);}}}}};

var _3670=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_3643)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_3647)(M);}};

var _3669=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_3670)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_3645)(M);}};

var _3642=function(M){if(--M.cbt<0){throw _3642;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_3669)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_3643)(M);}};

var _3666=function(M){M.c.push(new RT.CallFrame(_3668,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/map.rkt"]=function(){return new RT.ModuleRecord("map",_3888);}
return(_3887)(M);};

var _3661=function(M){if(--M.cbt<0){throw _3661;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:97:11 whalesong/lang/private/map.rkt 97 11 3265 394)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3829)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3831)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_3830)(M);}}};

var _3655=function(M){if(--M.cbt<0){throw _3655;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:66:11 whalesong/lang/private/map.rkt 66 11 2168 396)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3768)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3770)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_3769)(M);}}};

var _3651=function(M){if(--M.cbt<0){throw _3651;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:39:11 whalesong/lang/private/map.rkt 39 11 1232 319)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3735)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3737)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_3736)(M);}}};

var _3643=function(M){if(--M.cbt<0){throw _3643;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:12:11 whalesong/lang/private/map.rkt 12 11 319 311)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_3674)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_3676)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_3675)(M);}}};

var _3901=function(M){return(_3666)(M);};

var _3900=function(M){if(--M.cbt<0){throw _3900;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("andmap2", prefix[selfMod.getPrefixOffset("andmap2")]);extNs.set("andmap", prefix[selfMod.getPrefixOffset("andmap2")]);ns.set("for-each2", prefix[selfMod.getPrefixOffset("for-each2")]);extNs.set("for-each", prefix[selfMod.getPrefixOffset("for-each2")]);ns.set("map2", prefix[selfMod.getPrefixOffset("map2")]);extNs.set("map", prefix[selfMod.getPrefixOffset("map2")]);ns.set("ormap2", prefix[selfMod.getPrefixOffset("ormap2")]);extNs.set("ormap", prefix[selfMod.getPrefixOffset("ormap2")]);}(M.modules["whalesong/lang/private/map.rkt"],M.modules["whalesong/lang/private/map.rkt"].getExports(),M.modules["whalesong/lang/private/map.rkt"].getExternalExports(),M.modules["whalesong/lang/private/map.rkt"].prefix));
return(M.p)(M);};

var _3898=function(M){if(--M.cbt<0){throw _3898;}
M.c.push(new RT.CallFrame(_3900,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3661,2,[M.e[M.e.length-4]],".../private/map.rkt:97:11");
M.e[M.e.length-2]=new RT.Closure(_3663,3,[M.e[M.e.length-4]],".../private/map.rkt:108:11");
M.e[M.e.length-3]=new RT.Closure(_3665,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:122:11");
M.v=new RT.Closure(_3660,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"ormap");
M.e.length-=3;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3896=function(M){if(--M.cbt<0){throw _3896;}
M.c.push(new RT.CallFrame(_3898,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3655,2,[M.e[M.e.length-4]],".../private/map.rkt:66:11");
M.e[M.e.length-2]=new RT.Closure(_3657,3,[M.e[M.e.length-4]],".../private/map.rkt:77:11");
M.e[M.e.length-3]=new RT.Closure(_3659,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:91:11");
M.v=new RT.Closure(_3654,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"andmap");
M.e.length-=3;
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3894=function(M){if(--M.cbt<0){throw _3894;}
M.c.push(new RT.CallFrame(_3896,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3651,2,[M.e[M.e.length-4]],".../private/map.rkt:39:11");
M.e[M.e.length-2]=new RT.Closure(_3652,3,[M.e[M.e.length-4]],".../private/map.rkt:48:11");
M.e[M.e.length-3]=new RT.Closure(_3653,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:60:11");
M.v=new RT.Closure(_3650,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"for-each");
M.e.length-=3;
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3892=function(M){if(--M.cbt<0){throw _3892;}
M.c.push(new RT.CallFrame(_3894,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3649,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3890=function(M){if(--M.cbt<0){throw _3890;}
M.c.push(new RT.CallFrame(_3892,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3648,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3668=function(M){if(--M.cbt<0){throw _3668;}
};

var _3878=function(M){if(--M.cbt<0){throw _3878;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_3880)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3865=function(M){if(--M.cbt<0){throw _3865;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3855)(M);};

var _3863=function(M){if(--M.cbt<0){throw _3863;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3865,M.p));
return((M.p).label)(M);};

var _3845=function(M){if(--M.cbt<0){throw _3845;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_3847)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3818=function(M){if(--M.cbt<0){throw _3818;}
if(M.v===false){return(_3815)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_3658_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_3658)(M);}};

var _3803=function(M){if(--M.cbt<0){throw _3803;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3793)(M);};

var _3801=function(M){if(--M.cbt<0){throw _3801;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3803,M.p));
return((M.p).label)(M);};

var _3786=function(M){if(--M.cbt<0){throw _3786;}
if(M.v===false){return(_3783)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_3656_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_3656)(M);}};

var _3756=function(M){if(--M.cbt<0){throw _3756;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3746)(M);};

var _3754=function(M){if(--M.cbt<0){throw _3754;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3756,M.p));
return((M.p).label)(M);};

var _3727=function(M){if(--M.cbt<0){throw _3727;}
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

var _3721=function(M){if(--M.cbt<0){throw _3721;}
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

var _3715=function(M){if(--M.cbt<0){throw _3715;}
M.e[M.e.length-2]=M.v;
return(_3713)(M);};

var _3712=function(M){if(--M.cbt<0){throw _3712;}
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
M.p=_3646_c;
M.a=3;
M.c.push(new RT.CallFrame(_3715,M.p));
return(_3646)(M);};

var _3703=function(M){if(--M.cbt<0){throw _3703;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_3693)(M);};

var _3701=function(M){if(--M.cbt<0){throw _3701;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3703,M.p));
return((M.p).label)(M);};

var _3689=function(M){if(--M.cbt<0){throw _3689;}
M.e[M.e.length-2]=M.v;
return(_3687)(M);};

var _3686=function(M){if(--M.cbt<0){throw _3686;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_3644_c;
M.a=2;
M.c.push(new RT.CallFrame(_3689,M.p));
return(_3644)(M);};

var _3899=function(M){if(--M.cbt<0){throw _3899;}
M.e.length-=(M.a-1);
return(_3900)(M);};

var _3897=function(M){if(--M.cbt<0){throw _3897;}
M.e.length-=(M.a-1);
return(_3898)(M);};

var _3895=function(M){if(--M.cbt<0){throw _3895;}
M.e.length-=(M.a-1);
return(_3896)(M);};

var _3893=function(M){if(--M.cbt<0){throw _3893;}
M.e.length-=(M.a-1);
return(_3894)(M);};

var _3891=function(M){if(--M.cbt<0){throw _3891;}
M.e.length-=(M.a-1);
return(_3892)(M);};

var _3889=function(M){if(--M.cbt<0){throw _3889;}
M.e.length-=(M.a-1);
return(_3890)(M);};

var _3887=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3888=function(M){M.modules["whalesong/lang/private/map.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("map2")||M.primitives["map2"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["map"],M.primitives["length"],M.params.currentNamespace.get("for-each2")||M.primitives["for-each2"],M.primitives["void"],M.primitives["for-each"],M.params.currentNamespace.get("andmap2")||M.primitives["andmap2"],M.primitives["andmap"],M.params.currentNamespace.get("ormap2")||M.primitives["ormap2"],M.primitives["ormap"],false,false]);M.e[M.e.length-1].names=["map2","procedure?","procedure-arity-includes?","map","length","for-each2","void","for-each","andmap2","andmap","ormap2","ormap",false,false];
M.modules["whalesong/lang/private/map.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3890,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_3643,2,[M.e[M.e.length-4]],".../private/map.rkt:12:11");
M.e[M.e.length-2]=new RT.Closure(_3645,3,[M.e[M.e.length-4]],".../private/map.rkt:21:11");
M.e[M.e.length-3]=new RT.Closure(_3647,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:33:11");
M.v=new RT.Closure(_3642,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"map");
M.e.length-=3;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3667=function(M){if(--M.cbt<0){throw _3667;}
M.e.length-=(M.a-1);
return(_3668)(M);};

var _3880=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_3664_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3664)(M);};


var _3873=function(M){M.e.push(void(0));
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
M.c.push(new RT.CallFrame(_3878,M.p));
return((M.p).label)(M);};

var _3664=function(M){if(--M.cbt<0){throw _3664;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 116 20 3959 236)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_3873)(M);}else{M.e.push(void(0),void(0));
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

var _3866=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_3664_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_3664)(M);};

var _3852=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3855=function(M){if(M.v===false){return(_3852)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3866)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};



var _3860=function(M){M.v=false;
return(_3855)(M);};

var _3858=function(M){M.v=false;
return(_3855)(M);};

var _3856=function(M){M.v=false;
return(_3855)(M);};

var _3854=function(M){M.v=false;
return(_3855)(M);};

var _3847=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_3662_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_3662)(M);};


var _3840=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3845,M.p));
return((M.p).label)(M);};

var _3662=function(M){if(--M.cbt<0){throw _3662;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 103 20 3466 162)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_3840)(M);}else{M.e.push(M.e[M.e.length-1]);
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

var _3833=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_3662_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_3662)(M);};

var _3827=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

_3721.mvr=_3720;
_3727.mvr=_3726;
_3890.mvr=_3889;
_3892.mvr=_3891;
_3894.mvr=_3893;
_3896.mvr=_3895;
_3898.mvr=_3897;
_3900.mvr=_3899;
_3668.mvr=_3667;
var _3664_c=new RT.Closure(_3664,3,void(0),"loop");
var _3644_c=new RT.Closure(_3644,2,void(0),"loop");
var _3646_c=new RT.Closure(_3646,3,void(0),"loop");
var _3656_c=new RT.Closure(_3656,2,void(0),"loop");
var _3658_c=new RT.Closure(_3658,3,void(0),"loop");
var _3662_c=new RT.Closure(_3662,2,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3901(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/with-handlers.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3935=function(M){if(--M.cbt<0){throw _3935;}
M.e.length-=(M.a-1);
return(_3936)(M);};

var _3933=function(M){if(--M.cbt<0){throw _3933;}
M.e.length-=(M.a-1);
return(_3934)(M);};

var _3931=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3932=function(M){M.modules["whalesong/lang/private/with-handlers.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("check-with-handlers-in-context")||M.primitives["check-with-handlers-in-context"],M.primitives["error"],M.params.currentNamespace.get("handler-prompt-key")||M.primitives["handler-prompt-key"],M.primitives["make-continuation-prompt-tag"],M.params.currentNamespace.get("call-handled-body")||M.primitives["call-handled-body"],M.primitives["exception-handler-key"],M.params.currentNamespace.get("select-handler")||M.primitives["select-handler"],M.primitives["raise"],M.primitives["caar"],M.primitives["cdar"],false,false,false]);M.e[M.e.length-1].names=["check-with-handlers-in-context","error","handler-prompt-key","make-continuation-prompt-tag","call-handled-body","exception-handler-key","select-handler","raise","caar","cdar",false,false,false];
M.modules["whalesong/lang/private/with-handlers.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3934,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3902,1,[M.e[M.e.length-1]],"check-with-handlers-in-context");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3909=function(M){if(--M.cbt<0){throw _3909;}
M.e.length-=(M.a-1);
return(_3910)(M);};

var _3907=function(M){if(--M.cbt<0){throw _3907;}

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

var _3921=function(M){M.e.push(void(0),void(0));
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


var _3919=function(M){M.e.push(void(0));
M.e[M.e.length-1]=(RT.testArgument(M,"caarpair",RT.isCaarPair,M.e[M.e.length-4],0,"caar")).first.first;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_3924,M.p));
return((M.p).label)(M);};

var _3906=function(M){if(--M.cbt<0){throw _3906;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/with-handlers.rkt 43 2 1236 135)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_3919)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-2]);
M.a=1;
M.v=M.primitives["raise"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3905=function(M){if(--M.cbt<0){throw _3905;}

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

var _3904=function(M){if(--M.cbt<0){throw _3904;}

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

var _3903=function(M){if(--M.cbt<0){throw _3903;}

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

var _3911=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym29779;
M.e[M.e.length-2]="exception handler used out of context";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3902=function(M){if(--M.cbt<0){throw _3902;}

//"lambda body for #(struct:LamPositionalName check-with-handlers-in-context whalesong/lang/private/with-handlers.rkt 10 0 239 202)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["continuation-prompt-available?"]._i(M);
M.e.pop();
if(M.v===false){return(_3911)(M);}else{M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _3908=function(M){M.c.push(new RT.CallFrame(_3910,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/with-handlers.rkt"]=function(){return new RT.ModuleRecord("with-handlers",_3932);}
return(_3931)(M);};

var _3947=function(M){return(_3908)(M);};

var _3946=function(M){if(--M.cbt<0){throw _3946;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/with-handlers.rkt"],M.modules["whalesong/lang/private/with-handlers.rkt"].getExports(),M.modules["whalesong/lang/private/with-handlers.rkt"].getExternalExports(),M.modules["whalesong/lang/private/with-handlers.rkt"].prefix));
return(M.p)(M);};

var _3944=function(M){if(--M.cbt<0){throw _3944;}
M.c.push(new RT.CallFrame(_3946,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3907,2,[M.e[M.e.length-1]],"select-handler");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3942=function(M){if(--M.cbt<0){throw _3942;}
M.c.push(new RT.CallFrame(_3944,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3906,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3940=function(M){if(--M.cbt<0){throw _3940;}
M.c.push(new RT.CallFrame(_3942,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3905,2,[M.e[M.e.length-1]],"call-handled-body");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3938=function(M){if(--M.cbt<0){throw _3938;}
M.c.push(new RT.CallFrame(_3940,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3904,1,[M.e[M.e.length-1]],"...ith-handlers.rkt:21:3");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3936=function(M){if(--M.cbt<0){throw _3936;}
M.c.push(new RT.CallFrame(_3938,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3903,1,[M.e[M.e.length-1]],"...ith-handlers.rkt:30:7");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3934=function(M){if(--M.cbt<0){throw _3934;}
M.c.push(new RT.CallFrame(_3936,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.a=0;
M.v=M.primitives["make-continuation-prompt-tag"]._i(M);
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3910=function(M){if(--M.cbt<0){throw _3910;}
};

var _3924=function(M){if(--M.cbt<0){throw _3924;}
if(M.v===false){return(_3921)(M);}else{M.e.push(void(0));
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

var _3945=function(M){if(--M.cbt<0){throw _3945;}
M.e.length-=(M.a-1);
return(_3946)(M);};

var _3943=function(M){if(--M.cbt<0){throw _3943;}
M.e.length-=(M.a-1);
return(_3944)(M);};

var _3941=function(M){if(--M.cbt<0){throw _3941;}
M.e.length-=(M.a-1);
return(_3942)(M);};

var _3939=function(M){if(--M.cbt<0){throw _3939;}
M.e.length-=(M.a-1);
return(_3940)(M);};

var _3937=function(M){if(--M.cbt<0){throw _3937;}
M.e.length-=(M.a-1);
return(_3938)(M);};

_3934.mvr=_3933;
_3936.mvr=_3935;
_3938.mvr=_3937;
_3940.mvr=_3939;
_3942.mvr=_3941;
_3944.mvr=_3943;
_3946.mvr=_3945;
_3910.mvr=_3909;
var sym29779=RT.makeSymbol("with-handlers");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3947(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/call-ec.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3957=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3956=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_3957)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_3957)(M);}};

var _3949=function(M){if(--M.cbt<0){throw _3949;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:14:3 whalesong/lang/private/call-ec.rkt 14 3 308 334)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1],M.p.closedVals[2]);
M.e.push(M.e[M.e.length-2]);
M.v=new RT.Closure(_3950,(RT.makeArityAtLeast(0)),[M.e[M.e.length-4],M.e[M.e.length-2]],"...vate/call-ec.rkt:15:11");
M.a=1;
if(M.a===0){return(_3960)(M);}else{M.e.push(M.v);
return(_3960)(M);}};

var _3948=function(M){if(--M.cbt<0){throw _3948;}

//"lambda body for #(struct:LamPositionalName call-with-escape-continuation whalesong/lang/private/call-ec.rkt 11 0 175 474)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(sym29816);
M.a=1;
M.v=M.primitives["make-continuation-prompt-tag"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["call-with-continuation-prompt"];
M.v=new RT.Closure(_3949,0,[M.e[M.e.length-4],M.e[M.e.length-5],M.e[M.e.length-3]],"...vate/call-ec.rkt:14:3");
M.a=1;
if(M.a===0){return(_3956)(M);}else{M.e.push(M.v);
return(_3956)(M);}};

var _3952=function(M){M.c.push(new RT.CallFrame(_3954,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/call-ec.rkt"]=function(){return new RT.ModuleRecord("call-ec",_3973);}
return(_3972)(M);};

var _3978=function(M){return(_3952)(M);};

var _3977=function(M){if(--M.cbt<0){throw _3977;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);extNs.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);ns.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);extNs.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);}(M.modules["whalesong/lang/private/call-ec.rkt"],M.modules["whalesong/lang/private/call-ec.rkt"].getExports(),M.modules["whalesong/lang/private/call-ec.rkt"].getExternalExports(),M.modules["whalesong/lang/private/call-ec.rkt"].prefix));
return(M.p)(M);};

var _3975=function(M){if(--M.cbt<0){throw _3975;}
M.c.push(new RT.CallFrame(_3977,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][0];
M.e[M.e.length-2]=sym29817;
M.v=M.primitives["procedure-rename"]._i(M);
M.e.length-=2;
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3954=function(M){if(--M.cbt<0){throw _3954;}
};

var _3976=function(M){if(--M.cbt<0){throw _3976;}
M.e.length-=(M.a-1);
return(_3977)(M);};

var _3974=function(M){if(--M.cbt<0){throw _3974;}
M.e.length-=(M.a-1);
return(_3975)(M);};

var _3972=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3973=function(M){M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("call-with-escape-continuation")||M.primitives["call-with-escape-continuation"],M.primitives["make-continuation-prompt-tag"],M.primitives["error"],M.params.currentNamespace.get("call/ec")||M.primitives["call/ec"],M.primitives["procedure-rename"]]);M.e[M.e.length-1].names=["call-with-escape-continuation","make-continuation-prompt-tag","error","call/ec","procedure-rename"];
M.modules["whalesong/lang/private/call-ec.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3975,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_3948,1,[M.e[M.e.length-1]],"call-with-escape-continuation");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3953=function(M){if(--M.cbt<0){throw _3953;}
M.e.length-=(M.a-1);
return(_3954)(M);};

var _3967=function(M){M.v=M.v;
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3966=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_3967)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_3967)(M);}};

var _3951=function(M){if(--M.cbt<0){throw _3951;}

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

var _3965=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["abort-current-continuation"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=new RT.Closure(_3951,0,[M.e[M.e.length-5]],"...vate/call-ec.rkt:19:43");
M.a=1;
if(M.a===0){return(_3966)(M);}else{M.e.push(M.v);
return(_3966)(M);}};

var _3964=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym29818;
M.e[M.e.length-2]="escape continuation used out of context";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=2;
return(_3965)(M);};

var _3961=function(M){M.v=M.v;
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3960=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-2];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_3961)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_3961)(M);}};

var _3950=function(M){if(--M.cbt<0){throw _3950;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:15:11 whalesong/lang/private/call-ec.rkt 15 11 330 310)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["continuation-prompt-available?"]._i(M);
M.e.pop();
if(M.v===false){return(_3964)(M);}else{M.v=RT.VOID;
return(_3965)(M);}};

_3975.mvr=_3974;
_3977.mvr=_3976;
_3954.mvr=_3953;
var sym29816=RT.makeSymbol("escape");
var sym29818=RT.makeSymbol("call-with-escape-continuation");
var sym29817=RT.makeSymbol("call/ec");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3978(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Applications/Racket v6.1/collects/racket/private/modbeg.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _3994=function(M){return(_3980)(M);};

var _3993=function(M){if(--M.cbt<0){throw _3993;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/racket/private/modbeg.rkt"],M.modules["collects/racket/private/modbeg.rkt"].getExports(),M.modules["collects/racket/private/modbeg.rkt"].getExternalExports(),M.modules["collects/racket/private/modbeg.rkt"].prefix));
return(M.p)(M);};

var _3982=function(M){if(--M.cbt<0){throw _3982;}
};

var _3984=function(M){if(--M.cbt<0){throw _3984;}
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _3992=function(M){if(--M.cbt<0){throw _3992;}
M.e.length-=(M.a-1);
return(_3993)(M);};

var _3990=function(M){if(--M.cbt<0){throw _3990;}
M.e.length-=(M.a-1);
return(_3991)(M);};

var _3991=function(M){if(--M.cbt<0){throw _3991;}
M.e.push([M.params.currentNamespace.get("print-values")||M.primitives["print-values"]]);M.e[M.e.length-1].names=["print-values"];
M.modules["collects/racket/private/modbeg.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_3993,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_3979_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3989=function(M){if(M.modules["collects/syntax/wrap-modbeg.rkt"].isInvoked!==false){return(_3991)(M);}else{M.c.push(new RT.CallFrame(_3991,M.p));
return(M.modules["collects/syntax/wrap-modbeg.rkt"].label)(M);}};

var _3987=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3988=function(M){M.modules["collects/racket/private/modbeg.rkt"].isInvoked=true;
if((M.installedModules["collects/syntax/wrap-modbeg.rkt"]!==void(0)&&M.modules["collects/syntax/wrap-modbeg.rkt"]!==undefined)!==false){return(_3989)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/syntax/wrap-modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_3989);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_3989)(M);}};

var _3981=function(M){if(--M.cbt<0){throw _3981;}
M.e.length-=(M.a-1);
return(_3982)(M);};

var _3983=function(M){if(--M.cbt<0){throw _3983;}
M.e.length-=(M.a-1);
return(_3984)(M);};

var _3979=function(M){if(--M.cbt<0){throw _3979;}

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
M.c.push(new RT.CallFrame(_3984,M.p));
return((M.p).label)(M);};

var _3980=function(M){M.c.push(new RT.CallFrame(_3982,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/racket/private/modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_3988);}
return(_3987)(M);};

_3984.mvr=_3983;
_3991.mvr=_3990;
_3993.mvr=_3992;
_3982.mvr=_3981;
var _3979_c=new RT.Closure(_3979,(RT.makeArityAtLeast(0)),void(0),"print-values");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_3994(M); }))(plt.runtime.currentMachine,
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
var _3997=function(M){if(--M.cbt<0){throw _3997;}
};

var _3998=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _3999=function(M){M.modules["collects/syntax/wrap-modbeg.rkt"].isInvoked=true;
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["collects/syntax/wrap-modbeg.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/syntax/wrap-modbeg.rkt"],M.modules["collects/syntax/wrap-modbeg.rkt"].getExports(),M.modules["collects/syntax/wrap-modbeg.rkt"].getExternalExports(),M.modules["collects/syntax/wrap-modbeg.rkt"].prefix));
return(M.p)(M);};

var _3996=function(M){if(--M.cbt<0){throw _3996;}
M.e.length-=(M.a-1);
return(_3997)(M);};

var _3995=function(M){M.c.push(new RT.CallFrame(_3997,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/syntax/wrap-modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_3999);}
return(_3998)(M);};

var _4000=function(M){return(_3995)(M);};

_3997.mvr=_3996;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4000(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/hash.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4001=function(M){if(--M.cbt<0){throw _4001;}

//"lambda body for #(struct:LamPositionalName hash-map whalesong/lang/private/hash.rkt 5 0 64 388)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_4008)(M);}else{M.v=RT.VOID;
return(_4009)(M);}};

var _4005=function(M){M.c.push(new RT.CallFrame(_4007,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/hash.rkt"]=function(){return new RT.ModuleRecord("hash",_4043);}
return(_4042)(M);};

var _4050=function(M){return(_4005)(M);};

var _4049=function(M){if(--M.cbt<0){throw _4049;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);extNs.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);ns.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);extNs.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);}(M.modules["whalesong/lang/private/hash.rkt"],M.modules["whalesong/lang/private/hash.rkt"].getExports(),M.modules["whalesong/lang/private/hash.rkt"].getExternalExports(),M.modules["whalesong/lang/private/hash.rkt"].prefix));
return(M.p)(M);};

var _4047=function(M){if(--M.cbt<0){throw _4047;}
M.c.push(new RT.CallFrame(_4049,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4004,2,[M.e[M.e.length-1]],"hash-for-each");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4045=function(M){if(--M.cbt<0){throw _4045;}
M.c.push(new RT.CallFrame(_4047,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4003,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4007=function(M){if(--M.cbt<0){throw _4007;}
};

var _4031=function(M){if(--M.cbt<0){throw _4031;}
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

var _4029=function(M){if(--M.cbt<0){throw _4029;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4031,M.p));
return((M.p).label)(M);};

var _4025=function(M){if(--M.cbt<0){throw _4025;}
M.e[M.e.length-2]=M.v;
return(_4023)(M);};

var _4022=function(M){if(--M.cbt<0){throw _4022;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_4002_c;
M.a=3;
M.c.push(new RT.CallFrame(_4025,M.p));
return(_4002)(M);};

var _4020=function(M){if(--M.cbt<0){throw _4020;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4022,M.p));
return((M.p).label)(M);};

var _4048=function(M){if(--M.cbt<0){throw _4048;}
M.e.length-=(M.a-1);
return(_4049)(M);};

var _4046=function(M){if(--M.cbt<0){throw _4046;}
M.e.length-=(M.a-1);
return(_4047)(M);};

var _4044=function(M){if(--M.cbt<0){throw _4044;}
M.e.length-=(M.a-1);
return(_4045)(M);};

var _4042=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4043=function(M){M.modules["whalesong/lang/private/hash.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("hash-map")||M.primitives["hash-map"],M.primitives["raise-type-error"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["hash-keys"],M.params.currentNamespace.get("hash-for-each")||M.primitives["hash-for-each"],M.primitives["void"],false]);M.e[M.e.length-1].names=["hash-map","raise-type-error","procedure?","procedure-arity-includes?","hash-keys","hash-for-each","void",false];
M.modules["whalesong/lang/private/hash.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4045,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4001,2,[M.e[M.e.length-1]],"hash-map");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4006=function(M){if(--M.cbt<0){throw _4006;}
M.e.length-=(M.a-1);
return(_4007)(M);};

var _4037=function(M){M.e.push(void(0),void(0),void(0));
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

var _4036=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29832;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_4037)(M);};

var _4039=function(M){if(M.v===false){return(_4036)(M);}else{M.v=RT.VOID;
return(_4037)(M);}};

var _4038=function(M){M.v=false;
return(_4039)(M);};

var _4035=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_4038)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_4039)(M);}};

var _4034=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29832;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_4035)(M);};

var _4004=function(M){if(--M.cbt<0){throw _4004;}

//"lambda body for #(struct:LamPositionalName hash-for-each whalesong/lang/private/hash.rkt 17 0 455 413)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_4034)(M);}else{M.v=RT.VOID;
return(_4035)(M);}};

var _4030=function(M){if(--M.cbt<0){throw _4030;}
M.e.length-=(M.a-1);
return(_4031)(M);};


var _4026=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_4029,M.p));
return((M.p).label)(M);};

var _4003=function(M){if(--M.cbt<0){throw _4003;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 22 2 694 173)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_4026)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4023=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _4017=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_4020,M.p));
return((M.p).label)(M);};

var _4002=function(M){if(--M.cbt<0){throw _4002;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 10 2 288 163)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_4017)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4011=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_4002_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_4002)(M);};

var _4010=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29833;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_4011)(M);};

var _4013=function(M){if(M.v===false){return(_4010)(M);}else{M.v=RT.VOID;
return(_4011)(M);}};

var _4012=function(M){M.v=false;
return(_4013)(M);};

var _4009=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_4012)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_4013)(M);}};

var _4008=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29833;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_4009)(M);};

_4031.mvr=_4030;
_4045.mvr=_4044;
_4047.mvr=_4046;
_4049.mvr=_4048;
_4007.mvr=_4006;
var sym29832=RT.makeSymbol("hash-for-each");
var sym29833=RT.makeSymbol("hash-map");var _4002_c=new RT.Closure(_4002,3,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4050(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/qq-and-or.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4061=function(M){if(--M.cbt<0){throw _4061;}
M.e.length-=(M.a-1);
return(_4062)(M);};

var _4059=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4060=function(M){M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("qq-append")||M.primitives["qq-append"]]);M.e[M.e.length-1].names=["qq-append"];
M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4062,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_4051_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4053=function(M){if(--M.cbt<0){throw _4053;}
M.e.length-=(M.a-1);
return(_4054)(M);};

var _4055=function(M){M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym29836;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-4];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4051=function(M){if(--M.cbt<0){throw _4051;}

//"lambda body for #(struct:LamPositionalName qq-append whalesong/lang/private/qq-and-or.rkt 149 4 10310 107)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_4055)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["append"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _4052=function(M){M.c.push(new RT.CallFrame(_4054,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/qq-and-or.rkt"]=function(){return new RT.ModuleRecord("qq-and-or",_4060);}
return(_4059)(M);};

var _4063=function(M){return(_4052)(M);};

var _4062=function(M){if(--M.cbt<0){throw _4062;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/qq-and-or.rkt"],M.modules["whalesong/lang/private/qq-and-or.rkt"].getExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].getExternalExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix));
return(M.p)(M);};

var _4054=function(M){if(--M.cbt<0){throw _4054;}
};

_4062.mvr=_4061;
_4054.mvr=_4053;
var sym29836=RT.makeSymbol("unquote-splicing");var _4051_c=new RT.Closure(_4051,2,void(0),"qq-append");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4063(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <UninterpretedSource /Users/crused/whalesong/whalesong/world/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/world/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/world/main.rkt",
        function(M) {
            
        var afterName29265 = function() { 
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
                                                                                     afterName29265,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName29265();
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
var _4069=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4071)(M);}else{M.c.push(new RT.CallFrame(_4071,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4067=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4068=function(M){M.modules["whalesong/image.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4069)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4069);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4069)(M);}};

var _4065=function(M){if(--M.cbt<0){throw _4065;}
M.e.length-=(M.a-1);
return(_4066)(M);};

var _4064=function(M){M.c.push(new RT.CallFrame(_4066,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image.rkt"]=function(){return new RT.ModuleRecord("image",_4068);}
return(_4067)(M);};

var _4075=function(M){return(_4064)(M);};

var _4066=function(M){if(--M.cbt<0){throw _4066;}
};

var _4073=function(M){if(--M.cbt<0){throw _4073;}
M.e.length-=(M.a-1);
return(_4074)(M);};

var _4074=function(M){if(--M.cbt<0){throw _4074;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image.rkt"],M.modules["whalesong/image.rkt"].getExports(),M.modules["whalesong/image.rkt"].getExternalExports(),M.modules["whalesong/image.rkt"].prefix));
return(M.p)(M);};

var _4072=function(M){if(M.modules["whalesong/image/main.rkt"].isInvoked!==false){return(_4074)(M);}else{M.c.push(new RT.CallFrame(_4074,M.p));
return(M.modules["whalesong/image/main.rkt"].label)(M);}};

var _4070=function(M){if(--M.cbt<0){throw _4070;}
M.e.length-=(M.a-1);
return(_4071)(M);};

var _4071=function(M){if(--M.cbt<0){throw _4071;}
if((M.installedModules["whalesong/image/main.rkt"]!==void(0)&&M.modules["whalesong/image/main.rkt"]!==undefined)!==false){return(_4072)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4072);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4072)(M);}};

_4071.mvr=_4070;
_4074.mvr=_4073;
_4066.mvr=_4065;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4075(M); }))(plt.runtime.currentMachine,
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
var _4089=function(M){if(--M.cbt<0){throw _4089;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image/main.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image/main.rkt"],M.modules["whalesong/image/main.rkt"].getExports(),M.modules["whalesong/image/main.rkt"].getExternalExports(),M.modules["whalesong/image/main.rkt"].prefix));
return(M.p)(M);};

var _4087=function(M){if(M.modules["whalesong/image/private/color.rkt"].isInvoked!==false){return(_4089)(M);}else{M.c.push(new RT.CallFrame(_4089,M.p));
return(M.modules["whalesong/image/private/color.rkt"].label)(M);}};

var _4085=function(M){if(--M.cbt<0){throw _4085;}
M.e.length-=(M.a-1);
return(_4086)(M);};

var _4086=function(M){if(--M.cbt<0){throw _4086;}
if((M.installedModules["whalesong/image/private/color.rkt"]!==void(0)&&M.modules["whalesong/image/private/color.rkt"]!==undefined)!==false){return(_4087)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/color.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4087);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4087)(M);}};

var _4084=function(M){if(M.modules["whalesong/image/private/main.rkt"].isInvoked!==false){return(_4086)(M);}else{M.c.push(new RT.CallFrame(_4086,M.p));
return(M.modules["whalesong/image/private/main.rkt"].label)(M);}};

var _4082=function(M){if(--M.cbt<0){throw _4082;}
M.e.length-=(M.a-1);
return(_4083)(M);};

var _4083=function(M){if(--M.cbt<0){throw _4083;}
if((M.installedModules["whalesong/image/private/main.rkt"]!==void(0)&&M.modules["whalesong/image/private/main.rkt"]!==undefined)!==false){return(_4084)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4084);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4084)(M);}};

var _4081=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4083)(M);}else{M.c.push(new RT.CallFrame(_4083,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4079=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4080=function(M){M.modules["whalesong/image/main.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4081)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4081);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4081)(M);}};

var _4077=function(M){if(--M.cbt<0){throw _4077;}
M.e.length-=(M.a-1);
return(_4078)(M);};

var _4076=function(M){M.c.push(new RT.CallFrame(_4078,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/main.rkt"]=function(){return new RT.ModuleRecord("main",_4080);}
return(_4079)(M);};

var _4090=function(M){return(_4076)(M);};

var _4078=function(M){if(--M.cbt<0){throw _4078;}
};

var _4088=function(M){if(--M.cbt<0){throw _4088;}
M.e.length-=(M.a-1);
return(_4089)(M);};

_4083.mvr=_4082;
_4086.mvr=_4085;
_4089.mvr=_4088;
_4078.mvr=_4077;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4090(M); }))(plt.runtime.currentMachine,
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
var _4148=function(M){if(--M.cbt<0){throw _4148;}

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

var _4152=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_4147)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_4148)(M);}};

var _4146=function(M){if(--M.cbt<0){throw _4146;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_4152)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_4147)(M);}};

var _4149=function(M){M.c.push(new RT.CallFrame(_4151,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/private/color.rkt"]=function(){return new RT.ModuleRecord("color",_4159);}
return(_4158)(M);};

var _4166=function(M){M.e.splice(M.e.length-11,5);
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

var _4147=function(M){if(--M.cbt<0){throw _4147;}

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

var _4175=function(M){return(_4149)(M);};

var _4174=function(M){if(--M.cbt<0){throw _4174;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);extNs.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);ns.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);extNs.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);ns.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);extNs.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);ns.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);extNs.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);ns.set("color?", prefix[selfMod.getPrefixOffset("color?")]);extNs.set("color?", prefix[selfMod.getPrefixOffset("color?")]);ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("make-color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);extNs.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);}(M.modules["whalesong/image/private/color.rkt"],M.modules["whalesong/image/private/color.rkt"].getExports(),M.modules["whalesong/image/private/color.rkt"].getExternalExports(),M.modules["whalesong/image/private/color.rkt"].prefix));
return(M.p)(M);};

var _4171=RT.si_context_expected(7);

var _4168=RT.si_context_expected(5);

var _4164=function(M){if(--M.cbt<0){throw _4164;}
M.c.push(new RT.CallFrame(_4174,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_4147,3,[M.e[M.e.length-3]],"...rivate/color.rkt:12:4");
M.e[M.e.length-2]=new RT.Closure(_4148,4,[M.e[M.e.length-3]],"...rivate/color.rkt:14:4");
M.v=new RT.Closure(_4146,RT.makePair(3,RT.makePair(4,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"-color");
M.e.length-=2;
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4151=function(M){if(--M.cbt<0){throw _4151;}
};

var _4173=function(M){if(--M.cbt<0){throw _4173;}
M.e.length-=(M.a-1);
return(_4174)(M);};

var _4170=function(M){if(--M.cbt<0){throw _4170;}
if((M.a-7)===0){return(_4166)(M);}else{RT.si_context_expected(7)(M);
}};

var _4169=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym30318;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym30319;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym30320;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym30321;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4171,M.p));
return((M.p).label)(M);};

var _4167=function(M){if(--M.cbt<0){throw _4167;}
if((M.a-5)===0){return(_4169)(M);}else{RT.si_context_expected(5)(M);
}};

var _4163=function(M){if(--M.cbt<0){throw _4163;}
M.e.length-=(M.a-1);
return(_4164)(M);};

var _4161=function(M){if(--M.cbt<0){throw _4161;}
M.e.length-=(M.a-1);
return(_4162)(M);};

var _4162=function(M){if(--M.cbt<0){throw _4162;}
M.e.push([M.params.currentNamespace.get("struct:color")||M.primitives["struct:color"],M.params.currentNamespace.get("make-color")||M.primitives["make-color"],M.params.currentNamespace.get("color?")||M.primitives["color?"],M.params.currentNamespace.get("color-red")||M.primitives["color-red"],M.params.currentNamespace.get("color-green")||M.primitives["color-green"],M.params.currentNamespace.get("color-blue")||M.primitives["color-blue"],M.params.currentNamespace.get("color-alpha")||M.primitives["color-alpha"],M.params.currentNamespace.get("-color")||M.primitives["-color"]]);M.e[M.e.length-1].names=["struct:color","make-color","color?","color-red","color-green","color-blue","color-alpha","-color"];
M.modules["whalesong/image/private/color.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4164,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym30322;
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
M.v=sym30322;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4168,M.p));
return((M.p).label)(M);};

var _4160=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4162)(M);}else{M.c.push(new RT.CallFrame(_4162,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4158=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4159=function(M){M.modules["whalesong/image/private/color.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4160)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4160);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4160)(M);}};

var _4150=function(M){if(--M.cbt<0){throw _4150;}
M.e.length-=(M.a-1);
return(_4151)(M);};

_4162.mvr=_4161;
_4168.mvr=_4167;
_4171.mvr=_4170;
_4164.mvr=_4163;
_4174.mvr=_4173;
_4151.mvr=_4150;
var sym30322=RT.makeSymbol("color");
var sym30321=RT.makeSymbol("alpha");
var sym30320=RT.makeSymbol("blue");
var sym30319=RT.makeSymbol("green");
var sym30318=RT.makeSymbol("red");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4175(M); }))(plt.runtime.currentMachine,
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
            
        var afterName30276 = function() { 
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
                                                                                     afterName30276,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName30276();
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/whalesong.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4202=function(M){return(_4176)(M);};

var _4178=function(M){if(--M.cbt<0){throw _4178;}
};

var _4200=function(M){if(--M.cbt<0){throw _4200;}
M.e.length-=(M.a-1);
return(_4201)(M);};

var _4201=function(M){if(--M.cbt<0){throw _4201;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/whalesong.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exn:fail:contract:arity?", M.primitives["exn:fail:contract:arity?"]);ns.set("exn:fail:contract?", M.primitives["exn:fail:contract?"]);ns.set("exn:fail?", M.primitives["exn:fail?"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/whalesong.rkt"],M.modules["whalesong/lang/whalesong.rkt"].getExports(),M.modules["whalesong/lang/whalesong.rkt"].getExternalExports(),M.modules["whalesong/lang/whalesong.rkt"].prefix));
return(M.p)(M);};

var _4199=function(M){if(M.modules["whalesong/lang/posn.rkt"].isInvoked!==false){return(_4201)(M);}else{M.c.push(new RT.CallFrame(_4201,M.p));
return(M.modules["whalesong/lang/posn.rkt"].label)(M);}};

var _4197=function(M){if(--M.cbt<0){throw _4197;}
M.e.length-=(M.a-1);
return(_4198)(M);};

var _4198=function(M){if(--M.cbt<0){throw _4198;}
if((M.installedModules["whalesong/lang/posn.rkt"]!==void(0)&&M.modules["whalesong/lang/posn.rkt"]!==undefined)!==false){return(_4199)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/posn.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4199);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4199)(M);}};

var _4196=function(M){if(M.modules["whalesong/lang/bool.rkt"].isInvoked!==false){return(_4198)(M);}else{M.c.push(new RT.CallFrame(_4198,M.p));
return(M.modules["whalesong/lang/bool.rkt"].label)(M);}};

var _4194=function(M){if(--M.cbt<0){throw _4194;}
M.e.length-=(M.a-1);
return(_4195)(M);};

var _4195=function(M){if(--M.cbt<0){throw _4195;}
if((M.installedModules["whalesong/lang/bool.rkt"]!==void(0)&&M.modules["whalesong/lang/bool.rkt"]!==undefined)!==false){return(_4196)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/bool.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4196);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4196)(M);}};

var _4193=function(M){if(M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked!==false){return(_4195)(M);}else{M.c.push(new RT.CallFrame(_4195,M.p));
return(M.modules["whalesong/lang/check-expect/check-expect.rkt"].label)(M);}};

var _4191=function(M){if(--M.cbt<0){throw _4191;}
M.e.length-=(M.a-1);
return(_4192)(M);};

var _4192=function(M){if(--M.cbt<0){throw _4192;}
if((M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]!==void(0)&&M.modules["whalesong/lang/check-expect/check-expect.rkt"]!==undefined)!==false){return(_4193)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/check-expect/check-expect.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4193);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4193)(M);}};

var _4190=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_4192)(M);}else{M.c.push(new RT.CallFrame(_4192,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _4188=function(M){if(--M.cbt<0){throw _4188;}
M.e.length-=(M.a-1);
return(_4189)(M);};

var _4189=function(M){if(--M.cbt<0){throw _4189;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_4190)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4190);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4190)(M);}};

var _4187=function(M){if(M.modules["whalesong/lang/private/shared.rkt"].isInvoked!==false){return(_4189)(M);}else{M.c.push(new RT.CallFrame(_4189,M.p));
return(M.modules["whalesong/lang/private/shared.rkt"].label)(M);}};

var _4185=function(M){if(--M.cbt<0){throw _4185;}
M.e.length-=(M.a-1);
return(_4186)(M);};

var _4186=function(M){if(--M.cbt<0){throw _4186;}
if((M.installedModules["whalesong/lang/private/shared.rkt"]!==void(0)&&M.modules["whalesong/lang/private/shared.rkt"]!==undefined)!==false){return(_4187)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/shared.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4187);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4187)(M);}};

var _4184=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_4186)(M);}else{M.c.push(new RT.CallFrame(_4186,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _4182=function(M){if(--M.cbt<0){throw _4182;}
M.e.length-=(M.a-1);
return(_4183)(M);};

var _4183=function(M){if(--M.cbt<0){throw _4183;}
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_4184)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4184);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4184)(M);}};

var _4181=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4183)(M);}else{M.c.push(new RT.CallFrame(_4183,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4179=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4180=function(M){M.modules["whalesong/lang/whalesong.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4181)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4181);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4181)(M);}};

var _4177=function(M){if(--M.cbt<0){throw _4177;}
M.e.length-=(M.a-1);
return(_4178)(M);};

var _4176=function(M){M.c.push(new RT.CallFrame(_4178,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/whalesong.rkt"]=function(){return new RT.ModuleRecord("whalesong",_4180);}
return(_4179)(M);};

_4183.mvr=_4182;
_4186.mvr=_4185;
_4189.mvr=_4188;
_4192.mvr=_4191;
_4195.mvr=_4194;
_4198.mvr=_4197;
_4201.mvr=_4200;
_4178.mvr=_4177;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4202(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/shared.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4213=function(M){return(_4203)(M);};

var _4212=function(M){if(--M.cbt<0){throw _4212;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/shared.rkt"],M.modules["whalesong/lang/private/shared.rkt"].getExports(),M.modules["whalesong/lang/private/shared.rkt"].getExternalExports(),M.modules["whalesong/lang/private/shared.rkt"].prefix));
return(M.p)(M);};

var _4205=function(M){if(--M.cbt<0){throw _4205;}
};

var _4211=function(M){if(--M.cbt<0){throw _4211;}
M.e.length-=(M.a-1);
return(_4212)(M);};

var _4209=function(M){if(--M.cbt<0){throw _4209;}
M.e.length-=(M.a-1);
return(_4210)(M);};

var _4210=function(M){if(--M.cbt<0){throw _4210;}
M.e.push([M.params.currentNamespace.get("undefined")||M.primitives["undefined"],M.primitives["unique-undefined-value"]]);M.e[M.e.length-1].names=["undefined","unique-undefined-value"];
M.modules["whalesong/lang/private/shared.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4212,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=M.primitives["unique-undefined-value"];
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4208=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_4210)(M);}else{M.c.push(new RT.CallFrame(_4210,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _4206=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4207=function(M){M.modules["whalesong/lang/private/shared.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_4208)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4208);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4208)(M);}};

var _4204=function(M){if(--M.cbt<0){throw _4204;}
M.e.length-=(M.a-1);
return(_4205)(M);};

var _4203=function(M){M.c.push(new RT.CallFrame(_4205,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/shared.rkt"]=function(){return new RT.ModuleRecord("shared",_4207);}
return(_4206)(M);};

_4210.mvr=_4209;
_4212.mvr=_4211;
_4205.mvr=_4204;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4213(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/private/traced-app.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4220=function(M){if(--M.cbt<0){throw _4220;}
M.c.push(new RT.CallFrame(_4222,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(sym31630);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4216=function(M){if(--M.cbt<0){throw _4216;}
};

var _4221=function(M){if(--M.cbt<0){throw _4221;}
M.e.length-=(M.a-1);
return(_4222)(M);};

var _4219=function(M){if(--M.cbt<0){throw _4219;}
M.e.length-=(M.a-1);
return(_4220)(M);};

var _4217=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4218=function(M){M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("traced-app-key")||M.primitives["traced-app-key"],M.params.currentNamespace.get("traced-callee-key")||M.primitives["traced-callee-key"]]);M.e[M.e.length-1].names=["traced-app-key","traced-callee-key"];
M.modules["whalesong/lang/private/traced-app.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4220,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(sym31631);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4215=function(M){if(--M.cbt<0){throw _4215;}
M.e.length-=(M.a-1);
return(_4216)(M);};

var _4214=function(M){M.c.push(new RT.CallFrame(_4216,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/traced-app.rkt"]=function(){return new RT.ModuleRecord("traced-app",_4218);}
return(_4217)(M);};

var _4223=function(M){return(_4214)(M);};

var _4222=function(M){if(--M.cbt<0){throw _4222;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);extNs.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);ns.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);extNs.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);}(M.modules["whalesong/lang/private/traced-app.rkt"],M.modules["whalesong/lang/private/traced-app.rkt"].getExports(),M.modules["whalesong/lang/private/traced-app.rkt"].getExternalExports(),M.modules["whalesong/lang/private/traced-app.rkt"].prefix));
return(M.p)(M);};

_4220.mvr=_4219;
_4222.mvr=_4221;
_4216.mvr=_4215;
var sym31630=RT.makeSymbol("traced-callee-key");
var sym31631=RT.makeSymbol("traced-app-key");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4223(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/bool.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4254=function(M){return(_4227)(M);};

var _4253=function(M){if(--M.cbt<0){throw _4253;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);extNs.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);ns.set("false", prefix[selfMod.getPrefixOffset("false")]);extNs.set("false", prefix[selfMod.getPrefixOffset("false")]);ns.set("false?", prefix[selfMod.getPrefixOffset("false?")]);extNs.set("false?", prefix[selfMod.getPrefixOffset("false?")]);ns.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);extNs.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);ns.set("true", prefix[selfMod.getPrefixOffset("true")]);extNs.set("true", prefix[selfMod.getPrefixOffset("true")]);}(M.modules["whalesong/lang/bool.rkt"],M.modules["whalesong/lang/bool.rkt"].getExports(),M.modules["whalesong/lang/bool.rkt"].getExternalExports(),M.modules["whalesong/lang/bool.rkt"].prefix));
return(M.p)(M);};

var _4251=function(M){if(--M.cbt<0){throw _4251;}
M.c.push(new RT.CallFrame(_4253,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4226,2,[M.e[M.e.length-1]],"symbol=?");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4249=function(M){if(--M.cbt<0){throw _4249;}
M.c.push(new RT.CallFrame(_4251,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4225,2,[M.e[M.e.length-1]],"boolean=?");
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4247=function(M){if(--M.cbt<0){throw _4247;}
M.c.push(new RT.CallFrame(_4249,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=_4224_c;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4245=function(M){if(--M.cbt<0){throw _4245;}
M.c.push(new RT.CallFrame(_4247,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=false;
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4229=function(M){if(--M.cbt<0){throw _4229;}
};

var _4252=function(M){if(--M.cbt<0){throw _4252;}
M.e.length-=(M.a-1);
return(_4253)(M);};

var _4250=function(M){if(--M.cbt<0){throw _4250;}
M.e.length-=(M.a-1);
return(_4251)(M);};

var _4248=function(M){if(--M.cbt<0){throw _4248;}
M.e.length-=(M.a-1);
return(_4249)(M);};

var _4246=function(M){if(--M.cbt<0){throw _4246;}
M.e.length-=(M.a-1);
return(_4247)(M);};

var _4244=function(M){if(--M.cbt<0){throw _4244;}
M.e.length-=(M.a-1);
return(_4245)(M);};

var _4242=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4243=function(M){M.modules["whalesong/lang/bool.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("true")||M.primitives["true"],M.params.currentNamespace.get("false")||M.primitives["false"],M.params.currentNamespace.get("false?")||M.primitives["false?"],M.params.currentNamespace.get("boolean=?")||M.primitives["boolean=?"],M.primitives["boolean?"],M.primitives["raise-type-error"],M.params.currentNamespace.get("symbol=?")||M.primitives["symbol=?"],M.primitives["symbol?"]]);M.e[M.e.length-1].names=["true","false","false?","boolean=?","boolean?","raise-type-error","symbol=?","symbol?"];
M.modules["whalesong/lang/bool.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4245,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=true;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4228=function(M){if(--M.cbt<0){throw _4228;}
M.e.length-=(M.a-1);
return(_4229)(M);};

var _4241=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_4237)(M);};

var _4240=function(M){M.e[M.e.length-3]=0;
return(_4241)(M);};

var _4237=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4236=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym31645;
M.e[M.e.length-2]="symbol";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_4240)(M);}else{M.e[M.e.length-3]=1;
return(_4241)(M);}};

var _4239=function(M){if(M.v===false){return(_4236)(M);}else{M.v=RT.VOID;
return(_4237)(M);}};

var _4238=function(M){M.v=false;
return(_4239)(M);};

var _4226=function(M){if(--M.cbt<0){throw _4226;}

//"lambda body for #(struct:LamPositionalName symbol=? whalesong/lang/bool.rkt 17 0 312 143)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_4238)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
return(_4239)(M);}};

var _4235=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_4231)(M);};

var _4234=function(M){M.e[M.e.length-3]=0;
return(_4235)(M);};

var _4231=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4230=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym31646;
M.e[M.e.length-2]="boolean";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_4234)(M);}else{M.e[M.e.length-3]=1;
return(_4235)(M);}};

var _4233=function(M){if(M.v===false){return(_4230)(M);}else{M.v=RT.VOID;
return(_4231)(M);}};

var _4232=function(M){M.v=false;
return(_4233)(M);};

var _4225=function(M){if(--M.cbt<0){throw _4225;}

//"lambda body for #(struct:LamPositionalName boolean=? whalesong/lang/bool.rkt 12 0 161 149)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_4232)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
return(_4233)(M);}};

var _4224=function(M){if(--M.cbt<0){throw _4224;}

//"lambda body for #(struct:LamPositionalName false? whalesong/lang/bool.rkt 10 0 129 30)"

M.v=(M.e[M.e.length-1]===false);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4227=function(M){M.c.push(new RT.CallFrame(_4229,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/bool.rkt"]=function(){return new RT.ModuleRecord("bool",_4243);}
return(_4242)(M);};

_4245.mvr=_4244;
_4247.mvr=_4246;
_4249.mvr=_4248;
_4251.mvr=_4250;
_4253.mvr=_4252;
_4229.mvr=_4228;
var sym31645=RT.makeSymbol("symbol=?");
var sym31646=RT.makeSymbol("boolean=?");var _4224_c=new RT.Closure(_4224,1,void(0),"false?");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4254(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/posn.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _4275=function(M){return(_4256)(M);};

var _4274=function(M){if(--M.cbt<0){throw _4274;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);extNs.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);ns.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);extNs.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);ns.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);extNs.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);ns.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);extNs.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);ns.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);extNs.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);ns.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);extNs.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);ns.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);extNs.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);}(M.modules["whalesong/lang/posn.rkt"],M.modules["whalesong/lang/posn.rkt"].getExports(),M.modules["whalesong/lang/posn.rkt"].getExternalExports(),M.modules["whalesong/lang/posn.rkt"].prefix));
return(M.p)(M);};

var _4271=RT.si_context_expected(7);

var _4268=RT.si_context_expected(5);

var _4264=function(M){if(--M.cbt<0){throw _4264;}
M.c.push(new RT.CallFrame(_4274,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4255,2,[M.e[M.e.length-1]],"make-posn");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4258=function(M){if(--M.cbt<0){throw _4258;}
};

var _4273=function(M){if(--M.cbt<0){throw _4273;}
M.e.length-=(M.a-1);
return(_4274)(M);};

var _4270=function(M){if(--M.cbt<0){throw _4270;}
if((M.a-7)===0){return(_4266)(M);}else{RT.si_context_expected(7)(M);
}};

var _4269=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym31683;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym31684;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym31683;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym31684;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4271,M.p));
return((M.p).label)(M);};

var _4267=function(M){if(--M.cbt<0){throw _4267;}
if((M.a-5)===0){return(_4269)(M);}else{RT.si_context_expected(5)(M);
}};

var _4263=function(M){if(--M.cbt<0){throw _4263;}
M.e.length-=(M.a-1);
return(_4264)(M);};

var _4261=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4262=function(M){M.modules["whalesong/lang/posn.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("struct:posn")||M.primitives["struct:posn"],M.params.currentNamespace.get("posn1.1")||M.primitives["posn1.1"],M.params.currentNamespace.get("posn?")||M.primitives["posn?"],M.params.currentNamespace.get("posn-x")||M.primitives["posn-x"],M.params.currentNamespace.get("posn-y")||M.primitives["posn-y"],M.params.currentNamespace.get("set-posn-x!")||M.primitives["set-posn-x!"],M.params.currentNamespace.get("set-posn-y!")||M.primitives["set-posn-y!"],M.params.currentNamespace.get("make-posn")||M.primitives["make-posn"]]);M.e[M.e.length-1].names=["struct:posn","posn1.1","posn?","posn-x","posn-y","set-posn-x!","set-posn-y!","make-posn"];
M.modules["whalesong/lang/posn.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4264,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym31685;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym31685;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4268,M.p));
return((M.p).label)(M);};

var _4257=function(M){if(--M.cbt<0){throw _4257;}
M.e.length-=(M.a-1);
return(_4258)(M);};

var _4255=function(M){if(--M.cbt<0){throw _4255;}

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

var _4256=function(M){M.c.push(new RT.CallFrame(_4258,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/posn.rkt"]=function(){return new RT.ModuleRecord("posn",_4262);}
return(_4261)(M);};

var _4266=function(M){M.e.splice(M.e.length-11,5);
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

_4268.mvr=_4267;
_4271.mvr=_4270;
_4264.mvr=_4263;
_4274.mvr=_4273;
_4258.mvr=_4257;
var sym31683=RT.makeSymbol("x");
var sym31684=RT.makeSymbol("y");
var sym31685=RT.makeSymbol("posn");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4275(M); }))(plt.runtime.currentMachine,
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
// ** Visiting <ModuleSource /Users/crused/whalesong/whalesong/lang/check-expect/check-expect.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;




var _4307=function(M){M.e[M.e.length-1][0]=RT.NULL;
M.v=RT.VOID;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _4315=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="All ~a tests passed!";
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-6][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-6][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4318,M.p));
return((M.p).label)(M);};

var _4313=function(M){M.v=(M.e[M.e.length-1]===2);
if(M.v===false){return(_4315)(M);}else{M.e[M.e.length-2]="Both tests passed!";
return(_4312)(M);}};


var _4306=function(M){M.e.push(void(0),void(0));
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
M.c.push(new RT.CallFrame(_4320,M.p));
return((M.p).label)(M);};


var _4302=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][20][0][M.e[M.e.length-3][20][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4332,M.p));
return((M.p).label)(M);};


var _4281=function(M){if(--M.cbt<0){throw _4281;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/check-expect/check-expect.rkt 197 4 6480 1294)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.p=M.e[M.e.length-2][17][0][M.e[M.e.length-2][17][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4305,M.p));
return((M.p).label)(M);};

var _4300=function(M){M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4280=function(M){if(--M.cbt<0){throw _4280;}

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
if(M.v===false){return(_4300)(M);}else{M.e.push(void(0),void(0));
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

var _4298=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a tests";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4296=function(M){M.v=(M.e[M.e.length-2]===1);
if(M.v===false){return(_4298)(M);}else{M.v="one test";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4279=function(M){if(--M.cbt<0){throw _4279;}

//"lambda body for #(struct:LamPositionalName test-suffixed whalesong/lang/check-expect/check-expect.rkt 176 0 5996 115)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-2]===0);
if(M.v===false){return(_4296)(M);}else{M.v="zero tests";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4278=function(M){if(--M.cbt<0){throw _4278;}

//"lambda body for #(struct:LamPositionalName accumulate-test! whalesong/lang/check-expect/check-expect.rkt 171 0 5881 73)"

M.e.push(M.p.closedVals[0]);
M.e[M.e.length-1][0]=RT.makePair(M.e[M.e.length-2],M.e[M.e.length-1][0]);
M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4277=function(M){if(--M.cbt<0){throw _4277;}

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

var _4294=function(M){if(--M.cbt<0){throw _4294;}
M.e.length-=(M.a-1);
return(_4295)(M);};

var _4292=function(M){M.e.push(void(0),void(0),void(0));
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
M.c.push(new RT.CallFrame(_4295,M.p));
return((M.p).label)(M);};



var _4276=function(M){if(--M.cbt<0){throw _4276;}

//"lambda body for #(struct:LamPositionalName check-expect* whalesong/lang/check-expect/check-expect.rkt 79 0 2489 669)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4287,M.p));
return((M.p).label)(M);};

var _4283=function(M){M.c.push(new RT.CallFrame(_4285,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]=function(){return new RT.ModuleRecord("check-expect",_4354);}
return(_4353)(M);};

var _4377=function(M){M.e.splice(M.e.length-8,5);
M.e[M.e.length-4][23]=M.v;
M.e[M.e.length-4][24]=M.e[M.e.length-1];
M.e[M.e.length-4][25]=M.e[M.e.length-2];
M.e[M.e.length-4][26]=M.e[M.e.length-3];
M.e.length-=3;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4312=function(M){M.e.pop();
M.a=1;
M.v=M.primitives["display"]._i(M);
M.e.pop();
M.a=0;
M.v=M.primitives["newline"]._i(M);
return(_4307)(M);};

var _4384=function(M){return(_4283)(M);};

var _4382=RT.si_context_expected(4);

var _4379=RT.si_context_expected(5);

var _4375=function(M){if(--M.cbt<0){throw _4375;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);extNs.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);}(M.modules["whalesong/lang/check-expect/check-expect.rkt"],M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExternalExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix));
return(M.p)(M);};

var _4373=function(M){if(--M.cbt<0){throw _4373;}
M.c.push(new RT.CallFrame(_4375,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym31739;
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
M.v=sym31739;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4379,M.p));
return((M.p).label)(M);};

var _4371=function(M){if(--M.cbt<0){throw _4371;}
M.c.push(new RT.CallFrame(_4373,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4282,0,[M.e[M.e.length-1]],"run-tests");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4369=function(M){if(--M.cbt<0){throw _4369;}
M.c.push(new RT.CallFrame(_4371,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4281,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4367=function(M){if(--M.cbt<0){throw _4367;}
M.c.push(new RT.CallFrame(_4369,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4280,1,[M.e[M.e.length-1]],"capitalize");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4365=function(M){if(--M.cbt<0){throw _4365;}
M.c.push(new RT.CallFrame(_4367,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4279,1,[M.e[M.e.length-1]],"test-suffixed");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4363=function(M){if(--M.cbt<0){throw _4363;}
M.c.push(new RT.CallFrame(_4365,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4278,1,[M.e[M.e.length-1]],"accumulate-test!");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4361=function(M){if(--M.cbt<0){throw _4361;}
M.c.push(new RT.CallFrame(_4363,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4277,1,[M.e[M.e.length-1]],"display-location");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4359=function(M){if(--M.cbt<0){throw _4359;}
M.c.push(new RT.CallFrame(_4361,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=new RT.Closure(_4276,4,[M.e[M.e.length-1]],"check-expect*");
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4285=function(M){if(--M.cbt<0){throw _4285;}
};

var _4350=function(M){if(--M.cbt<0){throw _4350;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_4347)(M);}else{M.e.push("Running tests...\n");
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

var _4344=function(M){if(--M.cbt<0){throw _4344;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4340=function(M){if(--M.cbt<0){throw _4340;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _4335=function(M){if(--M.cbt<0){throw _4335;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_4337)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=RT.checkedAdd1(M, M.e[M.e.length-7]);
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4340,M.p));
return((M.p).label)(M);}};

var _4332=function(M){if(--M.cbt<0){throw _4332;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4335,M.p));
return((M.p).label)(M);};

var _4330=function(M){if(--M.cbt<0){throw _4330;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
return(_4307)(M);};

var _4328=function(M){if(--M.cbt<0){throw _4328;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4330,M.p));
return((M.p).label)(M);};

var _4326=function(M){if(--M.cbt<0){throw _4326;}
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
M.c.push(new RT.CallFrame(_4328,M.p));
return((M.p).label)(M);};

var _4324=function(M){if(--M.cbt<0){throw _4324;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4326,M.p));
return((M.p).label)(M);};

var _4322=function(M){if(--M.cbt<0){throw _4322;}
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
M.c.push(new RT.CallFrame(_4324,M.p));
return((M.p).label)(M);};

var _4320=function(M){if(--M.cbt<0){throw _4320;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4322,M.p));
return((M.p).label)(M);};

var _4318=function(M){if(--M.cbt<0){throw _4318;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
return(_4312)(M);};

var _4311=function(M){if(--M.cbt<0){throw _4311;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===1);
if(M.v===false){return(_4313)(M);}else{M.e[M.e.length-2]="The test passed!";
return(_4312)(M);}};

var _4309=function(M){if(--M.cbt<0){throw _4309;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_4306)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4311,M.p));
return((M.p).label)(M);}};

var _4305=function(M){if(--M.cbt<0){throw _4305;}
if(M.v===false){return(_4302)(M);}else{M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4309,M.p));
return((M.p).label)(M);}};

var _4295=function(M){if(--M.cbt<0){throw _4295;}
M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4290=function(M){if(--M.cbt<0){throw _4290;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_4292)(M);}else{M.v=true;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _4287=function(M){if(--M.cbt<0){throw _4287;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4290,M.p));
return((M.p).label)(M);};

var _4381=function(M){if(--M.cbt<0){throw _4381;}
if((M.a-4)===0){return(_4377)(M);}else{RT.si_context_expected(4)(M);
}};

var _4380=function(M){M.e[M.e.length-5]=M.v;
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
M.e[M.e.length-3]=sym31740;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4382,M.p));
return((M.p).label)(M);};

var _4378=function(M){if(--M.cbt<0){throw _4378;}
if((M.a-5)===0){return(_4380)(M);}else{RT.si_context_expected(5)(M);
}};

var _4374=function(M){if(--M.cbt<0){throw _4374;}
M.e.length-=(M.a-1);
return(_4375)(M);};

var _4372=function(M){if(--M.cbt<0){throw _4372;}
M.e.length-=(M.a-1);
return(_4373)(M);};

var _4370=function(M){if(--M.cbt<0){throw _4370;}
M.e.length-=(M.a-1);
return(_4371)(M);};

var _4368=function(M){if(--M.cbt<0){throw _4368;}
M.e.length-=(M.a-1);
return(_4369)(M);};

var _4366=function(M){if(--M.cbt<0){throw _4366;}
M.e.length-=(M.a-1);
return(_4367)(M);};

var _4364=function(M){if(--M.cbt<0){throw _4364;}
M.e.length-=(M.a-1);
return(_4365)(M);};

var _4362=function(M){if(--M.cbt<0){throw _4362;}
M.e.length-=(M.a-1);
return(_4363)(M);};

var _4360=function(M){if(--M.cbt<0){throw _4360;}
M.e.length-=(M.a-1);
return(_4361)(M);};

var _4358=function(M){if(--M.cbt<0){throw _4358;}
M.e.length-=(M.a-1);
return(_4359)(M);};

var _4356=function(M){if(--M.cbt<0){throw _4356;}
M.e.length-=(M.a-1);
return(_4357)(M);};

var _4357=function(M){if(--M.cbt<0){throw _4357;}
M.e.push([M.params.currentNamespace.get("*tests*")||M.primitives["*tests*"],M.params.currentNamespace.get("check-expect*")||M.primitives["check-expect*"],M.primitives["equal?"],M.primitives["printf"],M.params.currentNamespace.get("display-location")||M.primitives["display-location"],M.params.currentNamespace.get("accumulate-test!")||M.primitives["accumulate-test!"],M.params.currentNamespace.get("test-suffixed")||M.primitives["test-suffixed"],M.primitives["format"],M.params.currentNamespace.get("capitalize")||M.primitives["capitalize"],M.primitives["string-length"],M.primitives["string-append"],M.primitives["string"],M.primitives["char-upcase"],M.primitives["string-ref"],M.primitives["substring"],M.params.currentNamespace.get("run-tests")||M.primitives["run-tests"],M.primitives["length"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("empty?"),{moduleName:"whalesong/lang/list.rkt",name:"empty?"}],M.primitives["display"],M.primitives["newline"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("first"),{moduleName:"whalesong/lang/list.rkt",name:"first"}],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("rest"),{moduleName:"whalesong/lang/list.rkt",name:"rest"}],M.primitives["reverse"],M.params.currentNamespace.get("struct:unexpected-no-error")||M.primitives["struct:unexpected-no-error"],M.params.currentNamespace.get("make-unexpected-no-error")||M.primitives["make-unexpected-no-error"],M.params.currentNamespace.get("unexpected-no-error?")||M.primitives["unexpected-no-error?"],M.params.currentNamespace.get("unexpected-no-error-result")||M.primitives["unexpected-no-error-result"],false]);M.e[M.e.length-1].names=["*tests*","check-expect*","equal?","printf","display-location","accumulate-test!","test-suffixed","format","capitalize","string-length","string-append","string","char-upcase","string-ref","substring","run-tests","length","empty?","display","newline","first","rest","reverse","struct:unexpected-no-error","make-unexpected-no-error","unexpected-no-error?","unexpected-no-error-result",false];
M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_4359,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false,M.e.length);
M.v=RT.NULL;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4355=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_4357)(M);}else{M.c.push(new RT.CallFrame(_4357,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _4353=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _4354=function(M){M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_4355)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_4355);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_4355)(M);}};

var _4284=function(M){if(--M.cbt<0){throw _4284;}
M.e.length-=(M.a-1);
return(_4285)(M);};

var _4347=function(M){M.v=RT.VOID;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _4282=function(M){if(--M.cbt<0){throw _4282;}

//"lambda body for #(struct:LamPositionalName run-tests whalesong/lang/check-expect/check-expect.rkt 193 0 6362 1414)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4350,M.p));
return((M.p).label)(M);};



var _4337=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_4344,M.p));
return((M.p).label)(M);};





_4295.mvr=_4294;
_4357.mvr=_4356;
_4359.mvr=_4358;
_4361.mvr=_4360;
_4363.mvr=_4362;
_4365.mvr=_4364;
_4367.mvr=_4366;
_4369.mvr=_4368;
_4371.mvr=_4370;
_4373.mvr=_4372;
_4379.mvr=_4378;
_4382.mvr=_4381;
_4375.mvr=_4374;
_4285.mvr=_4284;
var sym31739=RT.makeSymbol("unexpected-no-error");
var sym31740=RT.makeSymbol("result");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_4384(M); }))(plt.runtime.currentMachine,
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