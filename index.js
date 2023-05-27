document.body.style.border = "5px solid red";

const fetch_data = (title, site) => {
    return new Promise((resolve, reject) => {
    fetch('http://localhost:9500/product_links', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
      body: JSON.stringify({
        title: title,
        site: site
      })
    }) .then(response => {
      return response.json();
    })
    .then(data => {
        resolve(data);
    })
    .catch(_ => {
        resolve([]);
    })
  });

}
window.onload = () => {
    const currentUrl = new URL(window.location.href);
    let site = currentUrl.hostname.split(".")[1];
    let title  = null;



    if (site === "daraz" ){
        console.log("ITS DARAZ");
        title = document.getElementsByClassName("pdp-mod-product-badge-title")[0].innerHTML;
        console.log("THE TITLE IS : " + title);
        let products_html = "";
        fetch_data(title, site).then((data)=>{
            if (data === []) {
                products_html = "<h1>PriceWise : Sorry! I couldn't recommend you anything here</h1>";
            }else {
                for (let i = 0; i < data.length; i++){
                    let product = data[i];
                    let html = String.raw`
                        <div class="product" style="display: flex; align-items: center;">
                          <img src="${product.image_link}" alt="Product Image" height="100" width="100" class="product-image" style="display : block;border-radius : 8px; padding : 8px;">
                          <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">${product.price}</p>
                            <p class="product-site">Available at <a href="${product.link}">${product.website}</a></p>
                          </div>
                        </div>
                    `;
                    console.log(html);
                    products_html += html;
                }
                console.log(products_html);
                let custom_recommendation_elem = document.createElement("div");
                custom_recommendation_elem.innerHTML = "<h1>PriceWise Recommendations!</h1>"
                custom_recommendation_elem.innerHTML += products_html;

                let block = document.querySelector(".pdp-block.pdp-block__main-information");
                block.parentNode.insertBefore(custom_recommendation_elem, block.nextSibling)
            }
        }).catch((_)=>{

        });
        
    }else if (site === "hamrobazaar"){

    }else if (site === "sastodeal") {

    }else{
        custom_recommendation_elem.innerHTML = "<h1>PriceWise : Sorry! I couldn't recommend you anything here</h1>";
    }



    if (title !== null){
//
//    console.log(title);


    }
}

