/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2866Component } from './comp-2866.component';

describe('Comp2866Component', () => {
  let component: Comp2866Component;
  let fixture: ComponentFixture<Comp2866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
