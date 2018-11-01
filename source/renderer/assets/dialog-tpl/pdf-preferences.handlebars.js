module.exports = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,"=",((stack1 = (depths[1] != null ? depths[1].pdf : depths[1])) != null ? stack1.margin_unit : stack1),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected=\"selected\"";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,"=",((stack1 = (depths[1] != null ? depths[1].pdf : depths[1])) != null ? stack1.papertype : stack1),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return "                        <option value=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(alias2,depth0,"=",((stack1 = (depths[1] != null ? depths[1].pdf : depths[1])) != null ? stack1.pagenumbering : stack1),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias1((helpers.i18n || (depth0 && depth0.i18n) || alias3).call(alias2,"preferences.pdf.pagenumbering_",depth0,{"name":"i18n","hash":{},"data":data}))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"dialog\">\n    <h1>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.title",{"name":"i18n","hash":{},"data":data}))
    + "</h1>\n    <form action=\"\" method=\"GET\" id=\"dialog\">\n        <div id=\"prefs-tabs\" class=\"clear\">\n            <ul>\n                <li><a href=\"#prefs-tabs-general\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.metadata",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n                <li><a href=\"#prefs-tabs-page\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.page",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n                <li><a href=\"#prefs-tabs-font\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.font",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n            </ul>\n            <!-- Metadata for PDF files -->\n            <div id=\"prefs-tabs-general\">\n                <p>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.metadata_intro",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                <label for=\"pdf.author\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.author_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                <input type=\"text\" name=\"pdf.author\" id=\"pdf.author\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.author : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.author",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                <label for=\"pdf.keywords\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.keywords_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                <input type=\"text\" name=\"pdf.keywords\" if=\"pdf.keywords\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.keywords : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.keywords",{"name":"i18n","hash":{},"data":data}))
    + "\">\n            </div>\n            <!-- Page layout -->\n            <div id=\"prefs-tabs-page\">\n                <p>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.page_intro",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                <hr>\n                <div class=\"clear\"></div>\n                <div class=\"box-left\">\n                    <div class=\"paper a4paper\">\n                        <input class=\"tmargin\" type=\"number\" min=\"0\" max=\"9999\" step=\"0.1\" name=\"pdf.tmargin\" id=\"pdf.tmargin\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.tmargin : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.tmargin",{"name":"i18n","hash":{},"data":data}))
    + "\" data-tippy-content=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.tmargin_label",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                        <input class=\"rmargin\" type=\"number\" min=\"0\" max=\"9999\" step=\"0.1\" name=\"pdf.rmargin\" id=\"pdf.rmargin\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.rmargin : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.rmargin",{"name":"i18n","hash":{},"data":data}))
    + "\" data-tippy-content=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.rmargin_label",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                        <input class=\"bmargin\" type=\"number\" min=\"0\" max=\"9999\" step=\"0.1\" name=\"pdf.bmargin\" id=\"pdf.bmargin\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.bmargin : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.bmargin",{"name":"i18n","hash":{},"data":data}))
    + "\" data-tippy-content=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.bmargin_label",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                        <input class=\"lmargin\" type=\"number\" min=\"0\" max=\"9999\" step=\"0.1\" name=\"pdf.lmargin\" id=\"pdf.lmargin\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.lmargin : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.lmargin",{"name":"i18n","hash":{},"data":data}))
    + "\" data-tippy-content=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.lmargin_label",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                    </div>\n                </div>\n                <div class=\"box-right\">\n                    <label for=\"pdf.margin_unit\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.unit_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <select name=\"pdf.margin_unit\" id=\"pdf.margin_-unit\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.availableMarginUnits : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                    <hr>\n                    <label for=\"pdf.papertype\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.papertype",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <select name=\"pdf.papertype\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.supportedPapertypes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                    <hr>\n                    <label for=\"pdf.pagenumbering\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.pagenumbering_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <select name=\"pdf.pagenumbering\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.availablePageNumberingSystems : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <!-- Font options -->\n            <div id=\"prefs-tabs-font\">\n                <p>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.font_intro",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n                <div class=\"box-left\">\n                    <label for=\"pdf.mainfont\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.mainfont_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <input type=\"text\" name=\"pdf.mainfont\" id=\"mainfont\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.mainfont : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.mainfont",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                    <label for=\"pdf.sansfont\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.sansfont_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <input type=\"text\" name=\"pdf.sansfont\" id=\"sansfont\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.sansfont : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.sansfont",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                    <label for=\"pdf.fontsize\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.fontsize_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <input type=\"number\" min=\"0\" max=\"10000\" step=\"1\" name=\"pdf.fontsize\" id=\"fontsize\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.fontsize : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.fontsize",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                    <label for=\"pdf.lineheight\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.lineheight_label",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n                    <input type=\"number\" min=\"0\" max=\"1000\" step=\"1\" name=\"pdf.lineheight\" id=\"lineheight\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pdf : depth0)) != null ? stack1.lineheight : stack1), depth0))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.pdf.lineheight",{"name":"i18n","hash":{},"data":data}))
    + "\">\n                </div>\n                <div class=\"box-right\">\n                    <!-- This is the preview tab. It shows how everything will look afterwards. -->\n                    <h1 class=\"pdf-preview\">Lorem Ipsum Dolor</h1>\n                    <p class=\"pdf-preview\">\n                        Lorem ipsum dolor sit amet, consectetur adipisici elit,\n                        sed eiusmod tempor incidunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquid ex ea\n                        commodi consequat. Quis aute iure reprehenderit in\n                        voluptate velit esse cillum dolore eu fugiat nulla\n                        pariatur. Excepteur sint obcaecat cupiditat non proident,\n                        sunt in culpa qui officia deserunt mollit anim id est\n                        laborum.\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"clearfix\">\n            <button type=\"submit\" id=\"pref-save\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.save",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n            <button id=\"abort\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"preferences.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n            <span class=\"error-info\"></span>\n        </div>\n    </form>\n</div>\n<script>\n/* global $ */\n// These scripts only are used to update the preview paragraph\n$('#lineheight').change((e) => {\n  $('p.pdf-preview').css('line-height', $(e.target).val() + '%')\n})\n$('#fontsize').change((e) => {\n  // 1pt is approx. 1.333333 px\n  $('p.pdf-preview').css('font-size', ($(e.target).val() * 1.3) + 'px')\n})\n$('#mainfont').change((e) => {\n  $('p.pdf-preview').css('font-family', $(e.target).val())\n})\n$('#sansfont').change((e) => {\n  $('h1.pdf-preview').css('font-family', $(e.target).val())\n})\n\n// Initial changing of CSS\n$('p.pdf-preview').css('line-height', $('#lineheight').val() + '%')\n$('p.pdf-preview').css('font-size', ($('#fontsize').val() * 1.3) + 'px')\n$('p.pdf-preview').css('font-family', $('#mainfont').val())\n$('h1.pdf-preview').css('font-family', $('#sansfont').val())\n</script>\n";
},"useData":true,"useDepths":true}