// function for both
function createResult(error, data) {
  if (data) {
    return createSuccessResult(data);
  } else {
    return createErrorResult(error);
  }
}

// function for only success result
function createSuccessResult(data) {
  return { status: "success", data: data };
}

// function for only error result
function createErrorResult(error) {
  return { status: "error", error: error };
}

module.exports = { createResult, createErrorResult, createSuccessResult };
