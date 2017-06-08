/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1958Component } from './comp-1958.component';

describe('Comp1958Component', () => {
  let component: Comp1958Component;
  let fixture: ComponentFixture<Comp1958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
