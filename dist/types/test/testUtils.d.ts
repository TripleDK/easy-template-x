/// <reference types="node" />
import { XmlNode } from '../src/xml';
export declare function parseXml(xml: string, removeWhiteSpace?: boolean): XmlNode;
export declare function randomWords(count?: number): string;
export declare function randomParagraphs(count?: number): string;
export declare function range(start: number, end: number): number[];
export declare function readResource(filename: string): Buffer;
export declare function writeTempFile(filename: string, file: Buffer): string;
