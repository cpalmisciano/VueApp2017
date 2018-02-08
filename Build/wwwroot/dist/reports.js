webpackJsonp([10],{19:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var u=function(){return t.e(0).then(t.bind(null,9))},a=function(){return t.e(1).then(t.bind(null,10))};i.default={components:{Header:u,Footer:a}}},2:function(e,i,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=t(0),o=u(a),s=t(5),n=u(s),r=t(3),m=u(r);o.default.use(n.default);var l="./VueCore/",c={rootUrl:l,authToken:null,data:null,books:null},d={GET_TOKEN:function(e){return console.log("in GET_TOKEN"),m.default.getToken(c.rootUrl).then(function(i){return e.commit("GET_TOKEN_MUTATION",i)}).catch(function(i){return e.commit("API_FAILURE_MUTATION",i)})},GET_DATA:function(e){return console.log("in GET_DATA"),m.default.getData(c.rootUrl).then(function(i){return e.commit("GET_DATA_MUTATION",i)}).catch(function(i){return e.commit("API_FAILURE_MUTATION",i)})},GET_BOOKS:function(e){return console.log("in GET_BOOKS"),m.default.getBooks(c.rootUrl).then(function(i){return e.commit("GET_BOOKS_MUTATION",i)}).catch(function(i){return e.commit("API_FAILURE_MUTATION",i)})}},p={GET_TOKEN_MUTATION:function(e,i){console.log(i),e.authToken=Object.assign({},i.token)},GET_DATA_MUTATION:function(e,i){e.data=Object.assign({},i)},GET_BOOKS_MUTATION:function(e,i){e.books=Object.assign({},i)},API_FAILURE_MUTATION:function(e,i){}},q=new n.default.Store({state:c,actions:d,mutations:p,getters:{},modules:{}});i.default=q},3:function(e,i,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=t(0),o=(u(a),t(4)),s=u(o);i.default={setToken:function(e){s.default.defaults.headers.common.Authorization="Bearer "+e},getToken:function(e){return new Promise(function(i,t){s.default.get(e+"Home/requestToken").then(function(e){i(e.data)}).catch(function(e){t(e.status)})})},verifyToken:function(e){return new Promise(function(i){s.default.get(e+"Home/verifyToken").then(function(e){i(e.data)}).catch(function(e){reject(e.status)})})},getData:function(e){return new Promise(function(i,t){s.default.get(e+"api/Data/getData").then(function(e){i(e.data)}).catch(function(e){t(e.status)})})},getBooks:function(e){return new Promise(function(i,t){s.default.get(e+"api/Data/getBooks").then(function(e){i(e.data)}).catch(function(e){t(e.status)})})}}},45:function(e,i,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},o=t(0),s=u(o),n=t(46),r=u(n),m=t(48),l=u(m),c=t(2),d=u(c);s.default.config.productionTip=!1,new s.default(a({router:l.default,store:d.default},r.default)).$mount("#app")},46:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var u=t(19),a=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(i,e,function(){return u[e]})}(o);var s=t(47),n=t(7),r=n(a.a,s.a,!1,null,null,null);r.options.__file="Areas\\Reports\\src\\components\\App.vue",i.default=r.exports},47:function(e,i,t){"use strict";var u=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("Header"),e._v(" "),t("h1",[e._v("Reports")]),e._v(" "),t("router-link",{attrs:{to:"/"}},[e._v("Reports Home")]),e._v(" | "),t("router-link",{attrs:{to:"/view1"}},[e._v("Reports View 1")]),e._v(" "),t("router-view"),e._v(" "),t("p",[e._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit eligendi ipsum reiciendis ipsam, expedita quam maxime harum officiis doloribus nesciunt inventore vitae commodi molestiae! Voluptatum, animi! Similique placeat, nam debitis, repellat tempore fuga expedita quisquam id quod nemo tenetur. Nobis doloribus necessitatibus tempore voluptatem porro vel similique recusandae saepe explicabo atque quia ex, architecto eveniet, obcaecati, adipisci voluptates quo. Explicabo obcaecati dolorum ipsum, numquam est, harum tenetur unde error totam eveniet doloremque optio illum eum laboriosam, dolore accusantium qui voluptate quisquam debitis ea aliquid! Quam ullam id officiis aperiam cupiditate dicta sequi, nulla dolorum eius eligendi dolorem ea, numquam maxime, non iste! Adipisci deleniti minima corporis sunt possimus ratione unde, ea cum, porro animi harum aut deserunt similique sapiente praesentium ut illo rem, ullam est voluptatum! Enim officia non, adipisci? Voluptatum ducimus blanditiis iusto repellendus aliquam nesciunt laboriosam hic quis, in ipsa, nemo harum molestiae tenetur officia similique inventore rerum quibusdam et, pariatur, sapiente dicta dolore amet. Maiores, illo aliquam ex quisquam libero vero ab cum, eum magni aperiam similique accusantium, est expedita perspiciatis id inventore possimus quasi? A sapiente labore repellendus ea, accusantium blanditiis, temporibus error aliquam dolores, laudantium distinctio pariatur fugit unde? Fuga dolores eius totam velit numquam, id vel cum quis sequi obcaecati magnam quas quasi alias, perspiciatis doloribus quae rerum tenetur iure ipsa fugit maxime animi voluptatibus iste? Quod voluptatem sed magni eveniet magnam odit, recusandae modi adipisci perferendis ratione necessitatibus placeat cum repudiandae numquam mollitia quibusdam, quisquam minus non porro saepe veniam corporis. Eveniet, harum, adipisci. Aperiam molestiae, vitae culpa est fugit quas deserunt repudiandae autem quasi. Nobis placeat, reiciendis vero quaerat vel quae dolor voluptatibus sed eligendi facilis accusamus harum id officia asperiores mollitia itaque ipsa ut dolorem illo similique dolore vitae fugit accusantium! Animi harum quibusdam enim doloremque explicabo tempora dolore, neque, repellendus, in ea aperiam doloribus iste maiores natus aliquid provident? Quibusdam ex, cupiditate, dolorum iure cumque optio dolor molestias ut quo, voluptate deserunt quas tenetur quisquam quod nostrum eveniet sed eius voluptates vero ipsum hic vitae? Neque obcaecati dolor possimus sunt fugiat placeat saepe, culpa quae libero atque fugit corporis natus quia quo consectetur, incidunt, ab modi mollitia veritatis? Assumenda accusantium illum quam eveniet qui quidem provident omnis id, dolorem praesentium quos debitis, quas maxime sapiente vel ipsa eius delectus eum dolores amet necessitatibus? Voluptas soluta, delectus perferendis illum voluptate, ea architecto non quasi eveniet eos dolore dolorum voluptatem sequi quaerat quam consequatur reiciendis velit! Quos cumque doloremque sed! Repudiandae quam voluptatem modi a, error natus odio molestiae. Atque obcaecati quisquam maxime, eius nobis laborum explicabo, quasi nam vero reprehenderit repellendus magni maiores esse animi fugiat aut ut soluta? Nobis praesentium odio at animi quas maxime quia ea recusandae corrupti, esse ipsam corporis ad quam facere illum eius, commodi dolore pariatur perferendis! Quas adipisci qui neque beatae soluta quaerat repellendus aliquam, accusantium. Et incidunt veniam, doloribus sunt distinctio quis, consequuntur, minima nobis, dolor maxime fugiat! Ut magni libero accusamus minus nesciunt, est suscipit dignissimos voluptatem quia accusantium temporibus. Assumenda sunt magni aliquid nihil et maxime! Recusandae quas placeat veritatis ut! Velit maiores eum minus, alias veritatis cumque nihil ducimus aspernatur eos numquam suscipit quidem ut atque doloribus aliquid facere ad voluptatibus eius. Ad illo, debitis, voluptas obcaecati, ab harum pariatur laborum quos et fugit omnis iste aspernatur? Accusamus quia, voluptate deleniti eligendi sed, quas qui dolores quae accusantium sint est saepe, vero fugit excepturi distinctio iste quasi repellendus molestias commodi blanditiis nemo. Et porro, accusamus distinctio. Tempore eius rem eaque repudiandae impedit distinctio iste dignissimos aperiam deleniti ducimus. Architecto aliquid magni neque quasi, distinctio, aperiam sit autem repellendus qui molestias corporis facilis adipisci excepturi quibusdam optio quod porro, inventore consequuntur totam minus ex magnam odit pariatur. Nobis cupiditate quia error, odio eius a tenetur totam commodi dignissimos labore quibusdam, ut? Ducimus explicabo amet tenetur illo numquam beatae, dolorem, maiores vel quaerat culpa hic fugit modi deserunt. Velit omnis, voluptates maiores atque suscipit. Eaque modi ullam, quisquam! Doloremque, eveniet. Consequuntur, aperiam blanditiis sint. Reprehenderit consequatur aliquam necessitatibus sit debitis, dolores architecto est nesciunt quaerat non eius doloribus sequi, assumenda eaque, libero adipisci illum, officia odit ipsa. Nihil dolore earum architecto quia sunt voluptatibus quidem tempore laudantium delectus mollitia aspernatur tempora veritatis dolores quasi, a, modi id consequuntur ea quae, autem dicta illum atque. Ratione, enim tempora ex eum fugiat ipsam eaque veritatis assumenda consequatur tenetur quaerat rem odit blanditiis hic perspiciatis temporibus ad recusandae impedit nesciunt officiis porro esse. Ipsam enim repudiandae vitae, aliquid autem atque earum. Fugit, beatae architecto libero, aliquam sint enim! Itaque blanditiis alias nam quod asperiores cum excepturi quam iusto ad a officiis dolor, laboriosam et omnis ipsum id. Expedita aperiam fuga a corrupti saepe fugit laborum nulla ex eius, officia minus doloribus vel, dolorum alias suscipit accusamus. Nobis eaque pariatur numquam repudiandae vitae quis harum debitis neque accusamus! Vero temporibus quos, aut expedita sunt cupiditate accusantium labore facere, possimus, quasi et nulla nesciunt beatae, optio eos. Aspernatur dolor excepturi laborum non, quis minima. Esse ea sunt eveniet ut excepturi repellat a nobis veritatis neque quo minima, rerum, laborum totam odit quidem tempore harum fugit exercitationem ipsam voluptate pariatur. Autem adipisci nobis, alias excepturi laboriosam neque quae enim, magni est vel sapiente reiciendis recusandae quo, ipsum! Eligendi praesentium dolor placeat delectus a, perspiciatis totam soluta magnam aperiam. Totam eaque dolorum facilis reprehenderit corporis consectetur sit incidunt delectus impedit non tempora porro corrupti commodi, similique, dolor deleniti temporibus sunt. Officia ipsam ad consequatur error nihil culpa cum sequi numquam enim eligendi, quia cupiditate vel rerum unde qui ratione harum quo, maiores quibusdam, temporibus quaerat corporis mollitia eveniet voluptas odit! Animi aperiam veritatis voluptatem dignissimos temporibus vitae ducimus ipsa dicta. Cupiditate blanditiis assumenda atque possimus fuga delectus reprehenderit commodi! Magnam pariatur eaque fugiat nostrum sint soluta tenetur numquam doloremque, laborum enim quidem sapiente inventore recusandae vel ut mollitia minima et quia id voluptas! Nostrum dicta, est eligendi. Et aut quod corrupti deleniti quas. Hic quae, suscipit vero, recusandae, error voluptate commodi rerum odio ducimus dicta molestias illo praesentium architecto.\n  ")]),e._v(" "),t("Footer")],1)},a=[];u._withStripped=!0;var o={render:u,staticRenderFns:a};i.a=o},48:function(e,i,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=t(0),o=u(a),s=t(6),n=u(s),r=function(){return t.e(5).then(t.bind(null,57))},m=function(){return t.e(4).then(t.bind(null,58))};o.default.use(n.default);var l=new n.default({base:"/reports/",routes:[{path:"/",component:r},{path:"/view1",component:m}]});i.default=l}},[45]);