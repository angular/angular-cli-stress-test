/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1085Component } from './comp-1085.component';

describe('Comp1085Component', () => {
  let component: Comp1085Component;
  let fixture: ComponentFixture<Comp1085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
