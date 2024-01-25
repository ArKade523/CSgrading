import { useState } from 'react'
import CreateAssignment from '@renderer/components/CreateAssignment'

enum Dialogs {
    CreateNew = 'create-new',
    OpenExisting = 'open-existing',
    ImportAssignment = 'import-assignment'
}

function HomeView(): JSX.Element {
    const [selectedDialog, setSelectedDialog] = useState<Dialogs>(Dialogs.CreateNew)

    return (
        <section>
            <h1>Get Started</h1>
            <div className="container">
                <div className="home-buttons">
                    <button onClick={() => setSelectedDialog(Dialogs.CreateNew)}>
                        Create New Assignment
                    </button>
                    <button onClick={() => setSelectedDialog(Dialogs.OpenExisting)}>
                        Open Existing Assignment
                    </button>
                    <button onClick={() => setSelectedDialog(Dialogs.ImportAssignment)}>
                        Import Assignment
                    </button>
                </div>
                {selectedDialog === Dialogs.CreateNew && <CreateAssignment />}
                {selectedDialog === Dialogs.OpenExisting && <div>Open Existing Assignment</div>}
                {selectedDialog === Dialogs.ImportAssignment && <div>Import Assignment</div>}
            </div>
        </section>
    )
}

export default HomeView
