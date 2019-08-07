<template>
  <div class="wrap">
    <div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAF0AXQMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEDBAUCB//EAEEQAAIBAwEEBQgGCAcBAAAAAAECAwAEEQUGEiExE0FRcYEUIjJCYWKRoQcVUnKx0RYjU4KSssHwM0Njg6LT4UT/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EADERAAIBAwMDAgIJBQAAAAAAAAABAgMEEQUSMSFBURMUQnEiMjRSYYGRofAVI7HR8f/aAAwDAQACEQMRAD8A9G2p2jktJjZWBAlA/Wy89zPUPb7f7HcY5Ky9vXTeyHIGTSy3D79xI8rdsjFj86cwU8pyk8yeSPdX7I+FBz1IbuaG0tpLicARxjJwuT3AdZobwss6hCU5KMeWQw3Ti4W21DT5bC4kUvEk26ekUc8FSRkda8xUehdUbjPpyzgl3dhWtknPgubq/ZX4VIIQt1fsj4UB1Fur9lfhQAt1fsr8KA6nKGJ87hRsHB3cHBoFakuTQ0/Vb7TpA1rcMFH+Wxyh8PypHFMepXNWk8xZ6HomqR6rYrPGN1wd2RM+i35U01gv6FeNaG5HmU0zXEzzv6UrFz3k5/rTyM3OTlJyfc4oOBUAUdV4rYqeTajaAjtHTJUa8+z1MeH/AILDTPtcAk1yztNTtTZzzCOcEPDIvF4ZByYD+8gkddYq1r1LeoqkP+m1rUYVoOE10Bny+Wy/U6zaz29yvBmSF3ik95GAPA9h4jrFbShe0K0d0ZIxtzpdxSm1GOUcnX9KU4kvY4j/AKuU/mAqQpxfDIrtK8eYP9DQjkSWMSROrxkZDKcg+NdEd9OSvp9u20U7KjsukRHdklRiDct1opHqjrYc+Q66p9U1L269On9Z/saDStL3/wB2qunZFjaLR7LSraLVNLtIbQ2zqs6wIEWSEkBt4Dnu53s8+B7arNJv6vuPTqSypefJa6paQqW7aXVHVasxJc0/V7jSek8nP+Lje8M/nSNZJVtcSo5x3KSegvdSkZ8j0CEF5dwWUBmuH3VyAABksTyAA4knspG0llndOnKpJRissl0zStQ1K7t7vU4fI7OCQSxWzENLI68VZ8cFAPHd55AzjlWd1LVoSg6NHrno2arTdJ9GSq1OQpRFTO4oXPPA51m22y+OsntpAE3nqVfzlPUeIpU8cAY8+y+hzuWk0yAbxywjyiufeVSAfEVLhqF1BYU2MStqMnucVk1Yo44IVihjVIo1CqiDAUDkAKituTy+R5LHRGKwbVtM1eKUHcngaMDsypGPwqTF+lUg12Yk1mLRl6dMLjT7WccpYUf4qDW9POakds2jq49XxoEiSp6C91Aj5E7KiM7sFVRkk8gKA5O9mLDyxl12+TzmB8hicf4Mf2/vNzz1DA7aymsX7qTdCnwufxZs9KsVb098vrMNYorC40xri2uUmZRkujgjPZ/So8rSgrZyz9JL+LBMVWfqY7Mo1VEstnTboR7/AEf7uePwqb/T7jZu2/7GfcU84yVKhDwqAFQAwVcboACnqApcvORAI0Fei0i2gJy1upt2+9GSh+a16JSlvpxku6PP72DhcTT8lq49WuyPEkT0F7qBHyU763k1K6stHhBY3smJccxCvnP8Rhf3qj3VSVOjKUFl9iw0ygqtdOXCCnWNyKwZWRd1XTMLcBIoYExnsBAK9xrFWc1C4jOa45NrUjug1EzNk7O9hN/d35wbqQFV6yAW8444ZwQOHUoqVql1Tryiodu43b0pU09wQCZbYid8bsZ3jn2VXUpOM1JLgfktyaBrU9r9Zeyh1O3uobaO5vGtraF04YU+c0j7wCj2AHvrVQtJSip1JvL8PCKx1EniKWDR2d1j6708XTR9HKGKyAcV3u0HsrO31s7es45znqWFGe+GTUqGOioAVAAjcRi02i1G3UERzLHdoOoFsq4Hime9jWy0as6lqk/h6GS12io1VNdxXHq1bFHEcuUjUhN7gM8QMUCdzW+jaKO+1W+1iRSN0GztesYU5kII7WwOOPQqFcSzLHg0mn0PSo5fLIdq/pDs7bU5rKz0tLs27lHnkl3POHAhcAk4ORk1EqWVKt1muv7lhGrOHDNDZHWLLalJUg6S1vIQGkgkIcFe1W4ZGeHLIqtq6NFfUkSI3b7o3J9DlkRkZonQ8wSRUZ6VWj1jJDiuo+AeutgnlWWETTrayyCSSCOXCOw9YjOM+3FS4T1ClDakn+Y3L283lmpZaJJp9qlta2jJEg4AYPiarattd1JOU4tt/IfjVpRWEyU2dyP/AJ5P4TTPtLhfAzv1afkbyS4/YS/wGk9tX+4/0D1YeULyW4/YS/wGj21b7j/Ri+pDyCu1cEtrrek3UiMiTJLbNvKRluDr/I9aDQlOnvhNNcFFrsYzoqceuGVZ/VrQmXiV9QiVrNpCI8pGWzIu8FAGcgcs0MWEmpHoGwWmx2GyulDB6XySMud443mUM2By5k1VyeW2a/GFgCdrvo/vbnV573RzE0dxIXkikbdMbE8SO0E8fzrqFVJYYOL7BF9HuxjbPyS315Ost3InRYjzuRrkEjjzPAcaSU93yDGA2YkdXCuQGD56vnRkDocaMgKgB6AFQAJfSZGP0cE4wHt7qCRT/uoD8mYeNOUniohm5ipUJp+GCFxwxViZSIpountHhP8AmRlfiMUAnh5D/Yi58q2T0qVvT8ljDjsYKAw8CCKq5LEmjY5UkmjM2w2Mj1i4+sLG6msb/ABliY4bHLIBHxHzpVLaGMmfon6baQxhuPItUt+pnuCrj97d4+IPfSNwfHQXDCuxu9VuGHT2lrbjr3JmlI/4qPnXOQwaRUdXiKViHQGOvhQAqAFQAqAAz6Tpw2l2enKf1l3eRDA+yjCRj8Ex4inaC3VF+BGvKip28mC9x6tWBl4kiegvdQIa+wGppp+oXGhXB3Y5Wa5s2PIhjmRO8MS3c3sNQbiGJbkaPTq/q0tr5QezMyxlk5j8KjvgnlUzg8TChNc5OsCNy+MKFUeyjIYJbME7znPHhSoRliuhB6AGoAgvry3sLaS5u5UihiUs7ucBQOZJ7KAPLru+k13VW1aZHSEIYrKJxgrGTkuR1M+Bw6gFHPNT6NPYuvJn9RulVlsjwiO49Xxp4rokqegvdQIQ3lsLlFw7xSxuJIZozhonHJh/fHlSSSksMco1pUZqcQo2c21QtHp20fR2t6fNjm5Q3P3SeTe4ePZkVAq0ZQ+Rpbe6p3C+jz4CtrdH4xOO6mMErPkSWnHz24dgowGSyoCqABgV1gQegBMwXmcUgA1rm2ul6XI1tCzXt8OVrajfcfe6kHtYjxruMJT4Q3Vq06SzN4ArULnUdeuEn1pkSBG3otPhbMakcmdvXYfAdQzxqbToqHXuUd3qMqq2U+iJKeKwiuPVoOomlrNi+nalPbsMKGzH7UPL8vCki8oeuaTpVXFlKlI5xNFFPE0U8aSRsMMjrkHwoFTaeUR2SX2mYGkard2sa8oHImiHcr5Kj2KRTUqEJcosKWp14LD6/M1YdqdpoFw40y7xyOJIT+L007VdmS46vH4oHf6bbR8vqfT89vl7f9Vc+1fkc/q1D7r/AJ+ZFPtTtTcLiP6rtO07skx/FBXStV3Y3LV4/DAzLtL/AFHP1rq97coTxiRhBGfYQmCR3k07GjCPYiVNTrz46HVtbQWkIhtYY4YxySNQo+VOkCUnJ5k8ktByKgAk2X0CPUbaW4u1PR7wWL24zk/gPA1xJ4LWwtlOLnLjsFmsaRa6rEEuFIdfQkXgy/8AnsrhPBZV7eFaOJHneuWP1Td9B0vTe9u7v506nkori29GWM5M0z+786Uj7RdP7vzoDaP03u/OgNoum9350BtG6f3PnQG0XT+786A2j9P7vzoDaN0/u/OgNoV7N7OQ6jEt1czMYuuJRjPe2a4csFnbWEZrdN9PAcQxRwxJHEioiDCqowAKbLhJJYR//9k="
        alt
      />
      <h3>woke</h3>
      <ul class="tags">
        <li>
          <h4>20</h4>
          <h5>日志</h5>
        </li>
        <li>
          <h4>8</h4>
          <h5>分类</h5>
        </li>
        <li>
          <h4>23</h4>
          <h5>标签</h5>
        </li>
      </ul>
      <div class="link">
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-github1" />
          </svg>
          <span class="ml5">Github</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-zhihu" />
          </svg>
          <span class="ml5">知乎</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-fenlei" />
          </svg>
          <span class="ml5">SegmentFault</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-xiala" />
          </svg>
          <span class="ml5">掘金</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-csdn" />
          </svg>
          <span class="ml5">CSDN</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-weibo" />
          </svg>
          <span class="ml5">微博</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
@import "~@/global.less";
.wrap {
  padding: 20px 5px 10px 5px;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    border: 2px solid rgb(63, 44, 44);
  }
  h3 {
    margin-top: 5px;
    color: white;
    font-weight: 400;
  }
  .tags {
    display: flex;
    justify-content: center;
    padding: 0;
    li:nth-child(1) {
      border: none;
    }
    li {
      padding: 0;
      list-style: none;
      text-align: center;
      border-left: 1px solid rgb(59, 56, 71);
      width: 60px;
      color: #999;
      h4 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
      }
      h5 {
        margin: 0;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  .link {
    a {
      margin-left: 10px;
      text-decoration: underline;
      color: #999;
      font-size: 12px;
      list-style: none;
      line-height: 30px;
      .rootLinkIcon {
        width: 14px;
        height: 14px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
}
</style>
