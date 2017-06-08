/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1109Component } from './comp-1109.component';

describe('Comp1109Component', () => {
  let component: Comp1109Component;
  let fixture: ComponentFixture<Comp1109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
