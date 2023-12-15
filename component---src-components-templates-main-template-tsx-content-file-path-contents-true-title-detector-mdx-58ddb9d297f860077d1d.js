"use strict";(self.webpackChunkyeti_docs=self.webpackChunkyeti_docs||[]).push([[854],{7094:function(e,n,t){var a=t(4316),l=(t(7294),t(917));const i=(0,a.Z)("div",{target:"e1k40o190"})("display:inline-block;color:",(e=>e.color),";");n.Z=e=>{let{color:n,children:t}=e;return(0,l.tZ)(i,{color:n},t)}},3832:function(e,n,t){var a=t(4316),l=(t(7294),t(917));const i=(0,a.Z)("code",{target:"e1h9msy90"})({name:"15yct12",styles:"display:block;width:100%;padding:0.2rem 0.4rem 0rem;color:var(--comment-color)"});n.Z=e=>{let{children:n}=e;return(0,l.tZ)(i,null,n)}},7382:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(1151),l=t(7294),i=t(3832);t(7094);function r(e){const n=Object.assign({p:"p",h1:"h1",ul:"ul",li:"li",a:"a",br:"br",span:"span",code:"code",pre:"pre"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"기사의 제목과 내용을 보고 낚시성 기사 여부를 판단하는 모듈을 개발합니다."),"\n",l.createElement(n.h1,{id:"base-모델-선정"},"Base 모델 선정"),"\n",l.createElement(n.p,null,"높은 한국어 인식율을 위해 한국어 문장으로 pre-trained 모델을 찾아보았어요."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/SKTBrain/KoBERT"},"skt/kobert-base-v1"),l.createElement(n.br),"\n","SKT에서 제공하는 KoBERT는 의존성을 추가로 설치해야해서 다른 모델을 더 찾아보고 결정하기로 할게요."),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://huggingface.co/monologg/kobert"},"monologg/kobert"),l.createElement(n.br),"\n","SKT KoBERT 다음으로 다운로드 수가 많은 모델이 huggingface에 있더라구요.\r\n이를 사용하기로 합시다."),"\n"),"\n",l.createElement(n.h1,{id:"데이터-수집"},"데이터 수집"),"\n",l.createElement(n.p,null,"우리는 기사의 제목과 내용을 보고 낚시성 여부를 판단하려고 합니다.\r\n이에 뉴스 기사에 대한 내용과 제목을 크롤링하여 데이터로 만들 필요가 있어요.\r\n하지만 모든 제목과 내용을 하나하나 비교하여 낚시성 여부를 판단 분류하는 것은 현실적으로 어려움이 있어요.\r\n그래서 우리는 기사의 내용과 또 다른 기사의 제목을 사용하여 낚시성 기사를 생산해낼 생각입니다."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/dc073331ff07b287befb7addf481edc8/8ea22/02.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 43.18181818181818%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABqklEQVR42kWSWWvCQBSF8/9/QF9b6EMVSoNoo3WrGve4onVBUWOSiqHQuBK1etpzH9KBYYaZk++eMzdKrVaDYRio1+vgvlgsIqpFsPe38H+OOJ73uOAEx7XwGo+JlpPaarWKXC6HfD4PjtvtBsVxHHQ6Hei6jslkgsPhgHD2Hi+1B7z1nqF1wkh9qHh8v4NaeMJibqLRaKBSqYh+t9vJPgC6rot+v4/RaCRzs9kgpScwsQf4/DZhfc3g7hwY/TKKRh62ZWMwGIiWQM/zUC6X/4HNZhPRaBTJZFLW8Xgs8emU43q9ympZFqhlklgsJnqui8VC4gfA4XAoAIo1TcP0r6quFzCbz+BtvAC4XC7RbreDWSqVkEgkBJjNZrFer7HdbqEwLoGMYNu2vAcrUxyJRHA+nwOHBPH9ut2uJDFNUxwzWTweF9cKO5VOp9FqtXC5XGRl59hJds/3/QDIu0wmIxAaoZ5/BSdj04zCqqxIAMXsOOPQAcGn00mAjMRz6tgUQnnf6/UCPc8U2qQTdopAVlJVVWJPp9PgsTlYjHp+SAj1TBgKhSTlarXCL4IDcaaSmCSDAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="02"\n        title=""\n        src="/static/dc073331ff07b287befb7addf481edc8/5ebd7/02.png"\n        srcset="/static/dc073331ff07b287befb7addf481edc8/06437/02.png 176w,\n/static/dc073331ff07b287befb7addf481edc8/ba1c3/02.png 352w,\n/static/dc073331ff07b287befb7addf481edc8/5ebd7/02.png 704w,\n/static/dc073331ff07b287befb7addf481edc8/8ea22/02.png 1023w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.h1,{id:"longformer-적용"},"Longformer 적용"),"\n",l.createElement(n.p,null,"학습을 진행하기 위해 뉴스 기사 내용을 토큰화하다 보니 최대 토큰 수를 넘어가는 일이 자주 발생하더라구요.\r\n내용이 긴 뉴스에 대해 어느정도 내용의 손실이 발생하는 것입니다.\r\n이를 해결하기 위해 BERT의 설정과 embedding layer를 어느정도 custom하여 최대 토큰 수를 늘리려고 하였으나 이는 메모리 사용량이 증가하다 보니 효율적이지 못한 것 같았아요.\r\n그래서 여러가지 방법을 찾아보았습니다."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/0ab7348766298a2243289f382f91e06d/a9965/00.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 21.59090909090909%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABHElEQVR42h3PwUvCcADF8f1THbp17c+IDh2iswQd6iI7RSxRQtIQMw2dKBhbalA5BSuXc06DPESpmYsoMxGSb/l7xw+PB08KaElWgzIrAS96rcI8WrWEL3mMYVQwLUvYU+8FvxrjrFjgumQI+5lM2FWjBLMpYrksg+EQaTsVYtG7zsLOGgmjIIq3pslWyIfyP1q7M4V1uz2URAQ5dkhW14V9jr/ZV0/wHClE0inehy6SnImyvLfJkneDZLkoinWrgabnkU/DqJd5Yb1+n/NCkYN0HH86JuxjPCKu5YjmMnjCCs+vPST78YErs8rFTVncmqfT6WDbTZxWi3rbYfY7w3VdrIZN03GoNepMp1O+RiMaTpN2q031vkb/bcAfnKAJBkXfy2EAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="00"\n        title=""\n        src="/static/0ab7348766298a2243289f382f91e06d/5ebd7/00.png"\n        srcset="/static/0ab7348766298a2243289f382f91e06d/06437/00.png 176w,\n/static/0ab7348766298a2243289f382f91e06d/ba1c3/00.png 352w,\n/static/0ab7348766298a2243289f382f91e06d/5ebd7/00.png 704w,\n/static/0ab7348766298a2243289f382f91e06d/fd84e/00.png 1056w,\n/static/0ab7348766298a2243289f382f91e06d/a9965/00.png 1171w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"그 중 ",l.createElement(n.code,null,"Longformer"),"라는 모델이 긴 문서에 대한 처리를 가능하게 한다는 논문을 보았어요.\r\n위 그림에서 (b), (c), (D) 처럼 3 가지 테크닉을 사용하여 기존의 fully self-attention을 조금 변형하여 적은 메모리를 사용하고도 효과적인 성능을 내는 원리입니다.\r\n최대 토큰 수가 4096이라 하여 기사 내용을 토큰화 하기엔 충분한 것 같았어요.\r\n하지만 한국어로 pre-trained된 모델이 없어 fine-tuning을 해도 기존보다 더 좋은 성능을 낼 수 있을지 의문이 들었어요.\r\n그래서 이미 한국어로 pre-trained된 KoBERT 모델에 Longformer의 self-attention을 적용하는 방향을 생각하였습니다."),"\n",l.createElement(i.Z,null,l.createElement(n.p,null,"BERT 모델의 최대 토큰 수는 512 입니다.")),"\n",l.createElement(n.p,null,"먼저 huggingface에 이미 구현되어 있는 LongformerSelfAttention를 이용하여 BERT에 적용하려고 해요.\r\nBertSelfAttention와 LongformerSelfAttention의 input이 차이가 있기 때문에 LongformerSelfAttentionForBERT 선언해 적절한 input으로 맞춰줍시다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"class LongBertSelfAttention(nn.Module):\r\n    def __init__(self, config, layer_id):\r\n        super().__init__()\r\n        self.long_self_attn = LongformerSelfAttention(config, layer_id=layer_id)\r\n        \r\n    def forward(\r\n        self,\r\n        hidden_states: torch.Tensor,\r\n        attention_mask: Optional[torch.FloatTensor] = None,\r\n        head_mask: Optional[torch.FloatTensor] = None,\r\n        encoder_hidden_states: Optional[torch.FloatTensor] = None,\r\n        encoder_attention_mask: Optional[torch.FloatTensor] = None,\r\n        past_key_value: Optional[Tuple[Tuple[torch.FloatTensor]]] = None,\r\n        output_attentions: Optional[bool] = False,\r\n    ):\r\n\r\n        # bs x seq_len x seq_len -> bs x seq_len 으로 변경\r\n        batch_size, seq_len, _ = hidden_states.size()\r\n        # attention_mask = attention_mask.squeeze()\r\n        attention_mask = attention_mask.view(batch_size, seq_len)\r\n\r\n        is_index_masked = attention_mask < 0\r\n        is_index_global_attn = attention_mask > 0\r\n        is_global_attn = is_index_global_attn.flatten().any().item()\r\n\r\n        outputs = self.long_self_attn(\r\n            hidden_states,\r\n            attention_mask=attention_mask,\r\n            layer_head_mask=None,\r\n            is_index_masked=is_index_masked,\r\n            is_index_global_attn=is_index_global_attn,\r\n            is_global_attn=is_global_attn,\r\n            output_attentions=output_attentions,\r\n        )\r\n\r\n        return outputs\n")),"\n",l.createElement(n.p,null,"is_index_masked, is_index_global_attn, is_global_attn 는 나중에 정리"),"\n",l.createElement(n.p,null,"또 우리가 수정한 모델에 대해 huggingface에 업로드하고 나중에 불러올 수 있도록 하기 위해 모델에 대한 class를 정의해줍시다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"class LongBertForSequenceClassification(BertForSequenceClassification):\r\n    def __init__(self, config):\r\n        super().__init__(config)\r\n        for i, layer in enumerate(self.bert.encoder.layer):\r\n            layer.attention.self = LongBertSelfAttention(config, layer_id=i)\n")),"\n",l.createElement(n.p,null,"자 이제 모델에 대해서 설정값을 수정하고 self attention 레이어를 변경해줄 차례에요.\r\n먼저 BERT의 설정에서 최대 토큰 수를 변경하고 attention window의 크기를 설정해줍시다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"max_token_size = 4096\r\nconfig = model.config\r\nconfig.max_position_embeddings = max_token_size\r\nconfig.attention_window = [attention_window] * config.num_hidden_layers\n")),"\n",l.createElement(n.p,null,"이제 position embedding의 크기를 늘려줘야 해요.\r\n기존에는 512가 최대이기 떄문에 position_embeddings의 weight이 (512, 768)의 형태로 되어 있을거예요.\r\n우리는 이를 (max_token_size, 768)의 형태로 늘려주는 작업을 진행합니다.\r\n그리고 position_ids 역시 0~511에서 0~(max_token_size - 1)로 범위를 늘려줘야 합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"current_max_token_size = model.bert.embeddings.position_embeddings.weight.size(0)\r\nnum_repeats = math.ceil(max_token_size / current_max_token_size)\r\nembed_weight = model.bert.embeddings.position_embeddings.weight.data\r\nembed_weight = embed_weight.repeat(num_repeats, 1)[:max_token_size,:]\r\nmodel.bert.embeddings.position_embeddings.weight.data = embed_weight\r\nmodel.bert.embeddings.position_ids.data = torch.arange(0,max_token_size).view(1, -1)\n")),"\n",l.createElement(i.Z,null,l.createElement(n.p,null,"이때 조심해야 해요. RoBERTa와 같이 positional_ids 에서 0, 1을 특별한 용도로 사용하기 위한 모델도 있기 때문입니다.\r\n잘 조사해보고 변경해야겠죠?")),"\n",l.createElement(n.p,null,"이제 self attention 레이어를 변경해줍시다.\r\nLongformer의 self attention은 query, key, value뿐 아니라 query_global, key_global, value_global이 있습니다.\r\n각각 기존 BERT의 query, key, value와 동일한 값을 가지도록 만들어 줍시다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"for i, layer in enumerate(model.bert.encoder.layer):\r\n    long_bert_self_attn = LongBertSelfAttention(config, layer_id=i)\r\n    long_bert_self_attn.long_self_attn.query = layer.attention.self.query\r\n    long_bert_self_attn.long_self_attn.key = layer.attention.self.key\r\n    long_bert_self_attn.long_self_attn.value = layer.attention.self.value\r\n    long_bert_self_attn.long_self_attn.query_global = copy.deepcopy(layer.attention.self.query)\r\n    long_bert_self_attn.long_self_attn.key_global = copy.deepcopy(layer.attention.self.key)\r\n    long_bert_self_attn.long_self_attn.value_global = copy.deepcopy(layer.attention.self.value)\r\n    layer.attention.self = long_bert_self_attn\n")),"\n",l.createElement(n.p,null,"단순히 기존 BERT모델의 max token과 embedding만 늘렸을 때와\r\nLongformer의 self-attention 방식을 적용하였을 때 메모리 사용량 차이를 비교해 볼게요.\r\n동일한 길이의 토큰을 이용하고, LongBERT의 경우 다양한 attention window을 설정하여 테스트를 진행하겠습니다."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 704px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1517a0c8692e312af23c261b3d76724b/f4b34/01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 31.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABaUlEQVR42j2Q7WvTUBTG8/8jyhz0u8LYB0W7IYJjYw7RbEmT2C7N+5olKWmalrzYONmnn+cG9MOF55zzPL9z79UuZxFn3+6ZrVpugh3mY8/tQ8u1t8MS/T1uKZonwrzm9GLG+yuLL3bG3arHTDu++jv0pBHdi79D+/gj4uRqwdtLl6PznxxPDV7LeXW+YHJm8OKdzm1Q4iQVby4WnF4vmXxecDSdjfOXU4fJpznHH3RObkK0ssiYOxarJOTQ7gncOQ+Rz/PQE/kuaRzw/Oc3fdfgzh0Cz6WpKyrJRaIHyTT1Rvr3PP1q0cIwxDRNbNshLwoCqcMootyIKQjxfJ++79lut9wZBpZtEScJj1mGL7NivR5zy6XHtq7RVNMQo+M4bEZIQCTA/X7/Xw/DMAJ1XZfFNokAixGypKoq1gL1PI+ukz/MZFMcx6OpLEtUrc4/Y57nHA4HmqZBvUb5VE/N0jQdL6FyCq6W/AWcyaZRo04DwwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="01"\n        title=""\n        src="/static/1517a0c8692e312af23c261b3d76724b/5ebd7/01.png"\n        srcset="/static/1517a0c8692e312af23c261b3d76724b/06437/01.png 176w,\n/static/1517a0c8692e312af23c261b3d76724b/ba1c3/01.png 352w,\n/static/1517a0c8692e312af23c261b3d76724b/5ebd7/01.png 704w,\n/static/1517a0c8692e312af23c261b3d76724b/fd84e/01.png 1056w,\n/static/1517a0c8692e312af23c261b3d76724b/67a79/01.png 1408w,\n/static/1517a0c8692e312af23c261b3d76724b/f4b34/01.png 1457w"\n        sizes="(max-width: 704px) 100vw, 704px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"기존의 BERT 모델에 비해 LongBERT의 경우 학습, 추론시 모두 더 적은 메모리 용량을 사용하는 것을 볼 수 있습니다.\r\n또한 최대 토큰수 증가에 따른 메모리 사용량이 기존 BERT에 비해 LongBERT가 더 적은 폭으로 증가하는 것을 확인할 수 있어요.\r\n즉, 문서의 길이가 길면 길수록 LongBERT를 이용하여 더 효율적으로 학습과 추론을 수행할 수 있겠어요."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},s=t(4316),d=t(1840),c=t(7821),g=t(2654),m=t(4111),p=t(2726),b=t(4480),f=t(2818),_=t(9213),u=t(7213),h=t(9265),A=t(9601),y=t(3071),w=t(6097),k=t(6782),E=t(4891),v=t(3387),x=t(917);const Z=e=>{let{data:{mdx:n,file:t},children:i}=e;const r=(0,b.sJ)((0,f.cp)(f.eE,!1)),o=(0,b.sJ)((0,f.cp)(f.rf,!1)),s=(0,b.Zl)((0,f.cp)(f.Cy,n.tableOfContents.items));return(0,l.useEffect)((()=>{s(n.tableOfContents.items)}),[n]),(0,x.tZ)(d.Z,null,(0,x.tZ)(B,null,(0,x.tZ)(m.Z,null)),(0,x.tZ)(T,null,(0,x.tZ)(z,{className:"navigation",isNavOpened:o},(0,x.tZ)(R,null,(0,x.tZ)(c.Z,null))),(0,x.tZ)(H,{isNavOpened:o},(0,x.tZ)(q,{isWide:r},(0,x.tZ)(p.Z,{title:n.frontmatter.title,modifiedTime:t.modifiedTime}),(0,x.tZ)(a.Zo,{components:{p:u.Z,h1:h.H1,h2:h.H2,h3:h.H3,h4:h.H4,h5:h.H5,h6:h.H6,hr:A.Z,blockquote:y.Z,ul:k.Z,ol:w.Z,pre:E.Z,code:v.Z}},i))),(0,x.tZ)(O,null,(0,x.tZ)(j,null,(0,x.tZ)(g.Z,null)))))},B=(0,s.Z)("div",{target:"e1ojob7j7"})({name:"11t2x7x",styles:"display:flex;height:var(--header-height);z-index:5;padding:0.6rem 2rem 0.6rem 0.6rem;position:fixed;width:100%;background:var(--background-color);border-bottom:1px solid var(--border-color)"}),T=(0,s.Z)("div",{target:"e1ojob7j6"})({name:"majwgz",styles:"position:relative;display:flex;min-height:calc(100vh - var(--header-height));overflow-x:hidden"}),z=(0,s.Z)("aside",{target:"e1ojob7j5"})("margin-left:",(e=>e.isNavOpened?"0":"calc(-1 * var(--sidebar-width))"),";flex:0 0 var(--sidebar-width);font-size:0.875rem;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);transition:margin 0.25s var(--ease-in-out-quad);@media (min-width: ",_.Z.IPAD_PRO,"px){margin-left:0;}"),R=(0,s.Z)("nav",{target:"e1ojob7j4"})({name:"1u006gd",styles:"position:fixed;width:var(--sidebar-width)"}),q=(0,s.Z)("main",{target:"e1ojob7j3"})("padding:1rem;width:100%;@media (min-width: ",_.Z.IPAD_AIR,"px){width:",(e=>e.isWide?"90%":"65%"),";}"),H=(0,s.Z)("main",{target:"e1ojob7j2"})("width:calc(100% - 2 * var(--sidebar-width));padding-top:var(--body-padding-top);flex-grow:1;min-width:20rem;display:flex;justify-content:center;opacity:",(e=>e.isNavOpened?.3:1),";@media (min-width: ",_.Z.IPAD_PRO,"px){opacity:1;}"),O=(0,s.Z)("aside",{target:"e1ojob7j1"})("font-size:0.75rem;font-weight:bold;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);width:0;transition:width 0.25s var(--ease-in-out-quad);@media (min-width: ",_.Z.HD,"px){width:var(--sidebar-width);}"),j=(0,s.Z)(R,{target:"e1ojob7j0"})({name:"b40oxt",styles:"padding:0 1rem 0 1rem"});function S(e){return l.createElement(Z,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-components-templates-main-template-tsx-content-file-path-contents-true-title-detector-mdx-58ddb9d297f860077d1d.js.map