/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2107Component } from './comp-2107.component';

describe('Comp2107Component', () => {
  let component: Comp2107Component;
  let fixture: ComponentFixture<Comp2107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
