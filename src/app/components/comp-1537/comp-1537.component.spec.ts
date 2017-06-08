/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1537Component } from './comp-1537.component';

describe('Comp1537Component', () => {
  let component: Comp1537Component;
  let fixture: ComponentFixture<Comp1537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
