/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Header, Icon, Input } from 'semantic-ui-react';

interface Props {
    setFiles: (files: any) => void;
}

export default function PhotoUploadWidgetDropzone({ setFiles }: Props) {
    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        textAlign: 'center' as const,
        height: 200
    };

    const dzActive = {
        borderColor: 'green'
    };

    const onDrop = useCallback((acceptedFiles: any[]) => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, [setFiles]);

    const dropzoneOptions = {
        onDrop,
        multiple: true, // Allow multiple files
        accept: { 'image/*': [] }, // Accept only images
        onDragEnter: (e: React.DragEvent<HTMLElement>) => console.log('Drag Enter', e),
        onDragOver: (e: React.DragEvent<HTMLElement>) => console.log('Drag Over', e),
        onDragLeave: (e: React.DragEvent<HTMLElement>) => console.log('Drag Leave', e),
    };

    // Here we pass dropzoneOptions directly to the useDropzone hook
    const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

    return (
        <div {...getRootProps()} style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}>
            <Input {...getInputProps()} />
            <Icon name='upload' size='huge' />
            <Header content='Drop image here' />
        </div>
    );
}
