/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp387Component } from './comp-387.component';

describe('Comp387Component', () => {
  let component: Comp387Component;
  let fixture: ComponentFixture<Comp387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
