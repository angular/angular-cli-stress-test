/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1659Component } from './comp-1659.component';

describe('Comp1659Component', () => {
  let component: Comp1659Component;
  let fixture: ComponentFixture<Comp1659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
