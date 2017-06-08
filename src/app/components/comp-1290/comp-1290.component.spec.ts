/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1290Component } from './comp-1290.component';

describe('Comp1290Component', () => {
  let component: Comp1290Component;
  let fixture: ComponentFixture<Comp1290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
