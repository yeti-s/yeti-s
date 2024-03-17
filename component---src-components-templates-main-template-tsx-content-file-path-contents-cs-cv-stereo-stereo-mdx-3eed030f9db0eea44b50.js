"use strict";(self.webpackChunkyeti_docs=self.webpackChunkyeti_docs||[]).push([[3016],{106:function(e,a,t){t.r(a),t.d(a,{default:function(){return J}});var n=t(1151),l=t(7294);function s(e){const a=Object.assign({p:"p",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",annotation:"annotation",br:"br",mfrac:"mfrac",mn:"mn",ul:"ul",li:"li"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(a.p,null,l.createElement(a.code,null,"Stereo algorithm"),"은 좌우 차이가 존재하는 두 카메라로 동일한 영역을 촬영하여 ",l.createElement(a.code,null,"disparity"),"를 이용해 depth를 계산하는 방법이에요."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.590909090909086%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABGElEQVR42q2R3U7DMAyF+/5PxgUXTFVhwNWmJQzWdTRp0/wf7KyjICSQJiJZiRz7y/FJhWtXSsjW/khX1/JyjMje0yH/FzCcVRL4V2DKVIT857i4gEL4DvSUSCl/xhQsYl5e9T4gEoDvSi29lXi/AElpprE5HFlQtXqCUBZSTXjqWtgQ8aINbl+fcbNv8HjcF5sCAUQ/Qb4bSHlAO3p4Eiq1g1zVeNtInChRuZCgXYSyDh0FKxh8xMEMOBkDzcYX0zJGymvjoEcLE2kiyvWWetUAPXmEPHvY9wp3dT3bk8p+7Do06/Xs63kkXs39Q7n7WruiXqX18imGlGy229I00pm9UEphJ8QsbgEKIdHTHfvJtZzmXmYw8AN26MHUnX84yAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="00"\n        title=""\n        src="/static/1cd4ac24457a805afe3286a770d5baa1/5ebd7/00.png"\n        srcset="/static/1cd4ac24457a805afe3286a770d5baa1/06437/00.png 176w,\n/static/1cd4ac24457a805afe3286a770d5baa1/ba1c3/00.png 352w,\n/static/1cd4ac24457a805afe3286a770d5baa1/5ebd7/00.png 704w,\n/static/1cd4ac24457a805afe3286a770d5baa1/bad1b/00.png 841w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(a.p,null,"동일한 지점을 찾는 방법은 이전의 feature matching보다 더 간단합니다.\r\n찾고자 하는 지점의 scanline 위에 존재하는 포인트들만 검사하면 되는 것이지요.\r\nScanline 위 포인트 중 matching cost가 가장 낮은 부분을 찾으면 되는 것입니다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 42.04545454545454%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB3klEQVR42o2S3WuScRTH99+s63XTRG8ajcq1yUr3TAld4FLZgghi4Lz1JfIFV6ipc+ALerUQr2w3Rt6Kf4A3E8lBE+fbdL59enzcopugAz84cM7vw/d8z1mYTqfMotlsks1mCYfDZDIZgsEgDoeTQqEg1SZi349ikWgkQuhLiEQshs1mIxqNUqlU6Pf7EmdhMplISblcJhKNEI/Hcbqc6A0GlEql9KlarTIYDIgdH0vvyO/njXGXJ6ur6HQ6vp6eMhqN5sDLZofrmwnF70UODw4Jfg7hd7nRb2rQvBDQPNcQDUXota+x+T5x4PbhOomz/9bCY+1LVLtm9O/ec35emwOHwzk5l8shbAnsGHbYFgQ2VSrW1zfQarXY7XYajQavzWYEUdGWVodGtYFybQ21sM0ro5FSqTQH3kkNBAIs3ltELpejUCh4uLKCRq3GYrHg8/mo1+vIZDLuLy3xYHmZR2LPM+VTTCYT+3t7kmUScDweS0k+n8dqteL1enG5XHg8HlKpFMlkkrOzb7RaLT6I3rrdH0WPxbrDwYnoZzqdJpFIUKvdjsx/RLs3oH7ZotW9odubb1PcEtwu9O/4J3B2Tncn1bjq8vNXi+FoTLvTEaE9ri4u6IiqZ8o73d4f4G/sqvLCzSJnDwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="01"\n        title=""\n        src="/static/c5bc65aa27b8e5f3bb6fd0a0f6752b0a/5ebd7/01.png"\n        srcset="/static/c5bc65aa27b8e5f3bb6fd0a0f6752b0a/06437/01.png 176w,\n/static/c5bc65aa27b8e5f3bb6fd0a0f6752b0a/ba1c3/01.png 352w,\n/static/c5bc65aa27b8e5f3bb6fd0a0f6752b0a/5ebd7/01.png 704w,\n/static/c5bc65aa27b8e5f3bb6fd0a0f6752b0a/33e10/01.png 844w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(a.p,null,"이후 ",l.createElement(a.span,{className:"math math-inline"},l.createElement(a.span,{className:"katex"},l.createElement(a.span,{className:"katex-mathml"},l.createElement(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(a.semantics,null,l.createElement(a.mrow,null,l.createElement(a.mi,null,"u"),l.createElement(a.mo,null,"="),l.createElement(a.mi,null,"x"),l.createElement(a.mo,null,"−"),l.createElement(a.msup,null,l.createElement(a.mi,null,"x"),l.createElement(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′"))),l.createElement(a.annotation,{encoding:"application/x-tex"},"u = x - x'")))),l.createElement(a.span,{className:"katex-html","aria-hidden":"true"},l.createElement(a.span,{className:"base"},l.createElement(a.span,{className:"strut",style:{height:"0.4306em"}}),l.createElement(a.span,{className:"mord mathnormal"},"u"),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),l.createElement(a.span,{className:"mrel"},"="),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})),l.createElement(a.span,{className:"base"},l.createElement(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),l.createElement(a.span,{className:"mord mathnormal"},"x"),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),l.createElement(a.span,{className:"mbin"},"−"),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})),l.createElement(a.span,{className:"base"},l.createElement(a.span,{className:"strut",style:{height:"0.7519em"}}),l.createElement(a.span,{className:"mord"},l.createElement(a.span,{className:"mord mathnormal"},"x"),l.createElement(a.span,{className:"msupsub"},l.createElement(a.span,{className:"vlist-t"},l.createElement(a.span,{className:"vlist-r"},l.createElement(a.span,{className:"vlist",style:{height:"0.7519em"}},l.createElement(a.span,{style:{top:"-3.063em",marginRight:"0.05em"}},l.createElement(a.span,{className:"pstrut",style:{height:"2.7em"}}),l.createElement(a.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(a.span,{className:"mord mtight"},l.createElement(a.span,{className:"mord mtight"},"′"))))))))))))),"로 disparity를 구해줍니다.",l.createElement(a.br),"\n","최종적으로 ",l.createElement(a.span,{className:"math math-inline"},l.createElement(a.span,{className:"katex"},l.createElement(a.span,{className:"katex-mathml"},l.createElement(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML"},l.createElement(a.semantics,null,l.createElement(a.mrow,null,l.createElement(a.mi,null,"d"),l.createElement(a.mi,null,"e"),l.createElement(a.mi,null,"p"),l.createElement(a.mi,null,"t"),l.createElement(a.mi,null,"h"),l.createElement(a.mo,{stretchy:"false"},"("),l.createElement(a.mi,null,"x"),l.createElement(a.mo,{stretchy:"false"},")"),l.createElement(a.mo,null,"≈"),l.createElement(a.mfrac,null,l.createElement(a.mn,null,"1"),l.createElement(a.mi,null,"u"))),l.createElement(a.annotation,{encoding:"application/x-tex"},"depth(x) \\approx \\frac{1}{u}")))),l.createElement(a.span,{className:"katex-html","aria-hidden":"true"},l.createElement(a.span,{className:"base"},l.createElement(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),l.createElement(a.span,{className:"mord mathnormal"},"d"),l.createElement(a.span,{className:"mord mathnormal"},"e"),l.createElement(a.span,{className:"mord mathnormal"},"pt"),l.createElement(a.span,{className:"mord mathnormal"},"h"),l.createElement(a.span,{className:"mopen"},"("),l.createElement(a.span,{className:"mord mathnormal"},"x"),l.createElement(a.span,{className:"mclose"},")"),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),l.createElement(a.span,{className:"mrel"},"≈"),l.createElement(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})),l.createElement(a.span,{className:"base"},l.createElement(a.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),l.createElement(a.span,{className:"mord"},l.createElement(a.span,{className:"mopen nulldelimiter"}),l.createElement(a.span,{className:"mfrac"},l.createElement(a.span,{className:"vlist-t vlist-t2"},l.createElement(a.span,{className:"vlist-r"},l.createElement(a.span,{className:"vlist",style:{height:"0.8451em"}},l.createElement(a.span,{style:{top:"-2.655em"}},l.createElement(a.span,{className:"pstrut",style:{height:"3em"}}),l.createElement(a.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(a.span,{className:"mord mtight"},l.createElement(a.span,{className:"mord mathnormal mtight"},"u")))),l.createElement(a.span,{style:{top:"-3.23em"}},l.createElement(a.span,{className:"pstrut",style:{height:"3em"}}),l.createElement(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})),l.createElement(a.span,{style:{top:"-3.394em"}},l.createElement(a.span,{className:"pstrut",style:{height:"3em"}}),l.createElement(a.span,{className:"sizing reset-size6 size3 mtight"},l.createElement(a.span,{className:"mord mtight"},l.createElement(a.span,{className:"mord mtight"},"1"))))),l.createElement(a.span,{className:"vlist-s"},"​")),l.createElement(a.span,{className:"vlist-r"},l.createElement(a.span,{className:"vlist",style:{height:"0.345em"}},l.createElement(a.span))))),l.createElement(a.span,{className:"mclose nulldelimiter"}))))))," 입니다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 472px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 88.63636363636364%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAETElEQVR42lWU+0/TVxjG+WtM/EHRiOKFqDFykWCCylS8UKEpOEUuhjku22QIZQWmyBBdBARRVLAiAkpHaxEDgjKQApuXWpCLqC208hNQ2s++5xTZ1uTN25PzfJ/znPc87+vn9Szi9Swo4WZ+fo7FhXm8C3O43Qt4FhcAL+Ln9XqV/Xnm5uaWQ6y/htvtlji/mWEDlkd5/G3Q0XM9i/7y72irPce1ugLuNlzEOTUqgVarlZiYGOLj40lPTycvL4/ExERiY2M5dOgQhYWFPkJbzy3uVap5ciGa9p8iaE0PJvNMBKfzY7ijPczsXy8k0DIwwMqVK9m+fTv79+8nLi6OnTt34u/vz4oVKzh+/LiPsK+3kbpbKZguJ9FTcJTaM3s4eeIbMnKO0fTrUVzvLBI4NGhh/fr1bN68mQMHDkhl27ZtIygoiLVr15KSkuIj7O9rRH/9BOZijaIwkoaMvZxNVlNZrOb3ylhG3g9J4ODgIOvWrWPHjh3s27cPtVotFW7cuFESJicn+whHhgyY637kj7Jkas6peFj6LfrfjtFQupfSKyqsIy8lcGDgJSEhIbJ+qampZGZmSpKIiAjWrFnzr8KPr0wYmgsxmiswtZVhaCnmkT6XG3mhlBTsYWTUp7C/v4/o6Gi0Wi35+fky5+bmolKpWLVq1X8I3zzB1HIes7Ecc2uZ8r+EVr2Wh5c1GMsTsU+89j2KZUB+XFRUJF9UZJ1OR0JCAps2bZLKJeGsc5LRkX7GxgZ5a32BzdrLqJLfv+1m4t1zXM4pCZyedtDU1ITJZKKjowOz2YzRaKSlpYX6+nq5Fl71ez9mwfD4Cp3dt6m6r6Wm/gfuPSjg9v1C7jWfp7NHLwmHh4cIDAxkw4YNhIWFsXv3brneunWrzLt27cJut+M3ZX9H2+NSOjqraTZfpajyJBU3z1B5K5s65YDWpzeXryw8J15UkEZFRbFlyxYCAgJYvXo1Bw8exOVyKTV02HjWW8ez7hq6e/X8XJFAcU0SV+uzKa5KwtRZ57PN0KC0iPChIBTdERoaSnBwsLSRWC8ptNHytJp6w3maTWX8UnWCjEsqdJc0lF9Loqvrjs/YCqHoksjISMLDw2WnCHOL64uDhCcdDgd+jplxnitebP+zkermEtIvxhObFoLugpoKhdDYdmXJ2BapTFxTqDpy5AinTp2SVxUdI2oqCT8qCg3t1Txqr6XhyU1KizToDiu+OhrA6e/D0d8tXK6hMLB4gLCwUFlDMRzi4zWyrssKna5xei2NdPY10D/8kB7zDR5oVVSVplJdm0tn111JaLPZliZNBllZWXIY5OTkkH02G41GQ1paGl++fMFPgBfc88zOuph22JlxTmOfccjs8Xr+Nw89Hg/2z58Vz47x4cOkVDQxMSGJxJ70oQAvKsPxw+Sk3Pz0cQrr2zdKzYaUwakMXh+fBIsQ+69evWZifByn06k0g5VPyiFfMf8AAiEZ7ckCKj8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="02"\n        title=""\n        src="/static/fa5385a08d60f12ec4b17a608a4cc6d1/3c5de/02.png"\n        srcset="/static/fa5385a08d60f12ec4b17a608a4cc6d1/06437/02.png 176w,\n/static/fa5385a08d60f12ec4b17a608a4cc6d1/ba1c3/02.png 352w,\n/static/fa5385a08d60f12ec4b17a608a4cc6d1/3c5de/02.png 472w"\n        sizes="(max-width: 472px) 100vw, 472px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(a.p,null,"이를 통해 깊이에 대한 정보를 담은 이미지를 ",l.createElement(a.code,null,"depth map"),"이라 합니다.\r\nMatching cost를 계산하기 위한 window의 사이즈에 따라 결과가 다릅니다."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"작은 window : 더 디테일한 정보가 들어가지만 노이즈에 민감해집니다."),"\n",l.createElement(a.li,null,"큰 window: 더 부드럽게 depth map을 형성하지만 디테일이 더 적어집니다."),"\n"),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 34.09090909090909%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABwUlEQVR42l1QS+vhURj+rWwsfQFRNpQFScyCcQkTucSEJJJoJMlGkcS4pIYsNAsll5QZlxDxAeQj+ByuGZee+Z8zu3k257zPOe/7Ps/DqFQq2O12OBwOOJ1OfHU58dlgxrfvP5HLZvCjXken08F0OkWtVkM4HMZ6vUYsFkOv18NsNsPhcECz2YTL5QIjEokgl8uhVqthNBphMBjwSanE+PcvmExf4PV6kc1mEY1GIZPJIBQK6QJyj0QiyGQyCAQC4HA44PP5YMxmMyQSCZQfQ/x+Px2o1+sxHo/paTKZkM/n6UKxWAyNRoN+vw8ejwebzUb/sNlssFgsCAQCMESVVqultt1uNywWC1VM7BDO4/GgUqnAarVSXqfTodvtUqXxeBztdhtSqRRcLhcKhQIMsZJKpZBIJKj0YrFIbWy3WySTScqXy2WaHXknC4j6YDCIQqGA+kfGoVAIPp/vX4alUokOSKfTyOVyaDQaINx+v8dkMsFgMMB8PsdwOMRoNEKr1cJut8NqtcJyucRms8FisaB1tVoFc71ecblccLvdcL/fQerz+Yzn8wmC1+uF0+mEx+OB//F4/MHxeKR9BO/3G38B/QldBc+QmDUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="03"\n        title=""\n        src="/static/4f1ef9b0d25bdf7ac34fe88c14a31c1d/5ebd7/03.png"\n        srcset="/static/4f1ef9b0d25bdf7ac34fe88c14a31c1d/06437/03.png 176w,\n/static/4f1ef9b0d25bdf7ac34fe88c14a31c1d/ba1c3/03.png 352w,\n/static/4f1ef9b0d25bdf7ac34fe88c14a31c1d/5ebd7/03.png 704w,\n/static/4f1ef9b0d25bdf7ac34fe88c14a31c1d/1b1d5/03.png 876w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(a.p,null,"하지만 stereo algorithm을 적용하기 힘든 이미지도 존재합니다.\r\n우리는 matching cost를 사용하여 대응점을 찾고 있지만, 대응점을 찾기 힘든 이미지에는 사용하기 힘들죠.\r\nstereo algorithm을 적용하기 힘든 이미지의 특징은 아래와 같아요."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Textureless surface",l.createElement(a.br),"\n","텍스처가 없거나 단순한 표면은 대응점을 찾기 어렵습니다."),"\n",l.createElement(a.li,null,"Occlusions",l.createElement(a.br),"\n","하나의 카메라에서 보이는 물체가 다른 카메라에서는 보이지 않을 때 일부 지점에서 특징점을 찾을 수 없게됩니다."),"\n",l.createElement(a.li,null,"Repetition regions",l.createElement(a.br),"\n","반복 패턴이 등장하는 경우 실제 대응점이 어느 부분인지 구별하기 힘들어요."),"\n",l.createElement(a.li,null,"Non-lambertian surfaces",l.createElement(a.br),"\n",l.createElement(a.code,null,"Lambertian surface"),"는 모든 방향으로 빛을 균일하게 반사하는 표면을 의미합니다.\r\nnon-lambertian surface는 반대로 빛의 반사가 방향에 따라 다르게 나타나 두 카메라의 위치에 따라 다르게 보여 특징점을 찾기 어렵습니다."),"\n",l.createElement(a.li,null,"Specularities",l.createElement(a.br),"\n","광택이 있는 표면은 빛을 강하게 반사하여 표면의 색상이나 텍스처를 가리거나 왜곡시켜 대응점을 찾기 어렵습니다."),"\n"),"\n",l.createElement(a.p,null,"위 특징을 보면 stereo algorithm은 대응점을 잘 찾을 수 있어야 한다는 가정이 필요합니다."))}var m=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?l.createElement(a,e,l.createElement(s,e)):s(e)},c=t(4316),r=t(1840),i=t(7821),o=t(2654),p=t(4111),d=t(2726),g=t(4480),h=t(2818),b=t(9213),E=t(7213),u=t(9265),A=t(9601),f=t(3071),y=t(6097),w=t(6782),N=t(4891),v=t(3387),x=t(917);const k=e=>{let{data:{mdx:a},children:t}=e;const s=(0,g.sJ)((0,h.cp)(h.eE,!1)),m=(0,g.sJ)((0,h.cp)(h.rf,!1)),c=(0,g.Zl)((0,h.cp)(h.Cy,a.tableOfContents.items));return(0,l.useEffect)((()=>{c(a.tableOfContents.items)}),[a]),(0,x.tZ)(r.Z,null,(0,x.tZ)(Z,null,(0,x.tZ)(p.Z,null)),(0,x.tZ)(z,null,(0,x.tZ)(Q,{className:"navigation",isNavOpened:m},(0,x.tZ)(I,{className:"hide_scroll"},(0,x.tZ)(i.Z,null))),(0,x.tZ)(O,{isNavOpened:m},(0,x.tZ)(j,{isWide:s},(0,x.tZ)(d.Z,{title:a.frontmatter.title,date:a.frontmatter.date}),(0,x.tZ)(n.Zo,{components:{p:E.Z,h1:u.H1,h2:u.H2,h3:u.H3,h4:u.H4,h5:u.H5,h6:u.H6,hr:A.Z,blockquote:f.Z,ul:w.Z,ol:y.Z,pre:N.Z,code:v.Z}},t))),(0,x.tZ)(H,null,(0,x.tZ)(C,null,(0,x.tZ)(o.Z,null)))))},Z=(0,c.Z)("div",{target:"e1ojob7j7"})({name:"11t2x7x",styles:"display:flex;height:var(--header-height);z-index:5;padding:0.6rem 2rem 0.6rem 0.6rem;position:fixed;width:100%;background:var(--background-color);border-bottom:1px solid var(--border-color)"}),z=(0,c.Z)("div",{target:"e1ojob7j6"})({name:"majwgz",styles:"position:relative;display:flex;min-height:calc(100vh - var(--header-height));overflow-x:hidden"}),Q=(0,c.Z)("aside",{target:"e1ojob7j5"})("margin-left:",(e=>e.isNavOpened?"0":"calc(-1 * var(--sidebar-width))"),";flex:0 0 var(--sidebar-width);font-size:0.875rem;overflow-x:hidden;overflow-y:auto;transition:margin 0.25s var(--ease-in-out-quad);@media (min-width: ",b.Z.IPAD_PRO,"px){margin-left:0;}"),I=(0,c.Z)("nav",{target:"e1ojob7j4"})({name:"l4vzaw",styles:"overflow-y:auto;height:100%;padding:var(--body-padding-top) 0 3rem 0;position:fixed;width:var(--sidebar-width);&:-webkit-scrollbar{display:none;}"}),j=(0,c.Z)("main",{target:"e1ojob7j3"})("padding:1rem;width:100%;@media (min-width: ",b.Z.IPAD_AIR,"px){width:",(e=>e.isWide?"90%":"65%"),";}"),O=(0,c.Z)("main",{target:"e1ojob7j2"})("width:calc(100% - 2 * var(--sidebar-width));padding-top:var(--body-padding-top);flex-grow:1;min-width:20rem;display:flex;justify-content:center;opacity:",(e=>e.isNavOpened?.3:1),";@media (min-width: ",b.Z.IPAD_PRO,"px){opacity:1;}"),H=(0,c.Z)("aside",{target:"e1ojob7j1"})("font-size:0.75rem;font-weight:bold;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);width:0;transition:width 0.25s var(--ease-in-out-quad);@media (min-width: ",b.Z.HD,"px){width:var(--sidebar-width);}"),C=(0,c.Z)(I,{target:"e1ojob7j0"})({name:"b40oxt",styles:"padding:0 1rem 0 1rem"});function J(e){return l.createElement(k,e,l.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-components-templates-main-template-tsx-content-file-path-contents-cs-cv-stereo-stereo-mdx-3eed030f9db0eea44b50.js.map