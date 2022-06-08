var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["efff0777-b0bd-4b74-b91a-aa8ca8fe0cee","3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0","7be78c4b-d6f3-41ed-b804-2f3875168c10","9f0b235f-476e-457c-b729-6f316060d90c","52f03296-148d-43d4-a05a-288a16beb53f","a5eef545-c5a2-4405-9597-da02acf00394","06e4b240-d4c9-4c88-a10d-d0d48f46bc58","ed540bc5-a13b-407b-90b2-befad60fc2ee","e660a2fc-2c9a-4bdc-9d9e-21638612bfb2","234212fc-10a4-4fa0-b39b-a5933fd7df5e","9a6c1100-0c54-4010-b7e3-4013230f1af0","3bb356ae-7908-4947-bdfe-bfab2951afb3","2971c69f-d6b7-4128-8555-36086ca7a516","54abf82a-b533-41cd-b6ef-3f4879d5030c","8279c427-ecd0-412f-9274-e378a8c82717","c874873f-f36f-437b-996e-372ff737011e","30baee49-ddfb-4d3e-8dd0-638207e476ef","418d3843-5c9e-4858-8544-7a15a212c9ab","861aa637-f4d2-41c7-9fd1-7a104b859933","d2cf8ef9-7dd0-41b8-abac-da1d4144523e","db64e432-5145-42cb-9b73-c06678b1ad74","78d086d1-a8eb-4e5a-8a74-969bc694f8b4"],"propsByKey":{"efff0777-b0bd-4b74-b91a-aa8ca8fe0cee":{"name":"cricket","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png","frameSize":{"x":900,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"Wmr67BDbsVNIQY3UNsviT5mOuNSIUG01","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":451},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png"},"3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0":{"name":"honeybee","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png","frameSize":{"x":820,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"dKnVipKlDyf0AHY7Z88VdcnFGWQlRKXS","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":900},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png"},"7be78c4b-d6f3-41ed-b804-2f3875168c10":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"9f0b235f-476e-457c-b729-6f316060d90c":{"name":"kid_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png","frameSize":{"x":237,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png"},"52f03296-148d-43d4-a05a-288a16beb53f":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png"},"a5eef545-c5a2-4405-9597-da02acf00394":{"name":"mouse_gray_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png"},"06e4b240-d4c9-4c88-a10d-d0d48f46bc58":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"ed540bc5-a13b-407b-90b2-befad60fc2ee":{"name":"82515 (1).png_1","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png","frameSize":{"x":391,"y":672},"frameCount":1,"looping":true,"frameDelay":4,"version":"qYd88RzfJcaa9Wd2ZOCGvioUS0dldr1K","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":672},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png"},"e660a2fc-2c9a-4bdc-9d9e-21638612bfb2":{"name":"carrot","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"wieX8G8N3USIziM8n370YUlazchlJ1JS","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png"},"234212fc-10a4-4fa0-b39b-a5933fd7df5e":{"name":"tomato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"S4g3Ah_JTzoZy63ictqiW0yY9ip.3hJX","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png"},"9a6c1100-0c54-4010-b7e3-4013230f1af0":{"name":"pumpkin","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"Pl5_bSgl6wVtB4ZExktBwdBO7rBkZQsv","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png"},"3bb356ae-7908-4947-bdfe-bfab2951afb3":{"name":"potato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"bO0ecDIbfPWlL7Q2nEw0C0gAxMIvmDaZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png"},"2971c69f-d6b7-4128-8555-36086ca7a516":{"name":"watermelon","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"3rGBGN_50O22WTRTTaz5pOsPbXP_kuY7","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png"},"54abf82a-b533-41cd-b6ef-3f4879d5030c":{"name":"mushroom","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":".zq2nNy50ycKzNn2RM4EvXDbRNrv8qk1","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png"},"8279c427-ecd0-412f-9274-e378a8c82717":{"name":"carrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"kkeHewSq4Bbcng5xHNJjaswOHWllYItp","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png"},"c874873f-f36f-437b-996e-372ff737011e":{"name":"corn_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png","frameSize":{"x":380,"y":369},"frameCount":1,"looping":true,"frameDelay":2,"version":"2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":369},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png"},"30baee49-ddfb-4d3e-8dd0-638207e476ef":{"name":"redcarrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/P.T6lbxk7TUvpT2a6PsbrAlbqWyhmihB/category_food/redcarrot.png","frameSize":{"x":387,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"P.T6lbxk7TUvpT2a6PsbrAlbqWyhmihB","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/P.T6lbxk7TUvpT2a6PsbrAlbqWyhmihB/category_food/redcarrot.png"},"418d3843-5c9e-4858-8544-7a15a212c9ab":{"name":"cabbage_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0I5LVsSNvlAK4rGRNjiioRsfY0Uj5qH5/category_food/cabbage.png","frameSize":{"x":393,"y":351},"frameCount":1,"looping":true,"frameDelay":2,"version":"0I5LVsSNvlAK4rGRNjiioRsfY0Uj5qH5","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":351},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0I5LVsSNvlAK4rGRNjiioRsfY0Uj5qH5/category_food/cabbage.png"},"861aa637-f4d2-41c7-9fd1-7a104b859933":{"name":"broccoli_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NBojHDA4SoJ48k5sJ3fY.jqzMt2GPJbT/category_food/broccoli_1.png","frameSize":{"x":396,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"NBojHDA4SoJ48k5sJ3fY.jqzMt2GPJbT","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NBojHDA4SoJ48k5sJ3fY.jqzMt2GPJbT/category_food/broccoli_1.png"},"d2cf8ef9-7dd0-41b8-abac-da1d4144523e":{"name":"broccoli_2","sourceUrl":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png","frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png"},"db64e432-5145-42cb-9b73-c06678b1ad74":{"name":"apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png"},"78d086d1-a8eb-4e5a-8a74-969bc694f8b4":{"name":"volleyball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin = createSprite(i, 50, 20, 20);
  pumpkin.setAnimation("pumpkin");
  pumpkin.scale= 0.7;

}
for (var i = 50; i < 400; i=i+50) 
{
  var cabbage = createSprite(i, 100, 20, 20);
  cabbage.setAnimation("cabbage_1");
  cabbage.scale= 0.1;
}
for (var i = 50; i < 400; i=i+50) 
{
  var watermelon = createSprite(i, 150, 20, 20);
  watermelon.setAnimation("watermelon");
  watermelon.scale= 0.5;
}
for (var i = 50; i < 400; i=i+50) 
{
  var redcarrot = createSprite(i, 200, 20, 20);
  redcarrot.setAnimation("redcarrot_1");
  redcarrot.scale= 0.1;
}
for (var i = 50; i < 400; i=i+50) 
{
  var broccoli = createSprite(i, 250, 20, 20);
  broccoli.setAnimation("broccoli_2");
  broccoli.scale= 0.1;
}
for (var i = 50; i < 400; i=i+50) 
{
  var corn = createSprite(i, 300, 20, 20);
  corn.setAnimation("corn_1");
  corn.scale= 0.1;
}
for (var i = 50; i < 400; i=i+50) 
{
  var apple = createSprite(i, 350, 20, 20);
  apple.setAnimation("apple_1");
  apple.scale= 0.5;
}   
function draw() {
  background("green");
  drawSprites();
  

}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
