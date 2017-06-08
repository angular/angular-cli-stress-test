/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1945Component } from './comp-1945.component';

describe('Comp1945Component', () => {
  let component: Comp1945Component;
  let fixture: ComponentFixture<Comp1945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
