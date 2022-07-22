$(document).ready(function() {
    $("[rel=tooltip]").tooltip();
    $(".popover-hover").popover();
    $(".popover-focus").popover({
        trigger: 'focus'
    });
    $(".popover-focus-top").popover({
        trigger: 'focus',
        placement: 'top'
    });
    $(".popover-focus-bottom").popover({
        trigger: 'focus',
        placement: 'bottom'
    });
});

function copyToClipboard(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
    $(el).css({backgroundColor:"#75c753"});
    $(el).animate({backgroundColor:"transparent"}, 1500);
}

function hideDepends(el, dep, val) {
    var el_tohide = document.getElementById(el);
    var el_dep = document.getElementById(dep);
    if (!el_tohide || !el_dep){
        return;
    }
    var visibility = "none";
    if(typeof(val) == "boolean"){
        if(el_dep.checked == val)
            visibility = "block";
    } else if (typeof(val) == string) {
        if(el_dep.value == val)
            visibility = "block";
    } else {
        if(val.includes(el_dep.value))
            visibility = "block";
    }
    el_tohide.style.display = visibility;
}

hideDependsArray=[
    ["control-group-smtp_username", "use_smtp", true],
    ["control-group-smtp_password", "use_smtp", true],
    ["control-group-smtp_host", "use_smtp", true],
    ["control-group-smtp_port", "use_smtp", true],
    ["control-group-ldap_mode", "dav_auth_type", "LDAP"],
    ["control-group-ldap_uri", "dav_auth_type", "LDAP"],
    ["control-group-ldap_cn", "dav_auth_type", "LDAP"],
    ["control-group-ldap_mail", "dav_auth_type", "LDAP"],
    ["control-group-ldap_dn", "ldap_mode", "DN"],
    ["control-group-ldap_bind_dn", "ldap_mode", ["Attribute", "Filter"]],
    ["control-group-ldap_bind_password", "ldap_mode", ["Attribute", "Filter"]],
    ["control-group-ldap_search_base", "ldap_mode", ["Attribute", "Filter"]],
    ["control-group-ldap_search_attribute", "ldap_mode", "Attribute"],
    ["control-group-ldap_search_filter", "ldap_mode", "Filter"],
];

function hideDependsAll() {
    hideDependsArray.forEach(function (element, index) {
	hideDepends(element[0], element[1], element[2]);
    });
}

hideDependsAll();
