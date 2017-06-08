/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp292Component } from './comp-292.component';

describe('Comp292Component', () => {
  let component: Comp292Component;
  let fixture: ComponentFixture<Comp292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
