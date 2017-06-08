/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2498Component } from './comp-2498.component';

describe('Comp2498Component', () => {
  let component: Comp2498Component;
  let fixture: ComponentFixture<Comp2498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
