import { Constructor } from '../types';
import { Binary } from '../utils';
import { XmlParser } from '../xml';
import { Zip } from '../zip';
import { ContentTypesFile } from './contentTypesFile';
import { MediaFiles } from './mediaFiles';
import { XmlPart } from './xmlPart';
export declare class Docx {
    private readonly zip;
    private readonly xmlParser;
    private static readonly headerRelType;
    private static readonly footerRelType;
    readonly mainDocument: XmlPart;
    readonly mediaFiles: MediaFiles;
    readonly contentTypes: ContentTypesFile;
    private _headers;
    private _footers;
    get rawZipFile(): Zip;
    constructor(zip: Zip, xmlParser: XmlParser);
    getContentParts(): Promise<XmlPart[]>;
    getHeaders(): Promise<XmlPart[]>;
    getFooters(): Promise<XmlPart[]>;
    export<T extends Binary>(outputType: Constructor<T>): Promise<T>;
    private getMainDocumentPath;
    private saveChanges;
}
