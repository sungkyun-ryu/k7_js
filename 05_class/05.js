/*
  1. DOM에서 제어할 노드를 가져 오기 
  2. 버튼이 눌러지면 
   [확인버튼일때]
    - 랜덤수를 생성 => 랜덤수(1~100)는 다시 하기 전까지 변경되면 안됨
    - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
    - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
    - input 박스 값이 랜덤수 보다 작으면 up이미지 
    - input 박스 값이 랜덤수 보다 크면 down이미지 
    - input 박스 값이 랜덤수가 같으면 good이미지 
      - input 보이지 않아야 함
      - 버튼의 캡션을 '숫자를 생성해 주세요' 변경
   [숫자를 생성해 주세요 버튼일때]
    - 초기화 : 랜덤수 새로 생성, input 박스 보이기 ..
*/

const showImg = (imgName) => {
    const updownimg = document.querySelector('#updownimg');
    updownimg.setAttribute('src', `./img/${imgName}.png`);
}

document.addEventListener('DOMContentLoaded', ()=>{
    //1. DOM에서 제어할 노드를 가져 오기 
     ;
    const input = document.querySelector('#txt1') ;
    const bt = document.querySelector('#bt') ;
    
  
    //랜덤수 
    let n ;
    let flag = true ;
    // let flag1 = false;
    let imgName ; 
  
    bt.addEventListener('click', (e)=>{
      //form 태그사용시 다시 호출되지 않도록
      e.preventDefault();
  
    // my experiment with flag1
    //   if(flag1) {
    //     window.alert = function() {};
    //     flag1 = false; 
    //        window.alert = window.alert;  
    //   }

      //랜덤수 생성 : flag가 true일때만 생성
      if (flag) {
        flag = false
        n = Math.floor(Math.random() * 100) + 1 ; //1 ~ 100
        console.log('n=', n) ;
        input.style.display = 'inline' ;
        showImg('what');
        bt.textContent ='CHECK';  
      }
      
      //입력값 체크
      if (input.value == '') {
        alert('Please input a value.');
        input.focus();
        return ;
      }
      
      //입력값 체크 : 1~100
       const user = parseInt(input.value); 
       if (user < 1 || user > 100) {
        alert("The number should be 1 ~ 100");
        input.focus(); 
        input.value= ""; 
        return;
       }

       if(user < n) {
        showImg('up');
        imgName = 'up' ;
       }  
       else if(user > n) {
        showImg('down');
        imgName = 'down';
       }
       else {
        showImg('good');
        input.style.display= "none" ;
        bt.innerHTML = "Another Game?";
        flag = true;
        input.value = "";
        // flag1 = true;
        }      
        

        if(imgName=='up' || imgName=='down') {
            input.value='';
            input.focus(); 
        } 
            
       

       
       console.log(n);
    });
  });
