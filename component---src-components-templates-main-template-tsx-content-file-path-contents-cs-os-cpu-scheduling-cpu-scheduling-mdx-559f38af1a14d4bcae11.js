"use strict";(self.webpackChunkyeti_docs=self.webpackChunkyeti_docs||[]).push([[3573],{8389:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(1151),l=n(7294),i=n(2439);function s(e){const t=Object.assign({p:"p",code:"code",h1:"h1",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol",math:"math",semantics:"semantics",mrow:"mrow",msub:"msub",mi:"mi",mn:"mn",annotation:"annotation",h2:"h2"},(0,a.ah)(),e.components);return i||c("Elem",!1),i.ColorText||c("Elem.ColorText",!0),i.Cols||c("Elem.Cols",!0),i.Comment||c("Elem.Comment",!0),i.TwoCols||c("Elem.TwoCols",!0),l.createElement(l.Fragment,null,l.createElement(t.p,null,"컴퓨터 시스템에서 프로세스 관리는 효율적인 멀티태스킹과 자원 활용을 가능하게 하는 중요한 역할을 수행합니다.\r\n이러한 관리의 핵심에는 ",l.createElement(t.code,null,"PCB"),"와 ",l.createElement(t.code,null,"Context Switching"),"이 있습니다."),"\n",l.createElement(t.h1,{id:"pcb-process-control-block"},"PCB (Process Control Block)"),"\n",l.createElement(t.p,null,"운영체제는 구동 중인 여러개의 프로세스를 CPU 스케줄링을 통해 어떤 프로세스가 CPU에 할당될지 결정합니다.\r\n",l.createElement("mark",null,l.createElement(t.code,null,"PCB"),"는 프로세스 관리의 메타 데이터를 저장해놓은 곳입니다."),"\r\n하나의 ",l.createElement(t.code,null,"PCB"),"에는 하나의 프로세스 정보가 담기죠.\r\n커널은 하나의 프로세스 테이블을 두고 모든 프로세스를 관리합니다.\r\n프로세스를 생성할 때마다 ",l.createElement(t.code,null,"PCB"),"를 생성하여 프로세스 정보를 저장하고, 프로세스 테이블의 비어있는 항목에 ",l.createElement(t.code,null,"PID"),"와 ",l.createElement(t.code,null,"PCB"),"를 연결합니다."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 78.40909090909092%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVR42qWUW3ObMBCF8/9/XJ760ElrGzvcr0KAAAk43SObmIfONEl3Zi0Jo09HZ9d+gYQxBm3bomkaWGvxP/HCD4Ku1yuCIEBVVej7/mM8HrBtG4qihHUOm6zXdbunPN+OwLqukWWZvFz4JOxyufiDhmHwoE5rpGmGn6cISdkhrXpktUHWDIhlXSrzBCqlMI4jpmnyMI7ruqLrOr/md3me4+3XCa8/zpjdiskuiOIMeSk2LRtUP2GclydQiwICyrL0qgjhMyqmx01To1EdLrHGJBt1Z5CkBZJM3h8tOmNhJve8MjfTMyrhuBeKc8ayOCjd4xy34uGGWuDX90gyFvggUIdxB1IVN1NhmqYf8N3DHUiFQdILTOMWxgjjFO9RgpuAKzV4GzxwV8LNhPC68zz7Z1RPtWagitkrNHLFOCkQJTlCyUJ81L0VDx8K2RoEMFmQfc5khfeggnOkMNsVqXhHhaEUpmqUHLY8PfxXbAfg6QGcncCDG+I0h5Mqd8NB4ZeAobSJtE1W1AhuoVw7k2J16MWG8VsKQ+WrXFbKX5dt0+pBgO57wN8CdAKkh/e2iVA32nv4aeAe86Mo/EUwWQQmD9KD/XxRjtH2s2y8F4DjPqeH1i1fB7KNlmX9a/LP4Q8de9umfHe7GgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Process Table &amp; PCB"\n        title=""\n        src="/static/ae773d3cacf504655c1f3f07312b9566/5ebd7/process_table_pcb.png"\n        srcset="/static/ae773d3cacf504655c1f3f07312b9566/06437/process_table_pcb.png 176w,\n/static/ae773d3cacf504655c1f3f07312b9566/ba1c3/process_table_pcb.png 352w,\n/static/ae773d3cacf504655c1f3f07312b9566/5ebd7/process_table_pcb.png 704w,\n/static/ae773d3cacf504655c1f3f07312b9566/b04e4/process_table_pcb.png 888w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Process Table &amp; PCB</figcaption>\n  </figure>'}}),"\n",l.createElement(t.h3,{id:"pcb에-저장되는-정보"},"PCB에 저장되는 정보"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Pointer"),": 프로세스의 현재 위치"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Process State"),": 프로세스의 상태 정보(Create, Ready, Running, Waiting, Termiated)"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"PID"),": 프로세스의 고유 식별 번호"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Program Counter"),": 프로세스가 다음에 실행할 명령어 주소"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Registers"),": CPU 레지스터"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Memory Limits"),": 메모리 관리 시스템 정보(Page Table, Segment Table)"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Open File Lists"),": 프로세스가 실행 중에 열어놓은 파일에 관한 정보"),"\n"),"\n",l.createElement(t.h1,{id:"context-switching"},"Context Switching"),"\n",l.createElement(t.p,null,"하나의 프로세스가 끝나기 전까지 다른 프로세스는 기다려야 한다면 여러 프로세스를 실행시키는 작업은 할 수 없습니다.\r\n여러 ",l.createElement("mark",null,"프로세스들이 동시에 작동하는 것 처럼 만들기 위해 ",l.createElement(t.code,null,"Context Switcing"),"으로 프로세스를 변경해가며 작업을 처리해야합니다.")),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 80.11363636363636%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACI0lEQVR42oVU2ZKiQBD0/z9q521XYcDRnVFAObxAXZDL+8o1y2nCK3YroqKhuyrJrKqmVhQFHNtB02ji6/cXJuMJoijCZDLBbDaD23fl7LP9iQ/zAwN/gGk4Fbe6lpzZHVvylsslasfjEZv1BmVRIs9yrNdrbLdb7HY7rFYreK6HwA/ErW4Xg2CAMi8lp8gLZItMVsYeDgfUyDAMJ5jP58jzHKfTCZvNBnEcY7FYyEonW36cfj6f8Whqr0ZUOgFN00ScXAGYGIYhTMOE1tDw9uMNrWZLnEqUsTRURUUCqJBJ2XGc6oCWpqnUUGR7AXzPh2M5KMuyinFdV3KphuruAHu9ngBy71EWVdzuMVkBkiGZsvZ3gP1+vwJUcuo/69AbOgzdkC43Lu9kQ2NZOp2O5BL0STIZ7vf7igWbxHGYRdcRoWyWYD6bI0kSTKeXfcu6a9QdIOmzm+yy6tx2txW5rCfPCMTJIIhSwYZGUSh5T5KvwYdKEoPTNMNwOLw0zYbv+8iyrJJo27bkXOdw/2/JTIr/xEjiBO1WG+PR+PsDqTDlahiG5L6U/AjIK6jVNWi/NOh1He/auzwvkkUVQ1Uvm8J7SEC2/nby/zc2nucJ2Hg8fq6hmsPbLgdBgNFwhOFgKJJ5lxWb28EmIWFIRpx81kTXdamLYhmFEQzNQMtsidR2s32Zw4bUVRmvKeOpQACJzEKTMukrcI4Ig/lOpox59VN4tL/kmL8mypc5ZQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Context Switching"\n        title=""\n        src="/static/2c00f3cce88912b334bbf2aafe757651/5ebd7/context_switching.png"\n        srcset="/static/2c00f3cce88912b334bbf2aafe757651/06437/context_switching.png 176w,\n/static/2c00f3cce88912b334bbf2aafe757651/ba1c3/context_switching.png 352w,\n/static/2c00f3cce88912b334bbf2aafe757651/5ebd7/context_switching.png 704w,\n/static/2c00f3cce88912b334bbf2aafe757651/fd84e/context_switching.png 1056w,\n/static/2c00f3cce88912b334bbf2aafe757651/4719e/context_switching.png 1330w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Context Switching</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.span,{className:"math math-inline"},l.createElement(t.span,{className:"katex"},l.createElement(t.span,{className:"katex-mathml"},l.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(t.semantics,null,l.createElement(t.mrow,null,l.createElement(t.msub,null,l.createElement(t.mi,null,"P"),l.createElement(t.mn,null,"0"))),l.createElement(t.annotation,{encoding:"application/x-tex"},"P_0")))),l.createElement(t.span,{className:"katex-html","aria-hidden":"true"},l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.3011em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mtight"},"0")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span))))))))))," 프로세스가 진행 중 스케줄러에 의해 CPU 할당 시간이 끝나면 인터럽트가 발생합니다."),"\n",l.createElement(t.li,null,"현재 프로세스의 상태를 ",l.createElement(t.span,{className:"math math-inline"},l.createElement(t.span,{className:"katex"},l.createElement(t.span,{className:"katex-mathml"},l.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(t.semantics,null,l.createElement(t.mrow,null,l.createElement(t.mi,null,"P"),l.createElement(t.mi,null,"B"),l.createElement(t.msub,null,l.createElement(t.mi,null,"C"),l.createElement(t.mn,null,"0"))),l.createElement(t.annotation,{encoding:"application/x-tex"},"PBC_0")))),l.createElement(t.span,{className:"katex-html","aria-hidden":"true"},l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"}},"PB"),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.3011em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mtight"},"0")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span)))))))))),"에 저장합니다."),"\n",l.createElement(t.li,null,l.createElement(t.span,{className:"math math-inline"},l.createElement(t.span,{className:"katex"},l.createElement(t.span,{className:"katex-mathml"},l.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(t.semantics,null,l.createElement(t.mrow,null,l.createElement(t.mi,null,"P"),l.createElement(t.mi,null,"B"),l.createElement(t.msub,null,l.createElement(t.mi,null,"C"),l.createElement(t.mn,null,"1"))),l.createElement(t.annotation,{encoding:"application/x-tex"},"PBC_1")))),l.createElement(t.span,{className:"katex-html","aria-hidden":"true"},l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"}},"PB"),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.3011em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mtight"},"1")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span)))))))))),"에서 다음에 진행시킬 프로세스의 정보를 불러옵니다."),"\n",l.createElement(t.li,null,l.createElement(t.span,{className:"math math-inline"},l.createElement(t.span,{className:"katex"},l.createElement(t.span,{className:"katex-mathml"},l.createElement(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(t.semantics,null,l.createElement(t.mrow,null,l.createElement(t.msub,null,l.createElement(t.mi,null,"P"),l.createElement(t.mn,null,"1"))),l.createElement(t.annotation,{encoding:"application/x-tex"},"P_1")))),l.createElement(t.span,{className:"katex-html","aria-hidden":"true"},l.createElement(t.span,{className:"base"},l.createElement(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),l.createElement(t.span,{className:"mord"},l.createElement(t.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),l.createElement(t.span,{className:"msupsub"},l.createElement(t.span,{className:"vlist-t vlist-t2"},l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.3011em"}},l.createElement(t.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},l.createElement(t.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(t.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(t.span,{className:"mord mtight"},"1")))),l.createElement(t.span,{className:"vlist-s"},"​")),l.createElement(t.span,{className:"vlist-r"},l.createElement(t.span,{className:"vlist",style:{height:"0.15em"}},l.createElement(t.span))))))))))," 프로세스를 실행합니다."),"\n"),"\n",l.createElement(t.h1,{id:"cpu-scheduling"},"CPU Scheduling"),"\n",l.createElement(t.p,null,"CPU가 하나의 프로세스 작업이 끝나면 다음 프로세스 작업을 수행해야 합니다.\r\n이때 ",l.createElement("mark",null,"어떤 프로세스에 CPU를 할당할 것인지 결정하는 작업을 CPU 스케쥴링이라고 합니다."),"\r\n먼저 대기 중인 프로세스를 실행하는 것이 가장 좋고 빠른 방법이 아닐 수 있습니다."),"\n",l.createElement(t.h2,{id:"process-state"},"Process State"),"\n",l.createElement(t.p,null,"프로세스의 각 상태들을 아래와 같은 의미를 가집니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Create"),": 프로세스가 새로 생성되었을 때의 초기 상태입니다. 필요한 자원과 초기 설정을 할당받아 실행을 준비합니다."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Ready"),": CPU를 제외한 모든 필수 자원을 할당받아 실행을 위해 준비된 상태입니다. CPU 스케쥴러의 관리 아래에서 실행 차례를 기다립니다."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Running"),": CPU를 할당받아 명령을 처리하고 있는 상태입니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"우선순위가 높은 프로세스가 등장하면 실행 중인 프로세스가 중단될 수 있습니다."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Waiting"),": 필요한 어떤 이벤트나 자원의 가용성을 기다리는 중입니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I/O 요청, 파일 접근, 네트워크 통신 완료 등의 작업을 기다리는 경우 이 상태가 됩니다."),"\n",l.createElement(t.li,null,"대기 상태의 프로세스는 CPU를 할당받을 수 있떠라도 요구 자원 혹은 이벤트가 준비될 때까지 기다려야 합니다."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Termitaed"),": 프로세스가 작업을 완료하거나 어떠한 이유로 중단되어 더 이상 실행되지 않는 상태입니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"해당 프로세스는 시스템에서 제거되며, 사용하던 자원은 운영체제에 반환됩니다."),"\n"),"\n"),"\n"),"\n",l.createElement(t.h3,{id:"cpu-스케쥴링은-아래와-같은-상황에서-발생할-수-있습니다"},"CPU 스케쥴링은 아래와 같은 상황에서 발생할 수 있습니다."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"한 프로세스가 Running에서 Waiting 상태로 전환될 때 (I/O 발생)"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"프로세스가 실행 중일 때, 파일 읽기 및 쓰기, 네트워크 통신등의 I/O 작업을 요청하면 해당 I/O 작업이 끝날 때까지 프로세스는 CPU 사용할 수 없도록 Running에서 Waiting으로 전환."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"프로세스가 Running에서 Ready 상태로 전환될 때 (인터럽트 발생)"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"프로세스가 인터럽트에 의해 중단될 경우, 프로세스가 Ready 상태가 됩니다."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"프로세스가 Waiting에서 Ready 상태로 전환될 때 (I/O 종료)"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"프로세스가 요청한 I/O 작업이 완료되면, 프로세스가 Readt 상태가 됩니다."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"프로세스가 종료할 때")),"\n"),"\n",l.createElement(i.Comment,null,l.createElement(t.p,null,"1번과 4번 상황에서만 스케쥴링이 발생하는 것은 Non-Preemptive 스케쥴링이라고 합니다.")),"\n",l.createElement(t.h2,{id:"preemptive--non-preemptive"},"Preemptive & Non-Preemptive"),"\n",l.createElement(t.p,null,"CPU 스케쥴링 알고리즘은 크게 선점형(Preemptive), 비선점형(Non-preemptive) 스케쥴링으로 나눌 수 있습니다."),"\n",l.createElement(t.h3,{id:"non-preemptive"},"Non-Preemptive"),"\n",l.createElement(t.p,null,"비선점형 스케쥴링은 프로세스가 CPU를 점유하고 있다면 이를 뺐을 수 없는 방식입니다.\r\n",l.createElement(i.ColorText,{color:"var(--info)"},"Context Switching으로 인한 비용이 상대적으로 적지만"),",\r\n",l.createElement(i.ColorText,{color:"var(--error)"},"프로세스 배치에 따라 효율성 차이가 많이 납니다.")),"\n",l.createElement(t.h3,{id:"preemptive"},"Preemptive"),"\n",l.createElement(t.p,null,"선점형 스케쥴링은 프로세스가 CPU를 할당받아 실행 중이라도 운영체제가 강제로 이를 뺐을 수 있는 방식입니다.\r\n",l.createElement(i.ColorText,{color:"var(--info)"},"CPU 처리 시간이 매우 긴 프로세스의 CPU 사용 독점을 막을 수 있어 효율적으로 운영"),"이 가능하죠.\r\n하지만 ",l.createElement(i.ColorText,{color:"var(--error)"},"잦은 Context Switching으로 인한 비용이 발생합니다.")),"\n",l.createElement(t.h2,{id:"cpu-scheduling-criteria"},"CPU Scheduling Criteria"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"CPU Utilization"),": 시간당 CPU를 사용한 시간의 비율"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Throughput"),": 시간당 처리한 작업의 비율"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Turnaround Time"),": 프로세스가 생성된 후 사용하던 자원을 모두 반환하는 데까지 걸리는 시간","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"작업이 대기열에 들어와 실행된 시간, I/O 작업 시간을 모두 거쳐 작업을 반환하는 데까지 걸리는 시간"),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Waiting Time"),": 대기열에 들어와 CPU를 할당받기까지 기다린 시간","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"대기열에서 기다린 시간의 총 합"),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Response Time"),": 대기열에서 처음으로 CPU를 얻을 때까지 걸린 시간","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Waiting Time은 대기 시간의 총 합, Response Time은 첫 할당까지 대기 시간"),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,l.createElement("mark",null,"CPU Utilization과 Throughput은 최대화, Waiting Time과 Response Time은 최소화")," 하는 알고리즘이 효율적인 알고리즘"),"\n",l.createElement(t.h1,{id:"cpu-scheduling-algorithm"},"CPU Scheduling Algorithm"),"\n",l.createElement(t.h2,{id:"fcfsfirst-come-first-served"},"FCFS(First Come First Served)"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 614px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.5909090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACJklEQVR42pVTy27TUBD1t7Prjh3skIpURFUUyqKoSQuiagMBBCWRaB5Nbcev2LEdy04cJ7V9mJkkbUKRgCsd37kzc87MfVgBjaIseUJbj/Fo9wpPD2/w/FjH44MedvY62HnRwRPyPTvSsEt+9r0+t4RTFEvueij8KVeCg+EEe29VvDpVUTnpovJ+gJdVDfuENx8MHFRJ6F0f+zUd9R8eNpvZElyPbJ7DD1IM3RjdawsjP5U1g23DDGHZETyy42QunG25leC6SjzJ0LkJ0e6P8K2loauGgh7P2hg/ex6urkcUD2B7yarDQlCupBX8zyj/nqLEaYKm9Rkt+x5Ns4EvvbMtH+PSaEju1/45vut1sdnXoNym1UA8S6BE0wgf1Ro+afeo3xzjtHW45WNc9Ks0n0jsrHNEvBPx1S4rxKliTFrKfL5AOpvhNi+wuM3vkBfba46n6QzhOJIYn3ucJMTNZKusEcfUIT+Zsiz/7QgpL8/zuzXba+46phRUbTqdYjKZSMUxdcB2QvY0TamrVNYMthOJTcC89T2VG/dFW57DcRyYponBYIBut7u0DQMGIQxDiTvDISzLEp9hmFIgy+YPb3lGex9SMosxkWdVVaHrughomo4oiuC6LmzblhzX8+iRmwiCAJt/mgjyQdu2I8mMdrsjIizG4izk+z4VdcXnOENBEIR/fodZllHiUsz3AxLwZJuj0Yh+QVeKcSdxHGOxWDy4pN8FfwEiFBvMWfdqMQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="FCFS"\n        title=""\n        src="/static/8c0d5c179f4bbc07a0a5782134c185f4/e9131/fcfs.png"\n        srcset="/static/8c0d5c179f4bbc07a0a5782134c185f4/06437/fcfs.png 176w,\n/static/8c0d5c179f4bbc07a0a5782134c185f4/ba1c3/fcfs.png 352w,\n/static/8c0d5c179f4bbc07a0a5782134c185f4/e9131/fcfs.png 614w"\n        sizes="(max-width: 614px) 100vw, 614px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">FCFS</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"가장 먼저 요청한 프로세스에 CPU를 할당하는 방식으로 Non-preemptive Scheduling 입니다."),"\n",l.createElement(t.li,null,"Convoy Effect로 인해 Average Waiting Time과 Response Time이 길어질 수 있습니다."),"\n"),"\n",l.createElement(i.Comment,null,l.createElement(t.p,null,"Convoy Effect: CPU 사용시간이 긴 프로세스에 의해 짧은 프로세스들이 오래 기다리는 현상.\r\n평균 대기 시간이 길어집니다.")),"\n",l.createElement(t.h2,{id:"sjfshortest-job-first"},"SJF(Shortest-Job-First)"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 568px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77.8409090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACj0lEQVR42oVSWVPTUBTO/3/xwTdEEeoGtVhBFhF0hnGZcUYcRGmbZmm2ZmmapC10Tfp5zg0BKo6emS9nvd85N/dI2XwOlvNWH/c3VTw5tLC8Y+BeWcHqvonHby2U3nGshUe7BkoHFh6SXn9vY5bmZ/NvLlJBKJt9LL1SsLZdQ2mniQevFTw/IJLqL6y9kfFsv4WnezpBxeq2gq1jJszuEhbGZDJDNxpBUR202zHieIQwHKKp2LDsrsix7zgR5RPEyXiRqSC8GhC9wQR1NcbX7xrO6h5kPUGD/RMVP2ou+TEaWixyZ3UfLauP+fwuo5RleXBwMYFGRd9OVZw3PbTsPvnJta/bPfJ71DRATQlguQNkWSZICyxcmf15CoyGE0wnKTKyGePxbMFnmzHP8FeR/J4Hv+ci6Luk20IHAy/XAnmeczd1LrykDTfO42xzbDqbQTpqVHEol3HUrGDv7AU2Pi7jSK7gsPFS4KBeQfnzCipfVqiuip3Tp1g/XsLuzzL2a5vYOilh49MyPqhVxBcJJCey4PbsHImNdnLLJ1hdA05kwiaYYUvEnNgi2DA6OmlT+HZkYDgaQprRmP+SNE3FD2c9Go2u/nf+AJeXlyLOMh6PhS+l9Kc5eP1imC+83HXsaun+zGX0Orfzkud5yOFDlmU0CJZlQ9M0+L6PTqcD13UpRtdyHBiGgSAIhM/6tnADiYtt2xakJhWx5mImc4iAD0VRJIjZDkhzc0YYhiI2GOQ7KSYsCPmAqqrQdV1oi2KmaQnSbrcrwLXcsN2mlXFpANMU8el0erPYTMaHuIivqaqauFoxoe8HYpJiyiRJhB1FsQA/xsJiM5FPXX0aPY5j0ZE1T8AEnO90QkH0v41gwt/lAqtcMxbhEQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="SJF"\n        title=""\n        src="/static/7823265bed15677300bfa922e185bc4e/10e91/sjf.png"\n        srcset="/static/7823265bed15677300bfa922e185bc4e/06437/sjf.png 176w,\n/static/7823265bed15677300bfa922e185bc4e/ba1c3/sjf.png 352w,\n/static/7823265bed15677300bfa922e185bc4e/10e91/sjf.png 568w"\n        sizes="(max-width: 568px) 100vw, 568px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">SJF</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"다음 CPU 소요 시간을 고려하여 적은 작업을 우선적으로 할당하는 Non-preemptive Scheduling 입니다."),"\n",l.createElement(t.li,null,"Average Waiting Time을 줄일 수 있습니다."),"\n",l.createElement(t.li,null,"늦게 추가된 프로세스는 아무리 짧더라도 이전 프로세스의 완료를 기다려야 하는 Convoy Effect가 존재합니다."),"\n"),"\n",l.createElement(t.h2,{id:"stcfshortest-time-to-completion-first-srtfshortest-remaining-time-first"},"STCF(Shortest Time-to-Completion First), SRTF(Shortest Remaining Time First)"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 640px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 69.88636363636364%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACRklEQVR42o1Ta1PTUBDN//8NfnNApwVBh1JBEKrjY3RGRCjSlqY1aW7SvN/pKznu3lKmigzezs7uPbt79mZ3q+D2zBcVNo911E4MbB7peLI3wHbLQP1U4NnxiESX96eHGj61fZlTVbh3lJWxKCvsfzDwvNlB/U0f22817J4OsdFoY+dEw8uWjp3jAWqHA3y79h4nrMgbhBPcqAL6yIPnFxBWhE5Xw9hJ4Xg5NN2FEBGSdIqHzh1hSYR9LcKXsyHOLg101BAX1zY+fu3hqufhuu/je1vg/KcN084eJ+TnF5MSjhvDDzLkRYk4mWJsh0izObJ8IfGIsOmsfJhwNp8hSH2SAGEWIMpDKWyzxAXf131LexXPuSs9mU2h2MkYB5dbOPhRx3u1ieZ5XdqnvT3sft5A66aB1+c1wrbwTt0nXZP+Vr9B8Q0cXGzh6OoF3V9BhCMoSZ7CCgw4sQVB2goFxiSGNyLblHocCYmb5LdjU9ojVyPbkncnsQgz4Ic+lMV8IScsB7Og3lTLiTO+jq024W5v5/M/esc+xpSyLJEkCeI4RhAE1PiA1iJFFEc0CBpOnktflmVICWcdRRGm0+XqVGs/OZSiKKDrOu2XgKqqGA6H0v6labAsC77vwzDoU20HhjBgmpb0c3Emr/7aboWr6vpIJmtEwjIgUibhQrZtw/M8IjElEYvrukRMvXOc+4T8uUzCAUzU7XZlAdMUty+zZaJDJGEYyhdzAZek+sd/T+FncxIHcm84KaKe+X4gMX45x3Br/uf8BlIfHeWtIsV2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="SRTF"\n        title=""\n        src="/static/1faaf934fc0a7a64cca440b1d9a02c7a/6af66/srtf.png"\n        srcset="/static/1faaf934fc0a7a64cca440b1d9a02c7a/06437/srtf.png 176w,\n/static/1faaf934fc0a7a64cca440b1d9a02c7a/ba1c3/srtf.png 352w,\n/static/1faaf934fc0a7a64cca440b1d9a02c7a/6af66/srtf.png 640w"\n        sizes="(max-width: 640px) 100vw, 640px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">SRTF</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"현재 실행되고 있는 프로세스의 남은 시간보다 추가된 프로세스가 더 빨리 끝난다면 해당 프로세스를 먼저 실행하도록 CPU를 할당하는 Preemptive Scheduling 방식입니다."),"\n",l.createElement(t.li,null,"Convoy Effect를 해결했습니다."),"\n",l.createElement(t.li,null,"프로세스가 CPU를 얼마나 필요로 하는지 예측하기 힘들고. Response Time 측면에서 좋지 않을 수 있습니다."),"\n"),"\n",l.createElement(t.h2,{id:"priority"},"Priority"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 635px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 72.1590909090909%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACR0lEQVR42o1US2/TQBDOL0dw4YqQ6AUhLpw4VAXREyoEDkDbJE3zInEejh3HcWwndnBiO1k/PmbWSUtLD13r0zx25pvPu5ZL2K8sz6Wt9308e9vB6w99PH/XxZM3bRwd9/GK8JTyR8cDvHzfwwvCyNzInnzfy6uEe2sdCvTVJRptHerkj0RfXUAZuRgbFOsrtLsmhpqHKE7utz9MqKge6i0dQ2oeEaFChL2hC5UIOdcdOhhoq8cRbiJB031ct8ZSkW4GpNCVYJ9zvaEtlT9O4UaQgiUqdRWDsY8RKxo4+N13pM+5jjKnAT5CGv4fIZ8nI8sKCJFhE6YI1jsiTySCtZAIo/QmZsu1h94DT2kemDhrfsTP4Rku9DKqkzLKrU/SVo0yLrWvqJFlfO+cUr6IK1R7rn5BuX2KC+0bPjdOMLC7KDmBjZr6C+3pFTrWNXp2A3X1HF3yGS3jSubYb2gVsg0Zc31zUqXcJZpGDZXBD2jOCCUhhPyO8iwn6dmd8+A87z+0EpFgu91JPwpjZGmGONryGebYiV2BXQGRCCRJgiRNkBKSQ7wHD0nTVNZlWYp8/8hLiaIIpmliNpthPNYkptMpppRbLBbwPI/2Z5jP57LGdhyYs6Ke86vVSpLf3HIQBNAnE0nKRGx1fQLDMGBZFhwiWC6XkpBj3/dh27Yk5T2ut6w5wjC8JWSiGRWrqgpFUaBpGhUVCjzPp0ZXkrmuS8osqY4HMAxjijiObxWyZF3Xb9RwkW07d16Twa/Oyg5K+AIP+Pfn8Be87BmKPloHqgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Priority"\n        title=""\n        src="/static/a56585c4fb5a207816b3c8f250e2a93e/1ddef/priority.png"\n        srcset="/static/a56585c4fb5a207816b3c8f250e2a93e/06437/priority.png 176w,\n/static/a56585c4fb5a207816b3c8f250e2a93e/ba1c3/priority.png 352w,\n/static/a56585c4fb5a207816b3c8f250e2a93e/1ddef/priority.png 635w"\n        sizes="(max-width: 635px) 100vw, 635px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Priority</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"각 프로세스들은 우선순위를 가지고 높은 우선순위의 프로세스에 CPU를 먼저 할당하는 방식입니다."),"\n",l.createElement(t.li,null,"Preemptive, Non-preemptive Scheduling 방식이 존재합니다."),"\n",l.createElement(t.li,null,"낮은 우선순위의 프로세스가 절대 실행되지 않는 Starvation 문제가 발생할 수 있습니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"이를 해결하기 위해 대기 시간이 오래된 프로세스의 우선 순위를 높여주는 Aging 방식을 적용할 수 있습니다."),"\n"),"\n"),"\n"),"\n",l.createElement(i.Comment,null,l.createElement(t.p,null,"SRTF 방식도 CPU burst time을 우선순위로 하는 Priority Scheduling의 일종")),"\n",l.createElement(t.h2,{id:"rrround-robin"},"RR(Round Robin)"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 697px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 65.3409090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB9klEQVR42oVTa2/TMBTN//8A0j7zA9BaGCAQQwz4gAQC2sLKOgF9rEuapx03zyZp4xzs2wa1g7EbXR37+vj4+ubawJ41zRbDpML9zhgPns9w73iMo0cTNb7CUXeC3o8lcWRLvmGGlBJVVaEoCpRlScGyqtEbMbz/PMOX7wH6I44PAxMfv9rw+Org8L8E8zyH4zjwfR9xnCiiRF1LLJwYF5cmLDtS4wQ/xw6mc440W/9fUGdY17UitIwG63WNK2uJwfkUs2uB+SLG8PIao18uYlUOzZGyoT37ToK4zdR6vakJt2OJRja4y4y8TJAVMbIDTJBXKfJSeZVRbLXOdvME6R5PYzuvZQ3j9bfHODs/watBF3p82u/ibHiCl71jip/2O3g3eoYXnx7i7cXTP6j5b4ZPaJ14vQ6iXMCIMoEwYghjRhilIXgUKBRgwqfTfa5qly8JRcwJddz2LdrnBrZaj8BDrmrYYFvQu8uz16+3k41VsYLruaRumia1kOs5YCyAWAoEChln1FZ+EBB322LxTlz9rN1HgmmaYj6fE8myLPLFYgHbtinGOYfneeSu6xK2fcsYw2azOcxQn6RFAnX6ZDqFaaksXYcEtZgQYpudci2oRbRgK3bz+kaSJHRVpjPxPRLWm7Wo3tgKh2FIT7R9CFK1yL9q+BtdvdjAXAUoTwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="RR"\n        title=""\n        src="/static/7d6ecb770696be5e9e22bf6716f0f75c/7422e/rr.png"\n        srcset="/static/7d6ecb770696be5e9e22bf6716f0f75c/06437/rr.png 176w,\n/static/7d6ecb770696be5e9e22bf6716f0f75c/ba1c3/rr.png 352w,\n/static/7d6ecb770696be5e9e22bf6716f0f75c/7422e/rr.png 697w"\n        sizes="(max-width: 697px) 100vw, 697px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">RR</figcaption>\n  </figure>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"각 프로세스에 동일한 CPU Time Slice를 부여하여 해당 시간 동안만 CPU를 이용하게 합니다."),"\n",l.createElement(t.li,null,"할당 시간 내 작업을 완료하지 못하면 다른 프로세스로 할당을 넘기는 Preemptive Scheduling 방식입니다."),"\n",l.createElement(t.li,null,"프로세스가 대기하는 시간을 예측할 수 있습니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"N개의 프로세스, 할당 시간이 Q 라면 (N-1)Q 시간 이상을 기다리지 않음"),"\n"),"\n"),"\n",l.createElement(t.li,null,"Time Slice가 짧을수록 적은 Response Time을 가지지만 Context Switching 비용이 증가합니다."),"\n",l.createElement(t.li,null,"공정하고 좋은 Response Time을 가지지만 Turnaround Time은 좋지 않습니다."),"\n"),"\n",l.createElement(t.h2,{id:"그-외"},"그 외"),"\n",l.createElement(t.h3,{id:"입출력-연산-고려"},"입출력 연산 고려"),"\n",l.createElement(t.p,null,"대부분의 프로세스는 CPU만을 사용하는 것이 아닌 I/O 작업을 진행합니다.\r\n따라서 I/O 작업을 진행할 때 다른 프로세스에 CPU를 할당할 수 있도록 CPU를 반납합니다."),"\n",l.createElement(i.TwoCols,null,l.createElement(i.Cols,{size:50},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 361px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 35.79545454545455%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABUElEQVR42nVRO6rCUBTMAlxHwDalOwi4AcEqjWBhKRaCVYJrsAhKNqCFOxBEwUYIWiXRQjEhavzjb2TOe4IPfAfunfvhzJk5R8FvHA4HbLdbRFGEzWaD3W6HOI6xXq+RJIng5/l+v+NbKEy8XC4oFAooFototVrQNA39fl/QcRyUSiXkcjl0Oh2k02l0u10cj0cheD6ffwlPpxMejwdM00Q+n0e5XEY2m4VlWdB1HZVKBYZhCGG1WpW/wWAgIr4SUv58PpdLrVZDJpNBEARIpVKYTCZyr9frolxVVbFKdfv9XlpEZBveihVu1+sVi8UCvV4PzWYT0+kUtm1jOByKzXa7jdFohEajAd/34XkexuMxlsul4Gw2g+u6OJ/PP4S0zEoMIgvcbjcZDIPDYVAJrTIxDEN5W61Wkv8emPLpn3a42Jf3FGmFLWARJvLvv0XLL1gB5ap+gJmBAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="I/O Consideration"\n        title=""\n        src="/static/2c6c60b3310186dbe52d39002955ec29/39d76/io_consideration.png"\n        srcset="/static/2c6c60b3310186dbe52d39002955ec29/06437/io_consideration.png 176w,\n/static/2c6c60b3310186dbe52d39002955ec29/ba1c3/io_consideration.png 352w,\n/static/2c6c60b3310186dbe52d39002955ec29/39d76/io_consideration.png 361w"\n        sizes="(max-width: 361px) 100vw, 361px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">I/O Consideration</figcaption>\n  </figure>'}})),l.createElement(i.Cols,{size:50},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 396px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 35.79545454545455%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABV0lEQVR42l1Ru4rCUBT0L6ysLFP7H9ZpLRIs9AP0CwyWkl+wstRCRCE2SWNUJL6wUxEEH2jUGJ1ljnuX3T0Q5uaeOXMmkwS+6/V64Xg84v1+Cz6fT1wuF9xuNzweD5zPZ+EcDgecTifp8azwfr+LToIkXna7XWiahu12KzgYDKDrOmq1GmzbRjabxWw2QyqVQqvVQr/flxnHcdDpdDCfzz+CdEIXQRDANE1Uq1XkcjlYloVCoYByuYxSqYR8Po9KpYJisYjxeIzlcikii8VCFu12u48gP2ez2eB6vWK9XiOZTGI6nSKTyaBer4uoYRhoNBpIp9MyxBkaiaLoB+M4/ggyM9Z+v8dkMkGv14PruvA8T86j0Qjtdlt6zWZTHA2HQ/i+L2fyVquV9P8Iqi3cyIB5T9cshs73MAylT4fMnfnzBykO5xP4VRxSD8lqESMh/ucoMwrp8AunpupmE4xJ4gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="No I/O Consideration"\n        title=""\n        src="/static/ebad209585ddf932141c9ed5e8988882/db910/non_io_consideration.png"\n        srcset="/static/ebad209585ddf932141c9ed5e8988882/06437/non_io_consideration.png 176w,\n/static/ebad209585ddf932141c9ed5e8988882/ba1c3/non_io_consideration.png 352w,\n/static/ebad209585ddf932141c9ed5e8988882/db910/non_io_consideration.png 396w"\n        sizes="(max-width: 396px) 100vw, 396px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">No I/O Consideration</figcaption>\n  </figure>'}}))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(4316),o=n(1840),g=n(7821),p=n(2654),d=n(4111),u=n(2726),E=n(4480),A=n(2818),h=n(9213),b=n(7213),f=n(9265),y=n(9601),w=n(3071),v=n(6097),C=n(6782),x=n(4891),P=n(3387),N=n(917);const R=e=>{let{data:{mdx:t},children:n}=e;const i=(0,E.sJ)((0,A.cp)(A.eE,!1)),s=(0,E.sJ)((0,A.cp)(A.rf,!1)),r=(0,E.Zl)((0,A.cp)(A.Cy,t.tableOfContents.items));return(0,l.useEffect)((()=>{r(t.tableOfContents.items)}),[t]),(0,N.tZ)(o.Z,null,(0,N.tZ)(k,null,(0,N.tZ)(d.Z,null)),(0,N.tZ)(B,null,(0,N.tZ)(z,{className:"navigation",isNavOpened:s},(0,N.tZ)(U,{className:"hide_scroll"},(0,N.tZ)(g.Z,null))),(0,N.tZ)(I,{isNavOpened:s},(0,N.tZ)(T,{isWide:i},(0,N.tZ)(u.Z,{title:t.frontmatter.title,date:t.frontmatter.date}),(0,N.tZ)(a.Zo,{components:{p:b.Z,h1:f.H1,h2:f.H2,h3:f.H3,h4:f.H4,h5:f.H5,h6:f.H6,hr:y.Z,blockquote:w.Z,ul:C.Z,ol:v.Z,pre:x.Z,code:P.Z}},n))),(0,N.tZ)(O,null,(0,N.tZ)(S,null,(0,N.tZ)(p.Z,null)))))},k=(0,m.Z)("div",{target:"e1ojob7j7"})({name:"11t2x7x",styles:"display:flex;height:var(--header-height);z-index:5;padding:0.6rem 2rem 0.6rem 0.6rem;position:fixed;width:100%;background:var(--background-color);border-bottom:1px solid var(--border-color)"}),B=(0,m.Z)("div",{target:"e1ojob7j6"})({name:"majwgz",styles:"position:relative;display:flex;min-height:calc(100vh - var(--header-height));overflow-x:hidden"}),z=(0,m.Z)("aside",{target:"e1ojob7j5"})("margin-left:",(e=>e.isNavOpened?"0":"calc(-1 * var(--sidebar-width))"),";flex:0 0 var(--sidebar-width);font-size:0.875rem;overflow-x:hidden;overflow-y:auto;transition:margin 0.25s var(--ease-in-out-quad);@media (min-width: ",h.Z.IPAD_PRO,"px){margin-left:0;}"),U=(0,m.Z)("nav",{target:"e1ojob7j4"})({name:"l4vzaw",styles:"overflow-y:auto;height:100%;padding:var(--body-padding-top) 0 3rem 0;position:fixed;width:var(--sidebar-width);&:-webkit-scrollbar{display:none;}"}),T=(0,m.Z)("main",{target:"e1ojob7j3"})("padding:1rem;width:100%;@media (min-width: ",h.Z.IPAD_AIR,"px){width:",(e=>e.isWide?"90%":"65%"),";}"),I=(0,m.Z)("main",{target:"e1ojob7j2"})("width:calc(100% - 2 * var(--sidebar-width));padding-top:var(--body-padding-top);flex-grow:1;min-width:20rem;display:flex;justify-content:center;opacity:",(e=>e.isNavOpened?.3:1),";@media (min-width: ",h.Z.IPAD_PRO,"px){opacity:1;}"),O=(0,m.Z)("aside",{target:"e1ojob7j1"})("font-size:0.75rem;font-weight:bold;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);width:0;transition:width 0.25s var(--ease-in-out-quad);@media (min-width: ",h.Z.HD,"px){width:var(--sidebar-width);}"),S=(0,m.Z)(U,{target:"e1ojob7j0"})({name:"b40oxt",styles:"padding:0 1rem 0 1rem"});function J(e){return l.createElement(R,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-components-templates-main-template-tsx-content-file-path-contents-cs-os-cpu-scheduling-cpu-scheduling-mdx-559f38af1a14d4bcae11.js.map