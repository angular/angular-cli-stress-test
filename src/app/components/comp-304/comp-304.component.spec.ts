/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp304Component } from './comp-304.component';

describe('Comp304Component', () => {
  let component: Comp304Component;
  let fixture: ComponentFixture<Comp304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
