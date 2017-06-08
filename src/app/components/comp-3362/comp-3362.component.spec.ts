/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3362Component } from './comp-3362.component';

describe('Comp3362Component', () => {
  let component: Comp3362Component;
  let fixture: ComponentFixture<Comp3362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
