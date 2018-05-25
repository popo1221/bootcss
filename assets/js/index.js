$(function () {

    var htmlContent = sites.map(function (obj) {
        return `<div class="col-sm-6 col-md-4 ">
    <div class="thumbnail">
        <a href="${obj.url}" title="${obj.desc}" target="_blank"><img class="lazy" src="/assets/img/null.png" width="300" height="150" data-src="${obj.image}" alt="${obj.name}"></a>
        <div class="caption">
            <h3> 
                <a href="${obj.url}" title="${obj.desc}" target="_blank">${obj.name}<br><small>${obj.keywords}</small></a>
            </h3>
            <p>${obj.desc}</p>
        </div>
    </div>
</div>`;
    });
    $('#resource-list').html(htmlContent);
});