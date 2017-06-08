/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1978Component } from './comp-1978.component';

describe('Comp1978Component', () => {
  let component: Comp1978Component;
  let fixture: ComponentFixture<Comp1978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
