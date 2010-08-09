/**
 * The drag-n-drop module syntax checker
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
load('util/test/rightly_check.js');

rightly_check('build/right-dnd-src.js', [
  "Do not use 'new' for side effects."
]);