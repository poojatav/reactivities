/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import PhotoUploadWidgetDropzone from "./PhotoUploadWidgetDropzone";
import PhotoWidgetCropper from "./PhotoWidgetCropper";
import { observer } from "mobx-react-lite";

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default observer(function PhotoUploadWidget({loading, uploadPhoto}: Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop(){
        if(cropper){
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(()=>{
        return()=>{
            files.forEach((file:any) => URL.revokeObjectURL(file.preview))
        }
    },[files])

    return (
        <>
            <Grid>
                <Grid.Column width={4}>
                    <Header color='teal' sub content='Step 1 - Add Photo' />
                    <PhotoUploadWidgetDropzone setFiles={setFiles} />
                </Grid.Column>
                <Grid.Column width={1} />
                <Grid.Column width={4}>
                    <Header color='teal' sub content='Step 2 - Resize image' />
                    {files && files.length > 0 && (
                        //<Image src={files[0].preview} />
                        <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                    )}
                </Grid.Column>
                <Grid.Column width={1} />
                <Grid.Column width={4}>
                    <Header color='teal' sub content='Step 3 - Preview & Upload' />
                    {files && files.length > 0 && 
                    <>
                    <div className='img-preview' style={{ minHeight: 200, overflow: 'hidden' }} />
                    <Button loading={loading} onClick={onCrop} positive icon='check' />
                    <Button disabled={loading} onClick={() => setFiles([])}  icon='close' />
                    </>}
                </Grid.Column>
            </Grid>
        </>
    )
})