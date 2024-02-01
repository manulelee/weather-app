const ConditionEvaluation = ({ wave_height }) => {
  return (
    <div className="mt-3" id="conditionRate">
      {wave_height <= 0.1 && <h6 className="purple">FLAT</h6>}
      {wave_height > 0.1 && wave_height <= 0.3 && <h6 className="purple">VERY POOR</h6>}
      {wave_height > 0.3 && wave_height <= 0.6 && <h6 className="red">POOR</h6>}
      {wave_height > 0.6 && wave_height <= 0.8 && <h6 className="yellow">POOR TO FAIR</h6>}
      {wave_height > 0.8 && wave_height <= 1.0 && <h6 className="yellow">FAIR</h6>}
      {wave_height > 1.0 && wave_height <= 1.3 && <h6 className="green">FAIR TO GOOD</h6>}
      {wave_height > 1.3 && wave_height <= 1.6 && <h6 className="darkGreen">GOOD</h6>}
    </div>
  );
};

export default ConditionEvaluation;
