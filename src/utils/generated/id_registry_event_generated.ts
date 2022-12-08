// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';


export enum IdRegistryEventType {
  IdRegistryRegister = 1,
  IdRegistryTransfer = 2
}

export class IdRegistryEvent implements flatbuffers.IUnpackableObject<IdRegistryEventT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):IdRegistryEvent {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsIdRegistryEvent(bb:flatbuffers.ByteBuffer, obj?:IdRegistryEvent):IdRegistryEvent {
  return (obj || new IdRegistryEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsIdRegistryEvent(bb:flatbuffers.ByteBuffer, obj?:IdRegistryEvent):IdRegistryEvent {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new IdRegistryEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

blockNumber():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

blockHash(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

blockHashLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

blockHashArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

transactionHash(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

transactionHashLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

transactionHashArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

logIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

fid(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

fidLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

fidArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

to(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

toLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

toArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

type():IdRegistryEventType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : IdRegistryEventType.IdRegistryRegister;
}

from(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

fromLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

fromArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startIdRegistryEvent(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addBlockNumber(builder:flatbuffers.Builder, blockNumber:number) {
  builder.addFieldInt32(0, blockNumber, 0);
}

static addBlockHash(builder:flatbuffers.Builder, blockHashOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, blockHashOffset, 0);
}

static createBlockHashVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startBlockHashVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addTransactionHash(builder:flatbuffers.Builder, transactionHashOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, transactionHashOffset, 0);
}

static createTransactionHashVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startTransactionHashVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addLogIndex(builder:flatbuffers.Builder, logIndex:number) {
  builder.addFieldInt16(3, logIndex, 0);
}

static addFid(builder:flatbuffers.Builder, fidOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, fidOffset, 0);
}

static createFidVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFidVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addTo(builder:flatbuffers.Builder, toOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, toOffset, 0);
}

static createToVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startToVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addType(builder:flatbuffers.Builder, type:IdRegistryEventType) {
  builder.addFieldInt8(6, type, IdRegistryEventType.IdRegistryRegister);
}

static addFrom(builder:flatbuffers.Builder, fromOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, fromOffset, 0);
}

static createFromVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFromVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endIdRegistryEvent(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // block_hash
  builder.requiredField(offset, 8) // transaction_hash
  return offset;
}

static finishIdRegistryEventBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedIdRegistryEventBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createIdRegistryEvent(builder:flatbuffers.Builder, blockNumber:number, blockHashOffset:flatbuffers.Offset, transactionHashOffset:flatbuffers.Offset, logIndex:number, fidOffset:flatbuffers.Offset, toOffset:flatbuffers.Offset, type:IdRegistryEventType, fromOffset:flatbuffers.Offset):flatbuffers.Offset {
  IdRegistryEvent.startIdRegistryEvent(builder);
  IdRegistryEvent.addBlockNumber(builder, blockNumber);
  IdRegistryEvent.addBlockHash(builder, blockHashOffset);
  IdRegistryEvent.addTransactionHash(builder, transactionHashOffset);
  IdRegistryEvent.addLogIndex(builder, logIndex);
  IdRegistryEvent.addFid(builder, fidOffset);
  IdRegistryEvent.addTo(builder, toOffset);
  IdRegistryEvent.addType(builder, type);
  IdRegistryEvent.addFrom(builder, fromOffset);
  return IdRegistryEvent.endIdRegistryEvent(builder);
}

unpack(): IdRegistryEventT {
  return new IdRegistryEventT(
    this.blockNumber(),
    this.bb!.createScalarList<number>(this.blockHash.bind(this), this.blockHashLength()),
    this.bb!.createScalarList<number>(this.transactionHash.bind(this), this.transactionHashLength()),
    this.logIndex(),
    this.bb!.createScalarList<number>(this.fid.bind(this), this.fidLength()),
    this.bb!.createScalarList<number>(this.to.bind(this), this.toLength()),
    this.type(),
    this.bb!.createScalarList<number>(this.from.bind(this), this.fromLength())
  );
}


unpackTo(_o: IdRegistryEventT): void {
  _o.blockNumber = this.blockNumber();
  _o.blockHash = this.bb!.createScalarList<number>(this.blockHash.bind(this), this.blockHashLength());
  _o.transactionHash = this.bb!.createScalarList<number>(this.transactionHash.bind(this), this.transactionHashLength());
  _o.logIndex = this.logIndex();
  _o.fid = this.bb!.createScalarList<number>(this.fid.bind(this), this.fidLength());
  _o.to = this.bb!.createScalarList<number>(this.to.bind(this), this.toLength());
  _o.type = this.type();
  _o.from = this.bb!.createScalarList<number>(this.from.bind(this), this.fromLength());
}
}

export class IdRegistryEventT implements flatbuffers.IGeneratedObject {
constructor(
  public blockNumber: number = 0,
  public blockHash: (number)[] = [],
  public transactionHash: (number)[] = [],
  public logIndex: number = 0,
  public fid: (number)[] = [],
  public to: (number)[] = [],
  public type: IdRegistryEventType = IdRegistryEventType.IdRegistryRegister,
  public from: (number)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const blockHash = IdRegistryEvent.createBlockHashVector(builder, this.blockHash);
  const transactionHash = IdRegistryEvent.createTransactionHashVector(builder, this.transactionHash);
  const fid = IdRegistryEvent.createFidVector(builder, this.fid);
  const to = IdRegistryEvent.createToVector(builder, this.to);
  const from = IdRegistryEvent.createFromVector(builder, this.from);

  return IdRegistryEvent.createIdRegistryEvent(builder,
    this.blockNumber,
    blockHash,
    transactionHash,
    this.logIndex,
    fid,
    to,
    this.type,
    from
  );
}
}
