import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link, withRouter } from 'react-router-dom'
import CardAuction from '../Components/CardAuction'
import Categories from '../Components/Categories'

import {
    Container,
    Row,
    Col
} from 'reactstrap'


  const styles ={
    space : {
        marginTop : '2rem',
        marginBottom: '5rem'
    }
}
const request = axios.create({
    baseURL: "https://lelangbuana.herokuapp.com" || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const mapStateToProps = state => {
    return {
        user: state.user,
        title: state.user.title,
        src: state.user.src,
        description: state.user.description
    }
}



const auctions = [
    {user:'Guntur', slug:'macbookpro',title:'Macbook Pro',src:'data:image/jpeg;base64,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',description:'Macbook ex.2010'},
    {user:'Alif', slug:'iphone',title:'iPhone',src:'data:image/jpeg;base64,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',description:'iPhone ex.2010'},
    {user:'Maya', slug:'pc',title:'PC',src:'data:image/jpeg;base64,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',description:'PC ex.2010'},
    {user:'Guntur', slug:'car',title:'Car',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3DUS3fpWByiKMlQ0FlcjFUKlDRMEUwAXeEMveyoGWf4ulXGZfA',description:'Car ex.2010'},
    {user:'Guntur', slug:'motorcycle',title:'Motorcycle',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomxYEo-dkMsWwrls7AXWVcDUje6IGsLVxoJWffWhySYZ1bnV-',description:'Motorcycle ex.2010'},
    {user:'Maya', slug:'house',title:'House',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzK6O5eU2UpdgwIiQilbuxjwzYTWpDGEZmEI1GDe0ayt_kTC0QA',description:'Big House'},
    {user:'Fadilla', slug:'clothes',title:'Clothes',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTDxW24eF-XkvYPa6B2QtKj0R9tdfh3uud0ta_g72cIUSRm0xXg',description:'Fancy Clothes'},
    {user:'Alif', slug:'sneaker',title:'Sneaker',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbClNr54adH4BMi4U4rHiD8MZ2Ezkb3e8cjGNwBKoRYn5NXUp9BQ',description:'Sneaker BNWB'},
    {user:'Fadilla', slug:'fadilla',title:'Jewelry',src:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFhgWFRUVGBUYGBUWFxgWGBYWFRcYHiggGBolGxYVIjEhJiorLjouFx82ODMsNyotLisBCgoKDg0NGBAQGDEdGhouLS0tLzA3MisrNSsyLTctLS4tLS0rLSsrNzcrNystNzcrKy03KysrNysrLSsrKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEEQAAICAQMCBAMFBQUHBAMAAAECAAMRBBIhBTEGIkFREzJhFEJxgZEjM3KhsVJTYtHwBxVDY4LB4YOSovEWJDT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERAiExIv/aAAwDAQACEQMRAD8A+4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREg9XuZazs+ZiFB9s+v6Zgadb12mtthLM+cba1Z2H4hRxNlHVFbkpYn8SETVpdItA21ruc8sx9T9f8pUdS6pr6CXbTJZWO5rOWA+o/8AuBlqOrW6m1q9HaoCHDuNrYPrnIPsR2lhr+rPRsrKG61w23YMA7cZ3H07ic9rtY6VnXaNa0Dc6lG8pDDANh5xkD5uM8AyxTqOylNVZttss8lXw2yMMT652+nJx92BOo/3geXbT1jPyhHdsexbeB/KW1bt97H4jOP0Mpbujm5Q1l9iu2MfDJVRnnGDy34t7dhI/S9ZZRqTo7rPiApvrc8Er2IP1EDpxPZjW2QD7gTKAiIgIiICIiAiIgIiICImFtqqCzMFA7knAH5mBnE5Tq3j/RVHYrNc/wDYqG4/mfSVVfizX6ltmnorqz2NpLtj+FcD+cD6BNd96INzsqj3YgD9TOOHh7X286jXXY/s0kUj9Uw385v0/gPSg7rKw7erWlrWP1JcmBaajxXoUODqayfZDvP/AMMyIfGumJwi3P8Aw1Ng/mcSwp6Pp6xwigD2Cj+QEys0lJ7g4/Mf0gQv/wAgtPbR2Ae7vUn8i2Zl/vDWn5dPQB/iuJP6Kpm/puv09gY1c7GKklWHmXuOeY6V1xLg7BGUI7Ic4ySvB/AQMA2ubt9nT8RY3+UidRfVVBLLnratbF3CtGBAbK7iSeACQTJbeJtPkAFjndswpw5UZYITwx4P6Sp6l1/T6usaZd2dQhO3ciN8MHL/AHsq20HGOfX0gbh1sprnqc+VgCPZQRgMPzAH5zoMBh8xK87lPsfecjb0mrUX12Ld+6HwuSG+KliB6txPc53D1JxI1HU7KQAU2LsZsBtwTbZsLEsBjzcbQeOIEnqIarUnTKAK7kVq2t5Uun3Dnk4VQC3fDL3xM9F1JbdQlNaUEhwbBWQyLWqEhhxgnccenYe05rxv1H7SlWC4NRNmcY3chSg3Dn3wD6DPeS+k66+rU2anXH4R+GEr3Ctd9YztcBMncRnO4jH0gfRdQwXDOex4Htx/Wcjp7PtPUPjr+706EE88sQQV59ATg/UGReo66y1sM3wKrEQ1Ft2zUB13OhtX5Tgj+Z57St6X4q06L9nqW5Fr/a17cu4KbiVYJ89Xpg98+sDom63r6vK2nrYLkAjeuQOAc8zxfGlq/vNKf/TdT/XEndF63Y1arcubAgazaNpXjOXTn4ZI+6ZzfWvEDGzaK2OACyhfQ5wyFgUYfUGBe1ePdN2sW2o/4l4/US40XiDS2kBL0JPYE7SfwDYz+U+dN17SZC2PjcBwyEDPqp9D+Ug9U0OntQvo3rZhy1SkEOP8KHs34QPs8T4VpOtazS7mptdDUcWaewl68ZxwGyUP4ET6j4J8Vpr6d+3Y6nDoTnkYyVPqOR+sDpIiICIiAiIMCg8XeIxpKwQu6xzhF9M+7H2nyLrvW9RqbxVbacDliOB2yQgHb+s+j+NOktqQQthUq+QMZU4GBkd/U9p886n0C9WDsnmX5ba/OCB/bT5v5QNnRb9Kh2q6j6DufxM7rSeJdNpa8sEB98jJ+k+RP0xgxKjA74GSAfp95fzH5zLT6CxzvcFiO3IYL9PKSMwPqLf7QWc4rTj3H+ZmynxPe3zKf1/7Tk+j6fkAgk5+VVLN+SqCZ076Bq0FjIyKTgbwAf8A25yPzxAsauuue4Mn1dTDd8znNT1CqoAl1Of9dzxNWn66GOEUN+eP5mBd+GqnrW3eoG+6yxRnPDtkA47GVXS9SENlXxvKb2ax1qsK+YkmsWdsc7d3bPHeTunJdqG2Y2J2crnIHYjPof5zHxt0oV1Upp81otgtv2kfuqgW82SPvbRgdyRApzS6rWCSTUWNFakDaGyMu/vtOM9vxmCeHhYDYCmnD+Te7qrF8HhLO5JwfrjMh9K1ttxzZlFvYVIMA7tzYAQeijIy0uPGV6vfToak3/BUs24eRBs5tyO7bTtH8Z94GnXeEzUitb9odB8N3s0zNYdyAjIrGG7MMFQcY9MmVo1l9S7qb01VOy2s1udtwFrKxOyzDE5X659DJfRen2aVCdNayefJAA2c9gUPpgenvLwtp7nFluNPft27x+6cZz5s/Kc++Px5gUDWUOSbKrKVe0upqO4AGhd2+r0YWIeNv3h7SLZ1WnK6gGwXlMJZeF304A/ZCvHnrZecYBB+s6TqPhu+wlvtWn+EDuR3G8pxzg5BxnkDdJI6Xp60WrU3qt95CpYq/DJIA8oBzzjk7j3YD2gcdqdKL7sqg86oWVFCqHYedVXsB6k9s5Mtul3W6q56aUTRaWrButrAGUQEKqWEBV8uckcgc8cS51ug0mlyt1lzYrJIWuxiVPlL7q0I+nfiUHW+vJXVXQlTU6XAYY8wuUkFWFiFlYHjIBJ7ZgXNnVbVZE0oXT6VTv3lS9loBy25TygbHc5bBycGZdbKX0WXaWwDZzci4Jqbgm1Qe3uw7EZPcSHpbaScIpIABUOGYksR8pAwxHGB+MvdM1ldyEaSwI5Cl12BQGPPxEzuAGc5x/UwK7p3hzS6vSPpdRWDaCdzjaXDZytiMOwPBA9pzdf+yQ0uH+LZZtYEMpCk4ORuUST4l6hdptS19BUmlvg2Kfv1HzV5x6qcrn+GXfS/9p+lbYNQr0l8BWxurJ/iHy/nAgajwKjoytbcj2tnkIc+uCfQZ/pLbw/0RdCKqsgNvJyWGX48/H4Hn8pc665bRuU5Ujgj+s5Tr3V7WaoBdxVbK3GASXVk8y+udvw2GPeB9HE9lN4Z1xsrwfu4/nn/AClzAREQE8zBM1u0Co1Rw7fjK/V6AOPKQp+oyP8AxJmtfzt+U53xR4ir0lYewsAz/DAr2mxnxnaoYgAe7HtAanpGSBZVkn5Su1gT+eCPzlVq6NDprFGovVLGZV2orMU3kKCT6DJ5J459ZaaLrFNK1WOtiLaym5nbe1bWArShI4+YZOPacz1bpun0uo+K2LtXawNZsLmm1GyhCkAqGB57E5OO2YHT9R176W9atLuQAj4getStgOMMtmcnP6D8pt1/VHuVksKspIO0DgewB5LTzouss1V1gsb9nUoQIOPNyNzH1PzH9Jur6FYHC5BQnJcHsPQYPrAndA6LVbULGXk5xg9gCQJYHw7QvIDEjkAucTcDsUKvAAwB9B2nB9R6ldquofYmdkqWv4rhSQbRkjbn0EDs9V1mqpSlC/EccBK8bQf+Y/Zf5n2BnzPq1uosuu+PZk6i6rTALkKiKBbaq578MvPHyz6FRpVUAKAFHAAGAPwE4PqOne7qSaevG5L7LCT7PUozj6Ak/wDTAu+k6d31NGyrNNFm5n4ARRWVUZJ58xU4HPEmW/BW3Un7TSDbZh9tdlpXcExW7qcAkhTjjv2kPxfcwFGl07mqpbE3FcZYK6li/IznkY9SeeJ1fTdAh1FupB4cJ+zIwa7VDK7E/Vfh/oT6wKzSdBdvK1w2d8oCGOfdG+Udvf8AKbj4WqypTU2Ky57FCDnjkESXSDqR8fcQPN8ADjaBkCw4+YsR+GCJzPXU0Veorq1JWptQRcpCkEuPLd5gOAcIefc4gTdL4Mxqa2tFL1IfiBguHZ1I2bgcjg85B9JU+OFNj6gpsZq0rRCSc1BmBZsdgGY5LDnGz2M6PwqxTRmxN9nxrLLKUZjxUWK1qrHsuxQw/imjxLWluk+Pp0BNgWscDPnYIA/sFY+YfQ+0Iy8O6+3U0GvcRfSSjWsjDHB22gYwzEd1zjIz7TK9qdIljVo1r11tcWPewrnIRtpG4t2CgDme6rU/Y66tPWrWKgBuZiSRUOLHZs/MecD6Y7doPjzUfZ3osDHbYxrNR27XUoVKqx5Vyp478gcSiTrvGT0VUXXUcXqGKIcvUGAI3ZwGPIGOOZs6vWbvg6jTWWkPZUGVGbgFh59uRgLg7hjtn2kfr1N+rrpu0u1k2gW6Z1TkH187Lgrz7SN0fTW9O0d9moau2ykX3ole7bWoQsQzNyWO0+n3iBnvIp4soTWLqa63qW2jhiCG8p2OpsC8qQRjB55nyPqPTLRjRsENptyNrZUVFQ+8EgHjzcTsfD9L06nVi64B79Il5r2nLtZ52O7OBs449d/pjnRRpg3VdCrc/EFhYADhccMT+X6D6wPpHRummmlUOeFHf8PrNvTVQW2kjOQhAC5IPmBIb0OFH8padScAD6Z/7Su6PrBtbHLu7H+EL5efyXP5wJ+jO22xQmFOGzjgsQN2Mfl+eZYiVehqVRxnkkkkkknPPeWCNA2xMd0QPMzXZNkxZYHPdWbad3p2P0+s5zxPpTrKmqfBUqQpAXdW+Bssz94qR2yOGP0nYdV0+VM4bU0WVkgHj2MCq6J4d1Oo0Op0eoIWwFG09zFtjFN/ldsZHzd/qO+J2nSKA2mp09g0uo1NCfUI2Dg2VsRng43YHf2nNg5HnqLLnO0O20/iucH/AMyN4jqtq1C9X0xZqtq126dch6MDAKjkFM84wOT+gdsVakqbfhB3zxUmwEJgZbJOTz/rMnUakGfJOv8AiQ16lH3HbaosUMTxvwTwe3YcTruidU3gEHuMwO5rAOM+s4Dxy32Pqmh1QH7O4NprPdc8hvyzk/RTOz0d2RI3jfof23RsinFq4sqcd1sXkEQJAE577ElfU31LfO2jOwfwt+0OffGz8jHgbxENRX8KwbNRV5bEPHI9R7j2k/xLpty12/3T4ce9NoNdv6Bg3/TA5Aq1lOXtDvliCvygZOVVvvFSeT75naeC+rtqNNYbEAsQtW3s+1BhvzGOJwnhMH/+G60u2nsdUrRAGFfAJJAJ252n07jMv/Cutr0+utoCsq2hWRmYEM6AhlA+6Sp/PEC18Payt66xXRYowMItjildo5UA4AAPoB/SWHU+kValSt6BznIPYofTYe4lb0+74Oou0lj+puoLdjU55QHtw2cDjufaW5LFGara5wQnmABYcd+ex4nScTN1rPEXprrXp6AThVQKSTjspWRula8JpNTdWN9YuJXAzvCisXOPfLi0/iDMNL0prtK1XUgiFrC22ixuV3lgM4zk9jj+UWdYqUjS6asBK1wBjauASMLx3BGMHuTM88Xq5Ek2pniHWolfzBUuGN527cYwFLHtnPf2PpKzxVSz6TSMvmZfhttGcsNg3FT34Hmzn0mel6jucaYVC1SdtytgJX6sQDkFcHhfTtnHaf1FE1B+H8T4ZUj4fAKn0wVyDjH9llP1kvl9ZxC1GqFK26lzkfDLjcG8qqvkUgkAOTgYJPLd5S9FosPSq62LG7XOqHfydtrAWn6haVub/plprek32PXQ6ounJJtevzKyIvFZDeZScZyc8juY1mqL2g0gZU/ZdKMZC2uMXXYweKqgfx86+sUkausaWsi/WHBax/s9RHpUmA2B9Sh59pzPgTRNqeqX6wg/C0yfBT2axhjj6AFv1lh441th1Wm6VoUDOiZOeQnHDvj0AG4k4znH3p2PSem06Gha17JyT622nuxx3JJJ/MyK3+Ibtqn6D+ftKDwvXYAS4xkYAOM8/wBJjrNe1zdiBnse/wCcuunU8CBZUCSlM1VrNoEDLM9nkQMxBnuIMCPemZSa7RA+kv3Ei31QOZbQj2mpqCMjnkYP4e34S+emanogcP1fwfTqH+Ja9mcYwNmBj2BXiaLtA2kKfCLPVwOcblPbBwACPbj6TtbqJA1FQIKkZB4IPbECL0bxLWcKTg+xnUaHrVedpI5/1mfPeqdLXcDlVfOFsfhLPZLz9x/QWcZ9eZErpW0mm5bRYnzIrFNRUfR6SP3g9hzke/eB1HjTwg7uNb09gmoTnA+W0Dna31/z/AjT4Y8ZV6rNFy/C1C5Wyl+M++Ae/rK/p/WdZol+IbBq9J/foPMoz2vrHyEf2pI610LSdWxfRYEvHIwcMD/hYflwf5QKHxatuj1H27T/ADIpqv8AXyMNqWkevop/Be3BErw5pV1dpeu1UZaRerZztcuoAI9B836ic91bqfUNEwTV1i0INpdh89R4KWr2YYz5v6+kbS+HkNqXaR/2FpAYFsPp+d2cHi1PKQD77fbkPq3U+nU69VqsudXof56GC/EGMPVkjG0njjkMveQLOr/ZqxRptOyJUMbQOVJOOcnc7E8k8nkmRG6mgO1G+GtCg5AJOXzhQByxPLN9MHjOZ5dr01eBveq5SNlqBgTjsCpGLFzj0JH8puZLLZsWJGt1b1fC1XxdrhlHwnO42FuGTA+Tja2ccHPYGWXVdMb1+1aJUa1totqdiu4Kc5X0DggckHIEp6tJqbVspegpYtm59VcoFeSqNvq7F8/Qe+e2JY9L0q7mGnscsrj4175LWWY+QL2VQOyjt9TzOvXUt/H1q2b4qtf4gq0lWyr9rdYfOa/L5mOSFyDswSe4yT3HoKXotWo1f7O0bWRSmpvBwoK9imP+MCM5HAOfQ4Nh1qmhrbLP3NrMfiMoV6Lyp273qbtnbyRjPrzzOk6cU0umqa0U14AZUp4rdmOQwB+Vc84yefUicKwdT619hNQssOywhfNktXnGN5PcH1J7EjMptPrPs2p/Z5vsKFdDps/KX5Ysfu1qS5axucMBycSN1/R2agO3xKme1dm34qkbSe445bGfaXPRuj06JMvutvuAX/mWqo8tSjgrUO57Z5zxwYJnhrpdejSzU2v8XUXNm6/HNzn5a6R3FYPAHrj9fNZr3L5P730UdqFP9bSP0EqOqdePxCA4a8eXy4KaYeqp6GzHdvT0mXTDjgfiSe5J7kmBcaDSS+0iYkLQpkS2pSBuQTYBPFEzAgeYnkziB6Z5Mp4YGJmp1mwzGBHauamqkwiYlYFbZTIGpo+kvmqke2iByGsQcgjIPcHsR9ZzXU6EwFYF0XPwyG23UZ/ubD8y5/4bce2J9C1fTgZzXU+kseFWBzen6zZSTcbC6r82soU7lHAH+8NN6jt5/p39JIsXTOBcjLpGYgLqKMtpLGPYOo5pc+xxz7yHqfCD7/ib3Rx2aslWH4MpG2UY8M6vTuz6ex0JyGxghge4dSNrqfVWBH0gdp1LqzrWtfVdOLac/s9VW3AJxgpcvyn02nGe3IkbTeFUclun6hbFwT8FiEsB5OAPl5P9kD6yh0fUNbQCUpavI8wq/cWd+Hps8qjBPY+vAE0t1BLRn7J9ns5Aai1q0J9/h8hR9ARA7Hw30s22Wr9joS6tQtjutiMyuMYZkK7sgeveXN+jt071FqqK0B2i6qv4j17hjA3ksM4Hyzi/D+r1WmAKO5bu7NlviH3cH5v6+0vuq+L3cVGzSO3w33N8M55xwQpx6Z/WB74hBYOLdR9qpZcHa+16g3bfWDuXn1PHvNPRPFFmn/ZWodSrt5LUA+I2EUA2543BVUbyecd5X6rx9oQzf/q2jOSAVRSPfdu7zkNf4hWy4tRVctZHK8Ak/wCAgdj9ZZcHdWayg6xmBWx7XRaKWx8OlVVVXI9exY58uT6zuCtOhrbU6uzfZjlsFj9UqTuZ896UbNRTTX9nqQUjC4LFmJABew4Xc5xk/Uy36h4fvtG97Gd8AAsScD6e0goPCXWF8+perToxssZNVqb1ewKzHGdOhOLAPYAZzjAmnqviSy5mr0hc7+LdU372wf2a/wC7T6CWel/2fgtvfJP+vSdd03oCoANinHuo/wC0DjPDnhoqB5j9Qw9ffPqZ2vT+lFe4l3RoVH3QJLSoCBH01GBJiCAs2AQPRMhMQJniB5E9iB7ERAxYTCbZiRAwjE9xPYGJWayk34mJECO1fvI9mnz6SaRMT9IFd9gX2htAvsJYrXMgBAobOhIxyRn8Zrbw3V6qDOi2z3ZAoV6LWowFmm/oisMEcfSdGVnhSBxr+E6f7tf0myjw1Uv3B+k6tq54K4FVpumIvZRJy1STsmQWBGXTzeqYmwLMgIGAE92zPbPdsDECegTLEQE9iICIiAiIgIiICeYnsQPJ4RMogYFJ5txNkQNW0nvMwsyiBiZjiZETzEDzEbZmBBEDDbAWZ4nsDArG2ZzyB5iAJlPMQECJ7AREQEREBERAREQEREBERAREQEREBERA8nsRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=',description:'Premium Jewelry'}

]

const categories = [
    {name:'Computers',categories:['Laptop','PC','Netbook']},
    {name:'Electronic, AV & Camera',categories:['DSLR','Mirrorless','Webcam']},
    {name:'Music',categories:['Music Player','Speaker']},
    {name:'Book & Magazine',categories:['Science-Fiction','Non-Fiction']}
]


class Home extends Component {

    addItem(item) {
        this.setState((prevState) => {
          return { 
            auctions: prevState.items.concat(item) 
          }
        })
      }

    componentDidMount(){
        request
        .get('/auctions')
        .then((response) => {
            return response.data
            // console.log(response.data.auctions)
        })
        .then(data => {
            data.map(item =>{
                console.log(item.item_description)
                this.setState((prevState) => {
                    return { 
                      auctions: auctions.push(
                          {user: item.auction_id,
                          title: item.title,
                          src: item.item_photo,
                          description: item.item_description}
                    )
                    }
                  })
            })
            console.log(data)
            console.log(auctions)
        })
        // .then(data => {
        //     data.forEach(item => {
        //     this.props.addItem({
        //     user: item.auction_id,
        //     title: item.title,
        //     src: item.item_photo,
        //     description: item.item_description
        //   })
                  
        //     })
        // })
        .catch(error=>{console.log(error)})
    }
    constructor(props) {
        super(props)
        // this.addItem=this.this.addItem.bind(this)
        this.createCategories=this.createCategories.bind(this)
        this.state = { 
            auctions: []
          }
    }
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            key: PropTypes.string,
            title: PropTypes.string,
            src: PropTypes.string,
            description: PropTypes.string
        }

    }

    state = {
        title:this.props.title,
        src:this.props.src,
        description:this.props.description

    }


    // routeChange(){
    //     const payload = {
    //         title: auctions[0].title,
    //         src: auctions[0].src,
    //         description: auctions[0].description
    //       }  
    //     this.props.dispatch({
    //         type: 'CLICKED',
    //         payload: {
    //             title: this.props.title,
    //             src: this.props.src,
    //             description: this.props.description
    //         }
    //     })
    //     console.log(payload);
    //     let path = '/item'
    //     this.props.history.push(path)
          
        
    // }

    createCategories (item,index) {
        return <Categories key={item.name+index} name={item.name} categories={item.categories}/>
    }

    render() {

        let listAuction = auctions.map((item, index) => {
            return (<Link to={`/${item.slug}`}><CardAuction key={item.title+index} user={item.user} title={item.title} src={item.src} description={item.description}/></Link>  
        )
        })

        let listCategories = categories.map(this.createCategories)
        return (
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="2">
                            {listCategories}
                        </Col>
                        <Col sm="10">
                            <Row>
                                {listAuction}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Home))
