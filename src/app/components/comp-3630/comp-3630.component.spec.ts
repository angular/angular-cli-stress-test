/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3630Component } from './comp-3630.component';

describe('Comp3630Component', () => {
  let component: Comp3630Component;
  let fixture: ComponentFixture<Comp3630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
