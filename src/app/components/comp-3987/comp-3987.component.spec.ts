/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3987Component } from './comp-3987.component';

describe('Comp3987Component', () => {
  let component: Comp3987Component;
  let fixture: ComponentFixture<Comp3987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
