// Alterna 2 imagens quaisquer sobre uma mesma area em pagina HTML.

// logo_img=null;
 whack_image_width = 0;
 whack_image_height = 0;
 unwhack_image_width = 0;
 unwhack_image_height = 0;

 function whack_image_name(img, i) {

     return img.src.substring(0, img.src.length - 5) + i +
	    img.src.substring(img.src.length - 4);
  }

function init_whack_sizes (img) {
     if (whack_image_width == 0)
         whack_image_width = img.width;
     if (whack_image_height == 0)
         whack_image_height = img.height;
}

function init_unwhack_sizes (img) {
     if (unwhack_image_width == 0)
         unwhack_image_width = img.width;
     if (unwhack_image_height == 0)
         unwhack_image_height = img.height;
}

function whack_image(img, width, height) {

     init_unwhack_sizes (img);

     img.src = whack_image_name(img, "a");

     init_whack_sizes (img);

     if (width != 0)
        img.width = width;
     else
        img.width = whack_image_width;

     if (height != 0)
        img.height = height;
     else
        img.height = whack_image_height;

  }

  function unwhack_image(img, width, height) {

     init_whack_sizes (img);

     img.src = whack_image_name(img, "f");

     init_unwhack_sizes (img);

     if (width != 0)
        img.width = width; 
     else
        img.width = unwhack_image_width;

     if (height != 0)
        img.height = height;
     else
        img.height = unwhack_image_height;

 }

//  with(document) {
//    whacked_logo_img = new Image(logo_img.width, logo_img.height);
//    whacked_logo_img.src = whack_image_name(logo_img, "2");
//  }
