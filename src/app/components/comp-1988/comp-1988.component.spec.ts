/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1988Component } from './comp-1988.component';

describe('Comp1988Component', () => {
  let component: Comp1988Component;
  let fixture: ComponentFixture<Comp1988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
