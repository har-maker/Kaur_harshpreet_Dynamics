(() => {
  let smallImage = document.querySelector('#smallPhoto'),
      largeImage = document.querySelector('#largePhoto'),
      memberInfo = document.querySelector('#info'),
      h3         = document.getElementsByTagName('h3')[0],
      titleMember = document.querySelector('.title');


  const teamInfo = ['Hey my name is Harshpreet kaur. I am student of interactive media design. I would love to be a Designer in future. Moreover, I have learnt a lot of things in this course.I love to do photography and videography etcetera. Instead of this my hobbies are singing, visiting historical places, playing sports and Dancing. I participated in plenty of competitions and most of them I won in dance. In my free time I do dance and go for traveling. ', 'Hey again, Here some interesting things which I had done in my life. I did a lot of volunteer work like, I have intrest in medical too, So I had participate in a free medical camp When I was in 9th class, In which we providing free medicines and medical checkup.I also particate with a food serving community in India, In which we provide free food to needy people and help poor children to complete their studies.So, That all things about. Thank you for watching this.And I hope you like my page and be glad to know about me. '];
  function memberLoad() {
    //debugger;
    largeImage.classList.add('switchAnimation');
    smallImage.classList.add('switchAnimationSmall');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');
    memberInfo.innerHTML = teamInfo[0];
  }
  function bioInfo() {
    smallImage.classList.remove('switchAnimationSmall');
    largeImage.classList.remove('switchAnimation');
    h3.classList.remove('switchAnimation');
    memberInfo.classList.remove('switchAnimation');


    smallImage.classList.add('switchAnimationSmall');
    largeImage.classList.add('switchAnimation');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');

    if (memberInfo.innerHTML == teamInfo[0]) {
      largeImage.src = 'images/large_2.jpg';
      smallImage.src = 'images/small_2.jpg';
      memberInfo.innerHTML = teamInfo[1];
      h3.innerHTML = "Harshpreet Kaur";
    }
    else {
      largeImage.src = 'images/large_2.jpg';
      smallImage.src = 'images/small_2.jpg';

      memberInfo.innerHTML = teamInfo[0];
      h3.innerHTML = "Harshpreet kaur";
    }
  }


  window.addEventListener('load', memberLoad);
  titleMember.addEventListener('click', bioInfo);

})();