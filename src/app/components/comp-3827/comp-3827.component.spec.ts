/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3827Component } from './comp-3827.component';

describe('Comp3827Component', () => {
  let component: Comp3827Component;
  let fixture: ComponentFixture<Comp3827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
