const ReportsPage = () => {
  return (
    <div className="grid gap-6">
      {/* stats overview */}
      <div className="stats stats-vertical shadow tablet:stats-horizontal">
        <div className="stat gap-4">
          <div className="stat-title">Total Requests</div>
          <div className="stat-value">350</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat gap-4">
          <div className="stat-title">Total Payment</div>
          <div className="stat-value">10,723</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat gap-4">
          <div className="stat-title">New Verified Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat gap-4">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="grid gap-6 laptop:grid-flow-col">
        {/* flat progress */}
        <div className="flex flex-col gap-4 rounded-md bg-slate-100 p-6">
          <span className="font-semibold">Document Requests per Month</span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start tablet:flex-row tablet:items-center tablet:gap-6">
              <span>Barangay Certificate</span>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-medium">30</span>
                <progress
                  className="progress progress-success w-56"
                  value="30"
                  max="100"></progress>
              </div>
            </div>

            <div className="flex flex-col items-start tablet:flex-row tablet:items-center tablet:gap-6">
              <span>Barangay Indigency</span>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-medium">60</span>
                <progress
                  className="progress progress-success w-56"
                  value="60"
                  max="100"></progress>
              </div>
            </div>

            <div className="flex flex-col items-start tablet:flex-row tablet:items-center tablet:gap-6">
              <span>Barangay ID</span>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-medium">80</span>
                <progress
                  className="progress progress-success w-56"
                  value="80"
                  max="100"></progress>
              </div>
            </div>

            <div className="flex flex-col items-start tablet:flex-row tablet:items-center tablet:gap-6">
              <span>Barangay Cedula</span>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-medium">40</span>
                <progress
                  className="progress progress-success w-56"
                  value="40"
                  max="100"></progress>
              </div>
            </div>
          </div>
        </div>
        {/* radial progress */}
        <div className="grid items-center gap-10 tablet:grid-flow-col">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            {/* @ts-ignore */}
            <div
              className="radial-progress"
              style={{
                "--value": "40",
                "--size": "12rem",
                "--thickness": "2rem",
              }}>
              40%
            </div>
            <span className="text-sm font-medium">Pending Requests</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center">
            {/* @ts-ignore */}
            <div
              className="radial-progress"
              style={{
                "--value": "60",
                "--size": "12rem",
                "--thickness": "2rem",
              }}>
              60%
            </div>
            <span className="text-sm font-medium">Complete Requests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
