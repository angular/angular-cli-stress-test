/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1286Component } from './comp-1286.component';

describe('Comp1286Component', () => {
  let component: Comp1286Component;
  let fixture: ComponentFixture<Comp1286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
