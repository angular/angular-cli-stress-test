/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2632Component } from './comp-2632.component';

describe('Comp2632Component', () => {
  let component: Comp2632Component;
  let fixture: ComponentFixture<Comp2632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
