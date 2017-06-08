/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2554Component } from './comp-2554.component';

describe('Comp2554Component', () => {
  let component: Comp2554Component;
  let fixture: ComponentFixture<Comp2554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
