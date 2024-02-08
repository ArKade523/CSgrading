import { useState } from 'react'
import CreateAssignment from '@renderer/components/CreateAssignment'
import OpenAssignment from '@renderer/components/OpenAssignment'
import ImportAssignment from '@renderer/components/ImportAssignment'

enum Dialogs {
    CreateNew = 'create-new',
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
                    <OpenAssignment />
                    <button onClick={() => setSelectedDialog(Dialogs.ImportAssignment)}>
                        Import Assignment
                    </button>
                </div>
                {selectedDialog === Dialogs.CreateNew && <CreateAssignment />}
                {selectedDialog === Dialogs.ImportAssignment && <ImportAssignment />}
            </div>
        </section>
    )
}

export default HomeView
