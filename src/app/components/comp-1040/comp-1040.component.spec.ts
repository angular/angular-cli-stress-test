/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1040Component } from './comp-1040.component';

describe('Comp1040Component', () => {
  let component: Comp1040Component;
  let fixture: ComponentFixture<Comp1040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
