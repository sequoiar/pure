/* * * * * * * * * * * * * * * * * * * * * * * * * *

    PURE Unobtrusive Rendering Engine for HTML

    Licensed under the MIT licenses.
    More information at: http://www.opensource.org

    Copyright (c) 2009 Michael Cvilic - BeeBole.com

	Thanks to Rog Peppe for the functional JS jump
    revision: 2.04

* * * * * * * * * * * * * * * * * * * * * * * * * */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 $p=20=y(){5 a=21[0],1z=K;8(D a===\'Z\'){1z=21[1]||K}z $p.22(a,1z)};$p.22=y(q,r,u){5 u=23(),11=[];8(D q===\'Z\'){11=u.1A(r||L,q)}C 8(D q===\'1B\'){11=[q]}C{H(\'24 11 2G. 2H 25 O\')}E(5 i=0,M=11.A;i<M;i++){u[i]=11[i]}u.A=M;u.26=1o;u.27=H;5 w=\'2I\'+1p.28(1p.29()*2J)+\'2K\';5 x;z u;y H(e){2L(e);8(D 2a!==\'12\'){2a.2M(e);2N}2O(\'20 H: \'+e);}y 23(){y f(){}f.1C=$p.2b;z 2c f()}y 1D(c){z c.1D||(y(a){5 b=L.13(\'2d\');b.1E(a.2e(V));z b.1q})(c)}y 1F(o){z 2P.1C.2Q.2f(o)==="[1B 2g]"}y 1e(b,f){z y(a){z b(\'\'+f(a))}}y 1G(a,b){b=b||L.2R();5 c,1f;E(5 n 1r a){c=L.13(n);b.1E(c);8(D a[n]===\'1B\'){1f=1G(a[n],c)}C{1f=L.13(a[n]);c.1E(1f)}}z 1f};y 1H(c,d){z y(a){5 b=[c[0]];5 n=c.A;E(5 i=1;i<n;i++){b[b.A]=d[i](a);b[b.A]=c[i]}z b.2h(\'\')}}y 2i(p){5 m=p.1g(/^(\\w+)\\s*<-\\s*(\\S+)$/);8(m===14){H(\'1I 15 2j: "\'+p+\'"\')}z{2k:m[1],R:m[2]}}y 16(c){8(D(c)===\'y\'){z c}5 m=c.1g(/^(\\w+)(\\.(\\w+))*$/);8(m===14){5 d=K,s=c,1s=[],17=[],i=0;8(/\\\'|\\"/.X(s.2l(0))){8(/\\\'|\\"/.X(s.2l(s.A-1))){5 e=s.2m(1,s.A-1);z y(){z e}}}C{2n((m=s.1g(/#\\{([^{}]+)\\}/))!==14){d=V;1s[i++]=s.1J(0,m.2o);17[i]=16(m[1]);s=s.1J(m.2o+m[0].A,s.A)}}8(!d){H(\'1I 1h O 2S: \'+c)}1s[i]=s;z 1H(1s,17)}m=c.1K(\'.\');z y(a){5 b=a.1h;8(!b){z\'\'}5 v=a[m[0]];5 i=0;8(v){b=v.1L;i+=1}5 n=m.A;E(;i<n;i++){8(!(b=b[m[i]])){z\'\'}}z b}}y 1i(c,d,e){5 f,P,O,G,I,Q=[];8(D d===\'Z\'){f=d;5 m=d.1g(/^\\s*([\\+=])?(((\\+[^\\[])|[^\\[\\+])*)(\\[([^\\]]*)\\])?([\\+=])?\\s*$/);8(!m){H(\'1I O: \'+d)}P=m[1];O=m[2];G=m[6];I=m[7];8(O===\'.\'||(O===\'\'&&D G!==\'12\')){Q[0]=c}C{Q=u.1A(c,O)}8(!Q||Q.A===0){z{G:14,J:Q,1M:14,R:f}}}C{P=d.P;G=d.G;I=d.I;Q=[c]}8(P||I){8(P&&I){H(\'I/P 1N 2T 2U 2V 2W 2X 2Y\')}C 8(e){H(\'2p I/P/18 2Z 30 E 15 Q\')}C 8(I&&e){H(\'1N I 2q 15 (R: \'+f+\')\')}}5 g,1j,T;8(G){1j=y(a){8((/^19$/i).X(G)){5 b=a.19.31;a.32(\'19\');z b}C{z a.33(G)}};g=y(a,s){8((/^19$/i).X(G)){a.2r(G+1p.28(1p.29()*34),s)}C{a.2r(G,s)}};T=y(s){z s.18(/\\"/g,\'&35;\').18(/&/g,\'&36;\').18(/</g,\'&37;\').18(/>/g,\'&38;\')}}C{8(e){g=y(a,s){5 b=a.1k;8(b){5 t=L.39(s);a.1k.2s(t,a.3a);a.1k.2t(a)}}}C{1j=y(a){z a.1q};g=y(a,s){a.1q=s}}T=y(s){z s}}5 h;8(P){h=y(a,s){g(a,s+1j(a))}}C 8(I){h=y(a,s){g(a,1j(a)+s)}}C{h=y(a,s){g(a,s)}}z{G:G,J:Q,1M:h,R:f,T:T}}y 1l(a,n){5 b=w+n+\':\';E(5 i=0;i<a.J.A;i++){a.1M(a.J[i],b)}}y 1O(c,d,e){z y(b){5 a=d(b),n=(a&&a.A)||0,W={1P:b.1P},1Q=[];W[c]={3b:a};E(5 i=0;i<n;i++){W.1h=b.1h;W.2u=W[c].2u=i;W.1L=W[c].1L=a[i];1Q.1t(e(W))}z 1Q.2h(\'\')}}y 1R(a,b,c,d){5 e=K;5 p;E(5 i 1r c){8(c.2v(i)){8(e){H(\'1N 3c 3d 3e 3f 15 3g a Q\')}p=i;e=V}}8(!p){H(\'2p 15 2j\')}5 f=c[p];8(D(f)===\'Z\'||D(f)===\'y\'){c={};c[p]={3h:f};z 1R(a,b,c,d)}5 g=2i(p);5 h=16(g.R);5 j=1i(a,b,V);5 k=j.J;E(i=0;i<k.A;i++){5 l=k[i];5 m=1o(l,f);d[d.A]=1e(j.T,1O(g.2k,h,m));j.J=[l];1l(j,d.A-1)}}y 2w(n,b){5 d=n.3i(\'*\'),1S=[],1a={a:[],l:{}},B,i,M,j,1b,1c,1u,1T;d=2g.1C.1J.2f(d);d.1t(n);E(i=0,M=d.A;i<M;i++){1c=d[i];8(1c.3j===1&&1c.2x!==\'\'){1u=1c.2x.1K(\' \');E(j=0,1b=1u.A;j<1b;j++){1T=1u[j];B=2y(1T,b);8(B!==K){1S.1t({n:1c,B:B})}}}}z 1S;y 2y(c){5 a=c.1g(/^(\\+)?([^\\@\\+]+)\\@?(\\w+)?(\\+)?$/),B={P:!!a[1],N:a[2],G:a[3],I:!!a[4],R:c},U=1F(b)?b[0][B.N]:b[B.N],i,M,1v;8(D U===\'12\'){E(i=1a.a.A-1;i>=0;i--){1v=1a.a[i];U=1v.l[0][B.N];8(D U!==\'12\'){B.N=1v.p+\'.\'+B.N;8(1a.l[B.N]===V){U=U[0]}3k}}}8(D U===\'12\'){z K}B.R=(a[1]||\'\')+B.N+(c.2z(\'@\')>-1?(\'[\'+B.G+\']\'):\'\')+(a[4]||\'\');8(1F(U)){1a.a.1t({l:U,p:B.N});1a.l[B.N]=V;B.t=\'15\'}C{B.t=\'2A\'}z B}}y 1o(a,b,c,d){5 e=[];d=d||c&&2w(a,c);8(c){5 j,1b,B,n,f,J,1U,1w,1V;2n(d.A>0){B=d[0].B;n=d[0].n;d.3l(0,1);8(B.t===\'2A\'){f=1i(n,B,K);1l(f,e.A);e[e.A]=1e(f.T,16(B.N))}C{1U=16(B.R);f=1i(n,B,V);J=f.J;E(j=0,1b=J.A;j<1b;j++){1w=J[j];1V=1o(1w,K,c,d);e[e.A]=1e(f.T,1O(B.R,1U,1V));f.J=[1w];1l(f,e.A-1)}}}}5 f,1d;E(5 g 1r b){8(b.2v(g)){1d=b[g];8(D(1d)===\'y\'||D(1d)===\'Z\'){f=1i(a,g,K);1l(f,e.A);e[e.A]=1e(f.T,16(1d))}C{1R(a,g,1d,e)}}}5 h=1D(a),1W=2c 3m(\'19[0-9]+="?\'+w),17=[];8(1W.X(h)){h=h.18(1W,\'19="\'+w)}5 k=h.1K(w),p;E(5 i=1;i<k.A;i++){p=k[i];17[i]=e[3n(p,10)];k[i]=p.2m(p.2z(\':\')+1)}z 1H(k,17)}};$p.2b={1X:y(b,c,d){5 e=F.26((d||F[0]).2e(V),b,c);5 f;z y(a){f=f||a;z e({1h:a,1P:f})}},3o:y(a,b){E(5 i=0,M=F.A;i<M;i++){F.1Y(F[i],F.1X(b,K,F[i])(a))}z F},3p:y(a,b){E(5 i=0,M=F.A;i<M;i++){F.1Y(F[i],F.1X(b,a,F[i])(a))}z F},1Y:y(a,b){5 c=L.13(\'3q\'),1m=a.1m.3r(),1n,Y;8((/2B|1x|2C/).X(1m)){5 d={1x:{\'1y\':\'1Z\'},2B:{\'1y\':{\'1Z\':\'1x\'}},2C:{\'1y\':{\'2D\':\'1x\'}}};Y=1G(d[1m])}C 8((/1Z|2D|3s/).X(1m)){Y=L.13(\'1y\')}C{Y=L.13(\'2d\')}Y.1q=b;1n=Y.3t;a.1k.2s(1n,a);a.1k.2t(a);F[0]=1n;Y=1n=14;z F},1A:y(n,a){8(D n===\'Z\'){a=n;n=K}8(D L.2E!==\'12\'){z(n||L).2E(a)}C{F.27(\'24 3u O 2F 3v 1r 25 3w. 3x 3y 3z 3A 3B a 3C 3D 2q a O 2F.\')}}};',62,226,'|||||var|||if||||||||||||||||||||||||||function|return|length|cspec|else|typeof|for|this|attr|error|append|nodes|false|document|ii|prop|selector|prepend|target|sel||quotefn|val|true|loopCtxt|test|pa|string||templates|undefined|createElement|null|loop|dataselectfn|pfns|replace|style|openLoops|jj|ni|dsel|wrapquote|leaf|match|data|gettarget|getstr|parentNode|setsig|tagName|ne|compiler|Math|innerHTML|in|parts|push|cs|loopi|node|tr|table|ctxt|find|object|prototype|outerHTML|appendChild|isArray|domify|concatenator|bad|slice|split|item|set|cannot|loopfn|json|strs|loopgen|an|cj|itersel|inner|checkStyle|compile|replaceWith|tbody|pure|arguments|core|getPlugins|No|your|_compiler|_error|floor|random|console|plugins|new|div|cloneNode|call|Array|join|parseloopspec|spec|name|charAt|substring|while|index|no|with|setAttribute|insertBefore|removeChild|pos|hasOwnProperty|getAutoNodes|className|checkClass|indexOf|str|td|th|thead|querySelectorAll|engine|found|Review|_s|1000000|_|alert|log|debugger|throw|Object|toString|createDocumentFragment|syntax|take|place|at|the|same|time|modifiers|allowed|cssText|removeAttribute|getAttribute|100000|quot|amp|lt|gt|createTextNode|nextSibling|items|have|more|than|one|on|root|getElementsByTagName|nodeType|break|splice|RegExp|parseInt|render|autoRender|DIV|toLowerCase|tfoot|firstChild|native|available|browser|To|run|PURE|you|need|JS|library'.split('|'),0,{}))