getfaqs = () => {
  fetch("http://localhost:8000/faq")
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);
      item.map((item, i) => {
        console.log("hello");
        document.getElementById("questions").innerHTML +=
          `
                <div class="card faqcard">
    <div class="card-header" id="` +
          i +
          `">
     <div class="btn faqQuesbtn" type="button" data-toggle="collapse" data-target="#c` +
          i +
          `" aria-expanded="true" aria-controls="c` +
          i +
          `" style="width:100%;"> 
        <h4 class="faqques">
         ` +
          item.question +
          `
      <span class="material-icons faqdownarrow" >
arrow_drop_down
</span>
        </h4>
         
        </div>
    </div>

    <div id="c` +
          i +
          `" class="collapse faqanswer" aria-labelledby="` +
          i +
          `" data-parent="#accordionExample">
      <div class="card-body ">Ans. 
       ` +
          item.answer +
          `</div>
    </div>
  </div>`;
      });
    });
};
getfaqs();
