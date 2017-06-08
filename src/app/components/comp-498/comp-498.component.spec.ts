/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp498Component } from './comp-498.component';

describe('Comp498Component', () => {
  let component: Comp498Component;
  let fixture: ComponentFixture<Comp498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
