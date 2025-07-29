import { processData } from "../utils/processData.js";

export const handlePost = (req, res, next) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. Expected an array.",
      });
    }

    const fullName = process.env.FULL_NAME;
    const dob = process.env.DOB;
    const userId = `${fullName.toLowerCase()}_${dob}`;
    const email = process.env.EMAIL;
    const rollNo = process.env.ROLL_NO;

    const result = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNo,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};
