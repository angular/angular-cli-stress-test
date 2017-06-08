/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2490Component } from './comp-2490.component';

describe('Comp2490Component', () => {
  let component: Comp2490Component;
  let fixture: ComponentFixture<Comp2490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
