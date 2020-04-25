import React, { Component } from 'react';
import './Viewer.css';

interface Props {
    urn?: string;
    onDocumentLoaded?: (e: any) => void;
    onViewerInitialized?: (e: any) => void;
    onViewerUninitialized?: (e: any) => void;
}

interface State {
    modelIsLoaded: boolean;
}

class Viewer extends Component<Props, State> {
    private readonly viewerRef: React.RefObject<HTMLDivElement>;
    private _viewer: Autodesk.Viewing.GuiViewer3D;

    constructor(props: Props) {
        super(props);
        this.state = {
            modelIsLoaded: false
        };
        this.viewerRef = React.createRef<HTMLDivElement>();
    }

    componentDidMount() {
        console.debug(`Viewer#componentDidMount`);
        if (this.props.urn) {
            this.load(this.props.urn);
        }
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        console.debug(`Viewer#componentDidUpdate`);
        if (this.props.urn != prevProps.urn) {
            this.load(this.props.urn);
        }
    }

    componentWillUnmount() {
        console.debug(`Viewer#componentWillUnmount`);
    }

    render() {
        return (
            <div ref={this.viewerRef} className="Viewer">
            </div>
        );
    }

    private async load(urn: string): Promise<void> {
        if (!urn) {
            return;
        }
        const doc = await this.loadDocument(urn);
        const viewable = doc.getRoot().getDefaultGeometry();

        if (!this._viewer) {
            this._viewer = new Autodesk.Viewing.GuiViewer3D(this.viewerRef.current as HTMLDivElement);
            this._viewer.addEventListener(Autodesk.Viewing.VIEWER_INITIALIZED, (e) => {
                this.onViewerInitialized(e);
            });
            this._viewer.addEventListener(Autodesk.Viewing.VIEWER_UNINITIALIZED, (e) => {
                this.onViewerUninitialized(e);
            });
        }
        if (!this._viewer.started) {
            this._viewer.start();
        }
        await this._viewer.loadDocumentNode(doc, viewable);
        this.setState({
            modelIsLoaded: true
        });
    }

    private loadDocument(urn: string): Promise<Autodesk.Viewing.Document> {
        return new Promise<Autodesk.Viewing.Document>((resolve, reject) => {
            Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
                this.onDocumentLoaded({
                    document: doc
                });
                resolve(doc);
            }, (errorCode, errorMsg, messages) => {
                reject(new Error(errorMsg));
            });
        });
    }

    private onDocumentLoaded(e): void {
        console.debug(`Viewer#onDocumentLoaded`);
        if (this.props.onDocumentLoaded) {
            this.props.onDocumentLoaded(e);
        }
    }

    private onViewerInitialized(e): void {
        console.debug(`Viewer#onViewerInitialized`);
        if (this.props.onViewerInitialized) {
            this.props.onViewerInitialized(e);
        }
    }

    private onViewerUninitialized(e): void {
        console.debug(`Viewer#onViewerUninitialized`);
        if (this.props.onViewerUninitialized) {
            this.props.onViewerUninitialized(e);
        }
    }
}

export default Viewer;
