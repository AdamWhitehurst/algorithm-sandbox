function splitStack (stkStr) {
  return stkStr.match (/o|(re)/ig);
}

function ()

splitStack("oreo");
splitStack("ooreo");
splitStack("ooreoo");
splitStack("orereo");
splitStack("oreoreo");
splitStack("orerereoreoreo");