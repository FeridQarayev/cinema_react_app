exports.mapping = (req, schema) => {
  const { error } = schema.validate(req.body);
  if (error != null) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    return { valid: true, message };
  }
  return { valid: false, message };
};
