/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1684Component } from './comp-1684.component';

describe('Comp1684Component', () => {
  let component: Comp1684Component;
  let fixture: ComponentFixture<Comp1684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
