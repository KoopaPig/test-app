function assert(condition, failure_text) {
  if (!condition) throw Error(failure_text)
  
}

function concat(a, b) {
  return a + b;
}

function approx(a, b) {
  return Math.abs(a-b) < 0.0000001;
}


function tools_test_suite() {
  console.log("tools_test_suite")
  
  
  function test_assert() {
    console.log("test_assert")
    assert(true, "True assertion caused an error")
    let error_was_raised = false;
    try {
      assert(false, "False assertion should cause an error");
    }
    catch (Error) {
      error_was_raised = true;
    }
    console.log("Pass.");
  }
  
  function test_concat() {
    console.log("test_concat");
    x = concat("abc", "def");
    assert(x=="abcdef", "abcdef != abcdef");
  
    console.log("Pass.");
  }
  
  function test_approx() {
    console.log("test_approx");
    assert(approx(3, 3.000000001), "Approximate numbers aren't processed correctly.")
    assert(approx(3, 3), "Exact numbers aren't processed correctly.")
    assert(!approx(3, 3.00001), "Not approximate numbers aren't processed correctly.")
  
  }
  
  test_assert();
  test_concat();
  
  
}

tools_test_suite();