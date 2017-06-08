/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2298Component } from './comp-2298.component';

describe('Comp2298Component', () => {
  let component: Comp2298Component;
  let fixture: ComponentFixture<Comp2298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
