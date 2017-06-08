/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2754Component } from './comp-2754.component';

describe('Comp2754Component', () => {
  let component: Comp2754Component;
  let fixture: ComponentFixture<Comp2754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
