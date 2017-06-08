/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1007Component } from './comp-1007.component';

describe('Comp1007Component', () => {
  let component: Comp1007Component;
  let fixture: ComponentFixture<Comp1007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
