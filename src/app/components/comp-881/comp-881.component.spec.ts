/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp881Component } from './comp-881.component';

describe('Comp881Component', () => {
  let component: Comp881Component;
  let fixture: ComponentFixture<Comp881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
