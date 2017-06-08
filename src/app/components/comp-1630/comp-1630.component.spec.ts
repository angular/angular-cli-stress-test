/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1630Component } from './comp-1630.component';

describe('Comp1630Component', () => {
  let component: Comp1630Component;
  let fixture: ComponentFixture<Comp1630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
