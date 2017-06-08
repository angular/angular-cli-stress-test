/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4210Component } from './comp-4210.component';

describe('Comp4210Component', () => {
  let component: Comp4210Component;
  let fixture: ComponentFixture<Comp4210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
