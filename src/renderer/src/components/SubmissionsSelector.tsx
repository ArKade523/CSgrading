import { RootState } from '@renderer/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedSubmission } from '@renderer/slices/assignmentSlice'

function SubmissionsSelector() {
    const dispatch = useDispatch()
    const { submissions, selectedSubmission } = useSelector(
        (state: RootState) => state.currentAssignment
    )

    return (
        <div id="submissions-selector">
            <ul>
                {submissions.map((submission) => (
                    <li
                        key={submission.submissionTime}
                        className={`submission-list ${submission === selectedSubmission ? 'active' : ''}`}
                    >
                        <button onClick={() => dispatch(setSelectedSubmission(submission))}>
                            {submission.studentName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubmissionsSelector
