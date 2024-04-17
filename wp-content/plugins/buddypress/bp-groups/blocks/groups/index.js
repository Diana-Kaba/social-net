!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,r=window.wp.element,s=window.wp.apiFetch,n=e.n(s),a=window.wp.blockEditor,o=window.wp.components,l=window.wp.i18n,i=window.wp.url,d=window.bp.blockComponents,u=window.bp.blockData;const p=[{label:(0,l.__)("None","buddypress"),value:"none"},{label:(0,l.__)("Thumb","buddypress"),value:"thumb"},{label:(0,l.__)("Full","buddypress"),value:"full"}],c={public:(0,l.__)("Public","buddypress"),private:(0,l.__)("Private","buddypress"),hidden:(0,l.__)("Hidden","buddypress")},m=[{label:(0,l.__)("None","buddypress"),value:"none"},{label:(0,l.__)("Group's description","buddypress"),value:"description"},{label:(0,l.__)("Last time the group was active","buddypress"),value:"active"},{label:(0,l.__)("Amount of group members","buddypress"),value:"popular"}];var b=window.lodash;const _=e=>e&&e.status&&c[e.status]?c[e.status]:null;var y=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/groups","title":"Groups","category":"widgets","icon":"buddicons-groups","description":"BuddyPress Groups.","keywords":["BuddyPress","groups","community"],"textdomain":"buddypress","attributes":{"itemIDs":{"type":"array","items":{"type":"integer"},"default":[]},"avatarSize":{"type":"string","default":"full"},"displayGroupName":{"type":"boolean","default":true},"extraInfo":{"type":"string","default":"none"},"layoutPreference":{"type":"string","default":"list"},"columns":{"type":"number","default":2}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(y,{icon:{background:"#fff",foreground:"#d84800",src:"buddicons-groups"},edit:({attributes:e,setAttributes:t,isSelected:s})=>{const c=(0,a.useBlockProps)(),y=(0,u.isActive)("groups","avatar"),{itemIDs:g,avatarSize:v,displayGroupName:f,extraInfo:h,layoutPreference:w,columns:E}=e,k=0!==g.length,[N,x]=(0,r.useState)([]),C=[{icon:"text",title:(0,l.__)("List view","buddypress"),onClick:()=>t({layoutPreference:"list"}),isActive:"list"===w},{icon:"screenoptions",title:(0,l.__)("Grid view","buddypress"),onClick:()=>t({layoutPreference:"grid"}),isActive:"grid"===w}];let P,S="bp-block-groups avatar-"+v,I=m;return"grid"===w&&(S+=" is-grid columns-"+E,I=m.filter((e=>"description"!==e.value))),k&&g.length!==N.length&&n()({path:(0,i.addQueryArgs)("/buddypress/v1/groups",{populate_extras:!0,include:g})}).then((e=>{x((0,b.sortBy)(e,[e=>g.indexOf(e.id)]))})),N.length&&(P=N.map((e=>{let n=!1,a="group-content";return"list"===w&&"description"===h&&e.description&&e.description.rendered&&(n=!0,a="group-content has-description"),(0,r.createElement)("div",{key:"bp-group-"+e.id,className:a},s&&(0,r.createElement)(o.Tooltip,{text:(0,l.__)("Remove group","buddypress")},(0,r.createElement)(o.Button,{className:"is-right",onClick:()=>{var r;(r=e.id)&&-1!==g.indexOf(r)&&(x((0,b.reject)(N,["id",r])),t({itemIDs:(0,b.remove)(g,(e=>e!==r))}))},label:(0,l.__)("Remove group","buddypress")},(0,r.createElement)(o.Dashicon,{icon:"no"}))),y&&"none"!==v&&(0,r.createElement)("div",{className:"item-header-avatar"},(0,r.createElement)("a",{href:e.link,target:"_blank"},(0,r.createElement)("img",{key:"avatar-"+e.id,className:"avatar",alt:(0,l.sprintf)((0,l.__)("Profile photo of %s","buddypress"),e.name),src:e.avatar_urls[v]}))),(0,r.createElement)("div",{className:"group-description"},f&&(0,r.createElement)("strong",null,(0,r.createElement)("a",{href:e.link,target:"_blank"},e.name)),n&&(0,r.createElement)("div",{className:"group-description-content",dangerouslySetInnerHTML:{__html:e.description.rendered}}),"active"===h&&e.last_activity&&e.last_activity_diff&&(0,r.createElement)("time",{dateTime:e.last_activity},(0,l.sprintf)(/* translators: %s: last activity timestamp (e.g. "Active 1 hour ago") */
(0,l.__)("Active %s","buddypress"),e.last_activity_diff)),"popular"===h&&e.total_member_count&&(0,r.createElement)("div",{className:"group-meta"},(0,l.sprintf)(/* translators: 1: number of group memberss. */
(0,l._n)("%1$d member","%1$d members",e.total_member_count,"buddypress"),e.total_member_count))))}))),(0,r.createElement)("div",{...c},(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(o.PanelBody,{title:(0,l.__)("Settings","buddypress"),initialOpen:!0},(0,r.createElement)(o.ToggleControl,{label:(0,l.__)("Display the group's name","buddypress"),checked:!!f,onChange:()=>{t({displayGroupName:!f})},help:f?(0,l.__)("Include the group's name.","buddypress"):(0,l.__)("Toggle to include group's name.","buddypress")}),y&&(0,r.createElement)(o.SelectControl,{label:(0,l.__)("Avatar size","buddypress"),value:v,options:p,help:(0,l.__)('Select "None" to disable the avatar.',"buddypress"),onChange:e=>{t({avatarSize:e})}}),(0,r.createElement)(o.SelectControl,{label:(0,l.__)("Group extra information","buddypress"),value:h,options:I,help:(0,l.__)('Select "None" to show no extra information.',"buddypress"),onChange:e=>{t({extraInfo:e})}}),"grid"===w&&(0,r.createElement)(o.RangeControl,{label:(0,l.__)("Columns","buddypress"),value:E,onChange:e=>t({columns:e}),min:2,max:4,required:!0}))),(0,r.createElement)(a.BlockControls,null,(0,r.createElement)(o.ToolbarGroup,{controls:C})),k&&(0,r.createElement)("div",{className:S},P),(s||0===g.length)&&(0,r.createElement)(o.Placeholder,{icon:k?"":"groups",label:k?"":(0,l.__)("BuddyPress Groups","buddypress"),instructions:(0,l.__)("Start typing the name of the group you want to add to the groups list.","buddypress"),className:0!==g.length?"is-appender":"is-large"},(0,r.createElement)(d.AutoCompleter,{component:"groups",objectQueryArgs:{show_hidden:!1,exclude:g},slugValue:_,ariaLabel:(0,l.__)("Group's name","buddypress"),placeholder:(0,l.__)("Enter Group's name here…","buddypress"),onSelectItem:({itemID:e})=>{e&&-1===g.indexOf(e)&&t({itemIDs:[...g,parseInt(e,10)]})},useAvatar:y})))}})}();