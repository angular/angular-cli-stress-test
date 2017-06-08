/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3538Component } from './comp-3538.component';

describe('Comp3538Component', () => {
  let component: Comp3538Component;
  let fixture: ComponentFixture<Comp3538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
